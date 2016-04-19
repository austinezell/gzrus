webpackJsonp([0],[/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
function(t,e,i){"use strict";i(1),i(2)},/*!**************************!*\
  !*** ./src/js/module.js ***!
  \**************************/
function(t,e){"use strict";!function(){function t(t,e){t.otherwise("/"),e.state("main",{"abstract":!0,template:'<div ui-view id="main"></div>'}).state("main.home",{url:"/",templateUrl:"./templates/home.html",controller:"PicCtrl",controllerAs:"Pic"}).state("main.music",{url:"/sick_trax",templateUrl:"./templates/music.html"}).state("main.tour",{url:"/dope_shows",templateUrl:"./templates/dates.html"}).state("main.bio",{template:'<div ui-view id="g-z"></div>',"abstract":!0}).state("main.bio.both",{url:"/tunnel_brothers",templateUrl:"./templates/bros.html"}).state("main.bio.brett",{url:"/brett",templateUrl:"./templates/bro.html"}).state("main.bio.trevor",{url:"/trevor",templateUrl:"./templates/bro.html"})}angular.module("gz",["ui.router","ngAnimate"]).config(t),t.$inject=["$urlRouterProvider","$stateProvider"]}()},/*!*******************************************!*\
  !*** ./src/js/controllers/controllers.js ***!
  \*******************************************/
function(t,e){"use strict";!function(){function t(){angular.element(document).ready(function(){$("#carousel").jR3DCarousel({slides:[{src:"../dist/images/2gs.jpg"},{src:"../dist/images/cartoon.jpg"},{src:"../dist/images/2gs.jpg"},{src:"../dist/images/cartoon.jpg"},{src:"../dist/images/2gs.jpg"},{src:"../dist/images/cartoon.jpg"}],width:400,height:400,animation:"slide3D"})})}angular.module("gz").controller("PicCtrl",t)}()}]);
//# sourceMappingURL=bundle.js.map