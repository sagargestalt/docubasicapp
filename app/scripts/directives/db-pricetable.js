'use strict';
angular.module('docubasic3App')
  .directive('dbPricetable', function ($rootScope) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'views/db-pricetable.html',
      link: function(scope, element, attr) {
        $(element).draggable({containment: '#proposalDropContainer'});
        $(element).attr('id', 'db-square-' + attr.dynamicId);
        //$(element).clone().appendTo('#body');
        /*$(element).find('.editable-area').on('click', function() {
          $(this).focus();
           $rootScope.callme();
        });*/
      scope.addcustomerprice = function(){
        
         var txt=$('#customerval').val();
         $rootScope.catchcustomerprice(txt);
      };
      }

    };
  });