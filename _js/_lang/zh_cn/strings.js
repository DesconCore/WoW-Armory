var textNone = "没有选择配置文件";
var textLearnMore = "更多信息"
var textLearnMoreHover = "While viewing a character profile, click the small pin in the upper right of this window to pin the profile, thereby saving it to the window.";

var textClickPin = "Click here to pin this profile.";
var tClickPinBreak = "Click here to<br />Pin this Profile";
var textViewProfile = "查看档案";

var textSearchTheArmory = "搜索英雄榜";

var textArmory = "英雄榜";
var textSelectCategory = "--选择类别--";
var textArenaTeams = "竞技场队伍";
var textCharacters = "人物";
var textGuilds = "公会";
var textItems = "物品";

var textEnterGuildName = "输入公会名字";
var textEnterCharacterName = "输入人物名字";
var textEnterTeamName = "输入队伍名字";

var textVs2 = "2v2";
var textVs3 = "3v3";
var textVs5 = "5v5";

var textCurrentlyEquipped = "<span class = 'myGray'>当前装备</span>";

var beforeDiminishingReturns = "<span class = 'myGray'>(在收益效果递减前)</span>";

var textPoor = "劣质";
var textFair = "普通";
var textGood = "好";
var textVeryGood = "优异";
var textExcellent = "极品";

var tStwoChar = "搜索表达式至少有2个字符。";
var tScat = "请选择一个类别。";
var tSearchAll = "搜索全部 ";

	var textHideItemFilters = "隐藏过滤器";
	var textShowItemFilters = "显示过滤器";
	
	var textHideAdvancedOptions = "隐藏高级选项";
	var textShowAdvancedOptions = "显示高级选项";
	
	var textErrorLevel = "Min Level is greater than Max Level";
	var textErrorSkill = "Min Skill is greater than Max Skill";
	
var tPage = "页";
var textOf = "/";

var tRelevance = "相关";
var tRelevanceKr = "";

var tGuildLeader = "会长";
var tGuildRank = "Rang";

var textrace = "";
var textclass = "";

var text1race = "人类";
var text2race = "兽人";
var text3race = "矮人";
var text4race = "暗夜精灵";
var text5race = "亡灵";
var text6race = "牛头人";
var text7race = "侏儒";
var text8race = "巨魔";
var text10race = "血精灵";
var text11race = "德莱尼";

var text1class = "战士";
var text2class = "圣骑士";
var text3class = "猎人";
var text4class = "潜行者";
var text5class = "牧师";
var text6class = "死亡骑士";
var text7class = "萨满";
var text8class = "法师";
var text9class = "术士";
var text11class = "德鲁伊";

function printWeeks(numWeeks) {
	if (numWeeks == 1)
		return "1 周";
	else
		return numWeeks + " 周";
}

var tCharName = "人物名称";
var tGRank = "公会阶级";
var toBag = "Origin";
var tTType = "Action";
var tdBag = "Dest.";
var tItem = "Item"
var tDate = "Date & Time";

var tItemName = "Item";
var tItemBag = "Tab";
var tItemSlot = "Slot";
var tItemType = "Type";
var tItemSubtype = "Subtype";

var tenchT = "Enchantment";
var tenchP = "Enchantment";

var tLoading = "载入";
var errorLoadingToolTip = "载入信息失败。";

function returnDateOrder(theMonth, theDay, theYear, theTime) {
	return theDay + theMonth + theYear + theTime; //organize the variables according to your region's custom
}

function returnDay(theDay, nospace) {
	
	if (nospace) {
		switch (theDay) {
		case 0: return '周日';
		case 1: return '周一';
		case 2: return '周二';
		case 3: return '周三';
		case 4: return '周四';
		case 5: return '周五';
		case 6: return '周六';
		default: return '';
		}		
	} else {
		switch (theDay) {
		case 0: return '周日';
		case 1: return '周一';
		case 2: return '周二';
		case 3: return '周三';
		case 4: return '周四';
		case 5: return '周五';
		case 6: return '周六';
		default: return '';
		}	
	}
}

function formatDate(theDate, isSimple) {

	var newDate = new Date(theDate);
	
	//var amPM;
	//if (newDate.getHours() >= 12)
	//	amPM = "PM"
	//else
	//	amPM = "AM"
		
	var theHour = newDate.getHours()%12;
	//if (!theHour)
	//	theHour = 12;
		
	var theMinutes = newDate.getMinutes();
	if (!theMinutes)
		theMinutes = "00"
	if ((parseInt(theMinutes) <= 9) && (theMinutes != "00"))	
		theMinutes = "0" + theMinutes;
		
	var theYear = newDate.getFullYear();

	if (isSimple)
		var d = theYear +"/" + (newDate.getMonth() + 1) + "/" + newDate.getDate();
	else
		var d = returnDay(theYear + "/" + (newDate.getMonth() + 1) +"/"+ newDate.getDate() +" "+ newDate.getDay()) +" "+ theHour +":"+ theMinutes;	

	return d;
}

function formatDateGraph(theDate) {
	
	var newDate = new Date(theDate);
	
	
	var monthArray = new Array();
	monthArray[0] = "一月";
	monthArray[1] = "二月";
	monthArray[2] = "三月";
	monthArray[3] = "四月";
	monthArray[4] = "五月";
	monthArray[5] = "六月";
	monthArray[6] = "七月";
	monthArray[7] = "八月";
	monthArray[8] = "九月";
	monthArray[9] = "十月";
	monthArray[10] = "十一月";
	monthArray[11] = "十二月";
	

	//var amPM;
	//if (newDate.getHours() >= 12)
	//	amPM = "PM"
	//else
	//	amPM = "AM"
		
	var theHour = newDate.getHours()%12;
	//if (!theHour)
	//	theHour = 12;
		
	var theYear = newDate.getFullYear();

	var theMinutes = newDate.getMinutes();
	if (!theMinutes)
		theMinutes = "00"
	if ((parseInt(theMinutes) <= 9) && (theMinutes != "00"))	
		theMinutes = "0" + theMinutes;
		
	var d = new Array();
	d = [theYear +" "+monthArray[newDate.getMonth()]+" "+  newDate.getDate()    , theHour +":"+ theMinutes];
	
	//alert("d: " + d);
	
	return d;
}

function returnDateFormat() {
	return ['year' , 'month' , 'day'];
}

var gTruncItemNameContents = 70;
var gTruncItemName = 35;
var gTruncGuildRank = 18;

function printBag(bagId) {
	return tItemBag + " " + bagId;
}

var textTeam = "队伍";

var textOpponent = "Opponent Team Name";
var textResult = "Result";
var textDate = "Date & Time";
var textNewRating = "New Rating";
var textRatingChange = "Rating Change";

var textOverallRatingChange = "Net Rating Change";
var textW = "W";
var textWins = "Wins";
var textL = "L";
var textLosses = "Losses";
var textMP = "MP";
var textMatchesPlayed = "Matches Played";
var textWinPercent = "Win %&nbsp;&nbsp;";
var textAvgChange = "Avg Change per Match";

var textCharName = "Character Name";
var textKillingBlows = "Killing Blows";
var textDamageDone = "Damage Done&nbsp;";
var textDamageTaken = "Damage Taken&nbsp;";
var textHealingDone = "Healing Done&nbsp;";
var textHealingTaken = "Healing Taken&nbsp;&nbsp;";
var tRace = "种族&nbsp;";
var tClass = "职业";
var textFindGraph = "&lt;find on graph&gt;";
var textEmpty = "";

var textRealm = "服务器";
var textTeamDeleted = "This team no longer exists";
var textOHistory = "View an interactive summary of all the matches played against this team.";

function formatNumber(number)
{
	number = number.toString();
	if (number.length > 3) {
	var mod = number.length % 3;
	var output = (mod > 0 ? (number.substring(0,mod)) : '');
	for (i=0 ; i < Math.floor(number.length / 3); i++) {
		if ((mod == 0) && (i == 0))
			output += number.substring(mod+ 3 * i, mod + 3 * i + 3);
		else
			output+= ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
	}
	return (output);
	}
	else return number;
}

//used in datepicker [t] translate all above then remove [t]
function dateLocalization(){	
	Date.dayNames = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
	Date.abbrDayNames = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
	Date.monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
	Date.abbrMonthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
	
	Date.firstDayOfWeek = 1;
	Date.format = 'yyyy/mm/dd';
	
	Date.use24hr = true;
	Date.pm = "下午";
	Date.am = "上午";
	
	/*	
		g  	12-hour format of an hour without leading zeros		1 through 12
		G 	24-hour format of an hour without leading zeros 	0 through 23
		h 	12-hour format of an hour with leading zeros		01 through 12
		H 	24-hour format of an hour with leading zeros		00 through 23
		i 	Minutes with leading zeros 							00 to 59
		s 	Seconds, with leading zeros 						00 through 59		
	*/	
	Date.timeformat = 'H:i:s';	
	Date.dateTimeFormat = 'yyyy/mm/dd H:i:s'
	
	Date.seconds = "秒";
	Date.minutes = "分";
	
	$.dpText = {
		TEXT_PREV_YEAR		:	'去年',
		TEXT_PREV_MONTH		:	'上个月',
		TEXT_NEXT_YEAR		:	'明年',
		TEXT_NEXT_MONTH		:	'下个月',
		TEXT_CLOSE			:	'关闭',
		TEXT_CHOOSE_DATE	:	'选择日期',
		HEADER_FORMAT		:	'mmmm yyyy'
	};
}

jsLoaded=true;

