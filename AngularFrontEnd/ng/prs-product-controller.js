angular.module("PrsApp")
	.controller("ProductCtrl", ProductCtrl);

ProductCtrl.$inject = ["$http", "$routeParams", "$location"];

function ProductCtrl($http, $routeParams, $location) {
	var self = this;
	self.SelectedProductId = $routeParams.id;
	self.PageTitle = "Product";
	self.NewProduct = {};
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

	self.Update = function(product) {
		console.log("Here")
		$http.post("http://localhost:21386/Products/Change", product)
		.then(
			function(resp) {
				console.log("Success", resp);
					$location.path("/products")
			},
			// if error
			function(err) {
					console.log("Error", err);
			}
		)
	}
	self.Add = function(product) {
		$http.post("http://localhost:21386/Products/Add", products)
		.then(
						function(resp) {
				console.log("Success", resp);
					$location.path("/products")
			},
			// if error
			function(err) {
					console.log("Error", err);
			}
		)
	}
				self.Remove = function(id) {
		$http.post("http://localhost:21386/Products/Remove/" + id.toString())
		.then(
						function(resp) {
				console.log("Remove Success", resp);
					$location.path("/products")
			},
			// if error
			function(err) {
					console.log("Error", err);
			}
		)
	}
}
