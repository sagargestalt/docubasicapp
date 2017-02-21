'use strict';

/**
 * @ngdoc directive
 * @name docubasic3App.directive:containerDirective
 * @description
 * # containerDirective
 */
angular.module('docubasic3App')
  .directive('containerDirective', function ($compile,$rootScope,Fabric, FabricConstants,FabricWindow) {
    return {
      restrict: 'E',
      scope: {
      ssss: "=ngModel",
      insertText: '&'
    },

    link: function check(scope,element)
   
  {
    

      $( "#dragThis" ).draggable();
      $( "#droppable" ).droppable({
         accept: '.ui-draggable',
        drop: function(event , ui) {
          //scope.mockContent = scope.mockContent || {};

            var configData = $(ui.draggable[0]).data();
            console.log(configData);
            var needCompile = false;
            var dynamicId = new Date().getTime(); //Date.now();
         ui.draggable.draggable('option', 'revert', function(){return false;});
        

          /* var textBox = document.createElement("div");
          document.getElementById("droppable").appendChild(textBox);
          $("#droppable").append('<div  id="dgg"  class="draggable ui-widget-content      ui-draggable"><p>drag me</p></div>');
           $('.draggable').draggable();

              var htmlData='<div  class="draggable ui-widget-content      ui-draggable" id="edit" >Drag me around</div>';
              $('#droppable').append(htmlData);

             $( ".draggable" ).draggable();*/

              if(configData.text) {
             //$rootScope.addtextbox();
             scope.insertText({
              shapeType: 'text'
             });
            }

            if(configData.circle) {
              scope.insertText({
              shapeType: 'circle'
             });
             //$rootScope.addcircle();

            }

            if(configData.square) {
               scope.insertText({
              shapeType: 'squre'
             });
            }

            if(configData.line) {
              scope.insertText({
              shapeType: 'line'
             });
            }

            if(configData.triangle) {
              scope.insertText({
              shapeType: 'triangle'
             });
              
            }


             if(configData.image) {
               $rootScope.rightSidebar3 = false;
              var imagepath = configData.image.image_path;
              //var dynamicId = new Date().getTime(); //Date.now();
              $rootScope.addImageUpload(imagepath);
             
              //$(element).append('<db-image dynamic-id=' + dynamicId + '></db-image>');
               scope.imageSource = angular.copy(imagepath); 
                  //needCompile = true;
                }

                if(configData.video) {
             $rootScope.videoadd();
            }

       



       

       


    }
  });


 
      
     




	}

  };




});
