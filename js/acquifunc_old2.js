
/* ***************************** functions ********************************** */
/* ************************************************************************** */

var AND = ' AND ';
var OR = ' OR ';
var origSkiText = document.all('skiText')?document.all['skiText'].innerHTML:'';

function encloseOne(aStr) {
	return "(" + aStr + ")";
}

function encloseAll(aStr) {
	return "(" + aStr + ")";
}

function init() {
	/* initialize the input elements */
	var dd;
	if (document.forms[0]) {
  	if ((e = document.forms[0].elements['o1']) != void 0)
  	   substituteList(e, NBSList);
  	if ((e = document.forms[0].elements['o2']) != void 0)
  	   substituteList(e, NBSList[0].l);
  	dd = getSearchValue('dd');
  	if (dd.length > 0)
  	   setRadioValue('dd', dd);
 //   searchKeyword(''); // because we don't use search keyword
  	gotoCode(getSearchValue('code'));
  	if (getSearchValue('action') == 'submit') {
       if ((getRadioValue('dd') != void 0) &&
           (getPopupValue('o1') != void 0)) {
           generateTerm();
           document.forms[0].submit();
       }
  	}
 }
 else {
      	
 }
}

function k(aValue,aDisplay, aRank) {
	/* add a secondlevel classification to the datalist; aValue is the
           classificationnumber and aDisplay is the text */
	s2[i2]=new Object();
	s2[i2].v=aValue;
	s2[i2].d=aDisplay;
	s2[i2].r=aRank;
	return s2[i2++];
}
function l(aValue,aDisplay,aRank) {
	/* add a firstlevel classification to the datalist; aValue is the
           classificationnumber and aDisplay is the text */
	i2=0;
	s1=NBSList[i1]=new Object();
	NBSList[i1].v=aValue;
	NBSList[i1].d=aDisplay;
	NBSList[i1].r=aRank;
	s1.l=new Array();
	s2=nO();
	s1.l[i2++]=s2;
	s2=s1.l;
	i1++;
}
function nO() {
	/* make a new Object */
	var anObj;

	anObj=new Object();
	anObj.v="";
	anObj.d="";
	anObj.r="";
	anObj.l=new Array();
	return anObj;
}
function select2Stage1(aDataList,s1Popup,s2Popup)
{
	/* put the correct list of items in the second popup menu */

	var list2;

	list2=selected2Stage1Item(aDataList,s1Popup).l;
	substituteList(s2Popup,list2);
}

function selected2Stage1Item(aDataList,s1Popup)
{
	/* obtain the object that corresponds with the selected item
 	   in first popupmenu, and return it if found */
	for (var i=0; i< s1Popup.options.length; i++) {
    if(s1Popup.options[i].selected) {
			return _objectForCode(s1Popup.options[i].value);
    }
	}
	return null;
}

function substituteList(aPopup,aList)
{
	/* replace the list in the popupmenu aPopup with aList */
	var itemcount = 0;
	for(var i=0; i<aList.length; i++) {
	  if(aList[i].v.length > 0) {
		  var no=new Option();
		  no.value=aList[i].v;
	  	no.text=aList[i].v + ' ' + aList[i].d;
  		aPopup.options[itemcount]=no;
		  itemcount++;
    }
	}
	aPopup.options.length=itemcount;
}


function generateTerm() {
	/* this function generates a search string from input element values
	   and assigns this value to the input element named TRM
	   when this form is submitted the input elements named TRM, 
	   ACT and IKT matter, o1, o2 and dd are temporary values. */
	var t = document.forms[0].elements['TRM'];
	var ddv = getRadioValue('dd');
	var today = new Date();
	var month = today.getMonth() + 1;
	var year = today.getYear();
	var ds = '';

	if (ddv != void 0 && ddv.length > 0) {
		if (ddv <= 0) {
			ds += _dtmString(year, month);
		}
		while (ddv-->0) {
			month--;
			if (month == 0) {
				month = 12;
				year--;
			}
			ds += encloseOne(_dtmString(year, month));
			if (ddv >= 1) ds += OR;
		}	
		ds = encloseAll(ds);
	}
	if (getPopupValue('o1').length > 0) {
		if (ds.length > 0) ds = AND + ds;
		if (getPopupValue('o2').length > 0) 
			ds = encloseOne('bcl ' + getPopupValue('o2')) + ds;
		else
			ds = encloseOne('bcl ' + getPopupValue('o1') + '.?') + ds;
	}
	t.value = ds;
}
function _dtmString(aYear, aMonth) {
	/* return a string for searching on date */
	if (aMonth > 9)
		return 'dtm ' + aYear + aMonth + '?';
	else
		return 'dtm ' + aYear + '0' + aMonth + '?';
}
function getPopupValue(p) {
	/* returns selected value of popupmenu named p */
	var i = document.forms[0].elements[p].selectedIndex;
        return document.forms[0].elements[p].options[i].value;
}
function setPopupValue(p, aValue) {
  /* sets the selected value to aValue of popupmenu named p */
	var e = document.forms[0].elements[p];
	for (var i=0; i<e.options.length; i++) {
		if (e.options[i].value == aValue) {
			e.selectedIndex = i;
			return;
		}
	}
	e.selectedIndex = 0;
}
function getRadioValue(r) {
	/* returns selected value of radio buttons named r */
	var e = document.forms[0].elements[r];
	for (var i=0; i<e.length; i++) {
		if (e[i].checked) return e[i].value;
	}
	return void 0;
}
function setRadioValue(r, aValue) {
  /* sets selected value to aValue of radio buttons named r */
	var e = document.forms[0].elements[r];
	if (e == void 0) return;
	for (var i=0; i<e.length; i++) {
		e[i].checked = (e[i].value == aValue);
	}
}
function getSearchValue(aKey) {
  /* returns the search-part of the URL representing aKey */
	var query = document.location.search.substring(1);
	var s = query.indexOf(aKey);
	var e = query.indexOf('&', s);

	if (s < 0) return '';
	if (e < 0) e = query.length;
	s += aKey.length + 1;
	return unescape(query.substring(s, e));
}
function searchKeyword(aStr) {
  /* find and display all objects from NBSList that include/match with aStr */
	var codeObjects = _objectsForKeyword(aStr, 1);
	var codeObj;

	if ((codeObj = _displaySearchResult(codeObjects)) == null)
		return;
	gotoCode(codeObj.code);
}
function gotoCode(aCode) {
	var subcode = null;
	var code = null;

	if (aCode.indexOf('.') == 2) {
		subcode = aCode;
		code = aCode.substring(0,2);
	}
	else if (aCode.length > 0)
		code = aCode;
  if (code != null) {
  	setPopupValue('o1', code);
  	select2Stage1(NBSList, 

document.forms[0].elements['o1'],document.forms[0].elements['o2']);
  	if (subcode != null)
  		setPopupValue('o2', subcode);
  }
}
function _displaySearchResult(codeObjects) {
	if (document.all) {
		var newText;
		var newHtml;
		var alts = new Array();
		var ndalts = new Array();
		var c;

		newText = '';
/* volledige woorden waarin searchstring gevonden werd:
		for (var i=0, j=0; i<codeObjects.length; i++) {
			var str;
			var co;
			var s=0, e=0;
			co = codeObjects[i];
			
			str = co.object.d.substring(0, co.start);
			if ((s = (str.lastIndexOf(' ') + 1)) <= 1)
				s = 0;
			str = co.object.d.substring(s);
			if ((e = str.indexOf(' ')) <= 0)
				e = str.length;
			e += s;
			str = co.object.d.substring(s, e);
			alts[j++] = str;
		}
*/
/* 
		for (var i=0, j=0; i<codeObjects.length; i++) {
			co = codeObjects[i];
			str = co.object.d.substring(co.end, co.end+1);
			alts[j++] = str;
		}
		ndalts = alts.sort();
		alts = new Array();
		for (var i=0, j=0;i<ndalts.length;i++) {
			if (ndalts[i] != c) {
				c = ndalts[i];
				alts[j++] = c;
			}
		}
		newText = alts.join(', ');
*/
		var lastBCode = _getBCode(codeObjects[0]);
		var lastCodeObject = codeObjects[0];
		for (var i=0, j=0, k=0; (k<5) && (i<=codeObjects.length); i++) {
			var currentBCode;
			var index;

			currentBCode = _getBCode(codeObjects[i]);
//			if (currentBCode != lastBCode) {
//				newText += _htmlCodeObjectResult(lastCodeObject, j);
        newText += _htmlCodeObjectResult(codeObjects[i], 1);
//				lastBCode = currentBCode;
//				lastCodeObject = codeObjects[i];
//				j = 0;
				k++;
//			}
			j++;
		}
		newHtml = origSkiText.split('[1]').join(codeObjects.length);
		newHtml = newHtml.split('[2]').join(newText);
		document.all['skiText'].innerHTML = newHtml;
	}
	if (codeObjects.length != 1) {
		document.forms[0].elements['o1'].selectedIndex = 0;
		document.forms[0].elements['o2'].selectedIndex = 0;
		return null;
	}
	return codeObjects[0];
}
function _htmlCodeObjectResult(codeObj, itemsFound) {
	var aCode;
	var anObj;
	
	if (!codeObj)
	   return '';
	if (codeObj.object) {
		aCode = codeObj.object.v;
		anObj = codeObj.object;
	}
	else {
		aCode = _getBCode(codeObj);
		anObj = _objectForCode(aCode);
	}
	return '<A href="javascript:gotoCode(\'' + aCode + '\');">' + aCode + ' ' + anObj.d 

+ '(' + itemsFound + ')</A><BR>';
}
function _getBCode(codeObject) {
	if (codeObject == null || codeObject == void 0)
		return null;
	if ((index = codeObject.code.indexOf('.')) > 0)
		return codeObject.code.substring(0, index);
	else
		return codeObject.code;
}
function _objectsForKeyword(aStr, depth) {
	var foundSet = new Array();
	var f = 0;

	if (aStr.length == 0) return foundSet;
	for (var i=0;i<NBSList.length;i++) {
		if (NBSList[i].v == aStr)
			foundSet[f++] = _objectNBS(NBSList[i].v, NBSList[i], 0, -1)
		else if ((index = NBSList[i].d.toLowerCase().indexOf(aStr.toLowerCase())) >= 

0)
			foundSet[f++] = _objectNBS(NBSList[i].v, NBSList[i], index, 

aStr.length + index)
		if (depth == 0) continue;
		for (var j=0; j<NBSList[i].l.length;j++) {
			if (NBSList[i].l[j].v == aStr)
				foundSet[f++] = _objectNBS(NBSList[i].l[j].v, 

NBSList[i].l[j], 0, -1)
			else if ((index = 

NBSList[i].l[j].d.toLowerCase().indexOf(aStr.toLowerCase())) >= 0)
				foundSet[f++] = _objectNBS(NBSList[i].l[j].v, 

NBSList[i].l[j], index, aStr.length + index)
		}
	}
	return foundSet;
}
function _objectNBS(aCode, anObj, start, end) {
	var object = new Object();
	object.code = aCode;
	object.object = anObj;
	object.start = start;
	object.end = end;

	return object;
}
function _objectForCode(aCode) {
	for (var i=0;i<NBSList.length;i++) {
		if (NBSList[i].v == aCode)
			return NBSList[i];
		for (var j=0;j<NBSList[i].l.length;j++) {
			if (NBSList[i].l[j].v == aCode)
				return NBSList[i].l[j];
		}
	}
	return null;
}
function writeStage() {
  var code = getSearchValue('code');

  if ((code != void 0) && (code.length > 0)) {
    if (((el = _objectForCode(code)) != null) && (el.l != null)) {
      writeHeader(el.d, true);
      writeStage2(el.l);
      return;
    }
  }
  writeHeader(headString, false);
  writeStage1();
}
function writeHeader(aText, hasBack) {
  var w = document.write;

  w("<hr size=1 width=\"100%\" color=\"#253c82\" align=\"left\">");
  if(hasBack)
    w("<table height=30 width=\"100%\"><tr><td width=\"85%\">");
  else
    w("<table height=30><tr><td>");
  w("<font face=verdana size=2 color=#002E65><b>");
  w(aText);
  w("</b></font>");
  if(hasBack) {
    w("</td><td width=\"15%\">");
    w("<a href=\"?\"><b><font size=1 color=\"#253c82\">");
    w(backString);
    w("</font></b></a>");
  }
  w("</td></tr></table>");
  w("<hr size=1 width=\"100%\" color=\"#253c82\" align=\"left\">");
}
function writeStage1() {
  var w = document.write;
  var query = _getQueryExcluding('code');

  w("<table width=548><tr><td width=\"50%\" valign=top>");
  w("<font face=verdana size=1 color=\"#253c82\">");

  for(var i=0;i<NBSList.length;i++) {
    if (NBSList[i].d == '-') {
      w("<hr size=1 color=\"#253c82\" width=\"80%\" align=\"left\">");
    }
    else if (NBSList[i].d == '$') {
      w("</td><td width=\"50%\" valign=top>");
    }
    else if (NBSList[i].v.length > 0 && NBSList[i].d.length > 0) {
      w("<a href=\"?code="+NBSList[i].v+query+"\">");
      w("<font face=verdana size=1 color=\"#253c82\">"+NBSList[i].v+"&nbsp;</font>");
      w("<font face=verdana size=2 color=\"#000000\">"+NBSList[i].d+"</font></a>");
      w("<br>");
    }
  }

  w("</td></tr></table>");
}

function writeStage2(list) {
  var w = document.write;
  var query = _getQueryExcluding('code');

  for(var i=0;i<list.length;i++) {
    for(var j=1;j<list[i].r;j++)
      w("&nbsp;&nbsp;&nbsp;");
    w("<a href=\""+nextPage+"?code="+list[i].v+query+"\">");
    if(list[i].r == 1) w("<B>");
    w("<font face=verdana size=1 color=\"#253c82\">"+list[i].v+"&nbsp;</font>");
    w("<font face=verdana size=2 color=\"#000000\">"+list[i].d+"</font>");
    if(list[i].r == 1) w("</B>");
    w("</a><br>");
  }
}
function _getQueryExcluding(theExclusion) {
	var query = document.location.search.substring(1);

  re = new RegExp(theExclusion + "=[^&$]*", "g");
  query = query.replace(re, '');
  if ((query.length > 0) && (query.indexOf('&') != 0))
    query = '&'+query;
  return query;
}
