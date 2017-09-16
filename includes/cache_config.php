<?php
##############################################################################################
#
# This file allows you to tweak your cache TTL times to better suit your server
# All TTL times are in seconds
#
# 0     = Never expires (until apache restarts, or removed manually)
# <= 1  = TTL (in seconds, time until value is purged from memory and needs to be refreshed)
#
##############################################################################################

$cacheConfig['rating']                 = 0;
$cacheConfig['armory-strings']         = 0;
$cacheConfig['race-model-data']        = 0;
$cacheConfig['realm-firsts']           = 3600;
?>