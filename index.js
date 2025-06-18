const groupByCity = (array) => {
    const result = {};
    array.forEach(({city, name}) => {
        if (!result[city]) {
            result[city] = name
        } else {
            result[city] = typeof result[city] === "string" ?
                result[city] = [result[city], name] :
                result[city].push(name)
        }
    });

    return result
}
// const peoples = [{name: 'Alex', city: 'Moscow',}, {name: 'Ivan', city: 'Moscow',}, {
//     name: 'Joe',
//     city: 'New York'
// }, {name: 'Johan', city: 'Berlin'},]
// console.log(groupByCity(peoples))
// /*{
//     'Moscow': [ 'Alex', 'Ivan' ],
//     'New York': 'Joe',
//     'Berlin': 'Johan'
// }*/


const addLevels = (obj, level = 0) => {
    const result = {};
    for (const key in obj) {
        if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            result[key] = addLevels(obj[key], level + 1)
        } else {
            result[key] = obj[key]
        }
    }
    result['level'] = level
    return result
}

// Данные на выход
/*
updatedObject {
  a: { d: { h: 4, level: 2 }, e: 2, level: 1 },
  b: 1,
  c: { f: { g: 3, k: [Object], level: 2 }, level: 1 },
  level: 0
}*/
// console.log(addLevels(object))
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

const flattenObject = (obj, acc = '') => {
    let result = {};
    for (const key in obj) {
        const path = acc ? `${acc}.${key}` : key
        if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            result = {...result, ...flattenObject(obj[key], path)};
        } else {
            result[path] = obj[key];
        }
    }

    return result
}

// const flattenedObj = flattenObject(obj);
// console.log(flattenedObj);
// Ожидаемый результат: { 'a.b.c': 1, 'a.b.d': 2, 'a.e': 3, 'f': 4 } || { "f": 4, "a.e": 3, "a.b.c": 1, "a.b.d": 2 }

const str = 'one.two.three.four.five';

const transformStrToObject = (str) => {
    const arrFromInput = str.split('.');
    const result = {}
    let temp = result
    for (const key of arrFromInput) {
        if (!temp[key]) temp[key] = {}
        temp = temp[key]
    }

    return result

}
// console.log(transformStrToObject(str))
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


const fibonacci = (n) => {
    if (n <= 0) return 0
    if (n === 1) return 1
    return fibonacci(n - 1) + fibonacci(n - 2)
}
// console.log(fibonacci(8)) //21
// console.log(fibonacci(10)) //55

const twoSum = (arr, target) => {
    let start = 0;
    let end = arr.length

    while (start < end) {
        const sum = arr[start] + arr[end];
        if (sum === target) {
            return [start, end]
        } else if (target > sum) {
            start++
        } else {
            end--
        }

    }
}
// console.log(twoSum([2, 7, 11, 15], 9)) //[0,1]
// console.log(twoSum([1, 3, 4, 5, 10], 5)) //[0,2]

const merge = (nums1, m, nums2, n) => {
    nums1.splice(m, nums1.length - m)
    nums2.splice(n, nums2.length - n)

    for (let i = 0; i < nums2.length; i++) {
        nums1.push(nums2[i])
    }
    nums1.sort((a, b) => a - b)
}

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)) //[1,2,2,3,5,6]
// console.log(merge([1], 1, [], 0)) //[1]
// console.log(merge([0], 0, [1], 1)) //[1]


const removeElement = (nums, val) => {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[count] = nums[i]
            count++
        }
    }

    return nums
}
// console.log(removeElement([3, 2, 2, 3], 3)) // 2
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)) //5

const removeDuplicates = (nums) => {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]){
            nums[k] = nums[i]
            k++
        }
    }
    return k
}
// console.log(removeDuplicates([1, 1, 2])) //2
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])) //5