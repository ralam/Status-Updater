(function() {
  'use strict';

  var statusAppControllers = angular.module('statusAppControllers', []);

  statusAppControllers.controller('statusCtrl', function($scope) {
    $scope.statuses = [
      {'name': 'Madison',
      'imgUrl': './assets/images/James-Madison-small.jpg',
      'body': 'I\'m done being Secretary of State.'},
      {'name': 'Franklin',
      'imgUrl': './assets/images/BenFranklin-small.jpg',
      'body': 'Out flying kites.'},
      {'name': 'Franklin',
      'imgUrl': './assets/images/BenFranklin-small.jpg',
      'body': 'Being president is too much work.'},
      {'name': 'Washington',
      'imgUrl': './assets/images/George-Washington-small.jpg',
      'body': 'And the best.'},
      {'name': 'Washington',
      'imgUrl': './assets/images/George-Washington-small.jpg',
      'body': 'The first.'}
    ];

    $scope.updateStatus = function(content) {
      var status = {'name': $scope.$parent.profile.name, 'imgUrl': $scope.$parent.profile.imgUrl, 'body': content.body}
      $scope.statuses.unshift(status);
      $scope.status = null;
    };
  });

  statusAppControllers.controller('profileCtrl', function($scope) {
    $scope.profile = {
      'name': 'Jefferson',
      'imgUrl': './assets/images/Thomas-Jefferson-small.jpg'
    }
  });

  statusAppControllers.controller('friendCtrl', function($scope) {
    $scope.friends = [
      {'name': 'Washington', 'imgUrl': './assets/images/George-Washington-small.jpg'},
      {'name': 'Madison', 'imgUrl': './assets/images/James-Madison-small.jpg'},
      {'name': 'Franklin', 'imgUrl': './assets/images/BenFranklin-small.jpg'}
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
