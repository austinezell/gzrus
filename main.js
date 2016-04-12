"use strict";
window.addEventListener("scroll", function(evt){
  let siteNav = document.getElementById("siteNav");
  let banner = document.getElementById("banner");
  let distance = document.body.scrollTop;
  if (distance >= 75){
    siteNav.classList.add("fixed");
    banner.classList.add("top-margin")
  }
   else {
    siteNav.classList.remove("fixed");
    banner.classList.remove("top-margin")
  }
})
