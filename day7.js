/**
 * Day 7 of 100
 *  - Learnt how to access nested objects
 *  - Accessing nested arrays
 *  - Went through the record collection freecode camp challenge
 */

const myObj = [{
    'pet':{
        'color': 'brown',
        'name': 'frisbee'
    },
    'food':{
        'morning': 'pellets',
        'evening': 'grains'
    }
}]

console.log(myObj[0].pet['color'])