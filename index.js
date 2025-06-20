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