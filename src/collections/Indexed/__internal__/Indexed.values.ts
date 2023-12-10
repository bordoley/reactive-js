import {
  CollectionLike_count,
  EnumerableLike,
  IndexedLike,
  KeyedCollection,
  KeyedCollection_T,
  KeyedCollection_type,
  KeyedLike_get,
} from "../../../collections.js";
import { pick, pipe } from "../../../functions.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Enumerator_fromIterator from "../../Enumerator/__internal__/Enumerator.fromIterator.js";
import type * as Indexed from "../../Indexed.js";
import Indexed_toCollection from "./Indexed.toCollection.js";

interface ValuesCollection extends KeyedCollection<number> {
  readonly [KeyedCollection_type]?: EnumerableLike<
    this[typeof KeyedCollection_T]
  >;
}

const Indexed_values: Indexed.Signature["values"] =
  /*@__PURE__*/ Indexed_toCollection<Indexed.Type, ValuesCollection>(
    <_ extends number, T>(
      indexed: IndexedLike<T>,
      startIndex: number,
      count: number,
    ) => {
      function* Indexed_values(): Iterator<T> {
        for (
          ;
          count !== 0;
          count > 0 ? (startIndex++, count--) : (startIndex--, count++)
        ) {
          yield indexed[KeyedLike_get](startIndex);
        }
      }
      return Enumerable_create(() =>
        pipe(Indexed_values(), Enumerator_fromIterator()),
      );
    },
    pick(CollectionLike_count),
  ) as Indexed.Signature["values"];

export default Indexed_values;
