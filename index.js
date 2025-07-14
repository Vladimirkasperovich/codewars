'use strict'

/**
 *
 * Task: Реализовать функцию groupBy, которая группирует элементы массива по ключу, возвращаемому колбеком.
 * Например, groupBy([6.1, 4.2, 6.3], Math.floor) должно вернуть { 6: [6.1, 6.3], 4: [4.2] }.
 *
 */

const groupBy = (array, callback) => {
    const seenItems = {};

    for (const item of array) {
        if (!seenItems[callback(item)]) {
            seenItems[callback(item)] = [item]
        } else {
            seenItems[callback(item)].push(item)
        }
    }

    return seenItems

}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor)) // { 6: [6.1, 6.3], 4: [4.2] }
console.log(groupBy(['one', 'two', 'three'], val => val.length)) // { 3: ['one', 'two'], 5: ['three'] }
