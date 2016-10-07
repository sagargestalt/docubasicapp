'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:pagecreateCtrl
 * @description
 * # pagecreateCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('pagecreateCtrl', function ($scope, $rootScope,localStorageService,pageservice,$location,updatepageservice,pagenameservice) {
 $rootScope.tenancyid = localStorageService.get('tenancyid');
  $rootScope.userid = localStorageService.get('userid');
   $rootScope.isAdmin = localStorageService.get('isAdmin');
    $rootScope.username = localStorageService.get('username');
      $rootScope.pagename = localStorageService.get('pname');

    $scope.$watch(function () { return updatepageservice.getXxx(); }, function (newdata, olddata) {
  		
        if (newdata != null) {
           

            //update Controller2's xxx value
            $scope.xxx= newdata.PageContent;
            $scope.istylename = newdata.StyleName;
            $scope.ssss = $scope.xxx;
            $scope.pgname = newdata.PageName;
      
            $rootScope.id = newdata.Page_id;

        }
         if (newdata = null) {
         $scope.update = true;
      }
    }, true);

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
    $( ".draggable" ).draggable();
$( "#draggable" ).draggable({ revert: true, helper: "clone", containment: '#wrapper' });
$( "#dragThis" ).draggable();




    $("#dgg")
    .draggable()
    .click(function(){
        if ( $(this).is('.ui-draggable-dragging') ) {
            return;
        }
        $(this).draggable( "option", "disabled", true );
       $(this).attr('contenteditable','true');
    })
    .blur(function(){
        $(this).draggable( 'option', 'disabled', false);
        $(this).attr('contenteditable','false');
    });

    $scope.submitpage = function(){
            var tid={
                tenancy_id:$rootScope.tenancyid,
                created_by:$rootScope.userid ,
                page_name: $rootScope.pagename,
                page_content:$scope.ssss,
                }

        pageservice.postpage.save((tid), function(data){
            $scope.alerts=[];
        $rootScope.sdata= data.data;
         
            });

        };

        $scope.updatepage = function(){
        	var tid={
        		id:$rootScope.id,
                tenancy_id:$rootScope.tenancyid,
                updated_by:$rootScope.userid ,
                page_name:$scope.pgname,
                page_content:$scope.ssss,
                }

        pageservice.updatepage.query((tid), function(data){
            $scope.alerts=[];
        $rootScope.sdata= data.data;
         
            });


        };


     });