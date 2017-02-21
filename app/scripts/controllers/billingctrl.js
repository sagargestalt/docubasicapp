'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:todoctrl
 * @description
 * # todoctrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('billingctrl',['$scope', '$state','$timeout','$rootScope','$routeParams','$window','settingservice','localStorageService','$location','billingservice',
  function ($scope, $state, $timeout,$rootScope,$routeParams,$window,settingservice,localStorageService,$location,billingservice ) {
 $rootScope.tenancyid = localStorageService.get('tenancyid');
  $rootScope.username = localStorageService.get('username');
  $rootScope.userid = localStorageService.get('userid');
  $rootScope.isLogin = localStorageService.get('isLogin');
   $rootScope.profilepath = localStorageService.get('profilepath');
        if(!$rootScope.isLogin) {
            $location.path( "/login" );
            return false;
        }
var tid = {
  id:$rootScope.tenancyid 
};

 billingservice.getbilldetail.query((tid), function(data){
 $scope.alerts=[];
        $scope.billingdata = data.data;
         
    });

 	billingservice.getpackages.query({}, function(data){
		 $scope.alerts=[];
        $scope.packagedata = data.data;
         

    });

  $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    
  $scope.openb = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened2 = true;
    };



$scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };




 $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
 $scope.format = $scope.formats[0];
  $scope.billinghistory = function(){

  //$rootScope.billingSidebar = false;
   $rootScope.showbilling = true;


  };


  $scope.closesidebar = function(){
   $rootScope.billingSidebar = false;


      };

      $scope.closehistorysidebar = function(){
         $rootScope.showbilling = false;

      };
  $scope.upgrade = function(info){
    $rootScope.packageid = info.package_id;
    localStorageService.set('packageid',$rootScope.packageid);
    $rootScope.billingSidebar = false;
    /*var packagedata = {
      package_id:$scope.packageid,
      tenancy_id :$rootScope.tenancyid 
  
    };

    billingservice.upgarde.post((packagedata), function(data){
     $scope.alerts=[];
        $scope.packagedata = data.data;
         

    });*/

    $location.path( "/payment" );


  };

  $scope.upgradeplan = function(info){
    $rootScope.packageid = info.package_id;
    localStorageService.set('packageid',$rootScope.packageid);
    $rootScope.billingSidebar = false;
    /*var packagedata = {
      package_id:$scope.packageid,
      tenancy_id :$rootScope.tenancyid 
  
    };

    billingservice.upgarde.post((packagedata), function(data){
     $scope.alerts=[];
        $scope.packagedata = data.data;
         

    });*/

    $location.path( "/plan-payment" );


  };

  $scope.$watch('packageid', function () {
      localStorageService.set('packageid',$rootScope.packageid);
     // localStorageService.set('userid',$rootScope.userid);
    }, true);

  $scope.billinghstry = function(){
    var data=
    {
      flag:$scope.tsktype,
      fromdate:$scope.startDate,
      todate:$scope.endDate,
      tenancy_id:$rootScope.tenancyid,

    };
    billingservice.getbilldetailsearch.post((data), function(data){
 $scope.alerts=[];
        $scope.billinghistory = data.data.result;
         
    });


  };

   $scope.dfilter = [{id:'1',type:'Date'},
                  {id:'2',type:'Monthly'},
                  {id:'3',type:'Quarterly'},
                  {id:'4',type:'Yearly'}
                   

                  ];



  		}]);
