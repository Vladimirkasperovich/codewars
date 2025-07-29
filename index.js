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

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const delayedGreet = (name, cb) => {
    setTimeout(() => {
        console.log(`Привет ${name}`)
        cb()
    }, 100)
}

// delayedGreet("Макс", () => console.log("Приветствие завершено!"));

// /**
//  * Проверяет, четное ли число, и вызывает колбек с результатом
//  * @param {number} num - Число для проверки
//  * @param {(isEven: boolean) => void} cb - Колбек, принимающий boolean
//  */
// const checkEven = (num, cb) => {
//     cb(num % 2 === 0)
// };
//
// // Тест
// checkEven(4, (result) => console.log(`Четное? ${result}`)); // → "Четное? true"

/**
 * Возводит число в квадрат через 1 секунду и передает результат в колбек
 * @param {number} x - Число
 * @param {(result: number) => void} cb - Колбек с результатом
 */
const asyncSquare = (x, cb) => {
    // Твой код здесь
    setTimeout(() => {
        cb(x * x)
    }, 1000)
};

// Тест
// asyncSquare(3, (res) => console.log(res)); // → 9 (через 1 сек)

/**
 * Асинхронная функция, которая принимает число и колбек в стиле Node.js (err, result)
 * @param {number} x - Входное число
 * @param {(err: Error | null, result?: number) => void} callback - Колбек
 */

const promisify = (fn) => {
    return (...args) => {
        return new Promise((resolve, reject) => {
            fn(...args, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    }
}

// const asyncTask = (x, callback) => {
//     setTimeout(() => {
//         if (x < 0) {
//             callback(new Error("Число должно быть положительным!"));
//         } else {
//             callback(null, x * 2);
//         }
//     }, 1000);
// };
//
// // 1. Успешное выполнение
// const promisedTask = promisify(asyncTask);
// promisedTask(5)
//     .then((result) => console.log("Результат:", result)) // Ожидаемый вывод (через 1 сек): "Результат: 10"
//     .catch((err) => console.error("Ошибка:", err));
//
// // 2. Ошибка
// promisedTask(-3)
//     .then((result) => console.log("Результат:", result))
//     .catch((err) => console.error("Ошибка:", err)); // Ожидаемый вывод: "Ошибка: Error: Число должно быть положительным!"
//
// // 3. Промисификация другой функции (дополнительно)
// const asyncSum = (a, b, callback) => {
//     setTimeout(() => callback(null, a + b), 500);
// };
// const promisedSum = promisify(asyncSum);
// promisedSum(2, 3)
//     .then((sum) => console.log("Сумма:", sum)); // Ожидаемый вывод (через 0.5 сек): "Сумма: 5"


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams1 = (strs) => {
    const map = new Map()
    strs.forEach((item) => {
        const sortedItem = item.toLowerCase().split('').sort().join();
        if (!map.has(sortedItem)) {
            map.set(sortedItem, [item])
        } else {
            map.get(sortedItem).push(item)
        }
    })
    return [...map.values()]
};
// console.log(groupAnagrams1(["eat", "tea", "tan", "ate", "nat", "bat"])) //[["bat"],["nat","tan"],["ate","eat","tea"]]
// console.log(groupAnagrams1([""])) //[[""]]
// console.log(groupAnagrams1(["a"])) //[["a"]]

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
    const hashMap = {};
    for (const word of magazine) {
        hashMap[word] = (hashMap[word] || 0) + 1;
    }

    for (const word of ransomNote) {
        if (!hashMap[word]) {
            return false
        }

        hashMap[word] -= 1;
    }
    return true;
}
// console.log(canConstruct("a", "b")) //false
// console.log(canConstruct("aa", "ab")) //false
// console.log(canConstruct("aa", "aab")) //true

// Необходимо обработать массив таким образом, чтобы распределить людей по группам городов

// Данные на вход
const people = [
    {
        name: 'Alex',
        city: 'Moscow',
    },
    {
        name: 'Ivan',
        city: 'Moscow',
    },
    {
        name: 'Joe',
        city: 'New York'
    },
    {
        name: 'Johan',
        city: 'Berlin'
    },
]

const groupByCity = (array) => {
    const map = new Map();
    array.forEach(({name, city}) => {
        if (!map.has(city)) {
            map.set(city, name)
        } else if (map.has(city)) {
            map.set(city, [map.get(city), name])
        }
    })
    return map;
}
// console.log(groupByCity(people))
// Данные на выход
/*
{
  'Moscow': [ 'Alex', 'Ivan' ],
  'New York': 'Joe',
  'Berlin': 'Johan'
}
*/

const array1 = [[1, 3], [2, 6], [8, 10], [15, 18]]; // [[1, 6], [8, 10], [15, 18]]
const array2 = [[1, 4], [4, 5]]; // [[1, 5]]
const array3 = [[11, 12], [2, 3], [5, 7], [1, 4], [8, 10], [6, 8]]; // [[1, 4], [5, 10], [11, 12]]

function merge(intervals) {
    if (intervals.length < 2) return intervals;

    const sortedInterval = [...intervals].sort((a, b) => a[0] - b[0])
    const result = [intervals[0]];
    for (const interval of sortedInterval) {
        const recent = result[result.length - 1];
        if (recent[1] >= interval[0]) {
            recent[1] = Math.max(recent[1], interval[1])
        } else {
            result.push(interval)
        }
    }
    return result
}

// console.log(merge(array1));
// console.log(merge(array2));
// console.log(merge(array3));

// Объект на вход
const object = {
    a: {
        d: {
            h: 4
        },
        e: 2
    },
    b: 1,
    c: {
        f: {
            g: 3,
            k: {}
        }
    }
};

const addLevels = (obj, level = 0) => {
    let result = {};
    for (const key in obj) {
        if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            result[key] = addLevels(obj[key], level + 1)
        } else {
            result[key] = obj[key]
        }
    }
    result.level = level
    return result
}
// console.log(addLevels(object))
// Данные на выход
/*
updatedObject {
  a: { d: { h: 4, level: 2 }, e: 2, level: 1 },
  b: 1,
  c: { f: { g: 3, k: [Object], level: 2 }, level: 1 },
  level: 0
}*/


/*
Задача: Напишите функцию flattenObject(obj), которая принимает в качестве
аргумента вложенный объект obj и возвращает новый объект,
в котором все свойства объекта obj "разглажены"
(преобразованы в одноуровневую структуру), с использованием точечной нотации
для представления иерархии свойств.
*/

const obj = {
    a: {
        b: {
            c: 1,
            d: 2
        },
        e: 3
    },
    f: 4
};

const flattenObject = (obj, str = '') => {
    let result = {};

    for (const key in obj) {
        if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            result = {...result, ...flattenObject(obj[key], str + key + '.')}
        } else {
            result[str + key] = obj[key]
        }
    }

    return result;
}

// const flattenedObj = flattenObject(obj);
// console.log(flattenedObj);
// Ожидаемый результат: { 'a.b.c': 1, 'a.b.d': 2, 'a.e': 3, 'f': 4 } || { "f": 4, "a.e": 3, "a.b.c": 1, "a.b.d": 2 }

function flattenArray(arr) {
    const result = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            result.push(...flattenArray(item))
        } else {
            result.push(item)
        }
    }
    return result;
}

// const nestedArray = [1, [2, [3, 4], 5], 6];
// console.log(flattenArray(nestedArray)); // [1, 2, 3, 4, 5, 6]


const myMap = (arr, fn) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i, arr))
    }
    return result
}

// console.log(myMap([1, 2, 3, 4, 5], (n) => n + 1))


const myFilter = (arr, fn) => {
    const result = [];
    for (let index = 0; index < arr.length; index++) {
        const currentItem = arr[index];
        if (fn(currentItem, index, arr)) {
            result.push(currentItem)
        }
    }
    return result;
}
// console.log(myFilter([0, 0, 0, 1, 2, 3,], (n) => n !== 0))

const myReduce = (arr, fn, initialValue = 0) => {
    let accumulator = initialValue;
    for (let i = 0; i < arr.length; i++) {
        accumulator = fn(accumulator, arr[i], i, arr)
    }
    return accumulator;
}
// console.log(myReduce([1, 2, 3], (acc, cur) => acc + cur, 0));

const countKeysFromObject = (arr) => {
    const countMap = {};
    arr.forEach(item => {
        Object.entries(item).forEach(([key, value]) => {
            if (!countMap[key]) countMap[key] = {};
            countMap[key][value] = (countMap[key][value] || 0) + 1;
        })
    })
    return Object.entries(countMap).flatMap(([key, values]) =>
        Object.entries(values).map(([value, count]) => ({[key]: value, count}))
    )
}
const language = [
    {language: 'JavaScript'}, {language: 'JavaScript'}, {language: 'TypeScript'}, {language: 'C++'}
]
// console.log(countKeysFromObject(language))
/*[
{ language: 'JavaScript', count: 2 },
{ language: 'C++', count: 1 },
{ language: 'TypeScript', count: 1 }
]*/