class NumberSchema {
  isValid(value) {
    if (typeof value === 'number') {
      return true;
    }
    return false;
  }
}
export default NumberSchema;
