'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:pagecreateCtrl
 * @description
 * # pagecreateCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('pagecreateCtrl', function ($scope, $rootScope,localStorageService,pageservice,$location,updatepageservice,pagenameservice,$timeout,$sce,praposalservice,Fabric,FabricConstants,Keypress,$window,$uibModal,styleservice) {
 $rootScope.tenancyid = localStorageService.get('tenancyid');
  $rootScope.userid = localStorageService.get('userid');
   $rootScope.isAdmin = localStorageService.get('isAdmin');
    $rootScope.username = localStorageService.get('username');
      $rootScope.pagename = localStorageService.get('pname');
        $rootScope.pagename = localStorageService.get('pname');
        $rootScope.updatepages = localStorageService.get('updatepages');
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
if( $rootScope.updatepages == true){
 $scope.products = updatepageservice.getXxx();
 $scope.pgname =  $scope.products.PageName;
 console.log($scope.products);
 $scope.xxx= $scope.products.PageContent;
 var content =  $scope.xxx;

  $scope.htmlString = $scope.xxx;
   $scope.pageid =  $scope.products.Page_id;

};
 var data = {
      id: $scope.pageid
    }

     styleservice.getpagedetail.query((data), function(data1){
  
       
         var content = data1.data.content;
          $scope.fabric.loadJSON(content);
          //$rootScope.rightSidebar2 = false;
           
         

    });

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
        var sdata = $scope.fabric.getJSON();
            var tid={
                tenancy_id:$rootScope.tenancyid,
                created_by:$rootScope.userid ,
                page_name: $rootScope.pagename,
                page_content:sdata,
                };

        pageservice.postpage.save((tid), function(data){
            $scope.alerts=[];
            if(data.status === true){
        $rootScope.sdata= data.data;
        $scope.alerts.push({msg: 'Page created uccessfully', type:'success'});
         $scope.pgname = "";
              $scope.ssss = "";
              $scope.fabric.clearCanvas();
               $scope.htmlString="";
              $location.path( "/main" );
      }

      else{

                $scope.errors = data.message;
            }


            });

        };

        $scope.updatepage = function(){
           var pdata = $scope.fabric.getJSON();
        	var tid={
        		id:$scope.pageid,
                tenancy_id:$rootScope.tenancyid,
                updated_by:$rootScope.userid ,
                page_name:$scope.pgname,
                page_content:pdata,
                };

        pageservice.updatepage.query((tid), function(data){
            $scope.alerts=[];
            if(data.status === true){
               $rootScope.sdata= data.data;
              $scope.alerts.push({msg: 'Page updated successfully', type:'success'});
              $scope.pgname = "";
              $scope.ssss = "";
              $scope.htmlString="";
              $scope.fabric.clearCanvas();
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
      $scope.openimageslider = function(){
        $rootScope.rightSidebar3 = true;

      };


     //



    $scope.fabric = {};
     var lableGroup;
  //$scope.ImagesConstants = ImagesConstants;
  $scope.FabricConstants = FabricConstants;

  //
  // Creating Canvas Objects
  // ================================================================
  $scope.addtextbox = function(){
    $scope.fabric.addText();

  };
  $scope.addShape = function(path) {
    $scope.fabric.addShape('/lib/svg/' + path + '.svg');
    Modal.close();
  };

  $scope.addImage = function(image) {
    $scope.fabric.addpicture(image);
    //Modal.close();
  };

  $rootScope.addImageUpload = function(imagepath) {
 
    $scope.fabric.addpicture(imagepath);
    //var obj = angular.fromJson(data);
   // $scope.addImage(data);
    //Modal.close();
  };

$scope.addcircle = function() {
  $scope.fabric.addCircle();

    };

     $scope.addSqure = function(){
      $scope.fabric.addRect();


     };

     $scope.addLine = function(){
      $scope.fabric.addLine();

     };

     $scope.addTri =function(){

      $scope.fabric.addTriangle();
     };

     $rootScope.videoadd = function(){
    // var video1El = document.getElementById('video');

        //$scope.videadd = true;

    //var video2El = document.getElementById('video2');  

     //$scope.fabric.addVideo(video2El);

      $rootScope.modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'views/videoupload.html',
        controller: 'videoUploadCtrl',
        windowClass: 'modal-md ',
        //size: size,
        resolve: {
          
        }
        });


     };

     $rootScope.$on('catchurl', function(event, obj) {
      console.log(obj);
      $scope.videoUrl = obj;

      
      
      //$scope.videopath =  angular.copy($scope.videoUrl);
       /*var video = document.getElementById('video2');
         video.src = $scope.videoUrl;
         video.play();*/

         var video = document.getElementById('video2');
         var source = document.createElement('source');

          source.setAttribute('src', $scope.videoUrl);
          video.setAttribute('crossOrigin', 'anonymous');
          video.appendChild(source);
          var videoSrc = $scope.videoUrl;
            //video.play();
    
          // var video2El = document.getElementById('video2');  
           console.log(video);
           $scope.fabric.addVideo(video,videoSrc);

   
    


     });
      $rootScope.callme = function(){

     };

     $scope.addurltovideo = function(){
       var video2El = document.getElementById('video2');  

     $scope.fabric.addVideo(video2El);

     };
     $scope.trustSrc = function(src) {
          return $sce.trustAsResourceUrl(src);
        };

        
         //$scope.fabric.loadJSON($scope.content);

  //
  // Editing Canvas Size
  // ================================================================
  $scope.selectCanvas = function() {
    $scope.canvasCopy = {
      width: $scope.fabric.canvasOriginalWidth,
      height: $scope.fabric.canvasOriginalHeight
    };
  };

  $scope.setCanvasSize = function() {
    $scope.fabric.setCanvasSize($scope.canvasCopy.width, $scope.canvasCopy.height);
    $scope.fabric.setDirty(true);
    Modal.close();
    delete $scope.canvasCopy;
  };

  $scope.updateCanvas = function() {
    var json = $scope.fabric.getCanvasBlob();
    console.log(json);
    $scope.pagedata = json;
    $rootScope.finalpricedata = [];
    $rootScope.finaltaxdata = [];
    $rootScope.finaldisdata = [];
     $scope.vurl=[];
            var url = 'https://www.youtube.com/embed/r4O4Xec60_k';

     var data = {

            template_id:"1",
            page_id:"1",
            //page_id:2,
            proposal_id:"204",
            content:$scope.pagedata,
            created_by:"86",
            //video_url: $scope.vUrl,
            video_url:$scope.vurl,
            tenancy_id: "58",
           //pricetable_content:"",
           //taxtable_content:"",
           //distable_content:"",
            pricetable_content:$rootScope.finalpricedata,
            taxtable_content:$rootScope.finaltaxdata,
            distable_content:$rootScope.finaldisdata,
            //customer_price:$rootScope.customerval
             version_id:"1"
            };

             praposalservice.savepage.save((data), function(data1){
              $scope.alerts=[];
              if(data1.status == true){
              //$scope.pagedata= data1.data;
              //$scope.ssss = data1.data.page_contents;
              $rootScope.totalvalue = data1.data.after_tax_total;
              console.log($rootScope.totalvalue);
               $rootScope.callme();
             }
               
            });


    
  };

    $scope.fillcolor = function(){
      var value = $scope.mycoler;
      $scope.fabric.fillShapecolor(value);
      console.log($scope.fabric.selectedObject.type);
      if($scope.fabric.selectedObject.type == 'line'){
             $scope.fabric.filllinecolor(value);
        }


    };
  //
  // Init
  // ================================================================
  $scope.init = function() {
    $scope.fabric = new Fabric({
      JSONExportProperties: FabricConstants.JSONExportProperties,
      textDefaults: FabricConstants.textDefaults,
      shapeDefaults: FabricConstants.shapeDefaults
      //json: $scope.main.selectedPage.json
    });

    console.log($scope.fabric);
    console.log($window.innerHeight);
    console.log($window.innerWidth);
    var canHeight = $window.innerHeight;
    var canWidth = $window.innerWidth - 400;
    var $canvas = $("#demoCanvas");
    $scope.fabric.setCanvasSize($canvas.width(), $canvas.height());
    $scope.fabric.setDirty(true);

  };

  $scope.$on('canvas:created', $scope.init);


  $scope.insertText = function(shapeType){

    console.log("text - " + shapeType);
    switch(shapeType) {
      case 'text':
        $scope.addtextbox();
        break;
      default:
        break;
    }
    switch(shapeType){
      case 'circle':
      $scope.addcircle();
      break;
      default:
      break;
    }

    switch(shapeType){
      case 'squre':
      $scope.addSqure();
      break;
      default:
      break;
    }
    switch(shapeType){
      case 'triangle':
      $scope.addTri();
      break;
      default:
      break;
    }
    switch(shapeType){
      case 'line':
      $scope.addLine();
      break;
      default:
      break;
    }
  };
  







     });