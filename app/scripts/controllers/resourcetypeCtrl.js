'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:resourcetypeCtrl
 * @description
 * # resourcetypeCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('resourcetypeCtrl',['$scope', '$state','$timeout','$rootScope','$stateParams','$window','settingservice','localStorageService','$location','userservice','sweetAlert',
  function ($scope, $state, $timeout,$rootScope,$stateParams,$window,settingservice,localStorageService,$location,userservice,sweetAlert ) {
 $rootScope.tenancyid = localStorageService.get('tenancyid');
  $rootScope.userid = localStorageService.get('userid');
   $rootScope.isAdmin = localStorageService.get('isAdmin');
    $rootScope.username = localStorageService.get('username');
   	$scope.closeAlerts = function(index) {
        $scope.alerts.splice(1, index);
        $scope.alerts = [];
    };
     $scope.closeAlert = function(index) {
        $scope.errors.splice(1, index);
        $scope.errors = [];
    };

    $scope.resourcesection = function(){
    	$scope.collapsed = true;

    };

    $scope.closeresource = function(){
    	$scope.collapsed = false;
       $scope.resourcename = "";
                $scope.vendors = "";
                $scope.source="";
                $scope.dailycost="";
                $scope.dailyprice="";
                $scope.update = false;

    };

    
  var countUp = function() {

    $scope.alerts = [];
     $scope.errors = [];

      $timeout(countUp, 10000);

    };

  

    function init() {

    	var getvendor ={
        	tenancy_id:$rootScope.tenancyid 

    		};
		settingservice.vendors.save((getvendor), function(data1){

        $scope.vendorsdata = data1.data;

    	});

    	$scope.sources = [{id:'1',type:'Insource'},
                  {id:'2',type:'Outsource'}];


         var getresources = {
     				tenancy_id:$rootScope.tenancyid ,

			};
			settingservice.getresource.save((getresources), function(data){

        		$scope.allresource = data.data;

    		});

      $timeout(countUp, 10000);
	};



		$scope.insertresource = function(){
    		$scope.alerts=[];

    		var resorceinfo = {

        	tenancy_id:$rootScope.tenancyid, 
         	created_by:$rootScope.userid,
        	name:$scope.resourcename,
        	vendor_id:$scope.vendors,
        	type:$scope.source,
        	dailycost:$scope.dailycost,
        	dailyprice:$scope.dailyprice,
          line_unit:$scope.unit,




    		};

    		settingservice.postresource.save((resorceinfo), function(data){

        		$scope.message = data.message;
         		if(data.status === true){
                $scope.alerts.push({msg: 'Resource added successfully', type:'success'});
                $scope.collapsed = false;
                $scope.resourcename = "";
                $scope.vendors = "";
                $scope.source="";
                $scope.dailycost="";
                $scope.dailyprice="";
                 $scope.unit="";

                init();
            }

            else if(data.status === false){
                  //$scope.alerts.push({msg: 'Email already registered', type:'danger'});
                    $scope.errors = data.message;

              }

    	});


	};


	$scope.updateresource = function(detail){
  		$scope.collapsed = true;
  		$scope.update = true;

  		$scope.resourcename = detail.resourcename;
      	$scope.vendors = detail.vendorname;
        $scope.source = detail.resourcetype;
       	$scope.dailycost = detail.dailycost;
        $scope.dailyprice = detail.dailyprice;
        $scope.id = detail.id;
        $scope.unit = detail.line_unit;

	};


	$scope.updateresourcedata = function(){
		$scope.alerts = [];
   		var resorceinfo = {

        //tenancy_id:'1',
         //user_id:'1',
         id:$scope.id,
        name:$scope.resourcename,
        vendor_id:$scope.vendors,
        type:$scope.source,
        dailycost:$scope.dailycost,
        dailyprice:$scope.dailyprice,
        updated_by: $rootScope.userid,
        tenancy_id:$rootScope.tenancyid,
         line_unit:$scope.unit,



    	};


     	settingservice.updateresource.update((resorceinfo), function(data){

        $scope.allresource = data.data;
         if(data.status === true){
                $scope.alerts.push({msg: 'Resource Updated successfully', type:'success'});
                $scope.collapsed = false;
  				$scope.update = false;
  				$scope.resourcename="";
  				$scope.vendors="";
  				$scope.source="";
  				$scope.dailycost="";
  				$scope.dailyprice="";
          $scope.unit="";

                init();
            }

             else if(data.status === false){
                //$scope.alerts.push({msg: 'Update Not Saved', type:'danger'});
                //init();
                $scope.errors = data.message;
            }

    	});





		};

		$scope.deleteresource = function(detail){

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
                    var resourcedata= {

          id:$scope.id,
          updated_by: $rootScope.userid
      };

      settingservice.deleteresource.save((resourcedata), function(data){

            $scope.allresource = data.data;
            if(data.status === true){
                //$scope.alerts.push({msg: 'Resource Deleted successfully', type:'success'});
                init();
              }

              else if(data.status === false){
                $scope.alerts.push({msg: 'Error occurd', type:'danger'});
                init();
              }

      });

                    sweetAlert.swal("Deleted!", "Resource Deleted successfully", "success");
                } else {
                    sweetAlert.swal("Cancelled");
                }
            });
  			
 			

 		
		};


	init();


     }]);