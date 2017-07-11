angular.module("PrsApp")
	.controller("PurchaseOrderCtrl", PurchaseOrderCtrl);

PurchaseOrderCtrl.$inject = ["$http", "$routeParams", "$location"]

function PurchaseOrderCtrl($http, $routeParams, $location) {
	var self = this;


self.GetApprovedPurchaseRequests = function() {
	$http.get("http://localhost:21386/PurchaseRequests/List")
		.then(
		function(resp) {
			var purchaseRequests = resp.data;
			self.ApprovedPurchaseRequests = [];
				for(var idx in purchaseRequests) {
				purchaseRequest = purchaseRequests[idx];
				if(purchaseRequest.Status === self.PurchaseRequestStatus.Approved) {
				self.Approved.push(purchaseRequest);
				}
				}
		},
		function(err) {
		console.log("GetApprovedPurchaseRequests", err);
		}
		)
	};
	self.GetApprovedPurchaseRequests();
}

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

}