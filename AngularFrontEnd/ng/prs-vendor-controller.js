angular.module("PrsApp")
	.controller("VendorCtrl", VendorCtrl);

VendorCtrl.$inject = ["$http", "$routeParams", "$location"];

function VendorCtrl($http, $routeParams, $location) {
		var self = this;
	self.SelectedVendorId = $routeParams.id;
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

	self.Update = function(vendor) {
		$http.post("http://localhost:21386/Vendors/Change", vendor)
		.then(
						function(resp) {
				console.log("Success", resp);
					$location.path("/vendors")
			},
			// if error
			function(err) {
					console.log("Error", err);
			}
		)
	}
}