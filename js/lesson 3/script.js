const Petya = {
    money: 50,
    ticket: false,
    name: "Петя"
}

const Vasya = {
    money: 7,
    ticket: true,
    name: "Вася"
}

const ticketPrice = 49;
const petya = 'Петя'

// Petya.money > ticketPrice
if(Petya.money > ticketPrice && Petya.name == petya) { /// true and true
    console.log('Проходите')
} else {
    console.log('Вход запрещен, иди гуляй, ' + Petya.name)
}

if(Vasya.money > ticketPrice || Vasya.ticket) { // false and true
    console.log('Проходите')
} else {
    console.log('Вход запрещен, иди гуляй, ' + Vasya.name)
}


const answer = prompt("Сколько будет 2 + 2?");

if(answer != 4) {
    console.log('Маму в школу!!!')
} else {
    console.log('Молодец!')
}

if(answer * 1 !== 4) {
    console.log('Маму в школу!!!')
} else {
    console.log('Молодец!')
}

// != или == 
// !== и === сравниваем еще по типу данных 