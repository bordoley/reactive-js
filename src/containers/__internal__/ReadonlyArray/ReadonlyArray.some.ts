import { ReadonlyArrayLike } from "../../../containers";
import { Function1, Predicate } from "../../../functions";

const ReadonlyArray_some =
  <T>(predicate: Predicate<T>): Function1<ReadonlyArrayLike<T>, boolean> =>
  arr =>
    arr.some(predicate);
export default ReadonlyArray_some;
