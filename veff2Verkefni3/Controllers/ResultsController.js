angular.module('EvalClient').controller('ResultsController', function ($scope, $location, $http, userInfo) {
	
	$scope.testFunc = function(){
		$http.get("http://dispatch.ru.is/h44/api/v1/evaluations/1").
			success(function (data) {
				console.log(data);
				//$location.path('/evals/' + data.User.Username + '/');
			}).
			error(function (data) {
				console.log(data);
				console.log("Error in getting results");
				//SOME ERROR HANDLING
			});
	}
});