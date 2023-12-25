import {
  CollectionLike_count,
  EnumerableLike,
  IndexedLike,
  KeyedCollection,
  KeyedCollection_T,
  KeyedCollection_type,
  KeyedLike_get,
} from "../../../collections.js";
import { Tuple2, pick, pipe, tuple } from "../../../functions.js";
import Enumerable_fromIteratorFactory from "../../Enumerable/__private__/Enumerable.fromIteratorFactory.js";
import type * as Indexed from "../../Indexed.js";
import Indexed_toCollection from "./Indexed.toCollection.js";

interface EntriesCollection extends KeyedCollection<number> {
  readonly [KeyedCollection_type]?: EnumerableLike<
    Tuple2<number, this[typeof KeyedCollection_T]>
  >;
}

const Indexed_entries: Indexed.Signature["entries"] =
  /*@__PURE__*/ Indexed_toCollection<
    Indexed.IndexedCollection,
    EntriesCollection
  >(
    <TKey extends number, T>(
      indexed: IndexedLike<T>,
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
          yield tuple(
            startIndexInstance as TKey,
            indexed[KeyedLike_get](startIndexInstance),
          );
        }
      }, Enumerable_fromIteratorFactory()),
    pick(CollectionLike_count),
  ) as Indexed.Signature["entries"];

export default Indexed_entries;
