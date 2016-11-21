'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:pricingsettingCtrl
 * @description
 * # pricingsettingCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('pricingsettingCtrl',['$scope', '$state','$timeout','$rootScope','$stateParams','$window','settingservice','localStorageService','$location','userservice','sweetAlert','$anchorScroll',
  function ($scope, $state, $timeout,$rootScope,$stateParams,$window,settingservice,localStorageService,$location,userservice,sweetAlert,$anchorScroll ) {
  	$rootScope.tenancyid = localStorageService.get('tenancyid');
  	$rootScope.userid = localStorageService.get('userid');
   	$rootScope.isAdmin = localStorageService.get('isAdmin');
     $rootScope.username = localStorageService.get('username');
   	$scope.closeAlerts = function(index) {
        $scope.alerts.splice(1, index);
        $scope.alerts = [];
    };
    $scope.closeAlert = function(index) {
        $scope.errors.splice(1, index);
        $scope.errors = [];
    };
    $scope.closemodal = function(){
          console.log("hi");
          $rootScope.modalInstance.close();

        };

     $rootScope.alerts=[];
      $scope.loginalerts=[];
   		$scope.pricesection = function(){
   			$scope.collapsed1 = false;
   			$scope.collapsed2 = false;
   			$scope.pricesectionshow = true;
   		};

   		$scope.closeprice = function(){
   			$scope.pricesectionshow = false;
        $scope.pricesectionshow ="";
          $scope.updateprice ="" ;
          $scope.productname ="" ;
            $scope.skuid ="";
            $scope.quantity ="";
            $scope.unitcost ="";
            $scope.unitprice ="";
            $scope.source ="";
            $scope.discriptions ="" ;
            $scope.totalprice="";
            $scope.totalcost="";
            $scope.moneys="";
              $scope.updateprice = false;

   		};

   		$scope.discontsection = function(){
   			$scope.collapsed2 = false;
   			$scope.pricesectionshow = false;
   			$scope.collapsed1 = true;

   		};
   		$scope.closediscount = function(){
   			$scope.collapsed1 = false;
        $scope.discountname="";
                $scope.distype="";
                $scope.value="";
                $scope.dupdate = false;

   		};

   		$scope.taxsection = function(){
   			$scope.collapsed1 = false;
   			$scope.pricesectionshow = false;
   			$scope.collapsed2 = true;

   		};
   		$scope.closetax = function(){
   			$scope.collapsed2 = false;
        $scope.taxname ="";
                $scope.taxPercentage="";
        $scope.tupdate = false;


   		};

      
  var countUp = function() {

    $scope.alerts = [];
     $scope.errors = [];

      $timeout(countUp, 10000);   

    };

 
    





   	function init() {
   		 	settingservice.currancy.get({}, function (data1){
      		$scope.currancys = data1.data.Currency;
       //$scope.allstates = data.data.states;
   			});

   			var getvendor ={
        		tenancy_id:$rootScope.tenancyid 

    		};
			settingservice.vendors.save((getvendor), function(data1){

        		$scope.vendorsdata = data1.data;

    		});

    		$scope.sources = [{id:1,type:'Insource'},
                  {id:2,type:'Outsource'}];


             	var getprice ={
        			tenancy_id:$rootScope.tenancyid 

    			};

    			settingservice.allpriceblock.save((getprice), function(data){

        		$scope.pricealldata = data.data;

    			});

    			$scope.dbased = [{id:'1',type:'Amount'},
                  {id:'2',type:'Percentage'}];


                var disdata = {
						tenancy_id:$rootScope.tenancyid 

						};
					settingservice.getdiscount.save((disdata), function(data){
						$scope.discountblock = data.data;
				});


				var taxdata = {

  						tenancy_id:$rootScope.tenancyid, 
						};
						settingservice.gettax.save((taxdata), function(data){

       						 $scope.taxblock = data.data;

    			});

             $timeout(countUp, 10000);

   		 }


   		$scope.mul = function(quantity,unitcost){

  			$scope.totalcost =  (quantity) * (unitcost);
		};

		$scope.mul1 = function(quantity,unitprice){

  			$scope.totalprice =  (quantity) * (unitprice);
		};
$scope.mulall = function(quantity,unitcost,unitprice){

        $scope.totalcost =  (quantity) * (unitcost);
        $scope.totalprice =  (quantity) * (unitprice);
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
        type:$scope.source,
        description:$scope.discriptions,
        totalcost:$scope.totalcost,
        totalprice:$scope.totalprice
   		 };
     	settingservice.pricepost.save((pricedata), function(data){

        $scope.price = data.data;
        if(data.status === true){
                $scope.alerts.push({msg: 'Price block added successfully', type:'success'});
                $scope.pricesectionshow = false;
                 $scope.pricesectionshow ="";
          $scope.updateprice ="" ;
          $scope.productname ="" ;
            $scope.skuid ="";
            $scope.quantity ="";
            $scope.unitcost ="";
            $scope.unitprice ="";
            $scope.source ="";
            $scope.discriptions ="" ;
            $scope.totalprice="";
            $scope.totalcost="";
            $scope.moneys="";
                init();
            }

            else if(data.status === false){

               $scope.errors = data.message;
            }

    	});
	};


	 $scope.getdata = function (info) {
     $scope.closetax();
     $scope.closediscount();
   		$scope.pricesectionshow = true;
    	$scope.updateprice = true;

    	$rootScope.id = info.id;
  
        $scope.productname = info.productname;
        $scope.skuid = info.skuid;
        $scope.quantity = info.quantity;
        $scope.unitcost = info.unitcost;
        $scope.unitprice = info.unitprice;
        //user_id:$rootScope.userid;
        //$scope.source = info.type;
        $scope.discriptions = info.description;
        $scope.totalcost =  info.totalcost;
        $scope.totalprice = info.totalprice;
        $scope.source = info.type;
        $scope.moneys = info.currency_id;

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
        type:$scope.source,
        description:$scope.discriptions,
        updated_by:$rootScope.userid,
        totalcost:$scope.totalcost,
        totalprice:$scope.totalprice



    };

  settingservice.updateprice.update((newprice), function(data){

        $scope.allresource = data.data;
         if(data.status === true){
                $scope.alerts.push({msg: 'Price block Updated successfully', type:'success'});
                 $scope.pricesectionshow = false;
    			$scope.updateprice = false;

                $scope.pricesectionshow ="";
    			$scope.updateprice ="" ;
    			$scope.productname ="" ;
        		$scope.skuid ="";
        		$scope.quantity ="";
        		$scope.unitcost ="";
        		$scope.unitprice ="";
        		$scope.source ="";
        		$scope.discriptions ="" ;
        		$scope.totalprice="";
        		$scope.totalcost="";
            $scope.moneys="";
                init();
            }

             else if(data.status === false){
               // $scope.alerts.push({msg: 'Update Not Saved', type:'danger'});
               $scope.errors = data.message;
               

                init();
            }

    });


  };

  $scope.deleteprice = function(detail){

     sweetAlert.swal({
                title: "Are you sure you want to delete?",
                //text: "Your will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: false,
                closeOnCancel: false },
            function (isConfirm) {
                if (isConfirm) {
                  $scope.id = detail.id;
                  var projectdata= {

          id:$scope.id,
          updated_by:$rootScope.userid
    };

    settingservice.deleteprice.save((projectdata), function(data){

          $scope.allresource = data.data;
           if(data.status === true){
               $scope.pricesectionshow = false;
                $scope.pricesectionshow ="";
                $scope.updateprice ="" ;
                $scope.productname ="" ;
                  $scope.skuid ="";
                  $scope.quantity ="";
                  $scope.unitcost ="";
                  $scope.unitprice ="";
                  $scope.source ="";
                  $scope.discriptions ="" ;
                  $scope.totalprice="";
                  $scope.totalcost="";
                  $scope.moneys="";
                    $scope.updateprice = false;
                init();
            }

             else if(data.status === false){
                $scope.alerts.push({msg: 'Error occurd', type:'danger'});
                
            }

      });
                    
                    sweetAlert.swal("Deleted!", "Price block Deleted successfully", "success");
                } else {
                    sweetAlert.swal("Cancelled");
                }
            });
 		
  		



		

	};



	$scope.adddiscount = function(){

    	$scope.alerts = [];
 		var discountdata = {
  		tenancy_id:$rootScope.tenancyid, 
  		//user_id:'1',
  		name:$scope.discountname,
  		type:$scope.distype,
  		value:$scope.value,
      created_by:$rootScope.userid

 		};
 		settingservice.postdiscount.save((discountdata), function(data){

        $scope.discountblock = data.status;
         if(data.status === true){
                $scope.alerts.push({msg: 'Discount added successfully', type:'success'});
                init();
                $scope.collapsed1 = false;
                $scope.discountname="";
                $scope.distype="";
                $scope.value="";
            }

            else if(data.status === false){

               $scope.errors = data.message;
            }


    	});



  	};


  	$scope.discountdata = function (detail) {
      $scope.closeprice();
      $scope.closetax();
    	$scope.collapsed1 = true;
    	$scope.dupdate = true;

  		//tenancy_id:'1',
  		//user_id:'1',
   		$scope.id = detail.id;
  		$scope.discountname = detail.discountname;
  		$scope.distype = detail.type;
  		$scope.value = detail.value;
       //$location.hash('top');

      // call $anchorScroll()
      $anchorScroll();

 	 };


 	 $scope.updatediscount = function(){
    	$scope.alerts = [];
     	var discountdata = {
  		//tenancy_id:'1',
  		//user_id:'1',
  		id:$scope.id ,
  		name:$scope.discountname,
  		type:$scope.distype,
  		value:$scope.value,
      updated_by: $rootScope.userid,
      tenancy_id:$rootScope.tenancyid

 		};
 		settingservice.updatediscount.update((discountdata), function(data){

        $scope.discountblock = data.status;
         if(data.status === true){
                $scope.alerts.push({msg: 'Discount Updated successfully', type:'success'});
                //$scope.price = false;
                $scope.collapsed1 = false;
    			$scope.dupdate = false;
    			$scope.discountname = "";
    			$scope.distype = "";
    			$scope.value = "";
                init();
            }

             else if(data.status === false){

               $scope.errors = data.message;
            }

    	});

	};


	$scope.deletediscount = function(detail){
    sweetAlert.swal({
                title: "Are you sure you want to delete?",
                //text: "Your will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: false,
                closeOnCancel: false },
            function (isConfirm) {
                if (isConfirm) {
                  $scope.id = detail.id;
                  var discountdata= {

      id:$scope.id,
      updated_by: $rootScope.userid
    };

    settingservice.deletediscount.save((discountdata), function(data){

        $scope.allresource = data.data;
         if(data.status === true){
          $scope.collapsed1 = false;
            $scope.discountname="";
                $scope.distype="";
                $scope.value="";
                $scope.dupdate = false;
                //$scope.alerts.push({msg: 'Discount Block Deleted successfully', type:'success'});
                init();
            }

             else if(data.status === false){
                $scope.alerts.push({msg: 'Error occurd', type:'danger'});
                
            }

      });


                    
                    sweetAlert.swal("Deleted!", "Discount Deleted successfully.", "success");
                } else {
                    sweetAlert.swal("Cancelled");
                }
            });


	
  		



		
	};


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
                $scope.alerts.push({msg: 'Tax added successfully', type:'success'});
                $scope.taxname ="";
                $scope.taxPercentage="";
                $scope.collapsed2 = false;
                init();
            	}

              else if(data.status === false){

               $scope.errors = data.message;
            }


    	});


	};


	$scope.updatetaxdata = function(detail){
    $scope.closediscount();
     $scope.closeprice();
     	$scope.collapsed2 = true;
    	$scope.tupdate = true;

     	$scope.id = detail.id;
    	$scope.taxPercentage = detail.percentage;
    	$scope.taxname = detail.taxname;
       //$location.hash('top');

      // call $anchorScroll()
      $anchorScroll();
  		};

  	$scope.updatetax = function(){
    	$scope.alerts = [];

    	var taxpostdata = {
    		//tenancy_id:'1',
    		//user_id:'1',
    		id:$scope.id,
    		percentage:$scope.taxPercentage,
    		taxname:$scope.taxname,
        updated_by: $rootScope.userid,
        tenancy_id:$rootScope.tenancyid, 

  		};
  		settingservice.updatetax.update((taxpostdata), function(data){

        $scope.taxblock = data.data;
        if(data.status === true){
                $scope.alerts.push({msg: 'Tax Updated successfully', type:'success'});
                $scope.taxname ="";
                $scope.taxPercentage = "";
                $scope.tupdate = false;
                $scope.collapsed2 = false;
                init();
            }

            else if(data.status === false){

               $scope.errors = data.message;
            }


    });



  };

  $scope.deletetax = function(detail){

    sweetAlert.swal({
                title: "Are you sure you want to delete?",
                //text: "Your will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: false,
                closeOnCancel: false },
            function (isConfirm) {
                if (isConfirm) {
                  $scope.id = detail.id;
                   var taxdata= {

        id:$scope.id,
         updated_by: $rootScope.userid

      };

    settingservice.deletetax.save((taxdata), function(data){

        $scope.allresource = data.data;
         if(data.status === true){
            $scope.collapsed2 = false;
              $scope.taxname ="";
                $scope.taxPercentage="";
                $scope.tupdate = false;

                //$scope.alerts.push({msg: 'Tax Block Deleted successfully', type:'success'});
                init();
            }

             else if(data.status === false){
                $scope.alerts.push({msg: 'Error occurd', type:'danger'});
                
            }

    });
                    
                    sweetAlert.swal("Deleted!", "Tax Deleted successfully", "success");
                } else {
                    sweetAlert.swal("Cancelled");
                }
            });
   
    



   



};



init();

  		}]);