var button = document.getElementById("start")
var videoUrlElement = document.getElementById("videoUrl")

function getPanoptoVideo() {
  var detail = {
    code: `document.head.innerHTML`
  }

  chrome.tabs.executeScript(detail, (result) => {
    var e1 = document.createElement('html');
    e1.innerHTML = result

    var metaTags = e1.getElementsByTagName("meta")
    var videoUrl;

    for (var idx = 0; idx < metaTags.length; idx++) {
      if (metaTags[idx].name == "twitter:player:stream") {
        //chrome.extension.getBackgroundPage().console.log(metaTags[idx].content, metaTags[idx].name)
        videoUrl = metaTags[idx].content

        chrome.storage.sync.set({ videoUrl: videoUrl });
        break;
      }
    }
  })
}

function OnLoad() {
  getPanoptoVideo();

  chrome.storage.sync.get(['videoUrl'], function (result) {
    //chrome.extension.getBackgroundPage().console.log(result.videoUrl)
    videoUrlElement.innerText = result.videoUrl
  });
}

window.onload = OnLoad;