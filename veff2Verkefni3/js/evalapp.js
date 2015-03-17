var EvalClient = angular.module('EvalClient', ['ngRoute']);
angular.module('EvalClient').constant('SERVER_URL', 'http://dispatch.ru.is/h44/api/v1/');
EvalClient.config (
	function ($routeProvider) {
	$routeProvider
		.when('/login', { templateUrl: 'Views/login.html', controller: 'LoginController'})
		.when('/evals/:user/', {templateUrl: 'Views/evals.html', controller: 'EvalsController'})
		//.when('/eval/:user/:evaluation/', {templateUrl: 'Views/evaluation.html', controller 'EvaluationController'})
		//.when('/evaltemplate/:user/', {templateUrl: 'Views/evaltemplate.html', controller 'EvalTemplateController'})
		.otherwise({
			redirectTo: '/login'
		});
	}
);