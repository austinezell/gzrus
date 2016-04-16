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
      templateUrl: "./templates/home.html",
      controller: "PicCtrl",
      controllerAs: "Pic"
    })
    .state("main.music", {
      url: "/sick_trax",
      templateUrl: "./templates/music.html"
      //     controller: "MusicCtrl",
      //     controllerAs: "Music"
    })
    .state("main.tour", {
      url: "/dope_shows",
      templateUrl: "./templates/dates.html"
    })
    .state("main.bio", {
      template: "<div ui-view></div>",
      abstract: true
    })
    .state("main.bio.both", {
      url: "/tunnel_brothers",
      templateUrl: "./templates/bros.html"
      // controller: "ContentCtrl"
    })
    .state("main.bio.brett", {
      url: "/brett",
      templateUrl: "./templates/bro.html"
    })
    .state("main.bio.trevor", {
      url: "/trevor",
      templateUrl: "./templates/bro.html",
    })
  }

}());
