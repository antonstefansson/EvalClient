angular.module('EvalClient').controller('EvalsController', function ($scope, $location, $http, EvalResources, userInfo, evalInfo) {
	$scope.errorMessage = '';
	$scope.role = userInfo.role;
	EvalResources.getEvals(userInfo.token).success(function(data) {
		console.log(data);
		$scope.Evals = data;

		console.log($scope.Evals);
	});
	$scope.takeEval = function (currEval) {
		EvalResources.getEvalByID(userInfo.token, currEval.CourseID, currEval.Semester, currEval.ID).success(function (data) {
			evalInfo.CourseEvaluationDTO = data;
			$location.path('/eval/' + userInfo.name + '/' + currEval.CourseID + '/');
		});
	};

	$scope.addEval = function () {
		$location.path('/neweval/' + userInfo.name + '/');
	};
	$scope.addTemplate = function () {
		$location.path('/evaltemplate/' + userInfo.name + '/');
	};
});