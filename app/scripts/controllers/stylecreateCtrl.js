'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:styleCtrl
 * @description
 * # styleCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('stylecreateCtrl', function ($scope, $rootScope,localStorageService,styleservice,$location,SocialLoginservice,praposalservice) {
  	//$rootScope.$on('catchuser', function (catchuser, styles) {
  		//$location.path( "/createstyle" );
    	
	//$scope.summernoteTextTwo = styles.StyleContent;
  $scope.closeAlerts = function(index) {
        $scope.alerts.splice(1, index);
        $scope.alerts = [];
    };
   // $scope.dtOptions = DTOptionsBuilder.newOptions().withOption('aaSorting', [[2, 'desc']])
     $scope.closeAlert = function(index) {
        $scope.errors.splice(1, index);
        $scope.errors = [];
    };

    $scope.closebar = function(){
          //$rootScope.rightSidebar = false;
          //$rootScope.rightSidebar1 = false;
           //$rootScope.rightSidebar2 = false;
           $rootScope.rightSidebar3 = false;
          // $rootScope.modalInstance.close();


      };
	
    
$scope.htmlString=undefined;
$scope.update = false;
$scope.xxx = undefined;
//});


 $rootScope.$on('styldata', function() {
        //console.log($('#proposalDropContainer').html());
        //$scope.ssss =  $('#proposalDropContainer').html();
        $scope.update = true;

      });

 


  $rootScope.tenancyid = localStorageService.get('tenancyid');
  $rootScope.userid = localStorageService.get('userid');
   $rootScope.isAdmin = localStorageService.get('isAdmin');
    $rootScope.username = localStorageService.get('username');
    $rootScope.stylename = localStorageService.get('stylenames');
    $rootScope.updatestyle = localStorageService.get('updatestyle');

  	/*$scope.$watch(function () { return SocialLoginservice.getXxx(); }, function (newdata) {
  		
        if (newdata.StyleContent !== null) {
           //$scope.update = true;

            //update Controller2's xxx value
            $scope.xxx= newdata.StyleContent;
            if ($scope.xxx == null){


              $scope.update = false;

            }
            $scope.istylename = newdata.StyleName;
            $scope.htmlString = $scope.xxx;

      
            $rootScope.id = newdata.id;
            console.log($rootScope.id);

        }
         if (newdata === null) {
          //$scope.update = false;
         
      }
    }, true);*/
if( $rootScope.updatestyle == true){
 $scope.products = SocialLoginservice.getXxx();
 $scope.istylename =  $scope.products.StyleName;
 $scope.xxx= $scope.products.StyleContent;
  $scope.htmlString = $scope.xxx;
   $rootScope.id =  $scope.products.id;

};
var imageids={
        tenancy_id:$rootScope.tenancyid,
         proposal_id: $rootScope.proposal_id, 

      };

       praposalservice.getiamage.save((imageids), function(data){
        //$scope.alerts=[];
        $scope.iamgedata= data.data.images;
         
      });
   

  	$scope.updatestyle = function(){
      $scope.errors = [];
		var data = {

	id: $rootScope.id,
	tenancy_id:$rootScope.tenancyid,
	updated_by: $rootScope.userid,
	style_content:$('#proposalDropContainer').html(),
	style_name: $rootScope.stylename,
		};
     $("#proposalDropContainer").empty();
		styleservice.styleupdate.query((data), function(data1){

 		$scope.alerts=[];
    if(data1.status === true){
        $scope.sdata= data1.data;
        $scope.alerts.push({msg: 'Style updated successfully', type:'success'});
         $("#proposalDropContainer").empty();
         $rootScope.updatestyle = false;
          localStorageService.set('updatestyle', $rootScope.updatestyle);
         //newdata = undefined;
        $scope.summernoteTextTwo = "";
          $scope.htmlString="";
         $location.path( "/main" );
        
         }
         if(data1.status === false){
          $scope.errors = data1.message;


         }

    });


  	};
    $scope.summernoteOpt = {
              toolbar: [
                  ['headline', ['style']],
                  ['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
                  ['textsize', ['fontsize']],
                  ['alignment', ['ul', 'ol', 'paragraph', 'lineheight']],
              ]
          };



  	$scope.submitstyle = function(){
       $scope.errors = [];
    	var data ={
    	tenancy_id:$rootScope.tenancyid,
    	style_name:$rootScope.stylename,
    	created_by:$rootScope.userid,
    	style_content:$('#proposalDropContainer').html(),
    };
    styleservice.poststyledata.save((data), function(data1){
      $scope.alerts=[];
        //$scope.pdata= data1.data.PageContent;
        if(data1.status === true){
          $scope.alerts.push({msg: 'Style created successfully', type:'success'});
          //$scope.summernoteTextTwo = "";
           $scope.ssss = "";
               $scope.htmlString="";
          $location.path( "/main" );


        }
         if(data1.status === false){
          $scope.errors = data1.message;
         }
         
    });

    };

     $scope.imageupload = function(){
        $scope.loading = true;
        $scope.errors = [];
        var data = {
             template_id:$rootScope.template_id,
              page_id: $rootScope.pageid,
               page_id:2,
              proposal_id:$rootScope.proposal_id,
              image_raw:$scope.files[0].base64,
               tenancy_id:$rootScope.tenancyid,
               created_by:$rootScope.userid,
           };

            praposalservice.upiamage.save((data), function(data){
              if(data.status == true){
                $scope.loading = false;
              //$scope.alerts=[];
              var imagepath = data.logo_path;
              //$rootScope.imageinsert(imagepath);
              $scope.iamge= data.data;
              init();
            }
            if(data.status == false){

               $scope.errors = data.message;
            }
         
            });

        };

        $scope.selectimage = function(thumbs){
          var imagepath = thumbs.image_path;
          $rootScope.imageinsert(imagepath);
          $rootScope.modalInstance.close();

        };

     $rootScope.callme = function(){

     };


  	  	 });