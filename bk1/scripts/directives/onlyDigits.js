'use strict';

/**
 * @ngdoc directive
 * @name docubasic3App.directive:onlyDigits
 * @description
 * # onlyDigits
 */
angular.module('docubasic3App')
  .directive('onlyDigits', function () {
    return {

    	require: 'ngModel',
    link: function (scope, element, attr, ngModelCtrl) {
      function fromUser(text) {
        var transformedInput = text.replace(/[^0-9,_@./#&+-]*$]/g, '');
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
