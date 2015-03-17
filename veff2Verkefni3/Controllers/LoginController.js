angular.module('EvalClient').controller('LoginController', function($scope) {
	$scope.errorMessage = '';
	$scope.user = '';


	$scope.login = function() {
		if($scope.user ==='') {
			$scope.errorMessage = 'Please choose a user name'
		} else {

		}
	};
});