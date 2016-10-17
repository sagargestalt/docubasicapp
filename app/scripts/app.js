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
    'ngDragDrop',   
    'ngContentEditable',   
    'angular-medium-editor',  
    'checklist-model',
           
      
      
  ])
  .config(function ($routeProvider,$locationProvider) {
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
        .when('/subscription', {
        templateUrl: 'views/subscription.html',
        controller: 'billingctrl',
        controllerAs: 'billingctrl'
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
          .when('/praposal', {
        templateUrl: 'views/praposal.html',
        controller: 'praposalCtrl',
        controllerAs: 'praposalCtrl'
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
        controllerAs: 'settingpageCtrl'
      })
        .when('/createpraposal', {
        templateUrl: 'views/createpraposal.html',
        controller: 'createpraposalCtrl',
        controllerAs: 'createpraposalCtrl'
      })
        .when('/preview', {
        templateUrl: 'views/preview.html',
        controller: 'praposalCtrl',
        controllerAs: 'praposalCtrl'
      })
         .when('/praposal-summery', {
        templateUrl: 'views/praposal-summery.html',
        controller: 'praposalsummeryCtrl',
        controllerAs: 'praposalsummeryCtrl'
      })
         .when('/email', {
        templateUrl: 'views/email.html',
        controller: 'praposalCtrl',
        controllerAs: 'praposalCtrl'
      })
         .when('/collabraters', {
        templateUrl: 'views/collabraters.html',
        controller: 'praposalCtrl',
        controllerAs: 'praposalCtrl'
      })

          .when('/proposalReview/:proposal_id/:updated_by', {
        templateUrl: 'views/proposalReview.html',
        controller: 'customerreviewCtrl',
        controllerAs: 'customerreviewCtrl'
      })
         
      .otherwise({
        redirectTo: '/'
      })
      

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

  
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
         //$httpProvider.defaults.withCredentials = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);
 
