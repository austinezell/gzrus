(function() {
  'use strict';
  window.addEventListener("scroll", function(evt){
    let siteNav = document.getElementById("siteNav");
    let main = document.getElementById("main");
    let distance = document.body.scrollTop;
    if (distance >= 75){
      siteNav.classList.add("fixed");
      main.classList.add("top-margin")
    }
    else {
      siteNav.classList.remove("fixed");
      main.classList.remove("top-margin")
    }
  })
}());
