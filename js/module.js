(function() {
  'use strict';
  angular.module("gz", ["ui.router", "ngAnimate"])
  .config(stateConfig);

  stateConfig.$inject = ["$urlRouterProvider", "$stateProvider"]
  function stateConfig($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/')
    $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./templates/home.html"
      // controller: "HomeCtrl",
      // controllerAs: "Home"
    })
    .state("music", {
      url: "/sick_trax",
      templateUrl: "./templates/music.html"
      //     controller: "MusicCtrl",
      //     controllerAs: "Music"
    })
    //   .state("")
  }

}());
