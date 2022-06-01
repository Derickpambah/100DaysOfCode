/**
 * Day 4 of 100
 *  - Handled comparison with Logical AND (&&) and OR operators (||)
 *  - Worked on ELSE and ELSE IF statements
 */

const names = ["Charles", "Vincent", "Jack", "Welch"];

function reward(score){
    if (score <= 10 || score <=40){
        return "Poor Work!"
    }
    else if (score > 50 && score <= 60) {
        return "Commendable work!"
    }
    else{
        return "Excellent Performance!"
    }
}
console.log(reward(80))