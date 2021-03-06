'use strict';
angular.module('docubasic3App')
  .directive('dbImage', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/db-image.html',
      link: function(scope, element, attr) {
        $(element).draggable({containment: '#proposalDropContainer'});
        $(element).attr('id', 'db-image-' + attr.dynamicId);
        $(element).attr('class', 'imagescrolling');


        /*$(element).find('.editable-area').on('click', function() {
          $(this).focus();
        });*/
        scope.removeimage = function() {
           $(element).remove();  
           //$compile(element.contents())(scope);
        };
      }
    };
  });