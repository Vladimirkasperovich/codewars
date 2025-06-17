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
const object = {
    a: {
        d: {
            h: 4
        },
        e: 2
    },
    b: 1,
    c: {
        f: {
            g: 3,
            k: {}
        }
    }
};

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