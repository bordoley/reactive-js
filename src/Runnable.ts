import { Runnable_compute } from "./Observable/__internal__/Observable.compute.js";
import Observable_concat from "./Observable/__internal__/Observable.concat.js";
import Observable_concatWith from "./Observable/__internal__/Observable.concatWith.js";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_empty from "./Observable/__internal__/Observable.empty.js";
import Observable_endWith from "./Observable/__internal__/Observable.endWith.js";
import Observable_firstAsync from "./Observable/__internal__/Observable.firstAsync.js";
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
import Observable_startWith from "./Observable/__internal__/Observable.startWith.js";
import Observable_takeFirst from "./Observable/__internal__/Observable.takeFirst.js";
import Observable_takeLast from "./Observable/__internal__/Observable.takeLast.js";
import Observable_takeWhile from "./Observable/__internal__/Observable.takeWhile.js";
import Runnable_concatAll from "./Runnable/__internal__/Runnable.concatAll.js";
import Runnable_concatMap from "./Runnable/__internal__/Runnable.concatMap.js";
import Runnable_contains from "./Runnable/__internal__/Runnable.contains.js";
import Runnable_everySatisfy from "./Runnable/__internal__/Runnable.everySatisfy.js";
import Runnable_exhaust from "./Runnable/__internal__/Runnable.exhaust.js";
import Runnable_exhaustMap from "./Runnable/__internal__/Runnable.exhaustMap.js";
import Runnable_first from "./Runnable/__internal__/Runnable.first.js";
import Runnable_flatMapIterable from "./Runnable/__internal__/Runnable.flatMapIterable.js";
import Runnable_flow from "./Runnable/__internal__/Runnable.flow.js";
import Runnable_last from "./Runnable/__internal__/Runnable.last.js";
import Runnable_mergeAll from "./Runnable/__internal__/Runnable.mergeAll.js";
import Runnable_mergeMap from "./Runnable/__internal__/Runnable.mergeMap.js";
import Runnable_noneSatisfy from "./Runnable/__internal__/Runnable.noneSatisfy.js";
import Runnable_reduce from "./Runnable/__internal__/Runnable.reduce.js";
import Runnable_run from "./Runnable/__internal__/Runnable.run.js";
import Runnable_someSatisfy from "./Runnable/__internal__/Runnable.someSatisfy.js";
import Runnable_switchAll from "./Runnable/__internal__/Runnable.switchAll.js";
import Runnable_switchMap from "./Runnable/__internal__/Runnable.switchMap.js";
import Runnable_toReadonlyArray from "./Runnable/__internal__/Runnable.toReadonlyArray.js";
import { Factory, Function1, SideEffect1 } from "./functions.js";
import {
  HigherOrderObservableBaseTypeClass,
  RunnableContainerTypeClass,
} from "./type-classes.js";
import {
  DisposableLike,
  PauseableObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  RunnableContainer,
  RunnableLike,
  SchedulerLike,
} from "./types.js";

export type Type = RunnableContainer;

export interface Signature
  extends RunnableContainerTypeClass<Type>,
    HigherOrderObservableBaseTypeClass<Type, Type> {
  compute<T>(
    computation: Factory<T>,
    options?: {
      mode?: "batched" | "combine-latest";
    },
  ): RunnableLike<T>;

  // FIXME: should be defined on a typeclass
  flow<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): Function1<RunnableLike<T>, PauseableObservableLike<T> & DisposableLike>;

  run<T>(options?: {
    readonly backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  }): SideEffect1<RunnableLike<T>>;
}

export const compute: Signature["compute"] = Runnable_compute;
export const concat: Signature["concat"] = Observable_concat;
export const concatWith: Signature["concatWith"] = Observable_concatWith;
export const contains: Signature["contains"] = Runnable_contains;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Observable_distinctUntilChanged;
export const empty: Signature["empty"] = Observable_empty;
export const endWith: Signature["endWith"] = Observable_endWith;
export const everySatisfy: Signature["everySatisfy"] = Runnable_everySatisfy;
export const concatAll: Signature["concatAll"] = Runnable_concatAll;
export const concatMap: Signature["concatMap"] = Runnable_concatMap;
export const exhaust: Signature["exhaust"] = Runnable_exhaust;
export const exhaustMap: Signature["exhaustMap"] = Runnable_exhaustMap;
export const first: Signature["first"] = Runnable_first;
export const firstAsync: Signature["firstAsync"] = Observable_firstAsync;
export const flatMapIterable: Signature["flatMapIterable"] =
  Runnable_flatMapIterable;
export const flow: Signature["flow"] = Runnable_flow;
export const forEach: Signature["forEach"] = Observable_forEach;
export const fromFactory: Signature["fromFactory"] = Observable_fromFactory;
export const keep: Signature["keep"] = Observable_keep;
export const keepType: Signature["keepType"] =
  Observable_keepType as Signature["keepType"];
export const last: Signature["last"] = Runnable_last;
export const lastAsync: Signature["lastAsync"] = Observable_lastAsync;
export const map: Signature["map"] = Observable_map;
export const mapTo: Signature["mapTo"] = Observable_mapTo;
export const mergeAll: Signature["mergeAll"] = Runnable_mergeAll;
export const mergeMap: Signature["mergeMap"] = Runnable_mergeMap;
export const noneSatisfy: Signature["noneSatisfy"] = Runnable_noneSatisfy;
export const pairwise: Signature["pairwise"] = Observable_pairwise;
export const pick: Signature["pick"] = Observable_pick;
export const reduce: Signature["reduce"] = Runnable_reduce;
export const run: Signature["run"] = Runnable_run;
export const scan: Signature["scan"] = Observable_scan;
export const skipFirst: Signature["skipFirst"] = Observable_skipFirst;
export const someSatisfy: Signature["someSatisfy"] = Runnable_someSatisfy;
export const startWith: Signature["startWith"] = Observable_startWith;
export const switchAll: Signature["switchAll"] = Runnable_switchAll;
export const switchMap: Signature["switchMap"] = Runnable_switchMap;
export const takeFirst: Signature["takeFirst"] = Observable_takeFirst;
export const takeLast: Signature["takeLast"] = Observable_takeLast;
export const takeWhile: Signature["takeWhile"] = Observable_takeWhile;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  Runnable_toReadonlyArray;
