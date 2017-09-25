// console.log("Hello World! (From Webpack) with webpack-dev-server");

// ==================== Variabel Scoping with let ==========================

// var a = 'Hello';
// console.log(a);

// let a = 'Hello';
// console.log(a);

// === dengan menggunakan let maka variabel yang diambil hanya dalam scope tanda kurung kurawal saja
{
    // let a = 'goodbye';
    // console.log('a inside scope', a);
}

{
    let salary = 90000;
}
// Ini akan error karena variabellnya tidak akan terpanggil
// console.log(salary);


// ==================== Constanly scoping ==========================
// === Const itu konstanta nilai yg udah diisi pertama ga boleh diganti. Musti tetep itu sampe akhir program
// === Kata kunci const menyatakan variabel yang tidak dapat ditetapkan ulang.

// const a = 2;
// === Ini akan menimbulkan error
// a = 3 * 4;

const array = [1, 2, 3];
array.push(4);
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

function print(a,b,c) {
    console.log(a, b, c);
}

// let z = [1,4,3];
// print(z[0], z[1], z[2]);
// === es6 - Spreed
// print(...z);

function print(...y){
    console.log(y);
}
// print(3,4,5,6,7);

// ====================  Array: Destructing Assignment ==========================

let c = [100, 200];
// let a = c[0];
// let b = c[1];
// === Atau bisa juga
let [a,b] = c;

// console.log(a,b);

let Boys = ['Dani', 'Jabar', 'Didik'];
let [sari, suci, annis] = Boys;

// console.log(sari, suci, annis);

let x = [100, 200, 300, 400, 500, 600];
let [y, ...z] = x;

// console.log(y, z);

// ==================== Object: Destructing Assignment  ==========================

// let wizard = {magical: true, power: 10};
// let magical = wizard.magical;
// let power = wizard.power;
// === Atau Bisa
// let { magical, power} = wizard;

// console.log(magical,power);

// ==== Contoh 2

let magical = true;
let power = 34;

let ranger = { magical: false, power: 9};
// === Ini akan error bila berbarengan dengan let di atas.
// let {magical , power} = ranger;
// === Maka, harus seperti ini....
({magical, power} = ranger);

console.log(magical, power);