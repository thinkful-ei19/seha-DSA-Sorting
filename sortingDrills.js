'use strict';

const array = [ 89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50,
  13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27,
  68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16,
  85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7,
  46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7,
  64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51,
  54, 84, 34, 53, 78, 40, 14, 5
];

function qSort(array, start = 0, end = array.length, count=0){
  count ++;
  if(start >= end){
    return array;
  }
  const middle = partition(array, start, end);
  array = qSort(array, start, middle, count);
  array = qSort(array, middle + 1, end, count);
  return array;
}
console.log(qSort(array));

//best and avarage case performance for quickSort is O(nlog(n)), 
//O(n^2) is the worst case. it is cache efficient and easily be performed in place.

function partition(array, start, end, partition=0) {
  partition++;
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

function swap(array, i, j, swapCounter=0) {
  swapCounter++;
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function mSort(array, count=0){
  count++;
  if(array.length <= 1){
    return [array, count];
  }
  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mSort(left, count);
  right = mSort(right, count);
  return merge(left[0], right[0], array);
}
console.log(mSort(array));
//console.log('mSort() Count:', count);

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    }
    else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}




