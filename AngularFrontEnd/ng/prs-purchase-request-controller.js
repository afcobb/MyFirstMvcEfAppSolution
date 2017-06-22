angular.module("PrsApp")
	.controller("PurchaseRequestCtrl", PurchaseRequestCtrl);

PurchaseRequestCtrl.$inject = ["$http", "$routeParams", "$location"];

function PurchaseRequestCtrl($http, $routeParams, $location) {
		var self = this;
	self.SelectedPurchaseRequestId = $routeParams.id;
	self.SelectedPurchaseRequest = null;
	self.NewPurchaseRequest = {};
	self.PageTitle = "PurchaseRequest";

	self.PurchaseRequests = [];

	$http.get("http://localhost:21386/PurchaseRequests/List")
	.then (
			function(resp) {
				console.log("Success", resp);
					self.PurchaseRequests = resp.data; 
			},
			function(err) {
					console.log("Error", err);
			}
		)
	$http.get("http://localhost:21386/PurchaseRequests/Get/"+self.SelectedPurchaseRequestId)
		.then (
			function(resp) {
				console.log("Success", resp);
					self.SelectedPurchaseRequest = resp.data;
			},
			function(err) {
					console.log("Error", err);
			}
		)
		self.Add = function(purchaseRequest) {
		$http.post("http://localhost:21386/PurchaseRequests/Add", purchaseRequest)
		.then(
						function(resp) {
				console.log("Success", resp);
					$location.path("/purchaseRequests")
			},
			// if error
			function(err) {
					console.log("Error", err);
			}
		)
	}
				self.Remove = function(id) {
		$http.post("http://localhost:21386/PurchaseRequests/Remove/" + id.toString())
		.then(
						function(resp) {
				console.log("Remove Success", resp);
					$location.path("/purchaseRequests")
			},
			// if error
			function(err) {
					console.log("Error", err);
			}
		)
	}
}