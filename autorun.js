window.onload=function(){
  console.log("super duper page load!");
  
  // remove ads section if in userpreferences
  chrome.storage.local.get("removeAds", function(data) {
    if (data.removeAds) {
      var ads = document.getElementsByClassName("Ad-ad--25EEa Ad-fluid--3MBcp");
      console.log("ads length is " + ads.length);
      adsNo = ads.length;

      for (var i = ads.length - 1; i > -1; i--) {
        console.log("loop for " + i);
        ads[i].parentNode.removeChild(ads[i]);
      // 	console.log(ads[i]);
        console.log("completed child removal, i is " + i);
      };
  
      var sup = document.getElementsByClassName("SponsoredBanner-supportedBy--x59D3 hide-on-print");
      console.log("sup length is " + sup.length);
      if (sup.length > 0) {
        sup[0].parentNode.removeChild(sup[0]);
      };
  
      var sup2 = document.getElementsByClassName("SponsoredCard-supportedBy--MAPI8");
      console.log("sup2 length is " + sup2.length);
      if (sup2.length > 0) {
        sup2[0].parentNode.removeChild(sup2[0]);
      };
  
      // this is for the acrostic
      var ac_ads = document.getElementsByClassName("pz-section pz-section-filled pz-ad-box");
      console.log("ac_ads length is " + ac_ads.length);
      for (var i = ac_ads.length - 1; i > -1; i--) {
        ac_ads[i].parentNode.removeChild(ac_ads[i]);
      };
    };
  });

  // alternate puzzles carousel
  chrome.storage.local.get("removeCarousel", function(data) {
    if (data.removeCarousel) {
      var car = document.getElementsByClassName("AlternatePuzzles-alternatePuzzles--2FGMm");
      console.log("carousel length is " + car.length);
      if (car.length > 0) {
        car[0].parentNode.removeChild(car[0]);
      };
    };
  });
  
  // wordplay
  chrome.storage.local.get("removeWordplay", function(data) {
    if (data.removeWordplay) {
      var wp = document.getElementsByClassName("SubGameplayGrid-subGameplayGrid--2OEdn");
      console.log("wp length is " + wp.length);
      if (wp.length > 0) {
        wp[0].parentNode.removeChild(wp[0]);
      };
    };
  });

  // sitemap
  chrome.storage.local.get("removeSitemap", function(data) {
    if (data.removeSitemap) {
      var foot = document.getElementsByClassName("Footer-footerWrapper--3AHd0");
      console.log("foot length is " + foot.length);
      if (foot.length > 0) {
        foot[0].parentNode.removeChild(foot[0]);
      };
  
      // sitemap for acrostic
      var ac_foot = document.getElementsByClassName("pz-footer");
      console.log("ac_foot length is " + ac_foot.length);
      if (ac_foot.length > 0) {
        ac_foot[0].parentNode.removeChild(ac_foot[0]);
      };
    };
  });

  // print and download buttons
  chrome.storage.local.get("removeButtons", function(data) {
    if (data.removeButtons) {
      var print = document.getElementsByClassName("ButtonBar-wrapper--3Cm-R");
      console.log("print length is " + print.length);
      if (print.length > 0) {  
        print[0].parentNode.removeChild(print[0]);
      };  
    };
  });
}