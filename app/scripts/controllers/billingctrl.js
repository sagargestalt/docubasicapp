'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:todoctrl
 * @description
 * # todoctrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('billingctrl',['$scope', '$state','$timeout','$rootScope','$routeParams','$window','settingservice','localStorageService','$location','billingservice',
  function ($scope, $state, $timeout,$rootScope,$routeParams,$window,settingservice,localStorageService,$location,billingservice ) {
 $rootScope.tenancyid = localStorageService.get('tenancyid');
  $rootScope.username = localStorageService.get('username');
  $rootScope.userid = localStorageService.get('userid');
var tid = {
  id:$rootScope.tenancyid 
}

 billingservice.getbilldetail.query((tid), function(data){
 $scope.alerts=[];
        $scope.billingdata = data.data;
         
    });

 	billingservice.getpackages.query({}, function(data){
		 $scope.alerts=[];
        $scope.packagedata = data.data;
         

    });




  		}]);
