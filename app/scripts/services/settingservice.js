'use strict';

/**
 * @ngdoc service
 * @name docubasic3App.settingservice
 * @description
 * # addtestDropdown
 * Service in the docubasic3App.
 */

angular.module('docubasic3App').factory('settingservice', ['$resource', 'apiUrl',function ($resource, apiUrl) {
      //return $resource( apiUrl.getGenericData, {} );
      return{
       country:$resource(apiUrl.nation, {},{
         query: {method:'GET', params: {} , isArray:false}
    
        }),

       getpraposaldata:$resource(apiUrl.praposalcountdata, {id:'@id'} ,{
            query: {method:'GET'}
      }),
        getpraposalwon:$resource(apiUrl.praposalwondata, {id:'@id'} ,{
            query: {method:'GET'}
      }),

         getpraposalloss:$resource(apiUrl.praposallossdata, {id:'@id'} ,{
            query: {method:'GET'}
      }),
        



        
       
    currancy:$resource(apiUrl.states, {} ,{
    	get: {method:'GET', params: {} , isArray:false}


    }),
     task:$resource(apiUrl.tasks, {} ,{
    	save: {method:'POST', params: {} , isArray:false}


    }),
    company:$resource(apiUrl.companyinfo, {} ,{
    	save: {method:'POST', params: {} , isArray:false}


    }),

    address:$resource(apiUrl.setaddress, {} ,{
    	save: {method:'POST', params: {} , isArray:false}


    }),
    chngelogo:$resource(apiUrl.logo, {} ,{
    	save: {method:'POST', params: {} , isArray:false}

   }),
    currancyes:$resource(apiUrl.changecurrancy, {} ,{
    	save: {method:'POST', params: {} , isArray:false}

   }),
    tasks:$resource(apiUrl.addtask, {} ,{
    	save: {method:'POST', params: {} , isArray:false}

   }),
    allpriceblock:$resource(apiUrl.showprice, {} ,{
    	save: {method:'POST', params: {} , isArray:false}

   }),
    vendors:$resource(apiUrl.showvendors, {} ,{
    	save: {method:'POST', params: {} , isArray:false}

   }),
    pricepost:$resource(apiUrl.addprice, {} ,{
    	save: {method:'POST', params: {} , isArray:false}

   }),
    getresource:$resource(apiUrl.resource, {} ,{
    	save: {method:'POST', params: {} , isArray:false}
}),
    postresource:$resource(apiUrl.addresource, {} ,{
    	save: {method:'POST', params: {} , isArray:false}
}),
    advendor:$resource(apiUrl.vendorsadd, {} ,{
    	save: {method:'POST', params: {} , isArray:false}
}),
    addclient:$resource(apiUrl.client, {} ,{
    	save: {method:'POST', params: {} , isArray:false}
}),
    getclient:$resource(apiUrl.clientget, {} ,{
    	save: {method:'POST', params: {} , isArray:false}
}),
    getptask:$resource(apiUrl.projecttask, {} ,{
      save: {method:'POST', params: {} , isArray:false}
}),

  postptask:$resource(apiUrl.projecttaskpost, {} ,{
      save: {method:'POST', params: {} , isArray:false}
}),
  getdiscount:$resource(apiUrl.getdiscontdata, {} ,{
      save: {method:'POST', params: {} , isArray:false}
}),
  postdiscount:$resource(apiUrl.postdiscontdata, {} ,{
      save: {method:'POST', params: {} , isArray:false}
}),
  gettax:$resource(apiUrl.gettaxdata, {} ,{
      save: {method:'POST', params: {} , isArray:false}
}),
  posttax:$resource(apiUrl.posttaxdata, {} ,{
      save: {method:'POST', params: {} , isArray:false}
}),

  postnote:$resource(apiUrl.postnotedata, {} ,{
      save: {method:'POST', params: {} , isArray:false}
}),
  getnote:$resource(apiUrl.getnotedata, {} ,{
      save: {method:'POST', params: {} , isArray:false}
}),
  gettodos:$resource(apiUrl.getodosdata, {} ,{
      save: {method:'POST', params: {} , isArray:false}
}),
  addtodos:$resource(apiUrl.addtodosdata, {} ,{
      save: {method:'POST', params: {} , isArray:false}
}),
  getadmins:$resource(apiUrl.admindata, {} ,{
      save: {method:'POST', params: {} , isArray:false}
}),
  saveadmin:$resource(apiUrl.changeadmin, {} ,{
      save: {method:'POST', params: {} , isArray:false}
}),



//update services//priceblocks/:id
updateprice:$resource(apiUrl.priceblockupdate, {id:'@id'} ,{
      update: {method:'PUT',isArray:false}
}),
updatevendor:$resource(apiUrl.updatevendordata, {id:'@id'} ,{
      update: {method:'PUT',isArray:false}
}),
updateclient:$resource(apiUrl.updateclientdata, {id:'@id'} ,{
      update: {method:'PUT',isArray:false}
}),
updateprojecttask:$resource(apiUrl.updateproject, {} ,{
      update: {method:'POST',isArray:false}
}),
updateresource:$resource(apiUrl.updateresourcedata, {id:'@id'} ,{
      update: {method:'PUT',isArray:false}
}),
updatetask:$resource(apiUrl.updatetaskdata, {} ,{
      save: {method:'POST',isArray:false}
}),
updatediscount:$resource(apiUrl.updatediscountdata, {id:'@id'} ,{
      update: {method:'PUT',isArray:false}
}),
updatetax:$resource(apiUrl.updatetaxdata, {id:'@id'} ,{
      update: {method:'PUT',isArray:false}
}),
updatenote:$resource(apiUrl.updatenotedata, {id:'@id'} ,{
      update: {method:'PUT',isArray:false}
}),
chekedtask:$resource(apiUrl.completetask, {id:'@id'} ,{
      update: {method:'PUT',isArray:false}
}),
alltaskcomplete:$resource(apiUrl.completealltask, {id:'@id'} ,{
      update: {method:'PUT',isArray:false}
}),
incompletetask:$resource(apiUrl.opentask, {id:'@id'} ,{
      update: {method:'PUT',isArray:false}
}),
updatetodos:$resource(apiUrl.uptask, {id:'@id'} ,{
      update: {method:'PUT',isArray:false}
}),

//delete services//
deletetask:$resource(apiUrl.removetask, {} ,{
      save: {method:'POST', params: {} , isArray:false}
}),
deleteresource:$resource(apiUrl.deleteresourcedata, {id:'@id'} ,{
      save: {method:'DELETE',isArray:false}
}),
deletevendor:$resource(apiUrl.deletevendordata, {id:'@id'} ,{
      save: {method:'DELETE',isArray:false}
}),
deleteclient:$resource(apiUrl.deleteclientdata, {id:'@id'} ,{
      save: {method:'DELETE',isArray:false}
}),
deleteproject:$resource(apiUrl.removeproject, {} ,{
      save: {method:'POST', params: {} , isArray:false}
}),
deleteprice:$resource(apiUrl.deletepricedata, {id:'@id'} ,{
      save: {method:'DELETE',isArray:false}
}),
deletediscount:$resource(apiUrl.deletediscountdata, {id:'@id'} ,{
      save: {method:'DELETE',isArray:false}
}),
deletetax:$resource(apiUrl.deletetaxdata, {id:'@id'} ,{
      save: {method:'DELETE',isArray:false}
}),
deletenote:$resource(apiUrl.removenote, {} ,{
      save: {method:'POST', params: {} , isArray:false}
})
  
};

        }]);