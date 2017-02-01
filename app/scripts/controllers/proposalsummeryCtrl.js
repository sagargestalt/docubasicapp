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
       $rootScope.client_email = localStorageService.get('client_email');
       $rootScope.version_id = localStorageService.get('version_id');
        $rootScope.profilepath = localStorageService.get('profilepath');
        $scope.todaysdate = new Date();
        $scope.$route = $route;

       
        if(!$rootScope.isLogin) {
            //$location.path( "/login" );
            return false;
        }
       
     // $scope.praposalall = true;
     $scope.selecteds = true;
     $scope.closemodal = function(){
          $rootScope.modalInstance.close();

      };
      $scope.closeAlerts = function(index) {
        $scope.alerts.splice(1, index);
        $scope.alerts = [];
    };
   // $scope.dtOptions = DTOptionsBuilder.newOptions().withOption('aaSorting', [[2, 'desc']])
     $scope.closeAlert = function(index) {
        $scope.errors.splice(1, index);
        $scope.errors = [];
    };

      function init(){
         $scope.all = {'background-color': '#63c685'};
         $scope.toemail = $rootScope.client_email;

       var costdata = {

      tenancy_id: $rootScope.tenancyid,
    created_by:  $rootScope.userid,
     proposal_id: $rootScope.proposal_id,
       version_id:$rootScope.version_id
 
      };
        praposalservice.costprofit.save((costdata), function(data1){
         $scope.costprofitdata = data1.data.all_costprofit_data;
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
          $scope.praposalactivitydata = data1.data.proposals[0].activity;
          $scope.praposalcollab = data1.data.proposals[0].collaborator;
        }
         
    	});

        $scope.praposalall = true;
        $scope.underreviewpraposal = false;
         $scope.openpraposal = false;
         $scope.closedpraposal = false;


     }
     init();

      $scope.clonepraposal = function(detail){
        $rootScope.template_id = detail.template_id;
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


      $scope.deletepraposal = function(detail){
        $rootScope.proposal_id =  detail.id;

         localStorageService.set('proposal_id',$rootScope.proposal_id);
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

         praposalservice.deletepraposal.save((data), function(message){
          if(message.status == true){
              init();

          }

          $scope.alerts=[];
      
         
          });

          sweetAlert.swal("Deleted!", " Deleted successfully", "success");
        
                } else {
                    sweetAlert.swal("Cancelled");
                }
                init();
            });

      };

       $scope.priweviemode = function(detail){
         $rootScope.template_id = detail.template_id
        $rootScope.proposal_id =  detail.id;
         $rootScope.praposalname = detail.name;
        $rootScope.version_id = detail.version_id;
        console.log(detail);
        localStorageService.set('version_id',$rootScope.version_id);







         //$rootScope.proposal_id = detail.id;
          localStorageService.set('proposal_id',$rootScope.proposal_id);

          $location.path( "/preview" );
       };

       $scope.download = function(detail){
        $rootScope.proposal_id = detail.id;
         localStorageService.set('proposal_id',$rootScope.proposal_id);
      
          proposal_id: $rootScope.proposal_id;
            $rootScope.version_id = detail.version_id;
          //console.log(detail);
          localStorageService.set('version_id',$rootScope.version_id);

   

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

      $scope.opencollab = function(detail){
         $rootScope.proposal_id = detail.id;
          localStorageService.set('proposal_id',$rootScope.proposal_id);
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
          localStorageService.set('proposal_id',$rootScope.proposal_id);
          $rootScope.client_email =  detail.client_email_id;
         localStorageService.set('client_email',$rootScope.client_email);
          $rootScope.version_id = detail.version_id;
          console.log(detail);
          localStorageService.set('version_id',$rootScope.version_id);
        
        $rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/email.html',
      controller: 'proposalsummeryCtrl',
      windowClass: 'modal-lg',
      //size: size,
      resolve: {
        //return $scope.collegeDetail;
        
      }
      });


      };


      $scope.createpraposal = function(){

        $rootScope.proposalrightSidebar = true;
        /*$rootScope.modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'views/createproposal.html',
         controller: 'createproposalCtrl',
        windowClass: 'modal-lg animated fadeInRight in',
        //size: size,
        resolve: {
        
        }
      });*/





      };


      $scope.allpraposal = function(){

        $scope.praposalall = true;
        $scope.underreviewpraposal = false;
         $scope.openpraposal = false;
         $scope.closedpraposal = false;
          $scope.rejectproposal = false;
           $scope.reopenproposal = false;



      };

      $scope.open = function(){
         $scope.all = {'background-color': '#919bb6'};
        $scope.openpraposal = true;
        $scope.praposalall = false;
        $scope.closedpraposal = false;
        $scope.praposalall = false;
         $scope.reopenproposal = false;
          $scope.rejectproposal = false;


      };

      $scope.underreview = function(){
         $scope.all = {'background-color': '#919bb6'};
        $scope.underreviewpraposal = true;
         $scope.openpraposal = false;
         $scope.praposalall = false;
          $scope.closedpraposal = false;
           $scope.reopenproposal = false;
            $scope.rejectproposal = false;





      };

      $scope.closed = function(){
         $scope.all = {'background-color': '#919bb6'};
        $scope.closedpraposal = true;
        $scope.underreviewpraposal = false;
         $scope.openpraposal = false;
         $scope.praposalall = false;
          $scope.reopenproposal = false;
           $scope.rejectproposal = false;


      };

      $scope.reopen = function(){ 
        $scope.all = {'background-color': '#919bb6'};
        $scope.reopenproposal = true;
        $scope.closedpraposal = false;
        $scope.underreviewpraposal = false;
         $scope.openpraposal = false;
         $scope.praposalall = false;
         $scope.rejectproposal = false;

      };
       $scope.reject = function(){
        $scope.all = {'background-color': '#919bb6'};
        $scope.rejectproposal = true;
        $scope.reopenproposal = false;
        $scope.closedpraposal = false;
        $scope.underreviewpraposal = false;
         $scope.openpraposal = false;
         $scope.praposalall = false;

      };
      $scope.editpraposal = function(detail){

        $rootScope.template_id = detail.template_id
        $rootScope.proposal_id =  detail.id;
         $rootScope.praposalname = detail.name;
        $rootScope.version_id = detail.version_id;
        console.log(detail);
        localStorageService.set('version_id',$rootScope.version_id);
        $location.path( "/proposal" );

      };

      $scope.proposalreopen = function(detail){
         $rootScope.proposal_id =  detail.id;
         var data = {

          id:$rootScope.proposal_id,
          tid:'2'
         }

         praposalservice.changeversion.get((data), function(data){
        $scope.alerts=[];
        init();
        //$scope.collabdata= data.data;
         
      });


      };

$scope.$watch('proposal_id', function () {
      localStorageService.set('proposal_id',$rootScope.proposal_id);
     // localStorageService.set('userid',$rootScope.userid);
    }, true);
$scope.$watch('client_email', function () {
      localStorageService.set('client_email',$rootScope.client_email);
     // localStorageService.set('userid',$rootScope.userid);
    }, true);

  $scope.costprofitanalysis = function(detail){

    $rootScope.proposal_id =  detail.id;
    $scope.name = detail.name;
    $rootScope.praposalname =  $scope.name;

    localStorageService.set('praposalname',$rootScope.praposalname);
      $rootScope.version_id = detail.version_id;
      console.log($rootScope.version_id);
          //console.log(detail);
          localStorageService.set('version_id',$rootScope.version_id);

    var costdata = {

      tenancy_id: $rootScope.tenancyid,
    created_by:  $rootScope.userid,
     proposal_id: $rootScope.proposal_id,
        version_id:$rootScope.version_id
 
      };
        praposalservice.costprofit.save((costdata), function(data1){
          $scope.alerts=[];
          if(data1.status == true){ 
             $scope.costprofitdata = data1.data.all_costprofit_data;
              $location.path( "/costprofitanalysis" );


          }
            if(data1.status == false){ 

                $scope.alerts.push({msg: 'There is no cost-profit analysis data available for this proposal', type:'denger'});

            }
        
          });



  };

  $scope.send = function(){

      var data = {
         proposal_id:$rootScope.proposal_id,
          updated_by:$rootScope.userid,
          to:$scope.toemail,
          cc:$scope.cc,
          bcc:$scope.bcc,
          message:$scope.summernoteTextTwo,
          subject:$scope.subject,
          version_id:$rootScope.version_id


        };

        praposalservice.sendmail.save((data), function(data){
          $scope.alerts=[];

          if(data.status === true){
             $scope.alerts.push({msg: 'Email sent successfully', type:'success'});
             $scope.toemail = "";
             
             $rootScope.modalInstance.close();


          } else{

            $scope.alerts.push({msg: 'Email Sending Failed', type:'denger'});

          }
      
         
          });





      };


});
