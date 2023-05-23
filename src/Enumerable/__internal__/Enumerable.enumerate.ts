import type * as Enumerable from "../../Enumerable.js";
import { EnumerableLike, EnumerableLike_enumerate } from "../../types.js";
const Enumerable_enumerate: Enumerable.Signature["enumerate"] =
  <T>() =>
  (enumerable: EnumerableLike<T>) =>
    enumerable[EnumerableLike_enumerate]();

export default Enumerable_enumerate;
