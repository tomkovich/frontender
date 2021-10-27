// varibale names syntax
let text = "это только мой мир!"; // string 
text = 53
let birthday = 3.14; // number
let Birthday = 16;
let $dollar = 2.9;
let _lodash = 'lodash';
let name1 = 'Natasha';
let first_name = "Yana";
let last_name = "Tomkovich";

const isAwesomeLesson = true; // boolean
const fullName = null; // null
let car; // undefined

const birthdayToString = birthday.toString()

// console.log(birthdayToString.length)
// console.log(Math.floor($dollar))

// примитивные и объект
const dataTypes = 'string, number, boolean, null, undefined, symbol, object'

// old syntax
function strong(m, a) {
    return m + a;
}

// new syntax
const sing = (text, symbol) => text + symbol
// console.log(sing('это только мой мир', '?!'))


                // 0       // 1        // 2
const contries = ['russia', 'germany', 'usa']; // array of strings
const years = [1997, 1998, 1999]; // array of numbers
// const staff = [0, 'pizza', false, null] // array
const people = [
    {
        firstName: "yana",
        lastName: 'tomkovich',
        age: 24
    }, 
    {
        firstName: "Vasya",
        lastName: 'Pupkin',
        age: 12
    }
]

// console.log(cat['name']);




let fatherName = "Mike"
let anotherFatherName = fatherName
fatherName = fatherName + ' Michael'

// console.log(fatherName)
// console.log(anotherFatherName)


let Cat = {
    name: "Koshka",
    age: 2.456779,
    actions: ["jumping", "eating"]
}

let Dog = Cat
Cat.age = 4

// console.log(Cat)
// console.log(Dog.age.someMethod()) // 2.45
// console.log(Dog.actions.someMethod('sleeping')) // ["jumping", "eating", "sleeping"]



// console.log(strong(10, 4));
// console.log(strong(99, 2));



// Создвть объект со всеми типами данных (8)
// 1. В консоль вывести свойство со строкой все большики буквами
// 2. В консль вывести свойство с числом с 2 точками после запятой
// 3. В консоль вывести массив с еще одним знаачением







const kotik = {
    color: 'red',
    age: 4,
    name: 'Belka',
    say: function(message) {
        return this.name + " says " + message
    }
}

console.log(kotik.say('kotik'))

const counter = (dollar, rub) => rub * dollar
console.log(counter(100, 2.65))











