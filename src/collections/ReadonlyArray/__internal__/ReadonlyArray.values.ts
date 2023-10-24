import {
  Collection,
  Collection_T,
  Collection_type,
  EnumerableLike,
} from "../../../collections.js";
import { pipe } from "../../../functions.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Enumerator_fromIterator from "../../Enumerator/__internal__/Enumerator.fromIterator.js";
import Indexed_toCollection from "../../Indexed/__internal__/Indexed.toCollection.js";
import type * as ReadonlyArray from "../../ReadonlyArray.js";

interface ValuesCollection extends Collection<number> {
  readonly [Collection_type]?: EnumerableLike<this[typeof Collection_T]>;
}

const ReadonlyArray_values: ReadonlyArray.Signature["values"] =
  /*@__PURE__*/ Indexed_toCollection<ReadonlyArray.Type, ValuesCollection>(
    <_ extends number, T>(
      arr: readonly T[],
      startIndex: number,
      count: number,
    ) => {
      function* ReadonlyArrayValues(): Iterator<T> {
        for (
          ;
          count !== 0;
          count > 0 ? (startIndex++, count--) : (startIndex--, count++)
        ) {
          yield arr[startIndex];
        }
      }
      return Enumerable_create(() =>
        pipe(ReadonlyArrayValues(), Enumerator_fromIterator()),
      );
    },
    v => v.length,
  ) as ReadonlyArray.Signature["values"];

export default ReadonlyArray_values;
