import { Predicate } from "../../../functions.js";
import { Keep, ReadonlyArrayLike } from "../../../keyedcontainers.js";

const ReadonlyArray_keep: Keep<ReadonlyArrayLike>["keep"] =
  <T>(predicate: Predicate<T>) =>
  (arr: readonly T[]): readonly T[] =>
    arr.filter(predicate as (value: T) => value is T);

export default ReadonlyArray_keep;
