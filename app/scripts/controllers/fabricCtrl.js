'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:styleCtrl
 * @description
 * # styleCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('fabricCtrl', function ($scope,Fabric, FabricConstants,Keypress) {


  	$scope.fabric = {};
	//$scope.ImagesConstants = ImagesConstants;
	$scope.FabricConstants = FabricConstants;

	//
	// Creating Canvas Objects
	// ================================================================
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
		var json = $scope.fabric.getJSON();

		$www.put('/api/canvas/' + $scope.canvasId, {
			json: json
		}).success(function() {
			$scope.fabric.setDirty(false);
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