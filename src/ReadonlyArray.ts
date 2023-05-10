import Iterable_toReadonlyArray from "./Iterable/__internal__/Iterable.toReadonlyArray.js";
import Optional_toReadonlyArray from "./Optional/__internal__/Optional.toReadonlyArray.js";
import ReadonlyArray_empty from "./ReadonlyArray/__internal__/ReadonlyArray.empty.js";
import ReadonlyArray_entries from "./ReadonlyArray/__internal__/ReadonlyArray.entries.js";
import ReadonlyArray_enumerate from "./ReadonlyArray/__internal__/ReadonlyArray.enumerate.js";
import ReadonlyArray_everySatisfy from "./ReadonlyArray/__internal__/ReadonlyArray.everySatisfy.js";
import ReadonlyArray_first from "./ReadonlyArray/__internal__/ReadonlyArray.first.js";
import ReadonlyArray_forEach from "./ReadonlyArray/__internal__/ReadonlyArray.forEach.js";
import ReadonlyArray_forEachWithKey from "./ReadonlyArray/__internal__/ReadonlyArray.forEachWithKey.js";
import ReadonlyArray_keep from "./ReadonlyArray/__internal__/ReadonlyArray.keep.js";
import ReadonlyArray_keepType from "./ReadonlyArray/__internal__/ReadonlyArray.keepType.js";
import ReadonlyArray_keepWithKey from "./ReadonlyArray/__internal__/ReadonlyArray.keepWithKey.js";
import ReadonlyArray_last from "./ReadonlyArray/__internal__/ReadonlyArray.last.js";
import ReadonlyArray_map from "./ReadonlyArray/__internal__/ReadonlyArray.map.js";
import ReadonlyArray_mapWithKey from "./ReadonlyArray/__internal__/ReadonlyArray.mapWithKey.js";
import ReadonlyArray_someSatisfy from "./ReadonlyArray/__internal__/ReadonlyArray.someSatisfy.js";
import ReadonlyArray_toReadonlyArray from "./ReadonlyArray/__internal__/ReadonlyArray.toReadonlyArray.js";
import { Function1 } from "./functions.js";
import {
  DeferredTypeClass,
  KeyedContainerTypeClass,
  RunnableTypeClass,
} from "./type-classes.js";
import {
  Container_T,
  Container_type,
  EnumeratorLike,
  KeyOf,
  KeyedContainer,
  KeyedContainer_TKey,
} from "./types.js";

export interface Type extends KeyedContainer {
  readonly [Container_type]?: ReadonlyArray<this[typeof Container_T]>;

  readonly [KeyedContainer_TKey]?: number;
}

export type TKey = KeyOf<Type>;

export interface Signature
  extends KeyedContainerTypeClass<Type>,
    DeferredTypeClass<Type>,
    RunnableTypeClass<Type> {
  empty: KeyedContainerTypeClass<Type>["empty"];
  /**
   *
   * @category Transform
   */
  enumerate<T>(options?: {
    readonly start?: number;
    readonly count?: number;
  }): Function1<ReadonlyArray<T>, EnumeratorLike<T>>;
  fromReadonlyArray: KeyedContainerTypeClass<Type>["fromReadonlyArray"];
  reduce: KeyedContainerTypeClass<Type>["reduce"];
  /** @category Transform */
  toIterable<T>(options?: {
    readonly count?: number;
    readonly start?: number;
  }): Function1<ReadonlyArray<T>, Iterable<T>>;
  toReadonlyArray: KeyedContainerTypeClass<Type>["toReadonlyArray"];
}

export const empty: Signature["empty"] = ReadonlyArray_empty;
export const entries: Signature["entries"] = ReadonlyArray_entries;
export const enumerate: Signature["enumerate"] = ReadonlyArray_enumerate;
export const everySatisfy: Signature["everySatisfy"] =
  ReadonlyArray_everySatisfy;
export const first: Signature["first"] = ReadonlyArray_first;
export const forEach: Signature["forEach"] = ReadonlyArray_forEach;
export const forEachWithKey: Signature["forEachWithKey"] =
  ReadonlyArray_forEachWithKey;
export const fromIterable: Signature["fromIterable"] = Iterable_toReadonlyArray;
export const fromOptional: Signature["fromOptional"] = Optional_toReadonlyArray;
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  ReadonlyArray_toReadonlyArray;
export const keep: Signature["keep"] = ReadonlyArray_keep;
export const keepType: Signature["keepType"] = ReadonlyArray_keepType;
export const keepWithKey: Signature["keepWithKey"] = ReadonlyArray_keepWithKey;
export const last: Signature["last"] = ReadonlyArray_last;
export const map: Signature["map"] = ReadonlyArray_map;
export const mapWithKey: Signature["mapWithKey"] = ReadonlyArray_mapWithKey;
export const someSatisfy: Signature["someSatisfy"] = ReadonlyArray_someSatisfy;
export const toIterable: Signature["toIterable"] =
  ReadonlyArray_toReadonlyArray;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  ReadonlyArray_toReadonlyArray;
