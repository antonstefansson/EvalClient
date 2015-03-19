var EvalClient = angular.module('EvalClient', ['ngRoute']);
angular.module('EvalClient').value("userInfo", {name:  undefined,
												role:  undefined,
												token: undefined});
angular.module('EvalClient').value('evalInfo', {
	CourseEvaluationDTO: undefined
});
angular.module('EvalClient').constant('SERVER_URL', 'http://dispatch.ru.is/demo/api/v1/');
angular.module('EvalClient').constant('ACCESS', '$http.defaults.headers.common.Authorization = "Basic " + userInfo.token');
EvalClient.config (
	function ($routeProvider) {
	$routeProvider
		.when('/login', { templateUrl: 'Views/login.html', controller: 'LoginController'})
		.when('/evals/:user/', {templateUrl: 'Views/evals.html', controller: 'EvalsController'})
		.when('/eval/:user/:eval/', {templateUrl: 'Views/eval.html', controller: 'EvalController'})
		//.when(/*'/evaltemplate/:user/'*/'/createNewEval', {templateUrl: 'Views/evalTemplate.html', controller: 'EvalTemplateController'})
		//.when('/eval/:user/:evaluation/', {templateUrl: 'Views/evaluation.html', controller 'EvaluationController'})
		//.when('/evaltemplate/:user/', {templateUrl: 'Views/evalTemplate.html', controller: 'EvalTemplateController'})
		.otherwise({
			redirectTo: '/login'
		});
	}
);
