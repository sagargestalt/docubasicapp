'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('cloneCtrl', function ($scope, $rootScope,localStorageService,praposalservice,$location,$uibModal,userservice,settingservice,$route) {
   
    $rootScope.tenancyid = localStorageService.get('tenancyid');
      $rootScope.userid = localStorageService.get('userid');
      $rootScope.isAdmin = localStorageService.get('isAdmin');
      $rootScope.username = localStorageService.get('username');
      $rootScope.proposal_id = localStorageService.get('proposal_id');
      $rootScope.template_id = localStorageService.get('template_id');
      $rootScope.templatename = localStorageService.get('templatename');
      $scope.closeAlerts = function(index) {
        $scope.alerts.splice(1, index);
        $scope.alerts = [];
    };

    $scope.closeAlert = function(index) {
        $scope.errors.splice(1, index);
        $scope.errors = [];
    };

     $scope.closemodal = function(){
          $rootScope.modalInstance.close();

        };




      /* var data =  {id:$rootScope.tenancyid };
    userservice.getuserdetail.query((data), function(data1){
   
        $scope.userdata = data1.data;
         

    });*/
  var data =  {tenancy_id:$rootScope.tenancyid, created_by:$rootScope.userid };
        userservice.getcollabdetail.save((data), function(data1){
          $scope.userdata = data1.data.users;
         
      });

    var getclint  = {

        tenancy_id:$rootScope.tenancyid
      };

    settingservice.getclient.save((getclint), function(data){

          $scope.clients = data.data;

      });



    var data1 = {
         proposal_id:$rootScope.proposal_id,

      };

      praposalservice.clonepraposal.save((data1), function(data){
          $scope.alerts=[];
          $scope.clonedata = data.data.proposal;
          $scope.praposalname = $scope.clonedata[0].Name;
          $scope.myDate =  new Date($scope.clonedata[0].Delivery_date);
          $scope.cname = $scope.clonedata[0].Customer_id;
          $rootScope.template_id = $scope.clonedata[0].template_id;
          $scope.coname = data.data.collaborators;
          
         
          });


      $scope.submit = function(){
        $scope.errors = [];
      var data = {
        name:$scope.praposalname,
        tenancy_id:$rootScope.tenancyid,
        user_id:$rootScope.userid,
        customer_id:$scope.cname,
        collaborators:$scope.coname,
        template_id:   $rootScope.template_id,
        delivery_date:$scope.myDate,
        created_by:$rootScope.userid,
        orientation:1,


      };

       praposalservice.createpraposal.save((data), function(data1){
 $scope.alerts=[];
        $scope.templates= data1.data;

        if(data1.status === true){

        $rootScope.template_id = $scope.templates.template_id;
        $rootScope.proposal_id = $scope.templates.proposal_id;


          $rootScope.modalInstance.close();
          $route.reload();
        }
        if(data1.status === false){
          $scope.errors = data1.message;
        }
         
    });

};
$scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];


      });