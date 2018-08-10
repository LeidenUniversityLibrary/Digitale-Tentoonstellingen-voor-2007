<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">

<html>
<head>
	<title>Nomenclator</title>
<!--- stylesheet --->
<link rel="STYLESHEET" type="text/css" href="../css/style.css">
<link rel="STYLESHEET" type="text/css" href="../css/default.css">
<script language="JavaScript" src="../js/index.js"></script>
<script language="JavaScript" src="../js/browser_stylesheet.js"></script>
<script language="JavaScript" src="../js/printbug.js"></script>
<script language="JavaScript" src="../js/functiondetect.js"></script>

<SCRIPT LANGUAGE="JavaScript">
 
var telfoto
maxval = 112

fotoArray = new Array(
              "001", //binding front
              "002", //binding back
              "01v", //dekblad
              "02r", //schutblad recto
              "02v", //schutblad verso
              "a1r", //titelblad
              "a1v", //keerzijde titelblad
              "a2r","a2v","a3r","a3v","a4r","a4v", //katern A
              "b1r","b1v","b2r","b2v","b3r","b3v","b4r","b4v", //katern B: Theologi
		      "c1r","c1v","c2r","c2v","c3r","c3v", "c4r","c4v", //katern C
		      "d1r","d1v","d2r","d2v","d3r","d3v", "d4r", "d4v", //katern D
		      "2c1r","2c1v", "2c2r","2c2v","2c3r","2c3v","2c4r","2c4v", //katern CC: Theologi
		      "3c1r","3c1v", "3c2r","3c2v","3c3r","3c3v", //katern CCC: 4e blad uitgesneden
		      "e1r","e1v","e2r", "e2v", //katern E: Iurisperiti
		      "f1r","f1v", "f2r","f2v", //katern F: Medici
		      "g1r","g1v","g2r","g2v","g3r","g3v","g4r", "g4v", //katern G: Historici
		      "h1r", "h1v","h2r","h2v","h3r", "h3v", "h4r", "h4v", //katern H: Philosophi
		      "i1r","i1v", "i2r","i2v", //katern I: Mathematici
		      "k1r","k1v","k2r","k2v", //katern K: Litteratores
		      "l1r","l1v", "l2r","l2v","l3r","l3v","l4r","l4v", //katern L: Theologi
		      "m1r","m1v","m2r","m2v", "m3r","m3v", "m4r","m4v", //katern M: Cat Libr Omnium
		      "n1r","n1v","n2r","n2v","n3r","n3v","n4r","n4v", //katern N: Index Librorum
		      "o1r","o1v","o2r","o2v", //katern O (vervolg)
		      "03r" //achterschutblad recto van 1408  I 58
		      )

function updateFormbox (lokatie) {
   for (i = 0; i < 112; i++) {
      if (lokatie == fotoArray[i]) {
          parent.menu.document.forms[0].box.value = fotoArray[i]
          telfoto = i
}}}
</SCRIPT>

</head>
<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" bgcolor="White"  onLoad="updateFormbox('')">
<table width="480" border="0" cellspacing="0" cellpadding="0">
<tr>
    <td class="small">
		<a href="http://www.bibliotheek.universiteitleiden.nl" class="small" target="_top">Bibliotheken</a>
		<img border="0" src="../images/slash.jpg" width="3" height="8">
		<a href="https://www.bibliotheek.universiteitleiden.nl/bijzondere-collecties/tentoonstellingen" class="small" target="_top">Tentoonstellingen</a>
		<img border="0" src="../images/slash.jpg" width="3" height="8"> Nomenclator</td>
  </tr>
  <tr>
    <td>
      <!--- INHOUD --->
      <a name="top"></a>

      <!--- 4 VERSCHILLENDE KOPJES --->
        	<!---<div class="faculteitsonderdeel">Faculteitsonderdeel</div>---><br>
<BR>
        	<div class="hoofdstuk">Nomenclator</div>
        	   
      <IMG SRC="<?php 
		$imagename = $_GET["box"];
		if(ctype_alnum ($imagename)){
			$imagepath = './images/'.$imagename.'.jpg';
			if($imagepath){
				echo $imagepath;
			}
		}
		?>" width="500" height="710">
      <p>


        <!--- footer	 --->
      </p>
        	<table border="0" cellspacing="0" cellpadding="0">
        	<tr>
        		<td colspan="2"><img src="../images/shim.gif" height="20" width="1" border="0"></td>
        	</tr>
        	<tr>
        		<td bgcolor="#002E65" colspan="2"><img src="../images/shim.gif" height="1" width="480" border="0"></td>
        	</tr>
        	<tr>
        		<td align="left"><a href="javascript:history.back(-1);" class="hornav">vorige pagina</a></td>
        		<td align="right"><a href="#top" class="hornav">top pagina</a></td>
        	</tr>
        	<tr>
        		<td colspan="2"><img src="../images/shim.gif" height="50" width="1" border="0"></td>
        	</tr>
        	</table>
    </td>
  </tr>

</body>