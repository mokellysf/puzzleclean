console.log("in toggleclues");

var clues = document.getElementsByClassName("ClueList-wrapper--3m-kd");
console.log("clues length is " + clues.length);

var clueBar = document.getElementsByClassName("ClueBar-text--1fYP2");
console.log("cluebar's length is " + clueBar.length);

console.log("visibility is " + window.getComputedStyle(clues[clue], null).getPropertyValue('visibility'));

console.log("changing clues and cluebar to " + state);
clues[clue].style.visibility = state;
clueBar[0].style.visibility = state;		