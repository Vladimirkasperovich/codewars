const maxProfit = (prices) => {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (const price of prices) {
        if (price < minPrice) {
            minPrice = price
        } else {
            let profit = price - minPrice
            if (profit > maxProfit) {
                maxProfit = profit
            }
        }
    }
    return maxProfit
}
// console.log(maxProfit([7, 1, 5, 3, 6, 4])) //5
// console.log(maxProfit([7, 6, 4, 3, 1])) //0

const romanToInt = (s) => {
    let sum = 0;
    const romanObj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    for (let i = 0; i < s.length; i++) {
        const current = romanObj[s[i]];
        const next = romanObj[s[i + 1]];

        if (next && next > current) {
            sum += (next - current)
            i++
        } else {
            sum += current
        }
    }

    return sum
}

// console.log(romanToInt("III")) //3
// console.log(romanToInt("LVIII")) //58
// console.log(romanToInt("MCMXCIV")) //1994


const reverseWords = (s) => {
    return s.split(' ').filter(elem => elem !== '').reverse().join(' ')
}

// console.log(reverseWords("the sky is blue")) //"blue is sky the"
// console.log(reverseWords("  hello world  ")) //"world hello"
// console.log(reverseWords("a good   example")) //"example good a"


const replaceSubstring = (str, search, replace) => {
    const result = [];
    const arr = str.split(" ")
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== search) {
            result.push(arr[i])
        } else {
            result.push(replace)
        }
    }
    return result.join(" ");
}

// console.log(replaceSubstring("hello world", "world", "there")) // "hello there"
// console.log(replaceSubstring("abc abc abc", "abc", "123")) // "123 123 123"


const isPalindrome = (str) => {
    const result = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    return result.split('').reverse().join('') === result
}
// console.log(isPalindrome("A man, a plan, a canal, Panama")) //true
// console.log(isPalindrome("hello")) //false

Array.prototype.myFilter = function (cb) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            result.push(this[i])
        }
    }
    return result
}
// const filteredArr = [1, 2, 3, 4, 5].myFilter((x) => x > 2)
// console.log(filteredArr) //[3,4,5]

const myFruits = (fruits) => {
    const seen = {};
    fruits.forEach(fruit => seen[fruit] = (seen[fruit] || 0) + 1)
    return seen
}
// console.log(myFruits(['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple']))//{kiwi:3, apple:2,orange:1}

const uniqueFruits = (fruits) => {
    const unique = {};

    fruits.forEach(fruit => {
        unique[fruit] = true
    })

    return Object.keys(unique)
}
// console.log(uniqueFruits(['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple']))//[kiwi,apple,orange]

const groupStudents = (students) => {
    const group = {};
    students.forEach((student) => {
        if (!group[student.age]) {
            group[student.age] = [student]
        } else {
            group[student.age].push(student)
        }

    })
    return group
}

// const students = [
//     {name: 'alex', age: 20},
//     {name: 'mike', age: 24},
//     {name: 'masha', age: 20},
//     {name: 'stas', age: 18},
// ]
// console.log(groupStudents(students))

const twoSum = (arr, target) => {
    const seen = new Set()
    for (const num of arr) {
        const diff = target - num
        if (seen.has(diff)) {
            return [diff, num]
        }
        seen.add(num)
    }
    return []
}
// console.log(twoSum([3, 5, -4, 8, 11, 1, -1, 6], 10))

const getFavoritePizzas = (friends) => {
    const result = [];
    friends.forEach((friend) => {
        result.push(...friend.pizzas)
    })
    return result;
}
// const friends = [
//     {name: 'alex', pizzas: ['cheese', 'pepperoni']},
//     {name: 'mike', pizzas: ['salami', 'margarita']},
//     {name: 'stas', pizzas: ['meat']},
//     {name: 'anna', pizzas: ['fish']},
// ]
// console.log(getFavoritePizzas(friends))

const isUnique = (str) => {
    return [...new Set(str)].join('') === str
}
// console.log(isUnique('abcdef')) //true
// console.log(isUnique('1234567')) //true
// console.log(isUnique('abcABC')) //true
// console.log(isUnique('abcadefg')) //false


const flatten = (array) => {
    const result = [];
    for (const item of array) {
        if (Array.isArray(item)) {
            result.push(...flatten(item))
        } else {
            result.push(item)
        }

    }

    return result


}
// console.log(flatten([[1], [[2, 3]], [[[4]]]])) // [1,2,3,4]

const isStringRotated = (source, test) => {
    if (source.length !== test.length) return false;
    return (source + source).includes(test)
}
// console.log(isStringRotated("javascript", "scriptjava")) //true
// console.log(isStringRotated("javascript", "iptjavascr")) //true
// console.log(isStringRotated("javascript", "java")) //false

const arraySubset = (source, subset) => {
    if (source.length < subset.length) return false;
    for (const item of subset) {
        const index = source.indexOf(item);
        if (index === -1) return false;
        delete source[index];
    }
    return true
}
// console.log(arraySubset([2, 1, 3], [1, 2, 3])) //true
// console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])) //true
// console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])) //false
// console.log(arraySubset([1, 2], [1, 2, 3])) //false

const allAnagrams = (array) => {
    const seen = {}
    for (const elem of array) {
        const sortedStr = elem.split('').sort().join('');
        seen[sortedStr] = (seen[sortedStr] || 0) + 1
    }
    return Object.keys(seen).length === 1
}
// console.log(allAnagrams(['abcd', 'bdac', 'cabd'])) //true
// console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])) //false


const rotate = (array) => {
    const result = array.map((_) => []);
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            result[j][array.length - 1 - i] = array[i][j]
        }
    }
    return result
}

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]
// console.log(rotate(matrix))
//[
//     [7, 4, 1],
//     [8, 5, 2],
//     [9, 6, 3],
// ]


const binarySearch = (array, target) => {
    let start = 0;
    let end = array.length - 1;

    while (start < end) {
        const middle = Math.floor((start + end) / 2);
        if (array[middle] === target) {
            return middle;
        } else if (target > array[middle]) {
            start = middle + 1
        } else {
            end = middle - 1
        }
    }

    return -1
}
// console.log(binarySearch([1, 3, 6, 13, 17], 13)) // 3
// console.log(binarySearch([1, 3, 6, 13, 17], 12)) // -1


const isBalanced = (str) => {
    const mapa = {'{': '}', '[': ']', '(': ')'}
    const stack = []
    for (const bracket of str) {
        if (mapa[bracket]) {
            stack.push(bracket)
        } else if (Object.values(mapa).includes(bracket)) {
            const lastSeen = stack.pop();
            if (mapa[lastSeen] !== bracket) {
                return false
            }
        }
    }
    return stack.length === 0;
}
// console.log(isBalanced('(x + y) - (4)')) //true
// console.log(isBalanced('((()))')) //true
// console.log(isBalanced('[{()}]')) //true
// console.log(isBalanced('(50)(')) //false
// console.log(isBalanced('[{]}')) //false

class Queue {
    #storage = {}
    #last = 0
    #first = 0

    enqueue(item) {
        this.#storage[this.#last] = item;
        this.#last++
    }

    dequeue() {
        const value = this.#storage[this.#first];
        delete this.#storage[this.#first]
        this.#first++
        return value
    }

    get size() {
        //return size
        return this.#last - this.#first
    }
}

Array.prototype.findUnique = function () {
    const arr = this;
    const map = new Set();
    for (const elem of arr) {
        if (!map.has(elem)) {
            map.add(elem)
        } else {
            map.delete(elem)
        }
    }

    return [...map]
}

// const arr = [10, 5, 10, 0, 6, 6, 7, 2, 9, 9] //[5, 0, 7, 2]
// console.log(arr.findUnique())

const callLimit = (fn, limit, callback) => {
    let maxLimit = limit

    function limited(title, value) {
        if (maxLimit <= 0) {
            callback?.();
            return;
        }
        maxLimit -= 1
        fn(title, value)

    }

    limited.reset = () => {
        console.log("Clear counter")
        maxLimit = limit
    }

    return limited
}

// const log = (title, message) => {
//     console.log(title + ": " + message)
// }
//
// const logLimited = callLimit(log, 3)
//
// logLimited('title', 'desc');
// //title:desc
// logLimited('title2', 'desc');
// //title2:desc
// logLimited('title3', 'desc');
// //title3:desc
// logLimited('title4', 'desc');
// //nothing
// logLimited.reset()
// //update counter, you again can call this function 3 times
// logLimited('title5', 'desc');
// ////title5:desc
// logLimited('title6', 'desc');
// ////title6:desc


const myPromiseAll = (pr) => {
    let count = 0;
    const result = []
    return new Promise((resolve, reject) => {
        for (let i = 0; i < pr.length; i++) {
            pr[i].then((data) => {
                result[i] = data
                count += 1;
                if (count === pr.length) resolve(result)
            })

            pr[i].catch((err) => {
                reject(err)
                throw err
            })


        }
    })
}


// const promises1 = [
//     Promise.resolve(1),
//     Promise.resolve(2),
//     Promise.resolve(3),
// ];
//
// const promises2 = [
//     Promise.reject(1),
//     Promise.resolve(2),
//     Promise.resolve(3),
// ];
//
// myPromiseAll(promises1).then((data) => console.log(data))
// myPromiseAll(promises2).catch((err) => console.log(err))


const canCompleteCircuit = (gas, cost) => {
    const gasSum = gas.reduce((accum, curr) => accum + curr, 0)
    const total = cost.reduce((accum, curr) => accum + curr, 0)
    let tank = 0;
    let startIndex = 0;

    if (gasSum < total) return -1

    for (let i = 0; i < gas.length; i++) {
        const currentGas = gas[i];
        const currentCost = cost[i];
        tank += currentGas - currentCost;

        if (tank < 0) {
            tank = 0;
            startIndex = i + 1;
        }
    }

    return startIndex
}

// console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])) //3
// console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3])) //-1

const hIndex = (citations) => {
    citations.sort((a, b) => b - a)

    for (let i = 0; i < citations.length; i++) {
        if (citations[i] < i + 1)
            return i
    }
    return citations.length
}

// console.log(hIndex([3, 0, 6, 1, 5]))// 3
// console.log(hIndex([1, 3, 1]))//1

const checkBrackets = (str) => {
    const seenBrackets = {'{': '}', '[': ']', '(': ')'}
    const stack = [];

    for (const bracket of str.replaceAll(' ', '')) {
        if (seenBrackets[bracket]) {
            stack.push(bracket)
        } else {
            const lastElem = stack.pop()
            if (seenBrackets[lastElem] !== bracket) {
                return false
            }

        }
    }

    return !stack.length
}

// console.log(checkBrackets('{} [] ()')) // true
// console.log(checkBrackets('{ [()] }')) //true
// console.log(checkBrackets('{{ ][ ))')) //false


const promiseAll = (promises) => {
    const result = [];
    let resolvedPromisesCount = 0;

    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            const promise = promises[i];

            promise
                .then((data) => {
                    resolvedPromisesCount += 1;
                    result[i] = data
                    if (resolvedPromisesCount === promises.length) resolve(result)
                })
                .catch((err) => reject(err))

        }
    })
}

// promiseAll([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)])
//     .then(data => console.log(data))//[]
// promiseAll([Promise.reject('some error'), Promise.resolve(1), Promise.resolve(2)])
//     .catch((err) => console.log(err)) //reason

const removeDuplicates = (arr) => {
    const count = {};

    for (const arrElement of arr) {
        count[arrElement] = (count[arrElement] || 0) + 1;
    }

    return arr.filter((item) => count[item] === 1)
}
// console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 1])) //[2, 3, 5]
// console.log(removeDuplicates([1, 1, 1, 2])) //[2]
// console.log(removeDuplicates([1, 1])) //[]

const reverseWords2 = (str) => {
    const arr = str.trim().split(' ')
    return arr.reduceRight((accum, curr) => accum + curr + ' ', '').trim()
}

// console.log(reverseWords2('Hello world')) // world Hello
// console.log(reverseWords2('The quick brown fox')) // fox brown quick The
// console.log(reverseWords2('Hi! How are you?')) // you? are How Hi!
// console.log(reverseWords2(' JavaScript is great  ')) //"great is JavaScript"

const longestConsecutive = (nums) => {
    if (!nums.length) return 0;

    let count = 1;
    let maxCount = 1
    const arr = [...new Set(nums)].sort((a, b) => a - b);


    for (let i = 0; i < arr.length - 1; i++) {
        const curr = arr[i];
        const next = arr[i + 1];
        if ((next - curr) === 1) {
            count += 1;
        } else {
            count = 1
        }
        maxCount = Math.max(maxCount, count)

    }

    return maxCount;
}

// console.log(longestConsecutive([2, 20, 4, 10, 3, 4, 5])) // 4
// console.log(longestConsecutive([0, 3, 2, 5, 4, 6, 1, 1])) //7

const threeSum = (nums) => {
    const result = [];
    const seen = new Set()

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b)
                    const key = triplet.join(',')
                    if (!seen.has(key)) {
                        seen.add(key);
                        result.push(triplet)
                    }
                }
            }
        }
    }
    return result;
}

// console.log(threeSum([-1, 0, 1, 2, -1, -4])) // [[-1,-1,2],[-1,0,1]]
// console.log(threeSum([0, 1, 1])) // []
// console.log(threeSum([0, 0, 0])) //[[0,0,0]]


const _map = (arr, fn) => {
    const result = [];
    arr.forEach((item, index, initial) => {
        result.push(fn(item, index, initial))
    })
    return result
}
// console.log(_map([1, 2, 3, 4, 5], (n) => n * 2)) //[2, 4, 6, 8, 10]

const _binarySearch = (list, target) => {
    let start = 0;
    let end = list.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2)
        if (list[mid] === target) {
            return mid;
        } else if (target < list[mid]) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return null
}
// console.log(_binarySearch([1, 2, 3, 5, 7, 10], 7)) //4
// console.log(_binarySearch([1, 2, 3, 4, 5, 6], 7)) //null


const quickSort = (arr) => {
    if (arr.length <= 1) return arr;
    const less = [];
    const great = [];
    let pivot = arr[0]
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        if (current <= pivot) less.push(current)
        else great.push(current)
    }
    return [...quickSort(less), pivot, ...quickSort(great)]
}

// console.log(quickSort([1, 5, 2, 3, 6, 4, 7, 0])) // [0, 1, 2, 3, 4, 5, 6, 7]
// console.log(quickSort([1, 3, 2, 4, 6, 5])) //[1, 2, 3, 4, 5, 6]

const mergeInterval = (intervals) => {
    if (intervals.length < 2) return intervals;
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [intervals[0]];
    for (const interval of intervals) {
        const recent = result[result.length - 1];
        if (recent[1] >= interval[0]) {
            recent[1] = Math.max(recent[1], interval[1])
        } else {
            result.push(interval)
        }
    }
    return result;
}
// console.log(mergeInterval([[1, 3], [2, 6], [8, 10], [15, 18]])) //[[1,6], [8,10], [15,18]]
// console.log(mergeInterval([[1, 4], [1, 5]])) //[[1,5]]

const checkAlphabet = (str) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerStr = str.toLowerCase();

    return [...alphabet].every((word) => lowerStr.includes(word))
}

// console.log(checkAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ')) //true
// console.log(checkAlphabet('abcd')) //false

const isValidateBrackets = (str) => {
    const mapa = {'{': '}', '[': ']', '(': ')'};
    const stack = [];

    for (const bracket of str) {
        if (mapa[bracket]) {
            stack.push(bracket)
        } else if (Object.values(mapa).includes(bracket)) {
            const last = stack.pop()
            if (mapa[last] !== bracket) {
                return false
            }
        }

    }

    return !stack.length
}
// console.log(isValidateBrackets('{}')) //true
// console.log(isValidateBrackets('}')) //false
// console.log(isValidateBrackets('{[}]')) //false
// console.log(isValidateBrackets('[{[]}()]')) //true
// console.log(isValidateBrackets('{qw}e')) //true


// const wordPattern = (pattern, s) => {
//     // return [...new Set(pattern)].length === [...new Set(s.split(' '))].length;
//     return {'1': [...new Set(pattern)], '2': [...new Set(s.split(' '))]}
// };
//
// console.log(wordPattern("abba", "dog cat cat dog")) //true
// console.log(wordPattern("abba", "dog cat cat fish")) //false
// console.log(wordPattern("aaaa", "dog cat cat dog")) //false

const multiply = (a, b) => a * b
const sqr = (a) => a ** 2
const plusThree = (a) => a + 3

const currying = (...fns) => {
    return (...args) => {
        const restFns = fns.slice(0, -1)
        const res = fns[fns.length - 1](...args)
        return restFns.reduceRight((acc, cur) => cur(acc), res)

    }
}

// console.log(currying(plusThree, sqr, multiply)(2, 5)) //plusThree(sqr(multiply(2,5)))

// let a = 1
// let b = 15
// let c = a;
// a = b
// b = c
//
// console.log(a, b)

const reverseArr = (arr) => {
    let start = 0; // индекс от нуля который растет
    let end = arr.length - 1 // индекс длинна - 1 которая уменьшается

    while (start < end) {
        const temp = arr[start] //элемент массива, который меняется на каждой итерации
        arr[start] = arr[end] //в начало массива кладем элементы из конца
        arr[end] = temp //в конец кладем элементы начала
        start++ // инкремент
        end-- // декремент
    }
    return arr // возвращаем мутированный массив
}
// console.log(reverseArr([9, 7, 6, 3, 5, 4, 2, 8, 1])) //[1, 8, 2, 4, 5, 3, 6, 7, 9

const isSubsequence = (s, t) => {
    let i = 0;
    for (const tElement of t) {
        if (tElement === s[i]) i++
    }
    return i === s.length
}
// console.log(isSubsequence("abc", "ahbgdc")) //true
// console.log(isSubsequence("axc", "ahbgdc")) //false
// console.log(isSubsequence("ab", "baab")) //true

const canJump = (nums) => {
    let longestIndex = 0
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i]
        if (i > longestIndex) {
            return false
        }
        longestIndex = Math.max(longestIndex, i + current)
    }
    return true
}
// console.log(canJump([2, 3, 1, 1, 4])) //true
// console.log(canJump([3, 2, 1, 0, 4])) // false


const slowFn = (x) => {
    console.log('called with', x);
    return x * 2;
};
const memoize = (fn) => {
    const cache = new Map()
    return (arg) => {
        if (!cache.has(arg)) {
            const res = fn(arg)
            cache.set(arg, res)
        }
        return cache.get(arg)

    }
}

// // Создаём кешированную версию
// const memoizedFn = memoize(slowFn);

// // Тесты
// console.log(memoizedFn(5)); // called with 5 → 10
// console.log(memoizedFn(5)); // (ничего не выводится в консоль) → 10 (взято из кеша)
//
// console.log(memoizedFn(10)); // called with 10 → 20
// console.log(memoizedFn(10)); // → 20 (взято из кеша)

const rotateArray = (nums, k) => {
    k = k % nums.length

    const reverse = (arr, start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++
            end--
        }
    }
    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length - 1)
    return nums
};

// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)) //[5,6,7,1,2,3,4]
// console.log(rotateArray([-1, -100, 3, 99], 2)) //[3,99,-1,-100]


const candy = (ratings) => {
    const res = Array(ratings.length).fill(1);
    for (let i = 0; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            res[i] = res[i - 1] + 1
        }
    }

    for (let i = ratings.length; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            res[i] = Math.max(res[i], res[i + 1] + 1)
        }
    }

    return res
}
// console.log(candy([1, 0, 2])) //5
// console.log(candy([1, 2, 2])) //4


// const groupByCity = (array) => {
//     const seenCity = {};
//     array.forEach(({name, city}) => {
//         if (!seenCity[city]) {
//             seenCity[city] = name;
//         } else if (typeof seenCity[city] === 'string') {
//             seenCity[city] = [seenCity[city], name]
//         } else {
//             seenCity[city].push(name)
//         }
//     })
//
//     return seenCity
// }
//
// const peoples = [
//     {
//         name: 'Alex',
//         city: 'Moscow',
//     },
//     {
//         name: 'Ivan',
//         city: 'Moscow',
//     },
//     {
//         name: 'Joe',
//         city: 'New York'
//     },
//     {
//         name: 'Johan',
//         city: 'Berlin'
//     },
// ]
// console.log(groupByCity(peoples))
// Данные на выход
/*
{
  'Moscow': [ 'Alex', 'Ivan' ],
  'New York': 'Joe',
  'Berlin': 'Johan'
}
*/

// const object = {
//     a: {
//         d: {
//             h: 4
//         },
//         e: 2
//     },
//     b: 1,
//     c: {
//         f: {
//             g: 3,
//             k: {}
//         }
//     }
// };

const addLevels = (obj, level = 0) => {
    const res = {};
    for (const key in obj) {
        if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            res[key] = addLevels(obj[key], level + 1)
        } else {
            res[key] = obj[key]
        }
    }
    res.level = level
    return res;
}

// console.log(addLevels(object))
// Данные на выход
/*
updatedObject {
  a: { d: { h: 4, level: 2 }, e: 2, level: 1 },
  b: 1,
  c: { f: { g: 3, k: [Object], level: 2 }, level: 1 },
  level: 0
}*/

// const obj = {
//     a: {
//         b: {
//             c: 1,
//             d: 2
//         },
//         e: 3
//     },
//     f: 4
// };
//
// const flattenObject = (obj, prefix = '') => {
//     const result = {};
//
//     for (const key in obj) {
//         const fullKey = prefix ? `${prefix}.${key}` : key
//         if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//             const child = flattenObject(obj[key], fullKey)
//             Object.assign(result, child)
//         } else {
//             result[fullKey] = obj[key]
//         }
//     }
//     return result
// }
//
// const flattenedObj = flattenObject(obj);
// console.log(flattenedObj);
// Ожидаемый результат: { 'a.b.c': 1, 'a.b.d': 2, 'a.e': 3, 'f': 4 } || { "f": 4, "a.e": 3, "a.b.c": 1, "a.b.d": 2 }


const palindrome = (str) => {
    const res = str.toLowerCase().replace(/[^a-za-яё0-9]/g, '')
    return res === str.toLowerCase().replace(/[^a-zа-яё0-9]/g, '').split('').reverse().join('')
}

// console.log(palindrome('Казак ')) //true
// console.log(palindrome('Madam, I\'m Adam')) //true
// console.log(palindrome('А в Енисее - синева')) //true
// console.log(palindrome('О, духи, от уборки микробу-то и худо')) //true
// console.log(palindrome('Не палиндром')) //false


const anagram = (strA, strB) => {
    const a = strA.toLowerCase().replace(/[^a-zа-яё0-9]/g, '').split('').sort().join('');
    const b = strB.toLowerCase().replace(/[^a-zа-яё0-9]/g, '').split('').sort().join('')
    return a === b
}

// console.log(anagram('finder', 'Friend')) // true
// console.log(anagram('hello', 'bye')) // false

const transformStringToObject = (str) => {
    const result = {};
    let current = result;
    for (const elem of str.split('.')) {
        current[elem] = {}
        current = current[elem]
    }
    return result;
}
// console.log(transformStringToObject('one.two.three.four.five'))
/*{
  one: {
    two: {
      three: {
        four: {
          five: }
        }
      }
    }
  }
}*/

const hasDuplicate = (nums) => {
    const seen = {};
    for (const num of nums) {
        seen[num] = num
    }
    return Object.values(seen).length !== nums.length
}
// console.log(hasDuplicate([1, 2, 3, 3])) //true
// console.log(hasDuplicate([1, 2, 3, 4])) //false