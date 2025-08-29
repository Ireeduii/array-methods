// pwd
// ls
// cd
// mkdir
// touch

// 1. twoSum =>[2, 7, 11,15] => [0, 1]
// 1. array element console.log
// 2. nested loop 2 > 27, 211, 215
const array  = [2, 7, 11, 15];
const twoSum = (array, target) => {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
          if (array[i] + array[j] === target) {
              return [i, j];
          }
       
      }
    }     

}
console.log(twoSum(array));
