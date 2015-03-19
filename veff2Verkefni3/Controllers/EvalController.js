angular.module('EvalClient').controller('EvalController', function ($scope, $location, $http, evalInfo) {
	$scope.errorMessage = '';
	$scope.language = false;
	$scope.courseQuestions = evalInfo.CourseEvaluationDTO;
	console.log(evalInfo);
	console.log('hello');

});