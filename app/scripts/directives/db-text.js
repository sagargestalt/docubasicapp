'use strict';
angular.module('docubasic3App')
  .directive('dbText', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/views/db-text.html',
      link: function(scope, element, attr) {
        $(element).draggable({containment: '#proposalDropContainer'});
        $(element).attr('id', 'db-text-' + attr.dynamicId);

        // $(element).find('.editable-area').attr('ng-model', 'mockContent[' +attr.dynamicId+ ']');
        $(element).find('.editable-area').on('click', function() {
          $(this).focus();
        });
      }
    };
  });