'use strict';

describe('Controller: game_of_life', function () {

  beforeEach(module('Game_of_life'));

  var controller;
  var scope;

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    controller = $controller('game_of_life', { $scope: scope });
  }));

  describe('On instance', function(){
    it('should set "controller_loaded" variable in scope', function() {
      expect(scope.controller_loaded).toContain('loaded');
    });

    it('should init to array kata', function() {
      expect(scope.kata.length).toEqual(4);
      
      expect(scope.kata[0][0]).toEqual(0);
      expect(scope.kata[0][1]).toEqual(0);
      expect(scope.kata[0][2]).toEqual(0);
      expect(scope.kata[0][3]).toEqual(0);
      expect(scope.kata[0][4]).toEqual(0);
      expect(scope.kata[0][5]).toEqual(0);
      expect(scope.kata[0][6]).toEqual(0);
      expect(scope.kata[0][7]).toEqual(0);

      expect(scope.kata[1][0]).toEqual(0);
      expect(scope.kata[1][1]).toEqual(0);
      expect(scope.kata[1][2]).toEqual(0);
      expect(scope.kata[1][3]).toEqual(0);
      expect(scope.kata[1][4]).toEqual(0);
      expect(scope.kata[1][5]).toEqual(0);
      expect(scope.kata[1][6]).toEqual(0);
      expect(scope.kata[1][7]).toEqual(0);

      expect(scope.kata[2][0]).toEqual(0);
      expect(scope.kata[2][1]).toEqual(0);
      expect(scope.kata[2][2]).toEqual(0);
      expect(scope.kata[2][3]).toEqual(0);
      expect(scope.kata[2][4]).toEqual(0);
      expect(scope.kata[2][5]).toEqual(0);
      expect(scope.kata[2][6]).toEqual(0);
      expect(scope.kata[2][7]).toEqual(0);

      expect(scope.kata[3][0]).toEqual(0);
      expect(scope.kata[3][1]).toEqual(0);
      expect(scope.kata[3][2]).toEqual(0);
      expect(scope.kata[3][3]).toEqual(0);
      expect(scope.kata[3][4]).toEqual(0);
      expect(scope.kata[3][5]).toEqual(0);
      expect(scope.kata[3][6]).toEqual(0);
      expect(scope.kata[3][7]).toEqual(0);
    });

    it('should change to status array kata', function() {
      expect(scope.buildKata()[0].length).toEqual(8);
      expect(scope.buildKata()[1].length).toEqual(8);
      expect(scope.buildKata()[2].length).toEqual(8);
      expect(scope.buildKata()[3].length).toEqual(8);

      expect(scope.buildKata().length).toEqual(4);

      expect(scope.buildKata()[0][0]).toEqual(0);
      expect(scope.buildKata()[0][1]).toEqual(0);
      expect(scope.buildKata()[0][2]).toEqual(0);
      expect(scope.buildKata()[0][3]).toEqual(0);
      expect(scope.buildKata()[0][4]).toEqual(0);
      expect(scope.buildKata()[0][5]).toEqual(0);
      expect(scope.buildKata()[0][6]).toEqual(0);
      expect(scope.buildKata()[0][7]).toEqual(0);

      expect(scope.buildKata()[1][0]).toEqual(0);
      expect(scope.buildKata()[1][1]).toEqual(0);
      expect(scope.buildKata()[1][2]).toEqual(0);
      expect(scope.buildKata()[1][3]).toEqual(0);
      expect(scope.buildKata()[1][4]).toEqual(1);
      expect(scope.buildKata()[1][5]).toEqual(0);
      expect(scope.buildKata()[1][6]).toEqual(0);
      expect(scope.buildKata()[1][7]).toEqual(0);

      expect(scope.buildKata()[2][0]).toEqual(0);
      expect(scope.buildKata()[2][1]).toEqual(0);
      expect(scope.buildKata()[2][2]).toEqual(0);
      expect(scope.buildKata()[2][3]).toEqual(1);
      expect(scope.buildKata()[2][4]).toEqual(1);
      expect(scope.buildKata()[2][5]).toEqual(0);
      expect(scope.buildKata()[2][6]).toEqual(0);
      expect(scope.buildKata()[2][7]).toEqual(0);

      expect(scope.buildKata()[3][0]).toEqual(0);
      expect(scope.buildKata()[3][1]).toEqual(0);
      expect(scope.buildKata()[3][2]).toEqual(0);
      expect(scope.buildKata()[3][3]).toEqual(0);
      expect(scope.buildKata()[3][4]).toEqual(0);
      expect(scope.buildKata()[3][5]).toEqual(0);
      expect(scope.buildKata()[3][6]).toEqual(0);
      expect(scope.buildKata()[3][7]).toEqual(0);
    });

    it('should start iteration to kata', function() {
      
      var kata = [
        [0,0,0,0,0,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,0,0,0,0,0]
      ];

      expect(scope.startIteration()).toEqual(kata);
    });

  });

  describe('when going to /game_of_life', function() {

    var route, location, rootScope, httpBackend;

    beforeEach(inject(function($route, $location, $rootScope, $httpBackend){
      route = $route;
      location = $location;
      rootScope = $rootScope;
      httpBackend = $httpBackend;

      httpBackend.when('GET', 'scripts/game_of_life/views/game_of_life.html').respond('<div></div>');
    }));

    afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    it('should use game_of_life.html and controller', function() {
      expect(route.current).toBeUndefined();

      location.path('/game_of_life');

      httpBackend.flush();

      expect(route.current.templateUrl).toBe('scripts/game_of_life/views/game_of_life.html');
      expect(route.current.controller).toBe('game_of_life');
    });
  });

});
