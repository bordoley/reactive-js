import { EnumeratorLike, KeyOf, KeyedContainer } from "../../../containers.js";
import {
  AssociativeCollectionLike_keys,
  DictionaryContainer,
  DictionaryLike,
} from "../../../util.js";

const Dictionary_keys: KeyedContainer.Keys<DictionaryContainer>["keys"] =
  <TKey extends KeyOf<DictionaryContainer> = KeyOf<DictionaryContainer>>() =>
  (dict: DictionaryLike<TKey, unknown>): EnumeratorLike<TKey> =>
    dict[AssociativeCollectionLike_keys];

export default Dictionary_keys;
