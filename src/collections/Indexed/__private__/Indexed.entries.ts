import {
  CollectionLike_count,
  EnumerableLike,
  IndexedLike,
  KeyedCollection,
  KeyedCollection_T,
  KeyedCollection_type,
  KeyedLike_get,
} from "../../../collections.js";
import { Tuple2, pick, pipe } from "../../../functions.js";
import Enumerable_create from "../../Enumerable/__private__/Enumerable.create.js";
import Enumerator_fromIterator from "../../Enumerator/__private__/Enumerator.fromIterator.js";
import type * as Indexed from "../../Indexed.js";
import Indexed_toCollection from "./Indexed.toCollection.js";

interface EntriesCollection extends KeyedCollection<number> {
  readonly [KeyedCollection_type]?: EnumerableLike<
    Tuple2<number, this[typeof KeyedCollection_T]>
  >;
}

const Indexed_entries: Indexed.Signature["entries"] =
  /*@__PURE__*/ Indexed_toCollection<Indexed.Type, EntriesCollection>(
    <TKey extends number, T>(
      indexed: IndexedLike<T>,
      startIndex: number,
      count: number,
    ) => {
      function* Indexed_entries(): Iterator<Tuple2<TKey, T>> {
        for (
          ;
          count !== 0;
          count > 0 ? (startIndex++, count--) : (startIndex--, count++)
        ) {
          yield [startIndex as TKey, indexed[KeyedLike_get](startIndex)];
        }
      }
      return Enumerable_create(() =>
        pipe(Indexed_entries(), Enumerator_fromIterator()),
      );
    },
    pick(CollectionLike_count),
  ) as Indexed.Signature["entries"];

export default Indexed_entries;
