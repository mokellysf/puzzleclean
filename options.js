// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let removeAds = document.getElementById('removeAds');
let removeSitemap = document.getElementById('removeSitemap');
let removeCarousel = document.getElementById('removeCarousel');
let removeWordplay = document.getElementById('removeWordplay');
let removeButtons = document.getElementById('removeButtons');


chrome.extension.getBackgroundPage().console.log("in options");

// removeAds.onclick = function(element) {
// 	chrome.extension.getBackgroundPage().console.log("in toggleAcross");
// 	try {
// 	  chrome.storage.local.get("acrossVisible", function(data) {
//         chrome.storage.local.set({acrossVisible: !data.acrossVisible});
//         console.log("setting acrossVisible to " + !data.acrossVisible);
//       });	  
//       chrome.extension.getBackgroundPage().console.log("clicked toggle-across");
// 	} catch(err) {
// 		chrome.extension.getBackgroundPage().console.log(err);
// 	}
// 	chrome.extension.getBackgroundPage().console.log("after call");
// };
// 
// let toggleDown = document.getElementById('toggleDown');
// 
// toggleDown.onclick = function(element) {
// 	chrome.extension.getBackgroundPage().console.log("in toggleDown");
// 	try {
// 	  chrome.storage.local.get("downVisible", function(data) {
//         chrome.storage.local.set({downVisible: !data.downVisible});
//         console.log("setting downVisible to " + !data.downVisible);
//       });
//       chrome.extension.getBackgroundPage().console.log("clicked toggle-down");
// 	} catch(err) {
// 		chrome.extension.getBackgroundPage().console.log(err);
// 	}
// 	chrome.extension.getBackgroundPage().console.log("after call");
// };
// 


// initialize all boxes to be checked according to stored values
function refreshOptionsChecks() {
  chrome.extension.getBackgroundPage().console.log("in refreshOptionsChecks");

  chrome.storage.local.get("removeAds", function(data) {
    chrome.extension.getBackgroundPage().console.log("removeAds is " + data.removeAds);
    removeAds.checked = data.removeAds;    
  });

  chrome.storage.local.get("removeSitemap", function(data) {
    chrome.extension.getBackgroundPage().console.log("removeSitemap is " + data.removeSitemap);
    removeSitemap.checked = data.removeSitemap;
  });
    chrome.storage.local.get("removeCarousel", function(data) {
    chrome.extension.getBackgroundPage().console.log("removeCarousel is " + data.removeCarousel);
    removeCarousel.checked = data.removeCarousel;
  });

  chrome.storage.local.get("removeWordplay", function(data) {
    chrome.extension.getBackgroundPage().console.log("removeWordplay is " + data.removeWordplay);
    removeWordplay.checked = data.removeWordplay;
  });

  chrome.storage.local.get("removeButtons", function(data) {
    chrome.extension.getBackgroundPage().console.log("removeButtons is " + data.removeButtons);
    removeButtons.checked = data.removeButtons;
  });

};

window.addEventListener ? 
window.addEventListener("load", refreshOptionsChecks, false) : 
window.attachEvent && window.attachEvent("onload", refreshOptionsChecks);