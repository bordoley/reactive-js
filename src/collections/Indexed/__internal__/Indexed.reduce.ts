import {
  CollectionLike_count,
  IndexedLike,
  KeyedLike_get,
} from "../../../collections.js";
import { Factory, Function3 } from "../../../functions.js";
import type * as Indexed from "../../Indexed.js";

const Indexed_reduce: Indexed.Signature["reduce"] =
  <T, TAcc, TKey extends Indexed.TKeyBase = Indexed.TKeyBase>(
    reducer: Function3<TAcc, T, TKey, TAcc>,
    initialValue: Factory<TAcc>,
  ) =>
  (indexed: IndexedLike<T>) => {
    const count = indexed[CollectionLike_count];
    let acc = initialValue();

    for (let i = 0; i < count; i++) {
      acc = reducer(acc, indexed[KeyedLike_get](i), i as TKey);
    }

    return acc;
  };

export default Indexed_reduce;
