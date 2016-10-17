angular.module('docubasic3App')
  .directive('dbDraggable', function ($rootScope, styleservice) {
    return {
      restrict: 'A',
      link: function(scope, element) {
        $(element).draggable({ revert: true, helper: "clone", containment: '#wrapper' });
      }
    }
  });