import Dictionary_empty from "./Dictionary/__internal__/Dictionary.empty.js";
import Dictionary_entries from "./Dictionary/__internal__/Dictionary.entries.js";
import Dictionary_forEach from "./Dictionary/__internal__/Dictionary.forEach.js";
import Dictionary_forEachWithKey from "./Dictionary/__internal__/Dictionary.forEachWithKey.js";
import Dictionary_fromEntries from "./Dictionary/__internal__/Dictionary.fromEntries.js";
import Dictionary_keep from "./Dictionary/__internal__/Dictionary.keep.js";
import Dictionary_keepType from "./Dictionary/__internal__/Dictionary.keepType.js";
import Dictionary_keepWithKey from "./Dictionary/__internal__/Dictionary.keepWithKey.js";
import Dictionary_keySet from "./Dictionary/__internal__/Dictionary.keySet.js";
import Dictionary_keys from "./Dictionary/__internal__/Dictionary.keys.js";
import Dictionary_map from "./Dictionary/__internal__/Dictionary.map.js";
import Dictionary_mapWithKey from "./Dictionary/__internal__/Dictionary.mapWithKey.js";
import Dictionary_reduce from "./Dictionary/__internal__/Dictionary.reduce.js";
import Dictionary_reduceWithKey from "./Dictionary/__internal__/Dictionary.reduceWithKey.js";
import Dictionary_toReadonlyMap from "./Dictionary/__internal__/Dictionary.toReadonlyMap.js";
import Dictionary_toReadonlyObjectMap from "./Dictionary/__internal__/Dictionary.toReadonlyObjectMap.js";
import Dictionary_values from "./Dictionary/__internal__/Dictionary.values.js";
import ReadonlyMap_toDictionary from "./ReadonlyMap/__internal__/ReadonlyMap.toDictionary.js";
import ReadonlyObjectMap_toDictionary from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.toDictionary.js";
import { identityLazy } from "./functions.js";
import {
  AssociativeCollectionContainerModule,
  Container,
  Container_T,
  Container_TKey,
  Container_type,
  DictionaryLike,
} from "./types.js";

/**
 * @noInheritDoc
 * @category Container
 */
export interface DictionaryContainer<TKey = unknown> extends Container<TKey> {
  readonly [Container_type]?: DictionaryLike<
    this[typeof Container_TKey],
    this[typeof Container_T]
  >;

  readonly [Container_TKey]?: TKey;
}

export type Type<TKey = unknown> = DictionaryContainer<TKey>;
export type TKeyBase = NonNullable<Type[typeof Container_TKey]>;

/**
 * @noInheritDoc
 * @category Module
 */
export interface DictionaryModule<TKey extends TKeyBase = TKeyBase>
  extends AssociativeCollectionContainerModule<Type<TKey>> {}

export type Signature = DictionaryModule;

/**
 * @category Functor
 */
export const CreateModule = <TKey extends TKeyBase>(): DictionaryModule<TKey> =>
  ({
    empty,
    entries,
    fromDictionary,
    fromEntries,
    forEach,
    forEachWithKey,
    fromReadonlyMap,
    fromReadonlyObjectMap,
    keep,
    keepType,
    keepWithKey,
    keys,
    keySet,
    map,
    mapWithKey,
    reduce,
    reduceWithKey,
    toDictionary,
    toReadonlyMap,
    toReadonlyObjectMap,
    values,
  } as unknown as DictionaryModule<TKey>);

export const empty: Signature["empty"] = Dictionary_empty;
export const entries: Signature["entries"] = Dictionary_entries;
export const forEach: Signature["forEach"] = Dictionary_forEach;
export const forEachWithKey: Signature["forEachWithKey"] =
  Dictionary_forEachWithKey;
export const fromDictionary: Signature["fromDictionary"] = identityLazy;
export const fromEntries: Signature["fromEntries"] = Dictionary_fromEntries;
export const fromReadonlyMap: Signature["fromReadonlyMap"] =
  ReadonlyMap_toDictionary;
export const fromReadonlyObjectMap: Signature["fromReadonlyObjectMap"] =
  ReadonlyObjectMap_toDictionary as Signature["fromReadonlyObjectMap"];
export const keep: Signature["keep"] = Dictionary_keep;
export const keepType: Signature["keepType"] = Dictionary_keepType;
export const keepWithKey: Signature["keepWithKey"] = Dictionary_keepWithKey;
export const keys: Signature["keys"] = Dictionary_keys;
export const keySet: Signature["keySet"] = Dictionary_keySet;
export const map: Signature["map"] = Dictionary_map;
export const mapWithKey: Signature["mapWithKey"] = Dictionary_mapWithKey;
export const reduce: Signature["reduce"] = Dictionary_reduce;
export const reduceWithKey: Signature["reduceWithKey"] =
  Dictionary_reduceWithKey;
export const toDictionary: Signature["toDictionary"] = identityLazy;
export const toReadonlyMap: Signature["toReadonlyMap"] =
  Dictionary_toReadonlyMap;
export const toReadonlyObjectMap: Signature["toReadonlyObjectMap"] =
  Dictionary_toReadonlyObjectMap;
export const values: Signature["values"] = Dictionary_values;
