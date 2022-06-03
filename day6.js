/**
 * Day 6 of 100
 *  - Advanced my prowess in SWITCH statements
 *  - Solved a pretty-involving card-counting problem
 *  - Built JavaScript objects
 *  - Accessing objects with Dot and Bracket notation, and variables
 *  - Adding, Updating, and Deleting properties from a JS object
 *  - Using objects for look ups
 *  - Testing objects for properties using "hasOwnProperty()" method
 *  - Manipulating complex objects
 */

function cardsCount(card){
    let count = 0;
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++
            break
        case 7:
        case 8:
        case 9:
            break
        case 10:
        case 'J':
        case 'K':
        case 'Q':
        case 'A':
            count--
            break
    }
    if (count > 0){
        return count + " Bet";
    }
    else {
        return count + " Hold";
    }
}
console.log(cardsCount(10))

// Object
const myDog = {
    "name": "Miles",
    "color": "white",
    "age": 10,
    "legs": 4
}
console.log(myDog.name)
console.log(myDog.color)
console.log(myDog.age)
console.log(myDog.legs)