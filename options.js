// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.extension.getBackgroundPage().console.log("in options");

var el = document.getElementById('options');
var boxes = el.getElementsByTagName('input');

for (var i=0, len=boxes.length; i<len; i++) {
  if ( boxes[i].type === 'checkbox' ) {
    boxes[i].onclick = logClick;    
  };
};

function logClick(box) {
  console.log("this looks like " + this);
  console.log("and has the value " + this.value);
};

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


//initialize all boxes to be checked according to stored values
function refreshOptionsChecks() {  
  var el = document.getElementById('options');  
  var boxes = el.getElementsByTagName('input');  
  for (var i=0, len=boxes.length; i<len; i++) {
    if ( boxes[i].type === 'checkbox' ) {
      initiateBox(boxes[i]);
    };
  };
};

function initiateBox(box) {
  var which = box.value;
  chrome.storage.local.get(which, function(data) {
    box.checked = data[which];
  });
};

window.addEventListener ? 
window.addEventListener("load", refreshOptionsChecks, false) : 
window.attachEvent && window.attachEvent("onload", refreshOptionsChecks);