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
    $rootScope.profilepath = localStorageService.get('profilepath');
     $scope.close = function(){
            $scope.show = false;
            $scope.pagename = "";
            $rootScope.pname = "";
           };
    $scope.closemodal = function(){
           $rootScope.rightSidebarpage = false;
           $scope.close();

        };
          $rootScope.updatepages = false;
      localStorageService.set('updatepages', $rootScope.updatepages);

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

              if($scope.sdata.length === 0){

                $scope.nullpage = true;
              }
               
         
    });

   $scope.updatepage = function(page,i){
     $scope.selected = true;

       $scope.selectedIndex=i;
        $rootScope.updatepages = true;
      localStorageService.set('updatepages', $rootScope.updatepages);
            updatepageservice.setXxx(page);

             //$rootScope.modalInstance.close();
        $location.path( "/createpage" );

        };

        $scope.create = function(){
        
        //pagenameservice.setXxx(data);
        $rootScope.pname = $scope.pagename;
         //$rootScope.modalInstance.close();
         $scope.pagename = "";
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