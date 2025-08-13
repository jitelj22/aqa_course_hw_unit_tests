/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/

function digitalRoot(num) {
  if (typeof num !== 'number' || num < 0) return 'Invalid input';
  if (num <= 9) return num;

  const sum = num
    .toString()
    .split('')
    .map(Number)
    .reduce((el, digit) => el + Number(digit), 0);

  // Рекурсивный вызов
  return digitalRoot(sum);
}

export { digitalRoot };

