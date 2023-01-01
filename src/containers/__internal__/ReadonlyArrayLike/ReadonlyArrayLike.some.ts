import { ReadonlyArrayLike } from "../../../containers";
import { Function1, Predicate } from "../../../functions";

const ReadonlyArrayLike__some =
  <T>(predicate: Predicate<T>): Function1<ReadonlyArrayLike<T>, boolean> =>
  arr =>
    arr.some(predicate);
export default ReadonlyArrayLike__some;
