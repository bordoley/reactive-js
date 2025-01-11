import {
  DictionaryLike,
  DictionaryLike_get,
  DictionaryLike_keys,
} from "../../../collections.js";
import { tuple } from "../../../functions.js";
import type * as Dictionary from "../../Dictionary.js";

const Dictionary_entries: Dictionary.Signature["entries"] =
  <T, TKey extends Dictionary.TKeyBase>() =>
  (dict: DictionaryLike<TKey, T>) => ({
    *[Symbol.iterator]() {
      for (const key of dict[DictionaryLike_keys]) {
        yield tuple(key, dict[DictionaryLike_get](key) as T);
      }
    },
  });

export default Dictionary_entries;
