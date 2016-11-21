'use strict';

/**
 * @ngdoc service
 * @name docubasic3App.praposalservice
 * @description
 * # praposalservice
 * Service in the docubasic3App.
 */

angular.module('docubasic3App').factory('praposalservice', ['$resource', 'apiUrl', function ($resource, apiUrl) {
      //return $resource( apiUrl.getGenericData, {} );
      return{
            updatename:$resource(apiUrl.changepname, {id:'@id'} ,{
      			query: {method:'PUT',isArray:false}
            }),
            getpagedata: $resource( apiUrl.getpage, {} ),
            pagedata: $resource( apiUrl.sendpagedata, {} ),
            createpraposal:$resource( apiUrl.praposalcreate, {} ),
            getpagelist:$resource( apiUrl.pagelist, {} ),
            savepage:$resource( apiUrl.pagesave, {} ),
            downloadpraposal:$resource( apiUrl.downloadpage, {} ),
            deletepraposal:$resource( apiUrl.praposaldelete, {} ),
            sendmail:$resource( apiUrl.mailsend, {} ),
            getcollabraters:$resource( apiUrl.getcollab, {} ),
            clonepraposal:$resource( apiUrl.clone, {} ),
            readaccessapply:$resource( apiUrl.getreadaccess, {} ),
            praposalreview:$resource( apiUrl.reviewproposal, {} ),
            praposalreject:$resource( apiUrl.rejectproposal, {} ),
            uploadsign:$resource( apiUrl.signupload, {} ),
            praposalapprove:$resource( apiUrl.approvepraposal, {} ),
            getpagecontent:$resource( apiUrl.pagecontent, {} ),
          

			//praposal summery//
            praposalsummeryget: $resource( apiUrl.getpraposales, {} ),


            //image upload//
            getiamage:$resource(apiUrl.getiamgesdata, {} ),
            upiamage: $resource( apiUrl.imageup, {} ),
            getproposaltask:$resource( apiUrl.proposaltask, {} ),
            costprofit:$resource( apiUrl.profitanalysys, {} ),


      


    
        
   };

     }]);

