import Dictionary_toReadonlyObjectMap from "./Dictionary/__internal__/Dictionary.toReadonlyObjectMap.js";
import ReadonlyMap_toReadonlyObjectMap from "./ReadonlyMap/__internal__/ReadonlyMap.toReadonlyObjectMap.js";
import ReadonlyObjectMap_empty from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.empty.js";
import ReadonlyObjectMap_entries from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.entries.js";
import ReadonlyObjectMap_forEach from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.forEach.js";
import ReadonlyObjectMap_forEachWithKey from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.forEachWithKey.js";
import ReadonlyObjectMap_fromEntries from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.fromEntries.js";
import ReadonlyObjectMap_keep from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.keep.js";
import ReadonlyObjectMap_keepWithKey from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.keepWithKey.js";
import ReadonlyObjectMap_keySet from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.keySet.js";
import ReadonlyObjectMap_keys from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.keys.js";
import ReadonlyObjectMap_map from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.map.js";
import ReadonlyObjectMap_mapWithKey from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.mapWithKey.js";
import ReadonlyObjectMap_reduce from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.reduce.js";
import ReadonlyObjectMap_reduceWithKey from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.reduceWithKey.js";
import ReadonlyObjectMap_toDictionary from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.toDictionary.js";
import ReadonlyObjectMap_toReadonlyMap from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.toReadonlyMap.js";
import ReadonlyObjectMap_values from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.values.js";
import { identityLazy } from "./functions.js";
import {
  AssociativeCollectionContainerModule,
  Container,
  Container_T,
  Container_TKey,
  Container_type,
  KeyOf,
  ReadonlyObjectMapLike,
} from "./types.js";

/**
 * @noInheritDoc
 * @category Container
 */
export interface ReadonlyObjectMapContainer<
  TKey extends symbol | string = symbol | string,
> extends Container {
  readonly [Container_type]?: ReadonlyObjectMapLike<
    NonNullable<this[typeof Container_TKey]>,
    this[typeof Container_T]
  >;

  readonly [Container_TKey]?: TKey;
}

export type Type<TKey extends symbol | string = symbol | string> =
  ReadonlyObjectMapContainer<TKey>;

export type TKeyBase = KeyOf<Type>;

/**
 * @noInheritDoc
 * @category Module
 */
export interface ReadonlyObjectMapModule<TKey extends TKeyBase = TKeyBase>
  extends AssociativeCollectionContainerModule<Type<TKey>> {}

export type Signature = ReadonlyObjectMapModule;

/**
 * @category Functor
 */
export const CreateModule = <
  TKey extends TKeyBase,
>(): ReadonlyObjectMapModule<TKey> =>
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
  } as ReadonlyObjectMapModule<TKey>);

export const empty: Signature["empty"] = ReadonlyObjectMap_empty;
export const entries: Signature["entries"] = ReadonlyObjectMap_entries;
export const forEach: Signature["forEach"] = ReadonlyObjectMap_forEach;
export const forEachWithKey: Signature["forEachWithKey"] =
  ReadonlyObjectMap_forEachWithKey;
export const fromDictionary: Signature["fromDictionary"] =
  Dictionary_toReadonlyObjectMap as Signature["fromDictionary"];
export const fromEntries: Signature["fromEntries"] =
  ReadonlyObjectMap_fromEntries;
export const fromReadonlyMap: Signature["fromReadonlyMap"] =
  ReadonlyMap_toReadonlyObjectMap as Signature["fromReadonlyMap"];
export const fromReadonlyObjectMap: Signature["fromReadonlyObjectMap"] =
  identityLazy as Signature["fromReadonlyObjectMap"];
export const keep: Signature["keep"] = ReadonlyObjectMap_keep;
export const keepWithKey: Signature["keepWithKey"] =
  ReadonlyObjectMap_keepWithKey;
export const keys: Signature["keys"] = ReadonlyObjectMap_keys;
export const keySet: Signature["keySet"] = ReadonlyObjectMap_keySet;
export const map: Signature["map"] = ReadonlyObjectMap_map;
export const mapWithKey: Signature["mapWithKey"] = ReadonlyObjectMap_mapWithKey;
export const reduce: Signature["reduce"] = ReadonlyObjectMap_reduce;
export const reduceWithKey: Signature["reduceWithKey"] =
  ReadonlyObjectMap_reduceWithKey;
export const toDictionary: Signature["toDictionary"] =
  ReadonlyObjectMap_toDictionary;
export const toReadonlyMap: Signature["toReadonlyMap"] =
  ReadonlyObjectMap_toReadonlyMap;
export const toReadonlyObjectMap: Signature["toReadonlyObjectMap"] =
  identityLazy as Signature["toReadonlyObjectMap"];
export const values: Signature["values"] = ReadonlyObjectMap_values;
