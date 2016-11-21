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
           
           $scope.close = function(){
            $scope.show = false;
            $scope.stylename = "";
           };
          $scope.closemodal = function(){
                console.log("hi");
                $rootScope.modalInstance.close();
                $scope.stylename = "";

              };

           var tid = {
             tenancy_id:$rootScope.tenancyid 
      		};

       styleservice.getstyledata.save((tid), function(data){
       $scope.alerts=[];
              $scope.sdata= data.data;
               
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
          $rootScope.modalInstance.close();

        };
        
      $scope.summernoteOpt = {
              toolbar: [
                  ['headline', ['style']],
                  ['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
                  ['textsize', ['fontsize']],
                  ['alignment', ['ul', 'ol', 'paragraph', 'lineheight']],
              ]
          };
          

    $scope.updatestyle = function(styles){
    	$scope.summernoteTextTwo = styles.StyleContent;
    	//$rootScope.$broadcast('catchuser', styles);
    	SocialLoginservice.setXxx(styles);
         $rootScope.$broadcast('styldata');

    	$location.path( "/createstyle" );
    	

    };

    $scope.create = function(){
    	var data = {
    		name:$scope.stylename
    	};
    	
    	//SocialLoginservice.setname(data);
        $rootScope.$broadcast('stylenamesend', data);

    	$location.path( "/createstyle" );
         $rootScope.modalInstance.close();
    	


    };

});