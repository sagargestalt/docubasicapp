angular.module('docubasic3App')
  .directive('dbImage', function ($rootScope, styleservice) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/views/db-image.html',
      link: function(scope, element, attr) {
        $(element).draggable({containment: '#proposalDropContainer'});
        $(element).attr('id', 'db-image-' + attr.dynamicId);

        /*$(element).find('.editable-area').on('click', function() {
          $(this).focus();
        });*/
      }
    }
  });