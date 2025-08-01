'use strict';

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    if (nums.length < 3) return [];

    const result = [];
    const arr = [...nums].sort((a, b) => a - b)

    for (let i = 0; i < arr.length - 2; i++) {
        const current = arr[i];

        if (current > 0) {
            break;
        }
        if (i > 0 && arr[i] === arr[i - 1]) {
            continue;
        }

        let j = i + 1;
        let k = arr.length - 1;

        while (j < k) {
            const sum = arr[i] + arr[j] + arr[k];
            if (sum === 0) {
                result.push([arr[i], arr[j], arr[k]]);

                while (arr[j] === arr[j + 1]) j++;
                while (arr[k] === arr[k - 1]) k--;

                j++;
                k--;
                continue;
            }


            if (sum < 0) {
                j++
                continue;
            }

            if (sum > 0) {
                k--;
                continue;
            }
        }

    }
    return result;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Ожидаемый вывод: [[-1, -1, 2], [-1, 0, 1]]
// console.log(threeSum([]));// Ожидаемый вывод: []
// console.log(threeSum([0]));// Ожидаемый вывод: []
// console.log(threeSum([0, 0, 0]));// Ожидаемый вывод: [[0, 0, 0]]
// console.log(threeSum([-2, 0, 1, 1, 2]));// Ожидаемый вывод: [[-2, 0, 2], [-2, 1, 1]]
// console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));// Ожидаемый вывод (частичный пример): [[-4, -2, 6], [-4, 0, 4], [-4, 1, 3], [-4, 2, 2], ...]
// console.log(threeSum([-1, 0, 1, 0]));// Ожидаемый вывод: [[-1,0,1]]


/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

const merge = (intervals) => {
    if (intervals.length < 2) return intervals;


    const sortedArray = [...intervals].sort((a, b) => a[0] - b[0])
    const result = [sortedArray[0]];

    for (const interval of sortedArray) {
        const recent = result[result.length - 1];
        if (recent[1] >= interval[0]) {
            recent[1] = Math.max(recent[1], interval[1])
        } else {
            result.push(interval);
        }
    }

    return result;
};

// console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));// Ожидаемый вывод: [[1, 6], [8, 10], [15, 18]]
// console.log(merge([[1, 4], [4, 5]]));// Ожидаемый вывод: [[1, 5]]
// console.log(merge([[1, 4], [0, 2], [3, 5]]));// Ожидаемый вывод: [[0, 5]]


/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = (s) => {
    const map = {"(": ")", "[": "]", "{": "}"}
    const stack = [];

    for (const bracket of s) {
        if (map[bracket]) {
            stack.push(bracket);
        } else if (Object.values(map).includes(bracket)) {
            const lastItem = stack.pop();
            if (map[lastItem] !== bracket) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

// console.log(isValid("()")); // true
// console.log(isValid("()[]{}")); // true
// console.log(isValid("(]")); // false
// console.log(isValid("([)]")); // false
// console.log(isValid("{[]}")); // true

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isAnagram = (s, t) => {
    const firstParam = s.toLowerCase().split('').sort().join("");
    const secondParam = t.toLowerCase().split('').sort().join("");

    return firstParam === secondParam

};

// console.log(isAnagram("anagram", "nagaram")); // true
// console.log(isAnagram("rat", "car")); // false
// console.log(isAnagram("", "")); // true


/**
 * @param {number} n
 * @return {string[]}
 */

const fizzBuzz = (n) => {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz')
        } else if (i % 3 === 0) {
            result.push('Fizz')
        } else if (i % 5 === 0) {
            result.push('Buzz')
        } else {
            result.push(`${i}`)
        }

    }
    return result;
};

// console.log(fizzBuzz(5));
// ["1", "2", "Fizz", "4", "Buzz"]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
    const map = new Map();
    for (const str of strs) {
        const key = str.split('').sort().join('');

        if (!map.has(key)) {
            map.set(key, [str]);
        } else {
            map.get(key).push(str)
        }

    }
    return [...map.values()]
};

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["eat","tea","ate"],["tan","nat"],["bat"]]


const timeLimit = (fn, t) => {
    return async (...args) => {
        const timeout = new Promise((_, reject) => {
            setTimeout(() => {
                reject('Time Limit Exceeded')
            }, t)
        })

        try {
            const result = await Promise.race([fn(...args), timeout])
            return Promise.resolve(result)
        } catch (err) {
            return Promise.reject(err)
        }
    }
}

// // ✅ 1. Функция успевает выполниться
// const limited1 = timeLimit((t) => new Promise(res => setTimeout(() => res("OK"), t)), 1000);
// limited1(500).then(console.log).catch(console.error); // 👉 "OK" (после 500ms)


const isPalindrome = (str) => {
    const filteredStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    let start = 0;
    let end = filteredStr.length - 1;
    while (start < end) {
        if (filteredStr[start] !== filteredStr[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

// console.log(isPalindrome("A man a plan a canal Panama")) // true

const maxChar = (str) => {
    const seen = {};
    for (const char of str) {
        seen[char] = (seen[char] || 0) + 1;
    }

    const max = Math.max(...Object.values(seen))
    return Object.entries(seen).find((item) => item[1] === max)[0]

}
// console.log(maxChar("javascript")) // 'a'

const isBalanced = (str) => {
    const map = {'(': ')', '{': '}', '[': ']'};
    const stack = [];
    for (const bracket of str) {
        if (map[bracket]) {
            stack.push(bracket)
        } else if (Object.values(map).includes(bracket)) {
            const lastBracket = stack.pop();
            if (map[lastBracket] !== bracket) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

// console.log(isBalanced("([{}])")) // true
// console.log(isBalanced("([)]"))   // false


const secondMax = (arr) => {
    const array = [...arr].sort((a, b) => b - a)
    const max = Math.max(...array);
    return array.find((element) => element < max)
}
// console.log(secondMax([2, 3, 1, 4, 5])) // 4
