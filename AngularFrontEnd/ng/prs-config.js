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
			.when('/users/edit/:id', {
			templateUrl: 'views/users-edit-view.html',
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
			.when('/vendors/edit/:id', {
			templateUrl: 'views/vendors-edit-view.html',
			controller: 'VendorCtrl',
			controllerAs: 'ctrl'
		})
			.when('/products', {
			templateUrl: 'views/products-view.html',
			controller: 'ProductCtrl',
			controllerAs: 'ctrl'
		})
			.when('/products/detail/:id', {
			templateUrl: 'views/products-detail-view.html',
			controller: 'ProductCtrl',
			controllerAs: 'ctrl'
		})
			.when('/products/edit/:id', {
			templateUrl: 'views/products-edit-view.html',
			controller: 'ProductCtrl',
			controllerAs: 'ctrl'
		})
			.when('/purchaserequests', {
			templateUrl: 'views/purchase-requests-view.html',
			controller: 'PurchaseRequestCtrl',
			controllerAs: 'ctrl'
		})
			.when('/purchaserequests/detail/:id', {
			templateUrl: 'views/purchase-requests-detail-view.html',
			controller: 'PurchaseRequestCtrl',
			controllerAs: 'ctrl'
		})
			.when('/about', {
			templateUrl: 'views/about-view.html'
		})
		.otherwise({
			redirectTo: "/"
		});
}