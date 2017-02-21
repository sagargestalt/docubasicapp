'use strict';
angular.module('docubasic3App')
  .directive('dbDraggablenew', function () {
    return {
      restrict: 'AE',
      link: function(scope, element) {
        $(element).draggable({ 



			        	 helper: function(){
			          var selected = $('.childgrid tr.selectedRow');
			        if (selected.length === 0) {
			          selected = $(this).addClass('selectedRow');
			        }
			        var container = $('<div/>').attr('id', 'draggingContainer');
			    container.append(selected.clone().removeClass("selectedRow"));
			    return container;
			      }





         });
      }
    };
  });