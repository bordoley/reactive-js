import { EnumerableBaseLike, EnumerableLike_enumerate } from "../../types.js";
const Observable_enumerate =
  <T>() =>
  (enumerable: EnumerableBaseLike<T>) =>
    enumerable[EnumerableLike_enumerate]();

export default Observable_enumerate;
