import Observable_concat from "./Observable/__internal__/Observable.concat.js";
import Observable_concatWith from "./Observable/__internal__/Observable.concatWith.js";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_empty from "./Observable/__internal__/Observable.empty.js";
import Observable_forEach from "./Observable/__internal__/Observable.forEach.js";
import Observable_fromFactory from "./Observable/__internal__/Observable.fromFactory.js";
import Observable_keep from "./Observable/__internal__/Observable.keep.js";
import Observable_keepType from "./Observable/__internal__/Observable.keepType.js";
import Observable_lastAsync from "./Observable/__internal__/Observable.lastAsync.js";
import Observable_map from "./Observable/__internal__/Observable.map.js";
import Observable_mapTo from "./Observable/__internal__/Observable.mapTo.js";
import Observable_pairwise from "./Observable/__internal__/Observable.pairwise.js";
import Observable_pick from "./Observable/__internal__/Observable.pick.js";
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
import Runnable_run from "./Runnable/__internal__/Runnable.run.js";
import Runnable_someSatisfy from "./Runnable/__internal__/Runnable.someSatisfy.js";
import Runnable_toReadonlyArray from "./Runnable/__internal__/Runnable.toReadonlyArray.js";
import { SideEffect1 } from "./functions.js";
import { RunnableContainerTypeClass } from "./type-classes.js";
import {
  Container,
  Container_T,
  Container_type,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  RunnableLike,
} from "./types.js";

export interface Type extends Container {
  readonly [Container_type]?: RunnableLike<this[typeof Container_T]>;
}

export interface Signature extends RunnableContainerTypeClass<Type> {
  run<T>(options?: {
    readonly backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  }): SideEffect1<RunnableLike<T>>;
}

export const concat: Signature["concat"] = Observable_concat;
export const concatWith: Signature["concatWith"] = Observable_concatWith;
export const contains: Signature["contains"] = Runnable_contains;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Observable_distinctUntilChanged;
export const empty: Signature["empty"] = Observable_empty;
export const everySatisfy: Signature["everySatisfy"] = Runnable_everySatisfy;
export const first: Signature["first"] = Runnable_first;
export const forEach: Signature["forEach"] = Observable_forEach;
export const fromFactory: Signature["fromFactory"] = Observable_fromFactory;
export const keep: Signature["keep"] = Observable_keep;
export const keepType: Signature["keepType"] =
  Observable_keepType as Signature["keepType"];
export const last: Signature["last"] = Runnable_last;
export const lastAsync: Signature["lastAsync"] = Observable_lastAsync;
export const map: Signature["map"] = Observable_map;
export const mapTo: Signature["mapTo"] = Observable_mapTo;
export const noneSatisfy: Signature["noneSatisfy"] = Runnable_noneSatisfy;
export const pairwise: Signature["pairwise"] = Observable_pairwise;
export const pick: Signature["pick"] = Observable_pick;
export const reduce: Signature["reduce"] = Runnable_reduce;
export const run: Signature["run"] = Runnable_run;
export const scan: Signature["scan"] = Observable_scan;
export const skipFirst: Signature["skipFirst"] = Observable_skipFirst;
export const someSatisfy: Signature["someSatisfy"] = Runnable_someSatisfy;
export const takeFirst: Signature["takeFirst"] = Observable_takeFirst;
export const takeLast: Signature["takeLast"] = Observable_takeLast;
export const takeWhile: Signature["takeWhile"] = Observable_takeWhile;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  Runnable_toReadonlyArray;
