

// --- browser detectie ---
function Is() {
    agent  = navigator.userAgent.toLowerCase();
    this.major = parseInt(navigator.appVersion);
      this.minor = parseFloat(navigator.appVersion);
      this.ns    = ((agent.indexOf('mozilla')   !=   -1) &&
                   ((agent.indexOf('spoofer')   ==   -1) &&
                   (agent.indexOf('compatible') ==   -1)));
      this.ns6    = (this.ns && (this.major     >=    5));
      this.ns4   = (this.ns && (this.major      >=    4) &&
  					!(this.ns6));
    	this.mac   = (navigator.platform.indexOf("Mac") != -1)
  }
  	var is = new Is();

  // --- stylesheet extra's voor Netscape4 en Mac ---
  	if(is.ns4){
  	document.write('<link rel="STYLESHEET" type="text/css" href="http://www.leidenuniv.nl/huisstijl/ulw_frames/css/styleNS.css">');
  	}
  	if(is.mac){
  	document.write('<link rel="STYLESHEET" type="text/css" href="http://www.leidenuniv.nl/huisstijl/ulw_frames/css/styleMAC.css">');
  	}

