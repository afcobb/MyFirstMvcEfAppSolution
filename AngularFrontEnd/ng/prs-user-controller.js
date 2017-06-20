angular.module("PrsApp")
	.controller("UserCtrl", UserCtrl);

UserCtrl.$inject = ["$http", "$routeParams", "$location"];

function UserCtrl($http, $routeParams, $location) {
	var self = this;
	self.SelectedUserId = $routeParams.id;

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

	self.Update = function(user) {
		console.log("Here")
		$http.post("http://localhost:21386/Users/Change", user)
		.then(
						function(resp) {
				console.log("Success", resp);
					$location.path("/users")
			},
			// if error
			function(err) {
					console.log("Error", err);
			}
		)
	}
}