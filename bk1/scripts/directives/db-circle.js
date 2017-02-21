'use strict';
angular.module('docubasic3App')
  .directive('dbCircle', function ($rootScope,  $compile) {
    return {
      restrict: 'AE',
      replace: true,
      templateUrl: 'views/db-circle.html',
      link: function(scope, element, attr) {
        scope.toggleShowHide ="";
         scope.toggleShowHide = false;
        
        $(element).draggable({containment: '#proposalDropContainer'});
        $(element).attr('id', 'db-circle-' + attr.dynamicId);
        $(element).on("resizestop", function( event, ui ) {
          var paddingAfterResize = ui.size.height / 6;
          paddingAfterResize = paddingAfterResize + 'px';
          $(this).css('padding', paddingAfterResize);
        });

        $(element).find('.editable-area').attr('ng-model', "mockContent[" + attr.dynamicId + "]");
        $(element).find('.editable-area').on('click', function() {
          $(this).focus();
          $rootScope.callme();
        });
        scope.removecircle = function() {
           $rootScope.callme();
           $(element).remove();  
           $compile(element.contents())(scope);
        };

        scope.removepopup = function(){
          scope.toggleShowHide = false;
          $rootScope.callme();

         };
        scope.applycolorcircle = function() {
          scope.toggleShowHide = true;
         };
        scope.fillcircle = function() {
           $rootScope.callme();
           scope.circlecolor = angular.copy(scope.myColor);
            $compile(element)(scope);
        };

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

      }
    };
  });