/**
 * Day 4 of 100
 *  - Handled comparison with Logical AND (&&) and OR operators (||)
 *  - Worked on ELSE and ELSE IF statements
 */

const names = ["Charles", "Vincent", "Jack", "Welch"];

function reward(score){
    if (score >= 20 && score <=40){
        return "You lose!"
    }
    else if (score >40 && score <= 60) {
        return "Good work!"
    }
    else{
        return "Excellent Performance!"
    }
}