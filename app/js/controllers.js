(function() {
  'use strict';

  var statusAppControllers = angular.module('statusAppControllers', []);

  statusAppControllers.controller('statusCtrl', function($scope) {
    $scope.statuses = [
      {'name': 'Madison',
      'body': 'Done being Secretary of State.'},
      {'name': 'Franklin',
      'body': 'Out flying kites'},
      {'name': 'Franklin',
      'body': 'Being president is too much work.'},
      {'name': 'Washington',
      'body': 'And the best.'},
      {'name': 'Washington',
      'body': 'The first.'}
    ];

    $scope.updateStatus = function(content) {
      var status = {'name': 'Jefferson', 'body': content.body}
      $scope.statuses.unshift(status);
      $scope.status = null;
    };
  });

  statusAppControllers.controller('friendCtrl', function($scope) {
    $scope.friends = [
      {'name': 'Washington'},
      {'name': 'Madison'},
      {'name': 'Franklin'}
    ];
  });

  statusAppControllers.controller('tabCtrl', function($scope) {
    $scope.tab = 0;

    $scope.setTab = function (setTab) {
      $scope.tab = setTab;
    };

    $scope.isSet = function (val) {
      return $scope.tab === val;
    };
  });
})();
