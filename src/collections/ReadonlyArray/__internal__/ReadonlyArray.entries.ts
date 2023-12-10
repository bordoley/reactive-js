import {
  EnumerableLike,
  KeyedCollection,
  KeyedCollection_T,
  KeyedCollection_type,
} from "../../../collections.js";
import { Tuple2, pipe } from "../../../functions.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Enumerator_fromIterator from "../../Enumerator/__internal__/Enumerator.fromIterator.js";
import Indexed_toCollection from "../../Indexed/__internal__/Indexed.toCollection.js";
import type * as ReadonlyArray from "../../ReadonlyArray.js";

interface EntriesCollection extends KeyedCollection<number> {
  readonly [KeyedCollection_type]?: EnumerableLike<
    Tuple2<number, this[typeof KeyedCollection_T]>
  >;
}

const createEnumerableFromReadonlyArray = <TKey extends number, T>(
  arr: readonly T[],
  startIndex: number,
  count: number,
) => {
  function* ReadonlyArrayEntries(): Iterator<Tuple2<TKey, T>> {
    for (
      ;
      count !== 0;
      count > 0 ? (startIndex++, count--) : (startIndex--, count++)
    ) {
      yield [startIndex as TKey, arr[startIndex]];
    }
  }
  return Enumerable_create(() =>
    pipe(ReadonlyArrayEntries(), Enumerator_fromIterator()),
  );
};

const ReadonlyArray_entries: ReadonlyArray.Signature["entries"] =
  /*@__PURE__*/ Indexed_toCollection<ReadonlyArray.Type, EntriesCollection>(
    createEnumerableFromReadonlyArray,
    v => v.length,
  ) as ReadonlyArray.Signature["entries"];

export default ReadonlyArray_entries;
