<?php
class mysqlClient extends mainDb
{
    public function __construct($host, $user, $password, $port, $dbName, $charset = null, $prefix = null)
    {
        $this->Connect($host, $user, $password, $port, $dbName, $charset, $prefix);
    }

    public function Connect($host, $user, $password, $port, $dbName, $charset, $prefix)
    {
        $this->connectionLink = mysql_connect($host . ':' . $port, $user, $password, true);
        if (!$this->connectionLink)
        {
            die(sprintf('%s : unable to connect to MySQL Server (host: "%s", dbName: "%s"). Error: %s. Check your configs.', __METHOD__, $host, $dbName, mysql_error($this->connectionLink) ? mysql_error($this->connectionLink) : 'none'));
            return false;
        }
        $this->dbLink = mysql_select_db($dbName, $this->connectionLink);
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
        $performed_query = mysql_query($safe_sql, $this->connectionLink);
        if (!$performed_query)
        {
            if (!$this->disableNextError)
                Armory::Log()->writeLog('%s : unable to execute SQL query (%s). MySQL error: %s', __METHOD__, $safe_sql, mysql_error($this->connectionLink) ? sprintf('"%s" (Error #%d)', mysql_error($this->connectionLink), mysql_errno($this->connectionLink)) : 'none');
            if ($this->disableNextError)
                $this->disableNextError = false;

            return false;
        }
        $result = false;
        switch ($queryType)
        {
            case QueryType::SINGLE_CELL:
                $row = mysql_fetch_row($performed_query);
                $result = $row[0];
                break;
            case QueryType::SINGLE_ROW:
                $result = mysql_fetch_assoc($performed_query);
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
                while ($_result = mysql_fetch_assoc($performed_query))
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
                while ($_result = mysql_fetch_object($performed_query))
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
        return stripslashes(mysql_real_escape_string($string, $this->connectionLink));
    }
}
?>