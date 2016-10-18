'use strict';

/**
 * @ngdoc service
 * @name docubasic3App.pageservice
 * @description
 * # pageservice
 * Service in the docubasic3App.
 */

angular.module('docubasic3App').factory('pageservice', ['$resource', 'apiUrl', function ($resource, apiUrl) {
      //return $resource( apiUrl.getGenericData, {} );
      return{
      updatepage:$resource(apiUrl.pageupdate, {id:'@id'} ,{
      			query: {method:'PUT',isArray:false}
            }),
               getpagedata: $resource( apiUrl.getpage, {} ),
            postpage: $resource( apiUrl.sendpagedata, {} ),
            settempdata:$resource( apiUrl.sendtempdata, {} ),
            gettempdata:$resource( apiUrl.tempdata, {} ),
            updatetempdata:$resource( apiUrl.tempdataupdate, {} ),

			
      // getpackages:$resource(apiUrl.packagedata, {} ,{
      //			query: {method:'GET',isArray:false}
		//	}),


    
        
   };

     }]);

