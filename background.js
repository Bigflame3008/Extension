var button = document.getElementById('sb2');
button.addEventListener('click', function() {
  // Send message to active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, 'button_clicked');
  }






