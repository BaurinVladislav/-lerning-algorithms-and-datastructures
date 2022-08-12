const { quickSort } = require("./script");

describe("quickSort", () => {
  it("quickSort ", () => {
    expect(quickSort([1, 3, 3, 2, 5, 4])).toEqual([1, 2, 3, 3, 4, 5]);
  });
});
