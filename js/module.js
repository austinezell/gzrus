(function() {
  'use strict';
  angular.module("gz", ["ui.router", "ngAnimate"])
  .config(stateConfig);

  stateConfig.$inject = ["$urlRouterProvider", "$stateProvider"]
  function stateConfig($urlRouterProvider, $stateProvider){
    $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./templates/home.html",
      controller: "PageCtrl"
    })
  }

}());
