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
};

// console.log(quickSort([10,9,8,7,6,5,4,3,2,1]))

function encode(string) {
	const vowel = ["a", "e", "i", "o", "u"];
	return string.replace(/[aeiop]/g, (str) => {
		const findIndex = vowel.indexOf(str);
		if (findIndex !== -1) {
			str = findIndex + 1;
		}
		return str;
	});
}

function decode(string) {
	const chars = ["a", "e", "i", "o", "u"];
	return string.replace(/[12345]/g, (str) => {
		str = chars[str - 1];
		return str;
	});
}

// console.log(encode('hello')) //'h2ll4'
// console.log(encode('How are you today?')) //'H4w 1r2 y45 t4d1y?'
// console.log(encode('This is an encoding test.')) //'Th3s 3s 1n 2nc4d3ng t2st.'
// console.log(decode('h2ll4')) //'hello'

function highestRank(arr) {
	const mapa = {};
	for (const current of arr) {
		mapa[current] = (mapa[current] || 0) + 1;
	}
	return +Object.entries(mapa).sort((a, b) => b[1] - a[1] || b[0] - a[0])[0][0];
	
}

// console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])) //12
// console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])) //12
// console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])) //3

// String.prototype.camelCase = function () {
// 	const arr = this.split(' ');
// 	return arr
// 		.map((el) => el.replace(/^\w/, (s) => s.toUpperCase()))
// 		.join('')
//
// }
// console.log('test case'.camelCase())

function partsSums(ls) {
	// your code
	let sum = ls.reduce((acc, sum) => acc + sum, 0);
	let result = [sum];
	
	for (let i = 0; i < ls.length; i++) {
		sum -= ls[i];
		result.push(sum);
		console.log(result);
	}
	return result;
}

// console.log(partsSums([0, 1, 3, 6, 10])) // [20, 20, 19, 16, 10, 0]
// console.log(partsSums([1, 2, 3, 4, 5, 6])) //[21, 20, 18, 15, 11, 6, 0]

function comp(array1, array2) {
	//your code here
	if (array1 === null || array2 === null) return false;
	array1.sort((a, b) => a - b);
	array2.sort((a, b) => a - b);
	return array1.map((el) => el * el).every((val, i) => val === array2[i]);
}

// console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [231, 14641, 20736, 361, 25921, 361, 20736, 361]))
// console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 36100, 25921, 361, 20736, 361]))
// console.log(comp([], []))
// return masked string

function maskify(cc) {
	return cc.length <= 4 ? cc : "#".repeat(cc.length - 4) + cc.slice(-4);
}

// console.log(maskify('4556364607935616')) //'############5616'
// console.log(maskify('64607935616')) //'#######5616'
// console.log(maskify('1')) //1
// console.log(maskify('')) //''
// console.log(maskify('11111')) //#1111
// console.log(maskify('Skippy')) //##ippy
// console.log(maskify('Nananananananananananananananana Batman!')) //####################################man!

function openOrSenior(data) {
	return data.map(el => el[0] >= 55 && el[1] > 7 ? "Senior" : "Open");
}

// console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]])) //['Open', 'Senior', 'Open', 'Senior']
// console.log(openOrSenior([[3, 12], [55, 1], [91, -2], [53, 23]])) //['Open', 'Open', 'Open', 'Open']
// console.log(openOrSenior([[59, 12], [55, -1], [12, -2], [12, 12]])) //['Senior', 'Open', 'Open', 'Open']

function checkExam(array1, array2) {
	let count = 0;
	for (let i = 0; i < array2.length; i++) {
		if (array2[i] === array1[i]) {
			count += 4;
		} else if (array2[i] === "") {
			count += 0;
		} else {
			count -= 1;
		}
	}
	return count < 0 ? 0 : count;
}

// console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])) //6
// console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])) //7
// console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])) //16
// console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])) //0

function goodVsEvil(good, evil) {
	const getWorth = (side, coefficient) => {
		return side.split(" ").reduce((acc, cur, index) => {
			return acc + (+cur * coefficient[index]);
		}, 1);
	};
	
	const goodResult = getWorth(good, [1, 2, 3, 3, 4, 10]);
	const evilResult = getWorth(evil, [1, 2, 2, 2, 3, 5, 10]);
	
	if (goodResult > evilResult) return "Battle Result: Good triumphs over Evil";
	else if (evilResult > goodResult) return "Battle Result: Evil eradicates all trace of Good";
	else return "Battle Result: No victor on this battle field";
}

// console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1')) //'Battle Result: Evil eradicates all trace of Good'
// console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0')) //'Battle Result: Good triumphs over Evil'
// console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0')) //'Battle Result: No victor on this battle field'

function per(n) {
	const res = [];
	while (n >= 10) {
		n = n.toString().split("").reduce((acc, cur) => acc * +cur, 1);
		res.push(n);
	}
	return res;
}

// console.log(per(1)); //[]
// console.log(per(10)); //[0]
// console.log(per(69)); //[54,20,0]
// console.log(per(277777788888899)); //[4996238671872, 438939648, 4478976, 338688, 27648, 2688, 768, 336, 54, 20, 0]

const toNumberArray = stringarray => stringarray.map(Number);

// console.log(toNumberArray(["1.1","2.2","3.3"]));

const divCon = x => x.reduce((acc, cur) => typeof cur === "number" ? acc + cur : acc - Number(cur), 0);


// console.log(divCon([9, 3, "7", "3"])); //2
// console.log(divCon(["5", "0", 9, 3, 2, 1, "9", 6, 7])); //14
// console.log(divCon(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"])); //13

function dup(s) {
	return s.map(chars => {
		return chars.split("").filter((char, index, array) => {
			return char !== array[index - 1];
		}).join("");
	});
}

// console.log(dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"])); //['codewars','picaniny','hubububo']
// console.log(dup(["abracadabra", "allottee", "assessee"])); //['abracadabra','alote','asese']
// console.log(dup(["kelless", "keenness"])); //['keles','kenes']
// console.log(dup(["Woolloomooloo", "flooddoorroommoonlighters", "chuchchi"])); //['Wolomolo','flodoromonlighters','chuchchi']
// console.log(dup(["adanac", "soonness", "toolless", "ppellee"])); //['adanac','sones','toles','pele']
// console.log(dup(["callalloo", "feelless", "heelless"])); //['calalo','feles','heles']
// console.log(dup(["putteellinen", "keenness"])); //['putelinen','kenes']
// console.log(dup(["kelless", "voorraaddoosspullen", "achcha"])); //['keles','voradospulen','achcha']


function modifyMultiply(str, loc, num) {
	const foundStr = str.split(" ")[loc];
	let result = "";
	for (let i = 1; i <= num; i++) {
		result += foundStr + "-";
	}
	return result.slice(0, result.length - 1);
}

// console.log(modifyMultiply("This is a string", 3, 5)); //"string-string-string-string-string"
// console.log(modifyMultiply("Creativity is the process of having original ideas that have value. It is a process; it's not random.", 8, 10)); //"that-that-that-that-that-that-that-that-that-that"

function sortReindeer(reindeerNames) {
	return reindeerNames.sort((a, b) => {
		const lastNameA = a.split(" ").slice(-1)[0];
		const lastNameB = b.split(" ").slice(-1)[0];
		return lastNameA.localeCompare(lastNameB);
	});
}

// console.log(sortReindeer([
// 	"Dasher Tonoyan", "Dancer Moore", "Prancer Chua", "Vixen Hall",
// 	"Comet Karavani", "Cupid Foroutan", "Donder Jonker", "Blitzen Claus"
// ]));

//["Prancer Chua", "Blitzen Claus", "Cupid Foroutan", "Vixen Hall",	"Donder Jonker", "Comet Karavani", "DancerMoore","Dasher Tonoyan']

function missingWord(nums, str) {
	// Jenny needs your help...
	const numsArr = nums.sort((a, b) => a - b);
	const string = str.toLowerCase().replace(/ /g, "");
	let res = "";
	for (const elem of numsArr) {
		if (string[elem]) {
			res += string[elem];
		}
		
	}
	
	return res.length === 3 ? res : "No mission today";
	
}

// console.log(missingWord([5, 0, 3], "I love you")); //ivy
// console.log(missingWord([29, 31, 8], "The quick brown fox jumps over the lazy dog")); //bay
// console.log(missingWord([12, 4, 6], "Good Morning")); //"No mission today"

function remember(str) {
	const mapa = {};
	const result = [];
	
	for (const char of str) {
		mapa[char] = (mapa[char] || 0) + 1;
		if (mapa[char] === 2) {
			result.push(char);
		}
	}
	
	return result;
}

// console.log(remember("apple")); //[p]
// console.log(remember("apPle")); //[]
// console.log(remember("pippi")); //["p", "i"]
// console.log(remember("Pippi")); //["p", "i"]
// console.log(remember("limbojackassin the garden")); //["a", "s", "i", " ", "e", "n"]
// console.log(remember("11pinguin")); //["1", "i", "n"]

function sumOfMinimums(arr) {
	// your code here
	return arr.reduce((acc, cur) => acc + Math.min(...cur), 0);
}

// console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])); //9
// console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]));//76

function rowWeights(array) {
	//your code here
	const r1 = array.filter((_, i) => i % 2 === 0).reduce((acc, current) => acc + current, 0);
	const r2 = array.filter((_, i) => i % 2 !== 0).reduce((acc, current) => acc + current, 0);
	
	return [r1, r2];
}

// console.log(rowWeights([80]));//[80,0]
// console.log(rowWeights([100, 50])); //[100,50]
// console.log(rowWeights([50, 60, 70, 80]));//[120,140]
// console.log(rowWeights([13, 27, 49]));//[62,27]
// console.log(rowWeights([70, 58, 75, 34, 91]));//[236,92]

function noOdds(values) {
	// Return all non-odd values
	return values.filter(el => el % 2 === 0);
}

function upArray(arr) {
	// ...
	if (arr.length === 0 || arr.some(n => n < 0 || n > 9)) return null;
	let index = arr.length - 1;
	while (index >= 0) {
		if (arr[index] === 9) {
			arr[index] = 0;
			index--;
		} else {
			arr[index] += 1;
			return arr;
		}
	}
	arr.unshift(1);
	return arr;
}

// console.log(upArray([4, 3, 2, 5])); //[4,3,2,6]
// console.log(upArray([2, 3, 9, 9])); //[2,4,0,0]
// console.log(upArray([9, 9])); //[1,0,0]
// console.log(upArray([0, 7])); //[0,8]
// console.log(upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //[1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,1]

function isSortedAndHow(array) {
	// const start = array[0];
	// const end = array[array.length - 1];
	//
	// for (let i = 1; i < array.length; i++) {
	// 	const current = array[i];
	// 	if (start > current && start > end) {
	// 		return "yes, descending";
	// 	} else if (start < current && start < end) {
	// 		return "yes, ascending";
	// 	} else {
	// 		return "no";
	// 	}
	// }
	
}

// console.log(isSortedAndHow([1, 2])); //'yes, ascending'
// console.log(isSortedAndHow([15, 7, 3, -8])); //'yes, descending'
// console.log(isSortedAndHow([4, 2, 30])); //'no'

function adjacentElementsProduct(array) {
	const result = [];
	for (let i = 0; i < array.length; i++) {
		if (i < array.length - 1) {
			result.push(array[i] *= array[i + 1]);
		}
	}
	return Math.max(...result);
}

// console.log(adjacentElementsProduct([5, 8])); //40
// console.log(adjacentElementsProduct([1, 2, 3])); //6
// console.log(adjacentElementsProduct([1, 5, 10, 9])); //90
// console.log(adjacentElementsProduct([4, 12, 3, 1, 5])); //48
// console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4])); //6

// Return an array
function fizzbuzz(n) {
	const result = [];
	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			result.push("FizzBuzz");
		} else if (i % 3 === 0) {
			result.push("Fizz");
		} else if (i % 5 === 0) {
			result.push("Buzz");
		} else {
			result.push(i);
		}
	}
	return result;
}

// console.log(fizzbuzz(30)); //[1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz']

function reverse(str) {
	//WRITE SOME MAGIC
	return str.split(" ")
		.map((el, i) => i % 2 !== 0 ? el.split("").reverse().join("") : el)
		.join(" ");
}

// console.log(reverse("Reverse this string, please!")); //"Reverse siht string, !esaelp"
// console.log(reverse("I really don't like reversing strings!")); //"I yllaer don't ekil reversing !sgnirts"

// const numbers = [1, 2, 3, 4, 5];
// Array.prototype.square = function () {
// 	return this.map(el => el * el);
// };
// Array.prototype.cube = function () {
// 	return this.map(el => el * el * el);
// };
// Array.prototype.sum = function () {
// 	return this.reduce((acc, cur) => acc + cur, 0);
// };
// Array.prototype.average = function () {
// 	if (!this.length) return NaN;
// 	return this.reduce((acc, cur) => acc + cur, 0) / this.length;
// };
// Array.prototype.even = function () {
// 	return this.filter((el) => el % 2 === 0);
// };
// Array.prototype.odd = function () {
// 	return this.filter((el) => el % 2 !== 0);
// };
// console.log(numbers.square());
// console.log(numbers.cube());
// console.log(numbers.sum());
// console.log(numbers.average());
// console.log(numbers.even());
// console.log(numbers.odd());

function matrixAddition(a, b) {
	//TODO
	const result = [];
	for (let i = 0; i < a.length; i++) {
		const temp = [];
		for (let j = 0; j < a[i].length; j++) {
			temp.push(a[i][j] + b[i][j]);
		}
		result.push(temp);
	}
	return result;
}

// console.log(matrixAddition(
// 	[[1, 2, 3],
// 		[3, 2, 1],
// 		[1, 1, 1]
// 	],
// 	[[2, 2, 1],
// 		[3, 2, 3],
// 		[1, 1, 3]
// 	]
// ));
//[ [3, 4, 4],
// [6, 4, 4],
// 	[2, 2, 4] ]

function capitalize(s) {
	const even = s.split("").map((char, index) => index % 2 === 0 ? char.toUpperCase() : char).join("");
	const odd = s.split("").map((char, index) => index % 2 !== 0 ? char.toUpperCase() : char).join("");
	return [even, odd];
}

// console.log(capitalize("abcdef"));//['AbCdEf', 'aBcDeF']
// console.log(capitalize("codewars"));//['CoDeWaRs', 'cOdEwArS']
// console.log(capitalize("abracadabra"));// ['AbRaCaDaBrA', 'aBrAcAdAbRa']
// console.log(capitalize("codewarriors"));//['CoDeWaRrIoRs', 'cOdEwArRiOrS']

function removeDuplicateWords(s) {
	// your perfect code...
	const map = {};
	for (const element of s.split(" ")) {
		map[element] = (map[element] || 0) + 1;
	}
	return Object.keys(map).join(" ");
}

// console.log(removeDuplicateWords("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta")); //'alpha beta gamma delta'

function countDevelopers(list) {
	// your awesome code here :)
	return list.filter((l) => l.continent === "Europe" && l.language === "JavaScript").length;
}

// const list1 = [{firstName: "Noah",
// 	lastName: "M.",
// 		country: "Switzerland",
// 		continent: "Europe",
// 		age: 19,
// 		language: "JavaScript"
// 	},
// 	{
// 		firstName: "Maia",
// 		lastName: "S.",
// 		country: "Tahiti",
// 		continent: "Oceania",
// 		age: 28,
// 		language: "JavaScript"
// 	},
// 	{
// 		firstName: "Shufen",
// 		lastName: "L.",
// 		country: "Taiwan",
// 		continent: "Asia",
// 		age: 35,
// 		language: "HTML"
// 	},
// 	{
// 		firstName: "Sumayah",
// 		lastName: "M.",
// 		country: "Tajikistan",
// 		continent: "Asia",
// 		age: 30,
// 		language: "CSS"
// 	}
// ];
// const list2 = [
// 	{
// 		firstName: "Oliver",
// 		lastName: "Q.",
// 		country: "Australia",
// 		continent: "Oceania",
// 		age: 19,
// 		language: "HTML"
// 	},
// 	{
// 		firstName: "Lukas",
// 		lastName: "R.",
// 		country: "Austria",
// 		continent: "Europe",
// 		age: 89,
// 		language: "HTML"
// 	}
// ];
//
// console.log(countDevelopers(list1)); //1
// console.log(countDevelopers(list2)); // 2

function decipherThis(str) {
//have fun!
// 	return str.split(" ")
// 		.map((word) => {
// 			word = word.replace(/^\d+/, (s) => String.fromCharCode(s));
// 			if (word.length > 2) {
// 				const chars = word.split("");
// 				const secondChar = chars[1];
// 				const lastChar = chars[chars.length - 1];
// 				chars[1] = lastChar;
// 				chars[chars.length - 1] = secondChar;
// 				word = chars.join('')
// 			}
// 			return word;
// 		}).join(' ');
}

// console.log(decipherThis("72olle 103doo 100ya")); //'Hello good day'
// console.log(decipherThis("82yade 115te 103o")); //'Ready set go'

function isRubyComing(list) {
	// thank you for checking out my kata :)
	return list.some((l) => l.language === "Ruby");
}

// console.log(isRubyComing(list1)); //true
// console.log(isRubyComing(list2)); //false

function greetDevelopers(list) {
	// thank you for checking out my kata :)
	return list.map(developer => {
		return {
			...developer,
			greeting: `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`
		};
	});
}

// console.log(greetDevelopers(list1));

function getFirstPython(list) {
	// Thank you for checking out my kata :)
	const dev = list.find(d => d.language === "Python");
	return dev ? `${dev.firstName}, ${dev.country}` : "There will be no Python developers";
}

// console.log(getFirstPython(list1));//'Victoria, Puerto Rico'
// console.log(getFirstPython(list2));//'There will be no Python developers'

function removeRotten(bagOfFruits) {
	// ...
	if (!bagOfFruits) return [];
	return bagOfFruits.map((fruit) => {
		fruit = fruit.replace(/rotten/g, "");
		return fruit.toLowerCase();
	});
}

// console.log(removeRotten(["apple", "rottenBanana", "apple"])); //["apple","banana","apple"]
// console.log(removeRotten(null));

const encryptThis = (text) => {
	return text.split(" ").map(word => {
		const char = word.split("");
		char[0] = char[0].charCodeAt(0);
		if (word.length > 2) {
			const secondChar = char[1];
			char[1] = char[char.length - 1];
			char[char.length - 1] = secondChar;
		}
		return char.join("");
	}).join(" ");
};

// console.log(encryptThis("A wise old owl lived in an oak")); //"65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
// console.log(encryptThis("The more he saw the less he spoke")); //"84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"
// console.log(encryptThis("The less he spoke the more he heard")); //"84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare"
// console.log(encryptThis("Why can we not all be like that wise old bird")); //"87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri"
// console.log(encryptThis("Thank you Piotr for all your help")); //"84kanh 121uo 80roti 102ro 97ll 121ruo 104ple"

function bingo(ticket, win) {
	return ticket
		.filter((t) => t[0].split("").some(val => val.charCodeAt(0) === t[1]))
		.length >= win ? "Winner!" : "Loser!";
}

// console.log(bingo([["ABC", 65], ["HGR", 74], ["BYHT", 74]], 2)); //'Loser!'
// console.log(bingo([["ABC", 65], ["HGR", 74], ["BYHT", 74]], 1)); //'Winner!'
// console.log(bingo([["HGTYRE", 74], ["BE", 66], ["JKTY", 74]], 3)); //'Loser!'

function findSenior(list) {
	const maxAge = Math.max(...list.map(el => el.age));
	return list.filter((currentDev) => currentDev.age === maxAge);
}

// console.log(findSenior(list1));

function allContinents(list) {
	// thank you for checking out the Coding Meetup kata :)
	const mapa = {};
	list.forEach((el) => {mapa[el.continent] = el.continent; });
	return ["Africa", "Americas", "Asia", "Europe", "Oceania"].every(el => el === mapa[el]);
}

// console.log(allContinents(list1)); //true
// console.log(allContinents(list2)); //false

function autocomplete(input, dictionary) {
	const searchInput = input.replace(/[^a-zA-Z]/g, "").toLowerCase();
	if (!searchInput) return [];
	
	const filteredWord = dictionary.filter((word) =>
		word.toLowerCase().startsWith(searchInput)
	);
	
	return filteredWord.length > 5 ? filteredWord.slice(0, 5) : filteredWord;
}

// console.log(autocomplete("ai", ["airplane", "airport", "airborn", "aims", "aiks", "ailas", "apple", "ball"])); //['airplane','airport']

function findOddNames(list) {
	return list.filter((developer) => {
		const charName = developer.firstName.split("");
		const temp = charName.reduce((acc, val) => {
			const a = val.charCodeAt(0);
			return acc + a;
		}, 0);
		if (temp % 2 !== 0) {
			return developer;
		}
	});
}

// console.log(findOddNames(list1));

function isAgeDiverse(list) {
	const seen = new Set();
	list.forEach((dev) => {
		const {age} = dev;
		if (age < 20) {
			seen.add("teens");
		} else if (age < 30) {
			seen.add("twenties");
		} else if (age < 40) {
			seen.add("thirties");
		} else if (age < 50) {
			seen.add("forties");
		} else if (age < 60) {
			seen.add("fifties");
		} else if (age < 70) {
			seen.add("sixties");
		} else if (age < 80) {
			seen.add("seventies");
		} else if (age < 90) {
			seen.add("eighties");
		} else if (age < 100) {
			seen.add("nineties");
		} else {
			seen.add("centenarian ");
		}
	});
	
	const pivot = ["teens", "twenties", "thirties", "forties", "fifties", "sixties", "seventies", "eighties", "nineties", "centenarian "];
	
	return pivot.every((el) => seen.has(el))
	
}


// console.log(isAgeDiverse(list1));