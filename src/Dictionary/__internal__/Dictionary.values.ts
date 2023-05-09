import Enumerator_map from "../../Enumerator/__internal__/Enumerator.map.js";
import { DictionaryContainer, KeyedContainers } from "../../containers.js";
import { pipe } from "../../functions.js";
import {
  DictionaryLike,
  EnumeratorLike,
  KeyedCollectionLike_get,
} from "../../types.js";
import Dictionary_keys from "./Dictionary.keys.js";

const Dictionary_values =
  <
    T,
    TKey extends KeyedContainers.KeyOf<DictionaryContainer> = KeyedContainers.KeyOf<DictionaryContainer>,
  >() =>
  (dict: DictionaryLike<TKey, T>): EnumeratorLike<T> =>
    pipe(
      dict,
      Dictionary_keys(),
      Enumerator_map(key => dict[KeyedCollectionLike_get](key) as T),
    );

export default Dictionary_values;
