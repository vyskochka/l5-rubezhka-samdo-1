class ArraySchema {
  constructor() {
    this.integer = false;
    this.even = undefined;
  }

  isValid(value) {
    if (Array.isArray(value)) {
      if (this.integer === true) {
        // eslint-disable-next-line
        for (const item of value) {
          if (!Number.isInteger(item)) {
            return false;
          }
        }
        return true;
      }

      if (this.even !== undefined) {
        // eslint-disable-next-line
        for (const num of value) {
          if (!this.even(num)) {
            return false;
          }
        }
        return true;
      }
      return true;
    }
    return false;
  }

  allIntegers() {
    this.integer = true;
    return this;
  }

  custom(callback) {
    this.even = callback;
    return this;
  }
}
export default ArraySchema;
