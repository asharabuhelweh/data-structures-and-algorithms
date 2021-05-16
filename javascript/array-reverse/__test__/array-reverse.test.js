const reverseArray = require("../array-reverse.js") 

describe("reverseArray", () => {
  test("It should return an array reversed ", () => {
    expect(reverseArray([5, 10, 15, 20])).toStrictEqual([20, 15, 10, 5]);
    expect(
      reverseArray([89, 2354, 3546, 23, 10, -923, 823, -12])
    ).toStrictEqual([-12, 823, -923, 10, 23, 3546, 2354, 89]);
  });
});