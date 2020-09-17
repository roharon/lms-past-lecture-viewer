var videoUrlElement = document.getElementById("lecture")

function getLectureList() {
  var detail = {
    code: `document.body.innerHTML`
  }
 
  chrome.tabs.executeScript(detail, (result) => {
    var html = document.createElement('html');
    html.innerHTML = result

    var viewElement = html.getElementsByClassName("view")
    var length = viewElement.length;
    //chrome.extension.getBackgroundPage().console.log(viewElement[0].outerHTML)

    var result;
    for(var i = 0; i < length; i++){
      result = viewElement[i].outerHTML.match(/(viewGo\(.*;)/)[0]
      // get string of onclick function
      
      chrome.storage.sync.set({viewFunction: result})
    }
  })
}

function OnLoad() {
  getLectureList();

  chrome.storage.sync.get(['viewFunction'], function (result) {
    videoUrlElement.innerText = result.viewFunction
    //TODO: change innerText to List
  });
}

window.onload = OnLoad;