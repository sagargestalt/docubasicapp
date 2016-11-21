'use strict';
angular.module('docubasic3App')
  .directive('dbSquare', function ($rootScope) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/db-square.html',
      link: function(scope, element, attr) {
        $(element).draggable({containment: '#proposalDropContainer'});
        $(element).attr('id', 'db-square-' + attr.dynamicId);

        $(element).find('.editable-area').on('click', function() {
          $(this).focus();
           $rootScope.callme();
        });
      }
    };
  });