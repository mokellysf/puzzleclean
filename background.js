'use strict';

chrome.extension.getBackgroundPage().console.log("bgjs");

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.onChanged.addListener(function(changes, namespace) {
	console.log("in onChanged");
	
	// general reporting of what changed
	for (var key in changes) {
	  var storageChange = changes[key];
	  console.log('Storage key "%s" in namespace "%s" changed. ' +
				  'Old value was "%s", new value is "%s".',
				  key,
				  namespace,
				  storageChange.oldValue,
				  storageChange.newValue);
	  
	  //
	  // this section is all about toggling clue visibility
	  //
	  
	  // initializing clue to affect across by default
	  var clue = 0;
	  
	  if (key == "acrossVisible") {
		  console.log("setting clue to 0");
		  clue = 0;
	  } else if (key == "downVisible") {
		  console.log("setting clue to 1");
		  clue = 1;
	  };
	
	  console.log("initializing state to visible");
	  var state = "visible";
	
	  if (storageChange.newValue == false) {
		  console.log("changing state to hidden");
		  state = "hidden";
	  };
	  
	  console.log("state is " + state);
	  
	  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
          tabs[0].id,
        {code: 'var clue = ' + clue + '; var state = "' + state + '";'}, function() { chrome.tabs.executeScript(tabs[0].id,
          {file: 'toggleclues.js'}
          );  
        });      
      });
      
      //
      // This section is about what is removed from the page on load, from the options section
      //
      
	}
  });

  
  // on install, set all clues to visible by default
  // this is stored locally as it is assumed players will not want it persisted
  chrome.storage.local.set({acrossVisible: true});
  chrome.storage.local.set({downVisible: true});
  
  // on install, set all sections to be removed by default
  // this is set globally as it assumes players will desire consistency across browsers
  chrome.storage.sync.set({removeAds: true});
  chrome.storage.sync.set({removeSitemap: true});
  chrome.storage.sync.set({removeCarousel: true});
  chrome.storage.sync.set({removeWordplay: true});
  chrome.storage.sync.set({removeButtons: true});  
  
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
      chrome.storage.local.get("acrossVisible", function(data) {
        chrome.storage.local.set({acrossVisible: !data.acrossVisible});
        console.log("setting acrossVisible to " + !data.acrossVisible);
      });	  
      chrome.extension.getBackgroundPage().console.log("executed toggle-across");
	} catch(err) {
		chrome.extension.getBackgroundPage().console.log(err);
	}   
  } else if (command === "toggle-down") {
     try {
      chrome.storage.local.get("downVisible", function(data) {
        chrome.storage.local.set({downVisible: !data.downVisible});
        console.log("setting downVisible to " + !data.downVisible);
      });
      chrome.extension.getBackgroundPage().console.log("executed toggle-down");
	} catch(err) {
		chrome.extension.getBackgroundPage().console.log(err);
	}   
  }
});