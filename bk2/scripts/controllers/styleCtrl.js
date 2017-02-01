'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:styleCtrl
 * @description
 * # styleCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('styleCtrl', function ($scope, $rootScope,localStorageService,styleservice,$location,SocialLoginservice) {
       $rootScope.tenancyid = localStorageService.get('tenancyid');
        $rootScope.userid = localStorageService.get('userid');
         $rootScope.isAdmin = localStorageService.get('isAdmin');
          $rootScope.username = localStorageService.get('username');
           $scope.stylename = "";
            $rootScope.updatestyle = false;
      localStorageService.set('updatestyle', $rootScope.updatestyle);
           
           $scope.close = function(){
            $scope.show = false;
            $scope.stylename = "";
           };
        

           var tid = {
             tenancy_id:$rootScope.tenancyid 
      		};

       styleservice.getstyledata.save((tid), function(data){
       $scope.alerts=[];
              $scope.sdata= data.data;

              if($scope.sdata.length === 0){

                $scope.nullstyle = true;
              }
               
          });

       /*$( ".draggable" ).draggable();
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
          });*/

        $scope.closemodal = function(){
          $rootScope.rightSidebarstyle = false;
                $scope.stylename = "";
                $scope.close();

        };
        
      $scope.summernoteOpt = {
              toolbar: [
                  ['headline', ['style']],
                  ['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
                  ['textsize', ['fontsize']],
                  ['alignment', ['ul', 'ol', 'paragraph', 'lineheight']],
              ]
          };
          

    $scope.updatestyle = function(styles,i){
      $scope.selected = true;
       $rootScope.stylenames = styles.StyleName;
        localStorageService.set('stylenames', $rootScope.stylenames);
      //console.log(styles);
       $scope.selectedIndex=i;
    	$scope.summernoteTextTwo = styles.StyleContent;
      $rootScope.updatestyle = true;
      localStorageService.set('updatestyle', $rootScope.updatestyle);
    	//$rootScope.$broadcast('catchuser', styles);
       
    	SocialLoginservice.setXxx(styles);
       
          //$rootScope.modalInstance.close();
           $rootScope.$broadcast('styldata');
    	$location.path( "/createstyle" );
    	

    };

    $scope.create = function(){
       $rootScope.stylenames =  $scope.stylename;
    	var data = {
    		name:$scope.stylename
    	};
    	
    	//SocialLoginservice.setname(data);
        $rootScope.$broadcast('stylenamesend', data);

    	$location.path( "/createstyle" );
      $scope.stylename="";
         // $rootScope.modalInstance.close();
    	


    };

     $scope.$watch('stylenames', function () {
      localStorageService.set('stylenames', $rootScope.stylenames);
     // localStorageService.set('userid',$rootScope.userid);
    }, true);

});