'use strict';

/**
 * @ngdoc service
 * @name docubasic3App.apiUrl
 * @description
 * # apiUrl
 * Service in the docubasic3App.
 */
angular.module('docubasic3App').constant('apiUrl', function () {
	var BASE_URL = 'api/v1/',
       	apiRoot = $('#apiRoot').attr('href') ? $('#apiRoot').attr('href') : '';

   	BASE_URL = apiRoot + BASE_URL;
	
return {
      'orgname': BASE_URL + 'autocode',
  	'signup':BASE_URL + 'register',
  	'tcode':BASE_URL + 'chkcode',
      'tcodecheck':BASE_URL + 'autocodeexist',
      'admin':BASE_URL + 'auth',
      'nation':BASE_URL + 'countries',
      'states':BASE_URL + 'currencies',
      'tasks':BASE_URL + 'displayCategory',
      'companyinfo':BASE_URL + 'companyinfo',
      'setaddress':BASE_URL + 'companyaddress',
      'logo':BASE_URL + 'companylogo',
      'changecurrancy':BASE_URL + 'companycurrency',
      'addtask':BASE_URL + 'taskCategory',
      'showprice':BASE_URL + 'allpriceblock',
      'showvendors':BASE_URL + 'allvendors',
      'addprice':BASE_URL + 'priceblocks',
      'password':BASE_URL + 'passwordauth',
      'resource':BASE_URL + 'allresources',
      'addresource':BASE_URL + 'resources',
      'rememberpassword':BASE_URL + 'forget',
      'vendorsadd':BASE_URL + 'vendors',
      'client':BASE_URL + 'customers',
      'clientget':BASE_URL + 'allcustomers',
      'projecttask':BASE_URL + 'allTask',
      'projecttaskpost':BASE_URL + 'projectTask',
      'getdiscontdata':BASE_URL + 'alldiscountblock',
      'postdiscontdata':BASE_URL + 'discountblocks',
      'gettaxdata':BASE_URL + 'alltaxblock',
      'posttaxdata':BASE_URL +'taxblocks',
      'postnotedata':BASE_URL +'notes',
      'getnotedata':BASE_URL +'allnote',
      'userdata':BASE_URL +'users/all/:id',
      'billingdata':BASE_URL +'billing/:id',
      'packagedata':BASE_URL +'packages',
      'userdatapost':BASE_URL +'users',
      'getodosdata':BASE_URL +'alltodos',
      'addtodosdata':BASE_URL +'todos',
      'admindata':BASE_URL +'accountadmin',
      'changeadmin':BASE_URL +'companyadmin',
      'praposalcountdata':BASE_URL +'proposal/:id',
      'validuser':BASE_URL +'chkemail',

      //update service//
      'updatepricedata':BASE_URL +'priceblocks/:id',
      'priceblockupdate':BASE_URL +'priceblocks/:id',
      'updatevendordata':BASE_URL +'vendors/:id',
      'updateproject':BASE_URL +'updateProject',
      'updateclientdata':BASE_URL +'customers/:id',
      'updateresourcedata':BASE_URL +'resources/:id',
      'updatetaskdata':BASE_URL +'updateCategory',
      'updatediscountdata':BASE_URL +'discountblocks/:id',
      'updatetaxdata':BASE_URL +'taxblocks/:id',
      'updatenotedata':BASE_URL +'notes/:id',
      'completetask':BASE_URL +'todos/complete/:id',
      'userupdate':BASE_URL +'users/:id',
      'userdelete':BASE_URL +'users/:id',
      'completealltask':BASE_URL +'todos/complete/:id',
      'opentask':BASE_URL +'todos/active/:id',
      'uptask':BASE_URL +'todos/:id',

      //delete service//
      'removetask':BASE_URL +'deleteCategory',
      'removeproject':BASE_URL +'deleteProject',
      'removenote':BASE_URL +'deletent',
      'deleteresourcedata':BASE_URL +'resources/:id',
      'deletevendordata':BASE_URL +'vendors/:id',
      'deleteclientdata':BASE_URL +'customers/:id',
      'deletepricedata':BASE_URL +'priceblocks/:id',
      'deletediscountdata':BASE_URL +'discountblocks/:id',
      'deletetaxdata':BASE_URL +'taxblocks/:id',

      'sendpagedata':BASE_URL +'pages',
      'getpage':BASE_URL +'allpages',
      'getstyles':BASE_URL +'allstyles',
      'sendstyledata':BASE_URL +'style',
      'updatestyle':BASE_URL +'style/:id',
      'sendpagedata':BASE_URL +'pages',
      'getpage':BASE_URL +'allpages',
      'pageupdate':BASE_URL +'pages/:id',
      'sendtempdata':BASE_URL +'templates',
      'tempdata':BASE_URL +'alltemplates',
      'tempdataupdate':BASE_URL +'editTemplates',
      'praposalcreate':BASE_URL +'createProposal',
      'pagelist':BASE_URL +'selectedTemplates',
      'pagesave':BASE_URL +'saveContent',
      'getpraposales':BASE_URL +'allproposals',
   	};
}());