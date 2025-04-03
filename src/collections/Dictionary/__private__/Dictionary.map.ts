import {
  DictionaryLike,
  DictionaryLike_get,
  DictionaryLike_keys,
} from "../../../collections.js";
import { PureIterableLike } from "../../../computations.js";
import {
  Function2,
  Optional,
  isSome,
  newInstance,
  none,
} from "../../../functions.js";
import type * as Dictionary from "../../Dictionary.js";

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

  get [DictionaryLike_keys](): PureIterableLike<TKey> {
    return this[MappingDictionary_delegate][DictionaryLike_keys];
  }

  [DictionaryLike_get](index: TKey): Optional<T> {
    const v = this[MappingDictionary_delegate][DictionaryLike_get](index);
    return isSome(v) ? this[MappingDictionary_selector](v, index) : none;
  }
}

const Dictionary_map: Dictionary.Signature["map"] =
  <TA, TB, TKey extends Dictionary.TKeyBase = Dictionary.TKeyBase>(
    selector: Function2<TA, TKey, TB>,
  ) =>
  (dict: DictionaryLike<TKey, TA>) =>
    newInstance(MappingDictionary<TB, TKey, TA>, dict, selector);

export default Dictionary_map;
