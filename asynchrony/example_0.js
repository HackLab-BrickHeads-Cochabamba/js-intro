const wordInput = 'reconocer'

console.log('es palindrome?: ')
console.log(isPalindromeWord(wordInput))

console.log('es palindrome (v2)?: ')
console.log(isPalindromeWordV2(wordInput))


function isPalindromeWord(word) {
  const reversedWord = Array.from(word).reverse()
  return word === reversedWord.join('')
}


const isPalindromeWordV2 = (word) => {
  const reversedWord = Array.from(word).reverse()
  return word === reversedWord.join('')
}



