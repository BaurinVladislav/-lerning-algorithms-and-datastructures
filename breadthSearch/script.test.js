const { breadthSearch } = require("./script");

const graph = {};
graph.a = ["b", "c"];
graph.b = ["f"];
graph.c = ["d", "c"];
graph.d = ["f"];
graph.e = ["f"];
graph.f = ["g"];

describe("breadthSearch", () => {
  it("breadthSearch is finded", () => {
    expect(breadthSearch(graph, "a", "e")).toBe(true);
  });

  it("breadthSearch is not finded", () => {
    expect(breadthSearch(graph, "a", "n")).toBe(false);
  });
});
