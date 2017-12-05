<?php
define('__ARMORY__', true);
if (!isset($_GET['item_id']))
    return;
if (!include('../includes/armory_loader.php'))
    die('<b>Fatal error:</b> unable to load system files.');
include('../includes/classes/class.item.new.php');
$item = new Item();
if (!$item_data = $item->GetItemData($_GET['item_id']))
    return;
/* Just thrown together lol */
/* I'll go back and clean this all up later */
echo '<html>
<head></head>
<body>
<table cellspacing="0" cellpadding="0" border="0">
<tbody>
<tr>
<td valign="top">
<div class="myTable">
<span class="my' . $item_data['quality'] . ' myBold myItemName">
<span class="">' . $item_data['name'] . '</span>
<span class=""> </span>
</span>
<br>';
if ($item_data['heroic'])
{
    echo '<span class="bonusGreen">Heroic</span>
    <br>';
}
echo '' . $item_data['bonding'] . '
<br>
<span class="tooltipRight" style="display: inline;"></span>
' . $item_data['inventory_type'] . '
<br>
' . $item_data['armor'] . ' Armor
<br>';
foreach ($item_data['solid_stats'] as $solid_stats)
{
    echo '<span class="">' . $solid_stats . '</span>
    <br>';
}
echo '<img src="./wow-icons/_images/21x21/inv_jewelcrafting_gem_37.png" class="socketImg p">
+40 Attack Power
<br>
<span class="bonusGreen">Socket Bonus: +4 Agility</span>
<br>
Requires Level ' . $item_data['required_level'] . '
<br>
Item Level ' . $item_data['item_level'] . '
<br>';
foreach ($item_data['soft_stats'] as $soft_stats)
{
   echo '<span class="bonusGreen">
   <span class="">' . $soft_stats . '</span>
   </span>
   <br>';
}
echo '<br>';
var_dump($item_data);
?>