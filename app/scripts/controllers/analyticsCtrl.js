'use strict';

/**
 * @ngdoc function
 * @name docubasic3App.controller:praposalsummeryCtrl
 * @description
 * # praposalsummeryCtrl
 * Controller of the docubasic3App
 */
angular.module('docubasic3App')
  .controller('analyticsCtrl', function ($scope, $rootScope,localStorageService,praposalservice,$location,$uibModal,sweetAlert,settingservice,$route) {
    
      $rootScope.tenancyid = localStorageService.get('tenancyid');
      $rootScope.userid = localStorageService.get('userid');
      $rootScope.isAdmin = localStorageService.get('isAdmin');
      $rootScope.username = localStorageService.get('username');
      $rootScope.proposal_id = localStorageService.get('proposal_id');
      $rootScope.template_id = localStorageService.get('template_id');
      $rootScope.templatename = localStorageService.get('templatename');
      $rootScope.isLogin = localStorageService.get('isLogin');
      $rootScope.profilepath = localStorageService.get('profilepath');
      $scope.selectedTab = 'day';
        if(!$rootScope.isLogin) {
            $location.path( "/login" );
            return false;
        }

          $scope.allresultgraph = false;
          $scope.$route = $route;

      $scope.flag = [{id:'1',type:'Proposal'},
                  {id:'2',type:'Project Task'},
                  {id:'3',type:'Task categories'},
                  {id:'4',type:'Vendors'},
                   {id:'5',type:'Coustomers'},
                    {id:'6',type:'Notes'},
                     {id:'7',type:'Todos'},
                      {id:'8',type:'Users'},
                       {id:'9',type:'Proposal Loss'},
                        {id:'10',type:'Proposal Won'},

                  ];


        

      

      function init() {




         
        };




    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.openb = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened2 = true;
    };

     var data = {
        tenancy_id: $rootScope.tenancyid,
        proposal_status:0,
        created_by:$rootScope.userid,
      };

      praposalservice.praposalsummeryget.save((data), function(data1){
      $scope.alerts=[];
      if (data1.status === true){
          $scope.praposaldata= data1.data.proposals;
          $scope.praposalactivitydata = data1.data.proposals[0].activity;
          $scope.praposalcollab = data1.data.proposals[0].collaborator;
        }
         
      });


    
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.barOptions = {
        scaleBeginAtZero : true,
        scaleShowGridLines : true,
        scaleGridLineColor : "rgba(0,0,0,.05)",
        scaleGridLineWidth : 1,
        barShowStroke : true,
        barStrokeWidth : 1,
        barValueSpacing : 5,
        barDatasetSpacing : 1,
       
    
    };
  

    $scope.doughnutOptions = {
        segmentShowStroke : true,
        segmentStrokeColor : "#fff",
        segmentStrokeWidth : 1,
        percentageInnerCutout : 45, // This is 0 for Pie charts
        animationSteps : 100,
        animationEasing : "easeOutBounce",
        animateRotate : true,
        animateScale : false,
    };

    $scope.doughnutOptions1 = {
        segmentShowStroke : true,
        segmentStrokeColor : "#fff",
        segmentStrokeWidth : 1,
        percentageInnerCutout : 45, // This is 0 for Pie charts
        animationSteps : 100,
        animationEasing : "easeOutBounce",
        animateRotate : true,
        animateScale : false,
    };


            var praposaldata={
    id:$rootScope.tenancyid 
    };

    settingservice.getpraposaldata.query((praposaldata), function(data){
     
          $scope.praposals = data.data;
          
         console.log($scope.praposals);
         $scope.open =$scope.praposals.OpenCount;
         $scope.submited = $scope.praposals.submittedCount;
         $scope.close = $scope.praposals.closedCount;
           $scope.underreview = $scope.praposals.underreviewCount;


         console.log($scope.open); 

         $scope.doughnutData = [
        {
            value:$scope.open,
            color:"#F66D94",
            highlight: "#57b32c",
            label: "Open"
        },

        {
            value:$scope.submited,
            color: "#898DF6",
            highlight: "#57b32c",
            label: "Submitted"
        },
        {
            value:$scope.underreview,
            color: "#63C685",
            highlight: "#57b32c",
            label: "Under review"
        },
        {
            value:$scope.close,
            color: "#1CD7EE",
            highlight: "#57b32c",
            label: "Close"
        }
    ];

  });

  

 var data1 = {
          id:$rootScope.tenancyid 


        };

        settingservice.getpraposalwon.query((data1), function(data){
         
            $rootScope.praposalswon = data.data.CurrentMonth;
             

      });


      var data2 = {
        id:$rootScope.tenancyid 


        };

        settingservice.getpraposalloss.query((data2), function(data){
         if(data.status == true){
            $rootScope.praposalsloss = data.data.CurrentMonth;
              $scope.newdoughnutData = [
        {
            value:$rootScope.praposalsloss,
            color:"#F66D94",
            highlight: "#57b32c",
            label: "Proposals loss"
        },

        {
            value:$rootScope.praposalswon,
            color: "#898DF6",
            highlight: "#57b32c",
            label: "Proposals won"
        }
        
    ];
         


           

  }

             

      });

       

        var billdata={
    tenancy_id:$rootScope.tenancyid 
    };

    settingservice.getcostprofitgraph.save((billdata), function(data){
      $scope.cstdata = data.data.day_cost;
       $scope.cstmdata = data.data.month_cost;
      $scope.cstydata = data.data.year_cost;



        });
  

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = mm+'/'+dd+'/'+yyyy;
$scope.todate = [];
$scope.todate.push(today);
console.log($scope.todate);



             var billdata={
    tenancy_id:$rootScope.tenancyid 
    };

    settingservice.getbiilinggraph.save((billdata), function(data){

      $scope.linegraph = data.data.lablels;
      console.log($scope.linegraph);
      $scope.linegraphdata = data.data.day;
      $scope.mntdata = data.data.month;
      $scope.yerdata = data.data.year;
      $scope.today = function(){
        $scope.selectedTab = 'day'
       $scope.lineData = {
        labels:"Today",
        datasets: [
            {
                label: "Billing History",
               fillColor: "rgba(137,141,246,1)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data:$scope.linegraphdata
            },
            {
                label: "Cost Profit",
               fillColor: "rgba(80,227,194,0.5)",
                strokeColor: "rgba(98,203,49,0.7)",
                pointColor: "rgba(98,203,49,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(26,179,148,1)",
                data: $scope.cstdata
            }
        ]
    };

  };
  $scope.today();

  $scope.Month = function(){
    $scope.selectedTab = 'month';
       $scope.lineData = {
        labels:"Month",
        datasets: [
            {
                label: "Billing History",
                fillColor: "rgba(137,141,246,1)",
                strokeColor: "rgba(137,141,246,1)",
                pointColor: "rgba(137,141,246,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(137,141,246,1)",
                data:$scope.mntdata
            },
            {
                label: "Cost Profit",
                fillColor: "rgba(80,227,194,0.5)",
                strokeColor: "rgba(80,227,194,0.5)",
                pointColor: "rgba(80,227,194,0.5)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(26,179,148,1)",
                data: $scope.cstmdata
            }
        ]
    };

  };


  $scope.Year = function(){
    $scope.showyear = true;
     $scope.selectedTab = 'year';
       $scope.lineData = {
        labels:"Year",
        datasets: [
            {
                label: "Billing History",
                  fillColor: "rgba(137,141,246,1)",
              
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data:$scope.yerdata
            },
            {
                label: "Cost Profit",
                 fillColor: "rgba(80,227,194,0.5)",
                strokeColor: "rgba(98,203,49,0.7)",
                pointColor: "rgba(98,203,49,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(26,179,148,1)",
                data:$scope.cstydata
            }
        ]
    };

  };





  });

     

    $scope.sharpLineOptions = {
        scaleShowGridLines : true,
        scaleGridLineColor : "rgba(0,0,0,.05)",
        scaleGridLineWidth : 1,
        bezierCurve : false,
        pointDot : true,
        pointDotRadius : 4,
        pointDotStrokeWidth : 1,
        pointHitDetectionRadius : 20,
        datasetStroke : true,
        datasetStrokeWidth : 1,
        datasetFill : true,
    };

   $scope.searchtable = function(cname){
    console.log(cname);
     $scope.costprofitdata = undefined;
     $rootScope.proposal_id =  cname.id;
    $scope.name = cname.name;
    $rootScope.praposalname =  $scope.name;

    localStorageService.set('praposalname',$rootScope.praposalname);
      $rootScope.version_id = cname.version_id;
      console.log($rootScope.version_id);
          //console.log(detail);
          localStorageService.set('version_id',$rootScope.version_id);

    var costdata = {

      tenancy_id: $rootScope.tenancyid,
    created_by:  $rootScope.userid,
     proposal_id: $rootScope.proposal_id,
        version_id:$rootScope.version_id
 
      };
        praposalservice.costprofit.save((costdata), function(data1){
          $scope.alerts=[];
          if(data1.status == true){ 
            $scope.dismsg = "";
             $scope.costprofitdata = data1.data.all_costprofit_data;
              //$location.path( "/costprofitanalysis" );


          }
            if(data1.status == false){ 
                $scope.dismsg = "There is no data available for this proposal"
                $scope.alerts.push({msg: 'There is no cost-profit analysis data available for this proposal', type:'denger'});

            }
        
          });

   };



   init();

      });