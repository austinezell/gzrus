(function() {
  'use strict';
  angular.module('gz')
  .controller('PicCtrl', PicCtrl)

  function PicCtrl(){
    angular.element(document).ready(function(){
      $("#carousel")
      .jR3DCarousel({
        slides: [
          {src: '../dist/images/2gs.jpg'},
          {src: '../dist/images/cartoon.jpg'},
          {src: '../dist/images/2gs.jpg'},
          {src: '../dist/images/cartoon.jpg'},
          {src: '../dist/images/2gs.jpg'},
          {src: '../dist/images/cartoon.jpg'}
        ],
        width: 400,
        height: 400,
        animation: "slide3D"
      })
    })
  }
}());
