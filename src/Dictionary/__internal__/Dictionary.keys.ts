import type * as Dictionary from "../../Dictionary.js";
import { bindMethod } from "../../functions.js";
import { AssociativeCollectionLike_keys, DictionaryLike } from "../../types.js";

const Dictionary_keys: Dictionary.Signature["keys"] =
  <TKey extends Dictionary.TKeyBase = Dictionary.TKeyBase>() =>
  (dict: DictionaryLike<TKey, unknown>) =>
    bindMethod(dict, AssociativeCollectionLike_keys);

export default Dictionary_keys;
