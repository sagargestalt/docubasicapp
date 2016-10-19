'use strict';
angular.module('docubasic3App')
  .directive('dbTable', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/views/db-table.html',
      link: function(scope, element, attr) {
        $(element).attr('id', 'db-table-' + attr.dynamicId);
        $(element).draggable({containment: '#proposalDropContainer'});

        // $(element).find('.editable-area').attr('ng-model', "mockContent[" + attr.dynamicId + "]");
        $(element).find('.editable-area').on('click', function() {
          $(this).focus();
        });
      }
    };
  });