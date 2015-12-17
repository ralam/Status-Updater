(function(){
  'use strict';

  // Declare app level module which depends on views, and components
  var statusApp = angular.module('statusApp', [
    'ngRoute',
    'statusAppControllers'
  ])

  statusApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/index'});
  }]);

  statusApp.directive('navTabs', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/nav-tabs.html'
    };
  });

  statusApp.directive('statuses', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/statuses.html'
    };
  });

  statusApp.directive('friendsList', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/friends-list.html'
    };
  });

  statusApp.directive('profile', function() {
    return{
      restrict: 'E',
      templateUrl: './templates/profile.html'
    };
  });
})();
