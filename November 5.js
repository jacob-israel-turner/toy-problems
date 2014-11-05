/*Write a sum method which will work properly when invoked using either syntax below.*/

console.log(sum(2,3));  //Outputs 5
console.log(sum(2)(3)); //Outputs 5

function sum(a, b){
	if(b) return a + b;
	return function(c){return a + c};
}