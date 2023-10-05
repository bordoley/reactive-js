import {
  CollectionLike_count,
  Container,
  Container_T,
  Container_type,
  IndexedCollectionLike,
  KeyedCollectionLike_get,
} from "../../../collections.js";
import { Tuple2, pick } from "../../../functions.js";
import type * as IndexedCollection from "./../../IndexedCollection.js";
import IndexedCollection_toContainer from "./IndexedCollection.toContainer.js";

interface EntriesContainer extends Container<number> {
  readonly [Container_type]?: Iterator<
    Tuple2<number, this[typeof Container_T]>
  >;
}

function* iterate<TKey extends number, T>(
  indexed: IndexedCollectionLike<T>,
  startIndex: number,
  count: number,
): Iterator<Tuple2<TKey, T>> {
  for (
    ;
    count !== 0;
    count > 0 ? (startIndex++, count--) : (startIndex--, count++)
  ) {
    yield [startIndex as TKey, indexed[KeyedCollectionLike_get](startIndex)];
  }
}

const IndexedCollection_entries: IndexedCollection.Signature["entries"] =
  /*@__PURE__*/ IndexedCollection_toContainer<
    IndexedCollection.Type,
    EntriesContainer
  >(
    iterate,
    pick(CollectionLike_count),
  ) as IndexedCollection.Signature["entries"];

export default IndexedCollection_entries;
