import { SideEffect1, SideEffect2 } from "../../../functions.js";
import type * as ReadonlyArray from "../../ReadonlyArray.js";

const ReadonlyArray_forEach: ReadonlyArray.Signature["forEach"] =
  <T, TKey extends ReadonlyArray.TKeyBase = ReadonlyArray.TKeyBase>(
    effect: SideEffect2<T, TKey>,
  ): SideEffect1<ReadonlyArray<T>> =>
  array => {
    for (let i = 0; i < array.length; i++) {
      effect(array[i], i as TKey);
    }
  };

export default ReadonlyArray_forEach;
