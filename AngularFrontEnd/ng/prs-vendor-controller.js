angular.module("PrsApp")
	.controller("VendorCtrl", VendorCtrl);

VendorCtrl.$inject = ["$http", "$routeParams"];

function VendorCtrl($http, $routeParams) {
		var self = this;
	self.SelectedVendorId = $routeParams.id;
	self.SelectedVendor = null;
	self.PageTitle = "Vendor";

	self.Vendors = [];

	$http.get("http://localhost:21386/Vendors/List")
	.then (
			function(resp) {
				console.log("Success", resp);
					self.Vendors = resp.data; 
			},
			function(err) {
					console.log("Error", err);
			}
		)
	$http.get("http://localhost:21386/Vendors/Get/"+self.SelectedVendorId)
		.then (
			function(resp) {
				console.log("Success", resp);
					self.SelectedVendor = resp.data;
			},
			function(err) {
					console.log("Error", err);
			}
		)
}