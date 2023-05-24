import { EnumerableBaseLike, EnumerableLike_enumerate } from "../../types.js";
const EnumerableBase_enumerate =
  <T>() =>
  (enumerable: EnumerableBaseLike<T>) =>
    enumerable[EnumerableLike_enumerate]();

export default EnumerableBase_enumerate;
