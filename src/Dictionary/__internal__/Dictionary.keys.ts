import { DictionaryContainer } from "../../containers.js";
import {
  AssociativeCollectionLike_keys,
  DictionaryLike,
  EnumeratorLike,
} from "../../types.js";

const Dictionary_keys: DictionaryContainer.TypeClass["keys"] =
  <TKey extends DictionaryContainer.TKey = DictionaryContainer.TKey>() =>
  (dict: DictionaryLike<TKey, unknown>): EnumeratorLike<TKey> =>
    dict[AssociativeCollectionLike_keys];

export default Dictionary_keys;
