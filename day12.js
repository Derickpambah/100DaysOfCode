/**
 * Day 12 of 100
 *  - Dealt with recursion (replace loops with recursion)
 *  - Tackled the 'Profile Lookup' quiz in the freecodecamp JS course
 */

function multiplyArr(arr, n){
    if (n <= 0){
        return 0
    }
    return multiplyArr(arr, n - 1) + arr[n-1]
    
}

console.log(multiplyArr([2,3,4,5], 3))