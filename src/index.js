import readlineSync from 'readline-sync';

const askName = () => {
  const userName = readlineSync.question('May I have your name?', {
    defaultInput: 'Mr. Incognito',
  });
  console.log(`Hello, ${userName}!`);
};

export default askName;
