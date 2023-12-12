import {
  CollectionLike_count,
  IndexedLike,
  KeyedLike_get,
} from "../../../collections.js";
import { Function2, pipe } from "../../../functions.js";
import type * as Indexed from "../../Indexed.js";
import * as ReadonlyArray from "../../ReadonlyArray.js";

const Indexed_keep: Indexed.Signature["keep"] =
  <T, TKey extends Indexed.TKeyBase = Indexed.TKeyBase>(
    predicate: Function2<T, TKey, boolean>,
  ) =>
  (indexed: IndexedLike<T>) => {
    const resultArray: T[] = [];

    for (let i = 0; i < indexed[CollectionLike_count]; i++) {
      const value = indexed[KeyedLike_get](i);
      if (predicate(value, i as TKey)) {
        resultArray.push(value);
      }
    }

    return pipe(resultArray, ReadonlyArray.toIndexed<T>());
  };

export default Indexed_keep;
