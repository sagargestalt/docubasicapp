'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:todoctrl
 * @description
 * # todoctrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('todoctrl',['$scope', '$state','$timeout','$rootScope','$routeParams','$window','settingservice','localStorageService','$location','sweetAlert','$route',
  function ($scope, $state, $timeout,$rootScope,$routeParams,$window,settingservice,localStorageService,$location ,sweetAlert,$route) {
$rootScope.userid = localStorageService.get('userid');
   $rootScope.isAdmin = localStorageService.get('isAdmin');
   $rootScope.tenancyid = localStorageService.get('tenancyid');
    $rootScope.username = localStorageService.get('username');
     $rootScope.tenancyid = localStorageService.get('tenancyid');
     $scope.$route = $route;

    //$scope.edittodo = false;
    $scope.display = true;
    $scope.completetask = true;
function init() {
  
	
var notesdata={
	tenancy_id:$rootScope.tenancyid 
};
settingservice.getnote.save((notesdata), function(data){
		 
        $scope.notes = data.data;
         

    });

var todosdata={
	tenancy_id:$rootScope.tenancyid 
};
settingservice.gettodos.save((todosdata), function(data){
		 
        $scope.todos = data.data;
         

    });
 

}
init();

  
  var countUp = function() {

    $scope.alerts = [];
     $scope.errors = [];

      $timeout(countUp, 10000);

    };

 $timeout(countUp, 10000);

	
	
	$scope.closeAlerts = function(index) {
        $scope.alerts.splice(1, index);
        $scope.alerts = [];
    };

    $scope.closeAlert = function(index) {
        $scope.errors.splice(1, index);
        $scope.errors = [];
    };




$scope.addnote = function(){
	$scope.display = true;
    $scope.editdisplay = false;
    $scope.edit = false;
};

$scope.getnotesdata = function(info){
	$scope.display = false;
    $scope.edit = false;
    $scope.editdisplay = true;

$scope.notename = info.Name;
$scope.notediscription = info.Description;
 $scope.date = info.CreatedDate;
$rootScope.id = info.NotesId;
};
$scope.getnote = function(){
$scope.edit = true;
$scope.display = false;
$scope.editdisplay = false;
};

$scope.updatenote = function(){
var data={
name:$scope.notename,
description:$scope.notediscription ,
tenancy_id:$rootScope.tenancyid ,
updated_by:$rootScope.userid,
id:$rootScope.id
};
settingservice.updatenote.update((data), function(data){
		 $scope.alerts=[];
        $scope.message = data.message;
         if(data.status === true){
                $scope.alerts.push({msg: 'Note updated successfully', type:'success'});
                init();
            }

            else if(data.status === false){
      //$scope.alerts.push({msg: 'Email already registered', type:'danger'});
       $scope.errors = data.message;

     }

    });


};
$scope.isProcessing = false;
	$scope.submitnote = function(){
     $scope.isProcessing = true;
  
		var notesdata = {

		tenancy_id:$rootScope.tenancyid ,
		name:$scope.newnotename,
		description:$scope.newnotediscription,
		created_by:$rootScope.userid


			};
settingservice.postnote.save((notesdata), function(data){
		 $scope.alerts=[];
        $scope.message = data.message;
         if(data.status === true){

                $scope.alerts.push({msg: 'Note added successfully', type:'success'});
                $scope.newnotediscription="";
                $scope.newnotename="";
                 //$scope.saving = false;

                init();
            }

             else if(data.status === false){

             	 $scope.errors = data.message;
                $scope.saving = false;

             }

    });


		};


	$scope.deletenote = function(){
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
                    var data = {
            id:$rootScope.id,
            updated_by:$rootScope.userid
        };
        settingservice.deletenote.save((data), function(data){
         $scope.alerts=[];
        $scope.message = data.message;
         if(data.status === true){
                //$scope.alerts.push({msg: , type:'success'});
                $scope.notediscription ="";
                $scope.notename = "";
                $scope.display = true;
                $scope.editdisplay = false;
                $scope.edit = false;

               
                 init();
            }

    });

                    
                    sweetAlert.swal("Deleted!", 'Note deleted successfully', "success");
                } else {
                    sweetAlert.swal("Cancelled");
                }
            });
		
	};

	$scope.submittask = function(){
		var data = {
			tenancy_id:$rootScope.tenancyid,
			created_by:$rootScope.userid,
			taskname:$scope.newnotename,
			description:$scope.taskdiscription,


		};
		settingservice.addtodos.save((data), function(data1){
		 $scope.alerts=[];
        $scope.message = data1.message;
         if(data1.status === true){
                $scope.alerts.push({msg: 'Task added successfully', type:'success'});
                $scope.newnotename="";
                $scope.taskdiscription="";
                 init();
            }

            if(data1.status === false){
            	$scope.errors = data1.message;


            }

    });



	};



 $scope.gettask = function(info){

    sweetAlert.swal({
                title: "Are you sure want to complete this task?",
                //text: "Your will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, complete it!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: false,
                closeOnCancel: false },
            function (isConfirm) {
                if (isConfirm) {

                    $scope.id = info.TodosId;
            var data = {
                id:$scope.id,
                updated_by:$rootScope.userid,
                tenancy_id:$rootScope.tenancyid

            };

            settingservice.chekedtask.update((data), function(data1){
         $scope.alerts=[];
        $scope.message = data1.message;
         if(data1.status === true){
                //$scope.alerts.push({msg: 'Task completed successfully', type:'success'});
                 init();
            }

    });

                    
                    sweetAlert.swal("completed!", 'Task completed successfully', "success");
                } else {
                    sweetAlert.swal("Cancelled");
                }
            });
			


		};


	$scope.alltaskfinish = function(){
        sweetAlert.swal({
                title: "Are you sure want complete all the task?",
                //text: "Your will not be able to recover this imaginary file!",
                type: "success",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, complete it!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: false,
                closeOnCancel: false },
            function (isConfirm) {
                if (isConfirm) {
                    var data = {
            id:0,
            tenancy_id:$rootScope.tenancyid,
            updated_by:$rootScope.userid,

        };

            settingservice.alltaskcomplete.update((data), function(data1){
         $scope.alerts=[];
        $scope.message = data1.message;
         if(data1.status === true){
                $scope.alerts.push({msg: 'All task completed successfully', type:'success'});
                $scope.alltask = false;
                 init();
            }

            if(data1.status === false){

                $scope.alerts.push({msg: 'There is no tasks', type:'danger'});
                $scope.alltask = false;
                 init();
            }

    });

                    
                    sweetAlert.swal("All task completed successfully", "success");
                } else {
                    sweetAlert.swal("Cancelled");
                }
            });
		



	};

	$scope.opentask = function(info){
        sweetAlert.swal({
                title: "Are you sure you want to reactivate this task?",
                //text: "Your will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, reactivate it!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: false,
                closeOnCancel: false },
            function (isConfirm) {
                if (isConfirm) {

                    $scope.id = info.TodosId;
            var data = {
                id:$scope.id,
                updated_by:$rootScope.userid,
                tenancy_id:$rootScope.tenancyid

            };

            settingservice.incompletetask.update((data), function(data1){
         $scope.alerts=[];
        $scope.message = data1.message;
         if(data1.status === true){
               // $scope.alerts.push({msg: 'Task activated successfully', type:'success'});
                 init();
            }

    });



                    sweetAlert.swal("Task activated successfully", "success");
                } else {
                    sweetAlert.swal("Cancelled");
                }
            });

		

	};

    $scope.alltodos = function(){

        $scope.showalltask = true;
        $scope.showActivatedtask = false;
        $scope.showcompeletedtask = false;
        $scope.all = {'background-color': '#63c685'};
         $scope.complete = {'background-color': '#919bb6'};
            $scope.active = {'background-color': '#919bb6'};
            $scope.newnotename = "";
    };


    $scope.activatedtodos = function(){
        $scope.showalltask = false;
        $scope.showActivatedtask = true;
        $scope.showcompeletedtask = false;
         $scope.active = {'background-color': '#63c685'};
          $scope.all = {'background-color': '#919bb6'};
           $scope.complete = {'background-color': '#919bb6'};
    };

   

    $scope.completedtodos = function(){
        $scope.showalltask = false;
        $scope.showActivatedtask = false;
        $scope.showcompeletedtask = true;
        $scope.complete = {'background-color': '#63c685'};
         $scope.all = {'background-color': '#919bb6'};
           $scope.active = {'background-color': '#919bb6'};
            $scope.newnotename = "";
    };

    $scope.edittodo = function(info){

      //$scope.edittodo = true;
      $scope.todoid = info.TodosId;
      $scope.taskname = info.TaskName;
     $scope.newnotename = $scope.taskname;
     $scope.update = true;

    };
$scope.updatetask = function(){
var data = {
updated_by:$rootScope.userid,
        tenancy_id:$rootScope.tenancyid,

        id:$scope.todoid,
        taskname:$scope.newnotename,

};

settingservice.updatetodos.update((data), function(data1){
     $scope.alerts=[];
        $scope.message = data1.message;
         if(data1.status === true){
                $scope.alerts.push({msg: 'Task Updated successfully', type:'success'});
                 init();
                 $scope.newnotename = "";
                 $scope.update = false;
            }

            if(data1.status === false){
             // $scope.alerts.push({msg: 'Task Updated Failed', type:'danger'});
              $scope.errors = data1.message;
            }

    });


};


 

  		}]);