chrome.runtime.onInstalled.addListener(function () {
  var eclass_rule = {
    conditions: [
      new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { hostEquals: 'eclass.hufs.ac.kr' },
      }),
    ],
    actions: [
      new chrome.declarativeContent.ShowPageAction(),
    ],
  }

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([eclass_rule]);
  });
  
});
