import {
  Container,
  ReactiveContainer,
  RunnableContainer,
  RunnableLike,
} from "../core.js";
import Container_identity from "../core/Container/__internal__/Container.identity.js";
import Iterable_toObservable from "../core/Iterable/__internal__/Iterable.toObservable.js";
import Optional_toObservable from "../core/Optional/__internal__/Optional.toObservable.js";
import ReadonlyArray_toObservable from "../core/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { Factory } from "../functions.js";
import Observable_animate from "./Observable/__internal__/Observable.animate.js";
import Observable_backpressureStrategy from "./Observable/__internal__/Observable.backpressureStrategy.js";
import Observable_buffer from "./Observable/__internal__/Observable.buffer.js";
import Observable_combineLatest from "./Observable/__internal__/Observable.combineLatest.js";
import { Runnable_compute } from "./Observable/__internal__/Observable.compute.js";
import Observable_concat from "./Observable/__internal__/Observable.concat.js";
import Observable_concatWith from "./Observable/__internal__/Observable.concatWith.js";
import Observable_currentTime from "./Observable/__internal__/Observable.currentTime.js";
import Observable_decodeWithCharset from "./Observable/__internal__/Observable.decodeWithCharset.js";
import Observable_dispatchTo from "./Observable/__internal__/Observable.dispatchTo.js";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_empty from "./Observable/__internal__/Observable.empty.js";
import Observable_endWith from "./Observable/__internal__/Observable.endWith.js";
import Observable_enqueue from "./Observable/__internal__/Observable.enqueue.js";
import Observable_firstAsync from "./Observable/__internal__/Observable.firstAsync.js";
import Observable_forEach from "./Observable/__internal__/Observable.forEach.js";
import Observable_forkConcat from "./Observable/__internal__/Observable.forkConcat.js";
import Observable_forkMerge from "./Observable/__internal__/Observable.forkMerge.js";
import Observable_forkZip from "./Observable/__internal__/Observable.forkZip.js";
import Observable_forkZipLatest from "./Observable/__internal__/Observable.forkZipLatest.js";
import Observable_fromFactory from "./Observable/__internal__/Observable.fromFactory.js";
import Observable_generate from "./Observable/__internal__/Observable.generate.js";
import Observable_ignoreElements from "./Observable/__internal__/Observable.ignoreElements.js";
import Observable_keep from "./Observable/__internal__/Observable.keep.js";
import Observable_keepType from "./Observable/__internal__/Observable.keepType.js";
import Observable_lastAsync from "./Observable/__internal__/Observable.lastAsync.js";
import Observable_map from "./Observable/__internal__/Observable.map.js";
import Observable_mapTo from "./Observable/__internal__/Observable.mapTo.js";
import Observable_merge from "./Observable/__internal__/Observable.merge.js";
import Observable_mergeWith from "./Observable/__internal__/Observable.mergeWith.js";
import Observable_pairwise from "./Observable/__internal__/Observable.pairwise.js";
import Observable_pick from "./Observable/__internal__/Observable.pick.js";
import Observable_repeat from "./Observable/__internal__/Observable.repeat.js";
import Observable_retry from "./Observable/__internal__/Observable.retry.js";
import Observable_scan from "./Observable/__internal__/Observable.scan.js";
import Observable_skipFirst from "./Observable/__internal__/Observable.skipFirst.js";
import Observable_startWith from "./Observable/__internal__/Observable.startWith.js";
import Observable_takeFirst from "./Observable/__internal__/Observable.takeFirst.js";
import Observable_takeLast from "./Observable/__internal__/Observable.takeLast.js";
import Observable_takeUntil from "./Observable/__internal__/Observable.takeUntil.js";
import Observable_takeWhile from "./Observable/__internal__/Observable.takeWhile.js";
import Observable_throwIfEmpty from "./Observable/__internal__/Observable.throwIfEmpty.js";
import Observable_throws from "./Observable/__internal__/Observable.throws.js";
import Observable_timeout from "./Observable/__internal__/Observable.timeout.js";
import Observable_toEnumerable from "./Observable/__internal__/Observable.toEnumerable.js";
import Observable_withCurrentTime from "./Observable/__internal__/Observable.withCurrentTime.js";
import Observable_withLatestFrom from "./Observable/__internal__/Observable.withLatestFrom.js";
import Observable_zip from "./Observable/__internal__/Observable.zip.js";
import Observable_zipLatest from "./Observable/__internal__/Observable.zipLatest.js";
import Observable_zipWith from "./Observable/__internal__/Observable.zipWith.js";
import Observable_zipWithLatestFrom from "./Observable/__internal__/Observable.zipWithLatestFrom.js";
import Runnable_catchError from "./Runnable/__internal__/Runnable.catchError.js";
import Runnable_concatAll from "./Runnable/__internal__/Runnable.concatAll.js";
import Runnable_concatMap from "./Runnable/__internal__/Runnable.concatMap.js";
import Runnable_contains from "./Runnable/__internal__/Runnable.contains.js";
import Runnable_defer from "./Runnable/__internal__/Runnable.defer.js";
import Runnable_encodeUtf8 from "./Runnable/__internal__/Runnable.encodeUtf8.js";
import Runnable_everySatisfy from "./Runnable/__internal__/Runnable.everySatisfy.js";
import Runnable_exhaust from "./Runnable/__internal__/Runnable.exhaust.js";
import Runnable_exhaustMap from "./Runnable/__internal__/Runnable.exhaustMap.js";
import Runnable_first from "./Runnable/__internal__/Runnable.first.js";
import Runnable_flatMapIterable from "./Runnable/__internal__/Runnable.flatMapIterable.js";
import Runnable_flow from "./Runnable/__internal__/Runnable.flow.js";
import Runnable_fromEnumeratorFactory from "./Runnable/__internal__/Runnable.fromEnumeratorFactory.js";
import Runnable_last from "./Runnable/__internal__/Runnable.last.js";
import Runnable_mergeAll from "./Runnable/__internal__/Runnable.mergeAll.js";
import Runnable_mergeMap from "./Runnable/__internal__/Runnable.mergeMap.js";
import Runnable_noneSatisfy from "./Runnable/__internal__/Runnable.noneSatisfy.js";
import Runnable_reduce from "./Runnable/__internal__/Runnable.reduce.js";
import Runnable_run from "./Runnable/__internal__/Runnable.run.js";
import Runnable_scanLast from "./Runnable/__internal__/Runnable.scanLast.js";
import Runnable_scanMany from "./Runnable/__internal__/Runnable.scanMany.js";
import Runnable_someSatisfy from "./Runnable/__internal__/Runnable.someSatisfy.js";
import Runnable_switchAll from "./Runnable/__internal__/Runnable.switchAll.js";
import Runnable_switchMap from "./Runnable/__internal__/Runnable.switchMap.js";
import Runnable_throttle from "./Runnable/__internal__/Runnable.throttle.js";
import Runnable_toReadonlyArray from "./Runnable/__internal__/Runnable.toReadonlyArray.js";

export const animate: ReactiveContainer.TypeClass<RunnableContainer>["animate"] =
  Observable_animate;

export const backpressureStrategy: ReactiveContainer.TypeClass<RunnableContainer>["backpressureStrategy"] =
  Observable_backpressureStrategy;

export const buffer: Container.TypeClass<RunnableContainer>["buffer"] =
  Observable_buffer;

export const catchError: ReactiveContainer.TypeClass<RunnableContainer>["catchError"] =
  Runnable_catchError;

export const combineLatest: ReactiveContainer.TypeClass<RunnableContainer>["combineLatest"] =
  Observable_combineLatest;

/**
 * @category Constructor
 */
export const compute = Runnable_compute;

export const concat: Container.TypeClass<RunnableContainer>["concat"] =
  Observable_concat;

export const concatAll: Container.TypeClass<RunnableContainer>["concatAll"] =
  Runnable_concatAll;

export const concatMap: Container.TypeClass<RunnableContainer>["concatMap"] =
  Runnable_concatMap;

export const concatWith: Container.TypeClass<RunnableContainer>["concatWith"] =
  Observable_concatWith as Container.TypeClass<RunnableContainer>["concatWith"];

export const contains: Container.TypeClass<RunnableContainer>["contains"] =
  Runnable_contains;

export const currentTime: ReactiveContainer.TypeClass<RunnableContainer>["currentTime"] =
  Observable_currentTime;

export const decodeWithCharset: ReactiveContainer.TypeClass<RunnableContainer>["decodeWithCharset"] =
  Observable_decodeWithCharset;

export const defer: ReactiveContainer.TypeClass<RunnableContainer>["defer"] =
  Runnable_defer;

export const dispatchTo: ReactiveContainer.TypeClass<RunnableContainer>["dispatchTo"] =
  Observable_dispatchTo;

export const distinctUntilChanged: Container.TypeClass<RunnableContainer>["distinctUntilChanged"] =
  Observable_distinctUntilChanged;

export const empty: ReactiveContainer.TypeClass<RunnableContainer>["empty"] =
  Observable_empty;

export const encodeUtf8: ReactiveContainer.TypeClass<RunnableContainer>["encodeUtf8"] =
  Runnable_encodeUtf8;

export const enqueue: ReactiveContainer.TypeClass<RunnableContainer>["enqueue"] =
  Observable_enqueue;

export const endWith: Container.TypeClass<RunnableContainer>["endWith"] =
  Observable_endWith;

export const everySatisfy: Container.TypeClass<RunnableContainer>["everySatisfy"] =
  Runnable_everySatisfy;

export const exhaust: ReactiveContainer.TypeClass<RunnableContainer>["exhaust"] =
  Runnable_exhaust;

export const exhaustMap: ReactiveContainer.TypeClass<RunnableContainer>["exhaustMap"] =
  Runnable_exhaustMap;

export const first: Container.TypeClass<RunnableContainer>["first"] =
  Runnable_first;

export const firstAsync: ReactiveContainer.TypeClass<RunnableContainer>["firstAsync"] =
  Observable_firstAsync;

export const flatMapIterable: Container.TypeClass<RunnableContainer>["flatMapIterable"] =
  Runnable_flatMapIterable;

export const flow: Container.TypeClass<RunnableContainer>["flow"] =
  Runnable_flow;

export const forEach: Container.TypeClass<RunnableContainer>["forEach"] =
  Observable_forEach;

export const forkConcat: Container.TypeClass<RunnableContainer>["forkConcat"] =
  Observable_forkConcat as Container.TypeClass<RunnableContainer>["forkConcat"];

export const forkMerge: ReactiveContainer.TypeClass<RunnableContainer>["forkMerge"] =
  Observable_forkMerge as ReactiveContainer.TypeClass<RunnableContainer>["forkMerge"];

export const forkZip: Container.TypeClass<RunnableContainer>["forkZip"] =
  Observable_forkZip as Container.TypeClass<RunnableContainer>["forkZip"];

export const forkZipLatest: ReactiveContainer.TypeClass<RunnableContainer>["forkZipLatest"] =
  Observable_forkZipLatest as ReactiveContainer.TypeClass<RunnableContainer>["forkZipLatest"];

export const fromEnumeratorFactory: ReactiveContainer.TypeClass<RunnableContainer>["fromEnumeratorFactory"] =
  Runnable_fromEnumeratorFactory;

export const fromFactory: ReactiveContainer.TypeClass<RunnableContainer>["fromFactory"] =
  Observable_fromFactory;

export const fromIterable: ReactiveContainer.TypeClass<RunnableContainer>["fromIterable"] =
  Iterable_toObservable;

export const fromOptional: ReactiveContainer.TypeClass<RunnableContainer>["fromOptional"] =
  Optional_toObservable;

export const fromReadonlyArray: ReactiveContainer.TypeClass<RunnableContainer>["fromReadonlyArray"] =
  ReadonlyArray_toObservable;

export const generate: ReactiveContainer.TypeClass<RunnableContainer>["generate"] =
  Observable_generate;

export const identity: Container.TypeClass<RunnableContainer>["identity"] =
  Container_identity;

export const ignoreElements: Container.TypeClass<RunnableContainer>["ignoreElements"] =
  Observable_ignoreElements;

export const keep: Container.TypeClass<RunnableContainer>["keep"] =
  Observable_keep;

export const keepType: Container.TypeClass<RunnableContainer>["keepType"] =
  Observable_keepType as Container.TypeClass<RunnableContainer>["keepType"];

export const last: Container.TypeClass<RunnableContainer>["last"] =
  Runnable_last;

export const lastAsync: ReactiveContainer.TypeClass<RunnableContainer>["lastAsync"] =
  Observable_lastAsync;

export const noneSatisfy: Container.TypeClass<RunnableContainer>["noneSatisfy"] =
  Runnable_noneSatisfy;

export const map: Container.TypeClass<RunnableContainer>["map"] =
  Observable_map;

export const mapTo: Container.TypeClass<RunnableContainer>["mapTo"] =
  Observable_mapTo;

export const merge: ReactiveContainer.TypeClass<RunnableContainer>["merge"] =
  Observable_merge;

export const mergeAll: ReactiveContainer.TypeClass<RunnableContainer>["mergeAll"] =
  Runnable_mergeAll;

export const mergeMap: ReactiveContainer.TypeClass<RunnableContainer>["mergeMap"] =
  Runnable_mergeMap;

export const mergeWith: ReactiveContainer.TypeClass<RunnableContainer>["mergeWith"] =
  Observable_mergeWith as ReactiveContainer.TypeClass<RunnableContainer>["mergeWith"];

export const pairwise: Container.TypeClass<RunnableContainer>["pairwise"] =
  Observable_pairwise;

export const pick: Container.TypeClass<RunnableContainer>["pick"] =
  Observable_pick;

export const reduce: Container.TypeClass<RunnableContainer>["reduce"] =
  Runnable_reduce;

export const repeat: Container.TypeClass<RunnableContainer>["repeat"] =
  Observable_repeat;

export const retry: ReactiveContainer.TypeClass<RunnableContainer>["retry"] =
  Observable_retry;

export const run = Runnable_run;

export const scan: Container.TypeClass<RunnableContainer>["scan"] =
  Observable_scan;

export const scanLast: ReactiveContainer.TypeClass<RunnableContainer>["scanLast"] =
  Runnable_scanLast;

export const scanMany: ReactiveContainer.TypeClass<RunnableContainer>["scanMany"] =
  Runnable_scanMany;

export const skipFirst: Container.TypeClass<RunnableContainer>["skipFirst"] =
  Observable_skipFirst;

export const someSatisfy: Container.TypeClass<RunnableContainer>["someSatisfy"] =
  Runnable_someSatisfy;

export const startWith: Container.TypeClass<RunnableContainer>["startWith"] =
  Observable_startWith;

export const switchAll: ReactiveContainer.TypeClass<RunnableContainer>["switchAll"] =
  Runnable_switchAll;

export const switchMap: ReactiveContainer.TypeClass<RunnableContainer>["switchMap"] =
  Runnable_switchMap;

export const takeFirst: Container.TypeClass<RunnableContainer>["takeFirst"] =
  Observable_takeFirst;

export const takeLast: Container.TypeClass<RunnableContainer>["takeLast"] =
  Observable_takeLast;

export const takeUntil: ReactiveContainer.TypeClass<RunnableContainer>["takeUntil"] =
  Observable_takeUntil;

export const takeWhile: Container.TypeClass<RunnableContainer>["takeWhile"] =
  Observable_takeWhile;

export const throttle: ReactiveContainer.TypeClass<RunnableContainer>["throttle"] =
  Runnable_throttle;

export const throwIfEmpty: ReactiveContainer.TypeClass<RunnableContainer>["throwIfEmpty"] =
  Observable_throwIfEmpty;

interface Throws extends ReactiveContainer.TypeClass<RunnableContainer> {
  /**
   * @category Constructor
   */
  throws<T>(options?: {
    delay?: number;
    raise?: Factory<unknown>;
  }): RunnableLike<T>;
}
export const throws: Throws["throws"] = Observable_throws;

export const timeout: ReactiveContainer.TypeClass<RunnableContainer>["timeout"] =
  Observable_timeout;

export const toEnumerable: Container.TypeClass<RunnableContainer>["toEnumerable"] =
  Observable_toEnumerable;

export const toReadonlyArray: Container.TypeClass<RunnableContainer>["toReadonlyArray"] =
  Runnable_toReadonlyArray;

export const withCurrentTime: ReactiveContainer.TypeClass<RunnableContainer>["withCurrentTime"] =
  Observable_withCurrentTime;

export const withLatestFrom: ReactiveContainer.TypeClass<RunnableContainer>["withLatestFrom"] =
  Observable_withLatestFrom as ReactiveContainer.TypeClass<RunnableContainer>["withLatestFrom"];

export const zip: Container.TypeClass<RunnableContainer>["zip"] =
  Observable_zip as Container.TypeClass<RunnableContainer>["zip"];

export const zipLatest: ReactiveContainer.TypeClass<RunnableContainer>["zipLatest"] =
  Observable_zipLatest as ReactiveContainer.TypeClass<RunnableContainer>["zipLatest"];

export const zipWith: Container.TypeClass<RunnableContainer>["zipWith"] =
  Observable_zipWith as Container.TypeClass<RunnableContainer>["zipWith"];

export const zipWithLatestFrom: ReactiveContainer.TypeClass<RunnableContainer>["zipWithLatestFrom"] =
  Observable_zipWithLatestFrom as ReactiveContainer.TypeClass<RunnableContainer>["zipWithLatestFrom"];
