(function() {
  'use strict';
  angular.module("gz", ["ui.router", "ngAnimate"])
  .config(stateConfig);

  stateConfig.$inject = ["$urlRouterProvider", "$stateProvider"]
  function stateConfig($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/')
    $stateProvider
    .state("main", {
      abstract: true,
      template: "<div ui-view id=\"main\"></div>"
    })
    .state("main.home", {
      url: "/",
      templateUrl: "./templates/home.html"
      // controller: "HomeCtrl",
      // controllerAs: "Home"
    })
    .state("main.music", {
      url: "/sick_trax",
      templateUrl: "./templates/music.html"
      //     controller: "MusicCtrl",
      //     controllerAs: "Music"
    })
    //   .state("")
  }

}());
