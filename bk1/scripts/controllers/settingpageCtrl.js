'use strict';

/**
 * @ngdoc functionSS
 * @name homer.controller:popupCtrl
 * @description
 * # popupCtrl
 * Controller of the homer

 */
  
angular.module('docubasic3App')
  .controller('settingpageCtrl',['$scope', '$state', '$timeout','$rootScope','$stateParams','$uibModal','$location','localStorageService','$route',
  function ($scope, $state, $timeout,$rootScope,$stateParams,$uibModal,$location,localStorageService,$route) {
    $rootScope.isLogin = localStorageService.get('isLogin');
     $rootScope.profilepath = localStorageService.get('profilepath');
        if(!$rootScope.isLogin) {
           // $location.path( "/login" );
            return false;
        }
        $scope.$route = $route;

$rootScope.rightSidebar1 = false;
 $rootScope.rightSidebarcompanysetting = true;
 $rootScope.rightSidebartask = false;
 $rootScope.rightSidebarprojecttask = false;
  $rootScope.rightSidebarprice = false;
  $rootScope.rightSidebarvendors = false;
  $rootScope.rightSidebarresourcetype = false;
  $rootScope.rightSidebarclient = false;
   $rootScope.rightSidebarstyle = false;
   $rootScope.rightSidebarpage = false;
  $rootScope.rightSidebartemplate = false;



$scope.opencompany = function(){
  $rootScope.rightSidebarcompanysetting = true;
  $rootScope.rightSidebartask = false;
 $rootScope.rightSidebarprojecttask = false;
  $rootScope.rightSidebarprice = false;
  $rootScope.rightSidebarvendors = false;
  $rootScope.rightSidebarresourcetype = false;
  $rootScope.rightSidebarclient = false;
   $rootScope.rightSidebarstyle = false;
   $rootScope.rightSidebarpage = false;
  $rootScope.rightSidebartemplate = false;
    //$scope.active = true;
/* $rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/companysetting.html',
     controller: 'companysettingCtrl',
     windowClass: 'modal-lg animated fadeInRight in',
      //size: size,
      resolve: {
        
      }
    });*/

};


$scope.opentask = function(){



  $rootScope.rightSidebarcompanysetting = false;
  //$rootScope.rightSidebartask = false;
 $rootScope.rightSidebarprojecttask = false;
  $rootScope.rightSidebarprice = false;
  $rootScope.rightSidebarvendors = false;
  $rootScope.rightSidebarresourcetype = false;
  $rootScope.rightSidebarclient = false;
   $rootScope.rightSidebarstyle = false;
   $rootScope.rightSidebarpage = false;
  $rootScope.rightSidebartemplate = false;
    $rootScope.rightSidebartask = true;



};


$scope.openprojecttask = function(){


$rootScope.rightSidebarcompanysetting = false;
  $rootScope.rightSidebartask = false;
 //$rootScope.rightSidebarprojecttask = false;
  $rootScope.rightSidebarprice = false;
  $rootScope.rightSidebarvendors = false;
  $rootScope.rightSidebarresourcetype = false;
  $rootScope.rightSidebarclient = false;
   $rootScope.rightSidebarstyle = false;
   $rootScope.rightSidebarpage = false;
  $rootScope.rightSidebartemplate = false;
  $rootScope.rightSidebarprojecttask = true;
	/*$rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/projecttask.html',
     controller: 'projecttaskCtrl',
     windowClass: 'modal-lg animated fadeInRight in',
      //size: size,
      resolve: {
        
      }
    });*/



};


$scope.openprice = function(){
 

  $rootScope.rightSidebarcompanysetting = false;
  $rootScope.rightSidebartask = false;
 $rootScope.rightSidebarprojecttask = false;
  //$rootScope.rightSidebarprice = false;
  $rootScope.rightSidebarvendors = false;
  $rootScope.rightSidebarresourcetype = false;
  $rootScope.rightSidebarclient = false;
   $rootScope.rightSidebarstyle = false;
   $rootScope.rightSidebarpage = false;
  $rootScope.rightSidebartemplate = false;
   $rootScope.rightSidebarprice = true;
/*$rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/price.html',
     controller: 'pricingsettingCtrl',
     windowClass: 'modal-lg animated fadeInRight in',
      //size: size,
      resolve: {
        
      }
    });*/




};

$scope.openvendor = function(){
  

  $rootScope.rightSidebarcompanysetting = false;
  $rootScope.rightSidebartask = false;
 $rootScope.rightSidebarprojecttask = false;
  $rootScope.rightSidebarprice = false;
  //$rootScope.rightSidebarvendors = false;
  $rootScope.rightSidebarresourcetype = false;
  $rootScope.rightSidebarclient = false;
   $rootScope.rightSidebarstyle = false;
   $rootScope.rightSidebarpage = false;
  $rootScope.rightSidebartemplate = false;
  $rootScope.rightSidebarvendors = true;
/*$rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/vendors.html',
     controller: 'vendorsCtrl',
     windowClass: 'modal-lg animated fadeInRight in',
      //size: size,
      resolve: {
        
      }
    });*/




};

$scope.openresource  = function(){
  

   $rootScope.rightSidebarcompanysetting = false;
  $rootScope.rightSidebartask = false;
 $rootScope.rightSidebarprojecttask = false;
  $rootScope.rightSidebarprice = false;
  $rootScope.rightSidebarvendors = false;
  //$rootScope.rightSidebarresourcetype = false;
  $rootScope.rightSidebarclient = false;
   $rootScope.rightSidebarstyle = false;
   $rootScope.rightSidebarpage = false;
  $rootScope.rightSidebartemplate = false;
  $rootScope.rightSidebarresourcetype = true;
/*$rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/resourcetype.html',
     controller: 'resourcetypeCtrl',
     windowClass: 'modal-lg animated fadeInRight in',
      //size: size,
      resolve: {
        
      }
    });*/




};

$scope.openclient  = function(){
  

    $rootScope.rightSidebarcompanysetting = false;
  $rootScope.rightSidebartask = false;
 $rootScope.rightSidebarprojecttask = false;
  $rootScope.rightSidebarprice = false;
  $rootScope.rightSidebarvendors = false;
  $rootScope.rightSidebarresourcetype = false;
  //$rootScope.rightSidebarclient = false;
   $rootScope.rightSidebarstyle = false;
   $rootScope.rightSidebarpage = false;
  $rootScope.rightSidebartemplate = false;
  $rootScope.rightSidebarclient = true;
/*$rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/client.html',
     controller: 'clientCtrl',
     windowClass: 'modal-lg animated fadeInRight in',
      //size: size,
      resolve: {
        
      }
    });*/




};

$scope.openstyle  = function(){

    $rootScope.rightSidebarcompanysetting = false;
  $rootScope.rightSidebartask = false;
 $rootScope.rightSidebarprojecttask = false;
  $rootScope.rightSidebarprice = false;
  $rootScope.rightSidebarvendors = false;
  $rootScope.rightSidebarresourcetype = false;
  $rootScope.rightSidebarclient = false;
   //$rootScope.rightSidebarstyle = false;
   $rootScope.rightSidebarpage = false;
  $rootScope.rightSidebartemplate = false;
  $rootScope.rightSidebarstyle = true;

/*$rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/styles.html',
     controller: 'styleCtrl',
     windowClass: 'modal-lg animated fadeInRight in',
      //size: size,
      resolve: {
        
      }
    });*/




};

$scope.openpage  = function(){
 

  $rootScope.rightSidebarcompanysetting = false;
  $rootScope.rightSidebartask = false;
 $rootScope.rightSidebarprojecttask = false;
  $rootScope.rightSidebarprice = false;
  $rootScope.rightSidebarvendors = false;
  $rootScope.rightSidebarresourcetype = false;
  $rootScope.rightSidebarclient = false;
   $rootScope.rightSidebarstyle = false;
   //$rootScope.rightSidebarpage = false;
  $rootScope.rightSidebartemplate = false;
   $rootScope.rightSidebarpage = true;
/*$rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/pages.html',
     controller: 'pageCtrl',
     windowClass: 'modal-lg animated fadeInRight in',
      //size: size,
      resolve: {
        
      }
    });*/




};

$scope.opentemplate  = function(){
 


  $rootScope.rightSidebarcompanysetting = false;
  $rootScope.rightSidebartask = false;
 $rootScope.rightSidebarprojecttask = false;
  $rootScope.rightSidebarprice = false;
  $rootScope.rightSidebarvendors = false;
  $rootScope.rightSidebarresourcetype = false;
  $rootScope.rightSidebarclient = false;
   $rootScope.rightSidebarstyle = false;
   $rootScope.rightSidebarpage = false;
  $rootScope.rightSidebartemplate = false;
   $rootScope.rightSidebartemplate = true;
/*$rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/template.html',
     controller: 'templateCtrl',
     windowClass: 'modal-lg animated fadeInRight in',
      //size: size,
      resolve: {
        
      }
    });*/




};




  	}]);