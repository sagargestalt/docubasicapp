'use strict';
angular.module('docubasic3App')
  .directive('dbDroppable', function ($compile, $rootScope) {
    return {
      restrict: 'AE',
      link: function(scope, element) {
        $(".db-square-widget").draggable({containment: "#proposalDropContainer"});
         //$(".window").draggable({handle:'.bar'});
        $(element).droppable({
          accept: '.ui-draggable',
          drop: function (event, ui) {
            scope.mockContent = scope.mockContent || {};

            var configData = $(ui.draggable[0]).data();
            console.log(configData);
            var needCompile = false;
            var dynamicId = new Date().getTime(); //Date.now();

            // scope.dynamicId = dynamicId;
            scope.mockContent[dynamicId] = 'Enter your text here';
            console.log(scope.mockContent);


            if(configData.square) {
              $(element).append('<db-square dynamic-id=' + dynamicId + '></db-square>');
              needCompile = true;
            }

            if(configData.circle) {
              $(element).append('<db-circle dynamic-id=' + dynamicId + '></db-circle>');
              needCompile = true;
            }

            if(configData.text) {
              $(element).append('<db-text dynamic-id=' + dynamicId + ' db-aspect-ratio="6"></db-text>');
              needCompile = true;

              $(".editable-area").on("click", function() {
              //$(".window").draggable('disable');
                $(this).find(".editable-area").focus();
            
              });
            }

            if(configData.video) {
              $(element).append('<db-video dynamic-id=' + dynamicId + '></db-video>');
              needCompile = true;
            }
            if(configData.line) {
              $(element).append('<db-line dynamic-id=' + dynamicId + '></db-line>');
              needCompile = true;
            }
            if(configData.triangle) {
              $(element).append('<db-triangle dynamic-id=' + dynamicId + '></db-triangle>');
              needCompile = true;
            }

            if(needCompile) {
              $compile(element)(scope);
              $rootScope.$broadcast('SAVE_PROPOSAL_MARKUP');
            }
          }
        });

      $rootScope.imageinsert = function(imagepath){
        var dynamicId = new Date().getTime(); //Date.now();
         scope.imageSource = angular.copy(imagepath);
          $(element).append('<db-image dynamic-id=' + dynamicId + '></db-image>'); 
         // needCompile = true;

      };

    }
  };
});