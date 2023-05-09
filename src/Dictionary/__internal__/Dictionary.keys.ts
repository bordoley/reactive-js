import { DictionaryContainer, KeyedContainers } from "../../containers.js";
import {
  AssociativeCollectionLike_keys,
  DictionaryLike,
  EnumeratorLike,
} from "../../types.js";

const Dictionary_keys: KeyedContainers.TypeClass<DictionaryContainer>["keys"] =
  <
    TKey extends KeyedContainers.KeyOf<DictionaryContainer> = KeyedContainers.KeyOf<DictionaryContainer>,
  >() =>
  (dict: DictionaryLike<TKey, unknown>): EnumeratorLike<TKey> =>
    dict[AssociativeCollectionLike_keys];

export default Dictionary_keys;
