import {
  Collection,
  CollectionLike_count,
  Collection_T,
  Collection_type,
  EnumerableLike,
  IndexedCollectionLike,
  KeyedCollectionLike_get,
} from "../../../collections.js";
import { Tuple2, pick, pipe } from "../../../functions.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Enumerator_fromIterator from "../../Enumerator/__internal__/Enumerator.fromIterator.js";
import type * as IndexedCollection from "./../../IndexedCollection.js";
import IndexedCollection_toCollection from "./IndexedCollection.toCollection.js";

interface EntriesCollection extends Collection<number> {
  readonly [Collection_type]?: EnumerableLike<
    Tuple2<number, this[typeof Collection_T]>
  >;
}

const IndexedCollection_entries: IndexedCollection.Signature["entries"] =
  /*@__PURE__*/ IndexedCollection_toCollection<
    IndexedCollection.Type,
    EntriesCollection
  >(
    <TKey extends number, T>(
      indexed: IndexedCollectionLike<T>,
      startIndex: number,
      count: number,
    ) => {
      function* IndexedCollection_entries(): Iterator<Tuple2<TKey, T>> {
        for (
          ;
          count !== 0;
          count > 0 ? (startIndex++, count--) : (startIndex--, count++)
        ) {
          yield [
            startIndex as TKey,
            indexed[KeyedCollectionLike_get](startIndex),
          ];
        }
      }
      return Enumerable_create(() =>
        pipe(IndexedCollection_entries(), Enumerator_fromIterator()),
      );
    },
    pick(CollectionLike_count),
  ) as IndexedCollection.Signature["entries"];

export default IndexedCollection_entries;
