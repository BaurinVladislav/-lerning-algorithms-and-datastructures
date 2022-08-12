const { selectionSort } = require("./script");

describe("selectionSort", () => {
  it("selectionSort - direction asc", () => {
    expect(selectionSort([1, 3, 2, 5, 4])).toEqual([1, 2, 3, 4, 5]);
  });

  it("selectionSort - direction desc", () => {
    expect(selectionSort([1, 3, 2, 5, 4], "desc")).toEqual([5, 4, 3, 2, 1]);
  });
});
