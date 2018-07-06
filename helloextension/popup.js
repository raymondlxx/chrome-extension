let changeColor = document.getElementById('changeColor');
let onButton = document.getElementById('on');


chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {

    var query = {
        active: true,
        currentWindow: true
    }
    chrome.tabs.query(query, function(tabs) {
        if (tabs[0].incognito) {
            console.log("incognito mode");
        } else {
            console.log("not incognito mode");
        }
    });


    let color = element.target.value;
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id, {
                code: 'document.body.style.backgroundColor = "' + color + '";'
            }
        );
    });

}

onButton.onclick = function(element){
    chrome.alarms.create("myAlarm",{delayInMinutes:0.1,periodInMinutes:0.2});
    window.close();
}