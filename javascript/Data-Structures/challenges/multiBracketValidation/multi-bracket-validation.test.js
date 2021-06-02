'use strict';
const { expect } = require('@jest/globals');
const multiBracketValidation=require('./multi-bracket-validation.js');
describe('happyPath',()=>{
  it('happyPath',()=>{
    //arrange
  let input1='{}';
  let input2='{}(){}';
  let input3='()[[Extra Characters]]';
  let input4='(){}[[]]';
  let input5='{}{Code}[Fellows](())';
  let input6='{}{Code}[Fellows](())';
  let input7='[({}]';
  let input8='(](';
  let input9='{(})';
  let input10='{';
  let input11=')';
  let input12='[}';
  //act
  //assert
  expect(multiBracketValidation(input1)).toBe(true);
  expect(multiBracketValidation(input2)).toBe(true);
  expect(multiBracketValidation(input3)).toBe(true);
  expect(multiBracketValidation(input4)).toBe(true);
  expect(multiBracketValidation(input5)).toBe(true);
  expect(multiBracketValidation(input6)).toBe(true);
  expect(multiBracketValidation(input7)).toBe(false);
  expect(multiBracketValidation(input8)).toBe(false);
  expect(multiBracketValidation(input9)).toBe(false);
  expect(multiBracketValidation(input10)).toBe(false);
  expect(multiBracketValidation(input11)).toBe(false);
  expect(multiBracketValidation(input12)).toBe(false);


  });

  it('edge case, input another type than string ',()=>{
    let input=123;
    expect(multiBracketValidation(input)).toBe('please insert input as a string');

  });

  it('edge case,insert without passing input',()=>{
    expect(multiBracketValidation()).toBe('please insert input as a string');

  });

})