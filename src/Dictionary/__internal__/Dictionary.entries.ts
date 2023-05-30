import type * as Dictionary from "../../Dictionary.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { Tuple2, pipe } from "../../functions.js";
import { DictionaryLike, KeyedCollectionLike_get } from "../../types.js";
import Dictionary_keys from "./Dictionary.keys.js";

const Dictionary_entries: Dictionary.Signature["entries"] =
  <T, TKey extends Dictionary.TKeyBase>() =>
  (dict: DictionaryLike<TKey, T>) =>
    pipe(
      dict,
      Dictionary_keys<TKey>(),
      Observable_map<TKey, Tuple2<TKey, T>>(key => [
        key,
        dict[KeyedCollectionLike_get](key) as T,
      ]),
    );

export default Dictionary_entries;
