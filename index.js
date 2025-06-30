'use strict';

const debounce = function (fn, t) {
    let timeOutId;
    return (...args) => {
        clearTimeout(timeOutId);
        timeOutId = setTimeout(() => {
            fn(...args)
        }, t)
    }
};

// const log = debounce(console.log, 100);
// log('Hello'); // cancelled
// log('Hello'); // cancelled
// log('Hello'); // Logged at t=100ms

const promiseAll = (functions) => {
    const result = [];
    let count = 0;
    return new Promise((resolve, reject) => {
        for (let i = 0; i < functions.length; i++) {
            const currentFn = functions[i];
            currentFn()
                .then((data) => {
                    count += 1;
                    result[i] = data;
                    if (count === functions.length) {
                        resolve(result)
                    }
                })
                .catch((err) => {
                    reject(err)
                })
        }
    })
};

// console.log(promiseAll([
//     () => new Promise(resolve => setTimeout(() => resolve(5), 200))
// ]))
// console.log(promiseAll([
//     () => new Promise(resolve => setTimeout(() => resolve(1), 200)),
//     () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
// ]))