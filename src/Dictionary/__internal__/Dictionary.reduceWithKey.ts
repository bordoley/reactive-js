import type * as Dictionary from "../../Dictionary.js";
import { Factory, Function3 } from "../../functions.js";
import {
  AssociativeCollectionLike_keys,
  DictionaryLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
  KeyedCollectionLike_get,
} from "../../types.js";

const Dictionary_reduceWithKey: Dictionary.Signature["reduceWithKey"] =
  <T, TAcc, TKey extends Dictionary.TKeyBase = Dictionary.TKeyBase>(
    reducer: Function3<TAcc, T, TKey, TAcc>,
    initialValue: Factory<TAcc>,
  ) =>
  (dict: DictionaryLike<TKey, T>) => {
    const keys = dict[AssociativeCollectionLike_keys]();
    let acc = initialValue();

    while (keys[EnumeratorLike_move]()) {
      const key = keys[EnumeratorLike_current];
      const value = dict[KeyedCollectionLike_get](key) as T;

      acc = reducer(acc, value, key);
    }
    return acc;
  };

export default Dictionary_reduceWithKey;
