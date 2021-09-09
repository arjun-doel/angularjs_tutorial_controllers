var MainController = function($scope, $http) {

  var onUserComplete = function(response){
    $scope.user = response.data;
    console.log($scope.user)
  }

  var onError = function(response){
    $scope.error = "oops could not fetch data!"
  }

  $http.get('https://api.github.com/users/robconery')
    .then(onUserComplete, onError)

  $scope.message = "Hello Angular";
}