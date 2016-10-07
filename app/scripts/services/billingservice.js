'use strict';

/**
 * @ngdoc service
 * @name docubasic3App.billingservice
 * @description
 * # billingservice
 * Service in the docubasic3App.
 */

angular.module('docubasic3App').factory('billingservice', ['$resource', 'apiUrl','$rootScope', function ($resource, apiUrl,$rootScope) {
      //return $resource( apiUrl.getGenericData, {} );
      return{
       getbilldetail:$resource(apiUrl.billingdata, {id:'@id'} ,{
      			query: {method:'GET',isArray:false}
			}),
       getpackages:$resource(apiUrl.packagedata, {} ,{
      			query: {method:'GET',isArray:false}
			}),


    
        
   };

     }]);

