const newArray = require("../array-binary-search.js") 


describe("Return the index of the search key ", () => {
  test("return the index of the array’s element that is equal to the search key, or -1 if the element does not found.", () => {
    expect(newArray([3, 6, 9, 12, 25, 88, 222], 222)).toStrictEqual(6);
    expect(
      newArray([-1, 0, 58, 77, 7, 98, 14], 90)
    ).toStrictEqual(-1);
    expect(newArray([], 222)).toBeNull();

    

  });
});