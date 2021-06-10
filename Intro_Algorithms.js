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

stringIncludes("banana", "a")

// time complexity
// best case scenario (complexity) - the most efficient
// average case scenario (complexity) - calculate the average of input
// worst case scenario (complexity) - given an input, the algorithm takes as long as it needs
// why choose worse case when considering the performance of a function?
// - best case: already efficient, no need to optimize
// - average case: likely to optimize with wrong average
// - worst case: execute without looking at the data

// Big O approximation
