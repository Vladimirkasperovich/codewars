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