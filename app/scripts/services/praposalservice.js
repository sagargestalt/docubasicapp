'use strict';

/**
 * @ngdoc service
 * @name docubasic3App.praposalservice
 * @description
 * # praposalservice
 * Service in the docubasic3App.
 */

angular.module('docubasic3App').factory('praposalservice', ['$resource', 'apiUrl','$rootScope', function ($resource, apiUrl,$rootScope) {
      //return $resource( apiUrl.getGenericData, {} );
      return{
       //getpagedata:$resource(apiUrl.getpage, {id:'@id'} ,{
      			//query: {method:'GET',isArray:false}
            //}),
            getpagedata: $resource( apiUrl.getpage, {} ),
            pagedata: $resource( apiUrl.sendpagedata, {} ),
            createpraposal:$resource( apiUrl.praposalcreate, {} ),
            getpagelist:$resource( apiUrl.pagelist, {} ),
            savepage:$resource( apiUrl.pagesave, {} ),

			//praposal summery//
            praposalsummeryget: $resource( apiUrl.getpraposales, {} ),
      


    
        
   };

     }]);

