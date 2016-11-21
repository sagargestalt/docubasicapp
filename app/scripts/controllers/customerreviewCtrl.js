'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:praposalsummeryCtrl
 * @description
 * # praposalsummeryCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('customerreviewCtrl', function ($scope, $rootScope,localStorageService,praposalservice,$location,$uibModal,sweetAlert,$routeParams) {
   $scope.reject = false;
   $scope.approve = false;
    

    $rootScope.proposal_id  = $routeParams.proposal_id;
    $rootScope.userid = $routeParams.updated_by;

      var data = {
        proposal_id:$rootScope.proposal_id,
        updated_by:$rootScope.userid,
      };

        praposalservice.praposalreview.save((data), function(data1){
            $scope.alerts=[];
          if (data1.status === true){

            $scope.review = data1.data;
            $scope.pagecontent = data1.data.proposal_page_data;
            //$scope.praposaldata= data1.data.proposals;
            //$scope.praposalactivitydata = data1.data.proposals[0].activity;
            //$scope.praposalcollab = data1.data.proposals[1].collaborator;
              if(data1.data.proposal_status === 4){
                $rootScope.approve = true;

              }
          }
         
        });



      $rootScope.tenancyid = localStorageService.get('tenancyid');
      //$rootScope.userid = localStorageService.get('userid');
      $rootScope.isAdmin = localStorageService.get('isAdmin');
      $rootScope.username = localStorageService.get('username');
      //$rootScope.proposal_id = localStorageService.get('proposal_id');
      $rootScope.template_id = localStorageService.get('template_id');
      $rootScope.templatename = localStorageService.get('templatename');

     

      $scope.opensign = function(){
        $rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/signature.html',
      controller: 'customerreviewCtrl',
      windowClass: 'modal-lg',
      //size: size,
      resolve: {
        
      }
      });

      




      };

      $scope.openreject = function(){
        $rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/reject.html',
      controller: 'customerreviewCtrl',
      windowClass: 'modal-lg',
      //size: size,
      resolve: {
        
      }
      });

      




      };




      $scope.sendpage = function(pagecnt,i){
         $scope.selected = true;

       $scope.selectedIndex=i;
      $scope.ssss =  pagecnt.page_content;
      $scope.pageid = pagecnt.template_page_id;
    };


      
    $scope.preject = function(){
      var data = {
        proposal_id:$rootScope.proposal_id,
        updated_by:$rootScope.userid,

      };

      praposalservice.praposalreject.save((data), function(data1){
            $scope.alerts=[];
          if (data1.status === true){
            $rootScope.modalInstance.close();
            $scope.reject = true;

            }
         
        });
    };


    $scope.send = function(){
        $scope.alerts=[];
        var logo={
             tenancy_id:$rootScope.tenancyid,
             image_raw:$scope.files[0].base64,
            updated_by:$rootScope.userid,
            proposal_id:$rootScope.proposal_id,
        };

        praposalservice.uploadsign.save(angular.toJson(logo), function(responce){

            $scope.message = responce.message;
            if(responce.status === true){
              $scope.imageptah = responce.data.logo_path;
                $scope.alerts.push({msg: 'Picture Updated successfully', type:'success'});
                //init();
            }
            if(responce.status === false){
                $scope.alerts.push({msg: 'error occurd', type:'denger'});
                //init();
            }
            });

    };

    $scope.approvep = function(){
      var data = {
        proposal_id:$rootScope.proposal_id,
        updated_by:$rootScope.userid,

      };

      praposalservice.praposalapprove.save((data), function(data1){
            $scope.alerts=[];
            $scope.errors=[];
          if (data1.status === true){
            $rootScope.modalInstance.close();
            $scope.approve = true;

            }

            if (data1.status === false){
              $scope.alerts.push({msg: 'plz upload signature', type:'denger'});

            }
         
        });



    };
        






      





 


      



});
