import {
  DictionaryLike,
  DictionaryLike_get,
  DictionaryLike_keys,
} from "../../../collections.js";
import { SideEffect1, SideEffect2 } from "../../../functions.js";
import type * as Dictionary from "../../Dictionary.js";

const Dictionary_forEach: Dictionary.Signature["forEach"] =
  <T, TKey extends Dictionary.TKeyBase = Dictionary.TKeyBase>(
    effect: SideEffect2<T, TKey>,
  ): SideEffect1<DictionaryLike<TKey, T>> =>
  dict => {
    for (const key of dict[DictionaryLike_keys]) {
      const value = dict[DictionaryLike_get](key) as T;

      effect(value, key as TKey);
    }
  };

export default Dictionary_forEach;
