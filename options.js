// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

console.log("in options");

// assign click functionality to options checkboxes
var el = document.getElementById('options');
var boxes = el.getElementsByTagName('input');

for (var i=0, len=boxes.length; i<len; i++) {
  if ( boxes[i].type === 'checkbox' ) {
    boxes[i].onclick = logClick;    
  };
};

// store user selections
function logClick(box) {
  var which = this.value;
  var remove = this.checked;
  console.log("setting " + which + " to " + remove);
  var obj = {};
  obj[which] = remove;
  chrome.storage.local.set(obj);
};


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