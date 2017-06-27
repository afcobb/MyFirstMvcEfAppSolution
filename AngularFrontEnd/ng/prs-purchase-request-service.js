angular.module("PrsApp")
	.service("PurchaseRequestSvc", PurchaseRequestSvc);

PurchaseRequestSvc.$inject = [];

function PurchaseRequestSvc() {
	var self = this;
	self.GetPurchaseRequestId = function() {
	return self.PurchaseRequestId;
	}
	self.SetPurchaseRequestId = function(id) {
	self.PurchaseRequestId = id;
	}
};

// services can be shared across controllers 