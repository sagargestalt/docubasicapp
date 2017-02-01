'use strict';
angular.module('docubasic3App')
  .directive('dbResizable', function ($timeout) {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        console.log(attr);
        console.log('inside resiazzalbe');
        console.log(element);
        var elementIdSelector = '#' + attr.id;
        var aspectRatio = 1;

        if(attr.dbAspectRatio) {
          aspectRatio = attr.dbAspectRatio;
        }

        $(element).resizable({
          aspectRatio: aspectRatio
        });

        console.log(elementIdSelector);
        /*$timeout(function() {
          console.log('resizable executed');
          $(elementIdSelector).resizable({
            aspectRatio: aspectRatio
          });
        }, 5000);*/
      }
    };
  });