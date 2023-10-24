import { AssociativeLike_keys, DictionaryLike } from "../../../collections.js";
import type * as Dictionary from "../../Dictionary.js";

const Dictionary_keys: Dictionary.Signature["keys"] =
  <TKey extends Dictionary.TKeyBase = Dictionary.TKeyBase>() =>
  (dict: DictionaryLike<TKey, unknown>) =>
    dict[AssociativeLike_keys];

export default Dictionary_keys;
