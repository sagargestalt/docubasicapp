'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:praposalsummeryCtrl
 * @description
 * # praposalsummeryCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('praposalsummeryCtrl', function ($scope, $rootScope,localStorageService,praposalservice,$location) {
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

      var data = {
      	tenancy_id: $rootScope.tenancyid,
      	proposal_status:1,
      	created_by:$rootScope.userid,
      }

     	praposalservice.praposalsummeryget.save((data), function(data1){
 			$scope.alerts=[];
      if (data1.status == true){
        	$scope.praposaldata= data1.data.proposals;

        }
         
    	});


      });
