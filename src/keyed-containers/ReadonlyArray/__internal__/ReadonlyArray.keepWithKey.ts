import { Function2 } from "../../../functions.js";
import {
  KeepWithKey,
  KeyOf,
  ReadonlyArrayContainer,
} from "../../../keyed-containers.js";

const ReadonlyArray_keepWithKey: KeepWithKey<ReadonlyArrayContainer>["keepWithKey"] =

    <
      T,
      TKey extends KeyOf<ReadonlyArrayContainer> = KeyOf<ReadonlyArrayContainer>,
    >(
      predicate: Function2<T, TKey, boolean>,
    ) =>
    (arr: readonly T[]): readonly T[] =>
      arr.filter<T>(predicate as (value: T, index: number) => value is T);

export default ReadonlyArray_keepWithKey;
