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
 * Реализуйте функцию debounce, которая "откладывает" вызов функции
 * до тех пор, пока с момента последней попытки вызова не пройдет
 * заданный промежуток времени.
 */
function debounce(fn, delay) {
    let timeoutID;
    // Ваша реализация
    return (param) => {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            fn(...param)
        }, delay)
    }
}

// Тесты
// const debouncedConsoleLog = debounce(console.log, 1000);
//
// debouncedConsoleLog('Первый вызов');
// setTimeout(() => debouncedConsoleLog('Второй вызов'), 500);
// setTimeout(() => debouncedConsoleLog('Третий вызов'), 1200);

// Ожидается только один вывод в консоль: "Третий вызов"

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