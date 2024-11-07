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
console.log(quickSort([10,9,8,7,6,5,4,3,2,1]))