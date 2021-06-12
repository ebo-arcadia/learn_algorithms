// what is it? procedure
// why algorithms are important? all programming languages lean on it
// time complexity? time or step an algorithm takes to run
// big O notation? another name for big O notation
// the cost of an algorithm? time or steps it takes for an algorithm as a function to execute
// what impacts the cost? the size of the input

// example
// how long does this function takes to run?
// how many steps does this function take to run?
function stringIncludes(word, letter){
    let matches;
    for(let i = 0; i < word.length; i++){
      if(word[i] === letter){
    matches = true
  }
}
return !!matches
  }

console.log(stringIncludes("banana", "a"))
console.log(stringIncludes("banana", "z"))

// time complexity
// best case scenario (complexity) - the most efficient
// average case scenario (complexity) - calculate the average of input
// worst case scenario (complexity) - given an input, the algorithm takes as long as it needs
// why choose worse case when considering the performance of a function?
// - best case: already efficient, no need to optimize
// - average case: likely to optimize with wrong average
// - worst case: execute without looking at the data

// Big O approximation
// asymptotic time complexity
// cost of function: what is the worst case in terms of the length or size of input

function sortString(string){
	return string.split('').sort().join(' ')
}

result = sortString("afggiimmnnoprrsu")
console.log(result)

// binary search
// search for matching number in a sorted string and unsorted string, which one runs faster?
// binary search divide the dataset each time it searches

function binarySearch(string, letter) {
	var startpoint = 0
	var endpoint = string.length - 1;
	var guessPosition = parseInt((endpoint - startpoint)/2)
	while (startpoint != endpoint) {
		console.log(`start point is ${startpoint}, endpoint is ${endpoint} and guessposition is ${guessPosition}`)
		if (string[guessPosition] < letter) {
			console.log('too low')
			startpoint = guessPosition
			guessPosition = startpoint + Math.round((endpoint - startpoint)/2)
		} else if(string[guessPosition] > letter) {
			console.log('too high')
			endpoint = guessPosition
			guessPosition = startpoint + parseInt((endpoint - startpoint)/2)
		} else {
			console.log('just right')
			return true;
		}
	}
	if(string === letter){
		return true
	} else{
		console.log('sorry')
		return false;
	}
}

let string = "aabeeeeeeffhhiiiimmooorsssssstttttttwww"
result = binarySearch(string)
console.log(result)

// how to consider the worse case scenario in both functions
// the same in both as both need to keep guessing till the letter is not in the string

// how to calculate the cost of the size of input
// when size of input increases drastically, the binary search guesses increases slowly but the first method would take more
// what is big O?
// we only look to the term with the largest exponent, only consider the worse case scenario, ignore coefficients & small terms
// Big ϴ vs Big O?
// why ignore small terms and coefficients? we only concerns the cost when n reaches infinity


// technique to calculate largest exponent

// n^2
function nSquared(string, letter){
	let matches;
	for(let i = 0; i < string.length; i++){ // loop 1
		for(let i = 0; i < string.length; i++){ // loop 2
			//...
		}
	}

}

// n^3
function nCubed(string, letter){
	let matches;
	for(let i = 0; i < string.length; i++){ // loop 1
		for(let i = 0; i < string.length; i++){ // loop 2
			for(let i = 0; i < string.length; i++){ // loop 3
				// ...
			}
		}
	}
}

// only consider nested loops / loops iterations are proportional to n 

// recursive functions, what are they?
// functions call themselves

function sayDownFrom(n){
	console.log(n)
	if(n > 1){
		sayDownFrom(n -1) // recursive call
	} else {
		return true // base case
	}
}

console.log(sayDownFrom(10))

// why and when to use recursive functions?
// when I think recursively for solutions
// to understand some pupolar algorithms

function sumUpTo(n){
	if(n > 1){
		sumUpTo(n - 1) + n
	} else {
		return 1
	}
}

sumUpTo(5)
// 1 + 2 + 3+ 4 + 5

// how javascript interpret and execute this function?
// 1. break down into recursive calls sumUpTo(4) -> sumUpTo(3) -> sumUpTo(2) ...
// 2. keep going and evaluate each recursive call till it reaches the base case
// 3. once base case is resolved
// 4. it begins to resolve sumUpTo(2) -> sumUpTo(3) ...
// ** no recursive calls can be evaluted till the base case provides a solution

// summary
// how to find recursive solution to a problem?
// how javascript evaluates a recursive solution?
