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

