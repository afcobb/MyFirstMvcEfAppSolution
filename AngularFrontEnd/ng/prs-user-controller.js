angular.module("PrsApp")
	.controller("UserCtrl", UserCtrl);

UserCtrl.$inject = ["$http", "$routeParams", "$location", "UserSvc", "SystemSvc"];

function UserCtrl($http, $routeParams, $location, UserSvc, SystemSvc) {
	var self = this;
	self.AuthenticatedUser = SystemSvc.AuthenticatedUser;
	UserSvc.GetUsers()
		.then(
			function (resp) {
				console.log("SVC Success", resp);
					self.Users = resp.data; //sets self.Users equal to the array of user objects
			},
			// if error
			function(err) {
					console.log("Error", err);
			}
		);

	self.SelectedUserId = $routeParams.id;
	self.NewUser = {};
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
	// $http.get("http://localhost:21386/Users/Get/"+self.SelectedUserId)
	// 	.then (
	// 	/*if successful*/
	// 		function(resp) {
	// 			console.log("Success", resp);
	// 				self.SelectedUser = resp.data;
	// 		},
	// 		// if error
	// 		function(err) {
	// 				console.log("Error", err);
	// 		}
	// 	)

		UserSvc.GetUser(self.SelectedUserId)
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
		self.Add = function(user) {
		$http.post("http://localhost:21386/Users/Add", user)
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
			self.Remove = function(id) {
		$http.post("http://localhost:21386/Users/Remove/" + id.toString())
		.then(
						function(resp) {
				console.log("Remove Success", resp);
					$location.path("/users")
			},
			// if error
			function(err) {
					console.log("Error", err);
			}
		)
	}

  self.Login = function (username, password) {
    self.Authenticated = false;
    for (var idx in self.Users) {
    	var user = self.Users[idx];
    	if (user.UserName == username && user.Password == password) {
    		// this is where user is logged in successfully
    		self.Authenticated = true 
    		self.AuthenticatedUser = SystemSvc.AuthenticatedUser = user
    		$location.path("/")
    	}

    };
  };
 }