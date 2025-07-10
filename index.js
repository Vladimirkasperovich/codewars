'use strict'

/**
 * Реализуйте функцию memoize, которая кэширует результаты вызова функции
 * и возвращает закэшированное значение при повторных вызовах с теми же аргументами.
 * Учесть, что функция может принимать несколько аргументов.
 */

function memoize(fn) {
    // Ваша реализация
    const cache = new Map();
    return (...args) => {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key)
        }

        const res = fn(...args);
        cache.set(key, res);
        return res;
    }
}

// Тесты
function expensiveCalculation(x, y) {
    console.log('Выполняются сложные вычисления...');
    return x * y;
}

const memoizedCalculation = memoize(expensiveCalculation);

// console.log(memoizedCalculation(5, 3)); // Должно выполнить вычисления и вывести сообщение
// console.log(memoizedCalculation(5, 3)); // Должно вернуть результат из кэша без вычислений
// console.log(memoizedCalculation(2, 8)); // Новые аргументы - снова вычисления
// console.log(memoizedCalculation(2, 8)); // Снова из кэша

/**
 * Реализуйте функцию promiseAll, которая работает аналогично Promise.all,
 * но без использования встроенного Promise.all.
 */
function promiseAll(promises) {
    if (!promises.length) return Promise.resolve([]);

    const result = [];
    let count = 0;

    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((data) => {
                    result[index] = data;
                    count++
                    if (count === promises.length) {
                        resolve(result);
                    }
                })
                .catch((err) => {
                    reject(err)
                })
        })
    })
}

// Тесты
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve) => {
//     setTimeout(resolve, 100, 'foo');
// });
//
// promiseAll([promise1, promise2, promise3]).then((values) => {
//     console.log(values); // Ожидается [3, 42, "foo"]
// });
//
// promiseAll([Promise.reject('error'), promise1]).catch((err) => {
//     console.log(err); // Ожидается 'error'
// });

/**
 * Реализуйте функцию deepClone, которая создает глубокую копию объекта,
 * включая вложенные объекты и массивы.
 */
function deepClone(obj) {
    if (obj === null) return obj;
    if (Array.isArray(obj)) return obj.map(deepClone)
    if (obj instanceof Date) return new Date(obj)
    if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
        const res = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                res[key] = deepClone(obj[key])
            }
        }
        return res
    }
}

// Тесты
const original = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4],
        e: {
            f: 5
        }
    },
    g: null,
    h: undefined,
    i: new Date(),
    j: /regex/,
    k: function () {
        return 'test';
    }
};

// const cloned = deepClone(original);
//
// console.log(cloned !== original); // true
// console.log(cloned.b !== original.b); // true
// console.log(cloned.b.d !== original.b.d); // true
// console.log(cloned.b.e !== original.b.e); // true
// // console.log(cloned.k() === 'test'); // true
// console.log(cloned.i.getTime() === original.i.getTime()); // true

/**
 * Реализуйте функцию compose, которая принимает несколько функций
 * и возвращает новую функцию, применяющую их справа налево.
 */
function compose(...fns) {
    // Ваша реализация
    return (...args) => {
        return fns.reduceRight((acc, cur) => {
            acc = cur(acc)
            return acc;
        }, args)
    }
}

// Тесты
// const add5 = (x) => x + 5;
// const multiplyBy2 = (x) => x * 2;
// const square = (x) => x * x;
//
// const composedFn = compose(add5, multiplyBy2, square);
//
// console.log(composedFn(2)); // Ожидается (2^2)*2 + 5 = 13
// console.log(composedFn(3)); // Ожидается (3^2)*2 + 5 = 23


function deepFreeze(obj) {
    if (typeof obj !== 'object' || obj === null || Object.isFrozen(obj)) {
        return obj;
    }

    Object.freeze(obj);

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            deepFreeze(obj[key])
        }
    }
    return obj;
}

// Тест-кейс
const user = {
    name: "Alice",
    address: {
        city: "Wonderland",
        zip: 12345
    }
};
// deepFreeze(user);
// user.name = "Bob"; // Не должно измениться
// user.address.city = "Madrid"; // Не должно измениться
// console.log(user); // Должен вывести оригинальный объект

function intersaction(arr1, arr2) {
    const set = new Set(arr2);
    const arr = arr1.filter((item) => set.has(item))
    return [...new Set(arr)]
}

// Тест-кейс
// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const array2 = [2, 4, 6, 8, 10, 12, 14];
// console.log(intersaction(array1, array2)); // Должен вывести [2, 4, 6, 8, 10]

class AsyncCache {
    constructor() {
        this.cache = new Map();
    }

    set(key, value, ttl) {
        const expires = Date.now() + ttl;
        this.cache.set(key, {value, expires});
    }

    async get(key) {
        const entry = this.cache.get(key);
        if (!entry) {
            return null
        }
        if (Date.now() > entry.expires) {
            this.cache.delete(key);
            return null
        }
        return entry.value
    }
}

// Тест-кейс
// const cache = new AsyncCache();
// cache.set("user", {name: "Alice"}, 1000);
// setTimeout(async () => {
//     console.log(await cache.get("user")); // null (прошло > 1 сек)
// }, 1500);

function countWords(text) {
    const map = new Map();
    const filteredStr = text.toLowerCase().replace(/[^A-Z a-z]/g, '').split(' ')

    for (const word of filteredStr) {
        map.set(word, (map.get(word) || 0) + 1)
    }
    return map
}

// // Тест-кейс
// const text = "Hello, hello world! World is great, isn't it?";
// console.log(countWords(text));
// // Map { 'hello' => 2, 'world' => 2, 'is' => 1, 'great' => 1, "isn't" => 1, 'it' => 1 }


/**
 * 1. Уникальные элементы
 * Напиши функцию unique, которая принимает массив и возвращает новый массив без повторяющихся элементов.
 */
function unique(arr) {
    const seen = new Map()
    arr.forEach((num) => {
        seen.set(num, num)
    })
    return [...seen.values()]
}

// console.log(unique([1, 2, 2, 3, 4, 3])); // [1, 2, 3, 4]

/**
 * 3. Похожа ли строка на анаграмму?
 * Функция isAnagram(str1, str2) возвращает true, если одна строка является анаграммой другой.
 */
function isAnagram(str1, str2) {
    // your code here
    const A = str1.toLowerCase().split('').sort().join('')
    const B = str2.toLowerCase().split('').sort().join('')
    return A === B;
}

// console.log(isAnagram('listen', 'silent')); // true
// console.log(isAnagram('hello', 'world'));   // false


/**
 * 4. Debounce вручную
 * Реализуй debounce(func, delay), возвращающую функцию, которая вызывает func не чаще, чем раз в delay мс.
 */
function debounce(func, delay) {
    let timeoutID;
    return () => {
        clearTimeout(timeoutID)
        timeoutID = setTimeout(() => {
            func()
        }, delay)
    }
}

// const log = debounce(() => console.log('called!'), 1000);
// log();
// log(); // должно быть выведено "called!" только один раз через 1 секунду


/**
 * 5. Группировка по ключу
 * Функция groupBy(arr, key) должна сгруппировать массив объектов по значению указанного ключа.
 */
function groupBy(arr, key) {
    const result = {};
    arr.forEach((item) => {
        const groupKey = item[key];
        if (!result[groupKey]) {
            result[groupKey] = [item];
        } else {
            result[groupKey].push(item)
        }
    })

    return result
}

// console.log(groupBy([
//     {type: 'fruit', name: 'apple'},
//     {type: 'vegetable', name: 'carrot'},
//     {type: 'fruit', name: 'banana'}
// ], 'type'));

// {
//   fruit: [{ type: 'fruit', name: 'apple' }, { type: 'fruit', name: 'banana' }],
//   vegetable: [{ type: 'vegetable', name: 'carrot' }]
// }

/**
 * 6. Сумма двух чисел
 * Функция twoSum(arr, target) возвращает индексы двух чисел, сумма которых равна target.
 */
function twoSum(arr, target) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
       const diff = target - arr[i];
       if (map.has(diff)){
           return [map.get(diff), i]
       }

       map.set(arr[i], i)
    }

    return null
}

// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
