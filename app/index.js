// console.log("Hello World! (From Webpack) with webpack-dev-server");

// ==================== Variabel Scoping with let

// var a = 'Hello';
// console.log(a);

let a = 'Hello';
// console.log(a);

// dengan menggunakan let maka variabel yang diambil hanya dalam scope tanda kurung kurawal saja
{
    let a = 'goodbye';
    // console.log('a inside scope', a);
}

{
    let salary = 90000;
}
// Ini akan error karena variabellnya tidak akan terpanggil
// console.log(salary);