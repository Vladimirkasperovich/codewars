'use strict';

const debounce = function (fn, delay) {
    let timeOutId;
    return (...args) => {
        clearTimeout(timeOutId);
        timeOutId = setTimeout(() => {
            fn(...args)
        }, delay)
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

Function.prototype.myBind = function (context, ...bindArgs) {
    const currentFn = this;
    return (...args) => {
      currentFn.apply(context, [...bindArgs, ...args])
    }
}

// function greet(greeting, punctuation) {
//     console.log(greeting + ', ' + this.name + punctuation);
// }
//
// const user = {name: 'Alice'};
//
// const greetUser = greet.myBind(user, 'Hello');
// greetUser('!'); // Выведет: Hello, Alice!