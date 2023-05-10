import { Function2 } from "../../functions.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_keepWithKey: ReadonlyArray.Signature["keepWithKey"] =
  <T, TKey extends ReadonlyArray.TKeyBase = ReadonlyArray.TKeyBase>(
    predicate: Function2<T, TKey, boolean>,
  ) =>
  (arr: readonly T[]): readonly T[] =>
    arr.filter<T>(predicate as (value: T, index: number) => value is T);

export default ReadonlyArray_keepWithKey;
