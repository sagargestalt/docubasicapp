'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:templateCtrl
 * @description
 * # templateCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('templateCtrl', function ($scope, $rootScope,localStorageService,pageservice,$location,$timeout) {
 $rootScope.tenancyid = localStorageService.get('tenancyid');
  $rootScope.userid = localStorageService.get('userid');
   $rootScope.isAdmin = localStorageService.get('isAdmin');
    $rootScope.username = localStorageService.get('username');
    $rootScope.profilepath = localStorageService.get('profilepath');
   // $rootScope.ssss = $scope.ssss;
   $scope.close = function(){
            $scope.show = false;
           $scope.tempname = "";
           $scope.update = false;
           };
   $scope.closemodal = function(){
          //console.log("hi");
      $rootScope.rightSidebartemplate = false;
      $scope.close();

        };


    function init() {
   var tid = {
       tenancy_id:$rootScope.tenancyid 
        };

 pageservice.getpagedata.save((tid), function(data){
 $scope.alerts=[];
        $scope.pdata= data.data;
         
    });

 	 var id = {
       tenancy_id:$rootScope.tenancyid 
        };

 pageservice.gettempdata.save((id), function(data){
 $scope.alerts=[];
        $scope.p= data.data;
         
               
         
    });


}
init();

var countUp = function() {

    $scope.alerts = [];
     $scope.errors = [];

      $timeout(countUp, 10000);

    };

   $timeout(countUp, 10000);


 	$scope.create = function(){
    if($scope.pagedata == null){

      $scope.alerts.push({msg: 'Please Select Pages', type:'denger'});
    }
    else{
 		var data = {
 			tenancy_id:$rootScope.tenancyid,
 			created_by: $rootScope.userid,
 			template_name:$scope.tempname,
 			page_id:$scope.pagedata,
 			


 		};

 		pageservice.settempdata.save((data), function(data){
 			$scope.alerts=[];
        $scope.pdata= data.data;
        if(data.status === true){
          init();
        //$rootScope.modalInstance.close();
        $rootScope.rightSidebartemplate = false;
      }
      if(data.status === false){
         $scope.errors = data.message;
      }



         
    });
  }






 	};


 	$scope.updatetemplate = function(temp,i){
    $scope.selected = true;

       $scope.selectedIndex=i;
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
       if(data.status === true){
        //$rootScope.modalInstance.close();
        init();
        $rootScope.rightSidebartemplate = false;
     
       init();
       $scope.update = false;
 		$scope.show = false;
  }

   if(data.status === false){
         $scope.errors = data.message;
      }

         
    });



 	};






   	 });