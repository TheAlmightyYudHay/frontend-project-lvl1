import readlineSync from 'readline-sync';

const scoreToWin = 3;

/* Fabric function for games. Its take 2 functions:
 * first generate the round question and second one looking for correct answer.
 */

export default (questionItem) => {
  const gameRound = (score) => {
    // return true if player won
    if (score === scoreToWin) return true;
    const currentQuestionItem = questionItem.getQuestionItem();
    const correctAnswer = `${questionItem.getAnswer(currentQuestionItem)}`;
    console.log(`Question: ${questionItem.itemToString(currentQuestionItem)}`);
    const answer = readlineSync.question('Your answer: ', {
      defaultInput: 'wrong!',
    });
    if (correctAnswer === answer) {
      console.log('Correct!');
      return gameRound(score + 1);
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    // return false if player lose
    return false;
  };
  return gameRound;
};
