import { Function2 } from "../../functions.js";
import { KeyedContainers, ReadonlyArrayContainer } from "../../types.js";

const ReadonlyArray_keepWithKey: KeyedContainers.TypeClass<ReadonlyArrayContainer>["keepWithKey"] =

    <
      T,
      TKey extends KeyedContainers.KeyOf<ReadonlyArrayContainer> = KeyedContainers.KeyOf<ReadonlyArrayContainer>,
    >(
      predicate: Function2<T, TKey, boolean>,
    ) =>
    (arr: readonly T[]): readonly T[] =>
      arr.filter<T>(predicate as (value: T, index: number) => value is T);

export default ReadonlyArray_keepWithKey;
