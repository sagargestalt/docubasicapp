'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:templateCtrl
 * @description
 * # templateCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('templateCtrl', function ($scope, $rootScope,localStorageService,pageservice,$location) {
 $rootScope.tenancyid = localStorageService.get('tenancyid');
  $rootScope.userid = localStorageService.get('userid');
   $rootScope.isAdmin = localStorageService.get('isAdmin');
    $rootScope.username = localStorageService.get('username');
   // $rootScope.ssss = $scope.ssss;


    function init() {
   var tid = {
       tenancy_id:$rootScope.tenancyid 
        }

 pageservice.getpagedata.save((tid), function(data){
 $scope.alerts=[];
        $scope.pdata= data.data;
         
    });

 	 var id = {
       tenancy_id:$rootScope.tenancyid 
        }

 pageservice.gettempdata.save((id), function(data){
 $scope.alerts=[];
        $scope.p= data.data;
         
    });


};
init();


 	$scope.create = function(){
 		var data = {
 			tenancy_id:$rootScope.tenancyid,
 			created_by: $rootScope.userid,
 			template_name:$scope.tempname,
 			page_id:$scope.pagedata,
 			


 		};

 		pageservice.settempdata.save((data), function(data){
 			$scope.alerts=[];
        $scope.pdata= data.data;
         
    });






 	};


 	$scope.updatetemplate = function(temp){
 		$scope.update = true;
 		$scope.show = true;
 		$scope.tempname = temp.template.template_name;
 		$scope.tid = temp.template.id;
 		$scope.pagedata = temp.template_page_data;


 	};

 	$scope.updatetemp = function(){
 		var data = {
 		template_id:$scope.tid,
 		page_id:$scope.pagedata,
 		updated_by:$rootScope.userid,
 		tenancy_id:$rootScope.tenancyid,
 	};
 	pageservice.updatetempdata.save((data), function(data){
 			$scope.alerts=[];
       // $scope.pdata= data.data;
       init();
       $scope.update = false;
 		$scope.show = false;

         
    });



 	};






   	 });