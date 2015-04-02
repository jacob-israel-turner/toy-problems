//given the following array, randomize it.
var students = ["PJ", "Brock", "Erin", "Daniel", "Jacob", "Aaron", "Jason", "Schuyler", "Kory", "Corey", "Zac", "Jonathan", "Skyler", "Jess", "Krissy", "Mark", "David", "Bryson", "Larry", "Fernanda", "Jennifer"];

function randomArray(arr){
	function randomNumber() {
		return Math.floor(Math.random() * arr.length - 1);
	}
	var newArr = [];
	while(arr.length > 0){
		newArr.push(arr.splice(randomNumber(), 1)[0]);
	}
	return newArr;
}