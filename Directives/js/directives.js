'use strict';
myApp.directive('demoGreet',function($parse){

	return{
		link : function linkFn(scope,lElement,attrs){
				//cElement.addClass('compiling');
			scope.$watch(attrs.demoGreet,function(name){
				lElement.text('Hello '+name);		
			});	

			lElement.bind('click',function(){
				console.log('clicked'+Error().stack)
				scope.name = "angular";
				scope.isTrue = !scope.isTrue;
				scope.$apply();				
			});
			
		}

		
	} 
});