'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:settingCtrl
 * @description
 * # settingCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('settingCtrl',['$scope', '$state','$timeout','$rootScope','$stateParams','$window','settingservice','localStorageService','$location','userservice',
  function ($scope, $state, $timeout,$rootScope,$stateParams,$window,settingservice,localStorageService,$location,userservice ) {
 $rootScope.tenancyid = localStorageService.get('tenancyid');
  $rootScope.userid = localStorageService.get('userid');



	$scope.priceblock = function(){
$scope.pricesection = true;
$scope.discount = false;
$scope.tax = false;
};
$scope.discountsection = function(){
$scope.discount = true;
$scope.pricesection = false;
$scope.tax = false;

};

$scope.taxsection = function(){
$scope.discount = false;
$scope.pricesection = false;
$scope.tax = true;

};

var countUp = function() {

    $scope.alerts = [];
     $scope.errors = [];

      $timeout(countUp, 4000);

    };

  $timeout(countUp, 4000);
 

 function init() {
        $rootScope.isLogin = localStorageService.get('isLogin');
        if(!$rootScope.isLogin) {
            //$location.path( "/login" );
            return false;
        }
    $rootScope.tenancyid = localStorageService.get('tenancyid');
     //$rootScope.tenancyid = localStorageService.get('tenancyid');
 $rootScope.isAdmin = localStorageService.get('isAdmin');
 $rootScope.userid = localStorageService.get('userid');

    var info = {
        id:$rootScope.tenancyid
    }; 
 settingservice.company.save((info), function(user) {

      $scope.orgdata = user.data;
      $scope.country = user.data.country_id;
      $scope.state = user.data.state_id;

    });


   

  var data =  {id:$rootScope.tenancyid }
    userservice.getuserdetail.query((data), function(data1){
     $scope.alerts=[];
        $scope.userdata = data1.data.users;
         

    });
  settingservice.country.query({}, function (data){
      $scope.allProducts = data.data.country;
       $scope.allstates = data.data.states;
   });

settingservice.currancy.get({}, function (data1){
      $scope.currancys = data1.data.Currency;
       //$scope.allstates = data.data.states;
   });



  settingservice.country.query({}, function (data){
      $scope.allProducts = data.data.country;
       $scope.allstates = data.data.states;
   });

settingservice.currancy.get({}, function (data1){
      $scope.currancys = data1.data.Currency;
       //$scope.allstates = data.data.states;
   });

  var id ={
        id:$rootScope.tenancyid  

    }

    settingservice.task.save((id), function (data3){
      $scope.tasks = data3.data;
       ////$scope.gridOptions.data = data3.data;
       //$scope.allstates = data.data.states;
     });

    var getvendor ={
        id:$rootScope.tenancyid 

    };
settingservice.vendors.save((getvendor), function(data1){

        $scope.vendorsdata = data1.data;

    });

    var getprice ={
        tenancy_id:$rootScope.tenancyid 

    };

    settingservice.allpriceblock.save((getprice), function(data){

        $scope.price = data.data;

    });
  
$scope.sources = [{id:'1',type:'Insource'},
                  {id:'2',type:'Outsource'}];

var getresources = {
     tenancy_id:'1',

}
settingservice.getresource.save((getresources), function(data){

        $scope.allresource = data.data;

    });
var getclint  = {

    id:'1'
};

settingservice.getclient.save((getclint), function(data){

        $scope.clients = data.data;

    });
var ptask = {

    tenancy_id:$rootScope.tenancyid 
 };
settingservice.getptask.save((ptask), function(data){


        $scope.projecttask = data.data;

    });

var disdata = {

  tenancy_id:$rootScope.tenancyid 


}
settingservice.getdiscount.save((disdata), function(data){

        $scope.discountblock = data.data;

    });
$scope.dbased = [{id:'1',type:'amount'},
                  {id:'2',type:'percentage'}];


  var taxdata = {

  tenancy_id:$rootScope.tenancyid, 


};
settingservice.gettax.save((taxdata), function(data){

        $scope.taxblock = data.data;

    });


};
init();
 
 $scope.projecttasksection = function(){
      $scope.collapsed = true;

    };


$scope.edit = function(){
$scope.editaddress = true;

};

$scope.editadmin = function(){
  $scope.showadmin = true;

};
$scope.canceladdress = function(){
 $scope.editaddress = false;
};
$scope.cancleeditadmin = function(){
  $scope.showadmin = false;

};

    $scope.send = function(){
        $scope.alerts=[];
        var logo={
            id:'1',
            logoimage:$scope.file.name+$scope.file.size+$scope.file.type,
            user_id:2,
        };

        settingservice.chngelogo.save(angular.toJson(logo), function(responce){

            $scope.message = responce.message;
            if(responce.status === true){
                $scope.alerts.push({msg: 'Picture Updated successfully', type:'success'});

            }
            });

    };

    $scope.saveadmin = function(){
      var data = {
      tenancy_id:$rootScope.tenancyid,
      updated_by:$rootScope.userid,
      account_admin:$scope.adminsuser.email,

    };
    settingservice.saveadmin.save((data), function(responce){
            $scope.showadmin = false;
            $scope.message = responce.message;
            if(responce.status === true){
                $scope.alerts.push({msg: 'Admin updated successfully', type:'success'});
                init();
            }
            });

    };

    $scope.address = function(){
        $scope.alerts=[];
        var address = {
            id:$rootScope.tenancyid,
            address:$scope.orgdata[0].address,
            city:$scope.orgdata[0].city,
            country_id:$scope.country,
            state_id:$scope.state,
            url:$scope.orgdata[0].url,
            user_id:'2',
            address2:$scope.address2,
            address1:$scope.address1,



        };
          //$scope.result = angular.equals($scope.orgdata.state_id, $scope.allstates.statename);
         settingservice.address.save((address), function(responce){
            $scope.editaddress = false;
            $scope.message = responce.message;
            if(responce.status === true){
                $scope.alerts.push({msg: 'Address updated successfully', type:'success'});
                init();
            }
            });
    };



    $scope.currancy = function(){
        $scope.alerts=[];

        var currancys = {
            tenancy_id: $rootScope.tenancyid,
            currency_id:$scope.money,
            updated_by: $rootScope.userid
        };
         settingservice.currancyes.save((currancys), function(responce){
            $scope.collapsed = false;
            $scope.message = responce.message;
             if(responce.status === true){
                $scope.alerts.push({msg: 'currency updated successfully', type:'success'});
                init();
            }
            }); 
    };




  
	
	$scope.insert = function(){
        $scope.alerts=[];
        var task = {
           categoryname:$scope.taskname,
           user_id:'1',
           tenancy_id:$rootScope.tenancyid  
        };
         settingservice.tasks.save((task), function(responce){

            $scope.message = responce.message
            if(responce.status === true){
                $scope.alerts.push({msg: 'Task added successfully', type:'success'});
                 init();

            } 
            }); 

    };


$scope.submitdata = function(){
    $scope.alerts=[];

    var pricedata = {

        tenancy_id:$rootScope.tenancyid ,
        productname:$scope.productname,
        skuid:$scope.skuid,
        quantity:$scope.quantity,
        unitcost:$scope.unitcost,
        unitprice:$scope.unitprice,
        currency_id:$scope.moneys,
        vendor_id:$scope.vendors,
        created_by:$rootScope.userid,
        type:$scope.source.id,
        description:$scope.discriptions,
        totalcost:$scope.totalcost,
        totalprice:$scope.totalprice
    };
     settingservice.pricepost.save((pricedata), function(data){

        $scope.price = data.data;
        if(data.status === true){
                $scope.alerts.push({msg: 'price block added successfully', type:'success'});
                init();
            }

    });
};

$scope.mul = function(quantity,unitcost){

  $scope.totalcost =  parseInt(quantity) * parseInt(unitcost);
};

$scope.mul1 = function(quantity,unitprice){

  $scope.totalprice =  parseInt(quantity) * parseInt(unitprice);
};


//resourcetype//


$scope.insertresource = function(){
    $scope.alerts=[];

    var resorceinfo = {

        tenancy_id:$rootScope.tenancyid, 
         user_id:$rootScope.userid,
        name:$scope.resourcename,
        vendor_id:$scope.vendors,
        type:$scope.source.id,
        dailycost:$scope.dailycost,
        dailyprice:$scope.dailyprice,



    };

    settingservice.postresource.save((resorceinfo), function(data){

        $scope.message = data.message;
         if(data.status === true){
                $scope.alerts.push({msg: 'Source added successfully', type:'success'});
                init();
            }

    });


};

//vendors//
$scope.submitvendor = function(){
     $scope.alerts=[];

   var addvendor = {

    tenancy_id:$rootScope.tenancyid,
    firstname:$scope.fname,
    lastname:$scope.lname,
    email:$scope.email,
    displayname:$scope.displayname,
    mobile:$scope.mobile,
    url:$scope.url,
    address:$scope.addressdetail,
    country_id:$scope.country.countryid,
    state_id:$scope.state.countryid,
    city:$scope.city,
    postalcode:$scope.pcode,
    user_id:$rootScope.userid,
    description:$scope.summary
};
 settingservice.advendor.save((addvendor), function(data){

        $scope.message = data.message;
        if(data.status === true){
                $scope.alerts.push({msg: 'Vendor block added successfully', type:'success'});
                init();
            }

    });



};

//clients//



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
    country_id:$scope.country.countryid,
    state_id:$scope.state.countryid,
    city:$scope.city,
    postalcode:$scope.pcode,
    user_id:$rootScope.userid,
    description:$scope.summary
};
 settingservice.addclient.save((clientdata), function(data){

        $scope.message = data.message;
        if(data.status === true){
                $scope.alerts.push({msg: 'client added successfully', type:'success'});
                init();
            }


    });


};

//project task//
 
$scope.submitprojecttask = function(){
var postdata = {
  category_id:$scope.category.id,
  taskshortdesc:$scope.discription,
  description:$scope.taskdetail,
  vendor_id:$scope.vendors,
  mandays:$scope.mandays,
  resourcetype_id:$scope.source.id,
  dailycost:$scope.dailycost,
  totalcost:$scope.totalcost,
  dailyrate:$scope.dailyrate,
  totalrate:$scope.totalrate,
  user_id:$rootScope.userid,
  tenancy_id:$rootScope.tenancyid ,



};
settingservice.postptask.save((postdata), function(data){

        $scope.projecttask = data.data;

    });




};

//discount block//


  $scope.adddiscount = function(){
    $scope.alerts = [];
 var discountdata = {
  tenancy_id:$rootScope.tenancyid, 
  user_id:'1',
  name:$scope.discountname,
  type:$scope.distype.id,
  value:$scope.value,

 };
 settingservice.postdiscount.save((discountdata), function(data){

        $scope.discountblock = data.status;
         if(data.status === true){
                $scope.alerts.push({msg: 'Discount added successfully', type:'success'});
                init();
            }


    });



  };

  //tax block//


$scope.addtax = function(){
 $scope.alerts = [];
  var taxpostdata = {
    tenancy_id:$rootScope.tenancyid ,
    created_by:$rootScope.userid,
    percentage:$scope.taxPercentage,
    taxname:$scope.taxname,

  };
  settingservice.posttax.save((taxpostdata), function(data){

        $scope.taxblock = data.data;
         if(data.status === true){
                $scope.alerts.push({msg: 'tax added successfully', type:'success'});
                init();
            }


    });


};

$scope.closeAlert = function(index) {
        $scope.alerts.splice(1, index);
        $scope.alerts = [];
    };




//update price//
  $scope.getdata = function (info) {
    $scope.collapsed = true;
    $scope.updateprice = true;

    $rootScope.id = info.id;
  
        $scope.productname = info.productname;
        $scope.skuid = info.skuid;
        $scope.quantity = info.quantity;
        $scope.unitcost = info.unitcost;
        $scope.unitprice = info.unitprice;
        user_id:$rootScope.userid,
        $scope.source = info.type;
        $scope.discriptions = info.description;

  };

  $scope.updatepriceblock = function(){
     $scope.alerts = [];

    var newprice = {
       id:$rootScope.id,

       tenancy_id:$rootScope.tenancyid, 
        productname:$scope.productname,
        skuid:$scope.skuid,
        quantity:$scope.quantity,
        unitcost:$scope.unitcost,
        unitprice:$scope.unitprice,
        currency_id:$scope.moneys,
        vendor_id:$scope.vendors,
        //user_id:'2',
        type:$scope.source.id,
        description:$scope.discriptions,


    };

  settingservice.updateprice.update((newprice), function(data){

        $scope.allresource = data.data;
         if(data.status === true){
                $scope.alerts.push({msg: 'Price Updated successfully', type:'success'});
                init();
            }

             else if(data.status === false){
                $scope.alerts.push({msg: 'Update Not Saved', type:'danger'});
                init();
            }

    });

};

//
 $scope.discountdata = function (detail) {
    $scope.collapsed1 = true;
    $scope.update = true;

  //tenancy_id:'1',
  //user_id:'1',
   $scope.id = detail.id;
  $scope.discountname = detail.name;
  $scope.distype = detail.type;
  $scope.value = detail.value;

  };
  $scope.updatediscount = function(){
    $scope.alerts = [];
     var discountdata = {
  //tenancy_id:'1',
  //user_id:'1',
  id:$scope.id ,
  name:$scope.discountname,
  type:$scope.distype.id,
  value:$scope.value,

 };
 settingservice.updatediscount.update((discountdata), function(data){

        $scope.discountblock = data.status;
         if(data.status === true){
                $scope.alerts.push({msg: 'discount Updated successfully', type:'success'});
                $scope.price = false;
                init();
            }

    });



  };

  $scope.updatetaxdata = function(detail){
     $scope.collapsed2 = true;
    $scope.update = true;

     $scope.id = detail.id;
    $scope.taxPercentage = detail.percentage;
    $scope.taxname = detail.taxname;
  };

  $scope.updatetax = function(){
    $scope.alerts = [];

    var taxpostdata = {
    //tenancy_id:'1',
    //user_id:'1',
    id:$scope.id,
    percentage:$scope.taxPercentage,
    taxname:$scope.taxname,

  };
  settingservice.updatetax.update((taxpostdata), function(data){

        $scope.taxblock = data.data;
        if(data.status === true){
                $scope.alerts.push({msg: 'Price Updated successfully', type:'success'});
                $scope.collapsed2 = false;
                init();
            }

    });



  };

  //update vendor
  $scope.updatevendor = function(detail){
    $scope.collapsed = true;
    $scope.hidesubmit = true;
   // tanancy_id:'1',
   // firstname:$scope.fname;
   
$rootScope.id = detail.id;

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


  };

   $scope.updatevendorblock = function(){
     $scope.alerts = [];

    var newpvendor = {
       id:1,

      //tanancy_id:'1',
    firstname:$scope.fname,
    lastname:$scope.lname,
    email:$scope.email,
    displayname:$scope.displayname,
    mobile:$scope.mobile,
    url:$scope.url,
    address:$scope.addressdetail,
    country_id:$scope.country.countryid,
    state_id:$scope.state.countryid,
    city:$scope.city,
    postalcode:$scope.pcode,
    //user_id:'1',
    description:$scope.summary


    };

  settingservice.updatevendor.update((newpvendor), function(data){

        $scope.allresource = data.data;
         if(data.status === true){
                $scope.alerts.push({msg: 'Vendor Updated successfully', type:'success'});
                init();
            }

             else if(data.status === false){
                $scope.alerts.push({msg: 'Update Not Saved', type:'danger'});
              
            }

    });

};

//update client//
$scope.updateclient = function(detail){
  $scope.collapsed = true;
  $scope.update = true;
  //tenancy_id:'1',
   $scope.fname = detail.firstname;
    $scope.lname = detail.lastname;
    $scope.email = detail.email;
    $scope.displayname = detail.displayname;
    $scope.mobile = detail.mobile;
    $scope.url = detail.url;
    $scope.addressdetail = detail.address;
    $scope.country = detail.country_id;
    $scope.state = detail.state_id;
    $scope.city = detail.city;
    $scope.pcode = detail.postalcode;
  //  user_id:'1',
    $scope.summary = detail.description;
    $scope.id = detail.id;


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
    country_id:$scope.country.countryid,
    state_id:$scope.state.countryid,
    city:$scope.city,
    postalcode:$scope.pcode,
   // user_id:'1',
    description:$scope.summary
};
  
  settingservice.updateclient.update((clientdata), function(data){

        $scope.allresource = data.data;
         if(data.status === true){
                $scope.alerts.push({msg: 'Client Updated successfully', type:'success'});
                init();
            }

             else if(data.status === false){
                $scope.alerts.push({msg: 'Update Not Saved', type:'danger'});
                init();
            }

    });




};

//update project task//

$scope.updateprojecttask = function(detail){
  $scope.collapsed = true;
  $scope.update = true;

   $scope.category = detail.category_id;
  $scope.discription = detail.taskshortdesc;
  $scope.taskdetail = detail.description;
  $scope.vendors = detail.vendor_id;
  $scope.mandays = detail.mandays;
  $scope.source = detail.resourcetype_id;
  $scope.dailycost = detail.dailycost;
  $scope.totalcost = detail.totalcost;
  $scope.dailyrate = detail.dailyrate;
  $scope.totalrate = detail.totalrate;
  //user_id:'1',
  //tenancy_id:'1',
  $scope.id = detail.id;

};
$scope.updateprojecttaskdata = function(){
   $scope.alerts = [];
var postdata = {
  category_id:$scope.category.id,
  taskshortdesc:$scope.discription,
  description:$scope.taskdetail,
  vendor_id:$scope.vendors,
  mandays:$scope.mandays,
  resourcetype_id:$scope.source.id,
  dailycost:$scope.dailycost,
  totalcost:$scope.totalcost,
  dailyrate:$scope.dailyrate,
  totalrate:$scope.totalrate,
  //user_id:'1',
  //tenancy_id:'1',
  id:$scope.id


};

 settingservice.updateprojecttask.update((postdata), function(data){

        $scope.allresource = data.data;
         if(data.status === true){
                $scope.alerts.push({msg: 'Task Updated successfully', type:'success'});
                init();
            }

             else if(data.status === false){
                $scope.alerts.push({msg: 'Update Not Saved', type:'danger'});
                init();
            }

    });



};

//update resource//

$scope.updateresource = function(detail){
  $scope.collapsed = true;
  $scope.update = true;

  $scope.resourcename = detail.name;
      $scope.vendors = detail.vendor_id;
        $scope.source = detail.type;
       $scope.dailycost = detail.dailycost;
        $scope.dailyprice = detail.dailyprice;
        $scope.id = detail.id;


};

$scope.updateresourcedata = function(){
$scope.alerts = [];
   var resorceinfo = {

        //tenancy_id:'1',
         //user_id:'1',
         id:$scope.id,
        name:$scope.resourcename,
        vendor_id:$scope.vendors,
        type:$scope.source.id,
        dailycost:$scope.dailycost,
        dailyprice:$scope.dailyprice,



    };


     settingservice.updateresource.update((resorceinfo), function(data){

        $scope.allresource = data.data;
         if(data.status === true){
                $scope.alerts.push({msg: 'Resource Updated successfully', type:'success'});
                init();
            }

             else if(data.status === false){
                $scope.alerts.push({msg: 'Update Not Saved', type:'danger'});
                init();
            }

    });





};

//update task//
$scope.updatetask = function(detail){
  $scope.collapsed = true;
  $scope.update = true;

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
                $scope.alerts.push({msg: 'Task Updated successfully', type:'success'});
                init();
            }

             else if(data.status === false){
                $scope.alerts.push({msg: 'Update Not Saved', type:'danger'});
                init();
            }

    });

};

//delete task//
$scope.deletetask = function(detail){
   $scope.alerts=[];
  $scope.id = detail.id;



var taskdata= {

  id:$scope.id
};

settingservice.deletetask.save((taskdata), function(data){

        $scope.allresource = data.data;
         if(data.status === true){
                $scope.alerts.push({msg: 'Task Deleted successfully', type:'success'});
                init();
            }

             else if(data.status === false){
                $scope.alerts.push({msg: 'Error occurd', type:'danger'});
                init();
            }

    });
};

//delete resource//
$scope.deleteresource = function(detail){
  $scope.alerts=[];
 $scope.id = detail.id;

 var resourcedata= {

  id:$scope.id
};

settingservice.deleteresource.save((resourcedata), function(data){

        $scope.allresource = data.data;
         if(data.status === true){
                $scope.alerts.push({msg: 'Resource Deleted successfully', type:'success'});
                init();
            }

             else if(data.status === false){
                $scope.alerts.push({msg: 'Error occurd', type:'danger'});
                init();
            }

    });

};

//delete vendors//
$scope.deletevendor = function(detail){
$scope.alerts=[];
 $scope.id = detail.vendor_id;

 var vendordata= {

  id:$scope.id
};

settingservice.deletevendor.save((vendordata), function(data){

        $scope.allresource = data.data;
         if(data.status === true){
                $scope.alerts.push({msg: 'Resource Deleted successfully', type:'success'});
                init();
            }

             else if(data.status === false){
                $scope.alerts.push({msg: 'Error occurd', type:'danger'});
                init();
            }

    });


};

//delete client//
$scope.delteclient = function(detail){
$scope.alerts=[];
 $scope.id = detail.id;

 var clientdata= {

  id:$scope.id
};

settingservice.deleteclient.save((clientdata), function(data){

        $scope.allresource = data.data;
         if(data.status === true){
                $scope.alerts.push({msg: 'Resource Deleted successfully', type:'success'});
                init();
            }

             else if(data.status === false){
                $scope.alerts.push({msg: 'Error occurd', type:'danger'});
                init();
            }

    });


};

//project task//
$scope.deleteprojecttask = function(detail){
   $scope.alerts=[];
  $scope.id = detail.id;



var projectdata= {

  id:$scope.id
};

settingservice.deleteproject.save((projectdata), function(data){

        $scope.allresource = data.data;
         if(data.status === true){
                $scope.alerts.push({msg: 'Task Deleted successfully', type:'success'});
                init();
            }

             else if(data.status === false){
                $scope.alerts.push({msg: 'Error occurd', type:'danger'});
                
            }

    });


};

//delete price//
$scope.deleteprice = function(detail){
 $scope.alerts=[];
  $scope.id = detail.id;



var projectdata= {

  id:$scope.id
};

settingservice.deleteprice.save((projectdata), function(data){

        $scope.allresource = data.data;
         if(data.status === true){
                $scope.alerts.push({msg: 'Price Block Deleted successfully', type:'success'});
                init();
            }

             else if(data.status === false){
                $scope.alerts.push({msg: 'Error occurd', type:'danger'});
                
            }

    });

};

$scope.deletediscount = function(detail){
$scope.alerts=[];
  $scope.id = detail.id;



var discountdata= {

  id:$scope.id
};

settingservice.deletediscount.save((discountdata), function(data){

        $scope.allresource = data.data;
         if(data.status === true){
                $scope.alerts.push({msg: 'Discount Block Deleted successfully', type:'success'});
                init();
            }

             else if(data.status === false){
                $scope.alerts.push({msg: 'Error occurd', type:'danger'});
                
            }

    });

};

$scope.deletetax = function(detail){
$scope.alerts=[];
  $scope.id = detail.id;



var taxdata= {

  id:$scope.id
};

settingservice.deletetax.save((taxdata), function(data){

        $scope.allresource = data.data;
         if(data.status === true){
                $scope.alerts.push({msg: 'Tax Block Deleted successfully', type:'success'});
                init();
            }

             else if(data.status === false){
                $scope.alerts.push({msg: 'Error occurd', type:'danger'});
                
            }

    });



};


//$rootScope.tenancyid = 1;

 
    
     


  



  	}]);