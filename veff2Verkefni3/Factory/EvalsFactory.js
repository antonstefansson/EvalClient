angular.module('EvalClient').factory('EvalResources', function ($http, SERVER_URL) {
	return {
		getEvals: function () {
			return $http.get({ url: SERVER_URL + 'my/evaluations'});
		},
		getEvalByID: function (courseID, semesterID, evalID) {
			return $http.get({ url: SERVER_URL + 'courses/:courseID/:semesterID/evaluations/:evalID'});
		}
	};
});