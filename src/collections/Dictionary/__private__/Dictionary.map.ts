import {
  DictionaryLike,
  DictionaryLike_count,
  DictionaryLike_get,
  DictionaryLike_keys,
  EnumerableLike,
  EnumerableLike_enumerate,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../../collections.js";
import {
  Function2,
  Optional,
  isSome,
  newInstance,
  none,
} from "../../../functions.js";
import type * as Dictionary from "../../Dictionary.js";
import EnumerableIterable from "../../__classes__/EnumerableIterable.js";

const MappingDictionary_delegate = Symbol("MappingDictionary_delegate");

const MappingDictionary_selector = Symbol("MappingDictionary_selector");

class MappingDictionary<T, TKey, TIn>
  extends EnumerableIterable<T>
  implements DictionaryLike<TKey, T>
{
  [MappingDictionary_delegate]: DictionaryLike<TKey, TIn>;
  [MappingDictionary_selector]: Function2<TIn, TKey, T>;

  constructor(
    delegate: DictionaryLike<TKey, TIn>,
    mapper: Function2<TIn, TKey, T>,
  ) {
    super();

    this[MappingDictionary_delegate] = delegate;
    this[MappingDictionary_selector] = mapper;
  }

  get [DictionaryLike_keys](): EnumerableLike<TKey> {
    return this[MappingDictionary_delegate][DictionaryLike_keys];
  }

  get [DictionaryLike_count](): number {
    return this[MappingDictionary_delegate][DictionaryLike_count];
  }

  [DictionaryLike_get](index: TKey): Optional<T> {
    const v = this[MappingDictionary_delegate][DictionaryLike_get](index);
    return isSome(v) ? this[MappingDictionary_selector](v, index) : none;
  }

  *[Symbol.iterator]() {
    const enumerator =
      this[MappingDictionary_delegate][DictionaryLike_keys][
        EnumerableLike_enumerate
      ]();
    while (enumerator[EnumeratorLike_move]()) {
      const key = enumerator[EnumeratorLike_current];
      yield this[DictionaryLike_get](key) as T;
    }
  }
}

const Dictionary_map: Dictionary.Signature["map"] =
  <TA, TB, TKey extends Dictionary.TKeyBase = Dictionary.TKeyBase>(
    selector: Function2<TA, TKey, TB>,
  ) =>
  (dict: DictionaryLike<TKey, TA>) =>
    newInstance(MappingDictionary<TB, TKey, TA>, dict, selector);

export default Dictionary_map;
