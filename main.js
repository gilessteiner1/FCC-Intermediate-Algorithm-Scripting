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

/* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
Note: You have to use the arguments object. */
function destroyer(...args) {
  let destroyArr = args.slice(1);
  let oldArr = args.slice(0,1)[0];
  let newArr = oldArr.filter( function(element){
    return !destroyArr.includes(element);
  });
  return newArr;
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); //->[1,1]

/* Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument. */
function whatIsInAName(collection, source) {
  let matchingPairs = [];
  collection.forEach( function(element){
    let match = true;
    for(let key in source){
      if(!(element[key] === source[key])){
        match = false;
      }
    }
    if(match === true){
      matchingPairs.push(element);
    }
  });
  return matchingPairs
}
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })); //-> [{ first: 'Tybalt', last: 'Capulet' }]

/*Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
- If a word begins with a vowel, just add way at the end.
- Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase. */
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

/* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
Note: You have to use the arguments object. */
function destroyer(...args) {
  let destroyArr = args.slice(1);
  let oldArr = args.slice(0,1)[0];
  let newArr = oldArr.filter( function(element){
    return !destroyArr.includes(element);
  });
  return newArr;
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); //->[1,1]

/* Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument. */
function whatIsInAName(collection, source) {
  let matchingPairs = [];
  collection.forEach( function(element){
    let match = true;
    for(let key in source){
      if(!(element[key] === source[key])){
        match = false;
      }
    }
    if(match === true){
      matchingPairs.push(element);
    }
  });
  return matchingPairs
}
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })); //-> [{ first: 'Tybalt', last: 'Capulet' }]

/*Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
- If a word begins with a vowel, just add way at the end.
- Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase. */
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

/* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
Note: You have to use the arguments object. */
function destroyer(...args) {
  let destroyArr = args.slice(1);
  let oldArr = args.slice(0,1)[0];
  let newArr = oldArr.filter( function(element){
    return !destroyArr.includes(element);
  });
  return newArr;
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); //->[1,1]

/* Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument. */
function whatIsInAName(collection, source) {
  let matchingPairs = [];
  collection.forEach( function(element){
    let match = true;
    for(let key in source){
      if(!(element[key] === source[key])){
        match = false;
      }
    }
    if(match === true){
      matchingPairs.push(element);
    }
  });
  return matchingPairs
}
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })); //-> [{ first: 'Tybalt', last: 'Capulet' }]

/*Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
- If a word begins with a vowel, just add way at the end.
- Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase. */
function isVowel(c){
  return ['a','e','i','o','u'].includes(c);
}

function hasVowel(str){
  let vowelExist = false;
  for(let i=0; i<str.length; i++){
    if(isVowel(str[i])){
      vowelExist = true;
    }
  }
  return vowelExist; 
}

function translatePigLatin(str) {
  let firstLetter = str[0];
  if(isVowel(firstLetter)){
    return str+"way";
  }
  else if(hasVowel(str)){
    for(let i=0; i<str.length; i++){
      if(isVowel(str[i])){
        return str.slice(i) + str.slice(0,i) + "ay";
      }
    }
  }
  else{
    return str + "ay";
  }
}
console.log(translatePigLatin("schwartz")); //->artzschway
