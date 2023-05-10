import type * as Dictionary from "../../Dictionary.js";
import {
  AssociativeCollectionLike_keys,
  DictionaryLike,
  EnumeratorLike,
} from "../../types.js";

const Dictionary_keys: Dictionary.Signature["keys"] =
  <TKey extends Dictionary.TKeyBase = Dictionary.TKeyBase>() =>
  (dict: DictionaryLike<TKey, unknown>): EnumeratorLike<TKey> =>
    dict[AssociativeCollectionLike_keys];

export default Dictionary_keys;
