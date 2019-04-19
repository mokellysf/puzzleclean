// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let toggleAcross = document.getElementById('toggleAcross');

chrome.extension.getBackgroundPage().console.log("in popup");

toggleAcross.onclick = function(element) {
	chrome.extension.getBackgroundPage().console.log("in toggleAcross");
	try {
	  chrome.storage.local.get("acrossVisible", function(data) {
        chrome.storage.local.set({acrossVisible: !data.acrossVisible});
        console.log("setting acrossVisible to " + !data.acrossVisible);
      });	  
      chrome.extension.getBackgroundPage().console.log("clicked toggle-across");
	} catch(err) {
		chrome.extension.getBackgroundPage().console.log(err);
	}
	chrome.extension.getBackgroundPage().console.log("after call");
};

let toggleDown = document.getElementById('toggleDown');

toggleDown.onclick = function(element) {
	chrome.extension.getBackgroundPage().console.log("in toggleDown");
	try {
	  chrome.storage.local.get("downVisible", function(data) {
        chrome.storage.local.set({downVisible: !data.downVisible});
        console.log("setting downVisible to " + !data.downVisible);
      });
      chrome.extension.getBackgroundPage().console.log("clicked toggle-down");
	} catch(err) {
		chrome.extension.getBackgroundPage().console.log(err);
	}
	chrome.extension.getBackgroundPage().console.log("after call");
};

function refreshChecks() {
  chrome.extension.getBackgroundPage().console.log("in refreshChecks");
  chrome.storage.local.get("acrossVisible", function(data) {
    chrome.extension.getBackgroundPage().console.log("acrossVisible is " + data.acrossVisible);
    toggleAcross.checked = !data.acrossVisible;    
  });
  chrome.storage.local.get("downVisible", function(data) {
    chrome.extension.getBackgroundPage().console.log("downVisible is " + data.downVisible);
    toggleDown.checked = !data.downVisible;
  });
};

window.addEventListener ? 
window.addEventListener("load", refreshChecks, false) : 
window.attachEvent && window.attachEvent("onload", refreshChecks);