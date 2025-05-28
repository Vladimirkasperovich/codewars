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