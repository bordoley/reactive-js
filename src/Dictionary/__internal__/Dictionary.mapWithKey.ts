import type * as Dictionary from "../../Dictionary.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  MappingLike_selector,
} from "../../__internal__/types.js";
import {
  Function2,
  Optional,
  isSome,
  newInstance,
  none,
} from "../../functions.js";
import {
  AssociativeCollectionLike_keys,
  CollectionLike_count,
  DictionaryLike,
  EnumerableLike,
  KeyedCollectionLike_get,
} from "../../types.js";

class MappingDictionary<T, TKey, TIn>
  implements DictionaryLike<TKey, T>, DelegatingLike<DictionaryLike<TKey, TIn>>
{
  [DelegatingLike_delegate]: DictionaryLike<TKey, TIn>;
  [MappingLike_selector]: Function2<TIn, TKey, T>;

  constructor(
    delegate: DictionaryLike<TKey, TIn>,
    mapper: Function2<TIn, TKey, T>,
  ) {
    this[DelegatingLike_delegate] = delegate;
    this[MappingLike_selector] = mapper;
  }

  get [AssociativeCollectionLike_keys](): EnumerableLike<TKey> {
    return this[DelegatingLike_delegate][AssociativeCollectionLike_keys];
  }

  get [CollectionLike_count](): number {
    return this[DelegatingLike_delegate][CollectionLike_count];
  }

  [KeyedCollectionLike_get](index: TKey): Optional<T> {
    const v = this[DelegatingLike_delegate][KeyedCollectionLike_get](index);
    return isSome(v) ? this[MappingLike_selector](v, index) : none;
  }
}

const Dictionary_mapWithKey: Dictionary.Signature["mapWithKey"] =
  <TA, TB, TKey extends Dictionary.TKeyBase = Dictionary.TKeyBase>(
    selector: Function2<TA, TKey, TB>,
  ) =>
  (dict: DictionaryLike<TKey, TA>) =>
    newInstance(MappingDictionary<TB, TKey, TA>, dict, selector);

export default Dictionary_mapWithKey;
