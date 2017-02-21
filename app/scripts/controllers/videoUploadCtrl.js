'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:praposalsummeryCtrl
 * @description
 * # praposalsummeryCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('videoUploadCtrl', function ($scope, $rootScope,localStorageService,praposalservice,$location,$uibModal,sweetAlert,settingservice,$route) {
 $scope.submitUrl = function(){
 	 
 	var videoUrl = $scope.videoUrl; 
 	console.log(videoUrl);
 	 $rootScope.modalInstance.close();
  	 $rootScope.$broadcast('catchurl',$scope.videoUrl); 


  	 
  	};

  	$scope.closemodal = function(){
  		$rootScope.modalInstance.close();

  	};
  	 });