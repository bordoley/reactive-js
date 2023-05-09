import {
  AssociativeCollectionLike_keys,
  DictionaryContainer,
  DictionaryLike,
  EnumeratorLike,
  KeyedContainers,
} from "../../types.js";

const Dictionary_keys: KeyedContainers.TypeClass<DictionaryContainer>["keys"] =
  <
    TKey extends KeyedContainers.KeyOf<DictionaryContainer> = KeyedContainers.KeyOf<DictionaryContainer>,
  >() =>
  (dict: DictionaryLike<TKey, unknown>): EnumeratorLike<TKey> =>
    dict[AssociativeCollectionLike_keys];

export default Dictionary_keys;
