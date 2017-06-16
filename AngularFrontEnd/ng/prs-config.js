angular.module("PrsApp")
	.config(PrsConfig)

PrsConfig.$inject = ["$routeProvider"];

function PrsConfig($routeprovider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/home-view.html'
		})
		.otherwise({
			redirectTo: "/"
		});
}