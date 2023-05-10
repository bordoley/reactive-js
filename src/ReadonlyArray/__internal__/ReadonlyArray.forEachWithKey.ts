import { Function1, SideEffect2 } from "../../functions.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_forEachWithKey: ReadonlyArray.Signature["forEachWithKey"] =
  <T, TKey extends ReadonlyArray.TKey = ReadonlyArray.TKey>(
    effect: SideEffect2<T, TKey>,
  ): Function1<readonly T[], readonly T[]> =>
  arr => {
    arr.forEach(effect as SideEffect2<T, number>);
    return arr;
  };

export default ReadonlyArray_forEachWithKey;
