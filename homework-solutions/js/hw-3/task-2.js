/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), 
и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/

let n = 3; 
let n1 = String(n)+String(n);
let n2 = String(n)+String(n)+String(n);
let result = Number(n) + Number(n1) + Number(n2);
console.log(result);