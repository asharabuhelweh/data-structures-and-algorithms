'use strict';

function multiBracketValidation(input) {
  //check the type of input 
  if (typeof (input) != 'string') { //if not string 
    return 'please insert input as a string';  //raise exception
  }
  else {
    
    let bracketArr = [];
    let bracketObj = {
      '(': ')',
      '[': ']',
      '{': '}'
    }

    for (let i = 0; i < input.length; i++) {  //loop throw the string (input)

      // If input symbol is an opening bracket add it to a bracketArr
      if (input[i] === '(' || input[i] === '{' || input[i] === '[') {
        bracketArr.push(input[i]);
      }
      //  If  input symbol is a closing bracket, pop from the bracketArr
      else if (input[i] === ')' || input[i] === '}' || input[i] === ']') {
        let lastBracket = bracketArr.pop();

        //If the popped element from the bracketArr doesn’t match the closing brace in the bracketObj,return false
        if (input[i] !== bracketObj[lastBracket]) {
           return false 
          };
      }
    }
     //if the  bracket array is empty (no matching brackets) return false 
    if (bracketArr.length !== 0) {   
       return false
       };

    return true;
  }

}


module.exports = multiBracketValidation;