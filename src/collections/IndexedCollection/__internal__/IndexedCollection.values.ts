import {
  Collection,
  CollectionLike_count,
  Collection_T,
  Collection_type,
  EnumerableLike,
  IndexedCollectionLike,
  KeyedCollectionLike_get,
} from "../../../collections.js";
import { pick, pipe } from "../../../functions.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Enumerator_fromIterator from "../../Enumerator/__internal__/Enumerator.fromIterator.js";
import type * as IndexedCollection from "../../IndexedCollection.js";
import IndexedCollection_toCollection from "./IndexedCollection.toCollection.js";

interface ValuesCollection extends Collection<number> {
  readonly [Collection_type]?: EnumerableLike<this[typeof Collection_T]>;
}

const IndexedCollection_values: IndexedCollection.Signature["values"] =
  /*@__PURE__*/ IndexedCollection_toCollection<
    IndexedCollection.Type,
    ValuesCollection
  >(
    <_ extends number, T>(
      indexed: IndexedCollectionLike<T>,
      startIndex: number,
      count: number,
    ) => {
      function* IndexedCollection_values(): Iterator<T> {
        for (
          ;
          count !== 0;
          count > 0 ? (startIndex++, count--) : (startIndex--, count++)
        ) {
          yield indexed[KeyedCollectionLike_get](startIndex);
        }
      }
      return Enumerable_create(() =>
        pipe(IndexedCollection_values(), Enumerator_fromIterator()),
      );
    },
    pick(CollectionLike_count),
  ) as IndexedCollection.Signature["values"];

export default IndexedCollection_values;
