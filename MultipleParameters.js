// You are given a program that takes Team 1 and Team 2 football teams goals as inputs accordingly.
// Complete the function to take Team 1 and Team 2 goals as arguments and output the final result of the match:
// - "Team 1 won", if Team 1's score is higher than Team 2's score
// - "Team 2 won", if Team 2's score is higher than Team 1's score
// - "Draw", if the scores are equal

function main() {
    var goalsTeam1 = prompt('How many did Team 1 get?');
    var goalsTeam2 = prompt('How many did Team 2 get?');
    // function call
    finalResult(goalsTeam1, goalsTeam2)
    
}
//complete the function, no parametars added
function finalResult(goalsTeam1, goalsTeam2) {
    //my code
    if (goalsTeam1 > goalsTeam2) {
        console.log('Team 1 won')
    }
    else if (goalsTeam1 < goalsTeam2) {
        console.log('Team 2 won')
    }
    else {
        console.log('Draw')
    }
};
main()