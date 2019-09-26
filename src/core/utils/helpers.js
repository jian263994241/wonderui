import warning from 'warning';

/**
 * Safe chained function
 *
 * 返回一个连接的方法
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
export function createChainedFunction(...funcs) {
  return funcs.reduce(
    (acc, func) => {
      if (func == null) {
        return acc;
      }
      warning(
        typeof func === 'function',
        'createChainedFunction: invalid Argument Type, must only provide functions, undefined, or null.',
      );

      return function chainedFunction(...args) {
        acc.apply(this, args);
        func.apply(this, args);
      };
    },
    () => {},
  );
}

/**
 * 合并classname
 */
export function classnames(){
  return arguments.length > 0 ? [].slice.apply(arguments).join(' ') : '';
}

/**
 * 生成id
 * @param {*} mask 
 * @param {*} map 
 */
export function idxx(mask = 'xxxxxxxxxx', map = '0123456789abcdef') {
  const length = map.length;
  return mask.replace(/x/g, () => map[Math.floor((Math.random() * length))]);
};