'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:pagecreateCtrl
 * @description
 * # pagecreateCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('pagecreateCtrl', function ($scope, $rootScope,localStorageService,pageservice,$location,updatepageservice,pagenameservice,$timeout,$sce) {
 $rootScope.tenancyid = localStorageService.get('tenancyid');
  $rootScope.userid = localStorageService.get('userid');
   $rootScope.isAdmin = localStorageService.get('isAdmin');
    $rootScope.username = localStorageService.get('username');
      $rootScope.pagename = localStorageService.get('pname');

    $scope.$watch(function () { return updatepageservice.getXxx(); }, function (newdata) {

        if (newdata !== null) {


            //update Controller2's xxx value
            $scope.xxx= newdata.PageContent;
            $scope.istylename = newdata.StyleName;
            $scope.ssss = $scope.xxx;
             $scope.htmlString = $sce.trustAsHtml(newdata.PageContent);
            $scope.pgname = newdata.PageName;

            $rootScope.id = newdata.Page_id;

        }
         if (newdata === null) {
         $scope.update = true;
      }
    }, true);

    var countUp = function() {

    $scope.alerts = [];
     $scope.errors = [];

      $timeout(countUp, 10000);

    };
 $timeout(countUp, 10000);

    /* $scope.$watch(function () { return pagenameservice.getXxx(); }, function (newvalue, oldvalue) {

        if (newvalue != null) {


            //update Controller2's xxx value
            $scope.xxx= newvalue.name;
            //$scope.istylename = newdata.StyleName;
           // $scope.ssss = $scope.xxx;

            $rootScope.pname = $scope.xxx;

        }
         if (newvalue = null) {
         	 $scope.update = false;

      }
    }, true);*/
  



    $scope.submitpage = function(){
            var tid={
                tenancy_id:$rootScope.tenancyid,
                created_by:$rootScope.userid ,
                page_name: $rootScope.pagename,
                page_content:$('#proposalDropContainer').html(),
                };

        pageservice.postpage.save((tid), function(data){
            $scope.alerts=[];
            if(data.status === true){
        $rootScope.sdata= data.data;
        $scope.alerts.push({msg: 'Page created uccessfully', type:'success'});
         $scope.pgname = "";
              $scope.ssss = "";
      }

      else{

                $scope.errors = data.message;
            }


            });

        };

        $scope.updatepage = function(){
        	var tid={
        		id:$rootScope.id,
                tenancy_id:$rootScope.tenancyid,
                updated_by:$rootScope.userid ,
                page_name:$scope.pgname,
                page_content:$('#proposalDropContainer').html(),
                };

        pageservice.updatepage.query((tid), function(data){
            $scope.alerts=[];
            if(data.status === true){
               $rootScope.sdata= data.data;
              $scope.alerts.push({msg: 'Page updated successfully', type:'success'});
              $scope.pgname = "";
              $scope.ssss = "";
            }

            else{

                $scope.errors = data.message;
            }


            });


        };


     });