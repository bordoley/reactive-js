import { EnumeratorLike } from "../../../containers.js";
import { KeyOf, Keys } from "../../../keyed-containers.js";
import {
  AssociativeCollectionLike_keys,
  DictionaryLike,
} from "../../../util.js";

const Dictionary_keys: Keys<DictionaryLike>["keys"] =
  <TKey extends KeyOf<DictionaryLike> = KeyOf<DictionaryLike>>() =>
  (dict: DictionaryLike<unknown, TKey>): EnumeratorLike<TKey> =>
    dict[AssociativeCollectionLike_keys];

export default Dictionary_keys;
