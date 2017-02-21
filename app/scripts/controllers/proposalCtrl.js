'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('proposalCtrl', function ($scope, $rootScope,$window, $timeout, localStorageService,praposalservice,$location,$uibModal,userservice,settingservice,sweetAlert,$sce,$compile,styleservice,Fabric,FabricConstants,Keypress,pageservice) {
    
     //$rootScope.pageid = "";
      $rootScope.tenancyid = localStorageService.get('tenancyid');
      $rootScope.userid = localStorageService.get('userid');
      $rootScope.isAdmin = localStorageService.get('isAdmin');
      $rootScope.username = localStorageService.get('username');
      $rootScope.proposal_id = localStorageService.get('proposal_id');
      $rootScope.template_id = localStorageService.get('template_id');
      $rootScope.templatename = localStorageService.get('templatename');
      $rootScope.client_email = localStorageService.get('client_email');
      $rootScope.isLogin = localStorageService.get('isLogin');
         $rootScope.version_id = localStorageService.get('version_id');
          $rootScope.profilepath = localStorageService.get('profilepath');
           $rootScope.praposalname = localStorageService.get('praposalname');
             $rootScope.pageid = localStorageService.get('pageid');
             $rootScope.company_logo = localStorageService.get('company_logo');
               $rootScope.rightSidebar1 = false;
        $rootScope.rightSidebar2 = false;
        $rootScope.rightSidebar3 = false;
         $rootScope.rightSidebar = false;

             /*var pricingArr = null;
              localStorageService.set('pricingArr',pricingArr);
              var taxArr = null;
              localStorageService.set('taxArr',taxArr);
              var discountArr = null;
               localStorageService.set('discountArr',discountArr);*/


        
        if(!$rootScope.isLogin) {
            //$location.path( "/login" );
            return false;
        }


         $scope.update = false;
          $scope.toemail = $rootScope.client_email; 
            $rootScope.finalpricedata = [];
            $rootScope.finaltaxdata =[];
            $rootScope.finaldisdata = [];

            $scope.addprice = function(){
              $rootScope.addpriceblock = true;
               $scope.dynamicPopover = false;
                $scope.myPopover.isOpen = false;

            };
             $scope.addtax = function(){
          $rootScope.addtaxblock = true;
        };

        $scope.adddiscount = function(){
          $rootScope.adddiscountblock = true;
        };
              $scope.closeprice = function(){
          $scope.addpriceblock = false;
         

        };
        

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
         version_id:$rootScope.version_id

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
   
        $scope.userdata = data1.data.users;
         

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

        var tid = {
             tenancy_id:$rootScope.tenancyid 
          };

       styleservice.getstyledata.save((tid), function(data){
       $scope.alerts=[];
              $scope.sdata= data.data;
               
          });

        var imageids={
        tenancy_id:$rootScope.tenancyid,
         proposal_id: $rootScope.proposal_id, 

      };

       praposalservice.getiamage.save((imageids), function(data){
        //$scope.alerts=[];
        $scope.iamgedata= data.data.images;
         
      });

       var cmntdata = {
        proposal_id: $rootScope.proposal_id,
        tenancy_id: $rootScope.tenancyid,
        page_id:$rootScope.pageid

        };

        praposalservice.getcomments.save((cmntdata), function(data){
        //$scope.alerts=[];
        $scope.commentsdata= data.data;
         
      });

        var tid = {
       tenancy_id:$rootScope.tenancyid 
        };

         pageservice.getpagedata.save((tid), function(data){
         $scope.alerts=[];
                $scope.pdata= data.data;

                     
                       
                 
            });



}

      init();

     

      $scope.closemodal = function(){
          $rootScope.modalInstance.close();

      };
      $scope.closebar = function(){
          $rootScope.rightSidebar = false;
          $rootScope.rightSidebar1 = false;
           $rootScope.rightSidebar2 = false;
           $rootScope.rightSidebar3 = false;
            $rootScope.rightSidebar4 = false;           
           //$rootScope.modalInstance.close();


      };


      $scope.download = function(){
      
          //proposal_id: $rootScope.proposal_id;

   

         /* praposalservice.downloadpraposal.save((data), function(data){
          $scope.alerts=[];
        //$scope.pagedata= data.data;
         
          });*/ 
          // proposal_id:'@proposal_id'
          var url = 'http://107.170.59.79/services/public/api/v1/downloadNewProposalpdf/';
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


      $scope.deletepage = function(pagecnt){
         $rootScope.pageid = pagecnt.template_page_id;
         var data = {
            id: $rootScope.pageid,
            proposal_id:$rootScope.proposal_id,
            updated_by:$rootScope.userid

         };

         praposalservice.deletepage.query((data), function(responce){
                    $scope.alerts=[];

                    if(responce.status == true){
                        $scope.alerts.push({msg: 'Page deleted successfully', type:'success'});

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
        $scope.loading = true;
          var imgdata = $scope.fabric.getCanvasBlob();
          var data = $scope.fabric.getJSON();
       // $scope.videoSource = "https://www.youtube.com/embed/r4O4Xec60_k";
        var data = {
          image_content:imgdata,
        template_id:$rootScope.template_id,
        page_id: $rootScope.pageid,

        proposal_id:$rootScope.proposal_id,
        content:data,
        created_by:$rootScope.userid,
        video_url: $scope.vUrl,
        //video_url:"https://www.youtube.com/embed/r4O4Xec60_k",
        tenancy_id: $rootScope.tenancyid,
         pricetable_content:$rootScope.finalpricedata,
            taxtable_content:$rootScope.finaltaxdata,
            distable_content:$rootScope.finaldisdata,
            version_id:$rootScope.version_id, 

             
        };

        praposalservice.savecanvas.save((data), function(data1){
        if (data1.status == true){
          $rootScope.totalprice = data1.data.after_tax_total;
          $scope.loading = false;
        }
        $scope.alerts=[];
        //$scope.pagedata= data1.data;
        //$scope.ssss = data1.data.page_contents;
         
      });




      };

      $scope.openimageslider = function(){
         $scope.isOpen1 = false;
           $scope.isOpen = false; 
        $rootScope.rightSidebar3 = true;

      };

      $scope.uploadimage = function(){
         $scope.isOpen1 = false; 
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
        $scope.isOpen1 = false;
           $scope.isOpen = false; 
        $rootScope.modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'views/email.html',
        controller: 'proposalCtrl',
        windowClass: 'modal-lg ',
        //size: size,
        resolve: {
          
        }
        });


      };


      $scope.opencollab = function(){
         $scope.isOpen1 = false;
           $scope.isOpen = false; 
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
         $scope.isOpen1 = false;
           $scope.isOpen = false; 
        $rootScope.modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'views/clone.html',
        controller: 'cloneCtrl',
        windowClass: 'modal-lg ',
        //size: size,
        });
      };


     $scope.send = function(){
      if(!$scope.cc){
       $scope.cc = ""; 
      }
      if(!$scope.bcc){
        $scope.bcc="";
      }

      var data = {
         proposal_id:$rootScope.proposal_id,
          updated_by:$rootScope.userid,
          to:$scope.toemail,
          cc:$scope.cc,
          bcc:$scope.bcc,
          message:$scope.summernoteTextTwo,
          subject:$scope.subject,
           version_id:$rootScope.version_id


        };

        praposalservice.sendmail.save((data), function(data){
          $scope.alerts=[];

          if(data.status === true){
             $scope.alerts.push({msg: 'Email sent successfully', type:'success'});
             $scope.toemail = "";
             
             $rootScope.modalInstance.close();


          } else{

            $scope.alerts.push({msg: 'Email Sending Failed', type:'danger'});

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


 $scope.closeAlerts = function(index) {
       $scope.alerts.splice(1, index);
       $scope.alerts = [];
   };

   $scope.closeAlert = function(index) {
       $scope.errors.splice(1, index);
       $scope.errors = [];
   };


      $scope.submitname = function(){

        var data = {
          tenancy_id:$rootScope.tenancyid,
           updated_by:$rootScope.userid,
           id:$rootScope.proposal_id,
           name: $scope.praposalname,

          };
          localStorageService.set('praposalname',$rootScope.praposalname);
          //$scope.pname = $rootScope.templatename;

          praposalservice.updatename.query((data), function(data1){
          $scope.alerts=[];
          if(data1.status === true){
            $scope.show = false;
            //$rootScope.praposalname = $scope.pname;

          }
      
         
          });
      };
 

 $scope.isOpen = false; 
      
     // $scope.htmlString = "";
      //$scope.ssss =  page.template_page_content;
        //$scope.htmlString = $sce.trustAsHtml(page.template_page_content);
     
           $scope.selected = true;

       $scope.selectedIndex=0;
      
       //$("#proposalDropContainer").empty();
        //$scope.ssss =  $('#proposalDropContainer').html();
      $rootScope.pageid = 1;
        localStorageService.set('pageid',$rootScope.pageid);
        var data = {

          page_id:$rootScope.pageid,
          proposal_id:$rootScope.proposal_id,
        };
        $scope.demo = true;
         praposalservice.getpagecontent.save((data), function(data1){
          $scope.alerts=[];
          //$scope.ssss = data1.data.page_contents;
           //$scope.htmlString = $sce.trustAsHtml(data1.data.page_contents);
             //$scope.htmlString = data1.data.proposal_page_contents;
               //console.log($scope.html);

            //var link = $compile(data1.data.proposal_page_contents);
             //console.log(link);
           // var compiledText = link($scope);
            //console.log(compiledText);
            //$('#proposalDropContainer').append(compiledText);
            //$scope.html = compiledText;   
            //$scope.demo = false;
            //$timeout(function() {
              // $scope.demo = true;
            //}, 5000);
            //$scope.contentdata = compiledText;
            var pagedata = data1.data.proposal_page_contents;
            //console.log(pagedata);
            $scope.fabric.loadJSON(pagedata);


           //$rootScope.loaddata();
          //$scope.pagedata= data1.data;
           
        });

          var cmntdata = {
        proposal_id: $rootScope.proposal_id,
        tenancy_id: $rootScope.tenancyid,
        page_id:$rootScope.pageid

        };

        praposalservice.getcomments.save((cmntdata), function(data){
        //$scope.alerts=[];
        $scope.commentsdata= data.data;
         
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

    $scope.sendpage = function(page,i){
      // $rootScope.callme();
      $scope.isOpen = false;
      $scope.isOpen1 = false; 
      
     // $scope.htmlString = "";
      //$scope.ssss =  page.template_page_content;
        //$scope.htmlString = $sce.trustAsHtml(page.template_page_content);
     
           $scope.selected = true;

       $scope.selectedIndex=i;
       $scope.fabric.clearCanvas();
       //$("#proposalDropContainer").empty();
        //$scope.ssss =  $('#proposalDropContainer').html();
      $rootScope.pageid = page.template_page_id;

      if($rootScope.template_id && $rootScope.pageid !== '3'){

        $rootScope.rightSidebar1 = false
      }
      if($rootScope.template_id == '1' && $rootScope.pageid !== '4'){

        $rootScope.rightSidebar = false
      }
        localStorageService.set('pageid',$rootScope.pageid);
        var data = {

          page_id:$rootScope.pageid,
          proposal_id:$rootScope.proposal_id,
        };
        $scope.demo = true;
         praposalservice.getpagecontent.save((data), function(data1){
          $scope.alerts=[];
          //$scope.ssss = data1.data.page_contents;
           //$scope.htmlString = $sce.trustAsHtml(data1.data.page_contents);
             //$scope.htmlString = data1.data.proposal_page_contents;
               //console.log($scope.html);

            //var link = $compile(data1.data.proposal_page_contents);
             //console.log(link);
           // var compiledText = link($scope);
            //console.log(compiledText);
            //$('#proposalDropContainer').append(compiledText);
            //$scope.html = compiledText;   
            //$scope.demo = false;
            //$timeout(function() {
              // $scope.demo = true;
            //}, 5000);
            //$scope.contentdata = compiledText;
            var pagedata = data1.data.proposal_page_contents;
            //console.log(pagedata);
            $scope.fabric.loadJSON(pagedata);


           //$rootScope.loaddata();
          //$scope.pagedata= data1.data;
           
        });

          var cmntdata = {
        proposal_id: $rootScope.proposal_id,
        tenancy_id: $rootScope.tenancyid,
        page_id:$rootScope.pageid

        };

        praposalservice.getcomments.save((cmntdata), function(data){
        //$scope.alerts=[];
        $scope.commentsdata= data.data;
         
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
             var printContents = document.getElementById("proposalDropContainer").innerHTML;
             console.log(printContents);

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
           //pricetable_content:"",
           //taxtable_content:"",
           //distable_content:"",
            pricetable_content:$rootScope.finalpricedata,
            taxtable_content:$rootScope.finaltaxdata,
            distable_content:$rootScope.finaldisdata,
            //customer_price:$rootScope.customerval
             version_id:$rootScope.version_id
            };

              praposalservice.savepage.save((data), function(data1){
              $scope.alerts=[];
              if(data1.status == true){
              //$scope.pagedata= data1.data;
              //$scope.ssss = data1.data.page_contents;
              $rootScope.totalvalue = data1.data.after_tax_total;
              console.log($rootScope.totalvalue);
               //$rootScope.callme();
             }
               
            });

              var pdata ={

                 proposal_id:$rootScope.proposal_id,
                 template:$scope.pagedata


              };

              praposalservice.savepagesort.save((pdata), function(data1){
              $scope.alerts=[];
              //$scope.pagedata= data1.data;
             // $scope.ssss = data1.data.page_contents;
              $rootScope.totalvalue = data1.data.after_tax_total;
              console.log($rootScope.totalvalue);

               
            });

        });


      $scope.imageupload = function(){
        $scope.loading = true;
        $scope.errors = [];
        var data = {
             template_id:$rootScope.template_id,
              page_id: $rootScope.pageid,
               page_id:2,
              proposal_id:$rootScope.proposal_id,
              image_raw:$scope.files[0].base64,
               tenancy_id:$rootScope.tenancyid,
               created_by:$rootScope.userid,
           };

            praposalservice.upiamage.save((data), function(data){
              if(data.status == true){
                $scope.loading = false;
              //$scope.alerts=[];
              var imagepath = data.logo_path;
              //$rootScope.imageinsert(imagepath);
              $scope.iamge= data.data;
              init();
            }
            if(data.status == false){

               $scope.errors = data.message;
            }
         
            });

        };

        $scope.selectimage = function(thumbs){
          var imagepath = thumbs.image_path;
          $rootScope.imageinsert(imagepath);
          $rootScope.modalInstance.close();

        };



          
         $rootScope.pushdata = function(detail){

          

             //

              $rootScope.finalpricedata = [];
          $scope.newprice=[];
          var pricedata = detail;
          console.log("in pushdatafunction"+pricedata);
        $scope.newprice.push(pricedata);
          console.log($scope.newprice[0]);
         // $scope.fabric.deleteActiveObject();
          var svgDataHeader = '<svg xmlns="http://www.w3.org/2000/svg" width="500" height="300">' +
           '<foreignObject width="100%" height="100%">' +
           '<div xmlns="http://www.w3.org/1999/xhtml" style="font-size:20px;">' +
             '<table border="1"  width="100%" height="100%">'+
             '<thead><tr><td>Task Description</td><td>Quantity</td><td>Unit</td><td>Price</td><td>Total</td></tr></thead><tbody>';
         
             
             
            var svgDataContent = localStorageService.get('svgDataContent');
            var svgDataTax = localStorageService.get('svgDataTax');
          var svgDataDiscount = localStorageService.get('svgDataDiscount');

              if(svgDataContent == null)
                  svgDataContent = "";
              if(svgDataDiscount == null)
                  svgDataDiscount = "";
              if(svgDataTax == null)
                  svgDataTax = "";
           
              var svgDataContent = svgDataContent + '<tr><td>'+$scope.newprice[0]["categoryname"]+'</td><td>'+$scope.newprice[0]["mandays"]+'</td><td>1</td><td>'+$scope.newprice[0]["dailyrate"]+'</td><td>'+$scope.newprice[0]["totalrate"]+'</td></tr>';

               var svgDataFooter = '</tbody></table>' + 
               '</div>' +
               '</foreignObject>' +
               '</svg>';

               var svgData = svgDataHeader + svgDataContent + svgDataDiscount + svgDataTax + svgDataFooter;


                localStorageService.set('svgDataHeader', svgDataHeader);
                 localStorageService.set('svgDataContent', svgDataContent);
                 localStorageService.set('svgDataTax', svgDataTax);
                 localStorageService.set('svgDataDiscount', svgDataDiscount);
                  localStorageService.set('svgDataFooter', svgDataFooter);

              // creating image from svg
              var DOMURL = window.URL || window.webkitURL || window;
              var img = new Image();
              
         
              var svg = new Blob([svgData], {type: 'image/svg+xml;'});
           //   console.log("asdasdasd"+svg);
              var url = DOMURL.createObjectURL(svg);
                img.setAttribute('crossOrigin', 'Anonymous');
           
              img.onload = function() {
               // alert("sdh");
                console.log("sdashd");
                //ctx.drawImage(img, 0, 0);
                DOMURL.revokeObjectURL(url);
               };
                 img.src = url; 
            /* svg.toDataURL("image/png", {
                callback: function(data) {
                    img.setAttribute("src", data)
                }
              })*/
              console.log("asdjhas url"+url);
            
              
              $scope.fabric.addCanvasImage(img);
             /* var rect =  $scope.fabric.addCanvasRect();
                 rect.on('selected', function(e) {
              console.log("deleting data");
              $scope.deletedata();
            });*/
          
          //$rootScope.finalpricedata.push($scope.customerprice);
          $rootScope.finalpricedata.push(pricedata);
           console.log($rootScope.finalpricedata);
          //appendtax={};

         };

          $rootScope.pushtaxdata = function(detail){
            $scope.fabric.addtaxtable(detail);
            $rootScope.finaltaxdata = [];
            $rootScope.finaltaxdata.push(detail);

            $rootScope.finaltaxdata=[];
          $scope.newtax=[];
          var appendtax = detail;
          //console.log(finaltaxdata);
          $scope.newtax.push(appendtax);

           //$scope.fabric.deleteActiveObject();

          var svgDataHeader = localStorageService.get('svgDataHeader');
          var svgDataContent = localStorageService.get('svgDataContent');
          var svgDataDiscount = localStorageService.get('svgDataDiscount');
          var svgDataTax = localStorageService.get('svgDataTax');
          var svgDataFooter = localStorageService.get('svgDataFooter');

          var svgDataTax = '<tr><td style="text-align:right;">Tax </td><td></td><td></td><td></td><td>'+appendtax["percentage"]+'</td></tr>';
          
          localStorageService.set('svgDataTax', svgDataTax);
         
          var svgData = svgDataHeader + svgDataContent + svgDataDiscount + svgDataTax + svgDataFooter;

           //creating image from svg
            var DOMURL = window.URL || window.webkitURL || window;
            var img = new Image();
            var svg = new Blob([svgData], {type: 'image/svg+xml'});
            var url = DOMURL.createObjectURL(svg);
            img.src = url; 

            $scope.fabric.addCanvasImage(img);


           
          console.log($scope.pblock);
          $rootScope.finaltaxdata.push(appendtax);
          appendtax={};

         };

         $rootScope.pushdisdata = function(detail){
           $scope.fabric.adddiscounttable(detail);
           $rootScope.finaldisdata=[];
           $rootScope.finaldisdata.push(detail);
           var svgDataHeader = localStorageService.get('svgDataHeader');
          var svgDataContent = localStorageService.get('svgDataContent');
          var svgDataDiscount = localStorageService.get('svgDataDiscount');
          var svgDataTax = localStorageService.get('svgDataTax');
          var svgDataFooter = localStorageService.get('svgDataFooter');

          var svgDataDiscount ='<tr><td style="text-align:right;">Discount</td><td></td><td></td><td></td><td>'+["value"]+'</td></tr>';

          localStorageService.set('svgDataDiscount', svgDataDiscount);

          var svgData = svgDataHeader + svgDataContent + svgDataDiscount + svgDataTax + svgDataFooter;

            // creating image from svg
            var DOMURL = window.URL || window.webkitURL || window;
            var img = new Image();
            var svg = new Blob([svgData], {type: 'image/svg+xml'});
            var url = DOMURL.createObjectURL(svg);
            img.src = url; 

         $scope.fabric.addCanvasImage(img);


          //console.log($scope.pblock);
          // $rootScope.finaldisdata.push(appenddis);
          //appendtax={};
          //console.log($rootScope.finaldata);
         };

         $rootScope.catchcustomerprice = function(txt){
          $rootScope.customerval=[];

          $rootScope.customerval.push(txt);

         };
         $rootScope.pushtask = function(tasklist){
          $scope.fabric.addtasktable(tasklist);
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
              title: 'Menu'
            };

            $scope.dynamicPopovernew = {
              content: 'hhh',
              templateUrl: 'views/comments.html',
            
            };

            $scope.closepopover = function(){
              $scope.isOpen1 = false;

            };
$scope.color = '#FF0000';

            $scope.options = {
    
    format:'hex',
  
};


   $rootScope.stylesadd = function(stylesdata){
    

       var canvasdata = $scope.fabric.getJSON();
      
    $scope.styleid = stylesdata.id;
    var data = {
      id:$scope.styleid
    }

     styleservice.getstyledetail.query((data), function(data1){

          $scope.canvasdatanew =[];
            canvasdatanew = new object();
  
       canvasdata = new object();
        canvasdata = data1.data.conten;
        $scope.canvasdatanew.push(canvasdata);
        console.log(canvasdatanew);
          $scope.fabric.loadJSON($scope.canvasdatanew);
          $rootScope.rightSidebar2 = false;
           
         

    });

   };

   $rootScope.pageadd = function(page){

    console.log(page);
     $rootScope.rightSidebar4 = false;
    $scope.proposal_pageid = page.Page_id;

    var data = {
        proposal_id:$rootScope.proposal_id,
        created_by:$rootScope.userid,
        proposal_version_id:$rootScope.version_id,
        template_id:$rootScope.template_id,
        page_id:$scope.proposal_pageid

    };


      styleservice.addpage.query((data), function(data1){
    
       
         init();
           
         

    });








   };

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
 $scope.$watch('praposalname', function () {
      localStorageService.set('praposalname',$rootScope.praposalname);
     // localStorageService.set('userid',$rootScope.userid);
    }, true);

 //fabric//



    $scope.fabric = {};
     var lableGroup;
  //$scope.ImagesConstants = ImagesConstants;
  $scope.FabricConstants = FabricConstants;

  //
  // Creating Canvas Objects
  // ================================================================
  $scope.addtextbox = function(){
    $scope.fabric.addText();

  };
  $scope.addShape = function(path) {
    $scope.fabric.addShape('/lib/svg/' + path + '.svg');
    Modal.close();
  };

  $scope.addImage = function(image) {
    $scope.fabric.addpicture(image);
    //Modal.close();
  };

  $rootScope.addImageUpload = function(imagepath) {
 
    $scope.fabric.addpicture(imagepath);
    //var obj = angular.fromJson(data);
   // $scope.addImage(data);
    //Modal.close();
  };

$scope.addcircle = function() {
  $scope.fabric.addCircle();

    };

     $scope.addSqure = function(){
      $scope.fabric.addRect();


     };

     $scope.addLine = function(){
      $scope.fabric.addLine();

     };

     $scope.addTri =function(){

      $scope.fabric.addTriangle();
     };

     $scope.videoadd = function(){
    // var video1El = document.getElementById('video');

        //$scope.videadd = true;

    //var video2El = document.getElementById('video2');  

     //$scope.fabric.addVideo(video2El);

      $rootScope.modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'views/videoupload.html',
        controller: 'videoUploadCtrl',
        windowClass: 'modal-md ',
        //size: size,
        resolve: {
          
        }
        });


     };

     $rootScope.$on('catchurl', function(event, obj) {
      console.log(obj);
      $scope.videoUrl = obj;

      
      
      //$scope.videopath =  angular.copy($scope.videoUrl);
       /*var video = document.getElementById('video2');
         video.src = $scope.videoUrl;
         video.play();*/

         var video = document.getElementById('video2');
         var source = document.createElement('source');

          source.setAttribute('src', $scope.videoUrl);
          video.setAttribute('crossOrigin', 'anonymous');
          video.appendChild(source);
          var videoSrc = $scope.videoUrl;
            //video.play();
    
          // var video2El = document.getElementById('video2');  
           console.log(video);
           $scope.fabric.addVideo(video,videoSrc);

   
    


     });

     $scope.addurltovideo = function(){
       var video2El = document.getElementById('video2');  

     $scope.fabric.addVideo(video2El);

     };
     $scope.trustSrc = function(src) {
          return $sce.trustAsResourceUrl(src);
        };

  //
  // Editing Canvas Size
  // ================================================================
  $scope.selectCanvas = function() {
    $scope.canvasCopy = {
      width: $scope.fabric.canvasOriginalWidth,
      height: $scope.fabric.canvasOriginalHeight
    };
  };

  $scope.setCanvasSize = function() {
    $scope.fabric.setCanvasSize($scope.canvasCopy.width, $scope.canvasCopy.height);
    $scope.fabric.setDirty(true);
    Modal.close();
    delete $scope.canvasCopy;
  };

  $scope.updateCanvas = function() {
    var json = $scope.fabric.getCanvasBlob();
    console.log(json);
    $scope.pagedata = json;
    $rootScope.finalpricedata = [];
    $rootScope.finaltaxdata = [];
    $rootScope.finaldisdata = [];
     $scope.vurl=[];
            var url = 'https://www.youtube.com/embed/r4O4Xec60_k';

     var data = {

            template_id:"1",
            page_id:"1",
            //page_id:2,
            proposal_id:"204",
            content:$scope.pagedata,
            created_by:"86",
            //video_url: $scope.vUrl,
            video_url:$scope.vurl,
            tenancy_id: "58",
           //pricetable_content:"",
           //taxtable_content:"",
           //distable_content:"",
            pricetable_content:$rootScope.finalpricedata,
            taxtable_content:$rootScope.finaltaxdata,
            distable_content:$rootScope.finaldisdata,
            //customer_price:$rootScope.customerval
             version_id:"1"
            };

             praposalservice.savepage.save((data), function(data1){
              $scope.alerts=[];
              if(data1.status == true){
              //$scope.pagedata= data1.data;
              //$scope.ssss = data1.data.page_contents;
              $rootScope.totalvalue = data1.data.after_tax_total;
              console.log($rootScope.totalvalue);
               //$rootScope.callme();
             }
               
            });


    
  };

    $scope.fillcolor = function(){
      var value = $scope.mycoler;
      $scope.fabric.fillShapecolor(value);
      console.log($scope.fabric.selectedObject.type);
      if($scope.fabric.selectedObject.type == 'line'){
             $scope.fabric.filllinecolor(value);
        }


    };
  //
  // Init
  // ================================================================
  $scope.init = function() {
    $scope.fabric = new Fabric({
      JSONExportProperties: FabricConstants.JSONExportProperties,
      textDefaults: FabricConstants.textDefaults,
      shapeDefaults: FabricConstants.shapeDefaults
      //json: $scope.main.selectedPage.json
    });

    console.log($scope.fabric);
    console.log($window.innerHeight);
    console.log($window.innerWidth);
    var canHeight = $window.innerHeight;
    var canWidth = $window.innerWidth - 400;
    var $canvas = $("#demoCanvas");
    $scope.fabric.setCanvasSize($canvas.width(), $canvas.height());
    $scope.fabric.setDirty(true);

  };

  $scope.$on('canvas:created', $scope.init);


  $scope.insertText = function(shapeType){

    console.log("text - " + shapeType);
    switch(shapeType) {
      case 'text':
        $scope.addtextbox();
        break;
      default:
        break;
    }
    switch(shapeType){
      case 'circle':
      $scope.addcircle();
      break;
      default:
      break;
    }

    switch(shapeType){
      case 'squre':
      $scope.addSqure();
      break;
      default:
      break;
    }
    switch(shapeType){
      case 'triangle':
      $scope.addTri();
      break;
      default:
      break;
    }
    switch(shapeType){
      case 'line':
      $scope.addLine();
      break;
      default:
      break;
    }
  
  switch(shapeType){
      case 'image':
      $scope.openimageslider();
      break;
      default:
      break;
    }
    switch(shapeType){
      case 'video':
      $scope.videoadd();
      break;
      default:
      break;
    }
  };
$scope.$on('savedata', function(event, data) {
      $rootScope.callme();
    })
            
  });
