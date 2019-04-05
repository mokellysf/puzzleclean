console.log("in removeacross");
var acrossClues = document.getElementsByClassName("ClueList-wrapper--3m-kd");
console.log("acrossClues length is " + acrossClues.length);
//acrossClues[0].parentNode.removeChild(acrossClues[0]);

console.log("across removed, starting cluebar");
var clueBar = document.getElementsByClassName("ClueBar-text--1fYP2");
console.log("cluebar's length is " + clueBar.length);
//clueBar[0].parentNode.removeChild(clueBar[0]);	

console.log("visibility is " + window.getComputedStyle(acrossClues[0], null).getPropertyValue('visibility'));

if (window.getComputedStyle(acrossClues[0], null).getPropertyValue('visibility') == 'visible') {
  console.log("ac is " + window.getComputedStyle(acrossClues[0], null).getPropertyValue('visibility'));
  console.log("hiding across clues and cluebar");
  acrossClues[0].style.visibility = "hidden";
  clueBar[0].style.visibility = "hidden";
} else {
  console.log("ac is " + window.getComputedStyle(acrossClues[0], null).getPropertyValue('visibility'));
  console.log("showing across clues and cluebar")
  acrossClues[0].style.visibility = "visible";
  clueBar[0].style.visibility = "visible";
}


//console.log("removed cluebar");

//<i class="Icon-pencil--1cTxu Icon-icon--1RAWC"></i>

// ClueBar-text--1fYP2
// ClueBar-bar--2RGEq
