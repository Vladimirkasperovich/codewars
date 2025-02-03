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
	
	return pivot.every((el) => seen.has(el));
	
}


// console.log(isAgeDiverse(list1));

function getLengthOfMissingArray(arrayOfArrays) {
	if (!arrayOfArrays || arrayOfArrays.length === 0) return 0;
	if (arrayOfArrays.some(arr => !arr || arr.length === 0)) return 0;
	const sortedLengths = arrayOfArrays.map(arr => arr.length).sort((a, b) => a - b);
	for (let i = 1; i < sortedLengths.length; i++) {
		if (sortedLengths[i] !== sortedLengths[i - 1] + 1) {
			return sortedLengths[i - 1] + 1;
		}
	}
	return 0;
}


// console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])); //3
// console.log(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]));//2
// console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ] ])); //2
// console.log(getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]])); //5

function numberOfPairs(gloves) {
	//My hands are freezing
	const mapa = {};
	gloves.forEach((glove) => {
		mapa[glove] = (mapa[glove] || 0) + 1;
	});
	
	let pairs = 0;
	Object.values(mapa).forEach((count) => {
		pairs += Math.floor(count / 2);
	});
	return pairs;
}

// console.log(numberOfPairs(["red", "green", "red", "blue", "blue"])); //2
// console.log(numberOfPairs(["red", "red", "red", "red", "red", "red"])); //3
// console.log(numberOfPairs(["red", "red"])); //1
// console.log(numberOfPairs(["red", "green", "blue"])); //0
// console.log(numberOfPairs(["gray", "black", "purple", "purple", "gray", "black"])); //3


const getInput = (input) => {
	const filteredArr = input.filter((el) => !el.expired);
	const sortedArr = filteredArr.sort((a, b) => a.order - b.order);
	let str = "";
	sortedArr.forEach((item) => {
		const reversedChar = item.value.split("").reverse().join("");
		str += reversedChar;
	});
	return Array.from(new Set(str)).join("");
};

const input = [
	{value: "abcd", order: 4, expired: false},
	{value: "qwer", order: 2, expired: true},
	{value: "xyz1", order: 1, expired: false},
	{value: "abx2", order: 3, expired: false}
];

// console.log(getInput(input));

function sumConsecutives(s) {
	// your code
	const result = [];
	let sum = s[0];
	for (let i = 1; i <= s.length; i++) {
		if (s[i] === s[i - 1]) {
			sum += s[i];
		} else {
			result.push(sum);
			sum = s[i];
		}
	}
	
	return result;
}

// console.log(sumConsecutives([1, 4, 4, 4, 0, 4, 3, 3, 1])); //[1,12,0,4,6,1]
// // console.log(sumConsecutives([1, 1, 7, 7, 3])); //[2,14,3]
// // console.log(sumConsecutives([-5, -5, 7, 7, 12, 0])); //[-10,14,12,0]
// console.log(sumConsecutives([3, 3, 3, 3, 1])); //[12, 1]

function getEvenNumbers(numbersArray) {
	// filter out the odd numbers
	const result = [];
	numbersArray.forEach((el) => {
		if (el % 2 === 0) result.push(el);
	});
	return result;
}

function evenNumbers(array, number) {
	return array.filter((el) => el % 2 === 0).slice(-number);
}

// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); //[4, 6, 8]
// console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)); //[-8, 26]
// console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)); //[6]

function minSum(arr) {
	return arr.sort((a, b) => a - b)
		.reduce((acc, cur) => acc + cur * arr.pop(), 0);
}

// console.log(minSum([5, 4, 2, 3])); //22
// console.log(minSum([12, 6, 10, 26, 3, 24])); //342
// console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6])); //74

function cubeOdd(arr) {
	let sum = 0;
	for (const arrElement of arr) {
		if (typeof arrElement !== "number") return undefined;
		if (arrElement % 2 !== 0) {
			sum += (arrElement * arrElement * arrElement);
		}
	}
	return sum;
}

// console.log(cubeOdd([1, 2, 3, 4])); //28
// console.log(cubeOdd([-3, -2, 2, 3])); //0
// console.log(cubeOdd(["a", 12, 9, "z", 42])); //undefined

function findDeletedNumber(arr, mixArr) {
	let elem = 0;
	for (const element of arr) {
		if (!mixArr.includes(element)) {
			elem = element;
		}
	}
	return elem;
}

// console.log(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5])); //2
// console.log(findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8])); //5
// console.log(findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 6, 9, 4, 8, 1, 2, 3])); //0

function toWeirdCase(string) {
	return string.split(" ").map(el => {
		return el.split("")
			.map((el, index) => index % 2 === 0 ? el.toUpperCase() : el.toLowerCase())
			.join("");
	}).join(" ");
}

// console.log(toWeirdCase("This is a test")); //'ThIs Is A TeSt'
// console.log(toWeirdCase("")); //''
// console.log(toWeirdCase("unique")); //'UnIqUe'
// console.log(toWeirdCase("UPPER CASE")); //'UpPeR CaSe'
// console.log(toWeirdCase("lower case")); //'LoWeR CaSe'

function myLanguages(results) {
	return Object.keys(results)
		.filter((el) => results[el] >= 60)
		.sort((a, b) => results[b] - results[a]);
}

// console.log(myLanguages({"Java": 10, "Ruby": 80, "Python": 65})); //["Ruby", "Python"]
// console.log(myLanguages({"Hindi": 60, "Greek": 71, "Dutch": 93})); //["Dutch", "Greek", "Hindi"]
// console.log(myLanguages({"C++": 50, "ASM": 10, "Haskell": 20})); //[]

function nthSmallest(arr, pos) {
	return arr.sort((a, b) => a - b)[pos - 1];
}

// console.log(nthSmallest([3, 1, 2], 2)); //2
// console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3)); //7
// console.log(nthSmallest([-5, -1, -6, -18], 4)); //-1
// console.log(nthSmallest([-102, -16, -1, -2, -367, -9], 5)); //-2
// console.log(nthSmallest([2, 169, 13, -5, 0, -1], 4)); //2
// console.log(nthSmallest([2, 1, 3, 3, 1, 2], 3)); //2


function maxTriSum(numbers) {
	return [...new Set(numbers)]
		.sort((a, b) => b - a)
		.slice(0, 3)
		.reduce((acc, cur) => acc + cur, 0);
	
}

// console.log(maxTriSum([3, 2, 6, 8, 2, 3])); //17
// console.log(maxTriSum([2, 9, 13, 10, 5, 2, 9, 5])); //32
// console.log(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4])); //18

function outed(meet, boss) {
	const arr = Object.entries(meet);
	let count = 0;
	arr.forEach((employee) => {
		const [name, happyCount] = employee;
		if (name === boss) {
			count += happyCount * 2;
		} else {
			count += happyCount;
		}
	});
	const total = count / arr.length;
	return total <= 5 ? "Get Out Now!" : "Nice Work Champ!";
}

function deepCount(a) {
	let count = 0;
	a.forEach((el) => {
		count++;
		if (Array.isArray(el)) {
			count += deepCount(el);
		}
	});
	return count;
}

// console.log(deepCount([])); //0
// console.log(deepCount([1, 2, 3])); //3
// console.log(deepCount(["x", "y", ["z"]])); //4
// console.log(deepCount([1, 2, [3, 4, [5]]])); //7
// console.log(deepCount([[[[[[[[[]]]]]]]]])); //8


const checkBrackets = (brackets) => {
	const mapa = {"{": "}", "[": "]", "(": ")"};
	const stack = [];
	for (const bracket of brackets) {
		if (mapa[bracket]) {
			stack.push(bracket);
		} else {
			const lastOpening = stack.pop();
			if (mapa[lastOpening] !== bracket) return false;
		}
	}
	return !stack.length;
};

// console.log(checkBrackets("()")); // true
// console.log(checkBrackets("{}[]()")); // true
// console.log(checkBrackets("([{}])")); // true


function boredom(staff) {
	const countMisses = {
		"accounts": 1,
		"finance": 2,
		"canteen": 10,
		"regulation": 3,
		"trading": 6,
		"change": 6,
		"IS": 8,
		"retail": 5,
		"cleaning": 4,
		"pissing about": 25
	};
	const count = Object.entries(staff).reduce((acc, val) => acc + countMisses[val[1]], 0);
	if (count <= 80) {
		return "kill me now";
	} else if (count < 100 && count > 80) {
		return "i can handle this";
	} else {
		return "party time!!";
	}
}

// console.log(boredom({ tim: 'accounts', jim: 'accounts',
// 	randy: 'pissing about', sandy: 'finance', andy: 'change',
// 	katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
// 	john: 'retail', mr: 'pissing about' }));


function maxProduct(numbers, size) {
	const sortedArray = numbers.sort((a, b) => b - a);
	return sortedArray.slice(0, size).reduce((acc, cur) => acc * cur, 1);
}

// console.log(maxProduct([4, 3, 5], 2)); //20
// console.log(maxProduct([10, 8, 7, 9], 3)); //720
// console.log(maxProduct([8, 6, 4, 6], 3)); //288
// console.log(maxProduct([10, 2, 3, 8, 1, 10, 4], 5)); //9600
// console.log(maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5)); //247895375

function last(x) {
	const arrWords = x.split(" ");
	return arrWords.sort((a, b) => {
		const lastCharA = a[a.length - 1];
		const lastCharB = b[b.length - 1];
		return lastCharA.localeCompare(lastCharB);
	});
}

// console.log(last("man i need a taxi up to ubud")); // ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
// console.log(last("what time are we climbing up the volcano")); //['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
// console.log(last("take me to semynak")); //['take', 'me', 'semynak', 'to']

function isIntArray(arr) {
	if (!Array.isArray(arr)) return false;
	return arr.every((el) => typeof el === "number" && Number.isInteger(el));
}

// console.log(isIntArray([])); //true
// console.log(isIntArray([1, 2, 3, 4])); //true
// console.log(isIntArray([1, 2, 3, NaN])); //false

function mineLocation(field) {
	const resultArr = [];
	for (let i = 0; i < field.length; i++) {
		let currentArr = field[i];
		const indexInsideArr = currentArr.findIndex((el) => el === 1);
		if (indexInsideArr !== -1) {
			resultArr.push(i, indexInsideArr);
		}
		
	}
	return resultArr;
}

// console.log(mineLocation([[1, 0], [0, 0]])); //[0,0]
// console.log(mineLocation([[1, 0, 0], [0, 0, 0], [0, 0, 0]])); //[0,0]
// console.log(mineLocation([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0]])); //[2,2]


function extraPerfect(n) {
	const resultArr = [];
	for (let i = 1; i <= n; i++) {
		if (i % 2 !== 0) {
			resultArr.push(i);
			
		}
	}
	return resultArr;
}

/*
console.log(extraPerfect(3));
console.log(extraPerfect(5));
console.log(extraPerfect(7));
console.log(extraPerfect(28));
console.log(extraPerfect(39));
*/

function getMatrix(number) {
	if (!number) return [];
	const resultArr = [];
	for (let i = 0; i < number; i++) {
		const arr = [];
		for (let j = 0; j < number; j++) {
			arr.push(i === j ? 1 : 0);
		}
		resultArr.push(arr);
	}
	
	return resultArr;
}

// console.log(getMatrix(0)); //[]
// console.log(getMatrix(1)); //[[1]]
// console.log(getMatrix(2)); //[[1, 0], [0, 1]]
// console.log(getMatrix(5)); //[[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]]

function largest(n, array) {
	if (!n) return [];
	return array.sort((a, b) => a - b).slice(-n);
}

// console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
// console.log(largest(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
// console.log(largest(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5]));
// console.log(largest(3, [5, 1, 5, 2, 3, 1, 2, 3, 5]));
// console.log(largest(7, [9, 1, 50, 22, 3, 13, 2, 63, 5]));
// console.log(largest(0, [1, 2, 3, 4, 8, 7, 6, 5]));

function solve(arr) {
	const mapa = {};
	arr.forEach((num) => {
		mapa[num] = (mapa[num] || 0) + 1;
	});
	return [...arr].sort((a, b) => {
		const A = mapa[a];
		const B = mapa[b];
		if (A !== B) {
			return B - A;
		}
		return a - b;
	});
}

// console.log(solve([2, 3, 5, 3, 7, 9, 5, 3, 7]));

function longestRepetition(s) {
	if (!s) return ["", 0];
	let maxChar = s[0];
	let maxCount = 0;
	let currentChar = s[0];
	let currentCount = 1;
	for (let i = 1; i < s.length; i++) {
		if (s[i] === currentChar) {
			currentCount++;
		} else {
			if (currentCount > maxCount) {
				maxCount = currentCount;
				maxChar = currentChar;
			}
			currentChar = s[i];
			currentCount = 1;
		}
	}
	if (currentCount > maxCount) {
		maxCount = currentCount;
		maxChar = currentChar;
	}
	return [maxChar, maxCount];
}

// console.log(longestRepetition("aaaabb")); //["a",4]
// console.log(longestRepetition("bbbaaabaaaa")); //["a",4]
// console.log(longestRepetition("cbdeuuu900")); //["u",3]
// console.log(longestRepetition("abbbbb")); //["b",5]
// console.log(longestRepetition("aabb")); //["a",2]
// console.log(longestRepetition("")); //["",0]
// console.log(longestRepetition("ba")); //["b",1]

function calc(x) {
	let resultString = "";
	for (const element of x) {
		const charAsciiFormat = element.charCodeAt(0);
		resultString += charAsciiFormat;
	}
	const totalSumOfNumbers1 = resultString.split("").reduce((acc, cur) => acc + Number(cur), 0);
	const totalSumOfNumbers2 = resultString.replace(/7/g, "1").split("").reduce((acc, cur) => acc + Number(cur), 0);
	
	return totalSumOfNumbers1 - totalSumOfNumbers2;
}

// console.log(calc("ABC"));
// console.log(calc("abcdef"));//6
// console.log(calc("ifkhchlhfd"));//6
// console.log(calc("aaaaaddddr"));//30
// console.log(calc("jfmgklf8hglbe"));//6
// console.log(calc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"));//96

function getMissingElement(arr) {
	const sortedArray = arr.sort((a, b) => a - b);
	for (let i = 0; i < sortedArray.length; i++) {
		if (sortedArray[i] !== i) {
			return i;
		}
	}
}

// console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4])); //8
// console.log(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1])); //3

const sortme = (names) => {
	return names.sort();
};

// console.log(sortme(['one', 'two', 'three' ])); //["one", "three", "two"]

function reverse1(arr) {
	let start = 0;
	let end = arr.length - 1;
	while (start < end) {
		let temp = arr[start];
		arr[start] = arr[end];
		arr[end] = temp;
		start++;
		end--;
	}
	
}

// console.log(reverse1([1, 2, 3, 4, 5]));//[5,4,3,2,1]
// console.log(reverse1(["hello", "world", "how", "are", "you", "?"]));//['?','you','are','how','world','hello']
// console.log(reverse1([{a: 1}, {b: 2}]));//[{b:2},{a:1}]]

function findDup(array) {
	const seen = {};
	array.forEach((integer) => {
		seen[integer] = (seen[integer] || 0) + 1;
	});
	const resultArr = Object.entries(seen).filter((int) => Number(int[1]) > 1);
	return Number(resultArr[0][0]);
}

// console.log(findDup([1, 2, 3, 1]));//1
// console.log(findDup([5, 4, 3, 2, 1, 1]));//1
// console.log(findDup([1, 3, 2, 5, 4, 5, 7, 6]));//5
// console.log(findDup([8, 2, 6, 3, 7, 2, 5, 1, 4]));//2
// console.log(findDup([1, 1]));//1

function shorterReverseLonger(a, b) {
	return a.length < b.length ?
		a + b.split("").reverse().join("") + a
		:
		b + a.split("").reverse().join("") + b;
}

// console.log(shorterReverseLonger("first", "abcde"));//"abcde tsrif abcde"
// console.log(shorterReverseLonger("hello", "bau" ));//"bau olleh bau"
// console.log(shorterReverseLonger("fghi",  "abcde"));//"fghi edcba fghi"

function solution(value) {
	const slicedString = `0000${value}`.slice(-5);
	return `Value is ${slicedString}`;
}

// console.log(solution(5), "Value is 00005");
// console.log(solution(1204), "Value is 01204");
// console.log(solution(109), "Value is 00109");
// console.log(solution(0), "Value is 00000");

function hasUniqueChars(str) {
	const seen = {};
	for (const seenElement of str) {
		seen[seenElement] = (seen[seenElement] || 0) + 1;
	}
	return !Object.entries(seen).some(el => el[1] >= 2);
}

// console.log(hasUniqueChars("aa"));//false
// console.log(hasUniqueChars("abcse"));//true
// console.log(hasUniqueChars("aA"));//true
// console.log(hasUniqueChars("apr"));//true

function solve1(s) {
	const consonantsGroup = s.replace(/[aeiou]/g, " ").split(" ");
	const groupCount = consonantsGroup.map((char) => {
		return char.split("").reduce((acc, cur) => acc + (cur.charCodeAt(0) - 96), 0);
	});
	return Math.max(...groupCount);
	
}

// console.log(solve1("zodiac"), 26);
// console.log(solve1("chruschtschov"),80);
// console.log(solve1("khrushchev"),38);
// console.log(solve1("strength"), 57);
// console.log(solve1("catchphrase"),73);
// console.log(solve1("twelfthstreet"),103);
// console.log(solve1("mischtschenkoana"),80);
// console.log(solve1("az"),26);

function missingNo(nums) {
	const sortedArray = nums.sort((a, b) => a - b);
	for (let i = 0; i <= 100; i++) {
		if (sortedArray[i] !== i) {
			return i;
		}
	}
}

// let arr1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99]
// console.log(missingNo(arr1), 26);

function modifiedSum(a, n) {
	return a.reduce((acc, cur) => acc + cur ** n, 0) - a.reduce((acc, cur) => acc + cur, 0);
}

// console.log(modifiedSum([1, 2, 3], 3), 30);
// console.log(modifiedSum([1, 2], 5), 30);

function lostSheep(friday, saturday, total) {
	const fridayCountSheep = friday.reduce((acc, cur) => acc + cur, 0);
	const saturdayCountSheep = saturday.reduce((acc, cur) => acc + cur, 0);
	return total - (fridayCountSheep + saturdayCountSheep);
}

// console.log(lostSheep([1, 2], [3, 4], 15), 5);
// console.log(lostSheep([3, 1, 2], [4, 5], 21), 6);

function hamming(a, b) {
	let count = 0;
	for (let i = 0; i < a.length; i++) {
		const currentCharA = a[i];
		const currentCharB = b[i];
		if (currentCharA !== currentCharB) {
			count++;
		}
	}
	return count;
}

// console.log(hamming("", ""), 0);
// console.log(hamming("a", "a"), 0);
// console.log(hamming("a", "b"), 1);
// console.log(hamming("I like turtles", "I like turkeys"), 3);
// console.log(hamming("Hello World", "Hello World"), 0);
// console.log(hamming("hello world", "hello tokyo"), 4);
// console.log(hamming("a man a plan a canal", "a man a plan sobanal"), 3);
// console.log(hamming("hamming and cheese", "Hamming and Cheese"), 2);
// console.log(hamming("espresso", "Expresso"), 2);
// console.log(hamming("old father, old artificer", "of my soul the uncreated "), 24);

function validate(n) {
	const digits = [...String(n)].map(Number);
	const length = digits.length;
	
	const transformed = digits.map((digit, index) => {
		const isEvenLength = length % 2 === 0;
		const doubleIndex = isEvenLength ? index % 2 === 0 : index % 2 !== 0;
		if (doubleIndex) {
			const doubled = digit * 2;
			return doubled > 9 ? doubled - 9 : doubled;
		}
		return digit;
	});
	
	const sum = transformed.reduce((acc, cur) => acc + cur, 0);
	return sum % 10 === 0;
	
}

// console.log(validate(123), false);
// console.log(validate(1), false);
// console.log(validate(2121), true);
// console.log(validate(1230), true);
// console.log(validate(891), true);
// console.log(validate(12345));

function solve2(str) {
	const arrayWithoutSpaces = [...str].filter((el) => el !== " ");
	return str.replace(/\S/g, _ => arrayWithoutSpaces.pop());
}

// console.log(solve2("codewars"));//"srawedoc"
// console.log(solve2("your code"));//"edoc ruoy"
// console.log(solve2("your code rocks"));//"skco redo cruoy"
// console.log(solve2("i love codewars"));//"s rawe docevoli"

function isFlush(cards) {
	const arr = cards.map((el) => el.length === 2 ? el[1] : el[2]);
	return [...new Set(arr)].length === 1;
}

// console.log(isFlush(["AS", "3S", "9S", "KS", "4S"]), true);
// console.log(isFlush(["AD", "4S", "7H", "KC", "5S"]), false);
// console.log(isFlush(["AD", "4S", "10H", "KC", "5S"]), false);
// console.log(isFlush(["QD", "4D", "10D", "KD", "5D"]), true);
// console.log(isFlush(["10D", "4D", "QD", "KD", "5D"]), true);

function processArray(arr, callback) {
	const resultArray = [];
	for (let i = 0; i < arr.length; i++) {
		resultArray.push(callback(arr[i]));
	}
	return resultArray;
}

// return the missing number!
function findNumber(array) {
	const n = array.length + 1;
	const expectedSum = (n * (n + 1)) / 2;
	const actualSum = array.reduce((acc, cur) => acc + cur, 0);
	return expectedSum - actualSum;
}

// console.log(findNumber([1, 3, 4, 5, 6, 7, 8]), 2);
// console.log(findNumber([7, 8, 1, 2, 4, 5, 6]), 3);
// console.log(findNumber([1, 2, 3, 5]), 4);
// console.log(findNumber([1, 3]), 2);
// console.log(findNumber([2, 3, 4]), 1);
// console.log(findNumber([13, 11, 10, 3, 2, 1, 4, 5, 6, 9, 7, 8]), 12);
// console.log(findNumber([1, 2, 3]), 4);

function tripledouble(num1, num2) {
	const num1Str = num1.toString();
	const num2Str = num2.toString();
	
	const tripleMatch = num1Str.match(/(\d)\1\1/);
	if (!tripleMatch) return 0;
	
	const tripleDigit = tripleMatch[1];
	
	
	const doubleMatch = new RegExp(`${tripleDigit}{2}`).test(num2Str);
	return doubleMatch ? 1 : 0;
}

// console.log(tripledouble(451999277, 41177722899), 1);
// console.log(tripledouble(1222345, 12345), 0);
// console.log(tripledouble(12345, 12345), 0);
// console.log(tripledouble(666789, 12345667), 1);
// console.log(tripledouble(10560002, 100), 1);
// console.log(tripledouble(1112, 122), 0);


const flutten = (arr) => {
	const result = [];
	for (const item of arr) {
		if (Array.isArray(item)) {
			result.push(...flutten(item));
		} else {
			result.push(item);
		}
	}
	return result;
};

// console.log(flutten([1, 2, 3, [4, [5]], 6, [7]]));

function betweenExtremes(numbers) {
	const sortedArr = [...numbers].sort((a, b) => a - b);
	return sortedArr[sortedArr.length - 1] - sortedArr[0];
}

// console.log(betweenExtremes([21, 34, 54, 43, 26, 12]), 42);
// console.log(betweenExtremes([-1, -41, -77, -100]), 99);

function validParentheses(parenStr) {
	const brackets = {"{": "}", "[": "]", "(": ")"};
	const stack = [];
	for (const bracket of parenStr) {
		if (brackets[bracket]) {
			stack.push(bracket);
		} else {
			const lastRemoved = stack.pop();
			if (brackets[lastRemoved] !== bracket) {
				return false;
			}
		}
	}
	return !stack.length;
}

// console.log(validParentheses("()"));
// console.log(validParentheses("((()))"));
// console.log(validParentheses("(()())()"));
// console.log(validParentheses("())(()"));
// console.log(validParentheses(")()"));

function stringify(list) {
	if (list === null) return "null";
	let str = "";
	for (const key in list) {
		if (key === "data") {
			str = list[key] + " ->";
		} else if (key === "next") {
			str += ` ${stringify(list[key])}`;
		}
	}
	return str;
}

// class Node {
// 	constructor(data, next = null) {
// 		this.data = data;
// 		this.next = next;
// 	}
// }
//
// console.log(stringify(new Node(1, new Node(2, new Node(3)))), "1 -> 2 -> 3 -> null");
// console.log(stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))), "0 -> 1 -> 4 -> 9 -> 16 -> null");
// console.log(stringify(null), "null");

function findDuple(arr) {
	const seen = {};
	for (const item of arr) {
		seen[item] = (seen[item] || 0) + 1;
	}
	return +Object.entries(seen).find(el => el[1] === 2)[0];
}

// console.log(findDuple([1, 2, 2, 3]), 2);
// console.log(findDuple([1, 3, 2, 5, 4, 5, 7, 6]), 5);

function removeParentheses(s) {
	while (s.includes("(")) {
		s = s.replace(/\([^()]*\)/, ""); // Remove innermost parentheses
	}
	return s;
}

// console.log(removeParentheses("example(unwanted thing)example"));//"exampleexample"
// console.log(removeParentheses("example (unwanted thing) example"));// "example  example"
// console.log(removeParentheses("a (bc d)e"));// "a e"
// console.log(removeParentheses("a(b(c))"));//"a"
// console.log(removeParentheses("hello example (words(more words) here) something"));//"hello example  something"
// console.log(removeParentheses("(first group) (second group) (third group)"));// "  "

function validateWord(s) {
	const seen = {};
	
	for (const item of s.toLowerCase()) {
		seen[item] = (seen[item] || 0) + 1;
	}
	
	return [...new Set(Object.values(seen))].length === 1;
}

// console.log(validateWord("abcabc"), true);
// console.log(validateWord("Abcabc"), true);
// console.log(validateWord("abc123"), true);
// console.log(validateWord("abcabcd"), false);
// console.log(validateWord("abc!abc!"), true);
// console.log(validateWord("abc:abc"), false);
// console.log(validateWord("jgygpgyvee?bcuoci*$4iy*kac6gstqaejjjypppvvve???bbbcuuuoooii**$$$444kkkaa666ssstttqqq"), false);

// Array.prototype.remove_ = function(integer_list, values_list){
// 	//your code here
// 	return integer_list.filter((item) => !values_list.includes(item))
// }
// let integer_list = [1, 1, 2, 3, 1, 2, 3, 4];
// let values_list = [1, 3];
// let l = new Array();
//
// console.log(l.remove_(integer_list, values_list), [2, 2, 4]);

function repeats(arr) {
	const seen = {};
	
	arr.forEach((item) => {
		seen[item] = (seen[item] || 0) + 1;
	});
	
	return Object.entries(seen).reduce((acc, cur) => {
		if (cur[1] === 1) {
			acc += Number(cur[0]);
		}
		return acc;
	}, 0);
}

// console.log(repeats([4, 5, 7, 5, 4, 8]), 15);
// console.log(repeats([9, 10, 19, 13, 19, 13]), 19);
// console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]), 12);
// console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]), 22);
// console.log(repeats([5, 10, 19, 13, 10, 13]), 24);

function count(n) {
	if (n === 0 || n === 1) return 1;
	
	let sum = 0;
	
	for (let i = 2; i <= n; i++) {
		sum += Math.log10(i);
	}
	
	return Math.floor(sum) + 1;
}

// console.log(count(50));

function closedBrackets(s) {
	let minOpen = 0;
	let maxOpen = 0;
	
	for (const char of s) {
		if (char === "(") {
			minOpen++;
			maxOpen++;
		} else if (char === ")") {
			minOpen = Math.max(0, minOpen - 1);
			maxOpen--;
		} else if (char === "J") {
			minOpen = Math.max(0, minOpen - 1);
			maxOpen++;
		}
		if (maxOpen < 0) {
			return false;
		}
	}
	return minOpen === 0;
}

// console.log(closedBrackets("(J))"), true);
// console.log(closedBrackets("("), false);
// console.log(closedBrackets(""), true);
// console.log(closedBrackets("()J("), false);
// console.log(closedBrackets("J"), true);
// console.log(closedBrackets(")("), false);
// console.log(closedBrackets("()"), true);
// console.log(closedBrackets("J)(J"), true);
// console.log(closedBrackets("(J()J(()(J"), false);
// console.log(closedBrackets("J(JJ()J((J"), false);

function menFromBoys(arr) {
	const men = [...new Set(arr)].filter((el) => el % 2 === 0).sort((a, b) => a - b);
	const boys = [...new Set(arr)].filter((el) => el % 2 !== 0).sort((a, b) => b - a);
	return men.concat(boys);
}

// console.log(menFromBoys([7, 3, 14, 17]), [14, 17, 7, 3]);
// console.log(menFromBoys([2, 43, 95, 90, 37]), [2, 90, 95, 43, 37]);
// console.log(menFromBoys([20, 33, 50, 34, 43, 46]), [20, 34, 46, 50, 43, 33]);
// console.log(menFromBoys([82, 91, 72, 76, 76, 100, 85]), [72, 76, 82, 100, 91, 85]);
// console.log(menFromBoys([2, 15, 17, 15, 2, 10, 10, 17, 1, 1]), [2, 10, 17, 15, 1]);
// console.log(menFromBoys([-32, -39, -35, -41]), [-32, -35, -39, -41]);
// console.log(menFromBoys([-64, -71, -63, -66, -65]), [-66, -64, -63, -65, -71]);
// console.log(menFromBoys([-94, -99, -100, -99, -96, -99]), [-100, -96, -94, -99]);
// console.log(menFromBoys([-53, -26, -53, -27, -49, -51, -14]), [-26, -14, -27, -49, -51, -53]);
// console.log(menFromBoys([-17, -45, -15, -33, -85, -56, -86, -30]), [-86, -56, -30, -15, -17, -33, -45, -85]);
// console.log(menFromBoys([12, 89, -38, -78]), [-78, -38, 12, 89]);
// console.log(menFromBoys([ 72, 76, 76, 82, 100, 91, 85 ]),[ 72, 76, 76, 82, 100, 91, 85 ]);

function addLetters(...letters) {
	if (!letters.length) return "z";
	const sumOfChar = letters.reduce((acc, cur) => acc + cur.charCodeAt(0) - 96, 0);
	const resultCode = ((sumOfChar - 1) % 26) + 1;
	return String.fromCharCode(resultCode + 96);
	
}

// console.log(addLetters("a", "b", "c")); // 'f'
// console.log(addLetters("z"));          // 'z'
// console.log(addLetters("a", "b"));     // 'c'
// console.log(addLetters("c"));          // 'c'
// console.log(addLetters("z", "a"));     // 'a'
// console.log(addLetters("y", "c", "b"));// 'd'
// console.log(addLetters());             // 'z'

function formatWords(words) {
	if (!words || !words.length) return "";
	words = words.filter(word => word);
	if (words.length === 0) return "";
	if (words.length === 1) return words[0];
	const lastWord = words.pop();
	return words.length ? `${words.join(", ")} and ${lastWord}` : lastWord;
}

// console.log(formatWords(["one", "two", "three", "four"]), "one, two, three and four");
// console.log(formatWords(["one"]), "one");
// console.log(formatWords(["one", "", "three"]), "one and three");
// console.log(formatWords(["", "", "three"]), "three");
// console.log(formatWords(["one", "two", ""]), "one and two");
// console.log(formatWords([]), "");
// console.log(formatWords(null), "");
// console.log(formatWords([""]), "");

function broken(x) {
	return [...x].map((el) => el === "1" ? "0" : "1").join("");
}

// console.log(broken("1"), "0");
// console.log(broken("10000000101101111110011001000"), "01111111010010000001100110111");
// console.log(broken("100010"), "011101");

function countLettersAndDigits(input) {
	let lettersAndDigitsCount = 0;
	
	for (const inputElement of input) {
		if (/[a-zA-Z\d]/.test(inputElement)) {
			lettersAndDigitsCount++;
		}
	}
	
	return lettersAndDigitsCount;
}

// console.log(countLettersAndDigits("hel2!lo"), 6);
// console.log(countLettersAndDigits("n!!_ice!!123"), 7);
// console.log(countLettersAndDigits("1"), 1);
// console.log(countLettersAndDigits("?"), 0);
// console.log(countLettersAndDigits("12345f%%%t5t&/6"), 10);
// console.log(countLettersAndDigits("aBcDeFg090"), 10);
// console.log(countLettersAndDigits("u_n_d_e_r__S_C_O_R_E"), 10);

function matchArrays(v, r) {
	return v.filter((item) => r.includes(item)).length;
}

// console.log(matchArrays(
// 	["Perl", "Closure", "JavaScript"],
// 	["Go", "C++", "Erlang"]), 0);
// console.log(matchArrays(["incapsulation", "OOP", "array"],
// 	["time", "propert", "paralelism", "OOP"]), 1);
// console.log(matchArrays([1, 2, 3, 4, 5],
// 	[2, 3, 4, 5, 6]), 4);


function search(budget, prices) {
	const filteredPrices = prices.filter((price) => budget >= price);
	filteredPrices.sort((a, b) => a - b);
	
	return filteredPrices.join(",");
}

// console.log(search(3, [6, 1, 2, 9, 2]), "1,2,2");
// console.log(search(14, [7, 3, 23, 9, 14, 20, 7]), "3,7,7,9,14");
// console.log(search(0, [6, 1, 2, 9, 2]), "");

function dominator(arr) {
	const seen = {};
	arr.forEach((item) => {
		seen[item] = (seen[item] || 0) + 1;
	});
	const halfArrayLength = Math.floor(arr.length / 2);
	const counted = Object.entries(seen).filter((item) => item[1] >= 2 && item[1] > halfArrayLength);
	return counted.length ? +counted[0][0] : -1;
}

// console.log(dominator([3, 4, 3, 2, 3, 1, 3, 3]), 3);
// console.log(dominator([1, 2, 3, 4, 5]), -1);
// console.log(dominator([1, 1, 1, 2, 2, 2]), -1);
// console.log(dominator([1, 1, 1, 2, 2, 2, 2]), 2);

function compoundArray(a, b) {
	const result = [];
	const maxLength = Math.max(a.length, b.length);
	for (let i = 0; i < maxLength; i++) {
		if (i < a.length) {
			result.push(a[i]);
		}
		if (i < b.length) {
			result.push(b[i]);
		}
	}
	return result;
}

// console.log(compoundArray([11, 12], [21, 22, 23, 24]));//[11, 21, 12, 22, 23, 24]
// console.log(compoundArray([2147483647,2147483646,2147483645,2147483644,2147483643], [9]));//[2147483647,9,2147483646,2147483645,2147483644,2147483643]
// console.log(compoundArray([214,215,216,217,218], []));//, [214,215,216,217,218]
// console.log(compoundArray([], [314,315,316,317,318]));//, [314,315,316,317,318]

function makeLatinSquare(n) {
	const result = [];
	for (let i = 0; i < n; i++) {
		const row = [];
		for (let j = 0; j < n; j++) {
			row.push((i + j) % n + 1);
		}
		result.push(row);
	}
	return result;
}

// console.log(makeLatinSquare(4));

function solveArray(arr) {
	return arr.find((elem) => !arr.includes(-elem));
}

// console.log(solveArray([1, -1, 2, -2, 3]), 3);
// console.log(solveArray([-3, 1, 2, 3, -1, -4, -2]), -4);
// console.log(solveArray([1, -1, 2, -2, 3, 3]), 3);
// console.log(solveArray([-110, 110, -38, -38, -62, 62, -38, -38, -38]), -38);
// console.log(solveArray([-9, -105, -9, -9, -9, -9, 105]), -9);

const killcount = (counselors, jason) => {
	const result = [];
	counselors.forEach((elem) => {
		if (elem[1] < jason) {
			result.push(elem[0]);
		}
	});
	return result;
};

// console.log(killcount([["Mike", 7], ["Alysa", 3]], 7));

function uniteUnique(...args) {
	const result = [];
	args.forEach((item) => {
		result.push(...item);
	});
	return [...new Set(result)];
}

// console.log(uniteUnique([1, 2], [3, 4]), [1, 2, 3, 4]);
// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]);
// console.log(uniteUnique([4, 3, 2, 2]), [4, 3, 2]);
// console.log(uniteUnique([4, "a", 2], []), [4, "a", 2]);
// console.log(uniteUnique([], [4, "a", 2]), [4, "a", 2]);
// console.log(uniteUnique([], [4, "a", 2], []), [4, "a", 2]);
// console.log(uniteUnique([]), []);

function getNewNotes(salary, bills) {
	const sumOfBills = bills.reduce((acc, cur) => acc + cur, 0);
	const sumOfNotes = Math.floor((salary - sumOfBills) / 5);
	return sumOfNotes > 0 ? sumOfNotes : 0;
}

// console.log(getNewNotes(2000, [500, 160, 400]), 188);
// console.log(getNewNotes(1260, [500, 50, 100]), 122);
// console.log(getNewNotes(3600, [1800, 350, 460, 500, 15]), 95);
// console.log(getNewNotes(1995, [1500, 19, 44]), 86);
// console.log(getNewNotes(10000, [1800, 500, 1200, 655, 150]), 1139);
// console.log(getNewNotes(2300, [590, 1500, 45, 655, 150]), 0);
// console.log(getNewNotes(5300, [1190, 1010, 1045, 55, 10, 19, 55]), 383);


function reduceByRules(numbers, rules) {
	let result = numbers[0];
	let ruleIndex = 0;
	
	for (let i = 1; i < numbers.length; i++) {
		result = rules[ruleIndex](result, numbers[i]);
		ruleIndex = (ruleIndex + 1) % rules.length;
	}
	return result;
}

// console.log(reduceByRules([2.0, 2.0, 3.0, 4.0], [(a, b) => a + b,
// 	(a, b) => a - b]), 5.0);

function shortForm(str) {
	const vowels = "aeiouAEIOU";
	const result = [];
	for (let i = 1; i < str.length - 1; i++) {
		const currentChar = str[i];
		if (!vowels.includes(currentChar)) {
			result.push(currentChar);
		}
	}
	
	result.unshift(str[0]);
	result.push(str[str.length - 1]);
	
	return result.join("");
	
}

// console.log(shortForm("assAult"), "asslt");

function choreAssignment(chores) {
	chores.sort((a, b) => a - b);
	let left = 0;
	let right = chores.length - 1;
	const result = [];
	
	while (left < right) {
		result.push(chores[left] + chores[right]);
		left++;
		right--;
	}
	return result.sort((a, b) => a - b);
}

// console.log(choreAssignment([5, 2, 1, 6, 4, 4]), [7, 7, 8]);
// console.log(choreAssignment([1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9]), [7, 8, 8, 10, 10, 11]);
// console.log(choreAssignment([5, 8, 3, 5, 3, 10, 5, 3, 10, 2, 4, 8, 7, 3, 9, 6]), [10, 11, 11, 11, 11, 12, 12, 13]);
// console.log(choreAssignment([9, 2, 10, 10, 5, 5, 8, 7, 4, 2, 8, 3, 6, 8, 7, 3, 6, 2]), [11, 11, 11, 12, 12, 12, 12, 12, 12]);
// console.log(choreAssignment([1, 6, 5, 5, 1, 10, 10, 9, 2, 10, 3, 9, 5, 4, 5, 6, 1, 9, 1, 8]), [10, 10, 11, 11, 11, 11, 11, 11, 12, 12]);

const getUserPersonalCode = (birthDay) => {
	const cleanedDate = birthDay.replace(/-/g, "");
	const sumOfDigits = [...cleanedDate].reduce((sum, digit) => sum + Number(digit), 0);
	
	const secondNumber = sumOfDigits < 10
		? sumOfDigits
		: [...String(sumOfDigits)].reduce((sum, digit) => sum + Number(digit), 0);
	
	const firstDateDigit = Number(cleanedDate[0]);
	
	const adjustedDifference = sumOfDigits - firstDateDigit * 2;
	
	const finalDigit = adjustedDifference < 10
		? ""
		: [...String(adjustedDifference)].reduce((sum, digit) => sum + Number(digit), 0);
	
	let personalCode = String(sumOfDigits)
		+ String(secondNumber)
		+ String(adjustedDifference)
		+ String(finalDigit);
	
	personalCode = personalCode.replace(/0/g, "");
	
	return personalCode;
	
	
};

const getUserStatus = (dateOfBirth = "24-06-2002") => {
	const statusMap = {
		4: "Молодая душа",
		5: "Индиго",
		6: "Норма",
		7: "Тысячник"
	};
	
	const status = getUserPersonalCode(dateOfBirth);
	return statusMap[status.length];
};
// console.log(getUserStatus());

const getZodiacElement = (dateOfBirth = "24-06-2002") => {
	const element = "Овен";
	const elementSign = {
		Овен: "Огонь",
		Лев: "Огонь",
		Стрелец: "Огонь",
		Рак: "Вода",
		Скорпион: "Вода",
		Рыбы: "Вода",
		Близнецы: "Воздух",
		Весы: "Воздух",
		Водолей: "Воздух",
		Телец: "Земля",
		Дева: "Земля",
		Козерог: "Земля"
	};
	
	return elementSign[element];
};
const getPersonEnergy = (dateOfBirth = "24-06-2002") => {
	const yearOfBirth = dateOfBirth.split("-")[2];
	return Number(yearOfBirth) % 2 === 0 ? "Янь" : "Инь";
};

// console.log(getPersonEnergy());


function findMissingNumbers(arr) {
	const minInteger = Math.min(...arr);
	const maxInteger = Math.max(...arr);
	const result = [];
	
	for (let i = minInteger; i < maxInteger; i++) {
		if (!arr.includes(i)) result.push(i);
	}
	
	return result;
}

// console.log(findMissingNumbers([-3, -2, 1, 4]), [-1, 0, 2, 3]);
// console.log(findMissingNumbers([-1, 0, 1, 2, 3, 4]), []);
// console.log(findMissingNumbers([]), []);


function factory(x) {
	return function (arr) {
		return arr.map((item) => item * x);
	};
}

// const myArray = [1, 2, 3];
//
// const threes = factory(3);
// console.log(threes(myArray), [3, 6, 9]);

function commonGround(s1, s2) {
	const filteredString = s2.split(" ")
		.filter((el) => s1.includes(el) && el)
		.join(" ");
	
	return filteredString.length === 0 ? "death" : filteredString;
}

// console.log(commonGround("eat chicken", "eat chicken and rice"), "eat chicken");
// console.log(commonGround("eat a burger and drink a coke", "drink a coke"), "drink a coke");
// console.log(commonGround("i like turtles", "what are you talking about"), "death");


function arrMultiply(arr) {
	return arr.reduce((acc, cur) => acc * +cur, 1).toString();
}

// console.log(arrMultiply(["3", "5"]), "15");
// console.log(arrMultiply(["2", "-3"]), "-6");
// console.log(arrMultiply(["9", "0"]), "0");

function sortByLanguage(list) {
	return list.sort((a, b) => {
		const languageComparison = a.language.localeCompare(b.language);
		if (languageComparison === 0) return a.firstName.localeCompare(b.firstName);
		else return languageComparison;
	});
}

function getLosAngelesPoints(results) {
	let totalPoints = 0;
	
	results.forEach(([teamName, score]) => {
		if (/^Los Angeles [A-Z][a-z]+$/.test(teamName)) {
			const points = parseInt(score.split(":")[0], 10);
			totalPoints += points;
		}
	});
	
	return totalPoints;
}

function consecutive(array) {
	const minInt = Math.min(...array);
	const maxInt = Math.max(...array);
	const result = [];
	
	for (let i = minInt; i <= maxInt; i++) {
		result.push(i);
	}
	
	return result.filter((item) => !array.includes(item)).length;
	
}

// console.log(consecutive([4, 8, 6])); //2

// const mapa = [["top left", "top middle", "top right"], ["middle left", "center", "middle right"], ["bottom left", "bottom middle", "bottom right"]];

function fire(x, y) {
	return mapa[y][x];
}

// console.log(fire(0, 0));
// console.log(fire(1, 2));

function boatLoader(a) {
	const validAnimals = a.filter(animal => /^[a-zA-Z]$/.test(animal));
	validAnimals.sort((a, b) => {
		const diff = a.toLowerCase().localeCompare(b.toLowerCase());
		if (diff === 0) {
			return a < b ? -1 : 1;
		}
		return diff;
	});
	
	const pairs = [];
	const countMap = {};
	
	for (const animal of validAnimals) {
		countMap[animal] = (countMap[animal] || 0) + 1;
	}
	
	for (const [animal, count] of Object.entries(countMap)) {
		if (count >= 2) {
			pairs.push([animal, animal]);
		}
	}
	
	return pairs;
}

// console.log(boatLoader(["g", "c", "h", "c", "g", "m"])); //[['c','c'],['g','g']]
// console.log(boatLoader(["a", "d", "G", "V", "X", "F", "g", "h", "s", "r", "a", "g", "n", "s", "e", "r", "j", "a", "f", "D", "F", "G", "R", "H", "C", "X", "B", "N", "G", "U", "G", "F", "p", "s", "r", "g", "a"])); //[["a","a"],["F","F"],["G","G"],["g","g"],["r","r"],["s","s"],["X","X"]],

function deepSort(arr, asc) {
	function sum(arr) {
		return arr.reduce((acc, item) => {
			if (Array.isArray(item)) {
				return acc + sum(item);
			}
			return acc + item;
		}, 0);
	}
	
	
	const sorted = arr.slice().sort((a, b) => {
		const aSum = Array.isArray(a) ? sum(a) : a;
		const bSum = Array.isArray(b) ? sum(b) : b;
		return asc ? aSum - bSum : bSum - aSum;
	});
	
	return sorted.map(item => (Array.isArray(item) ? deepSort(item, asc) : item));
}


// console.log(deepSort([1, 2, 3, 4], true), [1, 2, 3, 4]);
// console.log(deepSort([1, 2, 3, 4]), [4, 3, 2, 1]);
// console.log(deepSort([2, [1, 1], [1, 1], 2], true), [2, [1, 1], [1, 1], 2]);


Array.prototype.remove = function (pred) {
	const arrayCp = this.splice(0, this.length);
	
	return arrayCp.filter((item) => {
		return pred(item) ? true : !this.push(item);
	});
};
// const array = [1, 2, 3, 4, 5];
// console.log(array.remove((i) => i % 2 === 0));

function deepReverse(list) {
	const result = [];
	
	for (const listItem of list) {
		if (!Array.isArray(listItem)) {
			result.push(listItem);
		} else {
			result.push(deepReverse(listItem));
		}
	}
	return result.reverse();
}

// console.log(deepReverse([1, 2])); // [2,1]
// console.log(deepReverse([[6, 5], [4, 3]])); // [[3,4],[5,6]]
// console.log(deepReverse([[9, 8, 7], [6, 5, 4], [3, 2, 1]])); // [[1,2,3],[4,5,6],[7,8,9]]
// console.log(deepReverse([[100, 101], [102, 103, 104], [105, 106, 107], [108, 109, 110]])); // [[110,109,108],[107,106,105],[104,103,102],[101,100]]
// console.log(deepReverse([[50, 51, [52, 53]], [[54, 55], 56, 57]])); // [[57,56,[55,54]],[[53,52],51,50]]
// console.log(deepReverse([1000, 1001, 1002, 1003, [1004, [1005, 1006, 1007, [1008, 1009, 1010]]], [1011], [1012, 1013, 1014], [1015, 1016, 1017]])); // [[1017,1016,1015],[1014,1013,1012],[1011],[[[1010,1009,1008],1007,1006,1005],1004],1003,1002,1001,1000] ))

const smallEnough = (a, limit) => a.every((item) => item <= limit);

// console.log(smallEnough([66, 101], 200), true);
// console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
// console.log(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
// console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);

function array10() {
	
	const chars = ["A", "B", "C", "D"];
	const result = [];
	
	for (let i = 0; i < 10; i++) {
		const row = [...chars];
		while (row.length < 10) {
			row.push(chars[Math.floor(Math.random() * chars.length)]);
		}
		row.sort(() => Math.random() - 0.5);
		
		result.push(row);
	}
	
	return result;
}

// console.log(array10());

function arrayLowerCase(arr) {
	return arr.map((item) => typeof item === "string" ? item.toLowerCase() : item);
}

// console.log(arrayLowerCase(["Red", "Green", 1]), ["red", "green"]);

const calc2 = (arr) => {
	return arr.map((item, index) => {
		if (item > 0) {
			item = item ** 2;
		}
		if ((index + 1) % 3 === 0) {
			item = item *= 3;
		}
		if ((index + 1) % 5 === 0) {
			item = item *= -1;
		}
		return item;
	}).reduce((acc, cur) => acc + cur, 0);
	
};

// console.log(calc2([0, 2, 1, -6, -3, 3]), 31);
// console.log(calc2([0]), 0);
// console.log(calc2([1, 1, 1, 1, 1]), 5);


function vertMirror(strng) {
	return strng.split("\n").map((item) => item.split("").reverse().join("")).join("\n");
	
}

function horMirror(strng) {
	return strng
		.split("\n")
		.reverse()
		.join("\n");
}

function oper(fct, s) {
	return fct(s);
}

// console.log(vertMirror("abcd\nefgh\nijkl\nmnop")); //"dcba\nhgfe\nlkji\nponm"
// console.log(horMirror("abcd\nefgh\nijkl\nmnop")); //"mnop\nijkl\nefgh\nabcd"

function List() {
	this.countSpecDigits = function (integersList, digitsList) {
		const string = integersList.join("").replace(/[^0-9]/g, "");
		const result = digitsList.map((digit) => [digit, 0]);
		for (const char of string) {
			const digit = Number(char);
			const index = digitsList.indexOf(digit);
			if (index !== -1) {
				result[index][1] += 1;
			}
		}
		return result;
	};
}

// const list = new List;
// console.log(list.countSpecDigits([-18, -31, 81, -19, 111, -888], [1, 8, 4]));

function solve3(a, b) {
	const seen = b.reduce((acc, cur) => {
		acc[cur] = 0;
		return acc;
	}, {});
	
	a.forEach((item) => {
		if (item in seen) {
			seen[item] += 1;
		}
	});
	
	return b.map(digit => seen[digit] || 0);
	
}

// console.log(solve3(["abc", "abc", "xyz", "abcd", "cde"], ["abc", "cde", "uap"]), [2, 1, 0]);
// console.log(solve3(["abc", "xyz", "abc", "xyz", "cde"], ["abc", "cde", "xyz"]), [2, 1, 2]);
// console.log(solve3(["quick", "brown", "fox", "is", "quick"], ["quick", "abc", "fox"]), [2, 0, 1]);

const timeLimit = (fn, t) => {
	return async (...args) => {
		return new Promise(async (resolve, reject) => {
			const timeout = setTimeout(() => {
				reject("Time Limit Exceeded");
			}, t);
			
			try {
				const result = await fn(...args);
				resolve(result);
			} catch (err) {
				reject(err);
			}
			clearTimeout(timeout);
		});
	};
};

// const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
// limited(50).catch(console.log); // "Time Limit Exceeded" at t=100ms

class MinStack {
	constructor() {
		this.stack = [];
		this.minStack = [];
	}
	
	pop() {
		const removedValue = this.stack.pop();
		if (removedValue === this.getMin()) {
			this.minStack.pop();
		}
		return removedValue;
	}
	
	push(value) {
		this.stack.push(value);
		if (this.minStack.length === 0 || value <= this.getMin()) {
			this.minStack.push(value);
		}
	}
	
	getMin() {
		return this.minStack[this.minStack.length - 1];
	}
	
}

const findDupleInt = (arr) => {
	const seen = {};
	let result;
	
	for (const arrElement of arr) {
		seen[arrElement] = (seen[arrElement] || 0) + 1;
		if (seen[arrElement] === 2) {
			result = arrElement;
		}
	}
	return result;
};

// console.log(findDupleInt([1, 2, 2, 3]), 2);
// console.log(findDupleInt([1, 3, 2, 5, 4, 5, 7, 6]), 5);


const getCount = (words) => {
	if (typeof words !== "string") return {vowels: 0, consonants: 0};
	const cleanedWords = words.replace(/[^a-z]/gi, "");
	const vowels = (cleanedWords.match(/[aeiou]/gi) || []).length;
	const consonants = (cleanedWords.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length;
	return {vowels, consonants};
};
// console.log(getCount("Test"), {vowels: 1, consonants: 3});
// console.log(getCount("Here is some text"), {vowels: 6, consonants: 8});
// console.log(getCount("To be a Codewarrior or not to be"), {vowels: 12, consonants: 13});
// console.log(getCount("To Kata or not to Kata"), {vowels: 8, consonants: 9});
// console.log(getCount("aeiou"), {vowels: 5, consonants: 0});
// console.log(getCount(undefined), {vowels: 5, consonants: 0});
// console.log(getCount(), {vowels: 5, consonants: 0});

const getFirstPythonDev = (arr) => {
	const isFoundDeveloper = arr.find((developer) => developer.language === "Python");
	return isFoundDeveloper ?
		(`${isFoundDeveloper.firstName}, ${isFoundDeveloper.country}`)
		:
		(`There will be no Python developers`);
};
// console.log(getFirstPython(list1), "There will be no Python developers");
// console.log(getFirstPython(list2), "There will be no Python developers");
// console.log(getFirstPython(list3), "Victoria, Puerto Rico");

function orderFood(list) {
	const obj = {};
	
	list.forEach((item) => {
		obj[item.meal] = (obj[item.meal] || 0) + 1;
	});
	
	return obj;
}

// console.log((orderFood(list1))); //{ vegetarian: 2, standard: 1, vegan: 1 };

function findAdmin(list, lang) {
	return list.filter((d) => d.language === lang && d.githubAdmin === "yes");
}

// console.log(findAdmin(list1, "JavaScript"));
// console.log(findAdmin(list1, "Ruby"), []);
// console.log(findAdmin(list1, "Python"), []);

function isSameLanguage(list) {
	return list.every((d) => d.language === list[0].language);
}

// console.log(isSameLanguage(list1), true);
// console.log(isSameLanguage(list2), false);

function getAverageAge(list) {
	return Math.round(list.reduce((acc, cur) => acc + cur.age, 0) / list.length);
}

// console.log(getAverageAge(list1), 50);
// console.log(getAverageAge(list2), 21);


function multipleSplit(string, delimiters = []) {
	const reg = new RegExp("[" + delimiters.join("\\") + "]", "g");
	return string.split(reg).filter((str) => !!str);
}

// console.log(multipleSplit("Hi everybody!", [" ", "!"]), ["Hi", "everybody"]);
// console.log(multipleSplit("(1+2)*6-3^9", ["+", "-", "(", ")", "^", "*"]), ["1", "2", "6", "3", "9"]);
// console.log(multipleSplit("Solve_this|kata-very\\quickly!", ["!", "|", "\\", "_", "-"]), ["Solve", "this", "kata", "very", "quickly"]);
// console.log(multipleSplit(""));

function isLanguageDiverse(list) {
	const seen = {};
	for (const item of list) {
		seen[item.language] = (seen[item.language] || 0) + 1;
	}
	const count = Object.values(seen);
	const max = Math.max(...count);
	const min = Math.min(...count);
	return max <= 2 * min;
}

// console.log(isLanguageDiverse(list1), false);
// console.log(isLanguageDiverse(list2), false);
// console.log(isLanguageDiverse(list3), true);
// console.log(isLanguageDiverse(list4), true);

function addUsername(list) {
	const currenYear = new Date().getFullYear();
	return list.map((item) => {
		const lastName = item.lastName[0].toLowerCase();
		const year = currenYear - item.age;
		item["userName"] = (item.firstName.toLowerCase() + lastName + year);
		return item;
	});
}

// console.log(addUsername(list1));

function askForMissingDetails(list) {
	return list.filter((item) => {
		let firstName = "";
		for (const itemKey in item) {
			if (item[itemKey] === null) {
				item["question"] = `Hi, could you please provide your ${itemKey}.`;
				firstName = item.firstName;
			}
		}
		return item.firstName === firstName;
	});
}

// console.log(askForMissingDetails(list1));
// console.log(askForMissingDetails(list2));

function pairZeros(arr) {
	let count = 0;
	return arr.filter((elem) => {
		if (elem === 0) {
			if (count === 0) {
				count++;
				return true;
			} else {
				count--;
				return false;
			}
		}
		return true;
	});
}

// console.log(pairZeros([1]), [1]);
// console.log(pairZeros([0, 0]), [0]);
// console.log(pairZeros([0, 0, 0]), [0, 0]);
// console.log(pairZeros([1, 0, 1, 0, 2, 0, 0, 3, 0]), [1, 0, 1, 2, 0, 3, 0]);

const factory23 = (x) => {
	return (arr) => arr.map((item) => item * x);
};
// const threes = factory23(5)
// console.log(threes([1, 2, 3]));

const findDuple18 = (arr) => {
	arr.sort();
	for (let i = 0; i < arr.length; i++) {
		const currentInt = arr[i];
		const nextInt = arr[i + 1];
		if (currentInt === nextInt) {
			return currentInt;
		}
	}
};
// console.log(findDuple18([1, 2, 2, 3])); //2
// console.log(findDuple18([1, 3, 2, 5, 4, 5, 7, 6])); //5

function countNumber(n, x) {
	let count = 0;
	for (let i = 1; i <= n; i++) {
		if (x % i === 0 && x / i <= n) count += 1;
	}
	return count;
}

// console.log(countNumber(5, 5), 2);
// console.log(countNumber(10,5),2);
// console.log(countNumber(6,12),4);
// console.log(countNumber(100000,1000000000),16);
// console.log(countNumber(9,484),0);


function sectSort(...args) {
	const arr = args.shift();
	const sortedArr = arr.splice(...args).sort((a, b) => a - b);
	arr.splice(args[0], 0, ...sortedArr);
	return arr;
}

// console.log(sectSort([1, 2, 5, 7, 4, 6, 3, 9, 8], 2));//, [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(sectSort([9, 7, 4, 2, 5, 3, 1, 8, 6], 2, 5)); //[9, 7, 1, 2, 3, 4, 5, 8, 6]

function arrayCenter(a) {
	const min = Math.min(...a);
	const avg = a.reduce((acc, cur) => acc + cur, 0) / a.length;
	return a.filter(num => Math.abs(num - avg) < min);
}

// console.log(arrayCenter([8, 3, 4, 5, 2, 8]), [4, 5]);
// console.log(arrayCenter([1, 3, 2, 1]), [1, 2, 1]);
// console.log(arrayCenter([10, 11, 12, 13, 14]), [10, 11, 12, 13, 14]);

function password(str) {
	const hasUpperCase = str.split("").some((item) => /[A-Z]/.test(item));
	const hasLowerCase = str.split("").some((item) => /[a-z]/.test(item));
	const hasNumber = str.split("").some((item) => /[0-9]/.test(item));
	const passwordLength = str.length >= 8;
	return hasUpperCase && hasLowerCase && hasNumber && passwordLength;
}

// console.log(password("Abcd1234"), true);
// console.log(password("Abcd123"), false);
// console.log(password("abcd1234"), false);
// console.log(password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890"), true);
// console.log(password("ABCD1234"), false);
// console.log(password("Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,"), true);
// console.log(password("!@#$%^&*()-_+={}[]|\:;?/>.<,"), false);


function alphabetWar(fight) {
	const leftSide = {
		w: 4,
		p: 3,
		b: 2,
		s: 1
	};
	const rightSide = {
		m: 4,
		q: 3,
		d: 2,
		z: 1
	};
	let sumOfLeftSide = 0;
	let sumOfRightSide = 0;
	
	for (const char of fight) {
		if (leftSide[char]) {
			sumOfLeftSide += leftSide[char];
		}
		if (rightSide[char]) {
			sumOfRightSide += rightSide[char];
		}
	}
	
	if (sumOfLeftSide > sumOfRightSide) {
		return "Left side wins!";
	} else if (sumOfLeftSide === sumOfRightSide) {
		return "Let's fight again!";
	} else {
		return "Right side wins!";
	}
}

// console.log(alphabetWar("pmwjsqmfoypsvpr"), "Right side wins!");
// console.log(alphabetWar("zdqmwpbs"), "Let's fight again!");
// console.log(alphabetWar("zzzzs"), "Right side wins!");
// console.log(alphabetWar("wwwwww"), "Left side wins!");


function bump(x) {
	const seenBumps = {n: 0};
	for (const bumps of x) {
		if (bumps in seenBumps) seenBumps[bumps] += 1;
	}
	return seenBumps["n"] <= 15 ? "Woohoo!" : "Car Dead";
}

// console.log(bump("n"), "Woohoo!");
// console.log(bump("__nn_nnnn__n_n___n____nn__nnn"), "Woohoo!");
// console.log(bump("nnn_n__n_n___nnnnn___n__nnn__"), "Woohoo!");
// console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
// console.log(bump("______n___n_"), "Woohoo!");


function digits(n) {
	return n.toString().length;
}

// console.log(digits(0), 1);
// console.log(digits(9), 1);
// console.log(digits(66), 2);
// console.log(digits(12345),5);
// console.log(digits(128685), 6);
// console.log(digits(9876543210),10);
// console.log(digits(9007199254740991),16);

const greet = (name) => `Hello ${name.toLowerCase().replace(/^\w/, (f) => f.toUpperCase())}!`;

// console.log(greet("BILLY"));


function sortGiftCode(code) {
	return code.split("").sort().join("");
}

// console.log(sortGiftCode('abcdef'), 'abcdef');
// console.log(sortGiftCode('pqksuvy'), 'kpqsuvy');
// console.log(sortGiftCode('zyxwvutsrqponmlkjihgfedcba'), 'abcdefghijklmnopqrstuvwxyz');

const filterString = (value) => Number(value.replace(/[a-z]/g, ""));


// console.log(filterString("123"), 123);
// console.log(filterString("a1b2c3"), 123);
// console.log(filterString("aa1bb2cc3dd"), 123);

function inAscOrder(arr) {
	const sortedArr = [...arr].sort((a, b) => a - b);
	return arr.every((item, index) => item === sortedArr[index]);
	
}

// console.log(inAscOrder([1, 2, 4, 7, 19]), true);
// console.log(inAscOrder([1, 2, 3, 4, 5]), true);
// console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]), false);
// console.log(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]), false);

function solution123(digits) {
	let maxNum = 0;
	for (let i = 0; i <= digits.length - 5; i++) {
		const currentNum = Number(digits.slice(i, i + 5));
		if (currentNum > maxNum) {
			maxNum = currentNum;
		}
	}
	return maxNum;
}

// console.log(solution123("1234567898765"), 98765);
// console.log(solution123("731674765"), 74765);

function reverseNumber(n) {
	const str = Math.abs(n).toString().split("").reverse().join("");
	return n < 0 ? -Number(str) : Number(str);
}

// console.log(reverseNumber(123), 321);
// console.log(reverseNumber(-123), -321);
// console.log(reverseNumber(1000), 1);
// console.log(reverseNumber(4321234), 4321234);
// console.log(reverseNumber(5), 5);
// console.log(reverseNumber(0), 0);
// console.log(reverseNumber(98989898), 89898989);

function sumEvenNumbers(input) {
	return !input.length ? 0 : input.filter((item) => item % 2 === 0).reduce((acc, cur) => acc + cur, 0);
}

// console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 30);

function parse(data) {
	let count = 0;
	const result = [];
	
	for (const element of data) {
		if (element === "i") {
			count += 1;
		} else if (element === "d") {
			count -= 1;
		} else if (element === "s") {
			count *= count;
		} else if (element === "o") {
			result.push(count);
		}
	}
	return result;
}

// console.log(parse("iiisdosodddddiso"), [8, 64]);

function cleanString(s) {
	const stack = [];
	
	for (const char of s) {
		if (char === "#") {
			stack.pop();
		} else {
			stack.push(char);
		}
	}
	return stack.join("");
}

// console.log(cleanString("abc#d##c"), "ac");
// console.log(cleanString("abc####d##c#"), "");

const validPhoneNumber = (phoneNumber) => {
	return /^\(\d{3}\) \d{3}-\d{4}$/.test(phoneNumber);
};

// console.log(validPhoneNumber("(123) 456-7890"), true);

function switcher(x) {
	const alphabet = " zyxwvutsrqponmlkjihgfedcba!? ";
	return x.map((char) => alphabet[char]).join("");
}

// console.log(switcher(["24", "12", "23", "22", "4", "26", "9", "8"]), "codewars");
// console.log(switcher(["25", "7", "8", "4", "14", "23", "8", "25", "23", "29", "16", "16", "4"]), "btswmdsbd kkw");
// console.log(switcher(["4", "24"]), "wc");

function countLanguages(list) {
	const seenLanguages = {};
	list.forEach((item) => {
		seenLanguages[item.language] = (seenLanguages[item.language] || 0) + 1;
	});
	return seenLanguages;
}

function lastSurvivor(letters, coords) {
	const array = letters.split("");
	coords.forEach((index) => array.splice(index, 1));
	return array.join("");
}

// console.log(lastSurvivor("abc", [1, 1]), "a");
// console.log(lastSurvivor("kbc", [0, 1]), "b");
// console.log(lastSurvivor("zbk", [2, 1]), "z");
// console.log(lastSurvivor("c", []), "c");

function meeting(x) {
	const firstFounded = x.findIndex((el) => el === "O");
	return firstFounded >= 0 ? firstFounded : "None available!";
}

// console.log(meeting(["X", "O", "X"]), 1);
// console.log(meeting(["O", "X", "X", "X", "X"]), 0);
// console.log(meeting(["X", "X", "X", "X", "X"]), "None available!");

const sortme123 = (names) => {
	return names.sort((a, b) => a.localeCompare(b, undefined, {sensitivity: "base"}))
	
};
// console.log(sortme123(["Hello", "there", "I'm", "fine"]), ["fine", "Hello", "I'm", "there"]);
// console.log(sortme123(["C", "d", "a", "B"]), ["a", "B", "C", "d"]);
// console.log(sortme123(["CodeWars"]), ["CodeWars"]);
// console.log(sortme123([]), []);