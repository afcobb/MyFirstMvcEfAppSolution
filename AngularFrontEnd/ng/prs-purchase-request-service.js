angular.module("PrsApp")
	.service("PurchaseRequestSvc", PurchaseRequestSvc);

PurchaseRequestSvc.$inject = [];

function PurchaseRequestSvc() {
	var self = this;
	self.PurchaseRequestId = function() {
	return self.PurchaseRequestId;
	}
	self.SetPurchaseRequestId = function(id) {
	self.PurchaseRequest = id;
	}
};

// services can be shared across controllers 