import {
  AssociativeLike_keys,
  CollectionLike_count,
  DictionaryLike,
  EnumerableLike,
  EnumerableLike_enumerate,
  EnumeratorLike_current,
  EnumeratorLike_move,
  KeyedLike_get,
} from "../../../collections.js";
import {
  Function2,
  Optional,
  isSome,
  newInstance,
  none,
  pipe,
} from "../../../functions.js";
import type * as Dictionary from "../../Dictionary.js";
import Enumerator_fromIterator from "../../Enumerator/__internal__/Enumerator.fromIterator.js";

const MappingDictionary_delegate = Symbol("MappingDictionary_delegate");

const MappingDictionary_selector = Symbol("MappingDictionary_selector");

class MappingDictionary<T, TKey, TIn> implements DictionaryLike<TKey, T> {
  [MappingDictionary_delegate]: DictionaryLike<TKey, TIn>;
  [MappingDictionary_selector]: Function2<TIn, TKey, T>;

  constructor(
    delegate: DictionaryLike<TKey, TIn>,
    mapper: Function2<TIn, TKey, T>,
  ) {
    this[MappingDictionary_delegate] = delegate;
    this[MappingDictionary_selector] = mapper;
  }

  get [AssociativeLike_keys](): EnumerableLike<TKey> {
    return this[MappingDictionary_delegate][AssociativeLike_keys];
  }

  get [CollectionLike_count](): number {
    return this[MappingDictionary_delegate][CollectionLike_count];
  }

  [KeyedLike_get](index: TKey): Optional<T> {
    const v = this[MappingDictionary_delegate][KeyedLike_get](index);
    return isSome(v) ? this[MappingDictionary_selector](v, index) : none;
  }

  *[Symbol.iterator]() {
    const enumerator =
      this[MappingDictionary_delegate][AssociativeLike_keys][
        EnumerableLike_enumerate
      ]();
    while (enumerator[EnumeratorLike_move]()) {
      const key = enumerator[EnumeratorLike_current];
      yield this[KeyedLike_get](key) as T;
    }
  }

  [EnumerableLike_enumerate]() {
    return pipe(this[Symbol.iterator](), Enumerator_fromIterator());
  }
}

const Dictionary_map: Dictionary.Signature["map"] =
  <TA, TB, TKey extends Dictionary.TKeyBase = Dictionary.TKeyBase>(
    selector: Function2<TA, TKey, TB>,
  ) =>
  (dict: DictionaryLike<TKey, TA>) =>
    newInstance(MappingDictionary<TB, TKey, TA>, dict, selector);

export default Dictionary_map;
