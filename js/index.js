<!--
    
// --- GET ELEMENT(LAYERREFERENCE) ---

function getElt () 
{ if (document.layers)
  {
    var currentLayer = document.layers[getElt.arguments[0]];
    for (var i=1; i<getElt.arguments.length && currentLayer; i++)
    {   currentLayer = currentLayer.document.layers[getElt.arguments[i]];
    }
    return currentLayer;
  } 
  else if (document.all) {
    var elt = eval('document.all.' + getElt.arguments[getElt.arguments.length-1]);
    return(elt);
  }
  else if (document.getElementById) {
	var elt = document.getElementById(getElt.arguments[getElt.arguments.length-1]);
	return(elt);
  }
}


// --- IMAGE SWAP ---

function swapImage(imgSrc, imgID, elt) { 

if (document.getElementsByName){
		var img = document.getElementsByName(imgID);
		img[0].src = imgSrc;
}else{
    if (swapImage.arguments.length == 3) {
			eval("elt.document." + imgID + ".src = '" + imgSrc + "'");
		} else {
			eval("document." + imgID + ".src = '" + imgSrc + "'");
    }
  }
}
// --- IMAGE PRELOAD ---

function preloadImages() { 
	if (document.images) {
		var imgStr = preloadImages.arguments;
		if (!document.preloadArray) document.preloadArray = new Array();
		var n = document.preloadArray.length;
		for (var i=0; i<preloadImages.arguments.length; i++) {
			document.preloadArray[n] = new Image;
			document.preloadArray[n].src = imgStr[i];
			n++;
		} 
	}
}

// --- FIX RESIZE BUG IN NETSCAPE ---

/*function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);*/


/*function initResizeBug() {
	document.orPageWidth = innerWidth;
	document.orPageHeight = innerHeight;
	onresize = nsResizeBug;
}

function nsResizeBug() {
	if (innerWidth != document.orPageWidth || innerHeight != document.orPageHeight) location.reload();
}*/

//if (is.ns4comp) initResizeBug();



// -->
