import type * as Dictionary from "../../Dictionary.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { Optional, bindMethod, pipe } from "../../functions.js";
import {
  DictionaryLike,
  EnumerableLike,
  KeyedCollectionLike_get,
} from "../../types.js";
import Dictionary_keys from "./Dictionary.keys.js";

const Dictionary_values: Dictionary.Signature["values"] =
  <T, TKey extends Dictionary.TKeyBase = Dictionary.TKeyBase>() =>
  (dict: DictionaryLike<TKey, T>) =>
    pipe(
      dict,
      Dictionary_keys(),
      Observable_map<TKey, Optional<T>>(
        bindMethod(dict, KeyedCollectionLike_get),
      ),
    ) as EnumerableLike<T>;

export default Dictionary_values;
