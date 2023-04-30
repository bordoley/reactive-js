import { EnumeratorLike } from "../../../containers.js";
import Enumerator_map from "../../../containers/Enumerator/__internal__/Enumerator.map.js";
import { pipe } from "../../../functions.js";
import { KeyOf } from "../../../keyed-containers.js";
import {
  DictionaryContainerLike,
  DictionaryLike,
  KeyedCollectionLike_get,
} from "../../../util.js";
import Dictionary_keys from "./Dictionary.keys.js";

const Dictionary_values =
  <
    T,
    TKey extends KeyOf<DictionaryContainerLike> = KeyOf<DictionaryContainerLike>,
  >() =>
  (dict: DictionaryLike<TKey, T>): EnumeratorLike<T> =>
    pipe(
      dict,
      Dictionary_keys(),
      Enumerator_map(key => dict[KeyedCollectionLike_get](key) as T),
    );

export default Dictionary_values;
