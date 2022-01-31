// Необходимо реализовать функцию, которая подсчитывает среднюю длину каждого слова в строке.
// Результатом вычисления функции является вещественное число, округленное до двух знаков после запятой.
// При передаче в функцию новой строки, она должна учитывать результаты предыдущих вычислений. 

// Пример:
// "Я хорошо знаю javascript" -> 5.25
// "Но некоторые вопросы вызывают трудности, например замыкания." -> 6.64

function getStringHandler() {
  let value = 0;
 
  return (str) => {
    const wordsArr = str.split(' ');
  
    const wordsLength = wordsArr.reduce((acc, word) => {
        acc += word.length;
    
        return acc;
    }, 0);
  
    const result = Number((wordsLength / wordsArr.length).toFixed(2));
    const avg = value ? (result + value) / 2 : result;
    
    value = Number((avg).toFixed(2));
  
    return value;
  }
 }
 
 const getAvgStringLength = getStringHandler();

 console.log(getAvgStringLength("Я хорошо знаю javascript"));
 console.log(getAvgStringLength("Но некоторые вопросы вызывают трудности, например замыкания."));

