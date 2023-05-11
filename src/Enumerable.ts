import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_forEach from "./Observable/__internal__/Observable.forEach.js";
import Observable_keep from "./Observable/__internal__/Observable.keep.js";
import Observable_lastAsync from "./Observable/__internal__/Observable.lastAsync.js";
import Observable_map from "./Observable/__internal__/Observable.map.js";
import Observable_mapTo from "./Observable/__internal__/Observable.mapTo.js";
import Observable_pairwise from "./Observable/__internal__/Observable.pairwise.js";
import Observable_scan from "./Observable/__internal__/Observable.scan.js";
import Observable_skipFirst from "./Observable/__internal__/Observable.skipFirst.js";
import Observable_takeFirst from "./Observable/__internal__/Observable.takeFirst.js";
import Observable_takeLast from "./Observable/__internal__/Observable.takeLast.js";
import Observable_takeWhile from "./Observable/__internal__/Observable.takeWhile.js";
import Runnable_contains from "./Runnable/__internal__/Runnable.contains.js";
import Runnable_everySatisfy from "./Runnable/__internal__/Runnable.everySatisfy.js";
import Runnable_first from "./Runnable/__internal__/Runnable.first.js";
import Runnable_last from "./Runnable/__internal__/Runnable.last.js";
import Runnable_noneSatisfy from "./Runnable/__internal__/Runnable.noneSatisfy.js";
import Runnable_reduce from "./Runnable/__internal__/Runnable.reduce.js";
import Runnable_someSatisfy from "./Runnable/__internal__/Runnable.someSatisfy.js";
import Runnable_toReadonlyArray from "./Runnable/__internal__/Runnable.toReadonlyArray.js";
import { EnumerableContainerTypeClass } from "./type-classes.js";
import {
  Container,
  Container_T,
  Container_type,
  DisposableLike,
  EnumerableLike,
  EnumeratorLike,
} from "./types.js";

export interface Type extends Container {
  readonly [Container_type]?: EnumerableLike<this[typeof Container_T]>;
}

export interface DisposableEnumeratorType extends Container {
  readonly [Container_type]?: EnumeratorLike<this[typeof Container_T]> &
    DisposableLike;
}

export interface Signature
  extends EnumerableContainerTypeClass<Type, DisposableEnumeratorType> {}

export const contains: Signature["contains"] = Runnable_contains;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Observable_distinctUntilChanged;
export const everySatisfy: Signature["everySatisfy"] = Runnable_everySatisfy;
export const first: Signature["first"] = Runnable_first;
export const forEach: Signature["forEach"] = Observable_forEach;
export const keep: Signature["keep"] = Observable_keep;
export const last: Signature["last"] = Runnable_last;
export const lastAsync: Signature["lastAsync"] = Observable_lastAsync;
export const map: Signature["map"] = Observable_map;
export const mapTo: Signature["mapTo"] = Observable_mapTo;
export const noneSatisfy: Signature["noneSatisfy"] = Runnable_noneSatisfy;
export const pairwise: Signature["pairwise"] = Observable_pairwise;
export const reduce: Signature["reduce"] = Runnable_reduce;
export const scan: Signature["scan"] = Observable_scan;
export const skipFirst: Signature["skipFirst"] = Observable_skipFirst;
export const someSatisfy: Signature["someSatisfy"] = Runnable_someSatisfy;
export const takeFirst: Signature["takeFirst"] = Observable_takeFirst;
export const takeLast: Signature["takeLast"] = Observable_takeLast;
export const takeWhile: Signature["takeWhile"] = Observable_takeWhile;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  Runnable_toReadonlyArray;
