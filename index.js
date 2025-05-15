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
    if (array.length < 2) return []
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const current = array[i]
        if (Array.isArray(current)) {
            result.push(...flatten(...current))
        }
        result.push(current)
    }
    return result
}
console.log(flatten([[1], [[2, 3]], [[[4]]]])) // [1,2,3,4]