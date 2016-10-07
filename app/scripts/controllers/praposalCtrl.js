'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('praposalCtrl', function ($scope, $rootScope,localStorageService,praposalservice,$location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
     $rootScope.tenancyid = localStorageService.get('tenancyid');
  $rootScope.userid = localStorageService.get('userid');
   $rootScope.isAdmin = localStorageService.get('isAdmin');
    $rootScope.username = localStorageService.get('username');
    $rootScope.proposal_id = localStorageService.get('proposal_id');
     $rootScope.template_id = localStorageService.get('template_id');
      $rootScope.templatename = localStorageService.get('templatename');


      var tid = {
       tenancy_id:$rootScope.tenancyid 
};

 praposalservice.getpagedata.save((tid), function(data){
 $scope.alerts=[];
        $scope.pdata= data.data[0].PageContent;
         
    });

 var data = {

  template_id:$rootScope.template_id,
  tenancy_id: $rootScope.tenancyid,
  proposal_id:$rootScope.proposal_id,
 };

 praposalservice.getpagelist.save((data), function(data){
 $scope.alerts=[];
        $scope.pagedata= data.data;
         
    });
 




    /*$scope.submitpage = function(){
      var data={

        tenancy_id:$rootScope.tenancyid,
        page_name:"main",
        created_by:$rootScope.userid,
        page_content:$scope.ssss,
      }
      praposalservice.pagedata.save((data),function(){

    }); 
     
    };*/

    $scope.sendpage = function(page){
     $scope.ssss =  page.template_page_content;
     $scope.pageid = page.template_page_id



    };

    $scope.priweviemode = function(){

      $location.path( "/preview" );
    };


    $scope.submitpage = function(){
      var data = {

        template_id:$rootScope.template_id,
        page_id: $scope.pageid,
        proposal_id:$rootScope.proposal_id,
        content:$scope.ssss,
        created_by:$rootScope.userid,
      };

      praposalservice.savepage.save((data), function(data1){
        $scope.alerts=[];
        //$scope.pagedata= data1.data;
         
    });



    };


     var container = $(document.createElement('div')).css({

                padding: '5px', margin: '20px' , width: '170px', border: '1px dashed',

                borderTopColor: '#999', borderBottomColor: '#999',
                borderleftColor: '#999', borderRightColor: '#999'});
     container.id="droppable";
     container.className="backdrop";

    $scope.myCallback = function(event, ui){
    console.log('Dropped into something');
    $scope.droped = true;
};
$( ".draggable" ).draggable();
//$( "#draggable" ).draggable({ revert: true, helper: "clone", containment: '#wrapper' });
$( "#dragThis" ).draggable();




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

  });
