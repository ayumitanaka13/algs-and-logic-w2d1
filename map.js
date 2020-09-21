let nums = [1, 5, 7, 8, 9, 0];

console.log('this is nums', nums);
// this is nums [ 1, 5, 7, 8, 9, 0 ]

const mapped = nums.map(element => element + 10);

console.log('this is mapped', mapped);
// this is mapped [ 11, 15, 17, 18, 19, 10 ]

console.log('this is the original array', nums);
// this is the original array [ 1, 5, 7, 8, 9, 0 ]