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