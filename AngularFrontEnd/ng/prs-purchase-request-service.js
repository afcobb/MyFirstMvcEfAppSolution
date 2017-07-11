angular.module("PrsApp")
	.service("PurchaseRequestSvc", PurchaseRequestSvc);

PurchaseRequestSvc.$inject = ["$http", "SystemSvc"];

function PurchaseRequestSvc($http, SystemSvc) {
	var self = this;
	var url = SystemSvc.AjaxUrl;
	var ctrlr = "PurchaseRequests";
	self.GetPurchaseRequestId = function() {
		return self.PurchaseRequestId;
	}
	self.SetPurchaseRequestId = function(id) {
	self.PurchaseRequestId = id;
	}
	self.List = function() {
		return $http.get(url + "/" + ctrlr + "/List");
	}
	self.Get = function(id) {
		return $http.get(url + "/" + ctrlr + "/Get/"+id);	
	}
	self.Change = function(inst) {
		return $http.post(url + "/" + ctrlr + "/Change", inst);
	}
	self.Remove = function(id) {
	return $http.delete(url + "/" + ctrlr + "/Remove" + id);
	}
	self.Add = function(inst) {
		return $http.post(url + "/" + ctrlr + "/Add", inst);
	}
};

// services can be shared across controllers 