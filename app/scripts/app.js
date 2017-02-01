'use strict';

/**
 * @ngdoc overview
 * @name docubasic3App
 * @description
 * # docubasic3App
 *
 * Main module of the application.
 */
angular
  .module('docubasic3App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router',
    'LocalStorageModule',
    'ui.map',
    'ui.calendar',              // UI Calendar
    'summernote',
    'angular-flot',
    'ngGrid',
    'ui.grid',                  // Angular ng Grid
    'ui.tree',                  // Angular ui Tree
    'bm.bsTour',                // Angular bootstrap tour
    'datatables',
    'xeditable',
    'ui.sortable',              // AngularJS ui-sortable
    'ui.footable',              // FooTable
    'angular-chartist',         // Chartist
    'gridshore.c3js.chart',     // C3 charts
    'angular-ladda',                               // Datatables Buttons
    'ui.codemirror',                       // Ladda - loading buttons
    'ngFileUpload',
    'googleplus' ,
    'naif.base64',
    'socialLogin',
    'ngContentEditable',
    'angular-medium-editor',
    'checklist-model',
    'ngDraggable',
    'angular-bind-html-compile',
    'color.picker',
    'angular-advanced-searchbox',
    'angular-peity',
    'angles',
    'common.fabric',
    'common.fabric.utilities',
    'common.fabric.constants'   

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        activetab: 'dashboard'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl',
        controllerAs: 'loginCtrl'
      })
      .when('/passwordsetup/:email/:tenancy_id/:activation_key', {
        templateUrl: 'views/passwordsetup.html',
        controller: 'passwordctrl',
        controllerAs: 'passwordctrl'
      })
        .when('/companysetting', {
        templateUrl: 'views/companysetting.html',
        controller: 'companysettingCtrl',
        controllerAs: 'companysettingCtrl'
      })
        .when('/task', {
        templateUrl: 'views/task.html',
        controller: 'taskcategoryCtrl',
        controllerAs: 'taskcategoryCtrl'
      })
        .when('/price', {
        templateUrl: 'views/price.html',
        controller: 'pricingsettingCtrl',
        controllerAs: 'pricingsettingCtrl'
      })
        .when('/resourcetype', {
        templateUrl: 'views/resourcetype.html',
        controller: 'resourcetypeCtrl',
        controllerAs: 'resourcetypeCtrl'
      })
        .when('/vendors', {
        templateUrl: 'views/vendors.html',
        controller: 'vendorsCtrl',
        controllerAs: 'vendorsCtrl'
      })
         .when('/client', {
        templateUrl: 'views/client.html',
        controller: 'clientCtrl',
        controllerAs: 'clientCtrl'
      })
          .when('/projecttask', {
        templateUrl: 'views/projecttask.html',
        controller: 'projecttaskCtrl',
        controllerAs: 'projecttaskCtrl'
      })
          .when('/notes', {
        templateUrl: 'views/notes.html',
        controller: 'todoctrl',
        controllerAs: 'todoctrl',
        activetab: 'notes'
      })
           .when('/billing', {
        templateUrl: 'views/billing.html',
        controller: 'billingctrl',
        controllerAs: 'billingctrl'
      })
        .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'userctrl',
        controllerAs: 'userctrl',
         activetab: 'users'
      })
        .when('/todos', {
        templateUrl: 'views/todos.html',
        controller: 'todoctrl',
        controllerAs: 'todoctrl',
        activetab: 'todos'
      })
          .when('/analytics', {
        templateUrl: 'views/analytics.html',
        controller: 'analyticsCtrl',
        controllerAs: 'analyticsCtrl',
         activetab: 'analytics'
      })
        .when('/subscription', {
        templateUrl: 'views/subscription.html',
        controller: 'popupCtrl',
        controllerAs: 'popupCtrl'
      })
        .when('/social-subscription', {
        templateUrl: 'views/social-subscription.html',
        controller: 'loginCtrl',
        controllerAs: 'loginCtrl'
      })
         .when('/demo', {
        templateUrl: 'views/demo.html',
        controller: 'billingctrl',
        controllerAs: 'billingctrl'
      })
          .when('/ragister', {
        templateUrl: 'views/ragister.html',
        controller: 'billingctrl',
        controllerAs: 'billingctrl'
      })
          .when('/proposal', {
        templateUrl: 'views/proposal.html',
        controller: 'proposalCtrl',
        controllerAs: 'proposalCtrl'
      })
           .when('/pages', {
        templateUrl: 'views/pages.html',
        controller: 'pageCtrl',
        controllerAs: 'pageCtrl'
      })
          .when('/createstyle', {
        templateUrl: 'views/createstyle.html',
        controller: 'stylecreateCtrl',
        controllerAs: 'stylecreateCtrl'
      })
          .when('/styles', {
        templateUrl: 'views/styles.html',
        controller: 'styleCtrl',
        controllerAs: 'styleCtrl'
      })
        .when('/createpage', {
        templateUrl: 'views/createpage.html',
        controller: 'pagecreateCtrl',
        controllerAs: 'pagecreateCtrl'
      })
        .when('/template', {
        templateUrl: 'views/template.html',
        controller: 'templateCtrl',
        controllerAs: 'templateCtrl'
      })
        .when('/settingpage', {
        templateUrl: 'views/settingpage.html',
        controller: 'settingpageCtrl',
        controllerAs: 'settingpageCtrl',
        activetab: 'setting'

      })
        .when('/createproposal', {
        templateUrl: 'views/createproposal.html',
        controller: 'createproposalCtrl',
        controllerAs: 'createproposalCtrl'
      })
        .when('/preview', {
        templateUrl: 'views/preview.html',
        controller: 'proposalCtrl',
        controllerAs: 'proposalCtrl'
      })
         .when('/proposal-summery', {
        templateUrl: 'views/proposal-summery.html',
        controller: 'proposalsummeryCtrl',
        controllerAs: 'proposalsummeryCtrl',
        activetab: 'proposal'
      })
         .when('/email', {
        templateUrl: 'views/email.html',
        controller: 'proposalCtrl',
        controllerAs: 'proposalCtrl'
      })
         .when('/collabraters', {
        templateUrl: 'views/collabraters.html',
        controller: 'proposalCtrl',
        controllerAs: 'proposalCtrl'
      })

          .when('/proposalReview/:proposal_id/:updated_by/:tenancy_id/:version_id', {
        templateUrl: 'views/proposalReview.html',
        controller: 'customerreviewCtrl',
        controllerAs: 'customerreviewCtrl'
      })
            .when('/sign-upnew', {
        templateUrl: 'views/sign-upnew.html',
        controller: 'popupCtrl',
        controllerAs: 'popupCtrl'
      })
              .when('/socialsignupnew', {
        templateUrl: 'views/socialsignupnew.html',
        controller: 'popupCtrl',
        controllerAs: 'popupCtrl'
      })
            .when('/costprofitanalysis', {
        templateUrl: 'views/costprofitanalysis.html',
        controller: 'proposalsummeryCtrl',
        controllerAs: 'proposalsummeryCtrl'
      })

         .when('/forgot-password', {
        templateUrl: 'views/forgot-password.html',
        controller: 'popupCtrl',
        controllerAs: 'popupCtrl'
      })

         .when('/fabricdemo', {
        templateUrl: 'views/fabricdemo.html',
        controller: 'fabricCtrl',
        controllerAs: 'fabricCtrl'
      })
         .when('/demoproposal', {
        templateUrl: 'views/demoproposal.html',
        controller: 'fabricCtrl',
        controllerAs: 'fabricCtrl'
      })


         .when('/payment', {
        templateUrl: 'views/payment.html',
        controller: 'paymentCtrl',
        controllerAs: 'paymentCtrl'
      })
         .when('/searchresult', {
        templateUrl: 'views/searchresult.html',
        controller: 'searchCtrl',
        controllerAs: 'searchCtrl'
      })
         .when('/billing-history', {
        templateUrl: 'views/billing-history.html',
        controller: 'billingctrl',
        controllerAs: 'billingctrl'
      })

         .when('/headers', {
        templateUrl: 'views/headers.html',
        controller: 'loginCtrl',
        controllerAs: 'loginCtrl'
      })
         .when('/package-management', {
        templateUrl: 'views/package-management.html',
        controller: 'packagemgtctrl',
        controllerAs: 'packagemgtctrl'
      })

          .when('/discount-management', {
        templateUrl: 'views/discount-management.html',
        controller: 'discountmgtctrl',
        controllerAs: 'discountmgtctrl'
      })
           .when('/admin-login', {
        templateUrl: 'views/admin-login.html',
        controller: 'adminloginCtrl',
        controllerAs: 'adminloginCtrl'
      })

      .when('/user-profile', {
        templateUrl: 'views/user-profile.html',
        controller: 'userprofileCtrl',
        controllerAs: 'userprofileCtrl',
        activetab: 'userprofile'
      })

      .when('/users-listing', {
        templateUrl: 'views/users-listing.html',
        controller: 'discountmgtctrl',
        controllerAs: 'discountmgtctrl'
      })



      .otherwise({
        redirectTo: '/login'
      });


  })

  .config(['$resourceProvider', function($resourceProvider) {
    // Don't strip trailing slashes from calculated URLs
    // $resourceProvider.defaults.stripTrailingSlashes = false;
    $resourceProvider.defaults.useXDomai = true;
    $resourceProvider.defaults.withCredentials = true;
    // console.log($resourceProvider);
    // console.log( 'This is sample test' );
  }])


  .config(function(socialProvider){

    socialProvider.setLinkedInKey("819mzc7g75upnl");
    //socialProvider.setFbKey({appId: "YOUR FACEBOOK APP ID", apiVersion: "API VERSION"});
  })


  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
      localStorageServiceProvider.setPrefix('ls');
  }])

  .config(['GooglePlusProvider', function(GooglePlusProvider) {
     GooglePlusProvider.init({
        clientId: '412109683130-un11omgu3k46fj89k6dlv0a7ehn9sqpa.apps.googleusercontent.com',
        apiKey: 'AIzaSyCVGfT6dfG_cExOpD4sy7QbWYC-jFuhxDo'
     });
  }])
  .run(function($rootScope, $timeout, $document,$location) {    
    //console.log('starting run');

    // Timeout timer value
    var TimeOutTimerValue = 300000;

    // Start a timeout
    var TimeOut_Thread = $timeout(function(){ LogoutByTimer() } , TimeOutTimerValue);
    var bodyElement = angular.element($document);

    angular.forEach(['keydown', 'keyup', 'click', 'mousemove', 'DOMMouseScroll', 'mousewheel', 'mousedown', 'touchstart', 'touchmove', 'scroll', 'focus'], 
    function(EventName) {
         bodyElement.bind(EventName, function (e) { TimeOut_Resetter(e) });  
    });

    function LogoutByTimer(){
        console.log('Logout');
         $rootScope.isLogin = false;
                $rootScope.tenancyid = undefined;
                  $rootScope.userid =undefined;
                  $rootScope.username = undefined;
                  $rootScope.tenancy_code = undefined;
        $location.path( "/login" );

        ///////////////////////////////////////////////////
        /// redirect to another page(eg. Login.html) here
        ///////////////////////////////////////////////////
    }

    function TimeOut_Resetter(e){
        //console.log(' ' + e);

        /// Stop the pending timeout
        $timeout.cancel(TimeOut_Thread);

        /// Reset the timeout
        TimeOut_Thread = $timeout(function(){ LogoutByTimer() } , TimeOutTimerValue);
    }

})


    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
         //$httpProvider.defaults.withCredentials = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);


