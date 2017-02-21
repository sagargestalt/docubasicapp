'use strict';
angular.module('docubasic3App')
  .directive('dbTasktable', function () {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'views/db-tasktable.html',
      link: function(scope, element, attr) {
        $(element).draggable({containment: '#proposalDropContainer'});
        $(element).attr('id', 'db-Tasktable-' + attr.dynamicId);
        //$(element).clone().appendTo('#body');
        /*$(element).find('.editable-area').on('click', function() {
          $(this).focus();
           $rootScope.callme();
        });*/
      /*scope.addcustomerprice = function(){
        
         var txt=$('#customerval').val();
         $rootScope.catchcustomerprice(txt);
      };*/
      }

    };
  });