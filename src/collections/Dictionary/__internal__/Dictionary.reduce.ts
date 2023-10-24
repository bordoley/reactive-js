import {
  AssociativeLike_keys,
  DictionaryLike,
  EnumerableLike_enumerate,
  EnumeratorLike_current,
  EnumeratorLike_move,
  KeyedLike_get,
} from "../../../collections.js";
import { Factory, Function3 } from "../../../functions.js";
import type * as Dictionary from "../../Dictionary.js";

const Dictionary_reduce: Dictionary.Signature["reduce"] =
  <T, TAcc, TKey extends Dictionary.TKeyBase = Dictionary.TKeyBase>(
    reducer: Function3<TAcc, T, TKey, TAcc>,
    initialValue: Factory<TAcc>,
  ) =>
  (dict: DictionaryLike<TKey, T>) => {
    const keys = dict[AssociativeLike_keys][EnumerableLike_enumerate]();
    let acc = initialValue();

    while (keys[EnumeratorLike_move]()) {
      const key = keys[EnumeratorLike_current];
      const value = dict[KeyedLike_get](key) as T;

      acc = reducer(acc, value, key);
    }
    return acc;
  };

export default Dictionary_reduce;
