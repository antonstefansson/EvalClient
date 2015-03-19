angular.module('EvalClient').controller('ResultsController', function ($scope, $location, $http, userInfo, EvalResources) {
	$scope.courses = {};
	

	EvalResources.getEvalAnwsers(userInfo.token).success(function(data){
		console.log(data);
		var temp = 0;
		var tempArr = data;

		for(var x = 0; 0 < data.length; ++x){
			var status = tempArr[x].Status;
			console.log(status);
			if(status === 'closed'){
				temp++;
			}
		}
		console.log(temp);
		$scope.courses = data;

	});


		
});