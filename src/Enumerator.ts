import Enumerable_enumerate from "./Enumerable/__internal__/Enumerable.enumerate.js";
import Enumerator_buffer from "./Enumerator/__internal__/Enumerator.buffer.js";
import Enumerator_concat from "./Enumerator/__internal__/Enumerator.concat.js";
import Enumerator_concatAll from "./Enumerator/__internal__/Enumerator.concatAll.js";
import Enumerator_concatMap from "./Enumerator/__internal__/Enumerator.concatMap.js";
import Enumerator_concatWith from "./Enumerator/__internal__/Enumerator.concatWith.js";
import Enumerator_contains from "./Enumerator/__internal__/Enumerator.contains.js";
import Enumerator_distinctUntilChanged from "./Enumerator/__internal__/Enumerator.distinctUntilChanged.js";
import Enumerator_empty from "./Enumerator/__internal__/Enumerator.empty.js";
import Enumerator_endWith from "./Enumerator/__internal__/Enumerator.endWith.js";
import Enumerator_everySatisfy from "./Enumerator/__internal__/Enumerator.everySatisfy.js";
import Enumerator_first from "./Enumerator/__internal__/Enumerator.first.js";
import Enumerator_flatMapIterable from "./Enumerator/__internal__/Enumerator.flatMapIterable.js";
import Enumerator_forEach from "./Enumerator/__internal__/Enumerator.forEach.js";
import Enumerator_fromEnumeratorFactory from "./Enumerator/__internal__/Enumerator.fromEnumeratorFactory.js";
import Enumerator_fromFactory from "./Enumerator/__internal__/Enumerator.fromFactory.js";
import Enumerator_fromValue from "./Enumerator/__internal__/Enumerator.fromValue.js";
import Enumerator_ignoreElements from "./Enumerator/__internal__/Enumerator.ignoreElements.js";
import Enumerator_keep from "./Enumerator/__internal__/Enumerator.keep.js";
import Enumerator_keepType from "./Enumerator/__internal__/Enumerator.keepType.js";
import Enumerator_last from "./Enumerator/__internal__/Enumerator.last.js";
import Enumerator_map from "./Enumerator/__internal__/Enumerator.map.js";
import Enumerator_mapTo from "./Enumerator/__internal__/Enumerator.mapTo.js";
import Enumerator_noneSatisfy from "./Enumerator/__internal__/Enumerator.noneSatisfy.js";
import Enumerator_pairwise from "./Enumerator/__internal__/Enumerator.pairwise.js";
import Enumerator_pick from "./Enumerator/__internal__/Enumerator.pick.js";
import Enumerator_reduce from "./Enumerator/__internal__/Enumerator.reduce.js";
import Enumerator_scan from "./Enumerator/__internal__/Enumerator.scan.js";
import Enumerator_skipFirst from "./Enumerator/__internal__/Enumerator.skipFirst.js";
import Enumerator_someSatisfy from "./Enumerator/__internal__/Enumerator.someSatisfy.js";
import Enumerator_startWith from "./Enumerator/__internal__/Enumerator.startWith.js";
import Enumerator_takeFirst from "./Enumerator/__internal__/Enumerator.takeFirst.js";
import Enumerator_takeLast from "./Enumerator/__internal__/Enumerator.takeLast.js";
import Enumerator_takeWhile from "./Enumerator/__internal__/Enumerator.takeWhile.js";
import Enumerator_toObservable from "./Enumerator/__internal__/Enumerator.toObservable.js";
import Enumerator_toReadonlyArray from "./Enumerator/__internal__/Enumerator.toReadonlyArray.js";
import Enumerator_zip from "./Enumerator/__internal__/Enumerator.zip.js";
import Enumerator_zipWith from "./Enumerator/__internal__/Enumerator.zipWith.js";
import Iterable_enumerate from "./Iterable/__internal__/Iterable.enumerate.js";
import Optional_enumerate from "./Optional/__internal__/Optional.enumerate.js";
import ReadonlyArray_enumerate from "./ReadonlyArray/__internal__/ReadonlyArray.enumerate.js";
import { Function1 } from "./functions.js";
import {
  Container,
  Container_T,
  Container_type,
  EnumerableLike,
  EnumeratorContainerTypeClass,
  EnumeratorLike,
  RunnableLike,
} from "./types.js";

/**
 * @noInheritDoc
 * @category Container
 */
export interface EnumeratorContainer extends Container {
  readonly [Container_type]?: EnumeratorLike<this[typeof Container_T]>;
}

export type Type = EnumeratorContainer;

export interface EnumeratorModule extends EnumeratorContainerTypeClass<Type> {
  toObservable<T>(): Function1<EnumeratorLike<T>, EnumerableLike<T>>;
  toObservable<T>(options: {
    readonly delay: number;
    readonly delayStart?: boolean;
  }): Function1<EnumeratorLike<T>, RunnableLike<T>>;
}

export type Signature = EnumeratorModule;

export const buffer: Signature["buffer"] = Enumerator_buffer;
export const concat: Signature["concat"] = Enumerator_concat;
export const concatAll: Signature["concatAll"] = Enumerator_concatAll;
export const concatMap: Signature["concatMap"] = Enumerator_concatMap;
export const concatWith: Signature["concatWith"] = Enumerator_concatWith;
export const contains: Signature["contains"] = Enumerator_contains;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Enumerator_distinctUntilChanged;
export const empty: Signature["empty"] = Enumerator_empty;
export const endWith: Signature["endWith"] = Enumerator_endWith;
export const everySatisfy: Signature["everySatisfy"] = Enumerator_everySatisfy;
export const first: Signature["first"] = Enumerator_first;
export const flatMapIterable: Signature["flatMapIterable"] =
  Enumerator_flatMapIterable;
export const forEach: Signature["forEach"] = Enumerator_forEach;
export const fromEnumerable: Signature["fromEnumerable"] = Enumerable_enumerate;
export const fromEnumeratorFactory: Signature["fromEnumeratorFactory"] =
  Enumerator_fromEnumeratorFactory;
export const fromFactory: Signature["fromFactory"] = Enumerator_fromFactory;
export const fromIterable: Signature["fromIterable"] = Iterable_enumerate;
export const fromOptional: Signature["fromOptional"] = Optional_enumerate;
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  ReadonlyArray_enumerate;
export const fromValue: Signature["fromValue"] = Enumerator_fromValue;
export const ignoreElements: Signature["ignoreElements"] =
  Enumerator_ignoreElements;
export const keep: Signature["keep"] = Enumerator_keep;
export const keepType: Signature["keepType"] = Enumerator_keepType;
export const last: Signature["last"] = Enumerator_last;
export const map: Signature["map"] = Enumerator_map;
export const mapTo: Signature["mapTo"] = Enumerator_mapTo;
export const noneSatisfy: Signature["noneSatisfy"] = Enumerator_noneSatisfy;
export const pairwise: Signature["pairwise"] = Enumerator_pairwise;
export const pick: Signature["pick"] = Enumerator_pick;
export const reduce: Signature["reduce"] = Enumerator_reduce;
export const scan: Signature["scan"] = Enumerator_scan;
export const skipFirst: Signature["skipFirst"] = Enumerator_skipFirst;
export const someSatisfy: Signature["someSatisfy"] = Enumerator_someSatisfy;
export const startWith: Signature["startWith"] = Enumerator_startWith;
export const takeFirst: Signature["takeFirst"] = Enumerator_takeFirst;
export const takeLast: Signature["takeLast"] = Enumerator_takeLast;
export const takeWhile: Signature["takeWhile"] = Enumerator_takeWhile;
export const toObservable: Signature["toObservable"] = Enumerator_toObservable;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  Enumerator_toReadonlyArray;
export const zip: Signature["zip"] = Enumerator_zip;
export const zipWith: Signature["zipWith"] = Enumerator_zipWith;
