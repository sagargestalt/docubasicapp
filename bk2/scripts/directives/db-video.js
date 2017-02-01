'use strict';
angular.module('docubasic3App')
  .directive('dbVideo', function ($sce) {
    return {
      restrict: 'E',
      replace: true,
      scope: {},
      templateUrl: 'views/db-video.html',
      link: function(scope, element, attr) {
        scope.toggleShowHide = false;
        $(element).draggable({containment: '#proposalDropContainer'});
        $(element).attr('id', 'db-video-' + attr.dynamicId);

        $(element).find('.editable-area').attr('ng-model', 'mockContent[' +attr.dynamicId+ ']');
        $(element).find('.editable-area').on('click', function() {
          $(this).focus();
        });

        scope.submitUrl = function() {
          scope.videoSource = angular.copy(scope.videoUrl);
          scope.vUrl = angular.copy(scope.videoUrl);
          scope.toggleShowHide = false;
        };

        scope.trustSrc = function(src) {
          return $sce.trustAsResourceUrl(src);
        };

        scope.toggleShowHideConfig = function() {
          scope.toggleShowHide = !scope.toggleShowHide;
        };
         scope.delete = function() {
           $(element).remove();  
        };
      }
    };
  });
