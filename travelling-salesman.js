

var arr = [1,2,3,4];

console.log(allTheWays(arr));

function allTheWays(arr, ind){
  var tried = [];
  tried.push(arr[0], snakeDown(arr.slice(1)));
  return tried;
}

function snakeDown(arr){
	var tried = [];
	tried.push(arr[0]);
	if(arr.length === 1) return arr;
  for(var i = 0; i < arr.length - 1; i++){
    var tempArray = arr.slice(i + 1);
    // console.log(tempArray);
  	tried.push(snakeDown(tempArray));
  };
  return tried;
}

/*
travellingSalesman(makeCities(5));

function travellingSalesman(arr){
  var shortest = {route: null, dist: null};
  arr.forEach(function(item, index){
    console.log(item); 
  });
};
*/

function createCities(num){
  var cities = [];
  for(var i = 0; i < num; i++){
    cities.push({
      x: Math.floor(Math.random() * num),
      y: Math.floor(Math.random() * num)
    });
  };
  return cities;
};

function filterCities(arr){
  var hash = {};
  arr.forEach(function(item, ind){
    var key = 'x' + item.x + 'y' + item.y
    hash[key] === 0 ? hash[key]++ : hash[key] = 0;
  });
  
  return arr.filter(function(item, ind){
    var key = 'x' + item.x + 'y' + item.y;
    var res = hash[key] <= 0;
    if(!res) hash[key]--;
    return res;
  })
}

function makeCities(max){
  var cities = [];
  do {
    cities = cities.concat(createCities(max - cities.length))
    cities = filterCities(cities);
  } while (cities.length < max);
  // The do - while loop both initializes and continues to run the createCities and filterCities functions
  // until the number of cities is equal to the maximum number specified.
  cities = cities.map(function(a, ind){
    var obj = {
      coords: {x: a.x, y: a.y},
      dists: []
    };
    cities.forEach(function(b, ind){
      if(JSON.stringify(b) === JSON.stringify(a)) return;
      obj.dists.push({
        coords: {x: b.x, y: b.y},
        dist: Math.round(cd(a, b) * 100) / 100
      });
    }); 
    return obj;
  });
  return cities;
};

function cd(a, b){
  var sideOne = Math.abs(a.x - b.x);
  var sideTwo = Math.abs(a.y - b.y);
  return Math.sqrt((sideOne * sideOne) + (sideTwo * sideTwo));
}

