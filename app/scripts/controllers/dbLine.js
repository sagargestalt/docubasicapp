angular.module('docubasic3App')
  .directive('dbLine', function ($rootScope, styleservice) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/views/db-line.html',
      link: function(scope, element, attr) {
        $(element).draggable({containment: '#proposalDropContainer'});
        $(element).attr('id', 'db-line-' + attr.dynamicId);

        /*$(element).find('.editable-area').on('click', function() {
          $(this).focus();
        });*/
      }
    }
  });