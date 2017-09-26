// console.log("Hello World! (From Webpack) with webpack-dev-server");

// ==================== Variabel Scoping with let ==========================

// var a = 'Hello';
// console.log(a);

// let a = 'Hello';
// console.log(a);

// === dengan menggunakan let maka variabel yang diambil hanya dalam scope tanda kurung kurawal saja
// {
    // let a = 'goodbye';
    // console.log('a inside scope', a);
// }

// {
//     let salary = 90000;
// }
// Ini akan error karena variabellnya tidak akan terpanggil
// console.log(salary);


// ==================== Constanly scoping ==========================
// === Const itu konstanta nilai yg udah diisi pertama ga boleh diganti. Musti tetep itu sampe akhir program
// === Kata kunci const menyatakan variabel yang tidak dapat ditetapkan ulang.

// const a = 2;
// === Ini akan menimbulkan error
// a = 3 * 4;

// const array = [1, 2, 3];
// array.push(4);
// console.log(array);

// === Ini akan salah
// array = [3]

// ==================== Template literals/string ==========================

// var a = 'Hello';
// var b = 'World';
// var c = a + ' ' + b;

// console.log(c);

// === Ini bagian template string
// let d = `Hello ${b}`;
// console.log(d);


// ==================== Operating and Destructing ==========================

// === Understanding the spread operator ===
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator

// === Ini disebut spread karena '...a' mewakili 'let b'
// let a = [7,8,9];
// let b = [6, ...a, 10];

// console.log(b);

// function print(a,b,c) {
//     console.log(a, b, c);
// }

// let z = [1,4,3];
// print(z[0], z[1], z[2]);
// === es6 - Spreed
// print(...z);

// function print(...y){
//     console.log(y);
// }
// print(3,4,5,6,7);

// ====================  Array: Destructing Assignment ==========================

// let c = [100, 200];
// let a = c[0];
// let b = c[1];
// === Atau bisa juga
// let [a,b] = c;

// console.log(a,b);

// let Boys = ['Dani', 'Jabar', 'Didik'];
// let [sari, suci, annis] = Boys;

// console.log(sari, suci, annis);

// let x = [100, 200, 300, 400, 500, 600];
// let [y, ...z] = x;

// console.log(y, z);

// ==================== Object: Destructing Assignment  ==========================

// let wizard = {magical: true, power: 10};
// let magical = wizard.magical;
// let power = wizard.power;
// === Atau Bisa
// let { magical, power} = wizard;

// console.log(magical,power);

// ==== Contoh 2

// let magical = true;
// let power = 34;

// let ranger = { magical: false, power: 9};
// === Ini akan error bila berbarengan dengan let di atas.
// let {magical , power} = ranger;
// === Maka, harus seperti ini....
// ({magical, power} = ranger);

// console.log(magical, power);

// ===== Kesimpulan:

// Operator spread es6 menyebarkan isi array atau objek ke dalam beberapa variabel. Sintaksnya menggunakan tiga periode, sama seperti: ...
// Merestrukturisasi Assignment di es6 memungkinkan kita untuk mengambil data dari array atau objek menjadi variabel terpisah dan berbeda.
// Array Destructuring Assignment menetapkan beberapa variabel dari sebuah array. Misalnya, biarkan [a, b] = c, di mana nilai 'a' dan 'b' diberikan ke elemen masing-masing di 'c'.
// Object Destructuring Assignment memberikan beberapa variabel berupa sebuah objek. 
// Misalnya, misalkan {a, b} = c, di mana nilai 'a' dan 'b' diberikan ke properti 'a' dan 'b' di 'c'.
// Secara keseluruhan, tugas penyebaran dan operator dan perusakan akan mengurangi panjang kode JavaScript Anda secara signifikan. Terkadang, dengan menggunakan operator spread dan teknik penugasan restrukturisasi benar-benar terasa seperti coding magic!


// ==================== ES6 Functions and Methods  ==========================

// === Arrow Functions are anonymous.
// Anonymous functions usually don't have a named identifier
// function() {...} VS. ()=>{..}

// function blastoff() {
//     console.log('3.....2.....1.... Blastoff');
// }

// blastoff();

// setTimeout(function(){
//     console.log('3...2...1... blastoff');
// }, 1000);

// setTimeout(() => {
//     console.log('3...2...1... blastoff')
// }, 1000);

// const blastoff = () =>  {
//         console.log('3.....2.....1.... Blastoff');
//     }
// blastoff();

// ==================== Arrow functions and methods  ==========================

// Arrow functions do not bind thei own this

// This is an object that within the function scope, the function then bind keys and values to this object.
// This: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this'

// === this ini tidak akan terbaca di let print tapi akan terbaca di arrow print
// this.a = 25;

// let print = function(){
//     this.a = 50;
//     console.log('this a', this.a);
// }

// console.log(print());

// let arrowPrint = () => {
//     console.log('this.a in arrowPrint', this.a);
// }

// arrowPrint();

// === Keimpulan: Masih belum bisa thisnya ===

// ==================== Helping with the map method  ==========================

// let points = [10, 20, 30];

// === Contoh 1
// let addOne = function(element) {
//     return element + 1;
// }

// === Contoh 2
// let addOne = (element) => {
//     return element + 1;
// }

// === Contoh 3
// points = points.map(element => element + 1);

// points = points.map(addOne);

// console.log(points);

// ==================== Helping with the map method  ==========================

// === Contoh 1 
// let isPassing = (grade) => {
//     return grade >= 70;
// }

let scores = [90, 85, 67, 71, 70, 55, 92];

// === Contoh 2
let passing = scores.filter(element => element <= 70);
// let passing = scores.filter(isPassing);

console.log(passing);

// ===== Kesimpulan: 
// More helper methods...
// find() : returns a value in a array that passes a given test.
// forEach() : similar to map, call a function for each array element.
// reduce(), Some(), keys(), values(),....