angular.module("PrsApp")
	.controller("ProductCtrl", ProductCtrl);

ProductCtrl.$inject = ["$http", "$routeParams"];

function ProductCtrl($http, $routeParams) {
	var self = this;
	self.SelectedProductId = $routeParams.id;
	self.SelectedProduct = null;
	self.PageTitle = "Product";

	self.Products = [];

	$http.get("http://localhost:21386/Products/List")
	.then (
		/*if successful*/
			function(resp) {
				console.log("Success", resp);
					self.Products = resp.data; //sets self.Users equal to the array of user objects
			},
			// if error
			function(err) {
					console.log("Error", err);
			}
		)
	$http.get("http://localhost:21386/Products/Get/"+self.SelectedProductId)
		.then (
		/*if successful*/
			function(resp) {
				console.log("Success", resp);
					self.SelectedProduct = resp.data;
			},
			// if error
			function(err) {
					console.log("Error", err);
			}
		)
}