<?php
//@TODO: Convert all strings to DB when adding translations
class Item
{
    /* Data stores */
    private $item_template_data = array();
    public function GetItemData($itemID)
    {
        $this->item_template_data = Armory::$wDB->SelectRow("SELECT name, Quality, bonding, armor, class, delay, dmg_min1, dmg_max1, InventoryType, Flags, maxcount, description,
                ItemLevel, stat_type1, stat_value1, stat_type2, stat_value2, stat_type3, stat_value3, stat_type4, stat_value4, stat_type5,
                stat_value5, stat_type6, stat_value6, stat_type7, stat_value7, stat_type8, stat_value8, stat_type9, stat_value9, stat_type10,
                stat_value10, RequiredLevel FROM item_template WHERE entry='%d'", $itemID);
        if (!$this->item_template_data)
            return false;
        $item_tooltip['name'] = $this->item_template_data['name'];
        $item_tooltip['quality'] = $this->GetItemQuality($this->item_template_data['Quality']);
        $item_tooltip['bonding'] = $this->GetItemBonding($this->item_template_data['bonding']);
        $item_tooltip['armor'] = $this->item_template_data['armor'];
        $item_tooltip['speed'] = ($this->item_template_data['class'] == 2) ? sprintf("%03.2f", ($this->item_template_data['delay'] / 1000)) : "";
        $item_tooltip['damage']['min'] = $this->item_template_data['dmg_min1'];
        $item_tooltip['damage']['max'] = $this->item_template_data['dmg_max1'];
        $item_tooltip['damage']['dps'] = (($delay = $this->item_template_data['delay'] / 1000) > 0) ? round(($this->item_template_data['dmg_max1'] + $this->item_template_data['dmg_min1']) / (2 * $delay), 1) : "";
        $item_tooltip['inventory_type'] = $this->GetItemInventoryType($this->item_template_data['InventoryType']);
        $item_tooltip['heroic'] = ($this->item_template_data['Flags'] & 8) ? 1 : 0;
        $item_tooltip['unique'] = $this->GetItemUnique($this->item_template_data['Flags'], $this->item_template_data['maxcount']);
        $item_tooltip['description'] = $this->item_template_data['description'];
        $item_tooltip['item_level'] = $this->item_template_data['ItemLevel'];
        $item_tooltip['required_level'] = $this->item_template_data['RequiredLevel'];
        // Item stats
        for ($i = 1; $i <= 10; $i++)
        {
            $stats[$i]['stat_type'] = $this->item_template_data['stat_type' . $i];
            $stats[$i]['stat_value'] = $this->item_template_data['stat_value' . $i];
        }
        $i = 1;
        $u = 1;
        foreach ($stats as $data)
        {
            if ($data['stat_value'] == 0)
                continue;
            if ($data['stat_type'] <= 7)
                $item_tooltip['solid_stats'][$i++] = $this->GetItemStat($data);
            else
                $item_tooltip['soft_stats'][$u++] = $this->GetItemStat($data);
        }
        return $item_tooltip;
    }
    private function GetItemQuality($quality)
    {
        switch ($quality)
        {
            /*case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:*/
            default:
                return 'Purple';
        }
    }
    private function GetItemBonding($bondingId)
    {
        switch ($bondingId)
        {
            case 1:
                $bonding = 'Binds when picked up';
                break;
            case 2:
                $bonding = 'Binds when equipped';
                break;
            case 3:
                $bonding = 'Binds when used';
                break;
            case 4:
            case 5:
                $bonding = 'Quest item';
                break;
            default:
                $bonding = 'UNKNOWN: ID:' . $bondingId . ' (' . __METHOD__ . ')';
                break;
        }
        return $bonding;
    }
    private function GetItemInventoryType($InvType)
    {
        switch ($InvType)
        {
            case 1:
                $inventoryType = "Head";
                break;
            case 2:
                $inventoryType = "Neck";
                break;
            case 3:
                $inventoryType = "Shoulder";
                break;
            case 4:
                $inventoryType = "Shirt";
                break;
            case 5:
                $inventoryType = "Chest";
                break;
            case 6:
                $inventoryType = "Waist";
                break;
            case 7:
                $inventoryType = "Legs";
                break;
            case 8:
                $inventoryType = "Feet";
                break;
            case 9:
                $inventoryType = "Wrist";
                break;
            case 10:
                $inventoryType = "Hands";
                break;
            case 11:
                $inventoryType = "Finger";
                break;
            case 12:
                $inventoryType = "Trinket";
                break;
            case 13:
                $inventoryType = "One-Hand";
                break;
            case 14:
                $inventoryType = "Shield";
                break;
            case 15:
                $inventoryType = "Ranged";
                break;
            case 16:
                $inventoryType = "Back";
                break;
            case 17:
                $inventoryType = "Two-Hand";
                break;
            case 19:
                $inventoryType = "Tabard";
                break;
            case 20:
                $inventoryType = "Chest";
                break;
            case 21:
                $inventoryType = "Main hand";
                break;
            case 22:
                $inventoryType = "Off hand";
                break;
            case 23:
                $inventoryType = "Held In Off-hand";
                break;
            case 25:
                $inventoryType = "Thrown";
                break;
            case 26:
                $inventoryType = "Ranged";
                break;
            case 28:
                $inventoryType = "Relic";
                break;
            default:
                $inventoryType = "UNKNOWN: ID: " . $InvType . ' (' . __METHOD__ . ')';
                break;
        }
        return $inventoryType;
    }
    private function GetItemUnique($flags, $maxCount)
    {
        if ($flags & 524288)
            $unique = 'Unique-Equipped';
        else if ($maxCount == 1)
            $unique = 'Unique';
        else
            $unique = "false";
        return $unique;
    }
    private function GetItemStat($data)
    {
        switch ($data['stat_type'])
        {
            case 0:
                $stat = "+" . $data['stat_value'] . " Mana";
                break;
            case 1:
                $stat = "+" . $data['stat_value'] . " Health";
                break;
            case 3:
                $stat = "+" . $data['stat_value'] . " Agility";
                break;
            case 4:
                $stat = "+" . $data['stat_value'] . " Strength";
                break;
            case 5:
                $stat = "+" . $data['stat_value'] . " Intellect";
                break;
            case 6:
                $stat = "+" . $data['stat_value'] . " Spirit";
                break;
            case 7:
                $stat = "+" . $data['stat_value'] . " Stamina";
                break;
            case 12:
                $stat = 'Equip: Increases defense rating by ' . $data['stat_value'];
                break;
            case 14:
                $stat = 'Equip: Increases your parry rating by ' . $data['stat_value'];
                break;
            case 31:
                $stat = 'Equip: Improves hit rating by ' . $data['stat_value'];
                break;
            case 32:
                $stat = 'Equip: Improves critical strike rating by ' . $data['stat_value'];
                break;
            case 35:
                $stat = 'Equip: Improves your resilience rating by ' . $data['stat_value'];
                break;
            case 36:
                $stat = 'Equip: Improves haste rating by ' . $data['stat_value'];
                break;
            case 37:
                $stat = 'Equip: Increases your expertise rating by ' . $data['stat_value'];
                break;
            case 38:
                $stat = 'Equip: Increases attack power by ' . $data['stat_value'];
                break;
            case 43:
                $stat = 'Equip: Restores ' . $data['stat_value'] . ' mana per 5 sec.</span>';
                break;
            case 44:
                $stat = 'Equip: Increases your armor penetration rating by ' . $data['stat_value'];
                break;
            case 45:
                $stat = 'Equip: Increases spell power by ' . $data['stat_value'];
                break;
            case 47:
                $stat = 'Equip: Increases spell penetration by ' . $data['stat_value'];
                break;
            default:
                $stat = 'UNKNOWN: Type: ' . $data['stat_type'] . ' Value: ' . $data['stat_value'] . ' (' . __METHOD__ . ')';
                break;
        }
        return $stat;
    }
}
?>