'use strict';
angular.module('docubasic3App')
  .directive('dbSquare', function ($rootScope,$compile) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/db-square.html',
      link: function(scope, element, attr) {
         scope.toggleShowHide ="";
         scope.toggleShowHide = false;
        $(element).draggable({containment: '#proposalDropContainer'});
        $(element).attr('id', 'db-square-' + attr.dynamicId);

        $(element).find('.editable-area').on('click', function() {
          $(this).focus();
           $rootScope.callme();
        });
       scope.applycolor =  function() {
          scope.toggleShowHide = true;
         };

         scope.removepopup = function(){
           $rootScope.callme();
          scope.toggleShowHide = false;

         };
        scope.removesquare = function() {
           $rootScope.callme();
           $(element).remove();  
           $compile(element.contents())(scope);
        };
        scope.fillsquare = function() {
           $rootScope.callme();
           scope.squuarecolor = angular.copy(scope.mysqColor);
            //scope.toggleShowHide = false;
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