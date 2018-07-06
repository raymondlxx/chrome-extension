chrome.alarms.onAlarm.addListener(function(alarm){
	alert("Beep");
	chrome.alarms.clear("myAlarm");
	alert("alarm cleared");
});