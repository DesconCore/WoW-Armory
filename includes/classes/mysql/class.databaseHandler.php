<?php
class QueryType
{
    const SINGLE_CELL    = 0x01;
    const SINGLE_ROW     = 0x02;
    const MULTIPLY_ROW   = 0x03;
    const SQL_QUERY      = 0x04;
    const OBJECT_QUERY   = 0x05;
    const SQL_RAW_QUERY  = 0x06;
}

abstract class mainDb
{
    public $connectionLink = null;
    public $dbLink = null;
    public $queryCount = 0;
    public $queryTimeGeneration = 0;
    public $disableNextError = false;
    public $armory_prefix = null;
    public $connected = false;

    abstract protected function Connect($host, $user, $password, $port, $dbName, $charset, $prefix);
    abstract protected function _query($safe_sql, $queryType);
    abstract protected function SanitizeString($string);

    public function selectCell($query)
    {
        $funcArgs = func_get_args();
        $numArgs = func_num_args();
        return $this->_prepareQuery($funcArgs, $numArgs, QueryType::SINGLE_CELL);
    }

    public function selectRow($query)
    {
        $funcArgs = func_get_args();
        $numArgs = func_num_args();
        return $this->_prepareQuery($funcArgs, $numArgs, QueryType::SINGLE_ROW);
    }

    public function select($query)
    {
        $funcArgs = func_get_args();
        $numArgs = func_num_args();
        return $this->_prepareQuery($funcArgs, $numArgs, QueryType::MULTIPLY_ROW);
    }

    public function query($query)
    {
        $funcArgs = func_get_args();
        $numArgs = func_num_args();
        return $this->_prepareQuery($funcArgs, $numArgs, QueryType::SQL_QUERY);
    }

    public function RawQuery($query)
    {
        $funcArgs = func_get_args();
        $numArgs = func_num_args();
        return $this->_prepareQuery($funcArgs, $numArgs, QueryType::SQL_RAW_QUERY);
    }

    public function selectObject($query)
    {
        $funcArgs = func_get_args();
        $numArgs = func_num_args();
        return $this->_prepareQuery($funcArgs, $numArgs, QueryType::OBJECT_QUERY);
    }

    public function SkipNextError()
    {
        $this->disableNextError = true;
    }

    public function TestLink()
    {
        return $this->connected;
    }

    private function _prepareQuery($funcArgs, $numArgs, $query_type)
    {
        // funcArgs[0] - SQL query text (with placeholders)
        if ($query_type != QueryType::SQL_RAW_QUERY)
        {
            for ($i = 1; $i < $numArgs; $i++)
            {
                if (is_string($funcArgs[$i]))
                    $funcArgs[$i] = $this->SanitizeString($funcArgs[$i]);
                if (is_array($funcArgs[$i]))
                    $funcArgs[$i] = $this->ConvertArray($funcArgs[$i]);
            }
            $safe_sql = call_user_func_array('sprintf', $funcArgs);
            if (preg_match('/ARMORYDBPREFIX/', $safe_sql))
            {
                if ($this->armory_prefix == null)
                {
                    Armory::Log()->writeError('%s : fatal error: armory database prefix is not defined, unable to execute SQL query (%s)!', __METHOD__, $safe_sql);
                    return false;
                }
                $safe_sql = str_replace('ARMORYDBPREFIX', $this->armory_prefix, $safe_sql);
            }
            return $this->_query($safe_sql, $query_type);
        }
    }

    protected function ConvertArray($source)
    {
        if (!is_array($source))
        {
            Armory::Log()->writeError('%s : source must have array type!', __METHOD__);
            return null;
        }
        $returnString = null;
        $count = count($source);
        for ($i = 0; $i < $count; $i++)
        {
            if (!isset($source[$i]))
                continue;

            if ($i)
                $returnString .= ", '" . $this->SanitizeString($source[$i]) . "'";
            else
                $returnString .= "'" . $this->SanitizeString($source[$i]) . "'";
        }
        return $returnString;
    }
}
?>