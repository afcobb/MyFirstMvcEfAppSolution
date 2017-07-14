angular.module("PrsApp")
	.controller("PurchaseRequestCtrl", PurchaseRequestCtrl);

PurchaseRequestCtrl.$inject = ["$http", "$routeParams", "$location", "PurchaseRequestSvc"];

function PurchaseRequestCtrl($http, $routeParams, $location, $PurchaseRequestSvc) {
		var self = this;
	self.SelectedPurchaseRequestId = $routeParams.id;
	self.SelectedPurchaseRequest = null;
	self.NewPurchaseRequest = {};
	self.PageTitle = "PurchaseRequest";
	self.PurchaseRequests = [];
	self.PurchaseRequestStatus = {
		New : "New",
		Review : "Review",
		Approved : "Approved",
		Rejected : "Rejected"
	};
	self.PurchaseRequestStatuses = [
		self.PurchaseRequestStatus.New,
		self.PurchaseRequestStatus.Review,
		self.PurchaseRequestStatus.Approved,
		self.PurchaseRequestStatus.Rejected
	];

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

self.GetPurchaseRequests = function() {
	$http.get("http://localhost:21386/PurchaseRequests/List")
		.then(
			function(resp) {
				console.log("[List] Success!", resp);
				self.PurchaseRequests = resp.data;
				for(var idx in self.PurchaseRequests) {
					var pr = self.PurchaseRequests[idx];
					pr.DateNeeded = Number(pr.DateNeeded.replace('/Date(','').replace(')/',''))
				}
				for(var idx in self.PurchaseRequests) {
					var pr = self.PurchaseRequests[idx];
					pr.SubmittedDate = Number(pr.SubmittedDate.replace('/Date(','').replace(')/',''))
				}
			},
			function(err) {
				console.log("[List] error", err);
			}
			)
}

self.GetPurchaseRequests();

self.GetPurchaseRequest = function(id) {
	if(id == undefined)
		return;
	http:get("http://localhost:21386/PurchaseRequests/Get/"+id.toString())
	.then(
		function(resp) {
			self.SelectedPurchaseRequest = resp.data;
			self.SelectedPurchaseRequest.DateNeeded = Number(self.SelectedPurchaseRequest.DateNeeded.replace('/Date(','').replace(')/',''))
			self.SelectedPurchaseRequest.SubmittedDate = Number(self.SelectedPurchaseRequest.SubmittedDate.replace('/Date(','').replace(')/',''))
		},
		function(err) {
			console.log("[GET] ERROR", err);
		}
	)
}
self.GetPurchaseRequest(self.GetSelectedPurchaseRequestId);


self.GetUsers = function() {
		$http.get("http://localhost:21386/Users/List")
		.then(
						function(resp) {
				self.Users = resp.data;
			},
			// if error
			function(err) {
					console.log("Error", err);
			}
		)
	}
	self.GetUsers();

			self.Add = function(purchaseRequest) {
		$http.post("http://localhost:21386/PurchaseRequests/Add/", purchaseRequest)
		.then(
						function(resp) {
				console.log("Add Success", resp);
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

		self.Update = function(PurchaseRequest) {
		$http.post("http://localhost:21386/PurchaseRequests/Change/", PurchaseRequest)
		.then(
						function(resp) {
				console.log("Success", resp);
					$location.path("/PurchaseRequests")
			},
			// if error
			function(err) {
					console.log("Error", err);
			}
		)
	}
	self.Review = function() {
		self.SelectedPurchaseRequest.Status = "Review";
		self.Update(self.SelectedPurchaseRequest);
	}

	self.GetPurchaseRequestsToReview = function() {
		$http.get("http://localhost:21386/PurchaseRequests/List")
			.then(
				function(resp) {
					var purchaseRequests = resp.data;
					self.PurchaseRequestsToReview = [];
					for(var idx in purchaseRequests) {
						purchaseRequest = purchaseRequests[idx];
						if(purchaseRequest.Status === self.PurchaseRequestStatus.Review) {
							self.PurchaseRequestsToReview.push(purchaseRequest);
						}
					}
				},
				function(err) {
					console.log("GetPurchaseRequestsToReview", err);
				}
			)
	};
	self.GetPurchaseRequestsToReview();
}
