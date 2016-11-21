'use strict';
angular.module('docubasic3App')
  .directive('dbCircle', function ($rootScope,  $compile) {
    return {
      restrict: 'AE',
      replace: true,
      templateUrl: 'views/db-circle.html',
      link: function(scope, element, attr) {

        $(element).attr('id', 'db-circle-' + attr.dynamicId);
        $(element).draggable({containment: '#proposalDropContainer'});
        $(element).on("resizestop", function( event, ui ) {
          var paddingAfterResize = ui.size.height / 6;
          paddingAfterResize = paddingAfterResize + 'px';
          $(this).css('padding', paddingAfterResize);
        });

        //$(element).find('.editable-area').attr('ng-model', "mockContent[" + attr.dynamicId + "]");
        $(element).find('.editable-area').on('click', function() {
          $(this).focus();
          $rootScope.callme();
        });
        scope.removecircle = function() {
           $(element).remove();  
        };
        $compile(element.contents())(scope);

      }
    };
  });