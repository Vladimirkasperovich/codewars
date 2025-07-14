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


