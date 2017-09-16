<?php
interface iCache
{
    public function store($key, $value, $ttl);
    public function fetch($key);
    public function exists($key);
    public function isEnabled();
}
?>