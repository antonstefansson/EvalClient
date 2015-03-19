angular.module('EvalClient').factory('EvalResources', function ($http, SERVER_URL, userInfo) {
	return {
		getEvals: function (token) {
			$http.defaults.headers.common.Authorization = "Basic " + userInfo.token;
			return $http.get( SERVER_URL + '/evaluations');
		},
		getEvalByID: function (token, courseName, semesterName, evalID ) {
			$http.defaults.headers.common.Authorization = "Basic " + userInfo.token;
			return $http.get( SERVER_URL + 'courses/' + courseName + '/' + semesterName + '/evaluations/' + evalID );
		}
	};
});