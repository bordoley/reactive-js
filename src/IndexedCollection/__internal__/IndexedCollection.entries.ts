import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Iterator_enumerate from "../../Iterator/__internal__/Iterator.enumerate.js";
import { Tuple2, pipe } from "../../functions.js";
import {
  CollectionLike_count,
  IndexedCollectionLike,
  KeyedCollectionLike_get,
} from "../../types.js";
import type * as IndexedCollection from "./../../IndexedCollection.js";

const IndexedCollection_entries: IndexedCollection.Signature["entries"] =
  <T, TKey extends IndexedCollection.TKeyBase = IndexedCollection.TKeyBase>() =>
  (indexed: IndexedCollectionLike<T>) => {
    const count = indexed[CollectionLike_count];
    function* IndexedCollectionEntries(): Iterator<Tuple2<TKey, T>> {
      for (let i = 0; i < count; i++) {
        yield [i as TKey, indexed[KeyedCollectionLike_get](i)];
      }
    }
    return Enumerable_create(() =>
      pipe(IndexedCollectionEntries(), Iterator_enumerate()),
    );
  };

export default IndexedCollection_entries;
