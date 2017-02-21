'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:searchCtrl
 * @description
 * # searchCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('searchCtrl', function ($scope, $rootScope,localStorageService,praposalservice,$location,$uibModal,sweetAlert,settingservice,userservice) {
    
      $rootScope.tenancyid = localStorageService.get('tenancyid');
      $rootScope.userid = localStorageService.get('userid');
      $rootScope.isAdmin = localStorageService.get('isAdmin');
      $rootScope.username = localStorageService.get('username');
      $rootScope.proposal_id = localStorageService.get('proposal_id');
      $rootScope.template_id = localStorageService.get('template_id');
      $rootScope.templatename = localStorageService.get('templatename');
         

      $scope.closeuserbar = function(){

        $scope.useradd = false;
      };

      $scope.closevendor = function(){
          $scope.Searchvendoradd = false;

      };

      $scope.closetask = function(){
          $scope.Searhtaskadd = false;
      };

      $scope.closeprojecttask = function(){
         $scope.Searhprojecttaskadd = false;

      };

      $scope.closeclient = function(){
         $scope.Searchclientadd = false;

      };

      $scope.openproposal = function(){
        $location.path( "/proposal-summery" );


      };
            


      $scope.search = function(){
        
      	var data = {
      		tenancy_id:$rootScope.tenancyid,
      		text:$scope.query

      	};


      	settingservice.search.save((data), function (data3){
      		
      		$rootScope.searchdata = data3.data;
          $scope.userdata = data3.data.users;
          $scope.proposaldata = data3.data.proposal;
          $scope.clientdata = data3.data.clients;
           $location.path( "/searchresult" );
         

          
             
              
            
              
           
              if($scope.searchdata.todos.length > 0){
             $rootScope.tabEightActive = true;
              $rootScope.tabOneActive = false;
             $rootScope.tabTwoActive = false;
             $rootScope.tabThreeActive = false;
             $rootScope.tabFourActive = false;
              $rootScope.tabFiveActive = false;
              $rootScope.tabSixActive = false;
              $rootScope.tabSevenActive = false;
              //$rootScope.tabEightActive = false;


              }
               if($scope.searchdata.notes.length > 0){
             $rootScope.tabSevenActive = true;

              $rootScope.tabOneActive = false;
             $rootScope.tabTwoActive = false;
             $rootScope.tabThreeActive = false;
             $rootScope.tabFourActive = false;
              $rootScope.tabFiveActive = false;
              $rootScope.tabSixActive = false;
              //$rootScope.tabSevenActive = false;
              $rootScope.tabEightActive = false; 



              }
             if($scope.searchdata.projectTask.length > 0){
             $rootScope.tabSixActive = true;

             $rootScope.tabOneActive = false;
             $rootScope.tabTwoActive = false;
             $rootScope.tabThreeActive = false;
             $rootScope.tabFourActive = false;
              $rootScope.tabFiveActive = false;
              //$rootScope.tabSixActive = false;
              $rootScope.tabSevenActive = false;
              $rootScope.tabEightActive = false; 


              }
              if($scope.searchdata.projectCategory.length > 0){
             $rootScope.tabFiveActive = true;

             $rootScope.tabOneActive = false;
             $rootScope.tabTwoActive = false;
             $rootScope.tabThreeActive = false;
             $rootScope.tabFourActive = false;
             // $rootScope.tabFiveActive = false;
              $rootScope.tabSixActive = false;
              $rootScope.tabSevenActive = false;
              $rootScope.tabEightActive = false; 
              }
             if($scope.searchdata.vendors.length > 0){
             $rootScope.tabFourActive = true; 

             $rootScope.tabOneActive = false;
             $rootScope.tabTwoActive = false;
             $rootScope.tabThreeActive = false;
             //$rootScope.tabFourActive = false;
              $rootScope.tabFiveActive = false;
              $rootScope.tabSixActive = false;
              $rootScope.tabSevenActive = false;
              $rootScope.tabEightActive = false; 




           }
             if($scope.searchdata.clients.length > 0){
             $rootScope.tabThreeActive = true;

             $rootScope.tabOneActive = false;
             $rootScope.tabTwoActive = false;
             //$rootScope.tabThreeActive = false;
             $rootScope.tabFourActive = false;
              $rootScope.tabFiveActive = false;
              $rootScope.tabSixActive = false;
              $rootScope.tabSevenActive = false;
              $rootScope.tabEightActive = false;  


              }
              if($scope.searchdata.proposal.length > 0){
             $rootScope.tabTwoActive = true;

             $rootScope.tabOneActive = false;
             //$rootScope.tabTwoActive = false;
             $rootScope.tabThreeActive = false;
             $rootScope.tabFourActive = false;
              $rootScope.tabFiveActive = false;
              $rootScope.tabSixActive = false;
              $rootScope.tabSevenActive = false;
              $rootScope.tabEightActive = false; 

              }
              if($scope.searchdata.users.length > 0){
           
            $rootScope.tabOneActive = true;
             $rootScope.tabTwoActive = false;
             $rootScope.tabThreeActive = false;
             $rootScope.tabFourActive = false;
              $rootScope.tabFiveActive = false;
              $rootScope.tabSixActive = false;
              $rootScope.tabSevenActive = false;
              $rootScope.tabEightActive = false;  
           
          }

             $rootScope.unb = $scope.searchdata.users.length;
              $rootScope.pnb = $scope.searchdata.proposal.length;
              $rootScope.cnb = $scope.searchdata.clients.length;
              $rootScope.vnb = $scope.searchdata.vendors.length;
              $rootScope.tnb = $scope.searchdata.projectCategory.length;
               $rootScope.prnb = $scope.searchdata.projectTask.length;
              $rootScope.nnb = $scope.searchdata.notes.length;
               $rootScope.tonb = $scope.searchdata.todos.length;
    		




       		////$scope.gridOptions.data = data3.data;
       		//$scope.allstates = data.data.states;
     		
     		});





      };

       $rootScope.logout = function(){
$rootScope.isLogin = false;
$rootScope.tenancyid = undefined;
$rootScope.userid = undefined;
$rootScope.username = undefined;
$rootScope.isAdmin = undefined;


$location.path( "/login" );

  };
var id ={
            tenancy_id:$rootScope.tenancyid  

          };

        settingservice.task.save((id), function (data3){
          $scope.tasks = data3.data;
          ////$scope.gridOptions.data = data3.data;
          //$scope.allstates = data.data.states;
        
        });

        $scope.sources = [{id:'1',type:'Insource'},
                  {id:'2',type:'Outsource'}];


                  var getvendor ={
            tenancy_id:$rootScope.tenancyid 

            };
          settingservice.vendors.save((getvendor), function(data1){

                $scope.vendorsdata = data1.data;

            });

           var getresources = {
            tenancy_id:$rootScope.tenancyid ,

      };
      settingservice.getresource.save((getresources), function(data){

            $scope.allresource = data.data;

        });

   $scope.$watch('isLogin', function () {
      localStorageService.set('isLogin', $rootScope.isLogin);
     // localStorageService.set('userid',$rootScope.userid);
    }, true);
     $scope.$watch('userid', function () {
      //localStorageService.set('isLogin', $rootScope.isLogin);
      localStorageService.set('userid',$rootScope.userid);
    }, true);
      $scope.$watch('tenancyid', function () {
      localStorageService.set('tenancyid',$rootScope.tenancyid );
     // localStorageService.set('userid',$rootScope.userid);
    }, true);
      $scope.$watch('username', function () {
      localStorageService.set('username',$rootScope.username );
     // localStorageService.set('userid',$rootScope.userid);
    }, true);
      $scope.$watch('isAdmin', function () {
      localStorageService.set('isAdmin',$rootScope.isAdmin);
     // localStorageService.set('userid',$rootScope.userid);
    }, true);
  $scope.userprofile=function(){
 $location.path( "/user-profile" );
  };


$scope.companysetting=function(){
 $location.path( "/settingpage" );
  };


      $scope.editClient = function(detail){


       $scope.Searchclientadd = true;
        //tenancy_id:'1',
        $scope.fname = detail.firstname;
        $scope.lname = detail.lastname;
        $scope.email = detail.email;
        $scope.displayname = detail.displayname;
        $scope.mobile = detail.mobile;
        $scope.url = detail.url;
        $scope.addressdetail = detail.address;
        $scope.country = detail.country;
        $scope.state = detail.state;
        $scope.city = detail.city;
        $scope.pcode = detail.postalcode;
            //  user_id:'1',
        $scope.summary = detail.description;
        $scope.id = detail.id;
        $scope.phone = detail.phone_number;
        $scope.cname = detail.company_name;
        $scope.clientid = detail.customer_code;


      };

      $scope.updateclientdata = function(){
      $scope.alerts = [];
    var clientdata = {
      //tenancy_id:'1',
      id:$scope.id,
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
      // user_id:'1',
      description:$scope.summary,
      updated_by:$rootScope.userid,
        tenancy_id:$rootScope.tenancyid,
        phone_number:$scope.phone,
        company_name:$scope.cname,
        customer_code:$scope.clientid,
  };

      settingservice.updateclient.update((clientdata), function(data){

        $scope.allresource = data.data;
         if(data.status === true){
                $scope.alerts.push({msg: 'Client Updated successfully', type:'success'});
                 $scope.collapsed = false;
                 $scope.update = false;
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
                 $scope.Searchclientadd = false;
                
            }

             else if(data.status === false){
                $scope.errors = data.message;
                //$scope.alerts.push({msg: 'Update Not Saved', type:'danger'});
                //init();
            }

      });




  };


  $scope.editVendor = function(detail){

    $scope.Searchvendoradd = true;
    $rootScope.id = detail.vendor_id;

    //tanancy_id:'1',
      $scope.fname = detail.firstname;
      $scope.lname = detail.lastname;
      $scope.email = detail.email;
      $scope.displayname =detail.displayname;
      $scope.mobile = detail.mobile;
      $scope.url = detail.url;
      $scope.addressdetail = detail.address;
      $scope.country = detail.country;
      $scope.state = detail.state;
      $scope.city = detail.city;
      $scope.pcode = detail.postalcode;
      // user_id:'1',
      $scope.summary = detail.description;
       $scope.vendorname = detail.vendor_name;
      $scope.vendorid = detail.vendor_code;
      $scope.phone = detail.phone_number;



  };

  $scope.updatevendorblock = function(){
     $scope.alerts = [];

      var newpvendor = {
       id:$rootScope.id,

      //tanancy_id:'1',
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
    //user_id:'1',
    updated_by:$rootScope.userid,
    description:$scope.summary,
    tenancy_id:$rootScope.tenancyid,
    vendor_name:$scope.vendorname,
      vendor_code:$scope.vendorid,
      phone_number:$scope.phone


    };

    settingservice.updatevendor.update((newpvendor), function(data){

        $scope.allresource = data.data;
         if(data.status === true){
                $scope.alerts.push({msg: 'Vendor Updated successfully', type:'success'});
                $scope.vendorname="";
                $scope.vendorid="";
                $scope.phone="";
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
             $scope.Searchvendoradd = false;
            }

             else if(data.status === false){
                //$scope.alerts.push({msg: 'Update Not Saved', type:'danger'});
                 $scope.errors = data.message;

              }
              
            

    });

};

    $scope.edittask = function(detail){
        $scope.Searhtaskadd = true;
        $scope.taskname = detail.categoryname;
        $scope.id = detail.id;


    };

    $scope.updatetaskdata = function(){
    $scope.alerts=[];
        var task = {
           categoryname:$scope.taskname,
           updated_by:$rootScope.userid,
           //tenancy_id:'2' 
            tenancy_id:$rootScope.tenancyid,
           id:$scope.id,
        };

      settingservice.updatetask.save((task), function(data){

          $scope.allresource = data.data;
          if(data.status === true){
                $scope.alerts.push({msg: 'Task category updated successfully', type:'success'});
                $scope.taskname = "";
                $scope.Searhtaskadd = false;
                
            }

             else if(data.status === false){
                //$scope.alerts.push({msg: 'Update Not Saved', type:'danger'});
                //init();

                $scope.errors = data.message;
            }

    });

  };

  $scope.editprojecttask = function(){
    $scope.Searhprojecttaskadd = true;
     $scope.category = detail.category_id;
  $scope.discription = detail.taskshortdesc;
  $scope.taskdetail = detail.description;
  
  $scope.mandays = detail.mandays;
  $scope.source = detail.resourcetype_id;
  if($scope.source =="2"){
    $scope.vendors = detail.vendor_id;
    
  }
  if($scope.vendorsdata == null){
    $scope.vendors = undefined;

  }
   if($scope.allresource == null){
     $scope.resource =undefined;

  }
  $scope.dailycost = detail.dailycost;
  $scope.totalcost = detail.totalcost;
  $scope.dailyrate = detail.dailyrate;
  $scope.totalrate = detail.totalrate;
   $scope.resource = detail.resource_id;
  //user_id:'1',
  //tenancy_id:'1',
  $scope.id = detail.id;

  };

  $scope.updateprojecttaskdata = function(){
  //$scope.alerts=[];
   $scope.alerts = [];
  var postdata = {
  category_id:$scope.category,
  taskshortdesc:$scope.discription,
  description:$scope.taskdetail,
  vendor_id:$scope.vendors,
  mandays:$scope.mandays,
  resourcetype_id:$scope.source,
  dailycost:$scope.dailycost,
  totalcost:$scope.totalcost,
  dailyrate:$scope.dailyrate,
  totalrate:$scope.totalrate,
  //user_id:'1',
  //tenancy_id:'1',
  id:$scope.id,
  updated_by:$rootScope.userid,
   tenancy_id:$rootScope.tenancyid ,
    resource_id:$scope.resource


  };

 settingservice.updateprojecttask.update((postdata), function(data){

        $scope.allresource = data.data;
         if(data.status === true){
                $scope.alerts.push({msg: 'Task Updated successfully', type:'success'});
                $scope.collapsed = false;
                $scope.update = false;
                $scope.category ="";
                $scope.discription="";
                $scope.taskdetail="";
                $scope.vendors="";
                $scope.mandays="";
                $scope.source="";
                $scope.dailycost="";
                $scope.totalcost="";
                $scope.dailyrate="";
                $scope.totalrate="";
                $scope.resource="";
                 $scope.Searhprojecttaskadd = false;
              }

             else if(data.status === false){
                //$scope.alerts.push({msg: 'Update Not Saved', type:'danger'});
                $scope.errors = data.message;

                //init();
            }

    });



};


  $scope.edituser = function(detail){
    $scope.useradd = true;
      $scope.id = detail.user_id;
    $scope.fname = detail.first_name;
    $scope.lname = detail.last_name;
    $scope.email = detail.email;

    if(detail.is_tenant_admin === "1"){

      $scope.utype = 1;
    }

    else{
      $scope.utype = 0;
    }



  };

  $scope.usertype = [{id:1,type:'Tenant Admin'},
                  {id:0,type:'End User'}];


     $scope.insertuser = function(){
   
    var data = {
      first_name:$scope.fname,
      last_name:$scope.lname,
      is_tenant_admin:$scope.utype,
     // admin_message:$scope.message,
      email:$scope.email,
      updated_by: $rootScope.userid, 
      tenancy_id:$rootScope.tenancyid,
      id:$scope.id,

    };
      userservice.updateuserdetail.save((data), function(data1){
     $scope.alerts=[];
       // $scope.userdata = data1;
        
        if(data1.status === true){
          if($scope.id == $rootScope.userid){
            $rootScope.isLogin = false;
            $rootScope.tenancyid = undefined;
            $rootScope.userid = undefined;
            $rootScope.username = undefined;
            $rootScope.isAdmin = undefined;


              $location.path( "/login" );
          }
          //$scope.edit = false;
         
         $scope.alerts.push({msg: 'User updated successfully', type:'success'});
         $scope.fname="";
          $scope.lname="";
          $scope.utype="";
          $scope.message="";
          $scope.email="";
           $scope.useradd = true;
        
         }

           if(data1.status === false){

            $scope.errors = data1.message;
           
           }



    });
        };
  


     });