'use strict';

/**
 * @ngdoc service
 * @name docubasic3App.styleservice
 * @description
 * # styleservice
 * Service in the docubasic3App.
 */

angular.module('docubasic3App').factory('styleservice', ['$resource', 'apiUrl','$rootScope', function ($resource, apiUrl,$rootScope) {
      //return $resource( apiUrl.getGenericData, {} );
      return{
      styleupdate:$resource(apiUrl.updatestyle, {id:'@id'} ,{
      			query: {method:'PUT',isArray:false}
            }),
               getstyledata: $resource( apiUrl.getstyles, {} ),
            poststyledata: $resource( apiUrl.sendstyledata, {} ),

			
      // getpackages:$resource(apiUrl.packagedata, {} ,{
      //			query: {method:'GET',isArray:false}
		//	}),


    
        
   };

     }]);

