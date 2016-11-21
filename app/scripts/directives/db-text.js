'use strict';
angular.module('docubasic3App')
  .directive('dbText', function ($rootScope) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/db-text.html',
      link: function(scope, element, attr) {
         
       //var parea;
         var dynamicId = new Date().getTime(); 
         $rootScope.dynamicIdtxt = dynamicId;
         $(element).find('.editable-area').on('click', function() {
          $(this).focus();
          $rootScope.callme();
          $(element).draggable({ disabled: true });
        });
        $(element).find('.editable-area').on("blur", function(){
            $(element).draggable({ disabled: false });




        });



        $(element).draggable({containment: '#proposalDropContainer'});
        $(element).attr('id', 'db-text-' + attr.dynamicId);
        //$(element).attr('ng-model', 'mockContent[' +attr.dynamicId+ ']');
        //$rootScope.attid = dynamicId;

        //$(element).find('.editable-area').attr('ng-model', 'mockContent[' +attr.dynamicId+ ']');
        //$(element).find('.editable-area').attr('medium-editor');
        scope.removetext = function() {
           $(element).remove();  
        };

      }
    };
  });