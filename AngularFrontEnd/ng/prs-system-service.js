angular.module("PrsApp")
	.service("SystemSvc", SystemSvc);

SystemSvc.$inject = ["$filter"];

function SystemSvc($filter) {
	var self = this;
	self.about = "System Service";
	self.AjaxUrl = "http://localhost:21386";

	self.ConvertToJsonDate = function(value) {
	return $filter('date')(new Date(value), "MM/dd/yyy");
	}
};