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


const compose = (functions) => {
    return function (x) {
        return functions.reduceRight((acc, cur) => {
            acc = cur(acc)
            return acc
        }, x)
    }
};


// const fn = compose([x => x + 1, x => x * x, x => 2 * x])
// console.log(fn(4)) // 65

const timeLimit = (fn, t) => {

    return async (...args) => {
        const timeout = new Promise((_, reject) => {
            setTimeout(() => {
                reject('Time Limit Exceeded')
            }, t)
        })

        try {
            const result = await Promise.race([fn(...args), timeout])
            return Promise.resolve(result);
        } catch (error) {
            return Promise.reject(error)
        }
    }
};


// const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
// limited(150).catch((err) => console.log(err)) // "Time Limit Exceeded" at t=100ms


function TimeLimitedCache() {
    this.obj = new Map()
}

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    const expired = this.obj.get(key);
    const wasValid = expired?.expiredAt > Date.now();

    if (expired?.timeoutId) {
        clearTimeout(expired.timeoutId);
    }

    const timeoutId = setTimeout(() => {
        this.obj.delete(key);
    }, duration);

    this.obj.set(key, {
        value,
        expiredAt: Date.now() + duration,
        timeoutId
    });

    return wasValid;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    const item = this.obj.get(key);
    if (item?.expiredAt <= Date.now()) {
        return -1
    }
    return item.value
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    let count = 0;
    const now = Date.now();

    for (const value of this.obj.values()) {
        if (value.expiredAt > now) {
            count++
        }
    }
    return count;
};


// const timeLimitedCache = new TimeLimitedCache()
// console.log(timeLimitedCache.set(1, 42, 1000)); // false
// console.log(timeLimitedCache.get(1)) // 42
// console.log(timeLimitedCache.count()) // 1


const chunk = (arr, size) => {
    if (!arr.length) return [];

    const result = [];
    let currentChunk = [];

    for (let i = 0; i < arr.length; i++) {
        currentChunk.push(arr[i]);

        if (currentChunk.length === size) {
            result.push(currentChunk);
            currentChunk = [];
        }
    }

    if (currentChunk.length > 0) {
        result.push(currentChunk);
    }

    return result
}

// console.log(chunk([1, 2, 3, 4, 5], 1)) //[[1],[2],[3],[4],[5]]
// console.log(chunk([1, 9, 6, 3, 2], 3)) //[[1,9,6],[3,2]]
// console.log(chunk([8, 5, 3, 2, 6], 6)) //[[8,5,3,2,6]]
// console.log(chunk([], 1)) //[]

// Array.prototype.last = function () {
//     const arr = this;
//     return arr.length > 0 ? arr[arr.length - 1] : -1
// };

// const arr = [];
// console.log(arr.last())


const removeDuplicates3 = (arr) => {
    const map = new Map();

    for (const item of arr) {
        map.set(item, item)
    }

    return [...map.values()]
}

// console.log(removeDuplicates3([1, 1, 1, 2, 2, 2, 3, 3, 3]))


const myPromiseRace = (promises) => {
    return new Promise((resolve, reject) => {
        promises.forEach((item) => {
            Promise.resolve(item)
                .then(resolve)
                .catch(reject)
        })
    })
}


// // 1. Первый resolve быстрее всех
// myPromiseRace([
//     new Promise(res => setTimeout(() => res("first"), 10)),
//     new Promise(res => setTimeout(() => res("second"), 20))
// ]).then(console.log); // "first"


