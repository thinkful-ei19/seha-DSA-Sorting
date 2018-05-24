'use strict';

const array = [9, 4, 6, 3];

function bucketSort(array, highest, lowest) {
  let count = highest - lowest + 1;
  let buckets = new Array(count);
  let newArr =[];

  for (let i = 0; i < array.length; i++) {
    buckets[array[i] - lowest] = (array[i]);
  }

  for(let k=0; k < buckets.length; k++){
    if(typeof buckets[k] === 'number'){
      newArr.push(buckets[k]);
    }
  }
  return newArr;
}

console.log(bucketSort(array, 3, 9));
