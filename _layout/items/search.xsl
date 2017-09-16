<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:import href="../includes.xsl" />
<xsl:import href="../items/filters.xsl" />
<xsl:output method="html" doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" doctype-public="-//W3C//DTD XHTML 1.0 Transitional//EN"/>

<xsl:template match="page/itemSearch">
	<div id="dataElement">
		<div class="parchment-top">
			<div class="parchment-content">
				<div class="list">
					<xsl:call-template name="searchTabs" />
						<div class="full-list">
							<div class="info-pane">
								<xsl:call-template name="searchTable" />	
							</div>
						</div>
				</div>
			</div>
		</div>
	</div>
</xsl:template>

<xsl:template name="searchTabs">

	<xsl:variable name="relColIndex">
		<xsl:choose>
			<xsl:when test="tabs/@selected = 'characters'">8</xsl:when>
			<xsl:when test="tabs/@selected = 'guilds'">4</xsl:when>
			<xsl:when test="tabs/@selected = 'items'">3</xsl:when>
			<xsl:when test="tabs/@selected = 'arenateams'">6</xsl:when>
		</xsl:choose>
	</xsl:variable>


	<script type="text/javascript" src="_js/items/functions.js"></script>
	<script type="text/javascript" src="_js/search/search.js"></script>
	<script type="text/javascript">
		$(document).ready(function(){	
			changetype('all');
			
			var filterValues = [];
			
			//store filters
			<xsl:for-each select="searchResults/filters/filter">
					filterValues["<xsl:value-of select="@name" />"] = "<xsl:value-of select="@value" />";
			
			</xsl:for-each>			
			
			function initSearchr(){ initSearchResults("<xsl:value-of select="tabs/@selected" />", "<xsl:value-of select="searchResults/@searchText" />", "<xsl:value-of select="searchResults/items/@pn" />", filterValues, "<xsl:value-of select="$relColIndex" />");  }
			<xsl:comment>"</xsl:comment>		
		
			//Gecko timeout. Doc.ready() gets called too soon
			if( Browser.safari || Browser.chrome ) setTimeout(function() { initSearchr() }, 0); 
			else initSearchr()
			});	
	</script>

	<xsl:variable name="searchType" select="searchResults/@searchType" />
	<xsl:variable name="searchText" select="searchResults/@searchText" />

	<div class="tabs"> 
		<!-- print top-level tabs -->
		<xsl:for-each select="tabs/tab">
			<xsl:if test="@count &gt; 0">
				<div class="tab">
					<xsl:if test="@type = ../@selected">
						<xsl:attribute name="class">selected-tab</xsl:attribute>
					</xsl:if>
					<a href="search.xml?searchType={$searchType}&amp;searchQuery={$searchText}&amp;selectedTab={@type}">
						<xsl:value-of select="$loc/strs/unsorted/str[@id='armory.menu.adv-item-search']" /> <span class="tab-count" style="display: inline;"></span>
					</a>
				</div>
			</xsl:if>
		</xsl:for-each>
		<div class="clear"></div>
	</div>
	
	<div class="subTabs" style="height: 1px;">
		<div class="upperLeftCorner" style="height: 5px;"></div>
		<div class="upperRightCorner" style="height: 5px;"></div>			
	</div>
</xsl:template>

<xsl:template name="searchTable">
	<xsl:variable name="selTab" select="tabs/@selected" />
	<xsl:variable name="selTabLabel" select="tabs/tab[@type=$selTab]/@label" />
	
	<!-- show item filters -->
	<xsl:if test="tabs/@selected = 'items' and not(searchResults/items/@pn)">
		<!--filterBox-->
		<div id="showHideItemFilters" class="searchPageIeFix">
			<xsl:if test="tabs/@selected = 'items'" >
				<xsl:call-template name="templateFormItem">
					<xsl:with-param name="templateClass" select="'detail-search-results'" />
				</xsl:call-template>
			</xsl:if>
			<div class="clear"></div>
		</div>
	</xsl:if>
	
	<div class="clear" style="border:1px solid transparent"><!-- border ensures ie doesn't ignore the element --></div>

</xsl:template>

</xsl:stylesheet>