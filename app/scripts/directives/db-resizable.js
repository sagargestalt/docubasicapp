angular.module('docubasic3App')
  .directive('dbResizable', function ($rootScope, styleservice) {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        console.log(attr);
        var aspectRatio = 1;

        if(attr.dbAspectRatio) {
          aspectRatio = attr.dbAspectRatio;
        }

        $(element).resizable({
          aspectRatio: aspectRatio
        });
      }
    }
  });