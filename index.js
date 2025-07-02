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


class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        const events = this.events;

        if (!events.has(eventName)) {
            events.set(eventName, [])
        }

        const callbacks = events.get(eventName)
        callbacks.push(callback)

        return {
            unsubscribe: () => {
                const index = callbacks.indexOf(callback)
                if (index !== -1) {
                    callbacks.splice(index, 1)
                }
                return undefined
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        const events = this.events;
        if (!events.has(eventName)) {
            return []
        }
        return events.get(eventName).map((cb) => cb(...args))
    }
}


// const emitter = new EventEmitter();
//
// // Subscribe to the onClick event with onClickCallback
// function onClickCallback() {
//     return 99
// }
//
// const sub = emitter.subscribe('onClick', onClickCallback);
//
// console.log(emitter.emit('onClick')); // [99]
// console.log(sub.unsubscribe()); // undefined
// console.log(emitter.emit('onClick')); // []


class ArrayWrapper {
    constructor(nums) {
        this.nums = nums;
    }

    valueOf() {
        return this.nums.reduce((acc, cur) => acc + cur, 0)
    }

    toString() {
        return `[${this.nums.join(',')}]`
    }
}

// const obj1 = new ArrayWrapper([1, 2]);
// const obj2 = new ArrayWrapper([3, 4]);
// console.log(obj1, obj2)
// console.log(obj1 + obj2); // 10
// console.log(String(obj1)); // "[1,2]"
// console.log(String(obj2)); // "[3,4]"


class Calculator {

    /**
     * @param {number} value
     */
    constructor(value) {
        this.value = value;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */

    add(value) {
        this.value += value
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.value -= value
        return this
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.value *= value
        return this
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.value /= value
        return this
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.value = Math.pow(this.value, value)
        return this;
    }

    /**
     * @return {number}
     */
    getResult() {
        return this.value
    }
}

// // Тест 1: Последовательные операции (пример из условия)
// const calc1 = new Calculator(10);
//
// console.log(calc1.add(5).subtract(7).getResult()); // Ожидается: 8 (10 + 5 - 7)
//
// // Тест 2: Умножение и возведение в степень (пример из условия)
// const calc2 = new Calculator(2);
// console.log(calc2.multiply(5).power(2).getResult()); // Ожидается: 100 ((2 * 5) ^ 2)
//
// // Тест 3: Деление на ноль (пример из условия)
// const calc3 = new Calculator(20);
// try {
//     console.log(calc3.divide(0).getResult());
// } catch (e) {
//     console.log(e.message); // Ожидается: "Division by zero is not allowed"
// }
//
// // Тест 4: Комбинированные операции
// const calc4 = new Calculator(5);
// console.log(calc4.add(3).multiply(2).divide(4).power(3).getResult()); // Ожидается: 64 (((5 + 3) * 2 / 4) ^ 3)
//
// // Тест 5: Проверка цепочки с одним действием
// const calc5 = new Calculator(100);
// console.log(calc5.subtract(50).getResult()); // Ожидается: 50
//
// // Тест 6: Начальное значение 0
// const calc6 = new Calculator(0);
// console.log(calc6.add(10).multiply(0).getResult()); // Ожидается: 0

