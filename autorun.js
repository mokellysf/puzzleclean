window.onload=function(){
  console.log("super duper page load!");
  var ads = document.getElementsByClassName("Ad-ad--25EEa Ad-fluid--3MBcp");
  console.log("ads length is " + ads.length);

  adsNo = ads.length;

  for (var i = ads.length - 1; i > -1; i--) {
	  console.log("loop for " + i);
	  ads[i].parentNode.removeChild(ads[i]);
  // 	console.log(ads[i]);
	  console.log("completed child removal, i is " + i);
  };

  var car = document.getElementsByClassName("AlternatePuzzles-alternatePuzzles--2FGMm");
  console.log("carousel length is " + car.length);
  if (car.length > 0) {
    car[0].parentNode.removeChild(car[0]);
  };

  var sup = document.getElementsByClassName("SponsoredBanner-supportedBy--x59D3 hide-on-print");
  console.log("sup length is " + sup.length);
  if (sup.length > 0) {
    sup[0].parentNode.removeChild(sup[0]);
  };
  
  var wp = document.getElementsByClassName("SubGameplayGrid-subGameplayGrid--2OEdn");
  console.log("wp length is " + wp.length);
  if (wp.length > 0) {
    wp[0].parentNode.removeChild(wp[0]);
  };

  var foot = document.getElementsByClassName("Footer-footerWrapper--3AHd0");
  console.log("foot length is " + foot.length);
  if (foot.length > 0) {
    foot[0].parentNode.removeChild(foot[0]);
  };

  var print = document.getElementsByClassName("ButtonBar-wrapper--3Cm-R");
  console.log("print length is " + print.length);
  if (print.length > 0) {  
    print[0].parentNode.removeChild(print[0]);
  };
  
  var sup2 = document.getElementsByClassName("SponsoredCard-supportedBy--MAPI8");
  console.log("sup2 length is " + sup2.length);
  if (sup2.length > 0) {
    sup2[0].parentNode.removeChild(sup2[0]);
  };
  
//  ButtonBar-wrapper--3Cm-R
  
}