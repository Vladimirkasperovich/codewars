const maxProfit = (prices) => {
    let minPrice = Infinity; //7 6 4 3 1
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
    const arr = []
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
        const currentInt = s[i];
        if (romanObj[currentInt]) {
            arr.push(romanObj[currentInt])
        }

    }

    return arr.reduce((acc, cur, index, array) => {
        let next = array[index + 1];
        if (index > 0 && cur > array[index - 1]) {
            return acc
        }

        if (next && cur < next) {
            return acc + (next - cur)
        } else {
            return acc + cur
        }
    }, 0)
}
// console.log(romanToInt("III")) //3
// console.log(romanToInt("LVIII")) //58
// console.log(romanToInt("MCMXCIV")) //1994




