angular.module('EvalClient').controller('EvalsController', function ($scope, $location, $http, EvalResources, userInfo, evalInfo) {
	$scope.errorMessage = '';
	$scope.role = userInfo.role;
	var allEvals;
	EvalResources.getEvals(userInfo.token).success(function(data) {
		console.log(data);

		var now = new Date();
		var allEvals = data;
		var openEvals = [];

		for(var i = 0; i < allEvals.length; i++) {
			var endDate = new Date(allEvals[i].EndDate);
			if(endDate.getTime() > now.getTime()) {
				openEvals.push(allEvals[i]);
			}
		}
		$scope.Evals = openEvals;
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