// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let downOnly = document.getElementById('downOnly');

chrome.extension.getBackgroundPage().console.log("in popup");

downOnly.onclick = function(element) {
	chrome.extension.getBackgroundPage().console.log("in click");
	try {
	  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: 'removeacross.js'});
    });
	
	} catch(err) {
		chrome.extension.getBackgroundPage().console.log(err);
	}
	chrome.extension.getBackgroundPage().console.log("after call");
};

pencilToggle.onclick = function(element) {
	chrome.extension.getBackgroundPage().console.log("in click");
	try {
	  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: 'penciltoggle.js'});
    });
	
	} catch(err) {
		chrome.extension.getBackgroundPage().console.log(err);
	}
	chrome.extension.getBackgroundPage().console.log("after call");
};