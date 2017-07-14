angular.module("PrsApp")
	.controller("PurchaseRequestLineItemCtrl", PurchaseRequestLineItemCtrl);

PurchaseRequestLineItemCtrl.$inject = ["$http", "$routeParams", "$location", "PurchaseRequestSvc"];

function PurchaseRequestLineItemCtrl($http, $routeParams, $location, PurchaseRequestSvc) {
		var self = this;
	self.SelectedPurchaseRequestLineItemId = $routeParams.id;
	self.SelectedPurchaseRequestId = $routeParams.prid;
	if(typeof $routeParams.prid != 'undefined') {
		PurchaseRequestSvc.SetPurchaseRequestId(self.SelectedPurchaseRequestId);
	}

	self.PageTitle = "PurchaseRequestLineItem";

	self.PurchaseRequests = [];

	$http.get("http://localhost:21386/PurchaseRequestLineItems/List")
	.then (
			function(resp) {
				console.log("Success", resp);
					self.PurchaseRequest = resp.data; 
			},
			function(err) {
					console.log("Error", err);
			}
		)
	$http.get("http://localhost:21386/PurchaseRequestLineItems/Get/"+self.SelectedPurchaseRequestId)
		.then (
			function(resp) {
				console.log("Success", resp);
					self.SelectedPurchaseRequest = resp.data;
			},
			function(err) {
					console.log("Error", err);
			}
		)
self.GetPurchaseRequest = function(id) {
	if(id == undefined)
		return;
	$http.get("http://localhost:21386/PurchaseRequests/Get/"+id.toString())
	.then(
		function(resp) {
			self.SelectedPurchaseRequest = resp.data;
			self.SelectedPurchaseRequest.DateNeeded
				= Number(self.SelectedPurchaseRequest.DateNeeded.replace('/Date(','').replace(')/',''))
		},
				function(resp) {
			self.SelectedPurchaseRequest = resp.data;
			self.SelectedPurchaseRequest.SubmittedDate
				= Number(self.SelectedPurchaseRequest.SubmittedDate.replace('/Date(','').replace(')/',''))
		},
		function(err) {
			console.log("[GET] ERROR", err);
		}
	)
}
self.GetPurchaseRequest(self.SelectedPurchaseRequestId);


self.GetPurchaseRequestLineItems = function(prId) {
	var action = (typeof prId == 'undefined') ? "List" : "ListByPurchaseRequest/" + prId.toString();
	$http.get("http://localhost:21386/PurchaseRequestLineItems/" + action)
	.then(
		function(resp) {
			console.log("[LIST] Success", resp);
			self.PurchaseRequestLineItems = resp.data;
		},
		function(err) {
			console.log("[List] ERROR", err);
		}
		)
}
self.GetPurchaseRequestLineItems(self.SelectedPurchaseRequestId);

self.GetPurchaseRequestLineItems = function(prId) {
	$http.get("http://localhost:21386/PurchaseRequestLineItems/List")
		.then(
			function(resp) {
				console.log("[LIST] Success", resp);
				if(prId == undefined) {
						self.PurchaseRequestLineItems = resp.data;
				} else {
					self.PurchaseRequestLineItems = [];
					for(var idx in resp.data) {
						var prItem = resp.data[idx];
						if(prItem.PurchaseRequestId == prId) {
							self.PurchaseRequestLineItems.push(prItem);
						}
					}
				}
			},
			function(err) {
				console.log("[List]", err);
			}
		)
}
self.GetPurchaseRequestLineItems(self.SelectedPurchaseRequestId);	


self.GetProducts = function() {
	$http.get("http://localhost:21386/Products/List")
		.then(
						function(resp) {
				self.Products = resp.data;
			},
			// if error
			function(err) {
					console.log("Error", err);
			}
		)
	}
	self.GetProducts();

self.Add = function(PurchaseRequestLineItems) {
		PurchaseRequestLineItems.PurchaseRequestId = PurchaseRequestSvc.GetPurchaseRequestId();
		$http.post("http://localhost:21386/PurchaseRequestLineItems/add/", PurchaseRequestLineItems)
		.then(
						function(resp) {
				console.log("Add Success", resp);
					$location.path("/PurchaseRequestLineItems")
			},
			// if error
			function(err) {
					console.log("Error", err);
			}
		)
	}
	self.Approve = function(PurchaseRequestId) {
		SetPurchaseRequestStatus(PurchaseRequestId, "Approved")
	}
	self.Reject = function(PurchaseRequestId) {
		SetPurchaseRequestStatus(PurchaseRequestId, "Rejected")
	}
	var SetPurchaseRequestStatus = function(PurchaseRequestId, status) {
		var PurchaseRequestToApprove = void 0;
		PurchaseRequestSvc.Get(PurchaseRequestId)
			.then(
				function(resp) {
					PurchaseRequestToApprove = resp.data;
					PurchaseRequestToApprove.Status = status;
					ChangePurchaseRequest(PurchaseRequestToApprove);
				},
				function(err) {
					console.log(err);
				}
			)
	}
	var ChangePurchaseRequest = function(PurchaseRequest) {
		PurchaseRequestSvc.Change(PurchaseRequest)
		.then(
			function(resp) {
				console.log(status, resp);
				$location.path("/PurchaseRequests/review");
			},
			function(err) {
				console.log(err);
			}
		)
	}
}

