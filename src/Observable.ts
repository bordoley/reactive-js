import AsyncIterable_toObservable from "./AsyncIterable/__internal__/AsyncIterable.toObservable.js";
import Container_identity from "./Container/__internal__/Container.identity.js";
import Observable_backpressureStrategy from "./Observable/__internal__/Observable.backpressureStrategy.js";
import Observable_buffer from "./Observable/__internal__/Observable.buffer.js";
import Observable_catchError from "./Observable/__internal__/Observable.catchError.js";
import Observable_combineLatest from "./Observable/__internal__/Observable.combineLatest.js";
import { Observable_compute } from "./Observable/__internal__/Observable.compute.js";
import Observable_decodeWithCharset from "./Observable/__internal__/Observable.decodeWithCharset.js";
import Observable_defer from "./Observable/__internal__/Observable.defer.js";
import Observable_dispatchTo from "./Observable/__internal__/Observable.dispatchTo.js";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_encodeUtf8 from "./Observable/__internal__/Observable.encodeUtf8.js";
import Observable_enqueue from "./Observable/__internal__/Observable.enqueue.js";
import Observable_exhaust from "./Observable/__internal__/Observable.exhaust.js";
import Observable_exhaustMap from "./Observable/__internal__/Observable.exhaustMap.js";
import Observable_firstAsync from "./Observable/__internal__/Observable.firstAsync.js";
import Observable_flatMapAsync from "./Observable/__internal__/Observable.flatMapAsync.js";
import Observable_flatMapIterable from "./Observable/__internal__/Observable.flatMapIterable.js";
import Observable_forEach from "./Observable/__internal__/Observable.forEach.js";
import Observable_forkCombineLatest from "./Observable/__internal__/Observable.forkCombineLatest.js";
import Observable_forkMerge from "./Observable/__internal__/Observable.forkMerge.js";
import Observable_forkZip from "./Observable/__internal__/Observable.forkZip.js";
import Observable_forkZipLatest from "./Observable/__internal__/Observable.forkZipLatest.js";
import Observable_fromAsyncFactory from "./Observable/__internal__/Observable.fromAsyncFactory.js";
import Observable_ignoreElements from "./Observable/__internal__/Observable.ignoreElements.js";
import Observable_keep from "./Observable/__internal__/Observable.keep.js";
import Observable_keepType from "./Observable/__internal__/Observable.keepType.js";
import Observable_lastAsync from "./Observable/__internal__/Observable.lastAsync.js";
import Observable_map from "./Observable/__internal__/Observable.map.js";
import Observable_mapTo from "./Observable/__internal__/Observable.mapTo.js";
import Observable_merge from "./Observable/__internal__/Observable.merge.js";
import Observable_mergeAll from "./Observable/__internal__/Observable.mergeAll.js";
import Observable_mergeMap from "./Observable/__internal__/Observable.mergeMap.js";
import Observable_mergeWith from "./Observable/__internal__/Observable.mergeWith.js";
import Observable_never from "./Observable/__internal__/Observable.never.js";
import Observable_onSubscribe from "./Observable/__internal__/Observable.onSubscribe.js";
import Observable_pairwise from "./Observable/__internal__/Observable.pairwise.js";
import Observable_pick from "./Observable/__internal__/Observable.pick.js";
import Observable_scan from "./Observable/__internal__/Observable.scan.js";
import Observable_scanLast from "./Observable/__internal__/Observable.scanLast.js";
import Observable_skipFirst from "./Observable/__internal__/Observable.skipFirst.js";
import Observable_subscribe from "./Observable/__internal__/Observable.subscribe.js";
import Observable_subscribeOn from "./Observable/__internal__/Observable.subscribeOn.js";
import Observable_switchAll from "./Observable/__internal__/Observable.switchAll.js";
import Observable_switchMap from "./Observable/__internal__/Observable.switchMap.js";
import Observable_takeFirst from "./Observable/__internal__/Observable.takeFirst.js";
import Observable_takeLast from "./Observable/__internal__/Observable.takeLast.js";
import Observable_takeUntil from "./Observable/__internal__/Observable.takeUntil.js";
import Observable_takeWhile from "./Observable/__internal__/Observable.takeWhile.js";
import Observable_throttle from "./Observable/__internal__/Observable.throttle.js";
import Observable_throwIfEmpty from "./Observable/__internal__/Observable.throwIfEmpty.js";
import Observable_throws from "./Observable/__internal__/Observable.throws.js";
import Observable_timeout from "./Observable/__internal__/Observable.timeout.js";
import Observable_toEventSource from "./Observable/__internal__/Observable.toEventSource.js";
import Observable_withCurrentTime from "./Observable/__internal__/Observable.withCurrentTime.js";
import Observable_withLatestFrom from "./Observable/__internal__/Observable.withLatestFrom.js";
import Observable_zip from "./Observable/__internal__/Observable.zip.js";
import Observable_zipLatest from "./Observable/__internal__/Observable.zipLatest.js";
import Observable_zipWith from "./Observable/__internal__/Observable.zipWith.js";
import Observable_zipWithLatestFrom from "./Observable/__internal__/Observable.zipWithLatestFrom.js";
import { Container, ObservableContainer } from "./containers.js";
import { Factory, Function1 } from "./functions.js";
import {
  DisposableLike,
  DisposableOrTeardown,
  ObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "./types.js";

export const backpressureStrategy: ObservableContainer.TypeClass["backpressureStrategy"] =
  Observable_backpressureStrategy;

/**
 * @category Operator
 */
export const buffer: <T>(options?: {
  // FIXME: Duration should be a DeferredObservable
  readonly duration?: number | Function1<T, ObservableContainer.Type>;
  readonly count?: number;
}) => Container.Operator<ObservableContainer.Type, T, readonly T[]> =
  Observable_buffer;

export const catchError: ObservableContainer.TypeClass["catchError"] =
  Observable_catchError;

export const combineLatest: ObservableContainer.TypeClass["combineLatest"] =
  Observable_combineLatest;

/**
 * @category Constructor
 */
export const compute = Observable_compute;

export const decodeWithCharset: ObservableContainer.TypeClass["decodeWithCharset"] =
  Observable_decodeWithCharset;

export const defer: ObservableContainer.TypeClass["defer"] = Observable_defer;

export const dispatchTo: ObservableContainer.TypeClass["dispatchTo"] =
  Observable_dispatchTo;

export const distinctUntilChanged: ObservableContainer.TypeClass["distinctUntilChanged"] =
  Observable_distinctUntilChanged;

export const encodeUtf8: ObservableContainer.TypeClass["encodeUtf8"] =
  Observable_encodeUtf8;

export const enqueue: ObservableContainer.TypeClass["enqueue"] =
  Observable_enqueue;

export const exhaust: ObservableContainer.TypeClass["exhaust"] =
  Observable_exhaust;

export const exhaustMap: ObservableContainer.TypeClass["exhaustMap"] =
  Observable_exhaustMap;

export const firstAsync: ObservableContainer.TypeClass["firstAsync"] =
  Observable_firstAsync;

/**
 * @category Operator
 */
export const flatMapAsync = Observable_flatMapAsync;

export const flatMapIterable: ObservableContainer.TypeClass["flatMapIterable"] =
  Observable_flatMapIterable;

export const forEach: ObservableContainer.TypeClass["forEach"] =
  Observable_forEach;

export const forkCombineLatest: ObservableContainer.TypeClass["forkCombineLatest"] =
  Observable_forkCombineLatest;

export const forkMerge: ObservableContainer.TypeClass["forkMerge"] =
  Observable_forkMerge;

export const forkZip: ObservableContainer.TypeClass["forkZip"] =
  Observable_forkZip;

export const forkZipLatest: ObservableContainer.TypeClass["forkZipLatest"] =
  Observable_forkZipLatest;

/**
 * @category Constructor
 */
export const fromAsyncFactory = Observable_fromAsyncFactory;

export const fromAsyncIterable: ObservableContainer.TypeClass["fromAsyncIterable"] =
  AsyncIterable_toObservable;

export const identity: ObservableContainer.TypeClass["identity"] =
  Container_identity;

export const ignoreElements: ObservableContainer.TypeClass["ignoreElements"] =
  Observable_ignoreElements;

export const keep: ObservableContainer.TypeClass["keep"] = Observable_keep;

export const keepType: ObservableContainer.TypeClass["keepType"] =
  Observable_keepType as ObservableContainer.TypeClass["keepType"];

export const lastAsync: ObservableContainer.TypeClass["lastAsync"] =
  Observable_lastAsync;

export const map: ObservableContainer.TypeClass["map"] = Observable_map;

export const mapTo: ObservableContainer.TypeClass["mapTo"] = Observable_mapTo;

export const merge: ObservableContainer.TypeClass["merge"] = Observable_merge;

export const mergeAll: ObservableContainer.TypeClass["mergeAll"] =
  Observable_mergeAll;

export const mergeMap: ObservableContainer.TypeClass["mergeMap"] =
  Observable_mergeMap;

export const mergeWith: ObservableContainer.TypeClass["mergeWith"] =
  Observable_mergeWith as ObservableContainer.TypeClass["mergeWith"];

export const never: ObservableContainer.TypeClass["never"] = Observable_never;

/**
 * @category Operator
 */
export const onSubscribe: <T>(
  f: Factory<DisposableOrTeardown | void>,
) => Container.Operator<ObservableContainer.Type, T, T> =
  Observable_onSubscribe;

export const pairwise: ObservableContainer.TypeClass["pairwise"] =
  Observable_pairwise;

export const pick: ObservableContainer.TypeClass["pick"] = Observable_pick;

export const scan: ObservableContainer.TypeClass["scan"] = Observable_scan;

export const scanLast: ObservableContainer.TypeClass["scanLast"] =
  Observable_scanLast;

export const scanMany: ObservableContainer.TypeClass["scanMany"] =
  Observable_scanLast;

export const skipFirst: ObservableContainer.TypeClass["skipFirst"] =
  Observable_skipFirst;

export const switchAll: ObservableContainer.TypeClass["switchAll"] =
  Observable_switchAll;

export const switchMap: ObservableContainer.TypeClass["switchMap"] =
  Observable_switchMap;

export const subscribe: <T>(
  scheduler: SchedulerLike,
  options?: {
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
  },
) => Function1<ObservableLike<T>, DisposableLike> = Observable_subscribe;

/**
 * @category Operator
 */
export const subscribeOn = Observable_subscribeOn;

export const takeFirst: ObservableContainer.TypeClass["takeFirst"] =
  Observable_takeFirst;

export const takeLast: ObservableContainer.TypeClass["takeLast"] =
  Observable_takeLast;

export const takeUntil: ObservableContainer.TypeClass["takeUntil"] =
  Observable_takeUntil;

export const takeWhile: ObservableContainer.TypeClass["takeWhile"] =
  Observable_takeWhile;

export const throttle: ObservableContainer.TypeClass["throttle"] =
  Observable_throttle;

export const throwIfEmpty: ObservableContainer.TypeClass["throwIfEmpty"] =
  Observable_throwIfEmpty;

interface Throws extends ObservableContainer.TypeClass {
  /**
   * @category Constructor
   */
  throws<T>(options?: {
    delay?: number;
    raise?: Factory<unknown>;
  }): ObservableLike<T>;
}
export const throws: Throws["throws"] = Observable_throws;

export const timeout: ObservableContainer.TypeClass["timeout"] =
  Observable_timeout;

/**
 * @category Transform
 */
export const toEventSource = Observable_toEventSource;

export const toObservable: ObservableContainer.TypeClass["toObservable"] =
  identity;

export const withCurrentTime: ObservableContainer.TypeClass["withCurrentTime"] =
  Observable_withCurrentTime;

export const withLatestFrom: ObservableContainer.TypeClass["withLatestFrom"] =
  Observable_withLatestFrom as ObservableContainer.TypeClass["withLatestFrom"];

export const zip: ObservableContainer.TypeClass["zip"] = Observable_zip;

export const zipLatest: ObservableContainer.TypeClass["zipLatest"] =
  Observable_zipLatest;

export const zipWith: ObservableContainer.TypeClass["zipWith"] =
  Observable_zipWith;

export const zipWithLatestFrom: ObservableContainer.TypeClass["zipWithLatestFrom"] =
  Observable_zipWithLatestFrom;
