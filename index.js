const quickSort = (arr) => {
	if (arr.length <= 1) return arr;
	let temp = arr[0];
	const less = [];
	const greater = [];
	for (let i = 1; i < arr.length; i++) {
		const current = arr[i];
		if (current < temp) {
			less.push(current);
		} else {
			greater.push(current);
		}
	}
	
	return [...quickSort(less), temp, ...quickSort(greater)];
}

// console.log(quickSort([10,9,8,7,6,5,4,3,2,1]))

function encode(string) {
	const vowel = ['a', 'e', 'i', 'o', 'u']
	return string.replace(/[aeiop]/g, (str) => {
		const findIndex = vowel.indexOf(str);
		if (findIndex !== -1){
			str = findIndex + 1;
		}
		return str;
	})
}

function decode(string) {
	const chars = ['a', 'e', 'i', 'o', 'u']
	return string.replace(/[12345]/g, (str) => {
		str = chars[str - 1];
		return str
	})
}

// console.log(encode('hello')) //'h2ll4'
// console.log(encode('How are you today?')) //'H4w 1r2 y45 t4d1y?'
// console.log(encode('This is an encoding test.')) //'Th3s 3s 1n 2nc4d3ng t2st.'
// console.log(decode('h2ll4')) //'hello'