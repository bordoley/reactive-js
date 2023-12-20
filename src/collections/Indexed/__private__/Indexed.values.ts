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
import Enumerable_create from "../../Enumerable/__private__/Enumerable.create.js";
import Enumerator_fromIterator from "../../Enumerator/__private__/Enumerator.fromIterator.js";
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
        let startIndexInstance = startIndex;
        let countInstance = count;

        for (
          ;
          countInstance !== 0;
          countInstance > 0
            ? (startIndexInstance++, countInstance--)
            : (startIndexInstance--, countInstance++)
        ) {
          yield indexed[KeyedLike_get](startIndexInstance);
        }
      }
      return Enumerable_create(() =>
        pipe(Indexed_values(), Enumerator_fromIterator()),
      );
    },
    pick(CollectionLike_count),
  ) as Indexed.Signature["values"];

export default Indexed_values;
