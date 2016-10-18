'use strict';

/**
 * @ngdoc service
 * @name docubasic3App.userservice
 * @description
 * # userservice
 * Service in the docubasic3App.
 */

angular.module('docubasic3App').factory('userservice', ['$resource', 'apiUrl', function ($resource, apiUrl) {
      //return $resource( apiUrl.getGenericData, {} );
      return{
       getuserdetail:$resource(apiUrl.userdata, {id:'@id'} ,{
      			query: {method:'GET'}
			}),
       postuserdetail:$resource(apiUrl.userdatapost, {} ,{
      			save: {method:'POST'}
			}),
       updateuserdetail:$resource(apiUrl.userupdate, {id:'@id'} ,{
      			save: {method:'PUT'}
			}),
       deleteuserdetail:$resource(apiUrl.userdelete, {id:'@id'} ,{
      			save: {method:'DELETE'}
			})

       
    
        
   };

     }]);

