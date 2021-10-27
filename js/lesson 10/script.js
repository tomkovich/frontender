const tools = ["rock", "paper", "scissors"];

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const userAnswer = prompt("Rock, paper or scissors?"); // NULL
const randomIndex = getRandomNumber(0, 2);
const computerAnswer = tools[randomIndex];

// 0, false, null, undefined, '' --- falsy

console.log(`User answer is ${userAnswer}`);
console.log(`computerAnswer answer is ${computerAnswer}`);

const startGame = (userAnswer, computerAnswer) => {
  userAnswer = userAnswer.toLowerCase();
  if (!userAnswer || !tools.includes(userAnswer)) return "Bad answer!";

  let res = "";

  const isDraw = userAnswer === computerAnswer;
  const isUserWin =
    (userAnswer === "rock" && computerAnswer === "scissors") ||
    (userAnswer === "paper" && computerAnswer === "rock") ||
    (userAnswer === "scissors" && computerAnswer === "paper");

  if (isDraw) res = "It's draw";
  else if (isUserWin) res = "You won";
  else res = "You lose";

  return res;
};

const result = startGame(userAnswer, computerAnswer);
alert(result);
