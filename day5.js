/**
 * Day 5 of 100
 *  - Handled switch statements in JS
 *  - Adding default option in switch statements
 */

let answer = "";
function maleTypes(values){
    switch(values){
        case 1:
            answer = "Alpha";
            break;
        case 2:
            answer = "Beta";
            break;
        case 3:
            answer = "Gamma";
            break;
        default:
            answer = "Delta";
    }
    return answer
}
console.log(maleTypes(1))