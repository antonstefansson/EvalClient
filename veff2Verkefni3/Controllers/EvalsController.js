angular.module('EvalClient').controller('EvalsController', function ($scope, $location, $http, EvalResources, userInfo, evalInfo) {
	$scope.errorMessage = '';
	$scope.Evals = [];
	EvalResources.getEvals(userInfo.token).success(function(data) {
		$scope.Evals = data;
	});

	$scope.takeEval = function (currEval) {
		EvalResources.getEvalByID(userInfo.token, currEval.CourseID, currEval.Semester, currEval.ID).success(function (data) {
			evalInfo.CourseEvaluationDTO = data;
			$location.path('/eval/' + userInfo.name + '/' + currEval.CourseID + '/');
		});
	};

	$scope.addEval = function () {
		$location.path('/evaltemplate/:userInfo.name/');
	};
});