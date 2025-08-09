/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') return false
  
  const clean_word = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed_word = clean_word.split('').reverse().join('');
  return clean_word === reversed_word;

}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string' || sentence === "") return [];

  const words = sentence.trim().split(/\s+/);
  let max_lenght = 0;
  const long_words = [];

  for (const word of words) {
    if (word.length > max_lenght) {
      max_lenght = word.length;
      long_words.length = 0; // Clear the array
      long_words.push(word);
    } else if (word.length === max_lenght) {
      long_words.push(word);
    } else if (word.length === 0 ) {
      return []; // Return empty array if there are no valid words
    }
  }

  return long_words.length > 0 ? long_words : [];
}

export { isPalindrom, findLongestWords };
