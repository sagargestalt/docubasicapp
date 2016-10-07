'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:vendorsCtrl
 * @description
 * # vendorsCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('vendorsCtrl',['$scope', '$state','$timeout','$rootScope','$stateParams','$window','settingservice','localStorageService','$location','userservice','sweetAlert',
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

    $scope.vendorsection = function(){
    	$scope.collapsed = true;


    };

    $scope.closevendor = function(){
    	$scope.collapsed = false;
      $scope.hidesubmit = false;
      $scope.fname="";
      $scope.vendorname="";
      $scope.vendorid="";
      $scope.phone="";
                $scope.lname="";
                $scope.email="";
                $scope.displayname="";
                $scope.mobile="";
                $scope.url="";
                $scope.addressdetail="";
                $scope.country="";
                $scope.state="";
                $scope.city="";
                $scope.pcode="";
                $scope.summary="";



    };

    $scope.ph_numbr = /[0-9-()]*[1-9][0-9-()]*/;


    
  var countUp = function() {

    $scope.alerts = [];
     $scope.errors = [];

      $timeout(countUp, 10000); 

    };

 $timeout(countUp, 10000);



   function init() {

     	settingservice.country.query({}, function (data){
      		$scope.allProducts = data.data.country;
       		$scope.allstates = data.data.states;
   		});

   		 var getvendor ={
        	tenancy_id:$rootScope.tenancyid 

    		};
			settingservice.vendors.save((getvendor), function(data1){

        	$scope.vendorsdata = data1.data;

    	});
         

     };


     $scope.submitvendor = function(){
     	$scope.alerts=[];

   		var addvendor = {

    	tenancy_id:$rootScope.tenancyid,
    	firstname:$scope.fname,
    	lastname:$scope.lname,
    	email:$scope.email,
    	displayname:$scope.displayname,
    	mobile:$scope.mobile,
    	url:$scope.url,
    	address:$scope.addressdetail,
    	country_id:$scope.country,
    	state_id:$scope.state,
    	city:$scope.city,
    	postalcode:$scope.pcode,
    	user_id:$rootScope.userid,
    	description:$scope.summary,
    	created_by:$rootScope.userid,
      vendor_name:$scope.vendorname,
      vendor_code:$scope.vendorid,
      phone_number:$scope.phone
		};
 		settingservice.advendor.save((addvendor), function(data){

        $scope.message = data.message;
        if(data.status === true){
                $scope.alerts.push({msg: 'Vendor added successfully', type:'success'});
                $scope.collapsed = false;
                 $scope.fname="";
                  $scope.vendorname="";
                  $scope.vendorid="";
                  $scope.phone="";
                $scope.lname="";
                $scope.email="";
                $scope.displayname="";
                $scope.mobile="";
                $scope.url="";
                $scope.addressdetail="";
                $scope.country="";
                $scope.state="";
                $scope.city="";
                $scope.pcode="";
                $scope.summary="";



                init();
            }


            else if(data.status === false){
                  //$scope.alerts.push({msg: 'Email already registered', type:'danger'});
                    $scope.errors = data.message;

              }

    	});



	};



	$scope.updatevendor = function(detail){
    	$scope.collapsed = true;
    	$scope.hidesubmit = true;
   		// tanancy_id:'1',
   		// firstname:$scope.fname;
   
		$rootScope.id = detail.vendor_id;

 		//tanancy_id:'1',
    	$scope.fname = detail.firstname;
    	$scope.lname = detail.lastname;
    	$scope.email = detail.email;
    	$scope.displayname =detail.displayname;
    	$scope.mobile = detail.mobile;
    	$scope.url = detail.url;
    	$scope.addressdetail = detail.address;
    	$scope.country = detail.country;
    	$scope.state = detail.state;
   		$scope.city = detail.city;
   		$scope.pcode = detail.postalcode;
   		// user_id:'1',
   		$scope.summary = detail.description;
       $scope.vendorname = detail.vendor_name;
      $scope.vendorid = detail.vendor_code;
      $scope.phone = detail.phone_number;


  };


   $scope.updatevendorblock = function(){
     $scope.alerts = [];

    	var newpvendor = {
       id:$rootScope.id,

      //tanancy_id:'1',
    firstname:$scope.fname,
    lastname:$scope.lname,
    email:$scope.email,
    displayname:$scope.displayname,
    mobile:$scope.mobile,
    url:$scope.url,
    address:$scope.addressdetail,
    country_id:$scope.country,
    state_id:$scope.state,
    city:$scope.city,
    postalcode:$scope.pcode,
    //user_id:'1',
    updated_by:$rootScope.userid,
    description:$scope.summary,
    tenancy_id:$rootScope.tenancyid,
    vendor_name:$scope.vendorname,
      vendor_code:$scope.vendorid,
      phone_number:$scope.phone


    };

  	settingservice.updatevendor.update((newpvendor), function(data){

        $scope.allresource = data.data;
         if(data.status === true){
                $scope.alerts.push({msg: 'Vendor Updated successfully', type:'success'});
                $scope.collapsed = false;
                $scope.hidesubmit = false;
                $scope.vendorname="";
                $scope.vendorid="";
                $scope.phone="";
                $scope.fname="";
                $scope.lname="";
                $scope.email="";
                $scope.displayname="";
                $scope.mobile="";
                $scope.url="";
                $scope.addressdetail="";
                $scope.country="";
                $scope.state="";
                $scope.city="";
                $scope.pcode="";
                $scope.summary="";
                init();
            }

             else if(data.status === false){
                //$scope.alerts.push({msg: 'Update Not Saved', type:'danger'});
                 $scope.errors = data.message;

              }
              
            

    });

};


	$scope.deletevendor = function(detail){
    sweetAlert.swal({
                title: "Are you sure you want to delete?",
                //text: "Your will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel",
                closeOnConfirm: false,
                closeOnCancel: false },
            function (isConfirm) {
                if (isConfirm) {

                    $scope.id = detail.vendor_id;
                    var vendordata= {

        id:$scope.id,
        updated_by:$rootScope.userid
      };

    settingservice.deletevendor.save((vendordata), function(data){

          $scope.allresource = data.data;
          if(data.status === true){
                $scope.alerts.push({msg: 'Vendor Deleted successfully', type:'success'});
                init();
            }

             else if(data.status === false){
                $scope.alerts.push({msg: 'Error occurd', type:'danger'});
                init();
            }

      });


                    sweetAlert.swal("Deleted!", "Vendor Deleted successfully", "success");
                } else {
                    sweetAlert.swal("Cancelled");
                }
            });
		
 		

 		


	};




     init();


    }]);
