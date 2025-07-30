'use strict';

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    if (nums.length < 3) return [];

    const result = [];
    const arr = [...nums].sort((a, b) => a - b)

    for (let i = 0; i < arr.length - 2; i++) {
        const current = arr[i];

        if (current > 0) {
            break;
        }
        if (i > 0 && arr[i] === arr[i - 1]) {
            continue;
        }

        let j = i + 1;
        let k = arr.length - 1;

        while (j < k) {
            const sum = arr[i] + arr[j] + arr[k];
            if (sum === 0) {
                result.push([arr[i], arr[j], arr[k]]);

                while (arr[j] === arr[j + 1]) j++;
                while (arr[k] === arr[k - 1]) k--;

                j++;
                k--;
                continue;
            }



            if (sum < 0) {
                j++
                continue;
            }

            if (sum > 0) {
                k--;
                continue;
            }
        }

    }
    return result;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Ожидаемый вывод: [[-1, -1, 2], [-1, 0, 1]]
// console.log(threeSum([]));// Ожидаемый вывод: []
// console.log(threeSum([0]));// Ожидаемый вывод: []
// console.log(threeSum([0, 0, 0]));// Ожидаемый вывод: [[0, 0, 0]]
// console.log(threeSum([-2, 0, 1, 1, 2]));// Ожидаемый вывод: [[-2, 0, 2], [-2, 1, 1]]
// console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));// Ожидаемый вывод (частичный пример): [[-4, -2, 6], [-4, 0, 4], [-4, 1, 3], [-4, 2, 2], ...]
// console.log(threeSum([-1, 0, 1, 0]));// Ожидаемый вывод: [[-1,0,1]]
