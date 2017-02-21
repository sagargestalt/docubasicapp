'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:createpraposalCtrl
 * @description
 * # createpraposalCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('createproposalCtrl', function ($scope,$location, $rootScope,localStorageService,praposalservice,userservice,pageservice,settingservice) {
   var pricingArr = null;
              localStorageService.set('pricingArr',pricingArr);
              var taxArr = null;
              localStorageService.set('taxArr',taxArr);
              var discountArr = null;
               localStorageService.set('discountArr',discountArr);
$scope.selectedTab = 'portrait';
      $scope.closesidebar = function(){
          $rootScope.proposalrightSidebar = false;
          $scope.pname = "";
          $scope.cname ="" ;
          $scope.coname = "";
          $scope.dt = "";

        };

        $scope.closeclient = function(){
           $rootScope.clientadd = false;

        };
         $scope.orientation = 1;
        $scope.selectol = function(){

          $scope.orientation =2;
        };
        $rootScope.templateid ="1";
      $rootScope.tenancyid = localStorageService.get('tenancyid');
      $rootScope.userid = localStorageService.get('userid');
      $rootScope.isAdmin = localStorageService.get('isAdmin');
      $rootScope.username = localStorageService.get('username');
       function init(){

      var tid = {
          tenancy_id:$rootScope.tenancyid 
        };

        praposalservice.getpagedata.save((tid), function(data){
          $scope.alerts=[];
          $scope.pdata= data.data[0].PageContent;
         
      });

      var data =  {tenancy_id:$rootScope.tenancyid, created_by:$rootScope.userid };
        userservice.getcollabdetail.save((data), function(data1){
          $scope.userdata = data1.data.users;
         
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

        settingservice.country.query({}, function (data){
          $scope.allProducts = data.data.country;
          $scope.allstates = data.data.states;
      });

      }

      

  $scope.closeAlert = function(index) {
        $scope.errors.splice(1, index);
        $scope.errors = [];
    };
    $scope.closeAlerts = function(index) {
        $scope.alerts.splice(1, index);
        $scope.alerts = [];
    };

    $scope.submitpage = function(){
        var data={

          tenancy_id:$rootScope.tenancyid,
          page_name:"main",
          created_by:$rootScope.userid,
          page_content:$scope.ssss,
        };
        praposalservice.pagedata.save((data),function(){

        }); 
     
    };
                 /*var container = $(document.createElement('div')).css({

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
                });*/
    $scope.selecttemp = function(temp,i){

        $rootScope.templateid = temp.template.id;
        //$rootScope.templatename = temp.template.template_name;
        $scope.selected = true;

       $scope.selectedIndex=i;

    };

    $scope.orient = function(){
      $scope.selectedtype = "true";


    };


    $scope.submit = function(){
      if(!$scope.coname)
      {
        $scope.coname=[];
      }
      var data = {
        name:$scope.pname,
        tenancy_id:$rootScope.tenancyid,
        user_id:$rootScope.userid,
        customer_id:$scope.cname,
        collaborators:$scope.coname,
        template_id: $rootScope.templateid,
        delivery_date:$scope.dt,
        created_by:$rootScope.userid,
        orientation:$scope.orientation,


      };

       praposalservice.createpraposal.save((data), function(data1){
        $scope.alerts=[];
        $scope.templates= data1.data;
        $rootScope.praposalname =  $scope.pname;

        if(data1.status === true){

        $rootScope.template_id = $scope.templates.template_id;
        $rootScope.proposal_id = $scope.templates.proposal_id;
        $rootScope.client_email = $scope.templates.client_email_id;
        localStorageService.set('client_email',$rootScope.client_email);
        $rootScope.version_id =  $scope.templates.version_id;
        localStorageService.set('version_id',$rootScope.version_id);

         
         $scope.pname = "";
         $scope.coname = "";
         $scope.myDate = "";
         $scope.cname = "";

        $rootScope.proposalrightSidebar = false;

            $location.path( "/proposal" );


        }
        if(data1.status === false){
          $scope.errors = data1.message;


        }
         
      });


    };
    $scope.opencclient = function(){
      console.log("hi");
      $rootScope.clientadd = true;

    };
   

     $scope.$watch('template_id', function () {
      localStorageService.set('template_id',$rootScope.template_id);
     // localStorageService.set('userid',$rootScope.userid);
    }, true);

     $scope.$watch('proposal_id', function () {
      localStorageService.set('proposal_id',$rootScope.proposal_id);
     // localStorageService.set('userid',$rootScope.userid);
    }, true);

     $scope.$watch('praposalname', function () {
      localStorageService.set('praposalname',$rootScope.praposalname);
     // localStorageService.set('userid',$rootScope.userid);
    }, true);
     $scope.$watch('client_email', function () {
      localStorageService.set('client_email',$rootScope.client_email);
     // localStorageService.set('userid',$rootScope.userid);
    }, true);

    

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
$scope.submitclient = function() {
      $scope.alerts=[];
    var clientdata = {
      tenancy_id:$rootScope.tenancyid,
      firstname:$scope.fname,
      lastname:$scope.lname,
      email:$scope.email,
      displayname:$scope.displayname,
      mobile:$scope.mobile,
      url:$scope.url,
      address:$scope.addressdetail,
      country_id:$scope.country,
      state_id:$scope.state,
      city:$scope.city,
      postalcode:$scope.pcode,
      user_id:$rootScope.userid,
      description:$scope.summary,
      created_by:$rootScope.userid,
        phone_number:$scope.phone,
        company_name:$scope.cname,
        customer_code:$scope.clientid,

    };
    settingservice.addclient.save((clientdata), function(data){

        $scope.message = data.message;
        if(data.status === true){
                $scope.alerts.push({msg: 'Client added successfully', type:'success'});
                $scope.collapsed = false;
                $scope.fname="";
                $scope.lname="";
                $scope.email="";
                $scope.displayname="";
                $scope.mobile="";
                $scope.url="";
                $scope.addressdetail="";
                $scope.country="";
                $scope.state="";
                $scope.city="";
                $scope.pcode="";
                $scope.summary="";
                 $scope.phone="";
                 $scope.clientid="";
                 $scope.cname="";
                   $rootScope.clientadd = false;




                init();
            }

            else if(data.status === false){

                 $scope.errors = data.message;
            }


      });


  };

    init();

  });
