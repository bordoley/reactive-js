import type * as Dictionary from "../../Dictionary.js";
import { Function1, SideEffect2 } from "../../functions.js";
import {
  AssociativeCollectionLike_keys,
  DictionaryLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
  KeyedCollectionLike_get,
} from "../../types.js";

const Dictionary_forEachWithKey: Dictionary.Signature["forEachWithKey"] =
  <T, TKey extends Dictionary.TKeyBase = Dictionary.TKeyBase>(
    effect: SideEffect2<T, TKey>,
  ): Function1<DictionaryLike<TKey, T>, DictionaryLike<TKey, T>> =>
  dict => {
    const keys = dict[AssociativeCollectionLike_keys]();
    while (keys[EnumeratorLike_move]()) {
      const key = keys[EnumeratorLike_current];
      const value = dict[KeyedCollectionLike_get](key) as T;

      effect(value, key);
    }
    return dict;
  };

export default Dictionary_forEachWithKey;
