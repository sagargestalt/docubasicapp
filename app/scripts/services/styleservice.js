'use strict';

/**
 * @ngdoc service
 * @name docubasic3App.styleservice
 * @description
 * # styleservice
 * Service in the docubasic3App.
 */

angular.module('docubasic3App').factory('styleservice', ['$resource', 'apiUrl', function ($resource, apiUrl) {
      //return $resource( apiUrl.getGenericData, {} );
      return{
      styleupdate:$resource(apiUrl.updatestyle, {id:'@id'} ,{
      			query: {method:'PUT',isArray:false}
            }),
               getstyledata: $resource( apiUrl.getstyles, {} ),
            poststyledata: $resource( apiUrl.sendstyledata, {} ),

             getstyledetail:$resource(apiUrl.stylecontent, {id:'@id'} ,{
               query: {method:'GET'}
         }),

             getpagedetail:$resource(apiUrl.updatepagecontent, {id:'@id'} ,{
               query: {method:'GET'}
         }),

              addpage:$resource(apiUrl.proposalpagadd, {} ,{
               query: {method:'POST'}
         }),


			
      // getpackages:$resource(apiUrl.packagedata, {} ,{
      //			query: {method:'GET',isArray:false}
		//	}),


    
        
   };

     }]);

