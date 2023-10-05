import { Factory, Function3 } from "../../../functions.js";
import type * as ReadonlyArray from "../../ReadonlyArray.js";

const ReadonlyArray_reduce: ReadonlyArray.Signature["reduce"] =
  <T, TAcc, TKey extends ReadonlyArray.TKeyBase = ReadonlyArray.TKeyBase>(
    reducer: Function3<TAcc, T, TKey, TAcc>,
    initialValue: Factory<TAcc>,
  ) =>
  (arr: ReadonlyArray<T>) => {
    const acc = initialValue();
    return arr.reduce<TAcc>(
      reducer as unknown as (
        previousValue: TAcc,
        currentValue: T,
        currentIndex: number,
        array: readonly T[],
      ) => TAcc,
      acc,
    );
  };

export default ReadonlyArray_reduce;
