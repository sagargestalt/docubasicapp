'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:createpraposalCtrl
 * @description
 * # createpraposalCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('createpraposalCtrl', function ($scope,$location, $rootScope,localStorageService,praposalservice,userservice,pageservice,settingservice) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
     $rootScope.tenancyid = localStorageService.get('tenancyid');
  $rootScope.userid = localStorageService.get('userid');
   $rootScope.isAdmin = localStorageService.get('isAdmin');
    $rootScope.username = localStorageService.get('username');

      var tid = {
       tenancy_id:$rootScope.tenancyid 
}

 praposalservice.getpagedata.save((tid), function(data){
 $scope.alerts=[];
        $scope.pdata= data.data[0].PageContent;
         
    });

 var data =  {id:$rootScope.tenancyid }
    userservice.getuserdetail.query((data), function(data1){
   
        $scope.userdata = data1.data;
         

    });

    var id = {
       tenancy_id:$rootScope.tenancyid 
        };

 pageservice.gettempdata.save((id), function(data){
 $scope.alerts=[];
        $scope.templates= data.data;
         
    });

  var getclint  = {

        tenancy_id:$rootScope.tenancyid
      };

    settingservice.getclient.save((getclint), function(data){

          $scope.clients = data.data;

      });





    $scope.submitpage = function(){
      var data={

        tenancy_id:$rootScope.tenancyid,
        page_name:"main",
        created_by:$rootScope.userid,
        page_content:$scope.ssss,
      }
      praposalservice.pagedata.save((data),function(){

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
$( "#draggable" ).draggable({ revert: true, helper: "clone", containment: '#wrapper' });
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

    $scope.selecttemp = function(temp){

        $rootScope.templateid = temp.template.id;
        $rootScope.templatename = temp.template.template_name;
        $scope.selected = true;

    };


    $scope.submit = function(){
      var data = {
        name:$scope.praposalname,
        tenancy_id:$rootScope.tenancyid,
        user_id:$rootScope.userid,
        customer_id:$scope.cname,
        collaborators:$scope.coname,
        template_id: $rootScope.templateid,
        delivery_date:$scope.myDate,
        created_by:$rootScope.userid,
        orientation:1,


      };

       praposalservice.createpraposal.save((data), function(data1){
 $scope.alerts=[];
        $scope.templates= data1.data;

        if(data1.status == true){

        $rootScope.template_id = $scope.templates.template_id;
        $rootScope.proposal_id = $scope.templates.proposal_id;



            $location.path( "/praposal" );


        }
         
    });


    };

     $scope.$watch('template_id', function () {
      localStorageService.set('template_id',$rootScope.template_id);
     // localStorageService.set('userid',$rootScope.userid);
    }, true);

     $scope.$watch('proposal_id', function () {
      localStorageService.set('proposal_id',$rootScope.proposal_id);
     // localStorageService.set('userid',$rootScope.userid);
    }, true);

     $scope.$watch('templatename', function () {
      localStorageService.set('templatename',$rootScope.templatename);
     // localStorageService.set('userid',$rootScope.userid);
    }, true);



  });
