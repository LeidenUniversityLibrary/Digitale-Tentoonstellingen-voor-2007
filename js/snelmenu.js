

function openURI() {
  var control = document.forms[0].documentkeuze;
  if (control.options[control.selectedIndex].value != ' ') {
    theHref = control.options[control.selectedIndex].value;
    window.open(theHref);
  }
}



