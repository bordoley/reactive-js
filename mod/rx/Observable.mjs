/// <reference types="./Observable.d.ts" />
import Promiseable_toObservable from '../containers/Promiseable/__internal__/Promiseable.toObservable.mjs';
import Flowable_toObservable from '../streaming/Flowable/__internal__/Flowable.toObservable.mjs';
import Disposable_toObservable from '../util/Disposable/__internal__/Disposable.toObservable.mjs';
import Observable_async from './Observable/__internal__/Observable.async.mjs';
import Observable_buffer from './Observable/__internal__/Observable.buffer.mjs';
import Observable_catchError from './Observable/__internal__/Observable.catchError.mjs';
import Observable_combineLatest from './Observable/__internal__/Observable.combineLatest.mjs';
import Observable_concat from './Observable/__internal__/Observable.concat.mjs';
import Observable_concatAll from './Observable/__internal__/Observable.concatAll.mjs';
import Observable_create from './Observable/__internal__/Observable.create.mjs';
import Observable_decodeWithCharset from './Observable/__internal__/Observable.decodeWithCharset.mjs';
import Observable_defer from './Observable/__internal__/Observable.defer.mjs';
import Observable_distinctUntilChanged from './Observable/__internal__/Observable.distinctUntilChanged.mjs';
import Observable_empty from './Observable/__internal__/Observable.empty.mjs';
import Observable_everySatisfy from './Observable/__internal__/Observable.everySatisfy.mjs';
import Observable_forEach from './Observable/__internal__/Observable.forEach.mjs';
import Observable_forkCombineLatest from './Observable/__internal__/Observable.forkCombineLatest.mjs';
import Observable_forkMerge from './Observable/__internal__/Observable.forkMerge.mjs';
import Observable_forkZipLatest from './Observable/__internal__/Observable.forkZipLatest.mjs';
import Observable_fromArray from './Observable/__internal__/Observable.fromArray.mjs';
import Observable_generate from './Observable/__internal__/Observable.generate.mjs';
import Observable_isEnumerable from './Observable/__internal__/Observable.isEnumerable.mjs';
import Observable_isRunnable from './Observable/__internal__/Observable.isRunnable.mjs';
import Observable_keep from './Observable/__internal__/Observable.keep.mjs';
import Observable_map from './Observable/__internal__/Observable.map.mjs';
import Observable_mapAsync from './Observable/__internal__/Observable.mapAsync.mjs';
import Observable_merge from './Observable/__internal__/Observable.merge.mjs';
import Observable_mergeAll from './Observable/__internal__/Observable.mergeAll.mjs';
import Observable_multicast from './Observable/__internal__/Observable.multicast.mjs';
import Observable_never from './Observable/__internal__/Observable.never.mjs';
import Observable_onSubscribe from './Observable/__internal__/Observable.onSubscribe.mjs';
import Observable_pairwise from './Observable/__internal__/Observable.pairwise.mjs';
import Observable_reduce from './Observable/__internal__/Observable.reduce.mjs';
import Observable_repeat from './Observable/__internal__/Observable.repeat.mjs';
import Observable_retry from './Observable/__internal__/Observable.retry.mjs';
import Observable_scan from './Observable/__internal__/Observable.scan.mjs';
import Observable_scanAsync from './Observable/__internal__/Observable.scanAsync.mjs';
import Observable_share from './Observable/__internal__/Observable.share.mjs';
import Observable_skipFirst from './Observable/__internal__/Observable.skipFirst.mjs';
import Observable_someSatisfy from './Observable/__internal__/Observable.someSatisfy.mjs';
import Observable_subscribe from './Observable/__internal__/Observable.subscribe.mjs';
import Observable_subscribeOn from './Observable/__internal__/Observable.subscribeOn.mjs';
import Observable_switchAll from './Observable/__internal__/Observable.switchAll.mjs';
import Observable_takeFirst from './Observable/__internal__/Observable.takeFirst.mjs';
import Observable_takeLast from './Observable/__internal__/Observable.takeLast.mjs';
import Observable_takeUntil from './Observable/__internal__/Observable.takeUntil.mjs';
import Observable_takeWhile from './Observable/__internal__/Observable.takeWhile.mjs';
import Observable_throttle from './Observable/__internal__/Observable.throttle.mjs';
import Observable_throwIfEmpty from './Observable/__internal__/Observable.throwIfEmpty.mjs';
import Observable_timeout from './Observable/__internal__/Observable.timeout.mjs';
import Observable_toFlowable from './Observable/__internal__/Observable.toFlowable.mjs';
import Observable_toPromise from './Observable/__internal__/Observable.toPromise.mjs';
import Observable_withLatestFrom from './Observable/__internal__/Observable.withLatestFrom.mjs';
import Observable_zip from './Observable/__internal__/Observable.zip.mjs';
import Observable_zipLatest from './Observable/__internal__/Observable.zipLatest.mjs';
import Observable_zipWithLatestFrom from './Observable/__internal__/Observable.zipWithLatestFrom.mjs';

const async = Observable_async;
const buffer = Observable_buffer;
const catchError = Observable_catchError;
/**
 * Returns an `ObservableLike` that combines the latest values from
 * multiple sources.
 */
const combineLatest = Observable_combineLatest;
/**
 * Creates an `ObservableLike` which emits all values from each source sequentially.
 */
const concat = Observable_concat;
/**
 * Converts a higher-order `ObservableLike` into a first-order
 * `ObservableLike` by concatenating the inner sources in order.
 *
 * @param maxBufferSize The number of source observables that may be queued before dropping previous observables.
 */
const concatAll = Observable_concatAll;
const create = Observable_create;
const decodeWithCharset = Observable_decodeWithCharset;
const defer = Observable_defer;
const distinctUntilChanged = Observable_distinctUntilChanged;
const empty = Observable_empty;
const everySatisfy = Observable_everySatisfy;
/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
 * by dropping inner sources while the previous inner source
 * has not yet been disposed.
 */
const exhaust = () => mergeAll({
    maxBufferSize: 1,
    maxConcurrency: 1,
});
const forEach = Observable_forEach;
const forkCombineLatest = Observable_forkCombineLatest;
const forkMerge = Observable_forkMerge;
const forkZipLatest = Observable_forkZipLatest;
const fromArray = Observable_fromArray;
const fromDisposable = Disposable_toObservable;
const fromFlowable = Flowable_toObservable;
const fromPromise = Promiseable_toObservable;
const generate = Observable_generate;
const isEnumerable = Observable_isEnumerable;
const isRunnable = Observable_isRunnable;
const keep = Observable_keep;
const map = Observable_map;
const mapAsync = Observable_mapAsync;
const merge = Observable_merge;
const mergeAll = Observable_mergeAll;
/**
 * Returns a `MulticastObservableLike` backed by a single subscription to the source.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source observable.
 * @param replay The number of events that should be replayed when the `MulticastObservableLike`
 * is subscribed to.
 */
const multicast = Observable_multicast;
const never = Observable_never;
const onSubscribe = Observable_onSubscribe;
const pairwise = Observable_pairwise;
const reduce = Observable_reduce;
const repeat = Observable_repeat;
const retry = Observable_retry;
const scan = Observable_scan;
/**
 * Returns the `ObservableLike` that applies an asynchronous accumulator function
 * over the source, and emits each intermediate result.
 *
 * @param scanner The accumulator function called on each source value.
 * @param initialValue The initial accumulation value.
 */
const scanAsync = Observable_scanAsync;
/**
 * Returns an `ObservableLike` backed by a shared refcounted subscription to the
 * source. When the refcount goes to 0, the underlying subscription
 * to the source is disposed.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source.
 * @param replay The number of events that should be replayed when the `ObservableLike`
 * is subscribed to.
 */
const share = Observable_share;
const skipFirst = Observable_skipFirst;
const someSatisfy = Observable_someSatisfy;
const switchAll = Observable_switchAll;
const subscribe = Observable_subscribe;
const subscribeOn = Observable_subscribeOn;
const takeFirst = Observable_takeFirst;
const takeLast = Observable_takeLast;
const takeUntil = Observable_takeUntil;
const takeWhile = Observable_takeWhile;
const throttle = Observable_throttle;
const throwIfEmpty = Observable_throwIfEmpty;
const timeout = Observable_timeout;
const toFlowable = Observable_toFlowable;
const toPromise = Observable_toPromise;
const withLatestFrom = Observable_withLatestFrom;
const zip = Observable_zip;
const zipLatest = Observable_zipLatest;
const zipWithLatestFrom = Observable_zipWithLatestFrom;
/** @ignore */
const Observable = {
    async,
    buffer,
    catchError,
    combineLatest,
    concat,
    concatAll,
    decodeWithCharset,
    defer,
    distinctUntilChanged,
    empty,
    everySatisfy,
    forEach,
    fromArray,
    fromFlowable,
    fromPromise,
    generate,
    isEnumerable,
    isRunnable,
    keep,
    map,
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
    subscribe,
    takeFirst,
    takeLast,
    takeUntil,
    takeWhile,
    throttle,
    throwIfEmpty,
    timeout,
    toFlowable,
    toPromise,
    withLatestFrom,
    zip,
    zipLatest,
    zipWithLatestFrom,
};

export { async, buffer, catchError, combineLatest, concat, concatAll, create, decodeWithCharset, Observable as default, defer, distinctUntilChanged, empty, everySatisfy, exhaust, forEach, forkCombineLatest, forkMerge, forkZipLatest, fromArray, fromDisposable, fromFlowable, fromPromise, generate, isEnumerable, isRunnable, keep, map, mapAsync, merge, mergeAll, multicast, never, onSubscribe, pairwise, reduce, repeat, retry, scan, scanAsync, share, skipFirst, someSatisfy, subscribe, subscribeOn, switchAll, takeFirst, takeLast, takeUntil, takeWhile, throttle, throwIfEmpty, timeout, toFlowable, toPromise, withLatestFrom, zip, zipLatest, zipWithLatestFrom };
