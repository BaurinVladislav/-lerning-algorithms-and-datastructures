/**
 * Алгоритм бинарного поиска
 *
 * Особенность алгоритма, что массив должен быть предварительно сортирован
 *
 * Реализация 1
 *
 * Сложность - O(log n)
 *
 * @param {*[]} arr массив для поиска
 * @param {*} trigger триггер поиска для филтрации
 *
 * @returns {(number | -1)} возвращет индекс найденного элемента; если не нашел, то -1;
 */
const binarySearch = (arr = [], trigger) => {
  /// [1,2,3,4,5], 2
  let left = 0; //1
  let right = arr.length - 1; //1
  let middle = calculationOfMiddle(left, right); //0

  let result = null;

  while (result === null && left <= right) {
    if (arr[middle] < trigger) {
      left = middle + 1;
      middle = calculationOfMiddle(left, right);
    } else if (arr[middle] > trigger) {
      right = middle - 1;
      middle = calculationOfMiddle(left, right);
    } else {
      result = middle;
    }
  }

  return result === null ? -1 : result;
};

const calculationOfMiddle = (left, right) => Math.floor((right + left) / 2);

module.exports = {
  binarySearch
};
