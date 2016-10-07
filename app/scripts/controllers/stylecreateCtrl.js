'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:styleCtrl
 * @description
 * # styleCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('stylecreateCtrl', function ($scope, $rootScope,localStorageService,styleservice,$location,SocialLoginservice) {
  	//$rootScope.$on('catchuser', function (catchuser, styles) {
  		//$location.path( "/createstyle" );
    	
	//$scope.summernoteTextTwo = styles.StyleContent;
	


//});
  $rootScope.tenancyid = localStorageService.get('tenancyid');
  $rootScope.userid = localStorageService.get('userid');
   $rootScope.isAdmin = localStorageService.get('isAdmin');
    $rootScope.username = localStorageService.get('username');

  	$scope.$watch(function () { return SocialLoginservice.getXxx(); }, function (newdata, olddata) {
  		
        if (newdata != null) {
           $scope.update = true;

            //update Controller2's xxx value
            $scope.xxx= newdata.StyleContent;
            $scope.istylename = newdata.StyleName;
            $scope.summernoteTextTwo = $scope.xxx;
      
            $rootScope.id = newdata.PageId;

        }
         if (newdata = null) {
         
      }
    }, true);
    $scope.$watch(function () { return SocialLoginservice.getname(); }, function (newValue, oldValue) {

        if (newValue != null) {
            //update Controller2's xxx value
            $scope.stylename= newValue.name;
              $scope.update = false;
             
            //$scope.summernoteTextTwo = $scope.xxx;
            //$scope.update = true;
            //$rootScope.id = newValue.PageId;

        }
         if (newValue = null) {
        
      }
    }, true);

  	$scope.updatestyle = function(){
		var data = {

	id: $rootScope.id,
	tenancy_id:$rootScope.tenancyid,
	updated_by: $rootScope.userid,
	style_content:$scope.summernoteTextTwo,
	style_name:$scope.istylename,
		};
		styleservice.styleupdate.query((data), function(data1){
 		$scope.alerts=[];
        $scope.sdata= data1.data;
         
    });


  	};

  	$scope.submitstyle = function(){
    	var data ={
    	tenancy_id:$rootScope.tenancyid,
    	style_name:$scope.stylename,
    	created_by:$rootScope.userid,
    	style_content:$scope.summernoteTextTwo,
    };
    styleservice.poststyledata.save((data), function(data1){
 $scope.alerts=[];
        //$scope.pdata= data1.data.PageContent;
         
    });

    };
  	  	 });