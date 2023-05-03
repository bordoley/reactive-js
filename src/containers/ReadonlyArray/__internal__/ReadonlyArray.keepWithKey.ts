import {
  KeyOf,
  KeyedContainer,
  ReadonlyArrayContainer,
} from "../../../containers.js";
import { Function2 } from "../../../functions.js";

const ReadonlyArray_keepWithKey: KeyedContainer.KeepWithKey<ReadonlyArrayContainer>["keepWithKey"] =

    <
      T,
      TKey extends KeyOf<ReadonlyArrayContainer> = KeyOf<ReadonlyArrayContainer>,
    >(
      predicate: Function2<T, TKey, boolean>,
    ) =>
    (arr: readonly T[]): readonly T[] =>
      arr.filter<T>(predicate as (value: T, index: number) => value is T);

export default ReadonlyArray_keepWithKey;
