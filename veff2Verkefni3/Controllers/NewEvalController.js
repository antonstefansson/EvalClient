angular.module('EvalClient').controller('NewEvalController', function ($scope, $location, $http, userInfo) {

	$scope.errorMessage = "";
	$scope.templates;
	var newEvaluationDTO;
	var currID;

	if(userInfo.role != "admin") {
		$location.path('login');
		return;
	}

	$http.defaults.headers.common.Authorization = "Basic " + userInfo.token;
	$http.get("http://dispatch.ru.is/h44/api/v1/evaluationtemplates")
		.success( function (data) {
			console.log(data);
			$scope.templates = data;
		})
		.error( function (data) {
			console.log("there was a error in geting the Evaltemplates");
	});

	$scope.loadTemplate = function (ID) {
		var template;
		currID = ID;
		//get the tamplet that was clicked
		$http.defaults.headers.common.Authorization = "Basic " + userInfo.token;
		$http.get("http://dispatch.ru.is/h44/api/v1/evaluationtemplates/" + ID)
			.success(function (data) {
				template = data;
				console.log("geting the template was a success");
			})
			.error( function (data) {
				console.log("ERROR: failed to get template id: " + ID);
				console.log(data);
		});

        $("#myModal").modal('show');
	};

	$scope.addTemplate = function () {
		//add the selected template to evalulations
		var startDate = $scope.startD;
		var endDate   = $scope.endD;
		startDate = startDate.split(".");
		endDate   = endDate.split(".");

		newEvaluationDTO = {
			TemplateID: currID,
			StartDate:  new Date(startDate[0], startDate[1], startDate[2], startDate[3]), 
			EndDate:    new Date(endDate[0], endDate[1], endDate[2], endDate[3])
		};

		$http.defaults.headers.common.Authorization = "Basic " + userInfo.token;
		$http.post("http://dispatch.ru.is/h44/api/v1/evaluations/" , newEvaluationDTO)
			.success (function () {
				console.log("template has been added to evalulations");
			})
			.error (function (data) {
				console.log("Error: failed to post the template to evalutaions");
		});
		$scope.startD = "";
		$scope.endD = "";
		$location.path('/evals/' + userInfo.name + '/');
	};

	/*$scope.datepicker = function() {
		$( "#datepicker" ).datepicker();
	};*/
});