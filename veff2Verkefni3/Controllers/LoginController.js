angular.module('EvalClient').controller('LoginController', function ($scope, $location, $http, userInfo) {
	$scope.errorMessage = '';
	$scope.user = '';
	$scope.pass = '';

	$scope.login = function() {
		var info = {user: $scope.user, pass: $scope.pass};

		if($scope.user === '') {
			$scope.errorMessage = 'Please insert a user name';
		} else {
			$http.post("http://dispatch.ru.is/h44/api/v1/login", info).
				success(function (data) {
					console.log(data);
					$scope.templates = data;
					userInfo.name    = data.User.Username;
					userInfo.token   = data.Token;
					userInfo.role    = data.User.Role;
					console.log(userInfo);
					$location.path('/evals/' + data.User.Username + '/');
				}).
				error(function (data) {
					console.log(data);
					console.log("Error in getting login template");
					//SOME ERROR HANDLING
				});
		}
	};
});