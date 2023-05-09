import { ReadonlyArrayContainer } from "../../containers.js";
import { Function2 } from "../../functions.js";

const ReadonlyArray_keepWithKey: ReadonlyArrayContainer.TypeClass["keepWithKey"] =

    <T, TKey extends ReadonlyArrayContainer.TKey = ReadonlyArrayContainer.TKey>(
      predicate: Function2<T, TKey, boolean>,
    ) =>
    (arr: readonly T[]): readonly T[] =>
      arr.filter<T>(predicate as (value: T, index: number) => value is T);

export default ReadonlyArray_keepWithKey;
