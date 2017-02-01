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
   //$scope.reject = false;
   //$scope.approve = false;
    $scope.closeAlerts = function(index) {
        $scope.alerts.splice(1, index);
        $scope.alerts = [];
    };
     $scope.closeAlert = function(index) {
        $scope.errors.splice(1, index);
        $scope.errors = [];
    };


   $scope.hideall = false;
   $scope.download = function(){
      
          //proposal_id: $rootScope.proposal_id;

   

         /* praposalservice.downloadpraposal.save((data), function(data){
          $scope.alerts=[];
        //$scope.pagedata= data.data;
         
          });*/ 
          // proposal_id:'@proposal_id'
          var url = 'http://107.170.59.79/services/public/api/v1/downloadProposalpdf/';
          url = url + $rootScope.proposal_id;
          var aEl = document.createElement('a');
          aEl.href = url;
          aEl.click();




      };


   $scope.closemodal = function(){
  $rootScope.rightSidebarsign = false;
  $rootScope.rightSidebarreject = false;

   };
    

    $rootScope.proposal_id  = $routeParams.proposal_id;
    $rootScope.userid = $routeParams.updated_by;
    $rootScope.tenancyid = $routeParams.tenancy_id;
    $rootScope.version_id = $routeParams.version_id;

      var data = {
        proposal_id:$rootScope.proposal_id,
        updated_by:$rootScope.userid,
        tenancy_id:$rootScope.tenancyid,
        version_id:$rootScope.version_id
      };

        praposalservice.praposalreview.save((data), function(data1){
             $rootScope.alerts=[];
          if (data1.status === true){

            $scope.review = data1.data;
            $scope.customertotal = data1.data.customer_total;
            $scope.deadline = data1.data.deadline;
            $scope.pagecontent = data1.data.proposal_page_data;
            $scope.discount = data1.data.afterdiscount;
            $scope.pname = data1.data.proposal_name;

            if(data1.data.proposal_status == '4'){

              $scope.approve = true;
            }
            //$scope.praposaldata= data1.data.proposals;
            //$scope.praposalactivitydata = data1.data.proposals[0].activity;
            //$scope.praposalcollab = data1.data.proposals[1].collaborator;
          }
             
             if (data1.status === false){
                 //$rootScope.alerts.push({msg: 'Invalid Link', type:'denger'});
                 //$scope.approve = true;
               // $location.path( "/login" );

              }

     
         
        });



      //$rootScope.tenancyid = localStorageService.get('tenancyid');
      //$rootScope.userid = localStorageService.get('userid');
      $rootScope.isAdmin = localStorageService.get('isAdmin');
      $rootScope.username = localStorageService.get('username');
      //$rootScope.proposal_id = localStorageService.get('proposal_id');
      $rootScope.template_id = localStorageService.get('template_id');
      $rootScope.templatename = localStorageService.get('templatename');
      $scope.hideapprove = localStorageService.get('approve');

     

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
      $rootScope.resonereject = $scope.reasons; 
      var data = {
        proposal_id:$rootScope.proposal_id,
        updated_by:$rootScope.userid,
        reason:$rootScope.resonereject

      };

      praposalservice.praposalreject.save((data), function(data1){
            $scope.alerts=[];
          if (data1.status === true){
           // $rootScope.modalInstance.close();
             $scope.alerts.push({msg: 'Rejected Successfully', type:'success'});
            $rootScope.approve = true;
             $rootScope.rightSidebarreject = false;

            }
             if (data1.status === false){
              $scope.alerts.push({msg: 'error occurd', type:'denger'});

             }
         
        });
    };


    $scope.send = function(){
        $scope.alerts=[];
         $scope.loading = true;
        var logo={
             tenancy_id:$rootScope.tenancyid,
             image_raw:$scope.files[0].base64,
            updated_by:$rootScope.userid,
            proposal_id:$rootScope.proposal_id,
        };

        praposalservice.uploadsign.save((logo), function(responce){

            $scope.message = responce.message;
            if(responce.status === true){
              $scope.loading = false;
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
            //$rootScope.modalInstance.close();
             $scope.alerts.push({msg: 'Approved Successfully', type:'success'});
            $scope.approve = true;
             //localStorageService.set('approve', $rootScope.approve);

            }

            if (data1.status === false){
              $scope.alerts.push({msg: 'please upload signature', type:'denger'});

            }
         
        });





    };
        






      





 


      



});
