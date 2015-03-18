angular.module('EvalClient').controller('EvalTemplateController', function ($scope, $location, $http) {
	$scope.currentQuestionType = "textDiv";
	$scope.


	$scope.qSelector = [{
		value: 'textDiv',
	    label: 'Text question'
	}, {
	    value: 'radioDiv',
	    label: 'Radio button question'
	}]; 

	$('.group').hide();
    $('#textDiv').show();
    $('#selectMe').change(function () {

        $('.group').hide();
        $('#'+$(this).val()).show();
        $scope.currentQuestionType = ($(this).val());
    });

	$scope.addElement = function(){
		$(".btn").click(function(){
	        $("#myModal").modal('show');
	    });
	};

	$scope.addNewElement = function(){
		$scope.newQuestion = $("<p>" + $scope.textQuestion + "</p>");
		$scope.newText = $("<textarea rows=\"4\" cols=\"50\"/>");
		$("#questionContainer").append($scope.newQuestion);
		$("#questionContainer").append($scope.newText);
		$scope.textQuestion = "";
	};



	$scope.test = function(){
		console.log("test complete");
	};


});