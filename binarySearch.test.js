const { binarySearch } = require("./binarySearch");

describe("linearSearch", () => {
  it("linearSearch1 is finded", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 1)).toBe(0);
  });

  it("binarySearch is finded", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 2)).toBe(1);
  });

  it("linearSearch1 is finded", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  it("linearSearch1 is finded", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 4)).toBe(3);
  });

  it("linearSearch1 is finded", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 5)).toBe(4);
  });

  it("linearSearch1 is not finded", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 6)).toBe(5);
  });

  it("linearSearch1 is not finded", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 5], 6)).toBe(-1);
  });

  it("linearSearch1 is not finded", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 10)).toBe(-1);
  });
});
