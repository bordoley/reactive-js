/// <reference types="./Observable.d.ts" />
import Promiseable_toObservable from '../containers/__internal__/Promiseable/Promiseable.toObservable.mjs';
import Flowable_toObservable from '../streaming/__internal__/Flowable/Flowable.toObservable.mjs';
import Disposable_toObservable from '../util/__internal__/Disposable/Disposable.toObservable.mjs';
import EnumerableObservable_never from './__internal__/EnumerableObservable/EnumerableObservable.never.mjs';
import Observable_buffer from './__internal__/Observable/Observable.buffer.mjs';
import Observable_catchError from './__internal__/Observable/Observable.catchError.mjs';
import Observable_combineLatest from './__internal__/Observable/Observable.combineLatest.mjs';
import Observable_concat from './__internal__/Observable/Observable.concat.mjs';
import Observable_concatAll from './__internal__/Observable/Observable.concatAll.mjs';
import Observable_create from './__internal__/Observable/Observable.create.mjs';
import Observable_decodeWithCharset from './__internal__/Observable/Observable.decodeWithCharset.mjs';
import Observable_defer from './__internal__/Observable/Observable.defer.mjs';
import Observable_distinctUntilChanged from './__internal__/Observable/Observable.distinctUntilChanged.mjs';
import Observable_empty from './__internal__/Observable/Observable.empty.mjs';
import Observable_everySatisfy from './__internal__/Observable/Observable.everySatisfy.mjs';
import Observable_forEach from './__internal__/Observable/Observable.forEach.mjs';
import Observable_forkCombineLatest from './__internal__/Observable/Observable.forkCombineLatest.mjs';
import Observable_forkMerge from './__internal__/Observable/Observable.forkMerge.mjs';
import Observable_forkZipLatest from './__internal__/Observable/Observable.forkZipLatest.mjs';
import Observable_fromArray from './__internal__/Observable/Observable.fromArray.mjs';
import Observable_generate from './__internal__/Observable/Observable.generate.mjs';
import Observable_isEnumerable from './__internal__/Observable/Observable.isEnumerable.mjs';
import Observable_isRunnable from './__internal__/Observable/Observable.isRunnable.mjs';
import Observable_keep from './__internal__/Observable/Observable.keep.mjs';
import Observable_map from './__internal__/Observable/Observable.map.mjs';
import Observable_mapAsync from './__internal__/Observable/Observable.mapAsync.mjs';
import Observable_merge from './__internal__/Observable/Observable.merge.mjs';
import Observable_mergeAll from './__internal__/Observable/Observable.mergeAll.mjs';
import Observable_multicast from './__internal__/Observable/Observable.multicast.mjs';
import Observable_onSubscribe from './__internal__/Observable/Observable.onSubscribe.mjs';
import Observable_pairwise from './__internal__/Observable/Observable.pairwise.mjs';
import Observable_reduce from './__internal__/Observable/Observable.reduce.mjs';
import Observable_repeat from './__internal__/Observable/Observable.repeat.mjs';
import Observable_retry from './__internal__/Observable/Observable.retry.mjs';
import Observable_scan from './__internal__/Observable/Observable.scan.mjs';
import Observable_scanAsync from './__internal__/Observable/Observable.scanAsync.mjs';
import Observable_share from './__internal__/Observable/Observable.share.mjs';
import Observable_skipFirst from './__internal__/Observable/Observable.skipFirst.mjs';
import Observable_someSatisfy from './__internal__/Observable/Observable.someSatisfy.mjs';
import Observable_subscribe from './__internal__/Observable/Observable.subscribe.mjs';
import Observable_subscribeOn from './__internal__/Observable/Observable.subscribeOn.mjs';
import Observable_switchAll from './__internal__/Observable/Observable.switchAll.mjs';
import Observable_takeFirst from './__internal__/Observable/Observable.takeFirst.mjs';
import Observable_takeLast from './__internal__/Observable/Observable.takeLast.mjs';
import Observable_takeUntil from './__internal__/Observable/Observable.takeUntil.mjs';
import Observable_takeWhile from './__internal__/Observable/Observable.takeWhile.mjs';
import Observable_throttle from './__internal__/Observable/Observable.throttle.mjs';
import Observable_throwIfEmpty from './__internal__/Observable/Observable.throwIfEmpty.mjs';
import Observable_timeout from './__internal__/Observable/Observable.timeout.mjs';
import Observable_toEnumerable from './__internal__/Observable/Observable.toEnumerable.mjs';
import Observable_toFlowable from './__internal__/Observable/Observable.toFlowable.mjs';
import Observable_toPromise from './__internal__/Observable/Observable.toPromise.mjs';
import Observable_toReadonlyArray from './__internal__/Observable/Observable.toReadonlyArray.mjs';
import Observable_toRunnable from './__internal__/Observable/Observable.toRunnable.mjs';
import Observable_withLatestFrom from './__internal__/Observable/Observable.withLatestFrom.mjs';
import Observable_zip from './__internal__/Observable/Observable.zip.mjs';
import Observable_zipLatest from './__internal__/Observable/Observable.zipLatest.mjs';
import Observable_zipWithLatestFrom from './__internal__/Observable/Observable.zipWithLatestFrom.mjs';

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
const never = EnumerableObservable_never;
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
const toEnumerable = Observable_toEnumerable;
const toFlowable = Observable_toFlowable;
const toPromise = Observable_toPromise;
const toReadonlyArray = Observable_toReadonlyArray;
const toRunnable = Observable_toRunnable;
const withLatestFrom = Observable_withLatestFrom;
const zip = Observable_zip;
/**
 * Returns an `ObservableLike` that zips the latest values from
 * multiple sources.
 */
const zipLatest = Observable_zipLatest;
const zipWithLatestFrom = Observable_zipWithLatestFrom;
/** @ignore */
const Observable = {
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
    toEnumerable,
    toFlowable,
    toPromise,
    toReadonlyArray,
    toRunnable,
    withLatestFrom,
    zip,
    zipLatest,
    zipWithLatestFrom,
};

export { buffer, catchError, combineLatest, concat, concatAll, create, decodeWithCharset, Observable as default, defer, distinctUntilChanged, empty, everySatisfy, exhaust, forEach, forkCombineLatest, forkMerge, forkZipLatest, fromArray, fromDisposable, fromFlowable, fromPromise, generate, isEnumerable, isRunnable, keep, map, mapAsync, merge, mergeAll, multicast, never, onSubscribe, pairwise, reduce, repeat, retry, scan, scanAsync, share, skipFirst, someSatisfy, subscribe, subscribeOn, switchAll, takeFirst, takeLast, takeUntil, takeWhile, throttle, throwIfEmpty, timeout, toEnumerable, toFlowable, toPromise, toReadonlyArray, toRunnable, withLatestFrom, zip, zipLatest, zipWithLatestFrom };
