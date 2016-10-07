'use strict';

/**
 * @ngdoc service
 * @name docubasic3App.SocialLoginservice
 * @description
 * # SocialLoginservice
 * Service in the docubasic3App.
 */

angular.module('docubasic3App').service('SocialLoginservice', ['$resource', 'apiUrl','$rootScope', function ($resource, apiUrl,$rootScope) {

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
  var name = {};

return {
    getXxx: function () {
        return _xxx;
        //return name;
    },
    setXxx: function (data) {
        _xxx = data;
      //  name = value;
    },

 getname: function () {
        //return _xxx;
       return name;
    },
     setname: function (value) {
        //_xxx = value;
        name = value;
    }

};

	 }]);