import Enumerator_empty from "../../Enumerator/__internal__/Enumerator.empty.js";
import { none } from "../../functions.js";
import {
  AssociativeCollectionLike_keys,
  CollectionLike_count,
  DictionaryLike,
  KeyedCollectionLike_get,
} from "../../types.js";

const empty: DictionaryLike = {
  [AssociativeCollectionLike_keys]: /*@__PURE__*/ Enumerator_empty(),
  [KeyedCollectionLike_get](_: unknown): unknown {
    return none;
  },
  [CollectionLike_count]: 0,
};

const Dictionary_empty = <T, TKey>(): DictionaryLike<T, TKey> =>
  empty as DictionaryLike<T, TKey>;

export default Dictionary_empty;
