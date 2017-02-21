'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:praposalsummeryCtrl
 * @description
 * # praposalsummeryCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('ImageUploadCtrl', function ($scope, $rootScope,localStorageService,praposalservice,$location,$uibModal,sweetAlert,settingservice,$route) {
 		
  		  $rootScope.tenancyid = localStorageService.get('tenancyid');
	      $rootScope.userid = localStorageService.get('userid');
	      $rootScope.isAdmin = localStorageService.get('isAdmin');
	      $rootScope.username = localStorageService.get('username');
	      $rootScope.proposal_id = localStorageService.get('proposal_id');
	      $rootScope.template_id = localStorageService.get('template_id');
      	  $rootScope.templatename = localStorageService.get('templatename');


function init() {
 		 var imageids={
	        tenancy_id:$rootScope.tenancyid,
	         proposal_id: $rootScope.proposal_id, 

      	};

       praposalservice.getiamage.save((imageids), function(data){
        //$scope.alerts=[];
        $scope.iamgedata= data.data.images;
         
      });

   }

   	 $scope.imageupload = function(){
        $scope.loading = true;
        $scope.errors = [];
        var data = {
             template_id:$rootScope.template_id,
              page_id: $rootScope.pageid,
               page_id:2,
              proposal_id:$rootScope.proposal_id,
              image_raw:$scope.files[0].base64,
               tenancy_id:$rootScope.tenancyid,
               created_by:$rootScope.userid,
           };

            praposalservice.upiamage.save((data), function(data){
              if(data.status == true){
                $scope.loading = false;
              //$scope.alerts=[];
              var imagepath = data.logo_path;
              //$rootScope.imageinsert(imagepath);
              $scope.iamge= data.data;
              init();
            }
            if(data.status == false){

               $scope.errors = data.message;
            }
         
            });

        };

   init();




  	 });