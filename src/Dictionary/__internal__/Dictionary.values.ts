import type * as Dictionary from "../../Dictionary.js";
import Enumerator_map from "../../Enumerator/__internal__/Enumerator.map.js";
import { pipe } from "../../functions.js";
import {
  DictionaryLike,
  EnumeratorLike,
  KeyedCollectionLike_get,
} from "../../types.js";
import Dictionary_keys from "./Dictionary.keys.js";

const Dictionary_values: Dictionary.Signature["values"] =
  <T, TKey extends Dictionary.TKeyBase = Dictionary.TKeyBase>() =>
  (dict: DictionaryLike<TKey, T>): EnumeratorLike<T> =>
    pipe(
      dict,
      Dictionary_keys(),
      Enumerator_map(key => dict[KeyedCollectionLike_get](key) as T),
    );

export default Dictionary_values;
