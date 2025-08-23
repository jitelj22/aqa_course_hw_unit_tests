/*
  Создайте функцию, принимающую число n, которая при каждом вызове будет
  генерировать случайное число [1 - n] включительно. 
  Условие - каждый следующий вызов должен давать новое число (не встречавшееся в прошлых вызовах). 
  И так пока не переберутся все n чисел. На n + 1 вызов и
  далее функция должна возвращать 'All numbers were received'. 
  Задачу решить через замыкания
  Например n = 5, функция выведет 5 чисел 1-5, а после будет выводить сугубо 'All numbers were received'

  Рекоммендации:
   - Для генерации числа в границах воспользуйтесь методом:
      function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }

*/

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function uniqueRandomGenerator(n) {
  const pool = Array.from({ length: n }, (_el, i) => i + 1); 
  
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(getRandomArbitrary(0, i + 1)); 
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  let i = 0; 

  return function () {
    const result = 'All numbers were received';
    if (i >= pool.length) return result ;
    return pool[i++];
  };
}

let uniqueRandom = uniqueRandomGenerator(5);
Array.from({ length: 7 }, () => console.log(uniqueRandom()));


export { uniqueRandomGenerator };
