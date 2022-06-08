/**
 * Day 11 of 100
 *  - Got deeper into JS loops: For loop | Do-While loop
 *  - Handled iteration | nesting | reverse count
 */

// For loop
const myArray = [];
for (let i = 0; i < 5; i++){
    console.log(myArray.push(i));
}

// do...while loop
const ourArr = [];
let i = 8;
do{
    console.log(i);
    i++;
} while(i < 8)

// Nested for loop
function arrProduct(arr){
    let product = 1;
    for(let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    return product;
}
console.log(arrProduct([[3,4],[5,6],[7,8,9]]));
