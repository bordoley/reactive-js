import Enumerable_toEnumeratorFactory from "./Enumerable/__internal__/Enumerable.toEnumeratorFactory.js";
import EnumeratorFactory_buffer from "./EnumeratorFactory/__internal__/EnumeratorFactory.buffer.js";
import EnumeratorFactory_concat from "./EnumeratorFactory/__internal__/EnumeratorFactory.concat.js";
import EnumeratorFactory_concatAll from "./EnumeratorFactory/__internal__/EnumeratorFactory.concatAll.js";
import EnumeratorFactory_concatMap from "./EnumeratorFactory/__internal__/EnumeratorFactory.concatMap.js";
import EnumeratorFactory_concatWith from "./EnumeratorFactory/__internal__/EnumeratorFactory.concatWith.js";
import EnumeratorFactory_contains from "./EnumeratorFactory/__internal__/EnumeratorFactory.contains.js";
import EnumeratorFactory_distinctUntilChanged from "./EnumeratorFactory/__internal__/EnumeratorFactory.distinctUntilChanged.js";
import EnumeratorFactory_empty from "./EnumeratorFactory/__internal__/EnumeratorFactory.empty.js";
import EnumeratorFactory_endWith from "./EnumeratorFactory/__internal__/EnumeratorFactory.endWith.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory/__internal__/EnumeratorFactory.enumerate.js";
import EnumeratorFactory_everySatisfy from "./EnumeratorFactory/__internal__/EnumeratorFactory.everySatisfy.js";
import EnumeratorFactory_first from "./EnumeratorFactory/__internal__/EnumeratorFactory.first.js";
import EnumeratorFactory_flatMapIterable from "./EnumeratorFactory/__internal__/EnumeratorFactory.flatMapIterable.js";
import EnumeratorFactory_forEach from "./EnumeratorFactory/__internal__/EnumeratorFactory.forEach.js";
import EnumeratorFactory_fromFactory from "./EnumeratorFactory/__internal__/EnumeratorFactory.fromFactory.js";
import EnumeratorFactory_fromValue from "./EnumeratorFactory/__internal__/EnumeratorFactory.fromValue.js";
import EnumeratorFactory_ignoreElements from "./EnumeratorFactory/__internal__/EnumeratorFactory.ignoreElements.js";
import EnumeratorFactory_keep from "./EnumeratorFactory/__internal__/EnumeratorFactory.keep.js";
import EnumeratorFactory_keepType from "./EnumeratorFactory/__internal__/EnumeratorFactory.keepType.js";
import EnumeratorFactory_last from "./EnumeratorFactory/__internal__/EnumeratorFactory.last.js";
import EnumeratorFactory_map from "./EnumeratorFactory/__internal__/EnumeratorFactory.map.js";
import EnumeratorFactory_mapTo from "./EnumeratorFactory/__internal__/EnumeratorFactory.mapTo.js";
import EnumeratorFactory_noneSatisfy from "./EnumeratorFactory/__internal__/EnumeratorFactory.noneSatisfy.js";
import EnumeratorFactory_pairwise from "./EnumeratorFactory/__internal__/EnumeratorFactory.pairwise.js";
import EnumeratorFactory_pick from "./EnumeratorFactory/__internal__/EnumeratorFactory.pick.js";
import EnumeratorFactory_reduce from "./EnumeratorFactory/__internal__/EnumeratorFactory.reduce.js";
import EnumeratorFactory_repeat from "./EnumeratorFactory/__internal__/EnumeratorFactory.repeat.js";
import EnumeratorFactory_scan from "./EnumeratorFactory/__internal__/EnumeratorFactory.scan.js";
import EnumeratorFactory_skipFirst from "./EnumeratorFactory/__internal__/EnumeratorFactory.skipFirst.js";
import EnumeratorFactory_someSatisfy from "./EnumeratorFactory/__internal__/EnumeratorFactory.someSatisfy.js";
import EnumeratorFactory_startWith from "./EnumeratorFactory/__internal__/EnumeratorFactory.startWith.js";
import EnumeratorFactory_takeFirst from "./EnumeratorFactory/__internal__/EnumeratorFactory.takeFirst.js";
import EnumeratorFactory_takeLast from "./EnumeratorFactory/__internal__/EnumeratorFactory.takeLast.js";
import EnumeratorFactory_takeWhile from "./EnumeratorFactory/__internal__/EnumeratorFactory.takeWhile.js";
import EnumeratorFactory_toIterable from "./EnumeratorFactory/__internal__/EnumeratorFactory.toIterable.js";
import EnumeratorFactory_toObservable from "./EnumeratorFactory/__internal__/EnumeratorFactory.toObservable.js";
import EnumeratorFactory_toReadonlyArray from "./EnumeratorFactory/__internal__/EnumeratorFactory.toReadonlyArray.js";
import EnumeratorFactory_zip from "./EnumeratorFactory/__internal__/EnumeratorFactory.zip.js";
import EnumeratorFactory_zipWith from "./EnumeratorFactory/__internal__/EnumeratorFactory.zipWith.js";
import Iterable_toEnumeratorFactory from "./Iterable/__internal__/Iterable.toEnumeratorFactory.js";
import Optional_toEnumeratorFactory from "./Optional/__internal__/Optional.toEnumeratorFactory.js";
import ReadonlyArray_toEnumeratorFactory from "./ReadonlyArray/__internal__/ReadonlyArray.toEnumeratorFactory.js";
import { Function1, identityLazy } from "./functions.js";
import {
  Container,
  Container_T,
  Container_type,
  EnumerableContainerTypeClass,
  EnumerableLike,
  EnumeratorFactoryLike,
  EnumeratorLike,
  RunnableLike,
} from "./types.js";

/**
 * @noInheritDoc
 * @category Container
 */
export interface EnumeratorFactoryContainer extends Container {
  readonly [Container_type]?: EnumeratorFactoryLike<this[typeof Container_T]>;
}

export type Type = EnumeratorFactoryContainer;

export interface EnumeratorFactoryModule
  extends EnumerableContainerTypeClass<Type> {
  toObservable<T>(): Function1<EnumeratorFactoryLike<T>, EnumerableLike<T>>;
  toObservable<T>(options: {
    readonly delay: number;
    readonly delayStart?: boolean;
  }): Function1<EnumeratorLike<T>, RunnableLike<T>>;
}

export type Signature = EnumeratorFactoryModule;

export const buffer: Signature["buffer"] = EnumeratorFactory_buffer;
export const concat: Signature["concat"] = EnumeratorFactory_concat;
export const concatAll: Signature["concatAll"] = EnumeratorFactory_concatAll;
export const concatMap: Signature["concatMap"] = EnumeratorFactory_concatMap;
export const concatWith: Signature["concatWith"] = EnumeratorFactory_concatWith;
export const contains: Signature["contains"] = EnumeratorFactory_contains;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  EnumeratorFactory_distinctUntilChanged;
export const empty: Signature["empty"] = EnumeratorFactory_empty;
export const endWith: Signature["endWith"] = EnumeratorFactory_endWith;
export const enumerate: Signature["enumerate"] = EnumeratorFactory_enumerate;
export const everySatisfy: Signature["everySatisfy"] =
  EnumeratorFactory_everySatisfy;
export const first: Signature["first"] = EnumeratorFactory_first;
export const flatMapIterable: Signature["flatMapIterable"] =
  EnumeratorFactory_flatMapIterable;
export const forEach: Signature["forEach"] = EnumeratorFactory_forEach;
export const fromEnumerable: Signature["fromEnumerable"] =
  Enumerable_toEnumeratorFactory;
export const fromEnumeratorFactory: Signature["fromEnumeratorFactory"] =
  identityLazy;
export const fromFactory: Signature["fromFactory"] =
  EnumeratorFactory_fromFactory;
export const fromIterable: Signature["fromIterable"] =
  Iterable_toEnumeratorFactory;
export const fromOptional: Signature["fromOptional"] =
  Optional_toEnumeratorFactory;
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  ReadonlyArray_toEnumeratorFactory;
export const fromValue: Signature["fromValue"] = EnumeratorFactory_fromValue;
export const ignoreElements: Signature["ignoreElements"] =
  EnumeratorFactory_ignoreElements;
export const keep: Signature["keep"] = EnumeratorFactory_keep;
export const keepType: Signature["keepType"] =
  EnumeratorFactory_keepType as Signature["keepType"];
export const last: Signature["last"] = EnumeratorFactory_last;
export const map: Signature["map"] = EnumeratorFactory_map;
export const mapTo: Signature["mapTo"] = EnumeratorFactory_mapTo;
export const noneSatisfy: Signature["noneSatisfy"] =
  EnumeratorFactory_noneSatisfy;
export const pairwise: Signature["pairwise"] = EnumeratorFactory_pairwise;
export const pick: Signature["pick"] = EnumeratorFactory_pick;
export const reduce: Signature["reduce"] = EnumeratorFactory_reduce;
export const repeat: Signature["repeat"] = EnumeratorFactory_repeat;
export const scan: Signature["scan"] = EnumeratorFactory_scan;
export const skipFirst: Signature["skipFirst"] = EnumeratorFactory_skipFirst;
export const someSatisfy: Signature["someSatisfy"] =
  EnumeratorFactory_someSatisfy;
export const startWith: Signature["startWith"] = EnumeratorFactory_startWith;
export const takeFirst: Signature["takeFirst"] = EnumeratorFactory_takeFirst;
export const takeLast: Signature["takeLast"] = EnumeratorFactory_takeLast;
export const takeWhile: Signature["takeWhile"] = EnumeratorFactory_takeWhile;
export const toIterable: Signature["toIterable"] = EnumeratorFactory_toIterable;
export const toEnumeratorFactory: Signature["toEnumeratorFactory"] =
  identityLazy;
export const toObservable: Signature["toObservable"] =
  EnumeratorFactory_toObservable;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  EnumeratorFactory_toReadonlyArray;
export const zip: Signature["zip"] = EnumeratorFactory_zip;
export const zipWith: Signature["zipWith"] = EnumeratorFactory_zipWith;
