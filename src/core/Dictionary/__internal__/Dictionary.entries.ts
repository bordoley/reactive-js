import {
  DictionaryContainer,
  DictionaryLike,
  EnumeratorLike,
  KeyedCollectionLike_get,
  KeyedContainer,
} from "../../../core.js";
import Enumerator_map from "../../../core/Enumerator/__internal__/Enumerator.map.js";
import { pipe } from "../../../functions.js";
import Dictionary_keys from "./Dictionary.keys.js";

const Dictionary_entries =
  <
    T,
    TKey extends KeyedContainer.KeyOf<DictionaryContainer> = KeyedContainer.KeyOf<DictionaryContainer>,
  >() =>
  (dict: DictionaryLike<TKey, T>): EnumeratorLike<[TKey, T]> =>
    pipe(
      dict,
      Dictionary_keys(),
      Enumerator_map(key => [key, dict[KeyedCollectionLike_get](key) as T]),
    );

export default Dictionary_entries;
