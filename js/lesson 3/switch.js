const points = 92; // из 100

// 90 и 100 - получил стипендию
// 50 и 90 - сдал, но не получил стипендию
// 50 - пересдача

// beginner
if(points > 90 && points <= 100) {
    console.log('получил стипендию')
} else if(points > 50 && points < 90) {
    console.log('сдал, но не получил стипендию')
} else if(points < 50) {
    console.log('пересдача')
} else {
    console.log('Ваше число неверное!')
}


if(points < 50) {
    console.log('пересдача')
} else if(points < 90) {
    console.log('сдал, но не получил стипендию')
} else if(points <= 100) {
    console.log('получил стипендию')
} else {
    console.log('Ваше число неверное!')
}

const answer = prompt('Какая погода сегодня?')

const rain = 'rain'
const snow = 'snow'
const sunny = 'sunny'
const cloudly = 'cloudly'

switch(answer) {
    case rain: 
        console.log('Возьми зонт!')
        break;

    case snow: 
        console.log('Пора кататься на санках! (или лыжах)')
        break;

    case sunny: 
        console.log('Не забудь крем от загара!')
        break;
    
    case cloudly: 
        console.log('Сегодня надень теплую куртку')
        break;

    default:
        console.log('Лучше останься дома, непонятно что за окном!')
}

// const weight = prompt('What is your weight?')
// const height = 154
// const IMB = 18
// 1. вы спрашиваете сколько человек весит
// 2. рост человека
// 3. посчитать ИМТ


// if(IMB < 16) {
//     console.log('У тебядефицит массы')
// } else if()



const yourCarSped = prompt('What is your car speed?')

const speed = 400;

const car = yourCarSped > speed ? "У тебя крутая тачка!" : "Твоя тачка так себе, друг"
console.log(car)

const isLoaded = false;