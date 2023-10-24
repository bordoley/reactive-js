import { DictionaryLike } from "../../../collections.js";
import type * as Dictionary from "../../Dictionary.js";

const Dictionary_values: Dictionary.Signature["values"] =
  <T, TKey extends Dictionary.TKeyBase = Dictionary.TKeyBase>() =>
  (dict: DictionaryLike<TKey, T>) =>
    dict;

export default Dictionary_values;
