//Directives with Dan
//NOTES:
//You write it camel-case in the directive, but snake-case in HTML.  Kinda dumb.
//I think @ is the value of the variable, = is the NAME of the variable.
(function({
	angular.module('practice')
	.directive('letters', function(){
		return{
			restrict: 'A',
			scope: {
				steve: '@', //This is an attribute.  The @ sign means it will take it as a string, and insert it into the scope of the directive.
				text: '=' //This is an attribute.  The = sign means it will take it as a string, and bind it to the scope. The difference is, double binding.
			},
			link: function(scope, elem, attr){
				elem.on('click', function(){
					alert(scope.steve);
					console.log(scope.text);
				})
			}
		}
	})
}))()