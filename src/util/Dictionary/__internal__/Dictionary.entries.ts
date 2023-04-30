import { EnumeratorLike } from "../../../containers.js";
import Enumerator_map from "../../../containers/Enumerator/__internal__/Enumerator.map.js";
import { pipe } from "../../../functions.js";
import { KeyOf } from "../../../keyed-containers.js";
import {
  DictionaryContainer,
  DictionaryLike,
  KeyedCollectionLike_get,
} from "../../../util.js";
import Dictionary_keys from "./Dictionary.keys.js";

const Dictionary_entries =
  <T, TKey extends KeyOf<DictionaryContainer> = KeyOf<DictionaryContainer>>() =>
  (dict: DictionaryLike<TKey, T>): EnumeratorLike<[TKey, T]> =>
    pipe(
      dict,
      Dictionary_keys(),
      Enumerator_map(key => [key, dict[KeyedCollectionLike_get](key) as T]),
    );

export default Dictionary_entries;
