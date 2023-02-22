import { Keep, ReadonlyArrayLike } from "../../../containers.js";
import { Predicate } from "../../../functions.js";

const ReadonlyArray_keep: Keep<ReadonlyArrayLike>["keep"] =
  <T>(predicate: Predicate<T>) =>
  (arr: readonly T[]): readonly T[] =>
    arr.filter(predicate as (value: T) => value is T);

export default ReadonlyArray_keep;
