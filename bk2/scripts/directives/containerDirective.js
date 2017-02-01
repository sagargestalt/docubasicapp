'use strict';

/**
 * @ngdoc directive
 * @name docubasic3App.directive:containerDirective
 * @description
 * # containerDirective
 */
angular.module('docubasic3App')
  .directive('containerDirective', function ($compile,$rootScope) {
    return {
      restrict: 'E',
      scope: {
      ssss: "=ngModel"
    },

    link: function check(scope,element)
   
  {
     $("#dbSqure").draggable({ revert: true, helper: "clone", containment: '#wrapper' });
      $( "#draggable" ).draggable({ revert: true, helper: "clone", containment: '#wrapper' });
      $(".window").draggable({handle:'.bar'});


      $(".textbox").on("click", function() {
        //$(".window").draggable('disable');
        $(this).find(".textbox").focus();

      });

    $(".textbox").on("blur", function(){
        $(".window").draggable('enable');


    });


      $('.db-circle-widget').draggable();


      $("#d")
          .draggable()
          .click(function(){
          if ( $(this).is('.ui-draggable-dragging') ) {
              return;
          }
          $(this).draggable( "option", "disabled", true );
          $(this).attr('contenteditable','true');
        })
        .blur(function(){
          $(this).draggable( 'option', 'disabled', false);
          $(this).attr('contenteditable','false');
      });






    $( "#dragThis" ).draggable();
    $( "#droppable" ).droppable({
        accept: "#draggable",
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

       
           $("#droppable").append($compile('<db-text dynamic-id=' + dynamicId + '></db-text>')(scope));
            //$compile(element)(scope);
            needCompile = true;



        $(".textbox").on("click", function() {
            //$(".window").draggable('disable');
            $(this).find(".textbox").focus();
             $rootScope.callme();

        });

        $(".textbox").on("blur", function(){
            $(".window").draggable('enable');




        });



    }
  });


  $( "#edit" ).draggable()
    .click(function(){
        if ( $(this).is('.ui-draggable-dragging') ) {
            return;
        }
        $(this).draggable( "option", "disabled", true );
       $(this).attr('contenteditable','true');
      })
      .blur(function(){
        $(this).draggable( 'option', 'disabled', false);
        $(this).attr('contenteditable','false');
      });

      $("#dgg")
        .draggable()
        .click(function(){
        if ( $(this).is('.ui-draggable-dragging') ) {
            return;
        }
        $(this).draggable( "option", "disabled", true );
       $(this).attr('contenteditable','true');
        })
      .blur(function(){
        $(this).draggable( 'option', 'disabled', false);
        $(this).attr('contenteditable','false');
      });




	}

  };




});
