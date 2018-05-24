'use strict';
const array=[1,2,3];

function shuffleArray(array){
  for(let i= array.length - 1; i> 0; i--){
    const k=Math.floor(Math.random() * (i+1));
    [array[i], array[k]= array[i], array[k]];
  }
  return array;

}
console.log(shuffleArray(array));
