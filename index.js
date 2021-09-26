const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const testWords =['what', 'does', 'the', 'this', 'keyword', 'mean?'];
const testWord = `sketch`
const arrayTest =[2,3,4,5]

capital = (word) => {
  return word[0].toUpperCase() + word.slice(1);
}

// console.log(capital(testWord));

outterFunction = (array) => {array.map((element)=>console.log(element))}

innerFunction = (array) => {
  let map1 = array.map((element)=>{
    return (capital(element))})
  return map1.join(" "); 
}

const titleCased = (array) => {
  
  let map2 = array.map((element) => {
  let newWords = element.split(" ");
  return innerFunction(newWords);
})
  return map2}

// outterFunction(tutorials);
// console.log(innerFunction(testWords));
console.log(titleCased(tutorials));
