'use strict';

/**
 * @ngdoc service
 * @name docubasic3App.updatepageservice
 * @description
 * # updatepageservice
 * Service in the docubasic3App.
 */

angular.module('docubasic3App').service('pagenameservice', ['$resource', 'apiUrl','$rootScope', function ($resource, apiUrl,$rootScope) {

 /*var userlist = [];

  var userdetail = function(user) {
      userlist.push(user);
  };

  var getuser = function(){
      return userlist;
  };

  return {
    userdetail: userdetail,
    getuser: getuser
  };*/
  var _xxx = {};
 //var name = {};

return {
    getXxx: function () {
        return _xxx;
        //return name;
    },
    setXxx: function (value) {
        _xxx = value;
      //  name = value;
    }

/* getname: function () {
        //return _xxx;
       return name;
    },
     setname: function (value) {
        //_xxx = value;
        name = value;
    }*/

};

	 }]);