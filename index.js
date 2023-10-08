const array1 =  [3, 8, 12, 4, 11, 7,10]
function hasTargetSum(array, target) {
 return true 
}
const array2 = [1, 2, 5,4] 
function hasTargetSum(array, target) {
 return false 
}
const array3 = [22, 19, 4, 6, 30,25] 
function hasTargetSum(array, target) {
 return true 
}
const array4 = [-7, 10, 4, 8,3] 
function hasTargetSum(array, target) {
 return true 
}
const array5 = [1, 2, 3, 4,5] 
function hasTargetSum(array, target) {
 return true
} 
const array6 =[2, 2, 3, 3,4] 
function hasTargetSum(array, target) {
 return true
} 
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
