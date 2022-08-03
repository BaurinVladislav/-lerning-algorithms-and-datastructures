const { sumSalaries, inverse } = require("./script");

let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

const tree = {
  a: {
    a: 1,
    b: {
      a: 0,
      b: 1,
    },
    c: 0,
  },
  b: 0,
  c: 1,
};

const treeInverse = {
  a: {
    a: 0,
    b: {
      a: 1,
      b: 0,
    },
    c: 1,
  },
  b: 1,
  c: 0,
};

describe("recursiveTreeTraversal", () => {
  it("sumSalaries", () => {
    expect(sumSalaries(company)).toBe(6700);
  });

  it("inverse", () => {
    expect(JSON.stringify(inverse(tree))).toBe(JSON.stringify(treeInverse));
  });
});
