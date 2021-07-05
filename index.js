const hotDogStack = ['🌭', '🌭', '🌭', '🌭', '🌭', '🌭']
console.log(hotDogStack.length)

// build a function that uses a callback

function getHotDog(doTheNextThing) {
    if (!hotDogStack.length) {
        // ! = have no hot dogs
        throw 'No more hotdogs!'
    }
    const hotdog = hotDogStack.pop()
    // return hotdog
    doTheNextThing(hotdog)
}



// call a function with a callback

try {
    getHotDog((hotdog) => console.log('I ate the', hotdog))
}
catch (error) {
    console.error(error)
}