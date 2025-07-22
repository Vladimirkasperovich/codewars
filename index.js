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

const getNodes = (tree, type) => {
    const result = [];
    if (tree.type === type) result.push(tree)

    if (Array.isArray(tree.children)) {
        tree.children.forEach((cur) => {
            result.push(...getNodes(cur, type))
        })
    }

    return result;

};


// const tree1 = {
//     type: "nested",
//     children: [
//         {type: "removed", value: 10},
//         {
//             type: "nested", children: [
//                 {type: "added", value: 20},
//                 {type: "changed", oldValue: 30, newValue: 31}
//             ]
//         },
//         {type: "added", value: 40}
//     ]
// }
// console.log(getNodes(tree1, 'added'))
//
// const tree2 = {
//     type: "nested",
//     children: [
//         {type: "nested", children: []}, // Пустой вложенный узел
//         {type: "unchanged", value: 100},
//         {
//             type: "nested", children: [
//                 {
//                     type: "nested", children: [
//                         {type: "unchanged", value: 200}
//                     ]
//                 }
//             ]
//         }
//     ]
// }
//
// console.log(getNodes(tree2, "unchanged"))

const groupAnagrams = (arr) => {
    const groups = new Map();

    arr.forEach((word) => {
        const sortedWord = word.toLowerCase().split('').sort().join('');
        if (!groups.has(sortedWord)) {
            groups.set(sortedWord, [word])
        } else {
            groups.get(sortedWord).push(word)
        }
    })
    return [...groups.values()]
}

// console.log(groupAnagrams(["ab", "ba", "abc", "bca"])) //[["abc","bca"],["ab","ba"]]
// console.log(groupAnagrams(["listen", "silent", "enlist"])) //[["listen","silent","enlist"]]


const findSubstring = (substring, arr) => {
    return arr.filter((word) => word.includes(substring))
};

// console.log(findSubstring("oo", ["food", "door", "moon"])) //["food", "door", "moon"]
// console.log(findSubstring("xyz", ["apple", "banana", "cherry"])) //[]

const checkBrackets = (str) => {
    const map = {'(': ')', '{': '}', '[': ']'}
    const stack = [];
    for (const bracket of str) {
        if (map[bracket]) {
            stack.push(bracket)
        } else if (Object.values(map).includes(bracket)) {
            const lastRemoved = stack.pop();
            if (map[lastRemoved] !== bracket) {
                return false
            }
        }
    }
    return stack.length === 0;
}
// console.log(checkBrackets("{Hi(good day)!}")) //true
// console.log(checkBrackets("{nice[day}")) //false


const memoize = (fn) => {
    const cash = new Map();
    return (...args) => {
        const key = args.length === 1 ? args[0] : JSON.stringify(args);
        if (cash.has(key)) {
            return cash.get(key)
        }
        const result = fn(...args);
        cash.set(key, result)
        return result
    }
}

// // Тест 1: Функция с одним числовым аргументом
// function square(x) {
//     console.log(`Вычисление square(${x})`);
//     return x * x;
// }
//
// const memoizedSquare = memoize(square);
//
// console.log(memoizedSquare(4)); // Должно вычислить и вывести 16
// console.log(memoizedSquare(4)); // Должно вернуть 16 без вычисления
// console.log(memoizedSquare(5)); // Должно вычислить и вывести 25
// console.log(memoizedSquare(5)); // Должно вернуть 25 без вычисления
//
// // Тест 2: Функция с несколькими аргументами
// function sum(a, b) {
//     console.log(`Вычисление sum(${a}, ${b})`);
//     return a + b;
// }
//
// const memoizedSum = memoize(sum);
//
// console.log(memoizedSum(2, 3)); // Должно вычислить и вывести 5
// console.log(memoizedSum(2, 3)); // Должно вернуть 5 без вычисления
// console.log(memoizedSum(2, 4)); // Должно вычислить и вывести 6

/**
 * Возвращает n-ное число Фибоначчи.
 * Оптимизируй для многократных вызовов.
 * @param {number} n
 * @returns {number}
 */
function fibonacci(n) {
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2)
}

// // Тесты:
// const fibMemoize = memoize(fibonacci)
// console.log(fibMemoize(10)); // 55
// console.log(fibMemoize(50)); // 12586269025 (должно работать быстро)

/**
 * Дан массив чисел от 1 до N с одним пропущенным числом.
 * Найди пропущенное число.
 * @param {number[]} nums
 * @returns {number}
 */
function findMissingNumber(nums) {
    const max = Math.max(...nums);
    for (let i = 1; i <= max; i++) {
        if (!nums.includes(i)) {
            return i
        }
    }
}

// Тесты:
// console.log(findMissingNumber([3, 1, 4, 5])); // 2
// console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 1])); // 8

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    const brackets = {'(': ')', '{': '}', '[': ']'}
    const stack = [];
    for (const bracket of s) {
        if (brackets[bracket]) {
            stack.push(bracket)
        } else if (Object.values(brackets).includes(bracket)) {
            const lastItem = stack.pop();
            if (brackets[lastItem] !== bracket) {
                return false;
            }
        }
    }
    return stack.length === 0
}
// console.log(isValid("()")) //true
// console.log(isValid("()[]{}")) //true
// console.log(isValid("([)]")) //false

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    const set = new Set()
    let left = 0;
    let maxLength = 0

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        while (set.has(currentChar)) {
            set.delete(s[left])
            left++
        }
        set.add(currentChar)
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        const first = nums[i];
        const second = nums[i + 1];
        const third = nums[i + 2];
        if (second && third) {
            if (first < second && second < third) {
                return true
            }
        }
    }
    return false;
};

// console.log(increasingTriplet([1, 2, 3, 4, 5])) //true
// console.log(increasingTriplet([5, 4, 3, 2, 1])) //false
// console.log(increasingTriplet([2, 1, 5, 0, 4, 6])) //true


const findDifference = (nums1, nums2) => {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    const firstArray = [...set1].filter((item) => !set2.has(item))
    const secondArray = [...set2].filter((item) => !set1.has(item))

    return [firstArray, secondArray]
};
// console.log(findDifference([1, 2, 3], [2, 4, 6])) //[[1,3],[4,6]]
// console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2])) //[[3],[]]

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = (arr) => {
    const map = new Map();
    for (const number of arr) {
        if (!map.has(number)) {
            map.set(number, 1)
        } else {
            map.set(number, map.get(number) + 1)
        }
    }
    return [...map.values()].length === new Set(map.values()).size
};
// console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])) //true
// console.log(uniqueOccurrences([1, 2])) //false
// console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])) //true