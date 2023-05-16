import Dictionary_entries from "./Dictionary/__internal__/Dictionary.entries.js";
import Dictionary_forEach from "./Dictionary/__internal__/Dictionary.forEach.js";
import Dictionary_forEachWithKey from "./Dictionary/__internal__/Dictionary.forEachWithKey.js";
import Dictionary_keySet from "./Dictionary/__internal__/Dictionary.keySet.js";
import Dictionary_keys from "./Dictionary/__internal__/Dictionary.keys.js";
import Dictionary_reduce from "./Dictionary/__internal__/Dictionary.reduce.js";
import Dictionary_reduceWithKey from "./Dictionary/__internal__/Dictionary.reduceWithKey.js";
import Dictionary_values from "./Dictionary/__internal__/Dictionary.values.js";
import ReadonlyMap_toDictionary from "./ReadonlyMap/__internal__/ReadonlyMap.toDictionary.js";
import { identityLazy } from "./functions.js";
import { AssociativeKeyedContainerTypeClass } from "./type-classes.js";
import { DictionaryContainer, KeyedContainer_TKey } from "./types.js";

export type Type<TKey = unknown> = DictionaryContainer<TKey>;
export type TKeyBase = NonNullable<Type[typeof KeyedContainer_TKey]>;

export interface DictionaryModule<TKey extends TKeyBase = TKeyBase>
  extends AssociativeKeyedContainerTypeClass<Type, TKey> {}

export type Signature = DictionaryModule;

export const entries: Signature["entries"] = Dictionary_entries;
export const forEach: Signature["forEach"] = Dictionary_forEach;
export const forEachWithKey: Signature["forEachWithKey"] =
  Dictionary_forEachWithKey;
export const fromReadonlyMap: Signature["fromReadonlyMap"] =
  ReadonlyMap_toDictionary;
export const keys: Signature["keys"] = Dictionary_keys;
export const keySet: Signature["keySet"] = Dictionary_keySet;
export const reduce: Signature["reduce"] = Dictionary_reduce;
export const reduceWithKey: Signature["reduceWithKey"] =
  Dictionary_reduceWithKey;
export const toDictionary: Signature["toDictionary"] = identityLazy;
export const values: Signature["values"] = Dictionary_values;
