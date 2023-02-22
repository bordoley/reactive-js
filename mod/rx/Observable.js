/// <reference types="./Observable.d.ts" />

import Iterable_toRunnableObservable from "../containers/Iterable/__internal__/Iterable.toRunnableObservable.js";
import Promiseable_toObservable from "../containers/Promiseable/__internal__/Promiseable.toObservable.js";
import ReadonlyArray_toRunnableObservable from "../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.js";
import Sequence_toRunnableObservable from "../containers/Sequence/__internal__/Sequence.toRunnableObservable.js";
import { returns, } from "../functions.js";
import Enumerable_toRunnableObservable from "../ix/Enumerable/__internal__/Enumerable.toRunnableObservable.js";
import Flowable_toObservable from "../streaming/Flowable/__internal__/Flowable.toObservable.js";
import Disposable_toObservable from "../util/Disposable/__internal__/Disposable.toObservable.js";
import { Observable_async, Observable_async__await, Observable_async__currentScheduler, Observable_async__do, Observable_async__memo, Observable_async__observe, Observable_async__state, Observable_async__stream, Observable_async__using, } from "./Observable/__internal__/Observable.async.js";
import Observable_buffer from "./Observable/__internal__/Observable.buffer.js";
import Observable_catchError from "./Observable/__internal__/Observable.catchError.js";
import Observable_combineLatest from "./Observable/__internal__/Observable.combineLatest.js";
import Observable_compute from "./Observable/__internal__/Observable.compute.js";
import Observable_concat from "./Observable/__internal__/Observable.concat.js";
import Observable_concatAll from "./Observable/__internal__/Observable.concatAll.js";
import Observable_concatMap from "./Observable/__internal__/Observable.concatMap.js";
import Observable_concatWith from "./Observable/__internal__/Observable.concatWith.js";
import Observable_concatYieldMap from "./Observable/__internal__/Observable.concatYieldMap.js";
import Observable_contains from "./Observable/__internal__/Observable.contains.js";
import Observable_create from "./Observable/__internal__/Observable.create.js";
import Observable_decodeWithCharset from "./Observable/__internal__/Observable.decodeWithCharset.js";
import Observable_defer from "./Observable/__internal__/Observable.defer.js";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_empty from "./Observable/__internal__/Observable.empty.js";
import Observable_encodeUtf8 from "./Observable/__internal__/Observable.encodeUtf8.js";
import Observable_endWith from "./Observable/__internal__/Observable.endWith.js";
import Observable_everySatisfy from "./Observable/__internal__/Observable.everySatisfy.js";
import Observable_forEach from "./Observable/__internal__/Observable.forEach.js";
import Observable_forkCombineLatest from "./Observable/__internal__/Observable.forkCombineLatest.js";
import Observable_forkMerge from "./Observable/__internal__/Observable.forkMerge.js";
import Observable_forkZipLatest from "./Observable/__internal__/Observable.forkZipLatest.js";
import Observable_generate from "./Observable/__internal__/Observable.generate.js";
import Observable_ignoreElements from "./Observable/__internal__/Observable.ignoreElements.js";
import Observable_isEnumerable from "./Observable/__internal__/Observable.isEnumerable.js";
import Observable_isRunnable from "./Observable/__internal__/Observable.isRunnable.js";
import Observable_keep from "./Observable/__internal__/Observable.keep.js";
import Observable_keepType from "./Observable/__internal__/Observable.keepType.js";
import Observable_map from "./Observable/__internal__/Observable.map.js";
import Observable_mapAsync from "./Observable/__internal__/Observable.mapAsync.js";
import Observable_mapTo from "./Observable/__internal__/Observable.mapTo.js";
import Observable_merge from "./Observable/__internal__/Observable.merge.js";
import Observable_mergeAll from "./Observable/__internal__/Observable.mergeAll.js";
import Observable_mergeWith from "./Observable/__internal__/Observable.mergeWith.js";
import Observable_multicast from "./Observable/__internal__/Observable.multicast.js";
import Observable_never from "./Observable/__internal__/Observable.never.js";
import Observable_onSubscribe from "./Observable/__internal__/Observable.onSubscribe.js";
import Observable_pairwise from "./Observable/__internal__/Observable.pairwise.js";
import Observable_reduce from "./Observable/__internal__/Observable.reduce.js";
import Observable_repeat from "./Observable/__internal__/Observable.repeat.js";
import Observable_retry from "./Observable/__internal__/Observable.retry.js";
import Observable_scan from "./Observable/__internal__/Observable.scan.js";
import Observable_scanAsync from "./Observable/__internal__/Observable.scanAsync.js";
import Observable_share from "./Observable/__internal__/Observable.share.js";
import Observable_skipFirst from "./Observable/__internal__/Observable.skipFirst.js";
import Observable_someSatisfy from "./Observable/__internal__/Observable.someSatisfy.js";
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
import Observable_toPromise from "./Observable/__internal__/Observable.toPromise.js";
import Observable_withLatestFrom from "./Observable/__internal__/Observable.withLatestFrom.js";
import Observable_zip from "./Observable/__internal__/Observable.zip.js";
import Observable_zipLatest from "./Observable/__internal__/Observable.zipLatest.js";
import Observable_zipWith from "./Observable/__internal__/Observable.zipWith.js";
import Observable_zipWithLatestFrom from "./Observable/__internal__/Observable.zipWithLatestFrom.js";
/**
 * @category AsyncEffect
 */
export const __memo = Observable_async__memo;
/**
 * @category AsyncEffect
 */
export const __await = Observable_async__await;
/**
 * @category AsyncEffect
 */
export const __currentScheduler = Observable_async__currentScheduler;
/**
 * @category AsyncEffect
 */
export const __do = Observable_async__do;
/**
 * @category AsyncEffect
 */
export const __observe = Observable_async__observe;
/**
 * @category AsyncEffect
 */
export const __state = Observable_async__state;
/**
 * @category AsyncEffect
 */
export const __stream = Observable_async__stream;
/**
 * @category AsyncEffect
 */
export const __using = Observable_async__using;
export const async = Observable_async;
export const buffer = Observable_buffer;
export const catchError = Observable_catchError;
export const combineLatest = Observable_combineLatest;
export const compute = Observable_compute;
export const concat = Observable_concat;
export const concatAll = Observable_concatAll;
export const concatMap = Observable_concatMap;
export const concatWith = Observable_concatWith;
export const concatYieldMap = Observable_concatYieldMap;
export const contains = Observable_contains;
export const create = Observable_create;
export const decodeWithCharset = Observable_decodeWithCharset;
export const defer = Observable_defer;
export const distinctUntilChanged = Observable_distinctUntilChanged;
export const empty = Observable_empty;
export const encodeUtf8 = Observable_encodeUtf8;
export const endWith = Observable_endWith;
export const everySatisfy = Observable_everySatisfy;
export const exhaust = /*@__PURE__*/ returns(Observable_mergeAll({
    maxBufferSize: 1,
    maxConcurrency: 1,
}));
export const forEach = Observable_forEach;
export const forkCombineLatest = Observable_forkCombineLatest;
export const forkMerge = Observable_forkMerge;
export const forkZipLatest = Observable_forkZipLatest;
export const fromDisposable = Disposable_toObservable;
export const fromEnumerable = Enumerable_toRunnableObservable;
export const fromIterable = Iterable_toRunnableObservable;
export const fromFlowable = Flowable_toObservable;
export const fromPromise = Promiseable_toObservable;
export const fromReadonlyArray = ReadonlyArray_toRunnableObservable;
export const fromSequence = Sequence_toRunnableObservable;
export const generate = Observable_generate;
export const ignoreElements = Observable_ignoreElements;
export const isEnumerable = Observable_isEnumerable;
export const isRunnable = Observable_isRunnable;
export const keep = Observable_keep;
export const keepType = Observable_keepType;
export const map = Observable_map;
export const mapAsync = Observable_mapAsync;
export const mapTo = Observable_mapTo;
export const merge = Observable_merge;
export const mergeAll = Observable_mergeAll;
// FIXME: Type
export const mergeWith = Observable_mergeWith;
/**
 * Returns a `MulticastObservableLike` backed by a single subscription to the source.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source observable.
 * @param replay The number of events that should be replayed when the `MulticastObservableLike`
 * is subscribed to.
 */
export const multicast = Observable_multicast;
export const never = Observable_never;
export const onSubscribe = Observable_onSubscribe;
export const pairwise = Observable_pairwise;
export const reduce = Observable_reduce;
export const repeat = Observable_repeat;
export const retry = Observable_retry;
export const scan = Observable_scan;
export const scanAsync = Observable_scanAsync;
/**
 * Returns an `ObservableLike` backed by a shared refcounted subscription to the
 * source. When the refcount goes to 0, the underlying subscription
 * to the source is disposed.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source.
 * @param replay The number of events that should be replayed when the `ObservableLike`
 * is subscribed to.
 */
export const share = Observable_share;
export const skipFirst = Observable_skipFirst;
export const someSatisfy = Observable_someSatisfy;
export const startWith = Observable_startWith;
export const switchAll = Observable_switchAll;
// FIXME: Type
export const switchMap = Observable_switchMap;
export const subscribe = Observable_subscribe;
export const subscribeOn = Observable_subscribeOn;
export const takeFirst = Observable_takeFirst;
export const takeLast = Observable_takeLast;
export const takeUntil = Observable_takeUntil;
export const takeWhile = Observable_takeWhile;
export const throttle = Observable_throttle;
export const throwIfEmpty = Observable_throwIfEmpty;
export const throws = Observable_throws;
export const timeout = Observable_timeout;
export const toPromise = Observable_toPromise;
export const withLatestFrom = Observable_withLatestFrom;
export const zip = Observable_zip;
export const zipLatest = Observable_zipLatest;
const zipWith = Observable_zipWith;
export const zipWithLatestFrom = Observable_zipWithLatestFrom;
/** @ignore */
const Observable = {
    async,
    buffer,
    catchError,
    combineLatest,
    compute,
    concat,
    concatAll,
    concatMap,
    concatWith,
    concatYieldMap,
    contains,
    decodeWithCharset,
    defer,
    distinctUntilChanged,
    empty,
    encodeUtf8,
    endWith,
    everySatisfy,
    forEach,
    fromEnumerable,
    fromFlowable,
    fromIterable,
    fromPromise,
    fromReadonlyArray,
    fromSequence,
    generate,
    ignoreElements,
    isEnumerable,
    isRunnable,
    keep,
    keepType,
    map,
    mapTo,
    merge,
    mergeWith,
    never,
    onSubscribe,
    pairwise,
    reduce,
    repeat,
    retry,
    scan,
    scanAsync,
    share,
    skipFirst,
    someSatisfy,
    startWith,
    subscribe,
    switchAll,
    switchMap,
    takeFirst,
    takeLast,
    takeUntil,
    takeWhile,
    throttle,
    throwIfEmpty,
    throws,
    timeout,
    toPromise,
    withLatestFrom,
    zip,
    zipLatest,
    zipWith,
    zipWithLatestFrom,
};
export default Observable;
