import { Function2 } from "../../../functions.js";
import {
  KeepWithKey,
  KeyOf,
  ReadonlyArrayLike,
} from "../../../keyedcontainers.js";

const ReadonlyArray_keepWithKey: KeepWithKey<ReadonlyArrayLike>["keepWithKey"] =

    <T, TKey extends KeyOf<ReadonlyArrayLike> = KeyOf<ReadonlyArrayLike>>(
      predicate: Function2<T, TKey, boolean>,
    ) =>
    (arr: readonly T[]): readonly T[] =>
      arr.filter<T>(predicate as (value: T, index: number) => value is T);

export default ReadonlyArray_keepWithKey;
