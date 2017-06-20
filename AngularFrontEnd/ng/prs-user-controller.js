angular.module("PrsApp")
	.controller("UserCtrl", UserCtrl);

UserCtrl.$inject = ["$http", "$routeParams"];

function UserCtrl($http, $routeParams) {
	var self = this;
	self.SelectedUserId = $routeParams.id;
	self.SelectedUser = null;
	self.PageTitle = "User";

	self.Users = [];

	$http.get("http://localhost:21386/Users/List")
	.then (
		/*if successful*/
			function(resp) {
				console.log("Success", resp);
					self.Users = resp.data; //sets self.Users equal to the array of user objects
			},
			// if error
			function(err) {
					console.log("Error", err);
			}
		)
	$http.get("http://localhost:21386/Users/Get/"+self.SelectedUserId)
		.then (
		/*if successful*/
			function(resp) {
				console.log("Success", resp);
					self.SelectedUser = resp.data;
			},
			// if error
			function(err) {
					console.log("Error", err);
			}
		)
}