'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:praposalsummeryCtrl
 * @description
 * # praposalsummeryCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('commentCtrl', function ($scope, $rootScope,localStorageService,praposalservice,$location,$uibModal,sweetAlert,settingservice,$route) {
 		
  		  $rootScope.tenancyid = localStorageService.get('tenancyid');
	      $rootScope.userid = localStorageService.get('userid');
	      $rootScope.isAdmin = localStorageService.get('isAdmin');
	      $rootScope.username = localStorageService.get('username');
	      $rootScope.proposal_id = localStorageService.get('proposal_id');
	      $rootScope.template_id = localStorageService.get('template_id');
      	  $rootScope.templatename = localStorageService.get('templatename');


      	  
      	  function init() {
      	   var cmntdata = {
        proposal_id: $rootScope.proposal_id,
        tenancy_id: $rootScope.tenancyid,
        page_id:$rootScope.pageid

        };

        praposalservice.getcomments.save((cmntdata), function(data){
        //$scope.alerts=[];
        $scope.commentsdata= data.data;
         
      });
	}
	init();



      	  	 $scope.comment = [];
                $scope.btn_add = function() {
                    
                   var data =  { 
                     proposal_id: $rootScope.proposal_id,
                       page_id:$rootScope.pageid,
                      tenancy_id: $rootScope.tenancyid,
                      created_by: $rootScope.userid,
                    comment:$scope.txtcomment
                    };
                      praposalservice.postcomment.save((data), function(data){
                        if(data.status == true){
                          $scope.txtcomment = "";
                          init();
                        }

                        });

                };

      $scope.deletecmt = function(comnt){
        
        var data ={
        id:comnt.commentId
      };

      praposalservice.removecomment.query((data), function(data){
                        if(data.status == true){

                          init();
                        }

                        });

      };

      $scope.editcmt = function(comnt){
        console.log(comnt);
        $scope.cupdate = true;
        $scope.txtcomment = comnt.comment;
        $scope.cmtid = comnt.commentId;
        }; 
          $scope.btn_update = function(){

        var data = {

           proposal_id: $rootScope.proposal_id,
             page_id:$rootScope.pageid,
                      tenancy_id: $rootScope.tenancyid,
                      updated_by: $rootScope.userid,
                      id:$scope.cmtid,
                      comment:$scope.txtcomment



        };

         praposalservice.editcomment.query((data), function(data){
                        if(data.status == true){
                           $scope.cupdate = false;
                           $scope.txtcomment = "";

                          init();
                        }

                        });


      };






  	 });
