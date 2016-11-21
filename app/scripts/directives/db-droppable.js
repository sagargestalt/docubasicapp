'use strict';
angular.module('docubasic3App')
  .directive('dbDroppable', function ($compile, $rootScope) {
    return {
      restrict: 'AE',
      link: function(scope, element) {
        $rootScope.loaddata = function(){
           $(".db-square-widget").draggable({containment: "#proposalDropContainer"});
         $('.db-circle-widget').draggable({containment: '#proposalDropContainer'});

        };

       
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

            if(configData.table) {
              $(element).append('<db-table dynamic-id=' + dynamicId + '></db-table>');
              needCompile = true;
            }
            if(configData.tasktable) {
               $(element).append('<db-pricetable dynamic-id=' + dynamicId + '></db-pricetable>');
                var detail = configData.tasktable;
                $rootScope.pushdata(detail);
               //$(ui.draggable).clone().appendTo($(this));  
               //$(this).append(ui.helper.children());
                //$('.selectedRow').remove();
                $rootScope.rightSidebar = false;
                needCompile = true;
            }
             if(configData.taskrow) {
              //$(ui.draggable).clone().appendTo('#ttable');  
              var detail = configData.taskrow;
              $rootScope.droptax = true;
              $rootScope.pushtaxdata(detail);
             
              //$(this).append(ui.helper.children());
              //$(this).appendTo(ui.helper.children('#ttable'));
              //$('.selectedRow').remove();
              $rootScope.rightSidebar = false;
              needCompile = true;
            }
            if(configData.dtask) {
              //$(ui.draggable).clone().appendTo('#ttable'); 
              //$(this).append(ui.helper.children());
              var detail = configData.dtask;
              $rootScope.droptdiscount = true;
              $rootScope.pushdisdata(detail);
              $rootScope.rightSidebar = false;
              needCompile = true;
            }
            if(configData.taskcategories) {
               $(element).append('<db-takstable dynamic-id=' + dynamicId + '></db-tasktable>');
                var tasklist = configData.taskcategories;
                $rootScope.pushtask(tasklist);
               //$(ui.draggable).clone().appendTo($(this));  
               //$(this).append(ui.helper.children());
                //$('.selectedRow').remove();
                $rootScope.rightSidebar1 = false;
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
          $compile(element)(scope);

      };

    }
  };
});