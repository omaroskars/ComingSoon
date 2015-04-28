'use strict';
angular.module('CommingSoon', ['ngRoute']).config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: 'views/home.html',
				controller: 'HomeController'
			})
			.when('/login', {
				templateUrl: 'views/login.html',
				controller: 'LoginController'
			})
			.otherwise({
				redirectTo: '/home'
			});
	}]);

'use strict';
angular.module('CommingSoon').controller('HomeController', ['$scope',
function ($scope) {
	
}]);

angular.module('CommingSoon').controller('LoginController', ['$scope', 
function ($scope) {
	$scope.username = "";
	$scope.password = "";

	
}]);