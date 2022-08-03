const { linearSearch1, linearSearch2 } = require("./linearSearch");

describe("linearSearch", () => {
  it("linearSearch1 is finded", () => {
    expect(linearSearch1(["a", "b", "r", "y", "b"], "b")).toBe(1);
  });

  it("linearSearch1 is not finded", () => {
    expect(linearSearch1(["a", "b", "r", "y", "b"], "m")).toBe(-1);
  });

  it("linearSearch2", () => {
    expect(linearSearch2(["a", "b", "r", "y", "b"], "b")).toBe(1);
  });

  it("linearSearch1 is not finded", () => {
    expect(linearSearch2(["a", "b", "r", "y", "b"], "m")).toBe(-1);
  });
});
