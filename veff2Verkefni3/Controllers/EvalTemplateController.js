angular.module('EvalClient').controller('EvalTemplateController', 
function ($scope, $location, $http, userInfo) {
	
	if(userInfo.role != "admin") {
		$location.path('login');
		return;
	}

	$scope.currentQuestionType = "textDiv";
	var courseQuestions = [];
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
		var type = "";
		var answers = [];
		var answer = {};
		if($scope.currentQuestionType === "textDiv"){ /* if it's a text you enter here*/
			var newQuestion = $("<p>" + $scope.textQuestion + "</p>");
			var newQuestionEN = $("<p>" + $scope.textQuestionEN + "</p>");
			var newText = $("<textarea rows=\"4\" cols=\"50\"></textarea>");
			$("#questionContainer").append(newQuestion);
			$("#questionContainer").append(newQuestionEN);
			$("#questionContainer").append(newText);
			type = "text";
			answers = undefined;
		} 
		else {/*else you are using radio buttns or checkbox*/
			if($scope.currentQuestionType === "radioDiv"){
				type = "radio";
			}else{//checkboxDiv
				type = "checkbox";
			}
			var x = 1;
			var newRadioQuestion = $("<p>" + $scope.textQuestion + "</p>");
			var newRadioQuestionEN = $("<p>" + $scope.textQuestionEN + "</p>");
			$("#questionContainer").append(newRadioQuestion);
			$("#questionContainer").append(newRadioQuestionEN);
			var allOptions = document.getElementsByClassName("options");
			var allOptionsEN = document.getElementsByClassName("optionsEN");
			
			while(x < $scope.optionCounter){
				var temp = allOptions[x - 1].value;
				var option = $("<input>" + temp + "</input>");
				$(option).attr("type", type);
				$(option).attr("name", $scope.textQuestion);
				$(option).attr("value", temp);
				$("#questionContainer").append(option);
				
				var tempEN = allOptionsEN[x - 1].value;
				var optionEN = $("<input>" + tempEN + "</input>");
				$(optionEN).attr("type", type);
				$(optionEN).attr("name", $scope.textQuestionEN);
				$(optionEN).attr("value", temp);
				$("#questionContainer").append(optionEN);
				
				x += 1;
				
				answer = {
					ID: 	  1337,
					Text: 	  temp,
					TextEN:   tempEN,
					ImageURL: undefined,
					Weight:   undefined
				};
				answers.push(answer);
			}
			$scope.optionCounter = 1;
			if(type === "radio") {
				type = "single";
			} else {
				type = "multiple";
			}
		}

		//add the question to the object
		var evaluationQuestion = {
			ID: 	  1337,
			Text: 	  $scope.textQuestion,
			TextEN:   $scope.textQuestionEN,
			ImageURL: undefined,
			Type: 	  type,
			Answer:   answers,
		};
		$scope.textQuestion = "";
		$scope.textQuestionEN = "";
		courseQuestions.push(evaluationQuestion); // add the object to the question array	
	};

	$scope.addTemplate = function() {
		var TQ;
		var CQ;
		if($scope.isTeacherQ) {
			TQ = courseQuestions;
			CQ = undefined;
		} else {
			TQ = undefined;
			CQ = courseQuestions;
		}
		var evaluationTemplateDTO = {
			ID:  			  1337,
			TemplateID:		  1337,
			Title: 			  $scope.Title,
 			TitleEN: 		  $scope.TitleEN,
			IntroText: 		  $scope.IntroText,
			IntroTextEN: 	  $scope.IntroTextEN,
			CourseQuestions:  CQ,
			TeacherQuestions: TQ
		};
		$http.defaults.headers.common.Authorization = "Basic " + userInfo.token;
		$http.post("http://dispatch.ru.is/h44/api/v1/evaluationtemplates", evaluationTemplateDTO);
		$location.path('/evals/' + userInfo.name + '/');
	};

	$scope.resetCounter = function(){
		$scope.optionCounter = 1;
	};

	$scope.addOption = function(){
		var newElement = $("<p id=\"oText" + $scope.optionCounter + "\">Option #" + $scope.optionCounter + "</p>");
		var newInput = $("<input />");
		var newElementEN = $("<p>Optoin EN #" + $scope.optionCounter +"</p>");
		var newInputEN = $("<input />");

		$(newInput).attr("type", "text");		
		$(newInput).attr("id", "option" + $scope.optionCounter);
		$(newInput).attr("class", "options");
		
		$(newInputEN).attr("type", "text");		
		$(newInputEN).attr("id", "option" + $scope.optionCounter);
		$(newInputEN).attr("class", "optionsEN");
		
		$("#" + $scope.currentQuestionType).append(newElement);
		$("#" + $scope.currentQuestionType).append(newInput);
		
		$("#" + $scope.currentQuestionType).append(newElementEN);
		$("#" + $scope.currentQuestionType).append(newInputEN);
		$scope.optionCounter += 1;
	};
});
