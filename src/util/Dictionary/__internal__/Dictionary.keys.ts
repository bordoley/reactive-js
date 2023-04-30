import { EnumeratorLike } from "../../../containers.js";
import { KeyOf, Keys } from "../../../keyed-containers.js";
import {
  AssociativeCollectionLike_keys,
  DictionaryContainerLike,
  DictionaryLike,
} from "../../../util.js";

const Dictionary_keys: Keys<DictionaryContainerLike>["keys"] =
  <
    TKey extends KeyOf<DictionaryContainerLike> = KeyOf<DictionaryContainerLike>,
  >() =>
  (dict: DictionaryLike<unknown, TKey>): EnumeratorLike<TKey> =>
    dict[AssociativeCollectionLike_keys];

export default Dictionary_keys;
