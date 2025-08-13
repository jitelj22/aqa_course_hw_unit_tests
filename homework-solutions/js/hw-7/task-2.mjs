/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

const isPalindrom = (word) => {
  if (typeof word !== 'string') {
    return false;
  }

  const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedWord = cleanedWord.split('').reverse().join('');
  
  return cleanedWord === reversedWord;
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

const findLongestWords = (sentence) => {
  if (typeof sentence !== 'string') {
    return [];
  }

  const words = sentence.split(' ').filter(word => word.length > 0);
  const maxLength = Math.max(...words.map(word => word.length));
  const longestWords = words.filter(word => word.length === maxLength);  
  return longestWords.length > 0 ? longestWords : [];
}


export { isPalindrom, findLongestWords };

