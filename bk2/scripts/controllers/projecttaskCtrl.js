'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:projecttaskCtrl
 * @description
 * # projecttaskCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('projecttaskCtrl',['$scope', '$state','$timeout','$rootScope','$stateParams','$window','settingservice','localStorageService','$location','userservice','sweetAlert',
  function ($scope, $state, $timeout,$rootScope,$stateParams,$window,settingservice,localStorageService,$location,userservice,sweetAlert ) {
 $rootScope.tenancyid = localStorageService.get('tenancyid');
  $rootScope.userid = localStorageService.get('userid');
   $rootScope.isAdmin = localStorageService.get('isAdmin');
    $rootScope.username = localStorageService.get('username');
    $rootScope.isLogin = localStorageService.get('isLogin');
        if(!$rootScope.isLogin) {
            $location.path( "/login" );
            return false;
        }
   	$scope.closeAlerts = function(index) {
        $scope.alerts.splice(1, index);
        $scope.alerts = [];
    };
     $scope.closeAlert = function(index) {
        $scope.errors.splice(1, index);
        $scope.errors = [];
    };
    $scope.closemodal = function(){
          $rootScope.rightSidebarprojecttask = false;
          $scope.closeprojecttask();

        };

    $scope.projecttasksection = function(){
    	$scope.collapsed = true;
      $scope.projecttaskform.submit = false;

    };

    $scope.closeprojecttask = function(){
    	$scope.collapsed = false;
       $scope.taskcategory = "";
                $scope.category ="";
                $scope.discription="";
                $scope.taskdetail="";
                $scope.vendors="";
                $scope.mandays="";
                $scope.source="";
                $scope.dailycost="";
                $scope.totalcost="";
                $scope.dailyrate="";
                $scope.totalrate="";
                $scope.resource="";
               $scope.update = false;

    };

    
  var countUp = function() {

    $scope.alerts = [];
     $scope.errors = [];

      $timeout(countUp, 10000);

    };

  $timeout(countUp, 10000);


    function init(){

    	var ptask = {

    			tenancy_id:$rootScope.tenancyid 
 				};
				settingservice.getptask.save((ptask), function(data){


        			$scope.projecttask = data.data;

    			});

    			var id ={
        		tenancy_id:$rootScope.tenancyid  

    			};

    		settingservice.task.save((id), function (data3){
      		$scope.tasks = data3.data;
       		////$scope.gridOptions.data = data3.data;
       		//$scope.allstates = data.data.states;
     		
     		});

     		$scope.sources = [{id:'1',type:'Insource'},
                  {id:'2',type:'Outsource'}];


                  var getvendor ={
        		tenancy_id:$rootScope.tenancyid 

    				};
					settingservice.vendors.save((getvendor), function(data1){

        				$scope.vendorsdata = data1.data;

    				});

           var getresources = {
            tenancy_id:$rootScope.tenancyid ,

      };
      settingservice.getresource.save((getresources), function(data){

            $scope.allresource = data.data;

        });


    }


    $scope.getresourse = function(){

      var data = {

        id:$scope.resource
      };

      settingservice.getresourcedetail.get((data), function(data1){

            $scope.dailyrate = data1.data.dailyprice;
             $scope.dailycost = data1.data.dailycost;

        });


    };


    $scope.submitprojecttask = function(){
      $scope.alerts=[];
       $scope.projecttaskform.submit = true;
var postdata = {
  category_id:$scope.category,
  taskshortdesc:$scope.discription,
  description:$scope.taskdetail,
  vendor_id:$scope.vendors,
  mandays:$scope.mandays,
  resourcetype_id:$scope.source,
  dailycost:$scope.dailycost,
  totalcost:$scope.totalcost,
  dailyrate:$scope.dailyrate,
  totalrate:$scope.totalrate,
  user_id:$rootScope.userid,
  tenancy_id:$rootScope.tenancyid ,
  created_by:$rootScope.userid,
  resource_id:$scope.resource



};
settingservice.postptask.save((postdata), function(data){

        $scope.projecttask = data.data;
        if(data.status === true){
                $scope.alerts.push({msg: ' Project task added successfully', type:'success'});
                $scope.collapsed = false;
                $scope.taskcategory = "";
                $scope.category ="";
				        $scope.discription="";
				        $scope.taskdetail="";
				        $scope.vendors="";
				        $scope.mandays="";
				        $scope.source="";
				        $scope.dailycost="";
				        $scope.totalcost="";
				        $scope.dailyrate="";
				        $scope.totalrate="";
                $scope.resource = "";
				  //user_id:$rootScope.userid,
				  //tenancy_id:$rootScope.tenancyid ,





                init();
            }

            else if(data.status === false){
                  //$scope.alerts.push({msg: 'Email already registered', type:'danger'});
                  $scope.errors = data.message;

                }

    });
};

$scope.updateprojecttask = function(detail){
  $scope.collapsed = true;
  $scope.update = true;

   $scope.category = detail.category_id;
  $scope.discription = detail.taskshortdesc;
  $scope.taskdetail = detail.description;
  
  $scope.mandays = detail.mandays;
  $scope.source = detail.resourcetype_id;
  if($scope.source =="2"){
    $scope.vendors = detail.vendor_id;
    
  }
  if($scope.vendorsdata == null){
    $scope.vendors = undefined;

  }
   if($scope.allresource == null){
     $scope.resource =undefined;

  }
  $scope.dailycost = detail.dailycost;
  $scope.totalcost = detail.totalcost;
  $scope.dailyrate = detail.dailyrate;
  $scope.totalrate = detail.totalrate;
   $scope.resource = detail.resource_id;
  //user_id:'1',
  //tenancy_id:'1',
  $scope.id = detail.id;

};
$scope.updateprojecttaskdata = function(){
  //$scope.alerts=[];
   $scope.alerts = [];
  var postdata = {
  category_id:$scope.category,
  taskshortdesc:$scope.discription,
  description:$scope.taskdetail,
  vendor_id:$scope.vendors,
  mandays:$scope.mandays,
  resourcetype_id:$scope.source,
  dailycost:$scope.dailycost,
  totalcost:$scope.totalcost,
  dailyrate:$scope.dailyrate,
  totalrate:$scope.totalrate,
  //user_id:'1',
  //tenancy_id:'1',
  id:$scope.id,
  updated_by:$rootScope.userid,
   tenancy_id:$rootScope.tenancyid ,
    resource_id:$scope.resource


  };

 settingservice.updateprojecttask.update((postdata), function(data){

        $scope.allresource = data.data;
         if(data.status === true){
                $scope.alerts.push({msg: 'Task Updated successfully', type:'success'});
                $scope.collapsed = false;
                $scope.update = false;
                $scope.category ="";
				        $scope.discription="";
				        $scope.taskdetail="";
				        $scope.vendors="";
				        $scope.mandays="";
				        $scope.source="";
				        $scope.dailycost="";
				        $scope.totalcost="";
				        $scope.dailyrate="";
				        $scope.totalrate="";
                $scope.resource="";
                init();
              }

             else if(data.status === false){
                //$scope.alerts.push({msg: 'Update Not Saved', type:'danger'});
                $scope.errors = data.message;

                //init();
            }

    });



};





$scope.deleteprojecttask = function(detail){

  sweetAlert.swal({
                title: "Are you sure you want to delete?",
                //text: "Your will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: false,
                closeOnCancel: false },
            function (isConfirm) {
                if (isConfirm) {
                   $scope.id = detail.id;

                var projectdata= {

                  id:$scope.id,
                  updated_by:$rootScope.userid
                };

              settingservice.deleteproject.save((projectdata), function(data){

                  $scope.allresource = data.data;
                   if(data.status === true){
                          $scope.collapsed = false;
                          $scope.taskcategory = "";
                          $scope.category ="";
                          $scope.discription="";
                          $scope.taskdetail="";
                          $scope.vendors="";
                          $scope.mandays="";
                          $scope.source="";
                          $scope.dailycost="";
                          $scope.totalcost="";
                          $scope.dailyrate="";
                          $scope.totalrate="";
                         $scope.update = false;
                          init();
                      }

                      
              });
                              
                    sweetAlert.swal("Deleted!", "Task Deleted successfully", "success");
                } else {
                    sweetAlert.swal("Cancelled");
                }
  });
   
 



/*var projectdata= {

  id:$scope.id,
  updated_by:$rootScope.userid
};

settingservice.deleteproject.save((projectdata), function(data){

        $scope.allresource = data.data;
         if(data.status === true){
                $scope.alerts.push({msg: 'Task Deleted successfully', type:'success'});
                init();
            }

             else if(data.status === false){
                $scope.alerts.push({msg: 'Error occurd', type:'danger'});
                
            }

    });*/


};


    init();


     }]);
