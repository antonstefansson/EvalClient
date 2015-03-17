var EvalClient = angular.module('EvalClient', ['ngRoute']);

EvalClient.config (
	function ($routeProvider) {
	$routeProvider
		.when('/login', { templateUrl: 'Views/login.html', controller: 'LoginController'})
		.when('/evals/:user/', {templateUrl: 'Views/evals.html', controller 'EvalsController'})
		.when('/evaluation/:user/:evaluation/', {templateUrl: 'Views/evaluation.html', controller 'EvaluationController'})
		.when('/evaltemplate/:user/', {templateUrl: 'Views/evaltemplate.html', controller 'EvalTemplateController'})
		.otherwise({
			redirectTo: '/login'
		});
}
);