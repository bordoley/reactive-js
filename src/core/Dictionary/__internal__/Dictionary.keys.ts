import {
  AssociativeCollectionLike_keys,
  DictionaryContainer,
  DictionaryLike,
  EnumeratorLike,
  KeyedContainer,
} from "../../../core.js";

const Dictionary_keys: KeyedContainer.TypeClass<DictionaryContainer>["keys"] =
  <
    TKey extends KeyedContainer.KeyOf<DictionaryContainer> = KeyedContainer.KeyOf<DictionaryContainer>,
  >() =>
  (dict: DictionaryLike<TKey, unknown>): EnumeratorLike<TKey> =>
    dict[AssociativeCollectionLike_keys];

export default Dictionary_keys;
