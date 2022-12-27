import { ReadonlyArrayLike } from "../../../containers";
import { Function1, Predicate } from "../../../functions";

const some =
  <T>(predicate: Predicate<T>): Function1<ReadonlyArrayLike<T>, boolean> =>
  arr =>
    arr.some(predicate);
export default some;
