import {
  EnumerableLike,
  KeyedCollection,
  KeyedCollection_T,
  KeyedCollection_type,
} from "../../../collections.js";
import { pipe } from "../../../functions.js";
import Enumerable_fromIteratorFactory from "../../Enumerable/__private__/Enumerable.fromIteratorFactory.js";
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
    ) =>
      pipe(function* (): Iterator<T> {
        let iterCount = count;
        let iterStartIndex = startIndex;
        for (
          ;
          iterCount !== 0;
          iterCount > 0
            ? (iterStartIndex++, iterCount--)
            : (iterStartIndex--, iterCount++)
        ) {
          yield arr[iterStartIndex];
        }
      }, Enumerable_fromIteratorFactory()),
    v => v.length,
  ) as ReadonlyArray.Signature["values"];

export default ReadonlyArray_values;
