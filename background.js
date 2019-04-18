'use strict';

chrome.extension.getBackgroundPage().console.log("bgjs");

chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
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
          chrome.extension.getBackgroundPage().console.log("executed toggle-pencil");
      });
	} catch(err) {
		chrome.extension.getBackgroundPage().console.log(err);
	}
  } else if (command === "toggle-across") {
     try {
      chrome.storage.local.get({acrossVisible: true}, function(data) {
        chrome.storage.local.set({acrossVisible: !data.acrossVisible});
        console.log("setting acrossVisible to " + !data.acrossVisible);
      });
	  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
          tabs[0].id,
        {code: 'var clue = 0;'}, function() { chrome.tabs.executeScript(tabs[0].id,
          {file: 'toggleclues.js'}
          );  
        });      
      });	
      chrome.extension.getBackgroundPage().console.log("executed toggle-across");
	} catch(err) {
		chrome.extension.getBackgroundPage().console.log(err);
	}   
  } else if (command === "toggle-down") {
     try {
	  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
          tabs[0].id,
        {code: 'var clue = 1;'}, function() { chrome.tabs.executeScript(tabs[0].id,
          {file: 'toggleclues.js'}
          );  
        });      
      });	
      chrome.extension.getBackgroundPage().console.log("executed toggle-down");
	} catch(err) {
		chrome.extension.getBackgroundPage().console.log(err);
	}   
  }
});