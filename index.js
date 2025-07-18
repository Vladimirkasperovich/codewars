'use strict'

const twoSum = (nums, target) => {
    const cash = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const diff = target - num;
        if (cash.has(diff)) {
            return [cash.get(diff), i]
        }
        cash.set(num, i)
    }
    return null
};

// console.log(twoSum([2, 7, 11, 15], 9)) //[0, 1]
// console.log(twoSum([3, 2, 4, 1], 5)) //[0, 1]
// console.log(twoSum([1, 2, 3, 4], 10)) //null