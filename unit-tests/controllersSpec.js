'use strict';

describe('statusAppControllers module', function() {

  beforeEach(module('statusApp'));

  describe('status controller', function(){

    it('should create "status" model with five statuses', inject(function($controller) {
      //spec body
      var scope = {},
          ctrl = $controller('statusCtrl', {$scope: scope})

      expect(scope.statuses.length).toBe(5);
    }));

    it('should add a new status', inject(function($controller) {
      //spec body
      var scope = {},
          ctrl = $controller('statusCtrl', {$scope: scope}),
          newStatus = {'name': 'Jefferson', 'body': 'I am the best.'}

      scope.$parent = {"profile": {
        "name": "Jefferson",
        "imgUrl": "test.jpg"
      }};
      scope.statusUpdate = {
        $setPristine: function() {},
        $setUntouched: function() {}
      };
      spyOn(scope.statusUpdate, '$setPristine');
      spyOn(scope.statusUpdate, '$setUntouched');
      scope.updateStatus(newStatus);

      expect(scope.statuses.length).toBe(6);
      expect(scope.statusUpdate.$setPristine).toHaveBeenCalled();
      expect(scope.statusUpdate.$setUntouched).toHaveBeenCalled();
      expect(scope.statuses[0].name).toEqual(newStatus.name);
      expect(scope.statuses[0].body).toEqual(newStatus.body);
    }));
  });

  describe('friend controller', function(){
    it('should create "friend" model with three friends', inject(function($controller) {
      var scope = {},
          ctrl = ctrl = $controller('friendCtrl', {$scope: scope})

      expect(scope.friends.length).toBe(3);
    }));
  });

  describe('tab controller', function(){
    it('should initialize with the active tab set to 0', inject(function($controller) {
      var scope = {},
          ctrl = ctrl = $controller('tabCtrl', {$scope: scope})

      expect(scope.tab).toEqual(0);
    }));

    it('should update the active tab properly', inject(function($controller) {
      var scope = {},
          ctrl = ctrl = $controller('tabCtrl', {$scope: scope})


      scope.setTab(1);
      expect(scope.tab).toEqual(1);
    }));

    it('should check the value of the active tab properly', inject(function($controller) {
      var scope = {},
          ctrl = ctrl = $controller('tabCtrl', {$scope: scope})

      scope.setTab(2);
      expect(scope.isSet(2)).toBe(true);
    }));
  });
});
