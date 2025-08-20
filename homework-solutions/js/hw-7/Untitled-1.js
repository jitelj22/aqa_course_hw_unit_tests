//Начальные данные

const numbers = [5, -2, 8, -7, 3, 0, 12, -4, 9, 6, -5, 11];
const words = ['apple', 'banana', 'kiwi', 'Avocado', 'grape', 'pear', 'melon', 'plum', 'Mango'];
const products = [
  ['bread', 12],
  ['milk', 10.5],
  ['cheese', 5],
  ['apple', 3.8],
  ['banana', 4.2],
  ['chocolate', 3],
  ['coffee', 4.5],
  ['butter', 2.5],
  ['tea', 2],
  ['yogurt', 1.8]
];

/*
⸻

Задачи и баллы

Лайт

1️⃣ getPosNegArrays — 1 балл
Напишите функцию, которая вернёт массив из двух массивов: первый — все положительные числа, второй — все отрицательные (ноль игнорировать).
Бонус (+1 балл): решение в одно действие (например, в один reduce).

2️⃣ sumPosNeg — 1 балл
Напишите функцию, которая вернёт массив из двух чисел: сумма положительных и сумма отрицательных.
Бонус (+1 балл): использовать результат из задачи 1.

⸻

Мидл

3️⃣ getUniqueSortedLengths — 2 балла
Вернуть массив уникальных длин слов из words, отсортированных по возрастанию.
Бонус (+1 балл): без использования Set.

4️⃣ sumWordsLengthWithoutA — 2 балла
Вернуть сумму длин всех слов из words, не содержащих букву “a” или “A”.
Бонус (+1 балл): без регулярных выражений.

5️⃣ secondLargest — 2 балла
Вернуть второе по величине число из массива numbers.
Бонус (+1 балл): без сортировки.

6️⃣ getWordsWith — 2 балла
Функция принимает array, subString, length. Вернуть все слова из array, которые содержат subString и имеют длину больше или равную length.
Бонус (+1 балл): сделать без учёта регистра.

⸻

Хард

7️⃣ pipelineNumbers — 3 балла
Создайте массив функций, каждая из которых принимает число и возвращает изменённое значение.
Например:
 • добавить 10
 • умножить на 2
 • взять остаток от деления на 7

Примените этот пайплайн к каждому элементу массива numbers, вернув новый массив.
Бонус (+1 балл): без цикла for.

⸻

Босс

8️⃣ maxProductsListByNames (супер-босс) — 5 баллов
Считаем, что положительные числа из numbers — доходы, отрицательные — расходы. После оплаты всех расходов вычислить остаток и вернуть набор названий товаров из products, который можно купить, начиная с самых дешёвых, чтобы общее количество было максимально возможным.
*/


//1
function getPosNegArrays(numbers){
    const positive = [];
    const negative = [];
    for (number of numbers) {
        if (number > 0) {
            positive.push(number);
        } else if (number < 0) {
            negative.push(number);
        }
    }
    return [positive, negative];
}

console.log('task 1 ', getPosNegArrays(numbers)); 

//2
function sumPositiveAndNegative(numbers) {
    if (!Array.isArray(numbers)) {
        return 'Invalid input';
    } 

    const [positives, negatives] = getPosNegArrays(numbers);
    const sumPositives = positives.reduce((sum, num) => sum + num, 0);
    const sumNegatives = negatives.reduce((sum, num) => sum + num, 0);

    return [sumPositives, sumNegatives];
}    


console .log('task 2 ' ,sumPositiveAndNegative([5, -2, 8, -7, 3, 0, 12, -4, 9, 6, -5, 11])); // [43, -18]

//3
function getUniqueSortedLengths(words) {
    if (!Array.isArray(words)) {
        return [];
    }
    
    const lengths = words.map(word => word.length);
    const uniqueLengths = [...new Set(lengths)];
    uniqueLengths.sort((a, b) => a - b);
    
    return uniqueLengths;
}

console.log('task 3 ' ,getUniqueSortedLengths(['apple', 'banana', 'kiwi', 'Avocado', 'grape', 'pear', 'melon', 'plum', 'Mango'])); 

//4
function sumWordsLengthWithoutA(words) {
  let sum = 0;
  for (const word of words) {
    let hasA = false;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === 'a' || word[i] === 'A') {
        hasA = true;
      }
    }
    if (!hasA) {
      sum += word.length;
    }
  }
  return sum;
}

console.log('task 4 ' , sumWordsLengthWithoutA(['apple', 'banana', 'kiwi', 'Avocado', 'grape', 'pear', 'melon', 'plum', 'Mango'])); 

//5
function secondLargest(numbers) {
    if (!Array.isArray(numbers) || numbers.length < 2) {
        return [];
    }
    
    let first = -Infinity;
    let second = -Infinity;

    for (const number of numbers) {
        if (number > first) {
            second = first;
            first = number;
        } else if (number > second && number < first) {
            second = number;
        }
    }           
    return second === -Infinity ? [] : second; 

}   

console.log('task 5 ',secondLargest());
;

//6
function getWordsWith(array, subString, length) {
    const result = [];
    for (element of array) {
        if (element.length >= length && element.toLowerCase().includes(subString.toLowerCase())) {
            result.push(element);
        }
    }
    return result;
}

console.log('task 6 ' ,getWordsWith(words, 'A', 3));

//7
function pipelineNumbers(numbers) { 
    const pipeline = [
        (num) => num + 10,
        (num) => num * 2,
        (num) => num % 7
    ];

    return numbers.map(num => {
        return pipeline.reduce((acc, fn) => fn(acc), num);
    });
}
console.log('task 7 ', pipelineNumbers(numbers));   

//8

function maxProductsListByNames(numbers, products) {    
    const positiveSum = numbers.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
    const sortedProducts = products.sort((a, b) => a[1] - b[1]);
    
    const result = [];
    let totalCost = 0;

    for (const [name, price] of sortedProducts) {
        if (totalCost + price <= positiveSum) {
            result.push(name);
            totalCost += price;
        } else {
            break;
        }
    }

    if (result.length === 0) {
        return 'No products can be bought';
    }
    if (totalCost > positiveSum) {
        return 'Not enough funds to buy any products';
    }
    if (totalCost === 0) {
        return 'No products can be bought';
    }
    if (result.length === 1) {
        return `You can buy only one product: ${result[0]}`;
    }

    if (result.length > 1) {
        return `You can buy the following products: ${result.join(', ')}`;
    }
    // Если не попадает ни в один из случа

    return result;
}

console.log('task 8 ', maxProductsListByNames(numbers, products)); 