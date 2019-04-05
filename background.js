'use strict';

chrome.extension.getBackgroundPage().console.log("bgjs");

chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//   	try {
// 	  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.executeScript(
//           tabs[0].id,
//           {file: 'adremove.js'});
//           chrome.extension.getBackgroundPage().console.log("executed call");
//     });
// 	
// 	} catch(err) {
// 		chrome.extension.getBackgroundPage().console.log(err);
// 	}
	var isNyt = {
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'www.nytimes.com'},
      })
      ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    }
	
    var ruleList = [isNyt]
    
    chrome.declarativeContent.onPageChanged.addRules(ruleList);
  });
});

chrome.commands.onCommand.addListener(function (command) {
  if (command === "toggle-pencil") {  
	try {
	  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: 'penciltoggle.js'});
          chrome.extension.getBackgroundPage().console.log("executed call");
      });	
	} catch(err) {
		chrome.extension.getBackgroundPage().console.log(err);
	}
  } else if (command === "toggle-across") {
     try {
	  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: 'removeacross.js'});
          chrome.extension.getBackgroundPage().console.log("executed call");
      });	
	} catch(err) {
		chrome.extension.getBackgroundPage().console.log(err);
	}   
  }
});