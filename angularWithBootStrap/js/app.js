var contactsApp = angular.module('contactsApp', ['ngRoute']);

contactsApp.config(function($routeProvider){

	$routeProvider.when('/all-contacts',
			{
				templateUrl: 'template/allContacts.html',
				controller : 'ctrlContacts'
				
			})
		.when('/view-contacts/:contactId',{
				templateUrl : 'template/viewContact.html',
				controller : 'ctrlViewContacts'		
		})
		.when('/add-contacts',{
				templateUrl : 'template/manageContacts.html',
				controller : 'ctrlAddContacts'
				
		})
		.when('/edit-contacts/:contactId',{
				templateUrl : 'template/manageContacts.html',
				controller : 'ctrlEditContacts'
				
		})

		.otherwise({redirectTo:'/all-contacts'})
});


contactsApp.controller('ctrlContacts',function($scope){

});

contactsApp.controller('ctrlViewContacts',function($scope){

});

contactsApp.controller('ctrlAddContacts',function($scope){

});

contactsApp.controller('ctrlEditContacts',function($scope){

});
