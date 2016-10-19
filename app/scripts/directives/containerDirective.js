'use strict';

/**
 * @ngdoc directive
 * @name docubasic3App.directive:containerDirective
 * @description
 * # containerDirective
 */
angular.module('docubasic3App')
  .directive('containerDirective', function ($rootScope) {
    return {
      restrict: 'E',
      scope: {
      ssss: "=ngModel"
    },

    link: function check()
  {
      $( "#draggable" ).draggable({ revert: true, helper: "clone", containment: '#wrapper' });
      $(".window").draggable({handle:'.bar'});


      $(".textbox").on("click", function() {
        //$(".window").draggable('disable');
        $(this).find(".textbox").focus();

      });

    $(".textbox").on("blur", function(){
        $(".window").draggable('enable');


    });


      $('.draggable').draggable();


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

         ui.draggable.draggable('option', 'revert', function(){return false;});
          /* var textBox = document.createElement("div");
          document.getElementById("droppable").appendChild(textBox);
          $("#droppable").append('<div  id="dgg"  class="draggable ui-widget-content      ui-draggable"><p>drag me</p></div>');
           $('.draggable').draggable();

              var htmlData='<div  class="draggable ui-widget-content      ui-draggable" id="edit" >Drag me around</div>';
              $('#droppable').append(htmlData);
             $( ".draggable" ).draggable();*/

          $("#droppable").append('<div class=window><div class=bar>Text Block</div><p contentEditable=true class=textbox  >Type text</p> </div>');
          $(".window").draggable({handle:'.bar'});



        $(".editable-area").on("click", function() {
            //$(".window").draggable('disable');
            $(this).find(".editable-area").focus();
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
