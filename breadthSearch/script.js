const breadthSearch = (graph, start, end) => {
  let query = [];

  query.push(start);

  while (query.length > 0) {
    const current = query.shift();

    if (!graph[current]) graph[current] = [];

    if (graph[current].includes(end)) return true;
    else query = [...query, ...graph[current]];
  }
  return false;
};

module.exports = {
  breadthSearch,
};
