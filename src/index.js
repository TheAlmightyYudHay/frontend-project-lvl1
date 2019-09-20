import readlineSync from 'readline-sync';

const scoreToWin = 3;

const askName = () => readlineSync.question('May I have your name?', { defaultInput: 'Mr. Incognito' });

const greeting = (name) => console.log(`Hello, ${name}!\n`);

// Get some random number from 1 to 100;
const getRandomNumber = () => Math.floor(1 + Math.random() * 100);

// Check is number even;
const isEven = (n) => (n % 2 === 0 ? 'yes' : 'no');

const askEven = (score) => {
  if (score === scoreToWin) return true;
  const currentNumber = getRandomNumber();
  const correctAnswer = isEven(currentNumber);
  console.log(`Question: ${currentNumber}`);
  const answer = readlineSync.question('Your answer: ', {
    defaultInput: 'wrong!',
  });
  if (correctAnswer === answer.toLowerCase()) {
    console.log('Correct!');
    return askEven(score + 1);
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export {
  askName, askEven, greeting,
};
