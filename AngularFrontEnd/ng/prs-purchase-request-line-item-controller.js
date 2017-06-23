angular.module("PrsApp")
	.controller("PurchaseRequestLineItemCtrl", PurchaseRequestLineItemCtrl);

PurchaseRequestLineItemCtrl.$inject = ["$http", "$routeParams", "$location"];

function PurchaseRequestLineItemCtrl($http, $routeParams, $location) {
		var self = this;
	self.SelectedPurchaseRequestLineItemId = $routeParams.id;
	self.SelectedPurchaseRequestLineItemId = null;
	self.PageTitle = "PurchaseRequestLineItem";

	self.PurchaseRequests = [];

	$http.get("http://localhost:21386/PurchaseRequestsLineItem/List")
	.then (
			function(resp) {
				console.log("Success", resp);
					self.PurchaseRequests = resp.data; 
			},
			function(err) {
					console.log("Error", err);
			}
		)
	$http.get("http://localhost:21386/PurchaseRequestsLineItem/Get/"+self.SelectedPurchaseRequestId)
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
	http:get("http://localhost:21386/PurchaseRequests/Get/"+id.toString())
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
self.GetPurchaseRequest(self.GetSeletedPurchaseRequestId);

self.GetPurchaseRequestLineItems = function(prId) {
	http:get("http://localhost:21386/PurchaseRequestLineItems/List")
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
self.GetPurchaseRequestLineItems(Self.SelectedPurchaseRequestId);
}