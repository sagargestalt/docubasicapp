'use strict';

/**
 * @ngdoc directive
 * @name docubasic3App.directive:onlyWords
 * @description
 * # onlyWords
 */
angular.module('docubasic3App')
  .directive('onlyWords', function () {
    return {

    	require: 'ngModel',
    link: function (scope, element, attr, ngModelCtrl) {
      function fromUser(text) {
        var transformedInput = text.replace(/[^a-z,A-Z]/g, '');
        //console.log(transformedInput);
        if(transformedInput !== text) {
            ngModelCtrl.$setViewValue(transformedInput);
            ngModelCtrl.$render();
        }
        return transformedInput;  
      }
      ngModelCtrl.$parsers.push(fromUser);
      
      }
    };
  });
