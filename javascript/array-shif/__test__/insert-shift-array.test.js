const shiftArray = require("../insert-shift-array"); 

describe("Return an shift array", () => {
  test("It should return an array with the added value in middle position", () => {
    expect(shiftArray([1, 5, 7, 9], 300)).toStrictEqual([1, 5,300,7,9]);
    expect(
      shiftArray([10, 20, 30], 11)
    ).toStrictEqual([10, 20, 11, 30]);
  });
});