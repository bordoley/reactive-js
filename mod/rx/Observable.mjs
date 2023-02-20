/// <reference types="./Observable.d.ts" />
import Iterable_toRunnableObservable from '../containers/Iterable/__internal__/Iterable.toRunnableObservable.mjs';
import Promiseable_toObservable from '../containers/Promiseable/__internal__/Promiseable.toObservable.mjs';
import ReadonlyArray_toRunnableObservable from '../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.mjs';
import Sequence_toRunnableObservable from '../containers/Sequence/__internal__/Sequence.toRunnableObservable.mjs';
import { returns } from '../functions.mjs';
import Enumerable_toRunnableObservable from '../ix/Enumerable/__internal__/Enumerable.toRunnableObservable.mjs';
import Flowable_toObservable from '../streaming/Flowable/__internal__/Flowable.toObservable.mjs';
import Disposable_toObservable from '../util/Disposable/__internal__/Disposable.toObservable.mjs';
import { Observable_async__memo, Observable_async__await, Observable_async__currentScheduler, Observable_async__do, Observable_async__observe, Observable_async__state, Observable_async__stream, Observable_async__using, Observable_async } from './Observable/__internal__/Observable.async.mjs';
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
import Observable_toPromise from './Observable/__internal__/Observable.toPromise.mjs';
import Observable_withLatestFrom from './Observable/__internal__/Observable.withLatestFrom.mjs';
import Observable_zip from './Observable/__internal__/Observable.zip.mjs';
import Observable_zipLatest from './Observable/__internal__/Observable.zipLatest.mjs';
import Observable_zipWithLatestFrom from './Observable/__internal__/Observable.zipWithLatestFrom.mjs';

/**
 * @category AsyncEffect
 */
const __memo = Observable_async__memo;
/**
 * @category AsyncEffect
 */
const __await = Observable_async__await;
/**
 * @category AsyncEffect
 */
const __currentScheduler = Observable_async__currentScheduler;
/**
 * @category AsyncEffect
 */
const __do = Observable_async__do;
/**
 * @category AsyncEffect
 */
const __observe = Observable_async__observe;
/**
 * @category AsyncEffect
 */
const __state = Observable_async__state;
/**
 * @category AsyncEffect
 */
const __stream = Observable_async__stream;
/**
 * @category AsyncEffect
 */
const __using = Observable_async__using;
const async = Observable_async;
const buffer = Observable_buffer;
const catchError = Observable_catchError;
const combineLatest = Observable_combineLatest;
const concat = Observable_concat;
const concatAll = Observable_concatAll;
const create = Observable_create;
const decodeWithCharset = Observable_decodeWithCharset;
const defer = Observable_defer;
const distinctUntilChanged = Observable_distinctUntilChanged;
const empty = Observable_empty;
const everySatisfy = Observable_everySatisfy;
const exhaust = /*@__PURE__*/ returns(Observable_mergeAll({
    maxBufferSize: 1,
    maxConcurrency: 1,
}));
const forEach = Observable_forEach;
const forkCombineLatest = Observable_forkCombineLatest;
const forkMerge = Observable_forkMerge;
const forkZipLatest = Observable_forkZipLatest;
const fromDisposable = Disposable_toObservable;
const fromEnumerable = Enumerable_toRunnableObservable;
const fromIterable = Iterable_toRunnableObservable;
const fromFlowable = Flowable_toObservable;
const fromPromise = Promiseable_toObservable;
const fromReadonlyArray = ReadonlyArray_toRunnableObservable;
const fromSequence = Sequence_toRunnableObservable;
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
    fromEnumerable,
    fromFlowable,
    fromIterable,
    fromPromise,
    fromReadonlyArray,
    fromSequence,
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
    toPromise,
    withLatestFrom,
    zip,
    zipLatest,
    zipWithLatestFrom,
};

export { __await, __currentScheduler, __do, __memo, __observe, __state, __stream, __using, async, buffer, catchError, combineLatest, concat, concatAll, create, decodeWithCharset, Observable as default, defer, distinctUntilChanged, empty, everySatisfy, exhaust, forEach, forkCombineLatest, forkMerge, forkZipLatest, fromDisposable, fromEnumerable, fromFlowable, fromIterable, fromPromise, fromReadonlyArray, fromSequence, generate, isEnumerable, isRunnable, keep, map, mapAsync, merge, mergeAll, multicast, never, onSubscribe, pairwise, reduce, repeat, retry, scan, scanAsync, share, skipFirst, someSatisfy, subscribe, subscribeOn, switchAll, takeFirst, takeLast, takeUntil, takeWhile, throttle, throwIfEmpty, timeout, toPromise, withLatestFrom, zip, zipLatest, zipWithLatestFrom };
