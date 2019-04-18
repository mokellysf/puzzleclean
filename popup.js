// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let downOnly = document.getElementById('downOnly');

chrome.extension.getBackgroundPage().console.log("in popup");

downOnly.onclick = function(element) {
	chrome.extension.getBackgroundPage().console.log("in downOnly");
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

acrossOnly.onclick = function(element) {
	chrome.extension.getBackgroundPage().console.log("in acrossOnly");
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