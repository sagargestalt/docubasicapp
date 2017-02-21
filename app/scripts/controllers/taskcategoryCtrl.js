'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:taskcategoryCtrl
 * @description
 * # taskcategoryCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('taskcategoryCtrl',['$scope', '$state','$timeout','$rootScope','$stateParams','$window','settingservice','localStorageService','$location','userservice','sweetAlert',
  function ($scope, $state, $timeout,$rootScope,$stateParams,$window,settingservice,localStorageService,$location,userservice,sweetAlert ) {
 $rootScope.tenancyid = localStorageService.get('tenancyid');
  $rootScope.userid = localStorageService.get('userid');
   $rootScope.isAdmin = localStorageService.get('isAdmin');
    $rootScope.username = localStorageService.get('username');
   	$scope.closeAlerts = function(index) {
        $scope.alerts.splice(1, index);
        $scope.alerts = [];
    };
   // $scope.dtOptions = DTOptionsBuilder.newOptions().withOption('aaSorting', [[2, 'desc']])
     $scope.closeAlert = function(index) {
        $scope.errors.splice(1, index);
        $scope.errors = [];
    };
    $scope.closemodal = function(){
          //console.log("hi");
          $rootScope.rightSidebartask = false;
          $scope.collapsed = false;
         $scope.taskname = "";
         $scope.update = false;


        };

    function init() {

    	var id ={
         tenancy_id:$rootScope.tenancyid  

    	};

    	settingservice.task.save((id), function (data3){
      		$scope.gettasks = data3.data;
       ////$scope.gridOptions.data = data3.data;
       //$scope.allstates = data.data.states;
     	});

     

	}


  var countUp = function() {

    $scope.alerts = [];
     $scope.errors = [];

      $timeout(countUp, 10000);

    };
 $timeout(countUp, 10000);
	


	$scope.tasksection = function(){
		$scope.collapsed = true;
    $scope.taskForm.submit = false;

	};

	$scope.closetask = function(){
		$scope.collapsed = false;
     $scope.taskname = "";
     $scope.update = false;



	};

	$scope.insert = function(){
    $scope.savetask=true;
        $scope.alerts=[];
        $scope.taskForm.submit = true;
        var task = {
           categoryname:$scope.taskname,
            created_by:$rootScope.userid,
           tenancy_id:$rootScope.tenancyid  
        };
         settingservice.tasks.save((task), function(responce){

            $scope.message = responce.message;
            if(responce.status === true){
                $scope.savetask=false;
                $scope.alerts.push({msg: 'Task category added successfully', type:'success'});
                $scope.taskname = "";
                $scope.collapsed = false;

                 init();

            } 

            else if(responce.status === false){
              $scope.savetask=false;
                //$scope.alerts.push({msg: 'Email already registered', type:'danger'});
                  $scope.errors = responce.message;

               }
            }); 

    };


    $scope.updatetask = function(detail){
  		$scope.collapsed = true;
  		$scope.update = true;

   		$scope.taskname = detail.categoryname;
   		$scope.id = detail.id;


	};


  $rootScope.showsearchrecord= function(detail){
    $scope.collapsed = true;
      $scope.update = true;

      $scope.taskname = detail.categoryname;
      $scope.id = detail.id;
  }
	$scope.updatetaskdata = function(){
 		$scope.alerts=[];
        var task = {
           categoryname:$scope.taskname,
           updated_by:$rootScope.userid,
           //tenancy_id:'2' 
            tenancy_id:$rootScope.tenancyid,
           id:$scope.id,
        };

     	settingservice.updatetask.save((task), function(data){

        	$scope.allresource = data.data;
         	if(data.status === true){
                $scope.alerts.push({msg: 'Task category updated successfully', type:'success'});
                $scope.taskname = "";
                $scope.collapsed = false;
                $scope.update = false;

                init();
            }

             else if(data.status === false){
                //$scope.alerts.push({msg: 'Update Not Saved', type:'danger'});
                //init();
                $scope.errors = data.message;
            }

    });

	};

	$scope.deletetask = function(detail){
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
                  $scope.id = detail.id;
                  var taskdata= {

        id:$scope.id,
        updated_by:$rootScope.userid
      };

      settingservice.deletetask.save((taskdata), function(data){

            $scope.allresource = data.data;
            if(data.status === true){
              $scope.collapsed = false;
               $scope.taskname = "";
               $scope.update = false;
                
                init();
              }

             else if(data.status === false){
                $scope.alerts.push({msg: 'Error occurd', type:'danger'});
                init();
            }

        });

                    sweetAlert.swal("Deleted!", "Task category Deleted successfully", "success");
                } else {
                    sweetAlert.swal("Cancelled");
                }
            });
   		$scope.alerts=[];
  		



		
	};
  

init();
   }]);