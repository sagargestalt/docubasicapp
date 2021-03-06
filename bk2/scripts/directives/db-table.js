'use strict';
angular.module('docubasic3App')
  .directive('dbTable', function ($rootScope) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/db-table.html',
      link: function(scope, element, attr) {
         scope.toggleShowHide = false;
        $(element).attr('id', 'db-table-' + attr.dynamicId);
        $(element).draggable({containment: '#proposalDropContainer'});

        // $(element).find('.editable-area').attr('ng-model', "mockContent[" + attr.dynamicId + "]");
        $(element).find('.editable-area').on('click', function() {
          $(this).focus();
          $rootScope.callme();
        });
         $(element).on('click', function() {
          scope.toggleShowHide = !scope.toggleShowHide;
         });

         /*scope.toggleShowHideConfig = function() {
          scope.toggleShowHide = !scope.toggleShowHide;
        };*/
        scope.removetable = function(){
           $rootScope.callme();
          $(element).remove();

        };
        scope.addcolumn = function(){
           $rootScope.callme();
          
          $('#thistable').find('th').last().before('<th></th>');
          $('table').find('tr').each(function () {
            $(this).find('td').eq(0).after('<td><p contenteditable="true"  class="editable-area"></td>');
          });
        };
         scope.addrow = function(){
           $rootScope.callme();
            var prot = $('#thistable').find(".prototype").clone();
            prot.attr("class", "");
           // prot.find(".id").attr("value", id);
            $('#thistable').find("tbody").append(prot);
          };

          scope.removerow = function(){
             $rootScope.callme();
             $('#thistable').find("tbody").last("tr").remove();

          };
           $(element).draggable({
      start: function() {
       $rootScope.callme();
      },
      drag: function() {
        $rootScope.callme();
      },
      stop: function() {
        $rootScope.callme();
       
      }
    });
      }
    };
  });