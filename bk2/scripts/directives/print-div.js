'use strict';

/**
 * @ngdoc directive
 * @name missileManApp.directive:printDivDirective
 * @description
 * # printDiveDirective
 */
angular.module('docubasic3App')
 .directive('redirecttoBack', function () {
    return {
      restrict: 'A',
       link: function( scope, element, attrs ) {
            element.on( 'click', function () {
                history.back();
                scope.$apply();
            } );
        }
    };
});
