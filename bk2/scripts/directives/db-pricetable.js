'use strict';
angular.module('docubasic3App')
  .directive('dbPricetable', function ($rootScope,$compile) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'views/db-pricetable.html',
      link: function(scope, element, attr) {
        $(element).draggable({containment: '#proposalDropContainer'});
        $(element).attr('id', 'db-square-' + attr.dynamicId);
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
        //$(element).clone().appendTo('#body');
        /*$(element).find('.editable-area').on('click', function() {
          $(this).focus();
           $rootScope.callme();
        });*/
 
      scope.addcustomerprice = function(){
        
         var txt=$('#customerval').val();
         $rootScope.catchcustomerprice(txt);
      };

       scope.deletetable = function(){
            $(element).remove();  
           $compile(element.contents())(scope);

  };
      }

    };
  });