angular.module('EvalClient').controller('EvalTemplateController', function ($scope, $location, $http) {
	$scope.currentQuestionType = "textDiv";
	$scope.optionCounter = 1;
	//$scope.options = {};
	$scope.qSelector = [{
		value: 'textDiv',
	    label: 'Text question'
	}, {
	    value: 'radioDiv',
	    label: 'Radio button question'
	}, {
		value: 'checkboxDiv',
	    label: 'Checbox question'
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
		if($scope.currentQuestionType === "textDiv"){
			var newQuestion = $("<p>" + $scope.textQuestion + "</p>");
			var newText = $("<textarea rows=\"4\" cols=\"50\"/>");
			$("#questionContainer").append(newQuestion);
			$("#questionContainer").append(newText);
			$scope.textQuestion = "";
			return;
		}
		var type = "";
		if($scope.currentQuestionType === "radioDiv"){
			type = "radio";
		}else{//checkboxDiv
			type = "checkbox";
		}
		var x = 1;
		var newRadioQuestion = $("<p>" + $scope.textQuestion + "</p>");
		$("#questionContainer").append(newRadioQuestion);
		var allOptions = document.getElementsByClassName("options");
		while(x < $scope.optionCounter){
			var temp = allOptions[x - 1].value;
			var option = $("<input>" + temp + "</input>");
			$(option).attr("type", type);
			$(option).attr("name", $scope.textQuestion);
			$(option).attr("value", temp);
			console.log(allOptions[x - 1].value);
			$("#questionContainer").append(option);
			x += 1;
		}
		
		$scope.optionCounter = 1;
		
	};

	$scope.resetCounter = function(){
		$scope.optionCounter = 1;
	};

	$scope.addOption = function(){
		var newElement = $("<p>Option #" + $scope.optionCounter + "</p>");
		var newInput = $("<input />");
		$(newInput).attr("type", "text");
		
		$(newInput).attr("id", "option" + $scope.optionCounter);
		$(newInput).attr("class", "options");
		$("#" + $scope.currentQuestionType).append(newElement);
		$("#" + $scope.currentQuestionType).append(newInput);
		$scope.optionCounter += 1;

	};

	
});
