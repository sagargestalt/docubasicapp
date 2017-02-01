'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:styleCtrl
 * @description
 * # styleCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('fabricCtrl', function ($scope,Fabric, FabricConstants,Keypress,praposalservice,$rootScope) {


  	$scope.fabric = {};
	//$scope.ImagesConstants = ImagesConstants;
	$scope.FabricConstants = FabricConstants;

	//
	// Creating Canvas Objects
	// ================================================================
	$rootScope.addtextbox = function(){
		$scope.fabric.addText();

	};
	$scope.addShape = function(path) {
		$scope.fabric.addShape('/lib/svg/' + path + '.svg');
		Modal.close();
	};

	$scope.addImage = function(image) {
		$scope.fabric.addImage('/image?image=' + image + '&size=full');
		Modal.close();
	};

	$scope.addImageUpload = function(data) {
		var obj = angular.fromJson(data);
		$scope.addImage(obj.filename);
		Modal.close();
	};

$rootScope.addcircle = function() {
	$scope.fabric.addCircle();

	  };

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

	//
	// Init
	// ================================================================
	$scope.init = function() {
		$scope.fabric = new Fabric({
			JSONExportProperties: FabricConstants.JSONExportProperties,
			textDefaults: FabricConstants.textDefaults,
			shapeDefaults: FabricConstants.shapeDefaults,
			//json: $scope.main.selectedPage.json
		});
	};

	$scope.$on('canvas:created', $scope.init);

	
  });