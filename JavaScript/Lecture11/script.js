let namArray = ["Alex",5, true, null, undefined];
console.log(namArray[1]);

let multiDimensionalArray = ["Smith", ["Bill", 22,"Jones", null], true, 85, undefined];

console.log(multiDimensionalArray[1][0]);

//destructuring of Array

var bbb = ["saad", 22, true];
var [name, rollnum, status] =  bbb;
console.log(rollnum);

// Cloning of Array

let firstArray = [1,2,3]
let secondArray = [5,6,7,8]

let combinedArray = [...firstArray,...secondArray]
console.log(combinedArray)

let combinedArray2 = [firstArray, secondArray];
console.log(combinedArray2)

//sort array
let number =  [5,6,7,8,10, 1, 2,6]
console.log(number.sort());