// Create a function to add the items of an array together

// make an array: let array = [5, 10, 15, 20, 25]
// function addArrayItems
// let sum = 0 (sum variable)
// loop through each item in array (for loop)

// sum = sum + array[i] -> look below to see the definition of how this works

// sum = sum(0) + 5
// sum = sum + 10
// sum = sum + 15
// sum = sum + 20
// sum = sum + 25 

// return sum



function addArrayItems(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i]
    }
    return sum
}

const numGroup = [5, 10, 15, 20, 25]
console.log(addArrayItems(numGroup))
