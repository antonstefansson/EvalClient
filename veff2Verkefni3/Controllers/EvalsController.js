angular.module('EvalClient').controller('EvalsController', function ($scope, $location, $http, $routeParams) {
	console.log('hello tony');
	$scope.errorMessage = '';
	//$http.defaults.headers.common.Authorization = "Basic " + userInfo.token;
	$scope.Evals = $http.get('http://dispatch.ru.is/demo/api/v1/my/evaluations');
	$scope.currentUser = $routeParams.user;

	//EvalResources.getEvals().success(function(data) {
	//	$scope.Evals = data;
	//	console.log(data);
	//})

	$scope.addEval = function() {
		$location.path('/evaltemplate/:currentUser/');
	};
});