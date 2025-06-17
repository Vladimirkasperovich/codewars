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