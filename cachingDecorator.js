// function slow(x) {
//   // здесь могут быть ресурсоёмкие вычисления
//   alert(`Called with ${x}`);
//   return x;
// }

const cachingDecorator = (func) => {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }

    let result = func(x);

    cache.set(x, result);
    return result;
  };
};

// slow = cachingDecorator(slow);

module.exports = {
  cachingDecorator
};
