import { Function2 } from "../../../functions.js";
import {
  KeepWithKey,
  KeyOf,
  ReadonlyArrayContainerLike,
} from "../../../keyed-containers.js";

const ReadonlyArray_keepWithKey: KeepWithKey<ReadonlyArrayContainerLike>["keepWithKey"] =

    <
      T,
      TKey extends KeyOf<ReadonlyArrayContainerLike> = KeyOf<ReadonlyArrayContainerLike>,
    >(
      predicate: Function2<T, TKey, boolean>,
    ) =>
    (arr: readonly T[]): readonly T[] =>
      arr.filter<T>(predicate as (value: T, index: number) => value is T);

export default ReadonlyArray_keepWithKey;
