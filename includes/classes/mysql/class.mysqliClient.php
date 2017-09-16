<?php
class mysqliClient extends mainDb
{
    public function __construct($host, $user, $password, $port, $dbName, $charset = null, $prefix = null)
    {
        $this->Connect($host, $user, $password, $port, $dbName, $charset, $prefix);
    }

    public function Connect($host, $user, $password, $port, $dbName, $charset, $prefix)
    {
        $this->connectionLink = new mysqli($host, $user, $password, $dbName, $port);

        if ($this->connectionLink->connect_error)
        {
            die(sprintf('%s : unable to connect to MySQL Server (host: "%s", dbName: "%s"). Error: %s. Check your configs.', __METHOD__, $host, $dbName, $this->connectionLink->connect_error ? $this->connectionLink->connect_error : 'none'));
            return false;
        }
        $this->dbLink = $this->connectionLink->select_db($dbName);
        if (!$this->dbLink)
        {
            die(sprintf('%s : unable to switch to database "%s"!', __METHOD__, $dbName));
            return false;
        }
        ($charset == null) ? $this->query("SET NAMES UTF8") : $this->query("SET NAMES %s", $charset);
        $this->armory_prefix = $prefix;
        $this->connected = true;
        return true;
    }

    protected function _query($safe_sql, $queryType)
    {
        // Execute query and calculate execution time
        $make_array = array();
        $query_start = microtime(true);
        $this->queryCount++;
        $performed_query = $this->connectionLink->query($safe_sql);
        if (!$performed_query)
        {
            if (!$this->disableNextError)
                Armory::Log()->writeLog('%s : unable to execute SQL query (%s). MySQL error: %s', __METHOD__, $safe_sql, $this->connectionLink->error ? sprintf('"%s" (Error #%d)', $this->connectionLink->error, $this->connectionLink->errno) : 'none');
            if ($this->disableNextError)
                $this->disableNextError = false;

            return false;
        }
        $result = false;
        switch ($queryType)
        {
            case QueryType::SINGLE_CELL:
                $performed_query->data_seek(0);
                $row = $performed_query->fetch_row();
                $result = $row[0];
                break;
            case QueryType::SINGLE_ROW:
                $result = $performed_query->fetch_assoc();
                if (is_array($result))
                {
                    foreach ($result as $rKey => $rValue)
                    {
                        if (is_string($rKey))
                            $make_array[$rKey] = $rValue;
                    }
                    $result = $make_array;
                }
                break;
            case QueryType::MULTIPLY_ROW:
                $result = array();
                while ($_result = $performed_query->fetch_assoc())
                {
                    if (is_array($_result))
                    {
                        foreach ($_result as $rKey => $rValue)
                        {
                            if (is_string($rKey))
                                $make_array[$rKey] = $rValue;
                        }
                        $result[] = $make_array;
                    }
                    else
                        $result[] = $_result;
                }
                break;
            case QueryType::OBJECT_QUERY:
                $result = array();
                while ($_result = $performed_query->fetch_object())
                    $result[] = $_result;
                break;
            case QueryType::SQL_QUERY:
                $result = true;
                break;
            default:
                $result = false;
                break;
        }
        $query_end = microtime(true);
        $queryTime = round($query_end - $query_start, 4);
        Armory::Log()->writeSql('[%s ms]: %s', $queryTime, $safe_sql);
        $this->queryTimeGeneration += $queryTime;
        return $result;
    }

    protected function SanitizeString($string)
    {
        return stripslashes($this->connectionLink->real_escape_string($string));
    }
}
?>