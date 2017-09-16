var guildInfoCont;
var logFilters;
var filVals;
var noSearchResults = "";


function initGuildBankLog(txtShowGuildInfo, txtHideGuildInfo, noSearchResultsTxt){
	
	noSearchResults = noSearchResultsTxt; 
	
	var sorterObj = $("#bankLogTable").tablesorter().tablesorterPager({container: $("#pager")});
	unfilteredTable = new Object(sorterObj[0]);	
	unfilteredTableRows = unfilteredTable.config.rowsCopy;
	
	//replace breaks in info
	guildInfoCont = $("#guildInfoContainer");
	guildInfoCont.html(guildInfoCont.html().replace(/\n/g, '<br />'));
	
	//bind toggler
	$("#guildInfoToggler").click(function(){
		$(guildInfoCont).toggle();
		
		if($(guildInfoCont).css("display") == "block")
			$(this).html(txtHideGuildInfo)
		else
			$(this).html(txtShowGuildInfo)
	});
	
	//store elements
	logFilters = {
		charName: 		$("#filCharName"),  
		charRank: 		$("#filCharRank"),
		transOrigin: 	$("#filTransOrigin"),
		transType: 		$("#filTransType"),
		transDest: 		$("#filTransDest"), 
		itemName: 		$("#filItemName"),
		itemQuality: 	$("#filItemQuality") 
	}
	
	var searchTimer; //for timeout	
	$(logFilters.itemName).keyup(function() {
		if(searchTimer != null){ clearTimeout(searchTimer); }
		searchTimer = setTimeout("runBankLogFilters()", 100);
	});
	
	$(logFilters.charName).keyup(function() {
 		if(searchTimer != null){ clearTimeout(searchTimer); }
 		searchTimer = setTimeout("runBankLogFilters()", 100);
 	});
}

function toggleBankTab(clickedLink, whichTab, tabText, tabIcon){

	$("#tabContentHolder .oneBankTab").css("display","none");
	$("#banktabs img").css("display","none");
	
	$("#bankHighlight" + whichTab).css("display","block");
	
	$("#banktab" + whichTab).css("display","block");
	$("#whichTabDisplay")[0].innerHTML = tabText;
	
	$("#whichTabDisplay").attr("style","background: url('/wow-icons/_images/43x43/"+tabIcon+".png') no-repeat;");
}

function runBankLogFilters(){
	
	filVals = {
 		charName: 		$.trim($(logFilters.charName)[0].value).toLowerCase(),
 		charRank: 		$(logFilters.charRank)[0].value, 
		transOrigin: 	$(logFilters.transOrigin)[0].value,
		transType: 		$(logFilters.transType)[0].value,
		transDest: 		$(logFilters.transDest)[0].value,
		itemName: 		$.trim($(logFilters.itemName)[0].value).toLowerCase(),
		itemQuality: 	$(logFilters.itemQuality)[0].value,	
	}
	
	var newRows = [];
	
 	if( (filVals.charName == "") && (filVals.charRank == "-1") && (filVals.transOrigin == "-1") && (filVals.transType == "-1") && (filVals.transDest == "-1") && (filVals.itemName == "") && (filVals.itemQuality == "-1")  ){
		newRows = unfilteredTableRows;		
	}else{
		$(unfilteredTableRows).each(function(i){
			
			var currRow = $(this).children();
			var numAdd = 0;
			
 			//charName
 			if(filVals.charName != ""){
 				var currChar = $(currRow[0]).children()[0].innerHTML.toLowerCase();
 				if(currChar.indexOf(filVals.charName) != -1) numAdd++;
 			}else{ numAdd++ }
 			
 			//charRank
 			if(filVals.charRank != "-1"){
 				if($(currRow[1]).children()[0].innerHTML == filVals.charRank) numAdd++;
 			}else{ numAdd++ }
			
			//transOrigin
			if(filVals.transOrigin != "-1"){
				if($(currRow[2]).children()[0].innerHTML == filVals.transOrigin) numAdd++;
			}else{ numAdd++ }
			
			//transType
			if(filVals.transType != "-1"){
				if($(currRow[3]).children()[0].innerHTML == filVals.transType) numAdd++;
			}else{ numAdd++ }
			
			//transDest
			if(filVals.transDest != "-1"){
				if($(currRow[4]).children()[0].innerHTML == filVals.transDest) numAdd++;
			}else{ numAdd++ }
			
 			//itemName
 			if(filVals.itemName != ""){
 				var currItem = $(currRow[5]).children()[1].innerHTML.toLowerCase();
 				if(currItem.indexOf(filVals.itemName) != -1) numAdd++;
 			}else{ numAdd++ }
			
			//itemQuality
			if(filVals.itemQuality != "-1"){
				if($(currRow[5]).children()[0].innerHTML == filVals.itemQuality) numAdd++;
			}else{ numAdd++ }
			
			if(numAdd == 7){
				newRows.push($(this));
			}			
		});
		
	}

	//wrap in try/catch to prevent weird errors
	try{		
		var tempTbody = $("#bankLogTable tbody")[0];
		tempTbody.innerHTML = "";
	}catch(e){ }

	for(var p=0; p < newRows.length; p++){
		tempTbody.appendChild(newRows[p][0]);
	}
	
	//show no search results message
	if(newRows.length == 0){
		var oneRow = document.createElement("tr");
		var oneCell = document.createElement("td");			
		
		oneCell.innerHTML = noSearchResults;
		oneCell.setAttribute("colspan","7");			
		oneRow.appendChild(oneCell);
		
		tempTbody.appendChild(oneRow);	
		
		newRows = [$(oneRow)];
	}

	$("#bankContentsTable").trigger("update");	
	$.tablesorterPager.appender(unfilteredTable,newRows,tempTbody);
	
	bindToolTips();
	
}


//reset the values
function resetBankLogFilters(){
	$(logFilters.charName)[0].value = "";
 	$(logFilters.itemName)[0].value = "";
 	$(logFilters.charRank)[0].value = "-1";
	$(logFilters.transOrigin)[0].value = "-1";
	$(logFilters.transType)[0].value = "-1";
	$(logFilters.transDest)[0].value = "-1";
	$(logFilters.itemQuality)[0].value = "-1";
	
	runBankLogFilters();
}