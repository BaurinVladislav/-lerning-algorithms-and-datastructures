const selectionSort = (arr, direction = "asc") => {
  const _arr = [...arr];
  let targetIndex = 0;
  let currentStartItem;
  let currentMaxItem;

  for (let i = 0; i < _arr.length - 1; i++) {
    for (let ii = i + 1; ii <= _arr.length - 1; ii++) {
      if (
        direction === "asc"
          ? _arr[ii] < _arr[targetIndex]
          : _arr[ii] > _arr[targetIndex]
      )
        targetIndex = ii;
    }

    currentStartItem = _arr[i];
    currentMaxItem = _arr[targetIndex];

    _arr[i] = currentMaxItem;
    _arr[targetIndex] = currentStartItem;
    targetIndex = i + 1;
  }

  return _arr;
};

module.exports = {
  selectionSort,
};
