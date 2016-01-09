'use strict';

var SERVER_URL = 'user.php';

angular
    .module('myApp', ['ngStorage'])
    .controller('MyController', MyController);


MyController.$inject = ['$localStorage', '$scope', '$http'];

function MyController($localStorage, $scope, $http) {
	var vm = this;
	vm.editing = false;
	vm.fetchServer = vm.fetchLocal = false;
	vm.data = [];

	vm.edit = function(user) {
        vm.editing = vm.data.indexOf(user);
    };

	vm.removeItem = function(index) {
        vm.data.splice(index, 1);
        $localStorage.data = vm.data;
    };

    vm.addRow = function(index) {
        vm.data.push({
        	editMode: true
        });        
    };

    vm.fetchFromServer = function(){
        /*  
        Static data Uncomment it won't fetch from local */
    	/* vm.data = [
				{
					id: 1,
					first_name: 'aa',
					last_name: 'aa'
				},
				{
					id: 2,
					first_name: 'bb',
					last_name: 'bb'
				},
				{
					id: 3,
					first_name: 'cc',
					last_name: 'cc'
				},
				{
					id: 4,
					first_name: 'dd',
					last_name: 'dd'
				},
		]; */

        /*
            Data fetching from server backend comment it for static data
        */
		$http.get(SERVER_URL)
            .then(function (response) {
                vm.data = response.data;
            });
		if(typeof $localStorage.data == 'undefined')
			$localStorage.data = vm.data;
		vm.fetchServer = true;
		vm.fetchLocal = false;
    };

    vm.fetchFromLocal = function(){
    	if(typeof $localStorage.data != 'undefined')
    		vm.data = $localStorage.data;
    	else
    		alert("There is no data in localStorage please try try to fetch first from server");

    	vm.fetchServer = false;
		vm.fetchLocal = true;
    };

    vm.save = function(user){
    	user.editMode = false;
    	$localStorage.data = vm.data;
    };

    vm.arrangeOrder = function(userIds){
    	var sorted = _.sortBy(vm.data, function(obj){ 
		    return _.indexOf(userIds, obj.id);
		});
		vm.data = sorted;
		$localStorage.data = sorted;
		$scope.$apply();
    }

    function initReordering() {
        angular.element(document.querySelector('#myTable tbody')).sortable({
            cursor: "move",
            update: function(event, ui) {
                var userIds = [];
                $('#myTable .user-id').each(function(i){
                    userIds.push(parseInt($(this).text()));
                });
                vm.arrangeOrder(userIds);
            }
        });
    }

    initReordering();
}