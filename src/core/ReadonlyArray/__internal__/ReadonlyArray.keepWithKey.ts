import { KeyedContainer, ReadonlyArrayContainer } from "../../../core.js";
import { Function2 } from "../../../functions.js";

const ReadonlyArray_keepWithKey: KeyedContainer.TypeClass<ReadonlyArrayContainer>["keepWithKey"] =

    <
      T,
      TKey extends KeyedContainer.KeyOf<ReadonlyArrayContainer> = KeyedContainer.KeyOf<ReadonlyArrayContainer>,
    >(
      predicate: Function2<T, TKey, boolean>,
    ) =>
    (arr: readonly T[]): readonly T[] =>
      arr.filter<T>(predicate as (value: T, index: number) => value is T);

export default ReadonlyArray_keepWithKey;
