let arrayToSort = [1, 20, 3, 345, 2, 11];

console.log(sort(arrayToSort));

function sort(arr, step = 1, max) {
  let buckets = [];
  arr.forEach(i => {
    let val = `${i}`
    if (!max || max < val.length) max = val.length;
    val = val[val.length - step];
    if (!buckets[val || 0]) buckets[val || 0] = [];
    buckets[val || 0].push(i);
  });
  let sortedArr = buckets.reduce((final, next) => final.concat(next), []);
  if (step < max) return sort(sortedArr, step + 1, max);
  else return sortedArr;
}
