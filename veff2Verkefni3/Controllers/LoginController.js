angular.module('EvalClient').controller('LoginController', function ($scope, $location, $http) {
	$scope.errorMessage = '';
	$scope.user = '';
	$scope.pass = '';

	$scope.login = function() {
		console.log("hello");
		if($scope.user === '') {
			$scope.errorMessage = 'Please choose a user name'
		} else {
			$http.get("dispatch.ru.is/h44/api/v1/login")
				.success(function (data) {
					console.log(data);
					$scope.templates = data;
				})
				.error(function (data) {
					console.log("Error in getting login template");
					//SOME ERROR HANDLEING
				});
		}
	};
});