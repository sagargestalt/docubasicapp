'use strict';
angular.module('docubasic3App')
  .directive('dbDraggable', function ($timeout,$rootScope) {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
      	var elementid = '#' + attr.id;
        $(element).draggable({ revert: true, helper: "clone", containment: '#wrapper' });
        console.log(elementid);
           
         /*$timeout(function() {
          console.log('draggable executed');
          $(elementid).draggable({ revert: true, helper: "clone", containment: '#wrapper' });
        }, 5000);*/
      }
    };
  });