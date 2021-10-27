let degrees = 47;
let count = "2";
const firstName = "Yana";
const isAwesome = false; // true - 1, false = 0
const nullDataType = null; // null - 0
const unDataType = undefined;

const subtr = degrees - count;
const multiplier = degrees * count;
const division = degrees / count;
const conc = degrees + -count;
const pow = count ** 3;
const del = degrees % count;

const result = unDataType + degrees;

// console.log("subtr", subtr);
// console.log("multiplier", multiplier);
// console.log("division", division);
// console.log("conc", conc);
// console.log("pow", pow);
// console.log("del", del);
// console.log(result);

degrees *= 3;

console.log("increment", degrees);
console.log("decrement", --count);

//////////////////////////////////////////

// сколько бутылок пива вы выпили? - 10
// одна бутылка пива стоит - 4.4$
// чаевые - 5%

const userAnswer = prompt("Сколько бутылок пива вы выпили?");

const payment = (amount, price, tips) => {
  const totalPrice = amount * price;
  const totalTips = (totalPrice * tips) / 100;
  const totalPayment = (totalPrice + totalTips).toFixed(2);
  return "Вы должны заплатить $" + totalPayment;
};

console.log(payment(userAnswer, 4.4, 5)); // Вы должны заплатить 105$
