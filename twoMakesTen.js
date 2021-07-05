//1. Make a Function for Two Makes Ten 

// function isSumTen ✅
// given 2 numbers ✅
// add them together ✅
// conditional statement - if sum === 10 => true  ;  else false ✅

function isSumTen(a , b) {
  const sum = a + b
  if(sum === 10){
      return true
  } else { return false }
}

const num1 = 6
const num2 = 4

console.log(isSumTen(num1 , num2))


// *** or if you want to write the " if - Else" statement as a ternary. You can write it as:
// const result = (sum === 10) ? true : false
// return result
