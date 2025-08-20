/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  const arr = [5,2,7,3,8,1,6] //4
*/

function findMissingNumber(numbers) {
  const n = numbers.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = numbers.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;   
}

export { findMissingNumber };
