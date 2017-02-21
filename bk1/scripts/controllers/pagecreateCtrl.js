'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:pagecreateCtrl
 * @description
 * # pagecreateCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('pagecreateCtrl', function ($scope, $rootScope,localStorageService,pageservice,$location,updatepageservice,pagenameservice,$timeout,$sce,praposalservice) {
 $rootScope.tenancyid = localStorageService.get('tenancyid');
  $rootScope.userid = localStorageService.get('userid');
   $rootScope.isAdmin = localStorageService.get('isAdmin');
    $rootScope.username = localStorageService.get('username');
      $rootScope.pagename = localStorageService.get('pname');
        $rootScope.pagename = localStorageService.get('pname');
        $rootScope.updatepage = localStorageService.get('updatepage');
    /*$scope.$watch(function () { return updatepageservice.getXxx(); }, function (newdata) {

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
    }, true);*/
if( $rootScope.updatepage == true){
 $scope.products = updatepageservice.getXxx();
 $scope.pgname =  $scope.products.PageName;
 $scope.xxx= $scope.products.PageContent;
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
$scope.closebar = function(){
          //$rootScope.rightSidebar = false;
          //$rootScope.rightSidebar1 = false;
           //$rootScope.rightSidebar2 = false;
           $rootScope.rightSidebar3 = false;
          // $rootScope.modalInstance.close();


      };
   

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
               $scope.htmlString="";
              $location.path( "/main" );
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
              $scope.htmlString="";
              $location.path( "/main" );

            }

            else{

                $scope.errors = data.message;
            }


            });


        };

        $scope.imageupload = function(){
        $scope.loading = true;
        $scope.errors = [];
        var data = {
           image_raw:$scope.files[0].base64,
             template_id:$rootScope.template_id,
              page_id: $rootScope.pageid,
               page_id:2,
              proposal_id:$rootScope.proposal_id,
               tenancy_id:$rootScope.tenancyid,
               created_by:$rootScope.userid,
           };

            praposalservice.upiamage.save((data), function(data){
              if(data.status == true){
                $scope.loading = false;
              //$scope.alerts=[];
              var imagepath = data.logo_path;
              $rootScope.imageinsert(imagepath);
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