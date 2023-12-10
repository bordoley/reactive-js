import { DictionaryLike, KeyedLike_get } from "../../../collections.js";
import { Tuple2, pipe } from "../../../functions.js";
import type * as Dictionary from "../../Dictionary.js";
import * as Enumerable from "../../Enumerable.js";
import Dictionary_keys from "./Dictionary.keys.js";

const Dictionary_entries: Dictionary.Signature["entries"] =
  <T, TKey extends Dictionary.TKeyBase>() =>
  (dict: DictionaryLike<TKey, T>) =>
    pipe(
      dict,
      Dictionary_keys<TKey>(),
      Enumerable.map<TKey, Tuple2<TKey, T>>(key => [
        key,
        dict[KeyedLike_get](key) as T,
      ]),
    );

export default Dictionary_entries;
