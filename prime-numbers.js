function prime(max){
  var nums = [];
  for(var i = 2; i <=max; i++){
    nums.push(i);
  }
  for(var i = 0; i < nums.length; i++){
    for(var j = i; j < nums.length; j++){
      if(j !== i && nums[j] % nums[i] === 0){
        nums.splice(j, 1);
        j--
      }
    }
  }
  console.log(nums);
  return nums;
}

// Resource: http://en.wikipedia.org/wiki/Sieve_of_Eratosthenes