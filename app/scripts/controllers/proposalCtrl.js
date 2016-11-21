'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('proposalCtrl', function ($scope, $rootScope,$timeout, localStorageService,praposalservice,$location,$uibModal,userservice,settingservice,sweetAlert,$sce,$compile,Fabric, FabricConstants) {
    
     
      $rootScope.tenancyid = localStorageService.get('tenancyid');
      $rootScope.userid = localStorageService.get('userid');
      $rootScope.isAdmin = localStorageService.get('isAdmin');
      $rootScope.username = localStorageService.get('username');
      $rootScope.proposal_id = localStorageService.get('proposal_id');
      $rootScope.template_id = localStorageService.get('template_id');
      $rootScope.templatename = localStorageService.get('templatename');

function init() {
     $scope.vUrl= "";
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


       var tabledata ={

        tenancy_id: $rootScope.tenancyid
       };
        praposalservice.getproposaltask.save((tabledata), function(data){
        //$scope.alerts=[];
        $scope.dblock = data.data.discountblock;
        $rootScope.tblock = data.data.taxblock;
        $scope.pblock = data.data.priceblock;
        $scope.alldata = data.data;
         
      });


}

      init();

      var imageids={
        tenancy_id:$rootScope.tenancyid,
         proposal_id: $rootScope.proposal_id, 

      };

       praposalservice.getiamage.save((imageids), function(data){
        //$scope.alerts=[];
        $scope.iamgedata= data.data.images;
         
      });

      $scope.closemodal = function(){
          $rootScope.modalInstance.close();

      };
      $scope.closebar = function(){
          $rootScope.rightSidebar = false;
          $rootScope.rightSidebar1 = false;

      };


      $scope.download = function(){
      
          //proposal_id: $rootScope.proposal_id;

   

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

      $scope.editaccess = function(collabusers){

        var data = {
          id:collabusers.id,
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

                    sweetAlert.swal("Deleted!", " Deleted successfully", "success");
                    $location.path( "/proposal-summery" );
                      } else {
                          sweetAlert.swal("Cancelled");
                      }
                  });

      };

      $rootScope.callme = function(){
       // $scope.videoSource = "https://www.youtube.com/embed/r4O4Xec60_k";
        var data = {

        template_id:$rootScope.template_id,
        page_id: $rootScope.pageid,
        proposal_id:$rootScope.proposal_id,
        content:$('#proposalDropContainer').html(),
        created_by:$rootScope.userid,
        video_url: $scope.vUrl,
        //video_url:"https://www.youtube.com/embed/r4O4Xec60_k",
        tenancy_id: $rootScope.tenancyid,
         pricetable_content:$rootScope.finalpricedata,
            taxtable_content:$rootScope.finaltaxdata,
            distable_content:$rootScope.finaldisdata,
             
        };

        praposalservice.savepage.save((data), function(data1){
        $scope.alerts=[];
        //$scope.pagedata= data1.data;
        //$scope.ssss = data1.data.page_contents;
         
      });




      };

      $scope.uploadimage = function(){
        $rootScope.modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'views/imageupload.html',
        controller: 'proposalCtrl',
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
        controller: 'proposalCtrl',
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
        controller: 'proposalCtrl',
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
           name: $rootScope.praposalname,

          };
          //$scope.pname = $rootScope.templatename;

          praposalservice.updatename.query((data), function(data1){
          $scope.alerts=[];
          if(data1.status === true){
            $scope.show = false;
            //$rootScope.praposalname = $scope.pname;

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

    $scope.sendpage = function(page,i){
     // $scope.htmlString = "";
      //$scope.ssss =  page.template_page_content;
        //$scope.htmlString = $sce.trustAsHtml(page.template_page_content);
     
           $scope.selected = true;

       $scope.selectedIndex=i;
        //$scope.ssss =  $('#proposalDropContainer').html();
      $rootScope.pageid = page.template_page_id;
        var data = {

          page_id:$rootScope.pageid,
          proposal_id:$rootScope.proposal_id,
        };
        $scope.demo = true;
         praposalservice.getpagecontent.save((data), function(data1){
          $scope.alerts=[];
          //$scope.ssss = data1.data.page_contents;
           //$scope.htmlString = $sce.trustAsHtml(data1.data.page_contents);
            // $scope.html = data1.data.proposal_page_contents;
               console.log($scope.html);
            var link = $compile(data1.data.proposal_page_contents);
            var compiledText = link($scope);
            console.log(compiledText);
            $('#proposalDropContainer').append(compiledText);
            //$scope.html = compiledText;   
            //$scope.demo = false;
            //$timeout(function() {
              // $scope.demo = true;
            //}, 5000);
            //$scope.contentdata = compiledText;


           //$rootScope.loaddata();
          //$scope.pagedata= data1.data;
           
        });



    };

    $scope.priweviemode = function(){

      $location.path( "/preview" );
    };


    $scope.submitpage = function(){
      var data = {

        template_id:$rootScope.template_id,
        page_id: $rootScope.pageid,
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
            $scope.vurl=[];
            var url = 'https://www.youtube.com/embed/r4O4Xec60_k';
            $scope.vurl.push(url);

            var data = {

            template_id:$rootScope.template_id,
            page_id: $rootScope.pageid,
            //page_id:2,
            proposal_id:$rootScope.proposal_id,
            content:$('#proposalDropContainer').html(),
            created_by:$rootScope.userid,
            //video_url: $scope.vUrl,
            video_url:$scope.vurl,
            tenancy_id: $rootScope.tenancyid,
           pricetable_content:"",
           taxtable_content:"",
           distable_content:"",
            //pricetable_content:$rootScope.finalpricedata,
            //taxtable_content:$rootScope.finaltaxdata,
            //distable_content:$rootScope.finaldisdata,
            //customer_price:$rootScope.customerval
            };

              praposalservice.savepage.save((data), function(data1){
              $scope.alerts=[];
              //$scope.pagedata= data1.data;
              $scope.ssss = data1.data.page_contents;
               
            });

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
              
              $scope.iamge= data.data;
         
            });

        };



          
         $rootScope.pushdata = function(detail){
           $rootScope.finalpricedata = [];
          $scope.newprice=[];
          var pricedata = detail;
          //console.log(info);
          $scope.newprice.push(pricedata);
          console.log($scope.pblock);
          //$rootScope.finalpricedata.push($scope.customerprice);
          $rootScope.finalpricedata.push(pricedata);
          //appendtax={};

         };

          $rootScope.pushtaxdata = function(detail){
            $rootScope.finaltaxdata=[];
          $scope.newtax=[];
          var appendtax = detail;
          //console.log(info);
          $scope.newtax.push(appendtax);
           
          console.log($scope.pblock);
          $rootScope.finaltaxdata.push(appendtax);
          //appendtax={};

         };

         $rootScope.pushdisdata = function(detail){
          $rootScope.finaldisdata = [];
          $scope.newdis=[];
          var appenddis = detail;
          //console.log(info);
          $scope.newdis.push(appenddis);
          console.log($scope.pblock);
           $rootScope.finaldisdata.push(appenddis);
          //appendtax={};
          console.log($rootScope.finaldata);
         };

         $rootScope.catchcustomerprice = function(txt){
          $rootScope.customerval=[];

          $rootScope.customerval.push(txt);

         };
         $rootScope.pushtask = function(tasklist){
           $rootScope.finaltask = [];
         // $scope.newprice=[];
          var taskdata = tasklist;
          console.log(taskdata);
          //$scope.newprice.push(pricedata);
          //console.log($scope.pblock);
          //$rootScope.finalpricedata.push($scope.customerprice);
          $rootScope.finaltask.push(taskdata);
          //appendtax={};

         };

          $scope.dynamicPopover = {
              content: 'hhh',
              templateUrl: 'views/myPopoverTemplate.html',
              title: 'Title'
            };
$scope.color = '#FF0000';

            $scope.options = {
    
    format:'hex',
  
};


            
  });
