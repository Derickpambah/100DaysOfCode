/**
 * Day 12 of 100
 *  - Dealt with recursion (replace loops with recursion)
 *  - Tackled the 'Profile Lookup' quiz in the freecodecamp JS course
 */

function sumArr(arr, n){
    if (n <= 0){
        return 0
    }
    return sumArr(arr, n - 1) + arr[n-1]
    
}

console.log(sumArr([2,3,4,5], 3))