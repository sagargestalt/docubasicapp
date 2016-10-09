'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('cloneCtrl', function ($scope, $rootScope,localStorageService,praposalservice,$location,$uibModal,userservice,settingservice) {
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
      //$rootScope.template_id = localStorageService.get('template_id');
      $rootScope.templatename = localStorageService.get('templatename');

       var data =  {id:$rootScope.tenancyid }
    userservice.getuserdetail.query((data), function(data1){
   
        $scope.userdata = data1.data;
         

    });

    var getclint  = {

        tenancy_id:$rootScope.tenancyid
      };

    settingservice.getclient.save((getclint), function(data){

          $scope.clients = data.data;

      });



    var data = {
         proposal_id:$rootScope.proposal_id,

      };

      praposalservice.clonepraposal.save((data), function(data){
          $scope.alerts=[];
          $scope.clonedata = data.data.proposal;
          $scope.praposalname = $scope.clonedata[0].Name;
          $scope.myDate =  new Date($scope.clonedata[0].Delivery_date);
          $scope.cname = $scope.clonedata[0].Customer_id;
          $scope.tid = $scope.clonedata[0].template_id
          $scope.coname = data.data.collaborators;
      
         
          });


      $scope.submit = function(){
      var data = {
        name:$scope.praposalname,
        tenancy_id:$rootScope.tenancyid,
        user_id:$rootScope.userid,
        customer_id:$scope.cname,
        collaborators:$scope.coname,
        template_id:   $scope.tid,
        delivery_date:$scope.myDate,
        created_by:$rootScope.userid,
        orientation:1,


      };

       praposalservice.createpraposal.save((data), function(data1){
 $scope.alerts=[];
        $scope.templates= data1.data;

        if(data1.status == true){

        $rootScope.template_id = $scope.templates.template_id;
        $rootScope.proposal_id = $scope.templates.proposal_id;



            $location.path( "/praposal" );


        }
         
    });

};

      });