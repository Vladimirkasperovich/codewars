'use strict'

const twoSum = (nums, target) => {
    const cash = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const diff = target - num;
        if (cash.has(diff)) {
            return [cash.get(diff), i]
        }
        cash.set(num, i)
    }
    return null
};

// console.log(twoSum([2, 7, 11, 15], 9)) //[0, 1]
// console.log(twoSum([3, 2, 4, 1], 5)) //[0, 1]
// console.log(twoSum([1, 2, 3, 4], 10)) //null

const getNodes = (tree, type) => {
    const result = [];
    if (tree.type === type) result.push(tree)

    if (Array.isArray(tree.children)) {
        tree.children.forEach((cur) => {
            result.push(...getNodes(cur, type))
        })
    }

    return result;

};


// const tree1 = {
//     type: "nested",
//     children: [
//         {type: "removed", value: 10},
//         {
//             type: "nested", children: [
//                 {type: "added", value: 20},
//                 {type: "changed", oldValue: 30, newValue: 31}
//             ]
//         },
//         {type: "added", value: 40}
//     ]
// }
// console.log(getNodes(tree1, 'added'))
//
// const tree2 = {
//     type: "nested",
//     children: [
//         {type: "nested", children: []}, // Пустой вложенный узел
//         {type: "unchanged", value: 100},
//         {
//             type: "nested", children: [
//                 {
//                     type: "nested", children: [
//                         {type: "unchanged", value: 200}
//                     ]
//                 }
//             ]
//         }
//     ]
// }
//
// console.log(getNodes(tree2, "unchanged"))

const groupAnagrams = (arr) => {
    const groups = new Map();

    arr.forEach((word) => {
        const sortedWord = word.toLowerCase().split('').sort().join('');
        if (!groups.has(sortedWord)) {
            groups.set(sortedWord, [word])
        } else {
            groups.get(sortedWord).push(word)
        }
    })
    return [...groups.values()]
}

// console.log(groupAnagrams(["ab", "ba", "abc", "bca"])) //[["abc","bca"],["ab","ba"]]
// console.log(groupAnagrams(["listen", "silent", "enlist"])) //[["listen","silent","enlist"]]