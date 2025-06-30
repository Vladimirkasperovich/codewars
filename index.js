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


const deepCopy = (obj) => {
    if (obj === null) return null;
    if (typeof obj !== 'object') return obj;
    if (Array.isArray(obj)) {
        return obj.map(deepCopy)
    }
    let result = {};
    for (const key in obj) {
        result[key] = deepCopy(obj[key])
    }
    return result
}

// const obj1 = {a: 1, b: 2};
// const copy1 = deepCopy(obj1);
// console.log(copy1);             // { a: 1, b: 2 }
// console.log(copy1 === obj1);    // false — разные объекты
//
// const obj2 = {a: {b: 2}};
// const copy2 = deepCopy(obj2);
// console.log(copy2);                // { a: { b: 2 } }
// console.log(copy2.a === obj2.a);  // false — вложенный объект тоже новый
//
//
// const arr = [1, [2, 3], {a: 4}];
// const copyArr = deepCopy(arr);
// console.log(copyArr);             // [1, [2, 3], { a: 4 }]
// console.log(copyArr[1] === arr[1]); // false
// console.log(copyArr[2] === arr[2]); // false
