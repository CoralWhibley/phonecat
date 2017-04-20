angular.module('core').filter('capitalize', function(){
	return function(input){
		return input.substr(0,1).toUpperCase()+input.substr(1);
	};
});