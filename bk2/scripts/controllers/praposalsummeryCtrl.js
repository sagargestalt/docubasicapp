'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:praposalsummeryCtrl
 * @description
 * # praposalsummeryCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('proposalsummeryCtrl', function ($scope, $rootScope,localStorageService,praposalservice,$location,$uibModal,sweetAlert,$route) {
    
      $rootScope.tenancyid = localStorageService.get('tenancyid');
      $rootScope.userid = localStorageService.get('userid');
      $rootScope.isAdmin = localStorageService.get('isAdmin');
      $rootScope.username = localStorageService.get('username');
      $rootScope.proposal_id = localStorageService.get('proposal_id');
      $rootScope.template_id = localStorageService.get('template_id');
      $rootScope.templatename = localStorageService.get('templatename');
      $rootScope.isLogin = localStorageService.get('isLogin');
        $rootScope.profilepath = localStorageService.get('profilepath');
         $scope.$route = $route;
      
        if(!$rootScope.isLogin) {
            $location.path( "/login" );
            return false;
        }
      $scope.selected = true;
      var costdata = {

      tenancy_id: $rootScope.tenancyid,
    created_by:  $rootScope.userid,
     created_bproposal_id: $rootScope.proposal_id
 
      };
        praposalservice.costprofit.save((costdata), function(data1){
          });

      var data = {
      	tenancy_id: $rootScope.tenancyid,
      	proposal_status:0,
      	created_by:$rootScope.userid,
      };

     	praposalservice.praposalsummeryget.save((data), function(data1){
 			$scope.alerts=[];
      if (data1.status === true){
        	$scope.praposaldata= data1.data.proposals;
          $scope.praposalactivitydata = data1.data.proposals.activity;
          $scope.praposalcollab = data1.data.proposals.collaborator;
        }

    	});

      $scope.clonepraposal = function(detail){
        $rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/clone.html',
      controller: 'cloneCtrl',
      windowClass: 'modal-lg',
      //size: size,
      resolve: {

      }
      });






      };


      $scope.deletepraposal = function(){

        sweetAlert.swal({
                title: "Are you sure want to delete?",
               //text: "Your will not be able to reco",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: false,
                closeOnCancel: false },
            function (isConfirm) {
                if (isConfirm) {
        var data = {
          tenancy_id:$rootScope.tenancyid,
          updated_by:$rootScope.userid,
          proposal_id:$rootScope.proposal_id,


        };

         praposalservice.deletepraposal.save((data), function(){

          $scope.alerts=[];


          });

          sweetAlert.swal("Deleted!", " Deleted successfully", "success");
                } else {
                    sweetAlert.swal("Cancelled");
                }
            });

      };

       $scope.priweviemode = function(){

          $location.path( "/preview" );
       };

       $scope.download = function(){

          // proposal_id: $rootScope.proposal_id;



               /* praposalservice.downloadpraposal.save((data), function(data){
                $scope.alerts=[];
              //$scope.pagedata= data.data;

                });*/
          // proposal_id:'@proposal_id'
            var url = 'http://49.248.126.222:8282/services/public/api/v1/downloadProposalpdf/';
            url = url + $rootScope.proposal_id;
            var aEl = document.createElement('a');
        aEl.href = url;
        aEl.click();




      };

      $scope.opencollab = function(){
        $rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/collabraters.html',
      controller: 'proposalCtrl',
      windowClass: 'modal-lg',
      //size: size,
      resolve: {

      }
      });

        var collab = {
        proposal_id: $rootScope.proposal_id,
        tenancy_id: $rootScope.tenancyid

        };

        praposalservice.getcollabraters.save((collab), function(data){
        $scope.alerts=[];
        $scope.collabdata= data.data;

      });


      };

      $scope.emailwindow = function(detail){
         $rootScope.proposal_id = detail.id;
        $rootScope.client_email =  detail.client_email_id;
        $rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/email.html',
      controller: 'proposalCtrl',
      windowClass: 'modal-lg',
      //size: size,
      resolve: {

      }
      });


      };


      $scope.createpraposal = function(){
        $rootScope.modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'views/createpraposal.html',
         controller: 'createproposalCtrl',
        windowClass: 'modal-lg',
        //size: size,
        resolve: {

        }
      });





      };


      $scope.allpraposal = function(){

        $scope.praposalall = true;
        $scope.underreviewpraposal = false;
         $scope.openpraposal = false;
         $scope.closedpraposal = false;


      };

      $scope.open = function(){

        $scope.openpraposal = true;
        $scope.praposalall = false;
        $scope.closedpraposal = false;
        $scope.praposalall = false;
      };

      $scope.underreview = function(){
        $scope.underreviewpraposal = true;
         $scope.openpraposal = false;
         $scope.praposalall = false;
          $scope.closedpraposal = false;


      };

      $scope.closed = function(){
        $scope.closedpraposal = true;
        $scope.underreviewpraposal = false;
         $scope.openpraposal = false;
         $scope.praposalall = false;

      };
      $scope.reopen = function(){
        $scope.reopenproposal = true;
        $scope.closedpraposal = false;
        $scope.underreviewpraposal = false;
         $scope.openpraposal = false;
         $scope.praposalall = false;

      };
       $scope.reject = function(){
        $scope.rejectproposal = true;
        $scope.reopenproposal = false;
        $scope.closedpraposal = false;
        $scope.underreviewpraposal = false;
         $scope.openpraposal = false;
         $scope.praposalall = false;

      };


$scope.$watch('proposal_id', function () {
      localStorageService.set('proposal_id',$rootScope.proposal_id);
     // localStorageService.set('userid',$rootScope.userid);
    }, true);
$scope.$watch('client_email', function () {
      localStorageService.set('client_email',$rootScope.client_email);
     // localStorageService.set('userid',$rootScope.userid);
    }, true);


      });
