angular.module("PrsApp")
	.controller("PurchaseRequestCtrl", PurchaseRequestCtrl);

PurchaseRequestCtrl.$inject = ["$http", "$routeParams"];

function PurchaseRequestCtrl($http, $routeParams) {
		var self = this;
	self.SelectedPurchaseRequestId = $routeParams.id;
	self.SelectedPurchaseRequest = null;
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
}