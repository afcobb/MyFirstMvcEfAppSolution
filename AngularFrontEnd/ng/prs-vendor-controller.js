angular.module("PrsApp")
	.controller("VendorCtrl", VendorCtrl);

VendorCtrl.$inject = ["$http", "$routeParams", "$location", "SystemSvc"];

function VendorCtrl($http, $routeParams, $location, SystemSvc) {
		var self = this;
		self.AuthenticatedUser = SystemSvc.AuthenticatedUser;
	self.SelectedVendorId = $routeParams.id;
	self.PageTitle = "Vendor";
	self.NewVendor = {};
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
			self.Add = function(vendor) {
		$http.post("http://localhost:21386/Vendors/Add", vendor)
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
				self.Remove = function(id) {
		$http.post("http://localhost:21386/Vendors/Remove/" + id.toString())
		.then(
						function(resp) {
				console.log("Remove Success", resp);
					$location.path("/vendors")
			},
			// if error
			function(err) {
					console.log("Error", err);
			}
		)
	}
}