import NumberSchema from './NumberSchema.js';
import ArraySchema from './ArraySchema.js';
import ObjectSchema from './ObjectSchema.js';

class Validator {
  number() {
    return new NumberSchema();
  }

  array() {
    return new ArraySchema();
  }

  object() {
    return new ObjectSchema();
  }
}
export default Validator;
const v = new Validator();
const schema1 = v.array().custom((element) => (element % 2) === 0);

schema1.isValid([1, 2]); // false;
schema1.isValid([2, 4, 8, 12]); // true;
schema1.isValid([1.2]); // false;
console.log(schema1.isValid([1, 2]));
console.log(schema1.isValid([2, 4, 8, 12]));
console.log(schema1.isValid([1.2]));
