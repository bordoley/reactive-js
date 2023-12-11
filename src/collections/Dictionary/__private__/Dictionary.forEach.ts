import {
  AssociativeLike_keys,
  DictionaryLike,
  EnumerableLike_enumerate,
  EnumeratorLike_current,
  EnumeratorLike_move,
  KeyedLike_get,
} from "../../../collections.js";
import { SideEffect1, SideEffect2 } from "../../../functions.js";
import type * as Dictionary from "../../Dictionary.js";

const Dictionary_forEach: Dictionary.Signature["forEach"] =
  <T, TKey extends Dictionary.TKeyBase = Dictionary.TKeyBase>(
    effect: SideEffect2<T, TKey>,
  ): SideEffect1<DictionaryLike<TKey, T>> =>
  dict => {
    const keys = dict[AssociativeLike_keys][EnumerableLike_enumerate]();

    while (keys[EnumeratorLike_move]()) {
      const key = keys[EnumeratorLike_current];
      const value = dict[KeyedLike_get](key) as T;

      effect(value, key as TKey);
    }
  };

export default Dictionary_forEach;
