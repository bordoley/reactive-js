import {
  AssociativeCollectionLike_keys,
  DictionaryContainer,
  DictionaryLike,
  EnumeratorLike,
  KeyOf,
  KeyedContainer,
} from "../../../containers.js";

const Dictionary_keys: KeyedContainer.Keys<DictionaryContainer>["keys"] =
  <TKey extends KeyOf<DictionaryContainer> = KeyOf<DictionaryContainer>>() =>
  (dict: DictionaryLike<TKey, unknown>): EnumeratorLike<TKey> =>
    dict[AssociativeCollectionLike_keys];

export default Dictionary_keys;
