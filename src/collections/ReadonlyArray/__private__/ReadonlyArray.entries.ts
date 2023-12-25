import {
  EnumerableLike,
  KeyedCollection,
  KeyedCollection_T,
  KeyedCollection_type,
} from "../../../collections.js";
import { Tuple2, pipe, tuple } from "../../../functions.js";
import Enumerable_fromIteratorFactory from "../../Enumerable/__private__/Enumerable.fromIteratorFactory.js";
import Indexed_toCollection from "../../Indexed/__private__/Indexed.toCollection.js";
import type * as ReadonlyArray from "../../ReadonlyArray.js";

interface EntriesCollection extends KeyedCollection<number> {
  readonly [KeyedCollection_type]?: EnumerableLike<
    Tuple2<number, this[typeof KeyedCollection_T]>
  >;
}

const ReadonlyArray_entries: ReadonlyArray.Signature["entries"] =
  /*@__PURE__*/ Indexed_toCollection<
    ReadonlyArray.ReadonlyArrayCollection,
    EntriesCollection
  >(
    <TKey extends number, T>(
      arr: readonly T[],
      startIndex: number,
      count: number,
    ) =>
      pipe(function* () {
        let startIndexInstance = startIndex;
        let countInstance = count;

        for (
          ;
          countInstance !== 0;
          countInstance > 0
            ? (startIndexInstance++, countInstance--)
            : (startIndexInstance--, countInstance++)
        ) {
          yield tuple(startIndexInstance as TKey, arr[startIndexInstance]);
        }
      }, Enumerable_fromIteratorFactory()),
    v => v.length,
  ) as ReadonlyArray.Signature["entries"];

export default ReadonlyArray_entries;
