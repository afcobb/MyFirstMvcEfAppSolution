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
			.when('/users/add/', {
			templateUrl: 'views/users-add-view.html',
			controller: 'UserCtrl',
			controllerAs: 'ctrl'
		})
			.when('/users/login/', {
			templateUrl: 'views/users-login-view.html',
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
			.when('/vendors/purchase-order/:id', {
			templateUrl: 'views/purchase-order-view.html',
			controller: 'PurchaseOrderCtrl',
			controllerAs: 'ctrl'
		})
			.when('/vendors/add/', {
			templateUrl: 'views/vendors-add-view.html',
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
			.when('/products/add/', {
			templateUrl: 'views/products-add-view.html',
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

			.when('/PurchaseRequests/add/', {
			templateUrl: 'views/purchase-requests-add-view.html',
			controller: 'PurchaseRequestCtrl',
			controllerAs: 'ctrl'
		})
			.when('/PurchaseRequests/edit/:id', {
			templateUrl: 'views/purchase-requests-edit-view.html',
			controller: 'PurchaseRequestCtrl',
			controllerAs: 'ctrl'
		})
			.when('/PurchaseRequestLineItems/view/:prid', {
			templateUrl: 'views/purchase-request-line-items-view.html',
			controller: 'PurchaseRequestLineItemCtrl',
			controllerAs: 'ctrl'
		})

		.when('/PurchaseRequestLineItems/add/:prid', {
			templateUrl: 'views/purchase-request-line-items-add-view.html',
			controller: 'PurchaseRequestLineItemCtrl',
			controllerAs: 'ctrl'
		})
		.when('/PurchaseRequestLineItems/edit/:prid', {
			templateUrl: 'views/purchase-request-line-items-edit-view.html',
			controller: 'PurchaseRequestLineItemCtrl',
			controllerAs: 'ctrl'
		})				
			.when('/about', {
			templateUrl: 'views/about-view.html'
		})
			.when('/review', {
			templateUrl: 'views/purchase-request-review-view.html',
			controller: 'PurchaseRequestCtrl',
			controllerAs: 'ctrl'
		})
			.when('/review/detail/:prid', {
				templateUrl: 'views/purchase-request-line-items-review-view',
				controller: 'PurchaseRequestLineItemCtrl',
				controllerAs: 'ctrl'
		})

		.otherwise({	
			redirectTo: "/"
		});
}