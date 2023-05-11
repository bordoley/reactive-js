import Dictionary_entries from "./Dictionary/__internal__/Dictionary.entries.js";
import Dictionary_keys from "./Dictionary/__internal__/Dictionary.keys.js";
import Dictionary_values from "./Dictionary/__internal__/Dictionary.values.js";
import { AssociativeKeyedContainerTypeClass } from "./type-classes.js";
import { DictionaryContainer, KeyedContainer_TKey } from "./types.js";

export type Type<TKey = unknown> = DictionaryContainer<TKey>;
export type TKeyBase = NonNullable<Type[typeof KeyedContainer_TKey]>;

export interface Signature<
  TType extends Type = Type,
  TKey extends TKeyBase = TKeyBase,
> extends AssociativeKeyedContainerTypeClass<TType, TKey> {}

export const entries: Signature["entries"] = Dictionary_entries;
export const keys: Signature["keys"] = Dictionary_keys;
export const values: Signature["values"] = Dictionary_values;
