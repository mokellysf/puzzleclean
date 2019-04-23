// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

var el = document.getElementById('toggles');
var boxes = el.getElementsByTagName('input');

for (var i=0, len=boxes.length; i<len; i++) {
  if ( boxes[i].type === 'checkbox' ) {
    boxes[i].onclick = toggle;    
  };
};

function toggle(box) {
  var which = this.value;
  var hide = this.checked;
  console.log("setting " + which + " to " + !hide);
  var obj = {};
  obj[which] = !hide;
  chrome.storage.local.set(obj);
};

function refreshChecks() {  
  var el = document.getElementById('toggles');  
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
    box.checked = !data[which];
    console.log("setting " + which + " to " + !data.which);
  });
};

window.addEventListener ? 
window.addEventListener("load", refreshChecks, false) : 
window.attachEvent && window.attachEvent("onload", refreshChecks);