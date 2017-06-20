angular.module("PrsApp")
	.config(PrsConfig)

PrsConfig.$inject = ["$routeProvider", "$locationProvider"];

function PrsConfig($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider
		.when('/', {
			templateUrl: 'views/home-view.html'
		})
			.when('/users', {
			templateUrl: 'views/users-view.html',
			controller: 'UserCtrl',
			controllerAs: 'ctrl'
		})
			.when('/users/detail/:id', {
			templateUrl: 'views/users-detail-view.html',
			controller: 'UserCtrl',
			controllerAs: 'ctrl'
		})
			.when('/vendors', {
			templateUrl: 'views/vendors-view.html',
			controller: 'VendorCtrl',
			controllerAs: 'ctrl'
		})
			.when('/vendors/detail/:id', {
			templateUrl: 'views/vendors-detail-view.html',
			controller: 'VendorCtrl',
			controllerAs: 'ctrl'
		})
			.when('/about', {
			templateUrl: 'views/about-view.html'
		})
		.otherwise({
			redirectTo: "/"
		});
}