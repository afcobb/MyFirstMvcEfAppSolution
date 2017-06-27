angular.module("PrsApp")
	.service("UserSvc", UserSvc)

UserSvc.$inject = ["$http"];

function UserSvc($http) {
	var self = this;
	self.GetUsers = function() {
		return $http.get("http://localhost:21386/Users/List")
	}
	self.GetUser = function(id) {
		return $http.get("http://localhost:21386/Users/Get/"+id)
	}
		self.AddUser = function(user) {
		return $http.get("http://localhost:21386/Users/Add", user)
	}

};

// here the $http.get returns a "promise" (you know it will return something, just not sure when. js doesnt sit and wait for the
//return to occur before it starts executing other code.)