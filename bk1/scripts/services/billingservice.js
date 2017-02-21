'use strict';

/**
 * @ngdoc service
 * @name docubasic3App.billingservice
 * @description
 * # billingservice
 * Service in the docubasic3App.
 */

angular.module('docubasic3App').factory('billingservice', ['$resource', 'apiUrl', function ($resource, apiUrl) {
      //return $resource( apiUrl.getGenericData, {} );
      return{
       getbilldetail:$resource(apiUrl.billingdata, {id:'@id'} ,{
      			query: {method:'GET',isArray:false}
			}),
       getpackages:$resource(apiUrl.packagedata, {} ,{
      			query: {method:'GET',isArray:false}
			}),
       upgarde:$resource(apiUrl.packageupgrade, {} ,{
            post: {method:'POST',isArray:false}
      }),
       getbilldetailsearch:$resource(apiUrl.searchbilling, {} ,{
            post: {method:'POST',isArray:false}
      }),
       addpackages:$resource(apiUrl.packageadd, {} ,{
            post: {method:'POST',isArray:false}
      }),
       updatepackages:$resource(apiUrl.packageupdate, {id:'@id'} ,{
            update: {method:'PUT',isArray:false}
      }),
       deletepackage:$resource(apiUrl.packagedelete, {id:'@id'} ,{
            save: {method:'DELETE',isArray:false}
      }),
       cstprofit:$resource(apiUrl.cstprofit, {} ,{
            save: {method:'POST',isArray:false}
      }),
       gettenancys:$resource(apiUrl.alltenancy, {} ,{
           query: {method:'GET',isArray:false}
      }),
       adddiscount:$resource(apiUrl.disscountadd, {} ,{
            save: {method:'POST',isArray:false}
      }),
       getdiscountedtenancys:$resource(apiUrl.discountedtenancys, {} ,{
           query: {method:'GET',isArray:false}
      }),
       updatediscount:$resource(apiUrl.discountupdate, {id:'@id'} ,{
            update: {method:'PUT',isArray:false}
      }),
       deletediscount:$resource(apiUrl.discountdelete, {id:'@id'} ,{
            save: {method:'DELETE',isArray:false}
      }),
       inhousecst:$resource(apiUrl.costinhouse, {} ,{
            save: {method:'POST',isArray:false}
      }),

       getallusers:$resource(apiUrl.usersall, {} ,{
           query: {method:'GET',isArray:false}
      }),


    
        
   };

     }]);

