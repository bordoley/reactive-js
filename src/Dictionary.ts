import Dictionary_entries from "./Dictionary/__internal__/Dictionary.entries.js";
import Dictionary_forEach from "./Dictionary/__internal__/Dictionary.forEach.js";
import Dictionary_forEachWithKey from "./Dictionary/__internal__/Dictionary.forEachWithKey.js";
import Dictionary_keySet from "./Dictionary/__internal__/Dictionary.keySet.js";
import Dictionary_keys from "./Dictionary/__internal__/Dictionary.keys.js";
import Dictionary_reduce from "./Dictionary/__internal__/Dictionary.reduce.js";
import Dictionary_reduceWithKey from "./Dictionary/__internal__/Dictionary.reduceWithKey.js";
import Dictionary_toReadonlyMap from "./Dictionary/__internal__/Dictionary.toReadonlyMap.js";
import Dictionary_toReadonlyObjectMap from "./Dictionary/__internal__/Dictionary.toReadonlyObjectMap.js";
import Dictionary_values from "./Dictionary/__internal__/Dictionary.values.js";
import ReadonlyMap_toDictionary from "./ReadonlyMap/__internal__/ReadonlyMap.toDictionary.js";
import ReadonlyObjectMap_toDictionary from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.toDictionary.js";
import { identityLazy } from "./functions.js";
import {
  AssociativeKeyedContainerModule,
  Container_T,
  Container_type,
  DictionaryLike,
  KeyedContainer,
  KeyedContainer_TKey,
} from "./types.js";

/**
 * @noInheritDoc
 * @category Container
 */
export interface DictionaryContainer<TKey = unknown> extends KeyedContainer {
  readonly [Container_type]?: DictionaryLike<
    this[typeof KeyedContainer_TKey],
    this[typeof Container_T]
  >;

  readonly [KeyedContainer_TKey]?: TKey;
}

export type Type<TKey = unknown> = DictionaryContainer<TKey>;
export type TKeyBase = NonNullable<Type[typeof KeyedContainer_TKey]>;

/**
 * @noInheritDoc
 */
export interface DictionaryModule<
  TType extends Type = Type,
  TKey extends TKeyBase = TKeyBase,
> extends AssociativeKeyedContainerModule<TType, TKey> {}

export type Signature = DictionaryModule;

/**
 * @category Functor
 */
export const CreateModule = <TKey extends TKeyBase>(): DictionaryModule<
  Type<TKey>,
  TKey
> =>
  ({
    entries: Dictionary_entries,
    forEach: Dictionary_forEach,
    forEachWithKey: Dictionary_forEachWithKey,
    fromReadonlyObjectMap: ReadonlyObjectMap_toDictionary,
    fromReadonlyMap: ReadonlyMap_toDictionary,
    keys: Dictionary_keys,
    keySet: Dictionary_keySet,
    reduce: Dictionary_reduce,
    reduceWithKey: Dictionary_reduceWithKey,
    toDictionary: identityLazy,
    toReadonlyMap: Dictionary_toReadonlyMap,
    toReadonlyObjectMap: Dictionary_toReadonlyObjectMap,
    values: Dictionary_values,
  } as DictionaryModule<Type<TKey>, TKey>);

export const entries: Signature["entries"] = Dictionary_entries;
export const forEach: Signature["forEach"] = Dictionary_forEach;
export const forEachWithKey: Signature["forEachWithKey"] =
  Dictionary_forEachWithKey;
export const fromReadonlyMap: Signature["fromReadonlyMap"] =
  ReadonlyMap_toDictionary;
export const fromReadonlyObjectMap: Signature["fromReadonlyObjectMap"] =
  ReadonlyObjectMap_toDictionary as Signature["fromReadonlyObjectMap"];
export const keys: Signature["keys"] = Dictionary_keys;
export const keySet: Signature["keySet"] = Dictionary_keySet;
export const reduce: Signature["reduce"] = Dictionary_reduce;
export const reduceWithKey: Signature["reduceWithKey"] =
  Dictionary_reduceWithKey;
export const toDictionary: Signature["toDictionary"] = identityLazy;
export const toReadonlyMap: Signature["toReadonlyMap"] =
  Dictionary_toReadonlyMap;
export const toReadonlyObjectMap: Signature["toReadonlyObjectMap"] =
  Dictionary_toReadonlyObjectMap;
export const values: Signature["values"] = Dictionary_values;
