'use strict'

const merge = (nums1, m, nums2, n) => {
    nums1.splice(m, nums1.length - m);
    nums2.splice(n, nums2.length - n);

    for (let i = 0; i < nums2.length; i++) {
        nums1.push(nums2[i])
    }

    nums1.sort((a, b) => a - b);
}

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)) //[1,2,2,3,5,6]
// console.log(merge([1], 1, [], 0)) //[1]
// console.log(merge([0], 0, [1], 1)) //[1]

const removeElement = (nums, val) => {
    let removeCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[removeCount] = nums[i]
            removeCount++
        } else {
            nums[i] = '_'
        }
    }
    return nums;
}

// console.log(removeElement([3, 2, 2, 3], 3)) //2, nums = [2,2,_,_]
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)) //5, nums = [0,1,4,0,3,_,_,_]


const removeDuplicates = (nums) => {
    const unique = [...new Set(nums)];
    let k = unique.length
    for (let i = 0; i < nums.length; i++) {
        nums[i] = i < k ? unique[i] : nums[i];
    }
    return k;
}
// console.log(removeDuplicates([1, 1, 2])) //2, nums = [1,2,_]
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])) //5, nums = [0,1,2,3,4,_,_,_,_,_]
// console.log(removeDuplicates([-3, -1, -1, 0, 0, 0, 0, 0, 2]))

const removeDuplicatesMedium = (nums) => {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (k < 2 || nums[i] !== nums[k - 2]) {
            nums[k] = nums[i]
            k++
        }
    }
    return k;
}
// console.log(removeDuplicatesMedium([1, 1, 1, 2, 2, 3])) //5, nums = [1, 1 ,2,2,3,_]
// console.log(removeDuplicatesMedium([0, 0, 1, 1, 1, 1, 2, 3, 3])) //7, nums = [0,0,1,1,2,3,3,_,_]


const memoize = (fn) => {
    const cache = new Map();
    return function (...args) {
        const key = args ? JSON.stringify(args) : 'no-args'
        if (cache.has(key)) return cache.get(key);
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

// let callCount = 0;
// const memoizedFn = memoize(function (a, b) {
//     callCount += 1;
//     return a + b;
// })
// console.log(memoizedFn(2, 3)) // 5
// console.log(memoizedFn(2, 3)) // 5
// console.log(callCount) // 1