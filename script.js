
var playAgain = true;
var options = ['P', 'R', 'S'];
var userAnswer;
var computerAnswer;
var userScore = 0;
var computerScore = 0;
var ties = 0;

while(playAgain){
    alert('Welcome to the Rock-Paper-Scissors game!')
    //  Todo: User selects R, P, or S;
    userAnswer = prompt('Please enter either R, P, or S')
    if (!userAnswer) {
        break;
      }
    userAnswer = userAnswer.toUpperCase();
    //  Todo: Computer responds with the answer;
    computerAnswer = options[parseInt(Math.random() * options.length)];
    alert('Computer selects - ' + computerAnswer);
    //  Winner is determined;
    if (userAnswer === computerAnswer) {
        ties++
        alert('Its a draw!' + "\n" + 'Your score - ' + userScore + "\n" + 'Computer score - ' + computerScore + '\n' + 'Ties - ' + ties)
    } else if(userAnswer === 'P' && computerAnswer === 'R' || userAnswer === 'S' && computerAnswer === 'P' || userAnswer === 'R' && computerAnswer === 'S') {
        userScore++
        alert('You won! ' + "\n" + 'Your score - ' + userScore + "\n" + 'Computer score - ' + computerScore + '\n' + 'Ties - ' + ties)
    } else {
        computerScore++
        alert('You lost! ' + "\n" + 'Your score - ' + userScore + "\n" + 'Computer score - ' + computerScore + '\n' + 'Ties - ' + ties)
    }
    //  Computer asks if user wants to play again;
    playAgain = window.confirm("Play again?");
    if (!playAgain) {
        break;
      }
}