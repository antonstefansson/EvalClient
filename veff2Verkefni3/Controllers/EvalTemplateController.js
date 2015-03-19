angular.module('EvalClient').controller('EvalTemplateController', 
function ($scope, $location, $http, userInfo) {
	$scope.currentQuestionType = "textDiv";
	var courseQuestions = [];
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

		var evaluationQuestion = {
			ID: 	  1337,
			Text: 	  $scope.textQuestion,
			TextEN:   undefined,
			ImageURL: undefined,
			Type: 	  undefined,
			Answer:   undefined,
		};
		$scope.textQuestion = "";
		console.log(evaluationQuestion);
		courseQuestions.push(evaluationQuestion);
	};

	$scope.addTemplate = function() {
		var evaluationTemplateDTO = {
			ID:  			  1337,
			Title: 			  $scope.Title,
 			TitleEN: 		  $scope.TitleEN,
			IntroText: 		  $scope.IntroText,
			IntroTextEN: 	  $scope.IntroTextEN,
			CourseQuestions:  courseQuestions,
			TeacherQuestions: undefined
		};
		console.log(evaluationTemplateDTO);
		$http.defaults.headers.common.Authorization = "Basic " + userInfo.token;
		$http.post("http://dispatch.ru.is/h44/api/v1/evaluationtemplates", evaluationTemplateDTO);
	};

	$scope.test = function(){
		console.log("test complete");
	};


});