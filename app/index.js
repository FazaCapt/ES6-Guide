// console.log("Hello World! (From Webpack) with webpack-dev-server");

// ==================== Variabel Scoping with let ==========================

// var a = 'Hello';
// console.log(a);

let a = 'Hello';
// console.log(a);

// === dengan menggunakan let maka variabel yang diambil hanya dalam scope tanda kurung kurawal saja
{
    let a = 'goodbye';
    // console.log('a inside scope', a);
}

{
    let salary = 90000;
}
// Ini akan error karena variabellnya tidak akan terpanggil
// console.log(salary);


// ==================== Constanly scoping ==========================
// === Const itu konstanta nilai yg udah diisi pertama ga boleh diganti. Musti tetep itu sampe akhir program

// const a = 2;
// === Ini akan menimbulkan error
// a = 3 * 4;

const array = [1, 2, 3];
array.push(4);
// console.log(array);

// === Ini akan salah
// array = [3]