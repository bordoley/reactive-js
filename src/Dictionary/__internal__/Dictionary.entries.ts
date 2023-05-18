import type * as Dictionary from "../../Dictionary.js";
import EnumeratorFactory_map from "../../EnumeratorFactory/__internal__/EnumeratorFactory.map.js";
import { pipe } from "../../functions.js";
import { DictionaryLike, KeyedCollectionLike_get } from "../../types.js";
import Dictionary_keys from "./Dictionary.keys.js";

const Dictionary_entries: Dictionary.Signature["entries"] =
  <T, TKey extends Dictionary.TKeyBase = Dictionary.TKeyBase>() =>
  (dict: DictionaryLike<TKey, T>) =>
    pipe(
      dict,
      Dictionary_keys(),
      EnumeratorFactory_map(key => [
        key,
        dict[KeyedCollectionLike_get](key) as T,
      ]),
    );

export default Dictionary_entries;
