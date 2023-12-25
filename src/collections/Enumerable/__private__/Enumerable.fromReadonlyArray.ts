import {
  EnumerableLike,
  KeyedCollection,
  KeyedCollection_T,
  KeyedCollection_type,
} from "../../../collections.js";
import { pipe } from "../../../functions.js";
import type * as Enumerable from "../../Enumerable.js";
import Enumerable_fromIteratorFactory from "../../Enumerable/__private__/Enumerable.fromIteratorFactory.js";
import Indexed_toCollection from "../../Indexed/__private__/Indexed.toCollection.js";
import type { ReadonlyArrayCollection } from "../../ReadonlyArray.js";

interface ValuesCollection extends KeyedCollection<number> {
  readonly [KeyedCollection_type]?: EnumerableLike<
    this[typeof KeyedCollection_T]
  >;
}

const Enumerable_fromReadonlyArray: Enumerable.Signature["fromReadonlyArray"] =
  /*@__PURE__*/ Indexed_toCollection<ReadonlyArrayCollection, ValuesCollection>(
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
  ) as Enumerable.Signature["fromReadonlyArray"];

export default Enumerable_fromReadonlyArray;
