import Dictionary_empty from "./Dictionary/__internal__/Dictionary.empty.js";
import Dictionary_entries from "./Dictionary/__internal__/Dictionary.entries.js";
import Dictionary_keys from "./Dictionary/__internal__/Dictionary.keys.js";
import Dictionary_values from "./Dictionary/__internal__/Dictionary.values.js";
import { AssociativeKeyedContainerTypeClass } from "./type-classes.js";
import {
  Container_T,
  Container_type,
  DictionaryLike,
  KeyedContainer,
  KeyedContainer_TKey,
} from "./types.js";

export interface Type<TKey = unknown> extends KeyedContainer {
  readonly [Container_type]?: DictionaryLike<
    this[typeof KeyedContainer_TKey],
    this[typeof Container_T]
  >;

  readonly [KeyedContainer_TKey]?: TKey;
}

export type TKeyBase = NonNullable<Type[typeof KeyedContainer_TKey]>;

export interface Signature<
  TType extends Type = Type,
  TKey extends TKeyBase = TKeyBase,
> extends AssociativeKeyedContainerTypeClass<TType, TKey> {}

export const empty: Signature["empty"] = Dictionary_empty;
export const entries: Signature["entries"] = Dictionary_entries;
export const keys: Signature["keys"] = Dictionary_keys;
export const values: Signature["values"] = Dictionary_values;
