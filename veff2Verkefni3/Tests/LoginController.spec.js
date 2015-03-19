describe("LoginController", function () {

	var ctrl;
	var $scope;
	var $location;
	var $http;
	var userInfo;

	beforeEach( module("EvalClient") );
	beforeEach(inject(function ($controller, $rootScope) {
		$scope = $rootScope.$new();
		ctrl = $controller("LoginController", { $scope: $scope });
	}));

	it("Login should succeed", 
		inject(function ($controller, $rootScope, $httpBackend)) {
			
		}
	});
});