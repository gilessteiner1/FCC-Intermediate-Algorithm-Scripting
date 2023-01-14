/* We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10. */
function sumAll(arr) {
  let total = 0;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  for(let i=min; i<=max; i++){
    total += i;
  }
  return total;
}
console.log(sumAll([1, 4])); //->10

/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
Note: You can return the array with its elements in any order. */
function diffArray(arr1, arr2) {
  const newArr = [];
  let mergedArr = arr1.concat(arr2);
  for(let i=0; i<mergedArr.length; i++){
    if(!(arr1.includes(mergedArr[i]) && arr2.includes(mergedArr[i]))){
      newArr.push(mergedArr[i]);
    }
  }
  return newArr;
}
console.log(diffArray([1, 2, 3, 5, 8], [1, 2, 3, 4, 5])); //-> [8,4]
