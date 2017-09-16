/*******            Resistances         ******/
var arcaneTooltip = '<span class="tooltipTitle">奥术抗性 '+ theCharacter.resistances.arcane.value + theCharacter.resistances.arcane.breakdown +'</span><span class="tooltipContentSpecial">Erhöht die Fähigkeit, auf Arkanschaden basierenden Angriffen, Zaubern und Fähigkeiten zu widerstehen.<br/>Widerstand gegen Stufe '+ theCharacter.level +': <span class="myWhite">'+ theCharacter.resistances.arcane.rank +'</span></span>';
var arcanePetBonus = "<span class = 'tooltipContentSpecial'>提高宠物抗性 "+ theCharacter.resistances.arcane.petBonus + "</span>";

var fireTooltip = '<span class="tooltipTitle">火焰抗性 '+ theCharacter.resistances.fire.value + theCharacter.resistances.fire.breakdown +'</span><span class = "tooltipContentSpecial">Erhöht die Fähigkeit, auf Feuerschaden basierenden Angriffen, Zaubern und Fähigkeiten zu widerstehen.<br/>Widerstand gegen Stufe '+ theCharacter.level +': <span class="myWhite">'+ theCharacter.resistances.fire.rank +'</span></span>';
var firePetBonus = "<span class = 'tooltipContentSpecial'>提高宠物抗性 "+ theCharacter.resistances.arcane.petBonus + "</span>";

var natureTooltip = '<span class="tooltipTitle">自然抗性 '+ theCharacter.resistances.nature.value + theCharacter.resistances.nature.breakdown +'</span><span class = "tooltipContentSpecial">Erhöht die Fähigkeit, auf Naturschaden basierenden Angriffen, Zaubern und Fähigkeiten zu widerstehen.<br/>Widerstand gegen Stufe '+ theCharacter.level +': <span class="myWhite">'+ theCharacter.resistances.nature.rank +'</span></span>';
var naturePetBonus = "<span class = 'tooltipContentSpecial'>提高宠物抗性 "+ theCharacter.resistances.arcane.petBonus + "</span>";

var frostTooltip = '<span class="tooltipTitle">冰霜抗性 '+ theCharacter.resistances.frost.value + theCharacter.resistances.frost.breakdown +'</span><span class = "tooltipContentSpecial">Erhöht die Fähigkeit, auf Frostschaden basierenden Angriffen, Zaubern und Fähigkeiten zu widerstehen.<br/>Widerstand gegen Stufe '+ theCharacter.level +': <span class="myWhite">'+ theCharacter.resistances.frost.rank +'</span></span>'
var frostPetBonus = "<span class = 'tooltipContentSpecial'>提高宠物抗性 "+ theCharacter.resistances.arcane.petBonus + "</span>";

var shadowTooltip = '<span class="tooltipTitle">暗影抗性 '+ theCharacter.resistances.shadow.value + theCharacter.resistances.shadow.breakdown +'</span><span class = "tooltipContentSpecial">Erhöht die Fähigkeit, auf Schattenschaden basierenden Angriffen, Zaubern und Fähigkeiten zu widerstehen.<br/>Widerstand gegen Stufe '+ theCharacter.level +': <span class="myWhite">'+ theCharacter.resistances.shadow.rank +'</span></span>';
var shadowPetBonus = "<span class = 'tooltipContentSpecial'>提高宠物抗性 "+ theCharacter.resistances.arcane.petBonus + "</span>";

/*******            Resistances End       ******/


/*******            Base Stats       ******/

var baseStatsDisplay = "基础属性";

var baseStatsStrengthTitle = "力量 ";
var baseStatsStrengthAttack = "攻击强度提高 "+theCharacter.baseStats.strength.attack;
var baseStatsStrengthBlock = "格挡值提高"+theCharacter.baseStats.strength.block+" <br/>";
var baseStatsStrengthDisplay = "力量: ";

var baseStatsAgilityTitle = "敏捷 ";
var baseStatsAgilityAttack = "攻击强度提高 "+theCharacter.baseStats.agility.attack;
var baseStatsAgilityCritHitPercent = "增加暴击几率 "+ theCharacter.baseStats.agility.critHitPercent +"%";
var baseStatsAgilityArmor = "提高护甲 "+ theCharacter.baseStats.agility.armor;
var baseStatsAgilityDisplay = "敏捷: ";

var baseStatsStaminaTitle = "耐力 ";
var baseStatsStaminaHealth = "生命值提高 "+ theCharacter.baseStats.stamina.health;
var baseStatsStaminaPetBonus = "宠物生命值提高 "+ theCharacter.baseStats.stamina.petBonus;
var baseStatsStaminaDisplay = "耐力: ";

var baseStatsIntellectTitle = "智力 ";
var baseStatsIntellectMana = "法力值提高 "+ theCharacter.baseStats.intellect.mana;
var baseStatsIntellectCritHitPercent = "提高暴击的几率 "+ theCharacter.baseStats.intellect.critHitPercent + "%";
var baseStatsIntellectPetBonus = "宠物的智力提高 "+ theCharacter.baseStats.intellect.petBonus;
var baseStatsIntellectDisplay = "智力: ";

var baseStatsSpiritTitle = "精神 ";
var baseStatsSpiritHealthRegen = "非战斗状态下每秒恢复 "+ theCharacter.baseStats.spirit.healthRegen +" 点生命";
var baseStatsSpiritManaRegen = "非施法状态下每 5 秒恢复 "+ theCharacter.baseStats.spirit.manaRegen +" 点法力";
var baseStatsSpiritDisplay = "精神: ";

var baseStatsArmorTitle = "护甲 ";
var baseStatsArmorReductionPercent = "使受到的物理伤害降低 "+ theCharacter.baseStats.armor.reductionPercent +"%";
var baseStatsArmorPetBonus = "宠物的护甲增加 "+ theCharacter.baseStats.armor.petBonus;
var baseStatsArmorDisplay = "护甲: ";

/*******            Base Stats  End     ******/


/*******            Melee     ******/

var meleeDisplay = "近战";

var meleeMainHandTitle = "主手";
var meleeOffHandTitle = "副手";

var meleeExpertiseTitle = "熟练 "+ theCharacter.melee.weaponSkill.mainHandWeaponSkill.rating;
var meleeMainHandWeaponSkill = "使你的攻击被目标闪躲或招架的几率降低 "+ theCharacter.melee.weaponSkill.mainHandWeaponSkill.percent + "%";
var meleeMainHandWeaponRating = "熟练等级 "+ theCharacter.melee.weaponSkill.mainHandWeaponSkill.value + " 点(+"+ theCharacter.melee.weaponSkill.mainHandWeaponSkill.additional +" 熟练技能)";
/*var meleeOffHandWeaponSkill = "Waffenfertigkeit "+ theCharacter.melee.weaponSkill.offHandWeaponSkill.value;
var meleeOffHandWeaponRating = "Waffenfertigkeitswertung "+ theCharacter.melee.weaponSkill.offHandWeaponSkill.rating;*/
var meleeWeaponSkillDisplay = "熟练: ";

var meleeDamageMainHandAttackSpeed = "<span class='floatRight'>"+ theCharacter.melee.damage.mainHandDamage.speed +"</span>攻击速度（秒）:<br/>";
var meleeDamageMainHandDamage = "<span class='floatRight'>"+ theCharacter.melee.damage.mainHandDamage.min +" - "+ theCharacter.melee.damage.mainHandDamage.max;
var meleeDamageMainHandPercent = " <span "+ theCharacter.melee.damage.mainHandDamage.effectiveColor +"> x "+ theCharacter.melee.damage.mainHandDamage.percent +"%</span>";
var meleeDamageDisplay = "伤害: ";

var meleeDamageMainHandDps = "<span class='floatRight'>"+ theCharacter.melee.damage.mainHandDamage.dps +"</span>每秒伤害:";
var meleeDamageOffHandAttackSpeed = "<span class='floatRight'>"+ theCharacter.melee.damage.offHandDamage.speed +"</span>攻击速度（秒）:<br/>";
var meleeDamageOffHandDamage = "<span class='floatRight'>"+ theCharacter.melee.damage.offHandDamage.min +" - "+ theCharacter.melee.damage.offHandDamage.max;
var meleeDamageOffHandPercent = " <span "+ theCharacter.melee.damage.mainHandDamage.effectiveColor +"> x "+ theCharacter.melee.damage.offHandDamage.percent +"%</span>";
var meleeDamageOffHandDps = "<span class='floatRight'>"+ theCharacter.melee.damage.offHandDamage.dps +"</span>每秒伤害：<br/>";

var meleeSpeedTitle = "攻击速度 ";
var meleeSpeedHaste = "加速等级 "+ theCharacter.melee.speed.mainHandSpeed.hasteRating +" ("+theCharacter.melee.speed.mainHandSpeed.hastePercent+"% 加速)";
var meleeSpeedDisplay = "速度: ";

var meleePowerTitle = "近战攻击强度 ";
var meleePowerIncreasedDps = "使近战武器的每秒伤害提高 "+ theCharacter.melee.power.increasedDps +" 点。";
var meleePowerDisplay = "强度: ";

var meleeHitRatingTitle = "命中等级 ";
var meleeHitRatingIncreasedHitPercent = "使你的近战攻击击中等级 "+ theCharacter.level +" 目标的几率提高 "+theCharacter.melee.hitRating.increasedHitPercent +"% <br/>护甲穿透等级 " + theCharacter.melee.hitRating.armorPenetration + " 点(降低敌人最多 " + theCharacter.melee.hitRating.reducedArmorPercent + "%护甲值)。";
var meleeHitRatingDisplay = "命中等级: ";

var meleeCritChanceTitle = "暴击 ";
var meleeCritChanceRating = "暴击 "+theCharacter.melee.critChance.rating+" (+"+theCharacter.melee.critChance.plusPercent+"% 暴击率)";
var meleeCritChanceDisplay = "暴击: ";

/*******            Melee  End     ******/


/*******            Ranged     ******/

var rangedDisplay = "远程";
var rangedWeaponSkillTitle = "远程武器技能 ";
var rangedWeaponSkillRating = "远程武器技能 "+ theCharacter.ranged.weaponSkill.rating;
var rangedWeaponSkillDisplay = "远程武器技能: ";

var rangedDamageTitle = "远程";
var rangedDamageSpeed = "<span class='floatRight'>"+ theCharacter.ranged.damage.speed +"</span>攻击速度（秒）:<br/>";
var rangedDamageDamage = "<span class='floatRight'>"+ theCharacter.ranged.damage.min +" - "+ theCharacter.ranged.damage.max;
var rangedDamageDamagePercent = " <span "+ theCharacter.ranged.damage.effectiveColor +"> x "+ theCharacter.ranged.damage.percent +"%</span><br/>";
var rangedDamageDisplay = "伤害: ";
var rangedDamageDps = "<span class='floatRight'>"+ theCharacter.ranged.damage.dps +"</span>没秒伤害:";

var rangedSpeedTitle = "攻击速度 "+theCharacter.ranged.speed.value;
var rangedSpeedHaste = "加速等级 "+ theCharacter.ranged.speed.hasteRating +" ("+theCharacter.ranged.speed.hastePercent+"% 加速)";
var rangedSpeedDisplay = "速度: ";

var rangedPowerTitle = "远程攻击强度 ";
var rangedPowerIncreasedDps = "使远程武器的每秒伤害提高 "+ theCharacter.ranged.power.increasedDps +" 点";
var rangedPowerPetAttack = "宠物攻击强度提高 "+ theCharacter.ranged.power.petAttack;
var rangedPowerPetSpell = "宠物法术伤害 "+ theCharacter.ranged.power.petSpell;
var rangedPowerDisplay = "强度: ";

var rangedHitRatingTitle = "命中等级 ";
var rangedHitRatingIncreasedPercent = "使你的远程攻击击中等级 "+ theCharacter.level +" 目标的几率提高 "+theCharacter.ranged.hitRating.increasedHitPercent +"% <br/>护甲穿透等级 " + theCharacter.ranged.hitRating.armorPenetration + " 点(降低敌人最多 " + theCharacter.ranged.hitRating.reducedArmorPercent + "% 护甲值)。";
var rangedHitRatingDisplay = "命中等级: ";

var rangedCritChanceTitle = "暴击 ";
var rangedCritChanceRating = "暴击 "+theCharacter.ranged.critChance.rating+" (+"+theCharacter.ranged.critChance.plusPercent+"% 暴击率)";
var rangedCritChanceDisplay = "暴击: ";

/*******            Ranged  End     ******/


/*******            Spell     ******/

var spellDisplay = "法术";
var spellBonusDamageTitle = "伤害加成 ";
var spellBonusDamagePetBonusFire = "<br />你的火焰伤害使你的宠物攻击强度提高 "+theCharacter.spell.bonusDamage.petBonusAttack +"点<br />及法术伤害提高 "+theCharacter.spell.bonusDamage.petBonusDamage +"点<br/>";
var spellBonusDamagePetBonusShadow = "<br />你的暗影伤害使你的宠物攻击强度提高 "+theCharacter.spell.bonusDamage.petBonusAttack +"点<br />及法术伤害提高 "+theCharacter.spell.bonusDamage.petBonusDamage +"点<br/>";
var spellBonusDamageDisplay = "伤害加成: ";

var spellBonusHealingTitle = "治疗加成 ";
var spellBonusHealingValue = "治疗效果提高 "+theCharacter.spell.bonusHealing.value;
var spellBonusHealingDisplay = "治疗加成: ";

var spellHitRatingTitle = "命中等级 ";
var spellHitRatingIncreasedPercent = "提高对 "+ theCharacter.level +" 级目标的施法命中几率 "+theCharacter.spell.hitRating.increasedHitPercent +"%";
var spellHitRatingDisplay = "命中: ";

var spellCritChanceTitle = "暴击等级 ";
var spellCritChanceDisplay = "暴击: ";

var spellHasteRatingTitle = "急速等级 ";
var spellHasteRatingDisplay = "急速: ";
var spellHasteRatingTooltip = "施法速度提高 " + theCharacter.spell.hasteRating.percent + "%.";

var spellPenetrationTitle = "穿透 ";
var spellPenetrationTooltip = "<br />法术穿透 " + theCharacter.spell.hitRating.spellPenetration + " (降低目标抗性 " + theCharacter.spell.hitRating.spellPenetration + ")";
var spellPenetrationDisplay = "穿透: ";

var spellManaRegenTitle = "法力恢复 ";
var spellManaRegenNotCasting = "非战斗状态下每 5 秒恢复 "+ theCharacter.spell.manaRegen.notCasting +" 点法力";
var spellManaRegenCasting = "战斗状态下每 5 秒恢复 "+ theCharacter.spell.manaRegen.casting +" 点法力";
var spellManaRegenDisplay = "法力恢复: ";

/*******            Spell  End     ******/

/*******            Defenses     ******/

var defensesDisplay = "防御";

var defensesDefenseTitle = "防御 ";
var defensesDefenseRating = "防御等级 "+ theCharacter.defenses.defense.rating +" (+"+ theCharacter.defenses.defense.plusDefense +" 防御)";
var defensesDefenseIncreasePercent = "提高闪躲、格挡和招架几率 "+ theCharacter.defenses.defense.increasePercent +"%";
var defensesDefenseDecreasePercent = "降低被击中和暴击的几率 "+ theCharacter.defenses.defense.decreasePercent +"%" + "<br/>" + beforeDiminishingReturns;
var defensesDefenseDisplay = "防御: ";

var defensesDodgeTitle = "闪躲几率 ";
var defensesDodgePercent = "闪躲几率提高 "+ theCharacter.defenses.dodge.increasePercent +"%" + "<br/>" + beforeDiminishingReturns;
var defensesDodgeDisplay = "闪躲: ";

var defensesParryTitle = "招架 ";
var defensesParryPercent = "招架几率提高 "+ theCharacter.defenses.parry.increasePercent +"%" + "<br/>" + beforeDiminishingReturns;
var defensesParryDisplay ="招架: ";

var defensesBlockTitle = "格挡 ";
var defensesBlockPercent = "格挡几率提高 "+ theCharacter.defenses.block.increasePercent +"%" + "<br/>" + beforeDiminishingReturns;
var defensesBlockDisplay = "格挡: ";

var defensesResilienceTitle = "韧性 ";
var defensesResilienceHitPercent = "受到致命一击的几率降低 "+ theCharacter.defenses.resilience.hitPercent +"%。";
var defensesResilienceDamagePercent = "玩家与其宠物或仆从对你所造成的所有伤害额外降低 "+ theCharacter.defenses.resilience.damagePercent +"%。";
var defensesResilienceDisplay = "韧性: ";

/*******            Defenses  End     ******/

var textNA = "N/A";
var textNotApplicable = "不适用";

var textHoly = "神圣";
var textFire = "火焰";
var textNature = "自然";
var textFrost = "冰霜";
var textShadow = "暗影";
var textArcane = "奥术";

var textHybrid = "混合";
var textUntalented = "无天赋专精";

var textRating = "等级 ";
var textNotRanked = "无等级 ";
var textStandingColon = "上周等级:";
var textRatingColon = "等级:";
var text2v2Arena = "竞技场 2v2";
var text3v3Arena = "竞技场 3v3";
var text5v5Arena = "竞技场 5v5";
var textTeamNameColon = "队伍名称:";

var textFindUpgrade = "查找升级";

var textLoading = "载入中...";


var textHead = "头部";
var textNeck = "颈部";
var textShoulders = "肩膀";
var textBack = "背部";
var textChest = "胸部";
var textShirt = "衬衣";
var textTabard = "战袍";
var textWrists = "手腕";
var textHands = "手部";
var textWaist = "腰部";
var textLegs = "腿部";
var textFeet = "脚";
var textFinger = "戒指";
var textTrinket = "饰品";
var textMainHand = "主手";
var textOffHand = "副手";
var textRanged = "远程武器";
var textRelic = "圣物";
jsLoaded=true;