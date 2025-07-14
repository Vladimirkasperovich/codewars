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

