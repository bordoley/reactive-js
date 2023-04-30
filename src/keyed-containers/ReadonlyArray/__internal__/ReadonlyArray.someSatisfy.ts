import { ReadonlyArrayContainerLike } from "../../../containers.js";
import { Function1, Predicate } from "../../../functions.js";

const ReadonlyArray_someSatisfy =
  <T>(
    predicate: Predicate<T>,
  ): Function1<ReadonlyArrayContainerLike<T>, boolean> =>
  arr =>
    arr.some(predicate);
export default ReadonlyArray_someSatisfy;
