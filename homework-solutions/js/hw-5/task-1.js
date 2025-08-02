/**
 * Сложить строку с четными числами от 10 до 0, разделенными `-` в переменную evenNumbersResult.
 * Переменная для результата `evenNumbersResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: '10-8-6-4-2-0'
 */

let evenNumbersResult = '';
for (let i = 10; i >= 0; i -= 2) {
  evenNumbersResult += i + (i > 0 ? '-' : '');
}


/**
 * Создать строку из 5 строк с увеличивающимся количеством смайликов ":)".
 * Переменная для результата `smilePatternResult` уже создана и содержит пустую строку.
 * Ожидаемый результат:
 * :)
 * :):)
 * :):):)
 * :):):):)
 * :):):):):)
 */

let smilePatternResult = '';

for (let i=1; i<=5; i++) {
    smilePatternResult += ":)".repeat(i) + "\n";
}
smilePatternResult = smilePatternResult.trimEnd();

/**
 * Заменить все пробелы в переменной text на "1".
 * Переменная для результата `replaceSpacesWithOneResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: 'Hello!1I1am1a1JS1student!'
 */

const text = 'Hello! I am a JS student!';
let replaceSpacesWithOneResult = '';

for (let i = 0; i < (text.length); i++) {
  if (text[i] === ' ') {
    replaceSpacesWithOneResult += '1';
  } else {
    replaceSpacesWithOneResult += text[i];
  }
}

export { evenNumbersResult, smilePatternResult, replaceSpacesWithOneResult };
