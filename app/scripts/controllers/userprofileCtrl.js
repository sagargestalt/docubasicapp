'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:taskcategoryCtrl
 * @description
 * # taskcategoryCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('userprofileCtrl',['$scope', '$state','$timeout','$rootScope','$stateParams','$window','settingservice','localStorageService','$location','userservice','sweetAlert','$route',
  function ($scope, $state, $timeout,$rootScope,$stateParams,$window,settingservice,localStorageService,$location,userservice,sweetAlert,$route ) {
 $rootScope.tenancyid = localStorageService.get('tenancyid');
  $rootScope.userid = localStorageService.get('userid');
   $rootScope.isAdmin = localStorageService.get('isAdmin');
    $rootScope.username = localStorageService.get('username');
    $rootScope.company_logo = localStorageService.get('company_logo');
    $scope.$route = $route;
   	$scope.closeAlerts = function(index) {
        $scope.alerts.splice(1, index);
        $scope.alerts = [];
    };

   function init() {
    var data1={
    	id:$rootScope.userid
    }
    settingservice.getallusersdetial.query((data1), function(data){
     $scope.alerts=[];
        $scope.usersdetail = data.data;

        $scope.fname = $scope.usersdetail.first_name;
        $scope.lname = $scope.usersdetail.last_name;
        $scope.imageurl = $scope.usersdetail.image_path;
         

    });
}
init();


    $scope.send = function(){
        $scope.alerts=[];
      

        if($scope.files){
            $scope.loading = true;
        var logo={
             tenancy_id:$rootScope.tenancyid,
             image_raw:$scope.files[0].base64,
            created_by:$rootScope.userid
        };

        settingservice.changeprofile.save((logo), function(responce){

            $scope.message = responce.message;
            if(responce.status === true){
              $scope.loading = false;
                $scope.alerts.push({msg: 'Picture Updated successfully', type:'success'});
                $scope.imageptah = responce.data.logo_path;
                $rootScope.profilepath = $scope.imageptah;
                 localStorageService.set('profilepath',$rootScope.profilepath);
                init();
            }
            if(responce.status === false){
                $scope.alerts.push({msg: 'error occurd', type:'danger'});
                //init();
            }
            });

      }

      var data ={
        first_name:$scope.fname,
        last_name:$scope.lname,
        created_by:$rootScope.userid,
        tenancy_id:$rootScope.tenancyid 


      };
      $rootScope.username = $scope.fname;
       localStorageService.set('username',$rootScope.username );

       settingservice.updateprofile.save((data), function(responce){
        if(responce.status == true)
        {
          //$scope.alerts.push({msg: 'Profile Updated successfully', type:'success'});
            init();
          $location.path( "/main" );

        }

        if(responce.status == false){


        }
      




        }); 



    };



       }]);