/**
 * Алгоритм линейного поиска
 *
 * Реализация 1
 *
 * Сложность - O(n)
 *
 * @param {*[]} arr массив для поиска
 * @param {*} trigger триггер поиска для филтрации
 *
 * @returns {(number | -1)} возвращет индекс найденного элемента; если не нашел, то -1;
 */
const linearSearch1 = (arr = [], trigger) => arr.indexOf(trigger);

/**
 * Алгоритм линейного поиска
 *
 * Реализация 2
 *
 * Сложность - O(n)
 *
 * @param {*[]} arr массив для поиска
 * @param {*} trigger триггер поиска для филтрации
 *
 * @returns {(number | -1)} возвращет индекс найденного элемента; если не нашел, то -1;
 */
const linearSearch2 = (arr = [], trigger) => {
  let result = null;
  let index = 0;

  while (!result) {
    if (arr[index] === trigger) result = index;
    else if (!(index <= arr.length - 1)) result = -1;
    else index++;
  }

  return result;
};

module.exports = {
  linearSearch1,
  linearSearch2
};
