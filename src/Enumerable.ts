import Enumerable_concatAll from "./Enumerable/__internal__/Enumerable.concatAll.js";
import Enumerable_concatMap from "./Enumerable/__internal__/Enumerable.concatMap.js";
import Enumerable_enumerate from "./Enumerable/__internal__/Enumerable.enumerate.js";
import Enumerable_toIterable from "./Enumerable/__internal__/Enumerable.toIterable.js";
import Enumerable_toReadonlyArray from "./Enumerable/__internal__/Enumerable.toReadonlyArray.js";
import Iterable_toRunnable from "./Iterable/__internal__/Iterable.toRunnable.js";
import { Enumerable_compute } from "./Observable/__internal__/Observable.compute.js";
import Observable_concat from "./Observable/__internal__/Observable.concat.js";
import Observable_concatWith from "./Observable/__internal__/Observable.concatWith.js";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_empty from "./Observable/__internal__/Observable.empty.js";
import Observable_endWith from "./Observable/__internal__/Observable.endWith.js";
import Observable_flatMapIterable from "./Observable/__internal__/Observable.flatMapIterable.js";
import Observable_forEach from "./Observable/__internal__/Observable.forEach.js";
import Observable_fromEnumeratorFactory from "./Observable/__internal__/Observable.fromEnumeratorFactory.js";
import Observable_fromFactory from "./Observable/__internal__/Observable.fromFactory.js";
import Observable_fromValue from "./Observable/__internal__/Observable.fromValue.js";
import Observable_keep from "./Observable/__internal__/Observable.keep.js";
import Observable_keepType from "./Observable/__internal__/Observable.keepType.js";
import Observable_map from "./Observable/__internal__/Observable.map.js";
import Observable_mapTo from "./Observable/__internal__/Observable.mapTo.js";
import Observable_pairwise from "./Observable/__internal__/Observable.pairwise.js";
import Observable_pick from "./Observable/__internal__/Observable.pick.js";
import Observable_scan from "./Observable/__internal__/Observable.scan.js";
import Observable_skipFirst from "./Observable/__internal__/Observable.skipFirst.js";
import Observable_startWith from "./Observable/__internal__/Observable.startWith.js";
import Observable_takeFirst from "./Observable/__internal__/Observable.takeFirst.js";
import Observable_takeLast from "./Observable/__internal__/Observable.takeLast.js";
import Observable_takeWhile from "./Observable/__internal__/Observable.takeWhile.js";
import Observable_zip from "./Observable/__internal__/Observable.zip.js";
import Observable_zipWith from "./Observable/__internal__/Observable.zipWith.js";
import Optional_toRunnable from "./Optional/__internal__/Optional.toRunnable.js";
import ReadonlyArray_toRunnable from "./ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import Runnable_contains from "./Runnable/__internal__/Runnable.contains.js";
import Runnable_everySatisfy from "./Runnable/__internal__/Runnable.everySatisfy.js";
import Runnable_first from "./Runnable/__internal__/Runnable.first.js";
import Runnable_last from "./Runnable/__internal__/Runnable.last.js";
import Runnable_noneSatisfy from "./Runnable/__internal__/Runnable.noneSatisfy.js";
import Runnable_reduce from "./Runnable/__internal__/Runnable.reduce.js";
import Runnable_someSatisfy from "./Runnable/__internal__/Runnable.someSatisfy.js";
import { Factory } from "./functions.js";
import { EnumerableContainerTypeClass } from "./type-classes.js";
import {
  Container,
  Container_T,
  Container_type,
  DisposableLike,
  EnumerableContainer,
  EnumerableLike,
  EnumeratorLike,
} from "./types.js";

export type Type = EnumerableContainer;

export interface DisposableEnumeratorType extends Container {
  readonly [Container_type]?: EnumeratorLike<this[typeof Container_T]> &
    DisposableLike;
}

export interface Signature
  extends EnumerableContainerTypeClass<Type, DisposableEnumeratorType> {
  compute<T>(
    computation: Factory<T>,
    options?: {
      mode?: "batched" | "combine-latest";
    },
  ): EnumerableLike<T>;
}

export const compute: Signature["compute"] = Enumerable_compute;
export const concat: Signature["concat"] = Observable_concat;
export const concatWith: Signature["concatWith"] = Observable_concatWith;
export const contains: Signature["contains"] = Runnable_contains;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Observable_distinctUntilChanged;
export const empty: Signature["empty"] = Observable_empty;
export const endWith: Signature["endWith"] = Observable_endWith;
export const enumerate: Signature["enumerate"] = Enumerable_enumerate;
export const everySatisfy: Signature["everySatisfy"] = Runnable_everySatisfy;
export const concatAll: Signature["concatAll"] = Enumerable_concatAll;
export const concatMap: Signature["concatMap"] = Enumerable_concatMap;
export const first: Signature["first"] = Runnable_first;
export const flatMapIterable: Signature["flatMapIterable"] =
  Observable_flatMapIterable;
export const forEach: Signature["forEach"] = Observable_forEach;
export const fromEnumeratorFactory: Signature["fromEnumeratorFactory"] =
  Observable_fromEnumeratorFactory;
export const fromFactory: Signature["fromFactory"] = Observable_fromFactory;
export const fromIterable: Signature["fromIterable"] = Iterable_toRunnable;
export const fromOptional: Signature["fromOptional"] = Optional_toRunnable;
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  ReadonlyArray_toRunnable;
export const fromValue: Signature["fromValue"] = Observable_fromValue;
export const keep: Signature["keep"] = Observable_keep;
export const keepType: Signature["keepType"] =
  Observable_keepType as Signature["keepType"];
export const last: Signature["last"] = Runnable_last;
export const map: Signature["map"] = Observable_map;
export const mapTo: Signature["mapTo"] = Observable_mapTo;
export const noneSatisfy: Signature["noneSatisfy"] = Runnable_noneSatisfy;
export const pairwise: Signature["pairwise"] = Observable_pairwise;
export const pick: Signature["pick"] = Observable_pick;
export const reduce: Signature["reduce"] = Runnable_reduce;
export const scan: Signature["scan"] = Observable_scan;
export const skipFirst: Signature["skipFirst"] = Observable_skipFirst;
export const someSatisfy: Signature["someSatisfy"] = Runnable_someSatisfy;
export const startWith: Signature["startWith"] = Observable_startWith;
export const takeFirst: Signature["takeFirst"] = Observable_takeFirst;
export const takeLast: Signature["takeLast"] = Observable_takeLast;
export const takeWhile: Signature["takeWhile"] = Observable_takeWhile;
export const toIterable: Signature["toIterable"] = Enumerable_toIterable;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  Enumerable_toReadonlyArray;
export const zip: Signature["zip"] = Observable_zip;
export const zipWith: Signature["zipWith"] = Observable_zipWith;
