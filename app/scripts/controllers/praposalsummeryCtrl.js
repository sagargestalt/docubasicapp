'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:praposalsummeryCtrl
 * @description
 * # praposalsummeryCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('praposalsummeryCtrl', function ($scope, $rootScope,localStorageService,praposalservice,$location,$uibModal,sweetAlert) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

      $rootScope.tenancyid = localStorageService.get('tenancyid');
      $rootScope.userid = localStorageService.get('userid');
      $rootScope.isAdmin = localStorageService.get('isAdmin');
      $rootScope.username = localStorageService.get('username');
      $rootScope.proposal_id = localStorageService.get('proposal_id');
      $rootScope.template_id = localStorageService.get('template_id');
      $rootScope.templatename = localStorageService.get('templatename');
      $scope.praposalall = true;

      var data = {
      	tenancy_id: $rootScope.tenancyid,
      	proposal_status:0,
      	created_by:$rootScope.userid,
      };

     	praposalservice.praposalsummeryget.save((data), function(data1){
 			$scope.alerts=[];
      if (data1.status === true){
        	$scope.praposaldata= data1.data.proposals;
          $scope.praposalactivitydata = data1.data.proposals[0].activity;
          $scope.praposalcollab = data1.data.proposals[1].collaborator;
        }

    	});

      $scope.clonepraposal = function(){
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
      controller: 'praposalCtrl',
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

      $scope.emailwindow = function(){
        $rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/email.html',
      controller: 'praposalCtrl',
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
         controller: 'createpraposalCtrl',
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




      });
