'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:companysettingCtrl
 * @description
 * # companysettingCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('companysettingCtrl',['$scope', '$state','$timeout','$rootScope','$stateParams','$window','settingservice','localStorageService','$location','userservice',
  function ($scope, $state, $timeout,$rootScope,$stateParams,$window,settingservice,localStorageService,$location,userservice ) {
 $rootScope.tenancyid = localStorageService.get('tenancyid');
  $rootScope.userid = localStorageService.get('userid');
   $rootScope.isAdmin = localStorageService.get('isAdmin');
    $rootScope.username = localStorageService.get('username');
    $rootScope.companyinfosection = {'background-color': 'green'};
	$scope.priceblock = function(){
	$scope.pricesection = true;
	$scope.discount = false;
	$scope.tax = false;
};
	$scope.discountsection = function(){
	$scope.discount = true;
	$scope.pricesection = false;
	$scope.tax = false;

};

	$scope.taxsection = function(){
	$scope.discount = false;
	$scope.pricesection = false;
	$scope.tax = true;

};

	$scope.closeAlerts = function(index) {
        $scope.alerts.splice(1, index);
        $scope.alerts = [];
    };
    $scope.closeAlert = function(index) {
        $scope.errors.splice(1, index);
        $scope.errors = [];
    };
$scope.onLoad = function (e, reader, file, fileList, fileOjects, fileObj) {
    alert('this is handler for file reader onload event!');
  };


     function init() {

 	 var info = {
        tenancy_id:$rootScope.tenancyid,
        created_by: $rootScope.userid
    }; 
 	settingservice.company.save((info), function(user) {

      $scope.orgdata = user.data;
      $scope.country = user.data.country_id;
      $scope.state = user.data.state_id;

     $scope.money = $scope.orgdata[0].currency_id;
     $scope.countrydetail = $scope.orgdata[0].country_id;
     $scope.statedetail = $scope.orgdata[0].state_id;

    });

  	settingservice.country.query({}, function (data){
      $scope.allProducts = data.data.country;
       $scope.allstates = data.data.states;
   });

  	settingservice.currancy.get({}, function (data1){
      $scope.currancys = data1.data.Currency;
       //$scope.allstates = data.data.states;
   });

    var data =  {id:$rootScope.tenancyid }
    userservice.getuserdetail.query((data), function(data1){
     $scope.alerts=[];
        $scope.userdata = data1.data.users;
         

    });

  	

};

$scope.closemodal = function(){
          console.log("hi");
          $rootScope.modalInstance.close();

        };



 $scope.ph_numbr = /[0-9-()]*[1-9][0-9-()]*/;
 

	$scope.edit = function(){
	$scope.editaddress = true;

  $scope.mainaddress = $scope.orgdata[0].address;
  $scope.address1 = $scope.orgdata[0].address_line_1;
  $scope.city = $scope.orgdata[0].city;
  $scope.urlsite = $scope.orgdata[0].url;
  $scope.domain = $scope.orgdata[0].domain;
  $scope.address2 = $scope.orgdata[0].address_line_2;
  $scope.country = $scope.orgdata[0].country_id;
  $scope.state = $scope.orgdata[0].state_id;
  $scope.money = $scope.orgdata[0].currency_id;
   $scope.phone = $scope.orgdata[0].phone_number;
   $scope.aemail = $scope.orgdata[0].email_address;


	};

	$scope.editadmin = function(){
  	$scope.showadmin = true;

	};
	$scope.canceladdress = function(){
 	$scope.editaddress = false;
   $scope.mainaddress = "";
  $scope.address1 = "";
  $scope.city = "";
  $scope.urlsite = "";
  $scope.domain = "";
  $scope.address2 = "";
	};
	$scope.cancleeditadmin = function(){
  	$scope.showadmin = false;

	};

 	$scope.send = function(){
        $scope.alerts=[];
        var logo={
             tenancy_id:$rootScope.tenancyid,
             image_raw:$scope.files[0].base64,
            updated_by:$rootScope.userid
        };

        settingservice.chngelogo.save(angular.toJson(logo), function(responce){

            $scope.message = responce.message;
            if(responce.status === true){
                //$scope.alerts.push({msg: 'Picture Updated successfully', type:'success'});
                $scope.imageptah = responce.data.logo_path;
                init();
            }
            if(responce.status === false){
                $scope.alerts.push({msg: 'error occurd', type:'denger'});
                init();
            }
            });

    };

    $scope.saveadmin = function(){
      $scope.adminemail = $scope.adminsuser;
      var data = {
      tenancy_id:$rootScope.tenancyid,
      updated_by:$rootScope.userid,
      account_admin:$scope.adminemail,

    };
    settingservice.saveadmin.save((data), function(responce){
            $scope.showadmin = false;
            $scope.message = responce.message;
            if(responce.status === true){
                $scope.alerts.push({msg: 'Admin updated successfully', type:'success'});
                init();
            }
            });

    };

     $scope.address = function(){
        $scope.alerts=[];
        var address = {
            tenancy_id:$rootScope.tenancyid,
            address:$scope.mainaddress,
            city:$scope.city,
            country_id:$scope.country,
            state_id:$scope.state,
            url:$scope.urlsite,
            updated_by:$rootScope.userid,
            address2:$scope.address2,
            address1:$scope.address1,
            domain:$scope.domain,
            email_address:$scope.aemail,
            phone_number:$scope.phone



        };
          //$scope.result = angular.equals($scope.orgdata.state_id, $scope.allstates.statename);
         settingservice.address.save((address), function(responce){
           
            $scope.message = responce.message;
            if(responce.status === true){
                $scope.alerts.push({msg: 'Address updated successfully', type:'success'});
                $scope.mainaddress = "";
                $scope.city = "";
               	$scope.country = "";
               	$scope.state = "";
               	$scope.urlsite = "";
               	$scope.address2 = "";
               	$scope.address1 = "";
                //addressform
                //$scope.addressform.$setPristine();
                 $scope.editaddress = false;
                 init();


                
            }

            else if(responce.status === false){
               $scope.errors = responce.message;

            }
            });
    };

    $scope.currancy = function(){
        $scope.alerts=[];

        var currancys = {
            tenancy_id: $rootScope.tenancyid,
            currency_id:$scope.money,
            updated_by: $rootScope.userid
        };
         settingservice.currancyes.save((currancys), function(responce){
            $scope.collapsed = false;
            $scope.message = responce.message;
             if(responce.status === true){
                $scope.alerts.push({msg: 'currency updated successfully', type:'success'});
                init();
            }
            }); 
    };


    init();



}]);