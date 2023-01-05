/// <reference types="./ObservableLike.d.ts" />
import { MAX_SAFE_INTEGER } from '../__internal__/constants.mjs';
import { concatMap } from '../containers/ContainerLike.mjs';
import IterableLike__toObservable from '../containers/__internal__/PromiseableLike/PromiseableLike.toObservable.mjs';
import { pipe } from '../functions.mjs';
import EnumerableObservableLike__never from './__internal__/EnumerableObservableLike/EnumerableObservableLike.never.mjs';
import ObservableLike__buffer from './__internal__/ObservableLike/ObservableLike.buffer.mjs';
import ObservableLike__catchError from './__internal__/ObservableLike/ObservableLike.catchError.mjs';
import ObservableLike__combineLatest from './__internal__/ObservableLike/ObservableLike.combineLatest.mjs';
import ObservableLike__concat from './__internal__/ObservableLike/ObservableLike.concat.mjs';
import ObservableLike__create from './__internal__/ObservableLike/ObservableLike.create.mjs';
import ObservableLike__decodeWithCharset from './__internal__/ObservableLike/ObservableLike.decodeWithCharset.mjs';
import ObservableLike__defer from './__internal__/ObservableLike/ObservableLike.defer.mjs';
import ObservableLike__distinctUntilChanged from './__internal__/ObservableLike/ObservableLike.distinctUntilChanged.mjs';
import ObservableLike__empty from './__internal__/ObservableLike/ObservableLike.empty.mjs';
import ObservableLike__everySatisfy from './__internal__/ObservableLike/ObservableLike.everySatisfy.mjs';
import ObservableLike__forEach from './__internal__/ObservableLike/ObservableLike.forEach.mjs';
import ObservableLike__forkCombineLatest from './__internal__/ObservableLike/ObservableLike.forkCombineLatest.mjs';
import ObservableLike__forkMerge from './__internal__/ObservableLike/ObservableLike.forkMerge.mjs';
import ObservableLike__forkZipLatest from './__internal__/ObservableLike/ObservableLike.forkZipLatest.mjs';
import ObservableLike__generate from './__internal__/ObservableLike/ObservableLike.generate.mjs';
import ObservableLike__isEnumerable from './__internal__/ObservableLike/ObservableLike.isEnumerable.mjs';
import ObservableLike__isRunnable from './__internal__/ObservableLike/ObservableLike.isRunnable.mjs';
import ObservableLike__keep from './__internal__/ObservableLike/ObservableLike.keep.mjs';
import ObservableLike__map from './__internal__/ObservableLike/ObservableLike.map.mjs';
import ObservableLike__mapT from './__internal__/ObservableLike/ObservableLike.mapT.mjs';
import ObservableLike__merge from './__internal__/ObservableLike/ObservableLike.merge.mjs';
import ObservableLike__mergeAll from './__internal__/ObservableLike/ObservableLike.mergeAll.mjs';
import ObservableLike__multicast from './__internal__/ObservableLike/ObservableLike.multicast.mjs';
import ObservableLike__onSubscribe from './__internal__/ObservableLike/ObservableLike.onSubscribe.mjs';
import ObservableLike__pairwise from './__internal__/ObservableLike/ObservableLike.pairwise.mjs';
import ObservableLike__reduce from './__internal__/ObservableLike/ObservableLike.reduce.mjs';
import ObservableLike__repeat from './__internal__/ObservableLike/ObservableLike.repeat.mjs';
import ObservableLike__retry from './__internal__/ObservableLike/ObservableLike.retry.mjs';
import ObservableLike__scan from './__internal__/ObservableLike/ObservableLike.scan.mjs';
import ObservableLike__scanAsync from './__internal__/ObservableLike/ObservableLike.scanAsync.mjs';
import ObservableLike__share from './__internal__/ObservableLike/ObservableLike.share.mjs';
import ObservableLike__skipFirst from './__internal__/ObservableLike/ObservableLike.skipFirst.mjs';
import ObservableLike__someSatisfy from './__internal__/ObservableLike/ObservableLike.someSatisfy.mjs';
import ObservableLike__subscribe from './__internal__/ObservableLike/ObservableLike.subscribe.mjs';
import ObservableLike__subscribeOn from './__internal__/ObservableLike/ObservableLike.subscribeOn.mjs';
import ObservableLike__switchAll from './__internal__/ObservableLike/ObservableLike.switchAll.mjs';
import ObservableLike__takeFirst from './__internal__/ObservableLike/ObservableLike.takeFirst.mjs';
import ObservableLike__takeLast from './__internal__/ObservableLike/ObservableLike.takeLast.mjs';
import ObservableLike__takeUntil from './__internal__/ObservableLike/ObservableLike.takeUntil.mjs';
import ObservableLike__takeWhile from './__internal__/ObservableLike/ObservableLike.takeWhile.mjs';
import ObservableLike__throttle from './__internal__/ObservableLike/ObservableLike.throttle.mjs';
import ObservableLike__throwIfEmpty from './__internal__/ObservableLike/ObservableLike.throwIfEmpty.mjs';
import ObservableLike__timeout from './__internal__/ObservableLike/ObservableLike.timeout.mjs';
import ObservableLike__toEnumerable from './__internal__/ObservableLike/ObservableLike.toEnumerable.mjs';
import ObservableLike__toFlowable from './__internal__/ObservableLike/ObservableLike.toFlowable.mjs';
import ObservableLike__toPromise from './__internal__/ObservableLike/ObservableLike.toPromise.mjs';
import ObservableLike__toReadonlyArray from './__internal__/ObservableLike/ObservableLike.toReadonlyArray.mjs';
import ObservableLike__withLatestFrom from './__internal__/ObservableLike/ObservableLike.withLatestFrom.mjs';
import ObservableLike__zip from './__internal__/ObservableLike/ObservableLike.zip.mjs';
import ObservableLike__zipLatest from './__internal__/ObservableLike/ObservableLike.zipLatest.mjs';
import ObservableLike__zipWithLatestFrom from './__internal__/ObservableLike/ObservableLike.zipWithLatestFrom.mjs';

const buffer = ObservableLike__buffer;
const bufferT = {
    buffer,
};
const catchError = ObservableLike__catchError;
/**
 * Returns an `ObservableLike` that combines the latest values from
 * multiple sources.
 */
const combineLatest = ObservableLike__combineLatest;
const combineLatestT = {
    zip: combineLatest,
};
/**
 * Creates an `ObservableLike` which emits all values from each source sequentially.
 */
const concat = ObservableLike__concat;
const concatT = {
    concat,
};
/**
 * Converts a higher-order `ObservableLike` into a first-order
 * `ObservableLike` by concatenating the inner sources in order.
 *
 * @param maxBufferSize The number of source observables that may be queued before dropping previous observables.
 */
const concatAll = (options = {}) => {
    const { maxBufferSize = MAX_SAFE_INTEGER } = options;
    return mergeAll({ maxBufferSize, maxConcurrency: 1 });
};
const concatAllT = {
    concatAll,
};
const create = ObservableLike__create;
const decodeWithCharset = ObservableLike__decodeWithCharset;
const decodeWithCharsetT = {
    decodeWithCharset,
};
const defer = ObservableLike__defer;
const deferT = {
    defer,
};
const distinctUntilChanged = ObservableLike__distinctUntilChanged;
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const empty = ObservableLike__empty;
const emptyT = {
    empty,
};
const everySatisfy = ObservableLike__everySatisfy;
const everySatisfyT = { everySatisfy };
/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
 * by dropping inner sources while the previous inner source
 * has not yet been disposed.
 */
const exhaust = () => mergeAll({
    maxBufferSize: 1,
    maxConcurrency: 1,
});
const exhaustT = { concatAll: exhaust };
const forEach = ObservableLike__forEach;
const forEachT = { forEach };
const forkCombineLatest = ObservableLike__forkCombineLatest;
const forkMerge = ObservableLike__forkMerge;
const forkZipLatest = ObservableLike__forkZipLatest;
const fromPromise = IterableLike__toObservable;
const fromPromiseT = { fromPromise };
const generate = ObservableLike__generate;
const generateT = { generate };
const isEnumerable = ObservableLike__isEnumerable;
const isRunnable = ObservableLike__isRunnable;
const keep = ObservableLike__keep;
const keepT = { keep };
const map = ObservableLike__map;
const mapT = ObservableLike__mapT;
const mapAsync = (f) => concatMap({ ...switchAllT, ...mapT }, (a) => pipe(a, f, fromPromise()));
const merge = ObservableLike__merge;
const mergeT = { concat: merge };
const mergeAll = ObservableLike__mergeAll;
const mergeAllT = { concatAll: mergeAll };
/**
 * Returns a `MulticastObservableLike` backed by a single subscription to the source.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source observable.
 * @param replay The number of events that should be replayed when the `MulticastObservableLike`
 * is subscribed to.
 */
const multicast = ObservableLike__multicast;
const never = EnumerableObservableLike__never;
const neverT = { never };
const onSubscribe = ObservableLike__onSubscribe;
const pairwise = ObservableLike__pairwise;
const pairwiseT = { pairwise };
const reduce = ObservableLike__reduce;
const reduceT = { reduce };
const repeat = ObservableLike__repeat;
const repeatT = {
    repeat,
};
const retry = ObservableLike__retry;
const scan = ObservableLike__scan;
const scanT = { scan };
/**
 * Returns the `ObservableLike` that applies an asynchronous accumulator function
 * over the source, and emits each intermediate result.
 *
 * @param scanner The accumulator function called on each source value.
 * @param initialValue The initial accumulation value.
 */
const scanAsync = ObservableLike__scanAsync;
const scanAsyncT = {
    scanAsync,
};
/**
 * Returns an `ObservableLike` backed by a shared refcounted subscription to the
 * source. When the refcount goes to 0, the underlying subscription
 * to the source is disposed.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source.
 * @param replay The number of events that should be replayed when the `ObservableLike`
 * is subscribed to.
 */
const share = ObservableLike__share;
const skipFirst = ObservableLike__skipFirst;
const skipFirstT = { skipFirst };
const someSatisfy = ObservableLike__someSatisfy;
const someSatisfyT = { someSatisfy };
const switchAll = ObservableLike__switchAll;
const switchAllT = {
    concatAll: switchAll,
};
const subscribe = ObservableLike__subscribe;
const subscribeOn = ObservableLike__subscribeOn;
const takeFirst = ObservableLike__takeFirst;
const takeFirstT = { takeFirst };
const takeLast = ObservableLike__takeLast;
const takeLastT = { takeLast };
const takeUntil = ObservableLike__takeUntil;
const takeWhile = ObservableLike__takeWhile;
const takeWhileT = { takeWhile };
const throttle = ObservableLike__throttle;
const throwIfEmpty = ObservableLike__throwIfEmpty;
const throwIfEmptyT = {
    throwIfEmpty,
};
const timeout = ObservableLike__timeout;
const toEnumerable = ObservableLike__toEnumerable;
const toEnumerableT = { toEnumerable };
const toFlowable = ObservableLike__toFlowable;
const toFlowableT = { toFlowable };
const toPromise = ObservableLike__toPromise;
const toPromiseT = {
    toPromise,
};
const toReadonlyArray = ObservableLike__toReadonlyArray;
const toReadonlyArrayT = {
    toReadonlyArray,
};
const withLatestFrom = ObservableLike__withLatestFrom;
const zip = ObservableLike__zip;
const zipT = {
    zip: zip,
};
/**
 * Returns an `ObservableLike` that zips the latest values from
 * multiple sources.
 */
const zipLatest = ObservableLike__zipLatest;
const zipLatestT = {
    zip: zipLatest,
};
const zipWithLatestFrom = ObservableLike__zipWithLatestFrom;

export { buffer, bufferT, catchError, combineLatest, combineLatestT, concat, concatAll, concatAllT, concatT, create, decodeWithCharset, decodeWithCharsetT, defer, deferT, distinctUntilChanged, distinctUntilChangedT, empty, emptyT, everySatisfy, everySatisfyT, exhaust, exhaustT, forEach, forEachT, forkCombineLatest, forkMerge, forkZipLatest, fromPromise, fromPromiseT, generate, generateT, isEnumerable, isRunnable, keep, keepT, map, mapAsync, mapT, merge, mergeAll, mergeAllT, mergeT, multicast, never, neverT, onSubscribe, pairwise, pairwiseT, reduce, reduceT, repeat, repeatT, retry, scan, scanAsync, scanAsyncT, scanT, share, skipFirst, skipFirstT, someSatisfy, someSatisfyT, subscribe, subscribeOn, switchAll, switchAllT, takeFirst, takeFirstT, takeLast, takeLastT, takeUntil, takeWhile, takeWhileT, throttle, throwIfEmpty, throwIfEmptyT, timeout, toEnumerable, toEnumerableT, toFlowable, toFlowableT, toPromise, toPromiseT, toReadonlyArray, toReadonlyArrayT, withLatestFrom, zip, zipLatest, zipLatestT, zipT, zipWithLatestFrom };
