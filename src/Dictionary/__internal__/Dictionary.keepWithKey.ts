import type * as Dictionary from "../../Dictionary.js";
import Observable_count from "../../Observable/__internal__/Observable.count.js";
import Observable_keepType from "../../Observable/__internal__/Observable.keepType.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  PredicatedLike_predicate,
} from "../../__internal__/types.js";
import {
  Function2,
  Optional,
  isSome,
  newInstance,
  none,
  pipe,
} from "../../functions.js";
import {
  AssociativeCollectionLike_keys,
  CollectionLike_count,
  DictionaryLike,
  EnumerableLike,
  KeyedCollectionLike_get,
} from "../../types.js";

class KeepingDictionary<T, TKey>
  implements DictionaryLike<TKey, T>, DelegatingLike<DictionaryLike<TKey, T>>
{
  [DelegatingLike_delegate]: DictionaryLike<TKey, T>;
  [PredicatedLike_predicate]: Function2<T, TKey, boolean>;

  constructor(
    delegate: DictionaryLike<TKey, T>,
    predicate: Function2<T, TKey, boolean>,
  ) {
    this[DelegatingLike_delegate] = delegate;
    this[PredicatedLike_predicate] = predicate;
  }

  get [AssociativeCollectionLike_keys](): EnumerableLike<TKey> {
    return pipe(
      this[DelegatingLike_delegate][AssociativeCollectionLike_keys],
      Observable_map((k: TKey) => {
        const v = this[KeyedCollectionLike_get](k);
        return isSome(v) && this[PredicatedLike_predicate](v, k) ? k : none;
      }),
      Observable_keepType<Optional<TKey>, TKey>(isSome),
    );
  }

  get [CollectionLike_count](): number {
    return pipe(this[AssociativeCollectionLike_keys], Observable_count());
  }

  [KeyedCollectionLike_get](k: TKey): Optional<T> {
    const v = this[DelegatingLike_delegate][KeyedCollectionLike_get](k);
    return isSome(v) && this[PredicatedLike_predicate](v, k) ? v : none;
  }
}

const Dictionary_keepWithKey: Dictionary.Signature["keepWithKey"] =
  <T, TKey extends Dictionary.TKeyBase>(
    predicate: Function2<T, TKey, boolean>,
  ) =>
  (dict: DictionaryLike<TKey, T>) =>
    newInstance(KeepingDictionary<T, TKey>, dict, predicate);

export default Dictionary_keepWithKey;
