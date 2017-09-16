<?php
class ApcCache implements iCache
{
    public function store($key, $value, $ttl)
    {
        if (Armory::$armoryconfig['useApc'] == false)
            return;

        apc_store(md5(Armory::$armoryconfig['cachePrefix'] . '_' . $key), serialize($value), $ttl);
    }

    public function fetch($key)
    {
        if (Armory::$armoryconfig['useApc'] == false)
            return false;

        return unserialize(apc_fetch(md5(Armory::$armoryconfig['cachePrefix'] . '_' . $key)));
    }

    public function exists($key)
    {
        if (Armory::$armoryconfig['useApc'] == false)
            return false;

        return apc_exists(md5(Armory::$armoryconfig['cachePrefix'] . '_' . $key));
    }

    public function isEnabled()
    {
        if (Armory::$armoryconfig['useApc'] == true)
            return true;
        else
            return false;
    }
}
?>