// Create a function that returs the absolute value of a number

function absoluteVal(value) {
    if(value < 0) {
        return value * -1
    } else {
        return value
    }
}

const num = 5
console.log(absoluteVal(num))