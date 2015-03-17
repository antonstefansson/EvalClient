var EvalClient = angular.module('EvalClient', ['ngRoute']);

EvalClient.config (
	function ($routeProvider) {
	$routeProvider
		.when('/login', { templateUrl: 'Views/login.html', controller: 'LoginController'})
		.when('/evals/:user/', {templateUrl: 'Views/evals.html', controller 'EvalsController'})
		//.when('/evaluation/:user/:evaluation/', {templateUrl: 'Views/evaluation.html', controller 'EvaluationController'})
		//.when('/evaltemplate/:user/', {templateUrl: 'Views/evaltemplate.html', controller 'EvalTemplateController'})
		.otherwise({
			redirectTo: '/login'
		});
	}
);

EvalClient.controller('LoginController', function ($scope, $location, $http) {
	$scope.errorMessage = '';
	$scope.user = '';
	$scope.pass = '';

	$scope.login = function() {
		console.log("hellos");
		var info = {user: $scope.user, pass: $scope.pass};

		if($scope.user === '') {
			$scope.errorMessage = 'Please choose a user name'
		} else {
			$http.post("http://dispatch.ru.is/h44/api/v1/login", info).
				success(function (data) {
					console.log(data);
					$scope.templates = data;
					$location.path('/evals/' + data.Username + '/')
				}).
				error(function (data) {
					console.log(data);
					console.log("Error in getting login template");
					//SOME ERROR HANDLEING
				});
		}
	};
});