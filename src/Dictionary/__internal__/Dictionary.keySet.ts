import type * as Dictionary from "../../Dictionary.js";
import { newInstance } from "../../functions.js";
import {
  AssociativeCollectionLike_keys,
  DictionaryLike,
  EnumerableLike_enumerate,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../types.js";

const Dictionary_keySet: Dictionary.Signature["keySet"] =
  <TKey extends Dictionary.TKeyBase = Dictionary.TKeyBase>() =>
  (dict: DictionaryLike<TKey, unknown>): ReadonlySet<TKey> => {
    const result = newInstance<Set<TKey>>(Set);
    const keys =
      dict[AssociativeCollectionLike_keys][EnumerableLike_enumerate]();

    while (keys[EnumeratorLike_move]()) {
      result.add(keys[EnumeratorLike_current]);
    }
    return result;
  };

export default Dictionary_keySet;
