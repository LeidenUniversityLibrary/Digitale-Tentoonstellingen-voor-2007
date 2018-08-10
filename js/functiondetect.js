

function detect()
{
// print bug
if ((navigator.appName + navigator.appVersion.substring (0, 1)) == "Netscape4") {
  if ((self.innerHeight ==0) && (self.innerWidth ==0))
    return;
}
// redirect to framed page
/*
if (parent.location.href==window.location.href) {
  framesetpage="index.html";
  thispage=window.location.href;
  if (thispage.indexOf('://')>=0) {
    prefix=thispage.substring(0,thispage.lastIndexOf('://'));
    suffix=thispage.substring(thispage.lastIndexOf('://')+3,thispage.length);
  }
  else {
    prefix='';
    suffix=thispage;
  }
  parent.location.href=framesetpage+"?"+prefix+"&&&"+suffix;
}
*/

}
