// objective
// develop procedure for problem solving and coding algorithms
// problem: write a program to solve an array
// do not rely on memorization - not reliable
// good developr solve problems by process not intelligence

// process for solving problems?
// 1. solving this problem
// give myself an example
// wacth how my brain solve the problem
// think how my brain solve the problem
// 2. Coding in small steps
// slow down and translate the process into words
// code in small steps
// okay to have functions to write later
// write one piece of code and test if it is working

// 1. how brain solve this problem
// contiune find min of array and remove elements and store them in a new one till the current array is empty
// 2. coding in small steps

function minAndRemove(array) {
	let min = array[0];
	let minIndex = 0;
	for (let i = 0; i < array.length; i++) {
		let currentElement = array[i];
		if (array[i] < min) {
			min = array[i];
			minIndex = i;
		}
	}
	array.splice(minIndex, 1);
	return min;
}

function selectionSort(array) {
	let newMin;
	let sorted = [];
	while (array.length != 0) {
		newMin = minAndRemove(array);
		sorted.push(newMin);
	}
	return sorted;
}

// what is the big O? or the cost of this solution?
// finding min or unsorted array is n, find min n times, thus, cost is:
// n^2
// why not (1/2)n?
// big O does not consider multipliers