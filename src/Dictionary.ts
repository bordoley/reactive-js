import Dictionary_empty from "./Dictionary/__internal__/Dictionary.empty.js";
import Dictionary_entries from "./Dictionary/__internal__/Dictionary.entries.js";
import Dictionary_keys from "./Dictionary/__internal__/Dictionary.keys.js";
import Dictionary_values from "./Dictionary/__internal__/Dictionary.values.js";
import { AssociativeKeyedContainerTypeClass } from "./type-classes.js";
import {
  Container_T,
  Container_type,
  DictionaryLike,
  KeyOf,
  KeyedContainer,
  KeyedContainer_TKey,
} from "./types.js";

export interface Type extends KeyedContainer {
  readonly [Container_type]?: DictionaryLike<
    this[typeof KeyedContainer_TKey],
    this[typeof Container_T]
  >;

  readonly [KeyedContainer_TKey]?: unknown;
}

export type TKey = KeyOf<Type>;

export interface Signature extends AssociativeKeyedContainerTypeClass<Type> {}

export const empty: Signature["empty"] = Dictionary_empty;
export const entries: Signature["entries"] = Dictionary_entries;
export const keys: Signature["keys"] = Dictionary_keys;
export const values: Signature["values"] = Dictionary_values;
