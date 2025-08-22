/*
Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее:
  1. forEach - присвойте массив в котором все числа делящиеся без остатка на 3 // [30]
  2. map - присвойте массив в котором из каждого элемента изначального массива вычли длину изначального массива 
     // [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]
  3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
     // [8, 30, 85, 95, 94]
  4. find - присвойте элемент, равный своему индексу //2
  5. sort - отсортируйте массив по возрастанию, не изменив изначальный 
     // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]
  6. reduce - получите сумму всех чисел массива //466
  7. some - проверьте, есть ли в массиве элементы больше 90 //true
  8. every - проверьте, что все элементы массива двухзначные //false
*/
const numbers = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];


//1
let forEach = [];
numbers.forEach(num => num % 3 === 0 && forEach.push(num))
console.log(forEach);

//2
let map;
function mapArray(arr) {
  return arr.map((num) => num - arr.length);
}
map = mapArray(numbers);
console.log(map);

//3
let filter = numbers.filter((num, index) => {
  return num > numbers[index - 1];
});
//4
let find;
function findNumber(numbers) {
  return numbers.find((num, index) => num === index);
}
find = findNumber(numbers);
console.log(find);

//5
let sort = [...numbers].sort((a, b) => a - b);
  
console.log(sort);

//6
let reduce;
function sumNumbers(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
} 
reduce = sumNumbers(numbers);
console.log(reduce);

//7
let some;
function hasGreaterThan90(numbers) {
  return numbers.some((num) => num > 90);
}
some = hasGreaterThan90(numbers);
console.log(some);

//8
let every;
function areAllTwoDigit(numbers) {
  return numbers.every((num) => num >= 10 && num < 100);
}  
every = areAllTwoDigit(numbers);
console.log(every);

export { forEach, map, filter, find, sort, reduce, some, every };
