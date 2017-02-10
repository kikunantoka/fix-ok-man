chrome.tabs.onActivated.addListener(function(activeInfo) {
  chrome.tabs.get(activeInfo.tabId, function(tab) {
    setIcon(tab);
  });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  setIcon(tab);
});

function setIcon(tab) {
  chrome.browserAction.setIcon({
    "path": tab.url.match(/https:\/\/github.com/) ? "icons/icon_16.png" : "icons/icon_16_disabled.png"
  });
}
