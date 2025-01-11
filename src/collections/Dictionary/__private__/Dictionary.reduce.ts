import {
  DictionaryLike,
  DictionaryLike_get,
  DictionaryLike_keys,
} from "../../../collections.js";
import { Factory, Function3 } from "../../../functions.js";
import type * as Dictionary from "../../Dictionary.js";

const Dictionary_reduce: Dictionary.Signature["reduce"] =
  <T, TAcc, TKey extends Dictionary.TKeyBase = Dictionary.TKeyBase>(
    reducer: Function3<TAcc, T, TKey, TAcc>,
    initialValue: Factory<TAcc>,
  ) =>
  (dict: DictionaryLike<TKey, T>) => {
    let acc = initialValue();

    for (const key of dict[DictionaryLike_keys]) {
      const value = dict[DictionaryLike_get](key) as T;
      acc = reducer(acc, value, key);
    }

    return acc;
  };

export default Dictionary_reduce;
