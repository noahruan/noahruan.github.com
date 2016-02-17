var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i) ? true: false;
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i) ? true: false;
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true: false;
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) ? true: false;
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
    }
};

function _getFileName(){
	var url = this.location.href
	var pos = url.lastIndexOf("/");
	if(pos == -1){
	   pos = url.lastIndexOf("\\")
	}
	var filename = url.substr(pos +1)
	return filename;
}

if (isMobile.any()){ 
    //是移动设备 
	var filename = _getFileName();
	if(filename.match(/help.html/i)){
		filename = 'help.html';
	}else if(filename.match(/report.html/i)){
		filename = 'media.html';
	}else{
		filename = 'index.html';
	}
	window.location.href="http://www.skinrun.me/mobile/"+filename;
}
$(function(){

	$('.page').css('height',$(window).height());
})
