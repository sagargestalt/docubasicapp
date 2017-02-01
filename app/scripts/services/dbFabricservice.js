'use strict';

/**
 * @ngdoc service
 * @name docubasic3App.billingservice
 * @description
 * # billingservice
 * Service in the docubasic3App.
 */

angular.module('docubasic3App').factory('dbFabricservice', ['Fabric','FabricWindow', '$timeout', '$window', 'FabricCanvas', 'FabricDirtyStatus',function (FabricWindow, $timeout, $window, FabricCanvas, FabricDirtyStatus) {

		return function(options) {

		var canvas;
		var JSONObject;
		var self = angular.extend({
			canvasBackgroundColor: '#ffffff',
			canvasWidth: 600,
			canvasHeight: 600,
			canvasOriginalHeight: 600,
			canvasOriginalWidth: 600,
			maxContinuousRenderLoops: 25,
			continuousRenderTimeDelay: 500,
			editable: true,
			JSONExportProperties: [],
			loading: false,
			dirty: false,
			initialized: false,
			userHasClickedCanvas: false,
			downloadMultipler: 2,
			imageDefaults: {},
			textDefaults: {},
			shapeDefaults: {},
			windowDefaults: {
				transparentCorners: false,
				rotatingPointOffset: 25,
				padding: 0
			},
			canvasDefaults: {
				selection: false
			}
		}, options);

		function isHex(str) {
			return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/gi.test(str);
		}

		//
		// Canvas
		// ==============================================================
		self.renderCount = 0;
		self.render = function() {
			var objects = canvas.getObjects();
			for (var i in objects) {
				objects[i].setCoords();
			}

			canvas.calcOffset();
			canvas.renderAll();
			self.renderCount++;
			//console.log('Render cycle:', self.renderCount);
		};

		self.setCanvas = function(newCanvas) {
			canvas = newCanvas;
			canvas.selection = self.canvasDefaults.selection;
		};
		self.renderCount = 0;
		self.render = function() {
			var objects = canvas.getObjects();
			for (var i in objects) {
				objects[i].setCoords();
			}

			canvas.calcOffset();
			canvas.renderAll();
			self.renderCount++;
			//console.log('Render cycle:', self.renderCount);
		};
		self.addCircle = function(str) {
			//str = str || 'New Text';
			var object = new FabricWindow.Circle({
    radius: 20, fill: 'green', left: 100, top: 100
 });
			object.id = self.createId();

			self.addObjectToCanvas(object);
		};


		return self;

		};

	 }]);