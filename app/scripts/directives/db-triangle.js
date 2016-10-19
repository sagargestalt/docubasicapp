'use strict';
angular.module('docubasic3App')
  .directive('dbTriangle', function ($rootScope, styleservice) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/views/db-triangle.html',
      link: function(scope, element, attr) {

        $(element).attr('id', 'db-triangle-' + attr.dynamicId);
        $(element).draggable({containment: '#proposalDropContainer'});
        $(element).on("resizestop", function( event, ui ) {
          var paddingAfterResize = ui.size.height / 6;
          paddingAfterResize = paddingAfterResize + 'px';
          $(this).css('padding', paddingAfterResize);
        });

        $(element).find('.editable-area').attr('ng-model', "mockContent[" + attr.dynamicId + "]");
        $(element).find('.editable-area').on('click', function() {
          $(this).focus();
        });
      }
    };
  });