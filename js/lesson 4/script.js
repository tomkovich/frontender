// WHILE
let count = 1;
while(count < 8) {
    console.log('У кошки осталось жизней: ' + count)
    count++;
}

// DO ... WHILE
let amount = 10;
do {
  console.log("Количество ваших денег " + amount);
  amount -= 2;
} while(amount > 0)


const numbers = [1, 3, 5, 8, 10, 12, 24, 16, 45, 99, 321]

// когда на 5 - foo
// когда на 3 - bar
// когда у нас на 3 и 5 - foobar

// FOR
// for(let index = 0; index < numbers.length; index++) {
//     if(numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
//         console.log('foobar', numbers[index])
//     } else if(numbers[index] % 5 === 0) {
//         console.log('foo', numbers[index])
//     } else if(numbers[index] % 3 === 0) {
//         console.log('bar', numbers[index])
//     }
// }

// LOOP BREAK
// for(let i = 1; i < 15; i++) {
//     console.log('Текущий этаж ' + i)
//     if(i >= 12) break;
// }

// CONTINUE
// for(let i = 1; i < 15; i++) {
//     if(i === 12) continue;
//     console.log('Текущий этаж ' + i)
// }


// Выводить сообщение, пока пользователь не введет число больше 100 (prompt)
// Вывести среднеарифмитческое значение массива чисел





const countries = {
    USA: "Washington",
    RUSSIA: "Moscow",
    GERMANY: "Berlin"
}

for(const country in countries) {
    console.log('Capital of ' + country + ' is ' + countries[country])
}