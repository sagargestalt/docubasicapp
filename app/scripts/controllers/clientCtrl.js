'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:clientCtrl
 * @description
 * # clientCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('clientCtrl',['$scope', '$state','$timeout','$rootScope','$stateParams','$window','settingservice','localStorageService','$location','userservice','sweetAlert',
  function ($scope, $state, $timeout,$rootScope,$stateParams,$window,settingservice,localStorageService,$location,userservice,sweetAlert ) {
 $rootScope.tenancyid = localStorageService.get('tenancyid');
  $rootScope.userid = localStorageService.get('userid');
   $rootScope.isAdmin = localStorageService.get('isAdmin');
    $rootScope.username = localStorageService.get('username');
   	$scope.closeAlerts = function(index) {
        $scope.alerts.splice(1, index);
        $scope.alerts = [];
    };

    $scope.clientsection = function(){

    	$scope.collapsed = true;

    };



    $scope.closeclient = function(){

    	$scope.collapsed = false;
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
                $scope.phone="";
                 $scope.clientid="";
                 $scope.cname="";
                $scope.update =false;


    };

    $scope.closeAlert = function(index) {
        $scope.errors.splice(1, index);
        $scope.errors = [];
    };


  var countUp = function() {

    $scope.alerts = [];
     $scope.errors = [];

      $timeout(countUp, 4000);

    };

  $timeout(countUp, 4000);

$scope.ph_numbr =/[0-9-()]*[1-9][0-9-()]*/;



    function init(){

    	settingservice.country.query({}, function (data){
      		$scope.allProducts = data.data.country;
       		$scope.allstates = data.data.states;
   		});

   		var getclint  = {

    		tenancy_id:$rootScope.tenancyid
			};

		settingservice.getclient.save((getclint), function(data){

        	$scope.clients = data.data;

    	});



    }



    $scope.submitclient = function() {
    	$scope.alerts=[];
		var clientdata = {
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
        phone_number:$scope.phone,
        company_name:$scope.cname,
        customer_code:$scope.clientid,

		};
 		settingservice.addclient.save((clientdata), function(data){

        $scope.message = data.message;
        if(data.status === true){
                $scope.alerts.push({msg: 'Client added successfully', type:'success'});
                $scope.collapsed = false;
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
                 $scope.phone="";
                 $scope.clientid="";
                 $scope.cname="";




                init();
            }

            else if(data.status === false){

                 $scope.errors = data.message;
            }


    	});


	};


	$scope.updateclient = function(detail){
        $scope.collapsed = true;
        $scope.update = true;
        //tenancy_id:'1',
        $scope.fname = detail.firstname;
        $scope.lname = detail.lastname;
        $scope.email = detail.created_users_email;
        $scope.displayname = detail.displayname;
        $scope.mobile = detail.mobile;
        $scope.url = detail.url;
        $scope.addressdetail = detail.address;
        $scope.country = detail.country;
        $scope.state = detail.state;
        $scope.city = detail.city;
        $scope.pcode = detail.postalcode;
            //  user_id:'1',
        $scope.summary = detail.description;
        $scope.id = detail.id;
        $scope.phone = detail.phone_number;
        $scope.cname = detail.company_name;
        $scope.clientid = detail.customer_code;


    };

	$scope.updateclientdata = function(){
  		$scope.alerts = [];
		var clientdata = {
    	//tenancy_id:'1',
    	id:$scope.id,
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
   		// user_id:'1',
    	description:$scope.summary,
    	updated_by:$rootScope.userid,
        tenancy_id:$rootScope.tenancyid,
        phone_number:$scope.phone,
        company_name:$scope.cname,
        customer_code:$scope.clientid,
	};

  		settingservice.updateclient.update((clientdata), function(data){

        $scope.allresource = data.data;
         if(data.status === true){
                $scope.alerts.push({msg: 'Client Updated successfully', type:'success'});
                 $scope.collapsed = false;
                 $scope.update = false;
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
                 $scope.phone="";
                  $scope.clientid="";
                 $scope.cname="";

                init();
            }

             else if(data.status === false){
                $scope.errors = data.message;
                //$scope.alerts.push({msg: 'Update Not Saved', type:'danger'});
                //init();
            }

    	});




	};


	$scope.delteclient = function(detail){
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
                    $scope.id = detail.id;
                    var clientdata= {

        id:$scope.id,
        updated_by:$rootScope.userid
        };

        settingservice.deleteclient.save((clientdata), function(data){

            $scope.allresource = data.data;
            if(data.status === true){
                //$scope.alerts.push({msg: 'Client Deleted successfully', type:'success'});
                init();
                }

                else if(data.status === false){

                $scope.alerts.push({msg: 'Error occurd', type:'danger'});
                init();
             }

        });

                    sweetAlert.swal("Deleted!", "Client Deleted successfully", "success");
                } else {
                    sweetAlert.swal("Cancelled");
                }
            });






	};


    init();


    }]);