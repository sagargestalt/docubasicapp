'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:styleCtrl
 * @description
 * # styleCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('pageCtrl', function ($scope, $rootScope,localStorageService,pageservice,$location,updatepageservice,styleservice) {
 $rootScope.tenancyid = localStorageService.get('tenancyid');
  $rootScope.userid = localStorageService.get('userid');
   $rootScope.isAdmin = localStorageService.get('isAdmin');
    $rootScope.username = localStorageService.get('username');
     $scope.close = function(){
            $scope.show = false;
            $scope.pagename = "";
           };
    $scope.closemodal = function(){
          $rootScope.modalInstance.close();

        };

   // $rootScope.ssss = $scope.ssss;

    /* var tid = {
       tenancy_id:$rootScope.tenancyid 
		}

 styleservice.getstyledata.save((tid), function(data){
 $scope.alerts=[];
        $scope.sdata= data.data;
         
    });*/
var tid = {
       tenancy_id:$rootScope.tenancyid 
        };

 pageservice.getpagedata.save((tid), function(data){
 $scope.alerts=[];
        $scope.sdata= data.data;
         
    });

   $scope.updatepage = function(page){
            updatepageservice.setXxx(page);
        $location.path( "/createpage" );

        };

        $scope.create = function(){
        
        //pagenameservice.setXxx(data);
        $rootScope.pname = $scope.pagename;
        $location.path( "/createpage" );
        


    };

    $scope.$watch('pname', function () {
      localStorageService.set('pname', $rootScope.pname);
     // localStorageService.set('userid',$rootScope.userid);
    }, true);


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
$scope.summernoteOpt = {
        toolbar: [
            ['headline', ['style']],
            ['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
            ['textsize', ['fontsize']],
            ['alignment', ['ul', 'ol', 'paragraph', 'lineheight']],
        ]
    };
   
    
$(".window").draggable({

        stop: function() {
          var tid = {
       tenancy_id:$rootScope.tenancyid 
    };

 styleservice.getstyledata.save((tid), function(data){
 //$scope.alerts=[];
        $rootScope.sdata= data.data;
         
    });
}
       
      });

        

      
  	 });