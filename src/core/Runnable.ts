import { RunnableContainer, RunnableLike } from "../core.js";
import Container_identity from "../core/Container/__internal__/Container.identity.js";
import Iterable_toObservable from "../core/Iterable/__internal__/Iterable.toObservable.js";
import Optional_toObservable from "../core/Optional/__internal__/Optional.toObservable.js";
import ReadonlyArray_toObservable from "../core/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { Factory } from "../functions.js";
import Observable_backpressureStrategy from "./Observable/__internal__/Observable.backpressureStrategy.js";
import Observable_buffer from "./Observable/__internal__/Observable.buffer.js";
import Observable_combineLatest from "./Observable/__internal__/Observable.combineLatest.js";
import { Runnable_compute } from "./Observable/__internal__/Observable.compute.js";
import Observable_concat from "./Observable/__internal__/Observable.concat.js";
import Observable_concatWith from "./Observable/__internal__/Observable.concatWith.js";
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
import Observable_withCurrentTime from "./Observable/__internal__/Observable.withCurrentTime.js";
import Observable_withLatestFrom from "./Observable/__internal__/Observable.withLatestFrom.js";
import Observable_zip from "./Observable/__internal__/Observable.zip.js";
import Observable_zipLatest from "./Observable/__internal__/Observable.zipLatest.js";
import Observable_zipWith from "./Observable/__internal__/Observable.zipWith.js";
import Observable_zipWithLatestFrom from "./Observable/__internal__/Observable.zipWithLatestFrom.js";
import Runnable_animate from "./Runnable/__internal__/Runnable.animate.js";
import Runnable_catchError from "./Runnable/__internal__/Runnable.catchError.js";
import Runnable_concatAll from "./Runnable/__internal__/Runnable.concatAll.js";
import Runnable_concatMap from "./Runnable/__internal__/Runnable.concatMap.js";
import Runnable_contains from "./Runnable/__internal__/Runnable.contains.js";
import Runnable_currentTime from "./Runnable/__internal__/Runnable.currentTime.js";
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

export const animate: RunnableContainer.TypeClass["animate"] = Runnable_animate;

export const backpressureStrategy: RunnableContainer.TypeClass["backpressureStrategy"] =
  Observable_backpressureStrategy;

export const buffer: RunnableContainer.TypeClass["buffer"] = Observable_buffer;

export const catchError: RunnableContainer.TypeClass["catchError"] =
  Runnable_catchError;

export const combineLatest: RunnableContainer.TypeClass["combineLatest"] =
  Observable_combineLatest;

/**
 * @category Constructor
 */
export const compute = Runnable_compute;

export const concat: RunnableContainer.TypeClass["concat"] = Observable_concat;

export const concatAll: RunnableContainer.TypeClass["concatAll"] =
  Runnable_concatAll;

export const concatMap: RunnableContainer.TypeClass["concatMap"] =
  Runnable_concatMap;

export const concatWith: RunnableContainer.TypeClass["concatWith"] =
  Observable_concatWith as RunnableContainer.TypeClass["concatWith"];

export const contains: RunnableContainer.TypeClass["contains"] =
  Runnable_contains;

export const currentTime: RunnableContainer.TypeClass["currentTime"] =
  Runnable_currentTime;

export const decodeWithCharset: RunnableContainer.TypeClass["decodeWithCharset"] =
  Observable_decodeWithCharset;

export const defer: RunnableContainer.TypeClass["defer"] = Runnable_defer;

export const dispatchTo: RunnableContainer.TypeClass["dispatchTo"] =
  Observable_dispatchTo;

export const distinctUntilChanged: RunnableContainer.TypeClass["distinctUntilChanged"] =
  Observable_distinctUntilChanged;

export const empty: RunnableContainer.TypeClass["empty"] = Observable_empty;

export const encodeUtf8: RunnableContainer.TypeClass["encodeUtf8"] =
  Runnable_encodeUtf8;

export const enqueue: RunnableContainer.TypeClass["enqueue"] =
  Observable_enqueue;

export const endWith: RunnableContainer.TypeClass["endWith"] =
  Observable_endWith;

export const everySatisfy: RunnableContainer.TypeClass["everySatisfy"] =
  Runnable_everySatisfy;

export const exhaust: RunnableContainer.TypeClass["exhaust"] = Runnable_exhaust;

export const exhaustMap: RunnableContainer.TypeClass["exhaustMap"] =
  Runnable_exhaustMap;

export const first: RunnableContainer.TypeClass["first"] = Runnable_first;

export const firstAsync: RunnableContainer.TypeClass["firstAsync"] =
  Observable_firstAsync;

export const flatMapIterable: RunnableContainer.TypeClass["flatMapIterable"] =
  Runnable_flatMapIterable;

export const flow: RunnableContainer.TypeClass["flow"] = Runnable_flow;

export const forEach: RunnableContainer.TypeClass["forEach"] =
  Observable_forEach;

export const forkConcat: RunnableContainer.TypeClass["forkConcat"] =
  Observable_forkConcat as RunnableContainer.TypeClass["forkConcat"];

export const forkMerge: RunnableContainer.TypeClass["forkMerge"] =
  Observable_forkMerge as RunnableContainer.TypeClass["forkMerge"];

export const forkZip: RunnableContainer.TypeClass["forkZip"] =
  Observable_forkZip as RunnableContainer.TypeClass["forkZip"];

export const forkZipLatest: RunnableContainer.TypeClass["forkZipLatest"] =
  Observable_forkZipLatest as RunnableContainer.TypeClass["forkZipLatest"];

export const fromEnumeratorFactory: RunnableContainer.TypeClass["fromEnumeratorFactory"] =
  Runnable_fromEnumeratorFactory;

export const fromFactory: RunnableContainer.TypeClass["fromFactory"] =
  Observable_fromFactory;

export const fromIterable: RunnableContainer.TypeClass["fromIterable"] =
  Iterable_toObservable;

export const fromOptional: RunnableContainer.TypeClass["fromOptional"] =
  Optional_toObservable;

export const fromReadonlyArray: RunnableContainer.TypeClass["fromReadonlyArray"] =
  ReadonlyArray_toObservable;

export const generate: RunnableContainer.TypeClass["generate"] =
  Observable_generate;

export const identity: RunnableContainer.TypeClass["identity"] =
  Container_identity;

export const ignoreElements: RunnableContainer.TypeClass["ignoreElements"] =
  Observable_ignoreElements;

export const keep: RunnableContainer.TypeClass["keep"] = Observable_keep;

export const keepType: RunnableContainer.TypeClass["keepType"] =
  Observable_keepType as RunnableContainer.TypeClass["keepType"];

export const last: RunnableContainer.TypeClass["last"] = Runnable_last;

export const lastAsync: RunnableContainer.TypeClass["lastAsync"] =
  Observable_lastAsync;

export const noneSatisfy: RunnableContainer.TypeClass["noneSatisfy"] =
  Runnable_noneSatisfy;

export const map: RunnableContainer.TypeClass["map"] = Observable_map;

export const mapTo: RunnableContainer.TypeClass["mapTo"] = Observable_mapTo;

export const merge: RunnableContainer.TypeClass["merge"] = Observable_merge;

export const mergeAll: RunnableContainer.TypeClass["mergeAll"] =
  Runnable_mergeAll;

export const mergeMap: RunnableContainer.TypeClass["mergeMap"] =
  Runnable_mergeMap;

export const mergeWith: RunnableContainer.TypeClass["mergeWith"] =
  Observable_mergeWith as RunnableContainer.TypeClass["mergeWith"];

export const pairwise: RunnableContainer.TypeClass["pairwise"] =
  Observable_pairwise;

export const pick: RunnableContainer.TypeClass["pick"] = Observable_pick;

export const reduce: RunnableContainer.TypeClass["reduce"] = Runnable_reduce;

export const repeat: RunnableContainer.TypeClass["repeat"] = Observable_repeat;

export const retry: RunnableContainer.TypeClass["retry"] = Observable_retry;

export const run = Runnable_run;

export const scan: RunnableContainer.TypeClass["scan"] = Observable_scan;

export const scanLast: RunnableContainer.TypeClass["scanLast"] =
  Runnable_scanLast;

export const scanMany: RunnableContainer.TypeClass["scanMany"] =
  Runnable_scanMany;

export const skipFirst: RunnableContainer.TypeClass["skipFirst"] =
  Observable_skipFirst;

export const someSatisfy: RunnableContainer.TypeClass["someSatisfy"] =
  Runnable_someSatisfy;

export const startWith: RunnableContainer.TypeClass["startWith"] =
  Observable_startWith;

export const switchAll: RunnableContainer.TypeClass["switchAll"] =
  Runnable_switchAll;

export const switchMap: RunnableContainer.TypeClass["switchMap"] =
  Runnable_switchMap;

export const takeFirst: RunnableContainer.TypeClass["takeFirst"] =
  Observable_takeFirst;

export const takeLast: RunnableContainer.TypeClass["takeLast"] =
  Observable_takeLast;

export const takeUntil: RunnableContainer.TypeClass["takeUntil"] =
  Observable_takeUntil;

export const takeWhile: RunnableContainer.TypeClass["takeWhile"] =
  Observable_takeWhile;

export const throttle: RunnableContainer.TypeClass["throttle"] =
  Runnable_throttle;

export const throwIfEmpty: RunnableContainer.TypeClass["throwIfEmpty"] =
  Observable_throwIfEmpty;

interface Throws extends RunnableContainer.TypeClass {
  /**
   * @category Constructor
   */
  throws<T>(options?: {
    delay?: number;
    raise?: Factory<unknown>;
  }): RunnableLike<T>;
}
export const throws: Throws["throws"] = Observable_throws;

export const timeout: RunnableContainer.TypeClass["timeout"] =
  Observable_timeout;

export const toReadonlyArray: RunnableContainer.TypeClass["toReadonlyArray"] =
  Runnable_toReadonlyArray;

export const withCurrentTime: RunnableContainer.TypeClass["withCurrentTime"] =
  Observable_withCurrentTime;

export const withLatestFrom: RunnableContainer.TypeClass["withLatestFrom"] =
  Observable_withLatestFrom as RunnableContainer.TypeClass["withLatestFrom"];

export const zip: RunnableContainer.TypeClass["zip"] =
  Observable_zip as RunnableContainer.TypeClass["zip"];

export const zipLatest: RunnableContainer.TypeClass["zipLatest"] =
  Observable_zipLatest as RunnableContainer.TypeClass["zipLatest"];

export const zipWith: RunnableContainer.TypeClass["zipWith"] =
  Observable_zipWith as RunnableContainer.TypeClass["zipWith"];

export const zipWithLatestFrom: RunnableContainer.TypeClass["zipWithLatestFrom"] =
  Observable_zipWithLatestFrom as RunnableContainer.TypeClass["zipWithLatestFrom"];
