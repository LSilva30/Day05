// Create a Function that tells us if a fraction greater than one

// function isGreaterThanOne ✅
//numerator and denominator ✅
// result for numerator / denominator ✅
// if - else : if result is <= 1  => return false  / else  => return true ✅


function isGreaterThanOne(a, b) {
    const result = a / b
    if (result > 1) {
        return true
    } else {
        return false
    }
}

const num = 5
const den = 4
console.log(isGreaterThanOne(num, den))
