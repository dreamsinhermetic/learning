const random = require('random')

//Generating an int array with both random size and its elements

let randomArray = [];

for (let i = 1; i < random.int(1, 100000000); ++i) {
  randomArray.push(random.int(1, 100000000));
}

console.log(randomArray)

// Defining the function that will swap two elements

function swap(array, leftElement, rightElement) {
  let temp = array[leftElement]
  array[leftElement] = array[rightElement]
  array[rightElement] = temp
}

// Defining the function which would be the bubble sort algoritm realizaton

function bubbleSorter(array) {
  const len = array.length
  let swapped, i

  do {
    swapped = false
    for ( i = 0; i < len - 1; ++i) {
      if (array[i] > array[i+1]) {
        swap(array, i, i+1)
        swapped = true   //The statement flip-flops unless the left index
      }                 //of an array isn't bigger then right one.
    }                  //That allows the iteration to continue while the
  } while (swapped)   //array isn't sorted
  
  return array
}

let sortedArray = bubbleSorter(randomArray)

console.log(sortedArray)
