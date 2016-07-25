'use strict';

angular.module('Game_of_life')
.controller('game_of_life', function ($scope) {

  $scope.controller_loaded = 'Game of life loaded!';
  $scope.kata = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]
  ];

  $scope.buildKata = function() {
    angular.forEach($scope.kata, function(value, line) {
      angular.forEach(value, function(item, column) {
        if(line === 1 && column === 4) {
          $scope.kata[line][column] = 1;
        }

        if(line === 2 && (column === 3 || column === 4)) {
          $scope.kata[line][column] = 1;
        }

      });
    });

    return $scope.kata;
  };

  function getNeighboars(lineSearch, columnSearch, cell) {
    var minLine = lineSearch;
    if(lineSearch !== 0) {
      minLine--;
    }
    var maxLine = parseInt(lineSearch) + 1;
    
    var maxColumn = parseInt(columnSearch) + 1;
    var minColumn = parseInt(columnSearch);
    if(parseInt(columnSearch) !== 0) {
      minColumn = parseInt(columnSearch) - 1;
    }

    var live = 0;
    var count = 0;
    
    angular.forEach($scope.kata, function(value, line) {
      angular.forEach(value, function(item, column) {
        if(line <= maxLine && line >= minLine) {
          if(item === 1) {
            if(maxColumn === column || minColumn === column || column === columnSearch) {
              count = count + 1;
            }
          }
        }
      });
    });
    
    if(cell === 0) {
      if(count === 3) {
        live = 1;
      }
    } else {
      if(count <= 3 || count >= 2) {
        live = 1;
      }
    }

    return live;
  }

  $scope.startIteration = function() {
    $scope.buildKata();
    var kataCopy = angular.copy($scope.kata);

    angular.forEach(kataCopy, function(value, line) {
      angular.forEach(value, function(item, column) {
        var status = getNeighboars(line, column, item);
        kataCopy[line][column] = status;
      });
    });
    $scope.kata = kataCopy;
    return $scope.kata; 
  };

  $scope.buildKata();

})
.config(function ($routeProvider) {
  $routeProvider
  .when('/game_of_life', {
    templateUrl: 'scripts/game_of_life/views/game_of_life.html',
    controller: 'game_of_life'
  });
});
