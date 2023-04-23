/// <reference types="./Observable.d.ts" />

import AsyncIterable_toObservable from "../containers/AsyncIterable/__internal__/AsyncIterable.toObservable.js";
import Container_identity from "../containers/Container/__internal__/Container.identity.js";
import Iterable_toObservable from "../containers/Iterable/__internal__/Iterable.toObservable.js";
import Optional_toObservable from "../containers/Optional/__internal__/Optional.toObservable.js";
import ReadonlyArray_toObservable from "../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import AsyncEnumerable_toObservable from "../streaming/AsyncEnumerable/__internal__/AsyncEnumerable.toObservable.js";
import Flowable_toObservable from "../streaming/Flowable/__internal__/Flowable.toObservable.js";
import Observable_animate from "./Observable/__internal__/Observable.animate.js";
import Observable_backpressureStrategy from "./Observable/__internal__/Observable.backpressureStrategy.js";
import Observable_buffer from "./Observable/__internal__/Observable.buffer.js";
import Observable_catchError from "./Observable/__internal__/Observable.catchError.js";
import Observable_combineLatest from "./Observable/__internal__/Observable.combineLatest.js";
import { Observable_compute } from "./Observable/__internal__/Observable.compute.js";
import Observable_concat from "./Observable/__internal__/Observable.concat.js";
import Observable_concatAll from "./Observable/__internal__/Observable.concatAll.js";
import Observable_concatMap from "./Observable/__internal__/Observable.concatMap.js";
import Observable_concatWith from "./Observable/__internal__/Observable.concatWith.js";
import Observable_create from "./Observable/__internal__/Observable.create.js";
import Observable_currentTime from "./Observable/__internal__/Observable.currentTime.js";
import Observable_decodeWithCharset from "./Observable/__internal__/Observable.decodeWithCharset.js";
import Observable_defer from "./Observable/__internal__/Observable.defer.js";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_empty from "./Observable/__internal__/Observable.empty.js";
import Observable_encodeUtf8 from "./Observable/__internal__/Observable.encodeUtf8.js";
import Observable_endWith from "./Observable/__internal__/Observable.endWith.js";
import Observable_enqueue from "./Observable/__internal__/Observable.enqueue.js";
import Observable_exhaust from "./Observable/__internal__/Observable.exhaust.js";
import Observable_exhaustMap from "./Observable/__internal__/Observable.exhaustMap.js";
import Observable_firstAsync from "./Observable/__internal__/Observable.firstAsync.js";
import Observable_flatMapAsync from "./Observable/__internal__/Observable.flatMapAsync.js";
import Observable_flatMapIterable from "./Observable/__internal__/Observable.flatMapIterable.js";
import Observable_forEach from "./Observable/__internal__/Observable.forEach.js";
import Observable_forkCombineLatest from "./Observable/__internal__/Observable.forkCombineLatest.js";
import Observable_forkConcat from "./Observable/__internal__/Observable.forkConcat.js";
import Observable_forkMerge from "./Observable/__internal__/Observable.forkMerge.js";
import Observable_forkZip from "./Observable/__internal__/Observable.forkZip.js";
import Observable_forkZipLatest from "./Observable/__internal__/Observable.forkZipLatest.js";
import Observable_fromAsyncFactory from "./Observable/__internal__/Observable.fromAsyncFactory.js";
import Observable_fromFactory from "./Observable/__internal__/Observable.fromFactory.js";
import Observable_generate from "./Observable/__internal__/Observable.generate.js";
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
import Observable_multicast from "./Observable/__internal__/Observable.multicast.js";
import Observable_never from "./Observable/__internal__/Observable.never.js";
import Observable_onSubscribe from "./Observable/__internal__/Observable.onSubscribe.js";
import Observable_pairwise from "./Observable/__internal__/Observable.pairwise.js";
import Observable_pick from "./Observable/__internal__/Observable.pick.js";
import Observable_repeat from "./Observable/__internal__/Observable.repeat.js";
import Observable_retry from "./Observable/__internal__/Observable.retry.js";
import Observable_scan from "./Observable/__internal__/Observable.scan.js";
import Observable_scanLast from "./Observable/__internal__/Observable.scanLast.js";
import Observable_share from "./Observable/__internal__/Observable.share.js";
import Observable_skipFirst from "./Observable/__internal__/Observable.skipFirst.js";
import Observable_startWith from "./Observable/__internal__/Observable.startWith.js";
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
import Observable_toEnumerable from "./Observable/__internal__/Observable.toEnumerable.js";
import Observable_toEventSource from "./Observable/__internal__/Observable.toEventSource.js";
import Observable_toRunnable from "./Observable/__internal__/Observable.toRunnable.js";
import Observable_withCurrentTime from "./Observable/__internal__/Observable.withCurrentTime.js";
import Observable_withLatestFrom from "./Observable/__internal__/Observable.withLatestFrom.js";
import Observable_zip from "./Observable/__internal__/Observable.zip.js";
import Observable_zipLatest from "./Observable/__internal__/Observable.zipLatest.js";
import Observable_zipWith from "./Observable/__internal__/Observable.zipWith.js";
import Observable_zipWithLatestFrom from "./Observable/__internal__/Observable.zipWithLatestFrom.js";
import Runnable_fromEnumeratorFactory from "./Runnable/__internal__/Runnable.fromEnumeratorFactory.js";
export const animate = Observable_animate;
export const backpressureStrategy = Observable_backpressureStrategy;
/**
 * @category Operator
 */
export const buffer = Observable_buffer;
export const catchError = Observable_catchError;
export const combineLatest = Observable_combineLatest;
/**
 * @category Constructor
 */
export const compute = Observable_compute;
export const concat = Observable_concat;
export const concatAll = Observable_concatAll;
export const concatMap = Observable_concatMap;
export const concatWith = Observable_concatWith;
/**
 * @category Constructor
 */
export const create = Observable_create;
export const currentTime = Observable_currentTime;
export const decodeWithCharset = Observable_decodeWithCharset;
export const defer = Observable_defer;
export const distinctUntilChanged = Observable_distinctUntilChanged;
export const empty = Observable_empty;
export const encodeUtf8 = Observable_encodeUtf8;
export const enqueue = Observable_enqueue;
export const endWith = Observable_endWith;
export const exhaust = Observable_exhaust;
export const exhaustMap = Observable_exhaustMap;
export const firstAsync = Observable_firstAsync;
/**
 * @category Operator
 */
export const flatMapAsync = Observable_flatMapAsync;
export const flatMapIterable = Observable_flatMapIterable;
export const forEach = Observable_forEach;
export const forkCombineLatest = Observable_forkCombineLatest;
export const forkConcat = Observable_forkConcat;
export const forkMerge = Observable_forkMerge;
export const forkZip = Observable_forkZip;
export const forkZipLatest = Observable_forkZipLatest;
export const fromAsyncEnumerable = AsyncEnumerable_toObservable;
/**
 * @category Constructor
 */
export const fromAsyncFactory = Observable_fromAsyncFactory;
export const fromAsyncIterable = AsyncIterable_toObservable;
export const fromEnumeratorFactory = Runnable_fromEnumeratorFactory;
export const fromFactory = Observable_fromFactory;
export const fromFlowable = Flowable_toObservable;
export const fromIterable = Iterable_toObservable;
export const fromOptional = Optional_toObservable;
export const fromReadonlyArray = ReadonlyArray_toObservable;
export const generate = Observable_generate;
export const identity = Container_identity;
export const ignoreElements = Observable_ignoreElements;
export const keep = Observable_keep;
export const keepType = Observable_keepType;
export const lastAsync = Observable_lastAsync;
export const map = Observable_map;
export const mapTo = Observable_mapTo;
export const merge = Observable_merge;
export const mergeAll = Observable_mergeAll;
export const mergeMap = Observable_mergeMap;
export const mergeWith = Observable_mergeWith;
/**
 * Returns a `MulticastObservableLike` backed by a single subscription to the source.
 *
 * @param scheduler - A `SchedulerLike` that is used to subscribe to the source observable.
 *
 * @category Transform
 */
export const multicast = Observable_multicast;
export const never = Observable_never;
/**
 * @category Operator
 */
export const onSubscribe = Observable_onSubscribe;
export const pairwise = Observable_pairwise;
export const pick = Observable_pick;
export const repeat = Observable_repeat;
export const retry = Observable_retry;
export const scan = Observable_scan;
export const scanLast = Observable_scanLast;
export const scanMany = Observable_scanLast;
/**
 * Returns an `ObservableLike` backed by a shared refcounted subscription to the
 * source. When the refcount goes to 0, the underlying subscription
 * to the source is disposed.
 *
 * @param scheduler - A `SchedulerLike` that is used to subscribe to the source.
 * @param replay - The number of events that should be replayed when the `ObservableLike`
 * is subscribed to.
 *
 * @category Operator
 */
export const share = Observable_share;
export const skipFirst = Observable_skipFirst;
export const startWith = Observable_startWith;
export const switchAll = Observable_switchAll;
export const switchMap = Observable_switchMap;
export const subscribe = Observable_subscribe;
/**
 * @category Operator
 */
export const subscribeOn = Observable_subscribeOn;
export const takeFirst = Observable_takeFirst;
export const takeLast = Observable_takeLast;
export const takeUntil = Observable_takeUntil;
export const takeWhile = Observable_takeWhile;
export const throttle = Observable_throttle;
export const throwIfEmpty = Observable_throwIfEmpty;
export const throws = Observable_throws;
export const timeout = Observable_timeout;
export const toEnumerable = Observable_toEnumerable;
/**
 * @category Transform
 */
export const toEventSource = Observable_toEventSource;
export const toObservable = identity;
export const toRunnable = Observable_toRunnable;
export const withCurrentTime = Observable_withCurrentTime;
export const withLatestFrom = Observable_withLatestFrom;
export const zip = Observable_zip;
export const zipLatest = Observable_zipLatest;
export const zipWith = Observable_zipWith;
export const zipWithLatestFrom = Observable_zipWithLatestFrom;
