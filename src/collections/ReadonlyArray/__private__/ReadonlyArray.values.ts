import {
  EnumerableLike,
  KeyedCollection,
  KeyedCollection_T,
  KeyedCollection_type,
} from "../../../collections.js";
import { pipe } from "../../../functions.js";
import Enumerable_create from "../../Enumerable/__private__/Enumerable.create.js";
import Enumerator_fromIterator from "../../Enumerator/__private__/Enumerator.fromIterator.js";
import Indexed_toCollection from "../../Indexed/__private__/Indexed.toCollection.js";
import type * as ReadonlyArray from "../../ReadonlyArray.js";

interface ValuesCollection extends KeyedCollection<number> {
  readonly [KeyedCollection_type]?: EnumerableLike<
    this[typeof KeyedCollection_T]
  >;
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
