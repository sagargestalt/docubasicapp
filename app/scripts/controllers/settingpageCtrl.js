'use strict';

/**
 * @ngdoc functionSS
 * @name homer.controller:popupCtrl
 * @description
 * # popupCtrl
 * Controller of the homer

 */
  
angular.module('docubasic3App')
  .controller('settingpageCtrl',['$scope', '$state', '$timeout','$rootScope','$stateParams','$uibModal','loginService','SocialLoginservice',
  function ($scope, $state, $timeout,$rootScope,$stateParams,$uibModal,loginService,$uibModalInstance,SocialLoginservice) {

 $rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/companysetting.html',
     controller: 'companysettingCtrl',
     windowClass: 'modal-lg',
      //size: size,
      resolve: {
        
      }
    });


$scope.opencompany = function(){

 $rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/companysetting.html',
     controller: 'companysettingCtrl',
     windowClass: 'modal-lg',
      //size: size,
      resolve: {
        
      }
    });

};


$scope.opentask = function(){

	$rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/task.html',
     controller: 'taskcategoryCtrl',
     windowClass: 'modal-lg',
      //size: size,
      resolve: {
        
      }
    });



};


$scope.openprojecttask = function(){

	$rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/projecttask.html',
     controller: 'projecttaskCtrl',
     windowClass: 'modal-lg',
      //size: size,
      resolve: {
        
      }
    });



};


$scope.openprice = function(){
$rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/price.html',
     controller: 'pricingsettingCtrl',
     windowClass: 'modal-lg',
      //size: size,
      resolve: {
        
      }
    });




};

$scope.openvendor = function(){
$rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/vendors.html',
     controller: 'vendorsCtrl',
     windowClass: 'modal-lg',
      //size: size,
      resolve: {
        
      }
    });




};

$scope.openresource  = function(){
$rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/resourcetype.html',
     controller: 'resourcetypeCtrl',
     windowClass: 'modal-lg',
      //size: size,
      resolve: {
        
      }
    });




};

$scope.openclient  = function(){
$rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/client.html',
     controller: 'clientCtrl',
     windowClass: 'modal-lg',
      //size: size,
      resolve: {
        
      }
    });




};

$scope.openstyle  = function(){
$rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/styles.html',
     controller: 'styleCtrl',
     windowClass: 'modal-lg',
      //size: size,
      resolve: {
        
      }
    });




};

$scope.openpage  = function(){
$rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/pages.html',
     controller: 'pageCtrl',
     windowClass: 'modal-lg',
      //size: size,
      resolve: {
        
      }
    });




};

$scope.opentemplate  = function(){
$rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/template.html',
     controller: 'templateCtrl',
     windowClass: 'modal-lg',
      //size: size,
      resolve: {
        
      }
    });




};




  	}]);