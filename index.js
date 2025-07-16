'use strict'

/**
 *
 * Task: Реализовать функцию groupBy, которая группирует элементы массива по ключу, возвращаемому колбеком.
 * Например, groupBy([6.1, 4.2, 6.3], Math.floor) должно вернуть { 6: [6.1, 6.3], 4: [4.2] }.
 *
 */

const groupBy = (array, callback) => {
    const seenItems = new Map();

    for (const item of array) {
        const key = callback(item);
        const group = seenItems.get(key);

        if (!group) {
            seenItems.set(key, [item])
        } else {
            group.push(item)
        }
    }

    return seenItems

}

// console.log(groupBy([6.1, 4.2, 6.3], Math.floor)) // { 6: [6.1, 6.3], 4: [4.2] }
// console.log(groupBy(['one', 'two', 'three'], val => val.length)) // { 3: ['one', 'two'], 5: ['three'] }


/**
 *
 * Task: Напишите функцию flatten, которая превращает вложенный массив в плоский массив.
 * Пример: flatten([1, [2, [3, 4], 5]]) должно вернуть [1, 2, 3, 4, 5].
 *
 */

const flatten = (array) => {
    if (!array.length) return array;

    const result = []
    for (let index = 0; index < array.length; index++) {
        const current = array[index]
        if (Array.isArray(current)) {
            result.push(...flatten(current))
        } else {
            result.push(current)
        }
    }

    return result
}
//
// console.log(flatten([1, [2, [3, 4], 5]])) // [1, 2, 3, 4, 5]
// console.log(flatten([[[1]], 2, [[3, [4]]]])) // [1, 2, 3, 4]


/**
 * Task: Реализуй функцию getUnique, которая возвращает массив уникальных значений.
 * Пример: getUnique([1, 2, 2, 3, 4, 4]) → [1, 2, 3, 4]
 */

const getUnique = (array) => {
    const seen = {};
    array.forEach((item) => {
        seen[item] = item
    })

    return Object.values(seen)
}

// console.log(getUnique([1, 2, 2, 3, 4, 4])) // [1, 2, 3, 4]
// console.log(getUnique(['a', 'b', 'a', 'c'])) // ['a', 'b', 'c']

/**
 * Task: Напиши функцию intersection, которая возвращает пересечение двух массивов.
 * Пример: intersection([1, 2, 3], [2, 3, 4]) → [2, 3]
 */

const intersection = (arr1, arr2) => {
    const set = new Set(arr2);
    return [...new Set(arr1.filter((item) => set.has(item)))]
}

// console.log(intersection([1, 2, 3], [2, 3, 4])) // [2, 3]
// console.log(intersection(['a', 'b'], ['b', 'c'])) // ['b']
// console.log(intersection([], ['b', 'c'])) // ['b']


/**
 * Task: Реализуй функцию isAnagram, которая проверяет являются ли строки анаграммами.
 * Пример: isAnagram('listen', 'silent') → true
 */

const isAnagram = (str1, str2) => {
    const s1 = str1.toLowerCase().split('').sort().join('');
    const s2 = str2.toLowerCase().split('').sort().join('');

    return s1 === s2;
}

// console.log(isAnagram('listen', 'silent')) // true
// console.log(isAnagram('hello', 'world')) // false


/**
 * Task: Напиши функцию reverseWords, которая переворачивает слова в строке, но не меняет порядок слов.
 * Пример: reverseWords("hello world") → "olleh dlrow"
 */

const reverseWords = (str) => {
    return str.split(' ').map((item) => {
        const reversed = item.split('').reverse().join('')
        return reversed
    })
}

// console.log(reverseWords("hello world")) // "olleh dlrow"
// console.log(reverseWords("frontend developer")) // "dnetnorf repoleved"


/**
 * Task: Реализуй функцию countBy, которая считает количество элементов по ключу из колбэка.
 * Пример: countBy([6.1, 4.2, 6.3], Math.floor) → { 6: 2, 4: 1 }
 */
const countBy = (array, callback) => {
    const hash = {}
    let count = 1
    array.forEach((item) => {
        const key = callback(item);
        if (!hash[key]) {
            hash[key] = count
        } else {
            count += 1;
            hash[key] = count;
        }
    })

    return hash;
}

// console.log(countBy([6.1, 4.2, 6.3], Math.floor)) // { 6: 2, 4: 1 }
// console.log(countBy(['one', 'two', 'three'], val => val.length)) // { 3: 2, 5: 1 }


/**
 * Task: Напиши функцию isPalindrome, которая проверяет, является ли строка палиндромом (игнорируя регистр и пробелы).
 * Пример: isPalindrome("A man a plan a canal Panama") → true
 */
const isPalindrome = (str) => {
    const s1 = str.toLowerCase().replace(/[^A-Z a-z]/g, '').split(' ').join('')
    const s2 = str.toLowerCase().replace(/[^A-Z a-z]/g, '').split('').reverse().join('').replaceAll(' ', '')
    return s1 === s2


}

// console.log(isPalindrome("A man a plan a canal Panama")) // true
// console.log(isPalindrome("Hello world")) // false

/**
 * Task: Реализуй функцию findMissingNumber, которая возвращает недостающее число в последовательности от 1 до n.
 * Пример: findMissingNumber([1, 2, 4, 5]) → 3
 */
const findMissingNumber = (arr) => {
    const array = arr.sort((a, b) => a - b);
    const start = array[0];
    const end = array[array.length - 1];

    for (let index = start; index <= end; index++) {
        if (!array.includes(index)) {
            return index;
        }
    }

    return null;
}

// console.log(findMissingNumber([1, 2, 4, 5])) // 3
// console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5])) // 6

/**
 * Task: Напиши функцию bind, которая аналогична Function.prototype.bind
 * Пример: const bound = bind(fn, context), bound() вызывает fn с привязанным контекстом
 */

const bind = (fn, context) => {
    return function () {
        return fn.call(context)
    }
}

function greet() {
    return `Hello, ${this.name}`;
}

// const person = {name: 'Alice'};
// const boundGreet = bind(greet, person);
// console.log(boundGreet()); // "Hello, Alice"


/**
 * Task: Напиши функцию delay(ms), которая возвращает Promise и делает паузу в ms миллисекунд.
 */

const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

// delay(1000).then(() => console.log('Waited 1 second'));


function arrOfK(nums, k) {
    const res = []
    const seen = {};
    for (const num of nums) {
        seen[num] = (seen[num] || 0) + 1;
    }

    return Object.keys(seen).map(Number).slice(0, k)
}

// console.log(arrOfK([1, 1, 1, 2, 2, 3], 2)) // [1, 2]
// console.log(arrOfK([1, 2, 3, 4, 5], 2)) //[1, 2]


function getNodes(tree, type) {
    const result = [];
    if (tree.type === type) {
        result.push(tree)
    }
    if (Array.isArray(tree.children)) {
        for (const child of tree.children) {
            result.push(...getNodes(child, type))
        }
    }
    return result
}

// const tree1 = {
//     // type: "nested",
//     type: 'added',
//     children: [
//         {type: "added", value: 42},
//         {
//             type: "nested",
//             children: [{type: "added", value: 43}],
//         },
//         {type: "added", value: 44},
//     ],
// };
// console.log(getNodes(tree1, 'added'));


function groupAnagrams(arr) {

    const groups = {}
    for (const item of arr) {
        const anagram = item.toLowerCase().split('').sort().join('')
        if (!groups[anagram]) {
            groups[anagram] = [item]
        } else {
            groups[anagram].push(item)
        }
    }
    return [...Object.values(groups)]
}

// console.log(groupAnagrams(["ab", "ba", "abc", "bca"])) //[["abc","bca"],["ab","ba"]]
// console.log(groupAnagrams(["listen", "silent", "enlist"])) //[["listen","silent","enlist"]]

function capitalize(input) {
    return input.split(' ')
        .map((item) => item[0].toUpperCase() + item.slice(1))
        .join(' ')
}

// console.log(capitalize('что-то произошло')) //'Что-то Произошло'
// console.log(capitalize('foo-bar baz')) //'Foo-bar Baz'

function getConcated(arr) {
    const order = arr.sort((a, b) => a.order - b.order)
    const filtered = order.filter((item) => !item.expired)
    let output = "";
    for (const item of filtered) {
        output += `${item.value.split('').reverse().join('')}`
    }
    return [...new Set(output)].join('')
}

// console.log(getConcated([{value: "hello", order: 1, expired: false}, {value: "world", order: 2, expired: false}])) //"olehdrw"
// console.log(getConcated([{value: "aabb", order: 1, expired: false}, {value: "bbaa", order: 2, expired: false}])) //"ba"


