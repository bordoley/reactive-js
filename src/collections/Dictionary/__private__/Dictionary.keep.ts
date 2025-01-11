import { Map, Map_set } from "../../../__internal__/constants.js";
import {
  DictionaryLike,
  DictionaryLike_get,
  DictionaryLike_keys,
} from "../../../collections.js";
import { Function2, newInstance, pipe } from "../../../functions.js";
import type * as Dictionary from "../../Dictionary.js";
import * as ReadonlyMap from "../../ReadonlyMap.js";

const Dictionary_keep: Dictionary.Signature["keep"] =
  <T, TKey extends Dictionary.TKeyBase = Dictionary.TKeyBase>(
    predicate: Function2<T, TKey, boolean>,
  ) =>
  (dict: DictionaryLike<TKey, T>) => {
    const resultMap = newInstance<Map<TKey, T>>(Map);

    for (const key of dict[DictionaryLike_keys]) {
      const value = dict[DictionaryLike_get](key) as T;

      if (predicate(value, key)) {
        resultMap[Map_set](key, value);
      }
    }

    return pipe(resultMap, ReadonlyMap.toDictionary<T, TKey>());
  };

export default Dictionary_keep;
