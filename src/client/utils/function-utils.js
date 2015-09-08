// TODO: deprecate in favour of lodash
export default {

  isFunction(value) {
    return typeof value === 'function'
  },

  noop() {
    return undefined
  },

  contains(source, test) {
    const isArray = Object.prototype.toString.call(source);
    if (isArray) {
      return source.indexOf(test) >= 0;
    }
    return false;
  }

}
