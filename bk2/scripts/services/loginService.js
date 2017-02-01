'use strict';

/**
 * @ngdoc service
 * @name docubasic3App.loginService
 * @description
 * # loginService
 * Service in the docubasic3App.
 */
 angular.module('docubasic3App').factory('loginService',['$resource', 'apiUrl', function ($resource, apiUrl) {
  return{
  	tanancy: $resource( apiUrl.orgname, {} ),
  	orgsignup: $resource( apiUrl.signup, {} ),
  	tanancycode: $resource( apiUrl.tcode, {} ),
  	tanancycodecheck: $resource( apiUrl.tcodecheck, {} ),
  	login: $resource( apiUrl.admin, {} ),
  	setpassword:$resource( apiUrl.password, {} ),
  	frgtpassword:$resource( apiUrl.rememberpassword, {} ),
    checkuser:$resource( apiUrl.validuser, {} ),

  	
  	};
  

 }]);
    