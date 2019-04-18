console.log("in toggleclues");

chrome.storage.onChanged.addListener(function(changes, namespace) {
  console.log("entering for loop in onchanged");
  for (var key in changes) {
	var storageChange = changes[key];
	console.log('Storage key "%s" in namespace "%s" changed. ' +
				'Old value was "%s", new value is "%s".',
				key,
				namespace,
				storageChange.oldValue,
				storageChange.newValue);
	
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
	
	var clues = document.getElementsByClassName("ClueList-wrapper--3m-kd");
	console.log("clues length is " + clues.length);

	var clueBar = document.getElementsByClassName("ClueBar-text--1fYP2");
	console.log("cluebar's length is " + clueBar.length);

	console.log("visibility is " + window.getComputedStyle(clues[clue], null).getPropertyValue('visibility'));
	
	console.log("changing clues and cluebar to " + state);
	clues[clue].style.visibility = state;
	clueBar[0].style.visibility = state;		
  }
});

console.log("calling storage get in toggleclues");
chrome.storage.local.get({acrossVisible: true}, function(data) {
  window.desiredAcross = data.acrossVisible;
  console.log("data structure reports acrossVisible as " + data.acrossVisible);
});
chrome.storage.local.get({downVisible: true}, function(data) {
  window.desiredDown = data.downVisible;
});
console.log("finished calling storage get in toggleclues");
