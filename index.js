function palindrome(str) {
  const alphanumeric=str.toLowerCase().match(/[a-z0-9]/g);
  return alphanumeric.join('')===alphanumeric.reverse().join('')
  //lowercase our input
  //letters and numbers
  //return string===reversed String
}

palindrome("eye");