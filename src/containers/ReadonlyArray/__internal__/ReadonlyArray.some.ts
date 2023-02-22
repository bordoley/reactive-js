import { ReadonlyArrayLike } from "../../../containers.js";
import { Function1, Predicate } from "../../../functions.js";

const ReadonlyArray_some =
  <T>(predicate: Predicate<T>): Function1<ReadonlyArrayLike<T>, boolean> =>
  arr =>
    arr.some(predicate);
export default ReadonlyArray_some;
