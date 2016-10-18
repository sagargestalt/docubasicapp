'use strict';

/**
 * @ngdoc service
 * @name docubasic3App.templateservice
 * @description
 * # templateservice
 * Service in the docubasic3App.
 */

angular.module('docubasic3App').factory('templateservice', ['$resource', 'apiUrl', function ($resource,apiUrl) {
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

