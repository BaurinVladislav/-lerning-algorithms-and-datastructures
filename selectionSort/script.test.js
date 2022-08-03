const { selectionSort } = require("./script");

describe("selectionSort", () => {
  it("selectionSort - direction asc", () => {
    expect(JSON.stringify(selectionSort([1, 3, 2, 5, 4]))).toBe(
      JSON.stringify([1, 2, 3, 4, 5])
    );
  });

  it("selectionSort - direction desc", () => {
    expect(JSON.stringify(selectionSort([1, 3, 2, 5, 4], "desc"))).toBe(
      JSON.stringify([5, 4, 3, 2, 1])
    );
  });
});
