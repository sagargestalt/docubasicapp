'use strict';

angular.module('docubasic3App')
  .directive('dbLine', function ($rootScope) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/db-line.html',
      link: function(scope, element, attr) {
        $(element).draggable({containment: '#proposalDropContainer'});
        $(element).attr('id', 'db-line-' + attr.dynamicId);
         $(element).draggable({
      start: function() {
       $rootScope.callme();
      },
      drag: function() {
        $rootScope.callme();
      },
      stop: function() {
        $rootScope.callme();
       
      }
    });

        /*$(element).find('.editable-area').on('click', function() {
          $(this).focus();
        });*/
      }
    };
  });