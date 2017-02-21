 'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:todoctrl
 * @description
 * # todoctrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('paymentCtrl',['$scope', '$state','$timeout','$rootScope','$routeParams','$window','settingservice','localStorageService','$location','billingservice','$http',
  function ($scope, $state, $timeout,$rootScope,$routeParams,$window,settingservice,localStorageService,$location,billingservice,$http) {
 $rootScope.tenancyid = localStorageService.get('tenancyid');
  $rootScope.username = localStorageService.get('username');
  $rootScope.userid = localStorageService.get('userid');
  $rootScope.packageid = localStorageService.get('packageid');
  $rootScope.isLogin = localStorageService.get('isLogin');
        if(!$rootScope.isLogin) {
            $location.path( "/login" );
            return false;
        }



 $scope.submitForm = function() {
        // Posting data to php file

        ///
        $scope.alerts=[];
         tokenRequest();

            // Prevent form from submitting
            return false;

        ///
      };

      var successCallback = function(data) {
        $rootScope.alerts=[];
        $scope.errors= [];
        var userdata = {
          tenancy_id:$rootScope.tenancyid,
          package_id:$rootScope.packageid, 
          token:data.response.token.token,
          updated_by:$rootScope.userid
        };


        /*$http({
          method  : 'POST',
          url     : 'http://localhost:8081/dbasic/public/api/v1/process',
          data    :userdata,//forms user object
          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
         })
          .success(function(data) {
            if (data.errors) {

                     if (data.errorCode === 200) {

              } else {
                  alert(data.errorMsg);
              }
              // Showing errors.
              
            } else {
              
              $scope.message = data.message;
            }
          });*/

          billingservice.upgarde.post((userdata), function(data){
            if(data.status == true){

               $rootScope.alerts.push({msg: 'Payment done successully', type:'success'});
               $location.path( "/main" );
               $rootScope.upgrade = true;
            }
            if(data.status == false){
               $scope.errors = data.message;
               $rootScope.alerts.push({msg: $scope.errors, type:'danger'});
               $location.path( "/payment" );
               //$location.path( "/main" );

            }
           $scope.alerts=[];
            $scope.packagedata = data.data;
         

    });
        };
var tokenRequest = function() {
        // Setup token request arguments
        var args = {
            sellerId: "901328901",
            publishableKey: "43727D77-26F6-4402-AB6A-F5941DABE2F1",
            ccNo: $("#ccNo").val(),
            cvv: $("#cvv").val(),
            expMonth: $("#expMonth").val(),
            expYear: $("#expYear").val()
        };

        // Make the token request
        TCO.requestToken(successCallback, errorCallback, args);
    };

    $(function() {
        // Pull in the public encryption key for our environment
        TCO.loadPubKey('sandbox');

        
    });
         

   
     
     var errorCallback = function(data) {
        if (data.errorCode === 200) {
            tokenRequest();
        } else {
            alert(data.errorMsg);
        }
    };




  }]);