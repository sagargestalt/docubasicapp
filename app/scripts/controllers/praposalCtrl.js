'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('praposalCtrl', function ($scope, $rootScope,localStorageService,praposalservice,$location,$uibModal,userservice,settingservice,sweetAlert,$sce) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
     $(".db-square-widget").draggable({containment: "#proposalDropContainer"});
      $rootScope.tenancyid = localStorageService.get('tenancyid');
      $rootScope.userid = localStorageService.get('userid');
      $rootScope.isAdmin = localStorageService.get('isAdmin');
      $rootScope.username = localStorageService.get('username');
      $rootScope.proposal_id = localStorageService.get('proposal_id');
      $rootScope.template_id = localStorageService.get('template_id');
      $rootScope.templatename = localStorageService.get('templatename');

function init() {
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

      var collab = {
        proposal_id: $rootScope.proposal_id,
        tenancy_id: $rootScope.tenancyid

        };

        praposalservice.getcollabraters.save((collab), function(data){
        $scope.alerts=[];
        $scope.collabdata= data.data;

      });

        var data2 =  {id:$rootScope.tenancyid };
    userservice.getuserdetail.query((data2), function(data1){

        $scope.userdata = data1.data;


    });

    var getclint  = {

        tenancy_id:$rootScope.tenancyid
      };

    settingservice.getclient.save((getclint), function(data){

          $scope.clients = data.data;

      });

      }

      init();

       praposalservice.getiamage.get({}, function(data){
        //$scope.alerts=[];
        $scope.iamgedata= data.data;

      });

      $scope.closemodal = function(){
          console.log("hi");
          $rootScope.modalInstance.close();

        };


      $scope.download = function(){

          // proposal_id: $rootScope.proposal_id;



         /* praposalservice.downloadpraposal.save((data), function(data){
          $scope.alerts=[];
        //$scope.pagedata= data.data;

          });*/
    // proposal_id:'@proposal_id'
          var url = 'http://49.248.126.222:8282/services/public/api/v1/downloadProposalpdf/';
          url = url + $rootScope.proposal_id;
            var aEl = document.createElement('a');
        aEl.href = url;
        aEl.click();




      };

      $scope.readaccess = function(country){

        var data = {
          id:country.id,
          status:2,
          updated_by : $rootScope.userid


        };

        praposalservice.readaccessapply.save((data), function(data){
          $scope.alerts=[];

          if(data.status === true){

            init();


          }


          });




      };

      $scope.editaccess = function(collabusers){

        var data = {
          id:collabusers.id,
          status:1,
          updated_by : $rootScope.userid


        };

        praposalservice.readaccessapply.save((data), function(data){
          $scope.alerts=[];

          if(data.status === true){

            init();


          }

          });




      };




      $scope.deletepraposal = function(){

        sweetAlert.swal({
                title: "Are you sure want to delete?",
               //text: "Your will not be able to reco",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: false,
                closeOnCancel: false },
            function (isConfirm) {
                if (isConfirm) {
        var data = {
          tenancy_id:$rootScope.tenancyid,
          updated_by:$rootScope.userid,
          proposal_id:$rootScope.proposal_id,


        };

         praposalservice.deletepraposal.save((data), function(){
          $scope.alerts=[];


          });

          sweetAlert.swal("Deleted!", "Task category Deleted successfully", "success");
                } else {
                    sweetAlert.swal("Cancelled");
                }
            });

      };

      $rootScope.callme = function(){
        var data = {

        template_id:$rootScope.template_id,
        page_id: $scope.pageid,
        proposal_id:$rootScope.proposal_id,
        content:$('#proposalDropContainer').html(),
        created_by:$rootScope.userid,
        video_url:"https://www.youtube.com/embed/r4O4Xec60_k",
        tenancy_id: $rootScope.tenancyid,
        };

        praposalservice.savepage.save((data), function(data1){
        $scope.alerts=[];
        //$scope.pagedata= data1.data;
        $scope.ssss = data1.data.page_contents;

      });




      };

      $scope.uploadimage = function(){
        $rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/imageupload.html',
      controller: 'praposalCtrl',
      //windowClass: 'modal-lg',
      //size: size,
      resolve: {

      }
      });


      };



      $scope.emailwindow = function(){
        $rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/email.html',
      controller: 'praposalCtrl',
      windowClass: 'modal-lg',
      //size: size,
      resolve: {

      }
      });


      };


      $scope.opencollab = function(){
        $rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/collabraters.html',
      controller: 'praposalCtrl',
      windowClass: 'modal-lg',
      //size: size,
      resolve: {

      }
      });



        var collab = {
        proposal_id: $rootScope.proposal_id,
        tenancy_id: $rootScope.tenancyid

        };

        praposalservice.getcollabraters.save((collab), function(data){
        $scope.alerts=[];
        $scope.collabdata= data.data;

      });


      };

       $scope.clonepraposal = function(){
        $rootScope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/clone.html',
      controller: 'cloneCtrl',
      windowClass: 'modal-lg',
      //size: size,
      resolve: {

      }
      });






      };


    $scope.send = function(){

      var data = {
         proposal_id:$rootScope.proposal_id,
          updated_by:$rootScope.userid,
          to:$scope.toemail,
          cc:$scope.cc,
          bcc:$scope.bcc,
          message:$scope.summernoteTextTwo,


        };

        praposalservice.sendmail.save((data), function(data){
          $scope.alerts=[];

          if(data.status === true){
             $scope.alerts.push({msg: 'Email Sended successfully', type:'success'});
             $rootScope.modalInstance.close();


          } else{

            $scope.alerts.push({msg: 'Email Sending Failed', type:'denger'});

          }


          });





      };

      $scope.sharecollab = function(){

      var data = {
         proposal_id:$rootScope.proposal_id,
          updated_by:$rootScope.userid,
          to:$scope.toemail,
          cc:$scope.cc,
          bcc:$scope.bcc,
          message:$scope.summernoteTextTwo,


        };

        praposalservice.sendmail.save((data), function(){
          $scope.alerts=[];


          });





      };





      $scope.submitname = function(){

        var data = {
          tenancy_id:$rootScope.tenancyid,
           updated_by:$rootScope.userid,
           id:$rootScope.proposal_id,
           name:$scope.pname,

          };
          //$scope.pname = $rootScope.templatename;

          praposalservice.updatename.query((data), function(data1){
          $scope.alerts=[];
          if(data1.status === true){
            $scope.show = false;
            $rootScope.praposalname = $scope.pname;

          }


          });





      };





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
        $scope.htmlString = $sce.trustAsHtml(page.template_page_content);
        console.log($scope.htmlString);
        //$scope.ssss =  $('#proposalDropContainer').html();
      $scope.pageid = page.template_page_id;
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

        praposalservice.savepage.save((data), function(){
        $scope.alerts=[];
        //$scope.pagedata= data1.data;

      });



    };


    /* var container = $(document.createElement('div')).css({

                padding: '5px', margin: '20px' , width: '170px', border: '1px dashed',

                borderTopColor: '#999', borderBottomColor: '#999',
                borderleftColor: '#999', borderRightColor: '#999'});
        container.id="droppable";
        container.className="backdrop";

        $scope.myCallback = function(event, ui){
        console.log('Dropped into something');
        $scope.droped = true;
      };

        /*$( ".draggable" ).draggable();
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
            });*/

           $scope.$watch('templatename', function () {
            localStorageService.set('templatename',$rootScope.templatename);
              // localStorageService.set('userid',$rootScope.userid);
            }, true);

           $rootScope.$on('SAVE_PROPOSAL_MARKUP', function() {
        console.log($('#proposalDropContainer').html());

      });


      $scope.imageupload = function(){
        var data = {
             template_id:$rootScope.template_id,
              page_id: 2,
              proposal_id:$rootScope.proposal_id,
              image_raw:$scope.files[0].base64,
               tenancy_id:$rootScope.tenancyid,
               created_by:$rootScope.userid,
           };

            praposalservice.upiamage.save((data), function(data){
              //$scope.alerts=[];
              $rootScope.imageinsert();
              $scope.iamge= data.data;

            });

        };



  });
