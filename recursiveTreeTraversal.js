/**
 * Алгоритм рекурсивного обхода дерева
 *
 * Реализация 1 - "Подсчет суммы зарплат по отделам"
 *
 * Сложность - O(n)
 *
 * @param {(*[]) | Object} department массив для поиска;
 *
 * @returns {(number)} возвращает сумму зарплат;
 */
const sumSalaries = (department) => {
  if (Array.isArray(department)) {
    return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
  } else {
    let sum = 0;
    for (let subdep in department) {
      sum += sumSalaries(department[subdep]);
    }
    return sum;
  }
};

/**
 * Алгоритм рекурсивного обхода дерева
 *
 * "Подсчет суммы зарплат по отделам"
 *
 * Реализация 2 - "инверсия значений 0 и 1"
 *
 * Сложность - O(n)
 *
 * @param {(*[]) | Object} tree массив для поиска;
 *
 * @returns {(*[]) | Object} возвращает сумму зарплат;
 */
const inverse = (tree) => {
  let _tree = tree;

  if (Number.isInteger(tree)) {
    _tree = +!tree;
  } else {
    for (let key in tree) {
      _tree[key] = inverse(tree[key]);
    }
  }

  return _tree;
};

module.exports = {
  sumSalaries,
  inverse,
};
