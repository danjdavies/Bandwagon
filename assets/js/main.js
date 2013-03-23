// Adding an active class to a menu item

function scriptInit() {
if (!document.getElementById) {
	return;
	}
}
function addEvent(elm, evType, fn, useCapture) {
	if (elm.addEventListener) {
	elm.addEventListener(evType, fn, useCapture);
	return true;
	} else if (elm.attachEvent) {
	var r = elm.attachEvent('on' + evType, fn);
	return r;
	} else {
	elm['on' + evType] = fn;
	}
}
function checkActive() {
	var a = document.getElementsByTagName("a");
	if (window.location.href.substr(location.href.length - 1, 1) == '/') {
		var loc = window.location.href + 'index.html'; 
	}
	else {
		var loc = window.location.href;
	}
	for(var i=0; i < a.length; i++) {
		if (a[i].href == loc) {
			a[i].setAttribute("class", "active");
			a[i].setAttribute("className", "active");
		}
	}
}
addEvent(window, 'load', checkActive, false);
