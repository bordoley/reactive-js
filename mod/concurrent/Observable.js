/// <reference types="./Observable.d.ts" />

import { Computation_type, } from "../computations.js";
import { ObservableLike_isDeferred, ObservableLike_isMulticasted, ObservableLike_isPure, ObservableLike_isRunnable, } from "../concurrent.js";
import Observable_animate from "./Observable/__private__/Observable.animate.js";
import Observable_backpressureStrategy from "./Observable/__private__/Observable.backpressureStrategy.js";
import Observable_buffer from "./Observable/__private__/Observable.buffer.js";
import Observable_catchError from "./Observable/__private__/Observable.catchError.js";
import Observable_combineLatest from "./Observable/__private__/Observable.combineLatest.js";
import Observable_computeDeferred from "./Observable/__private__/Observable.computeDeferred.js";
import Observable_computeRunnable from "./Observable/__private__/Observable.computeRunnable.js";
import Observable_concat from "./Observable/__private__/Observable.concat.js";
import Observable_concatAll from "./Observable/__private__/Observable.concatAll.js";
import Observable_concatMany from "./Observable/__private__/Observable.concatMany.js";
import Observable_concatMap from "./Observable/__private__/Observable.concatMap.js";
import Observable_concatWith from "./Observable/__private__/Observable.concatWith.js";
import Observable_create from "./Observable/__private__/Observable.create.js";
import Observable_currentTime from "./Observable/__private__/Observable.currentTime.js";
import Observable_debug from "./Observable/__private__/Observable.debug.js";
import Observable_decodeWithCharset from "./Observable/__private__/Observable.decodeWithCharset.js";
import Observable_defer from "./Observable/__private__/Observable.defer.js";
import Observable_dispatchTo from "./Observable/__private__/Observable.dispatchTo.js";
import Observable_distinctUntilChanged from "./Observable/__private__/Observable.distinctUntilChanged.js";
import Observable_empty from "./Observable/__private__/Observable.empty.js";
import Observable_encodeUtf8 from "./Observable/__private__/Observable.encodeUtf8.js";
import Observable_endWith from "./Observable/__private__/Observable.endWith.js";
import Observable_enqueue from "./Observable/__private__/Observable.enqueue.js";
import Observable_exhaust from "./Observable/__private__/Observable.exhaust.js";
import Observable_exhaustMap from "./Observable/__private__/Observable.exhaustMap.js";
import Observable_firstAsync from "./Observable/__private__/Observable.firstAsync.js";
import Observable_flatMapAsync from "./Observable/__private__/Observable.flatMapAsync.js";
import Observable_flatMapIterable from "./Observable/__private__/Observable.flatMapIterable.js";
import Observable_forEach from "./Observable/__private__/Observable.forEach.js";
import Observable_forkMerge from "./Observable/__private__/Observable.forkMerge.js";
import Observable_fromAsyncFactory from "./Observable/__private__/Observable.fromAsyncFactory.js";
import Observable_fromAsyncIterable from "./Observable/__private__/Observable.fromAsyncIterable.js";
import Observable_fromEnumerable from "./Observable/__private__/Observable.fromEnumerable.js";
import Observable_fromEventSource from "./Observable/__private__/Observable.fromEventSource.js";
import Observable_fromIterable from "./Observable/__private__/Observable.fromIterable.js";
import Observable_fromPromise from "./Observable/__private__/Observable.fromPromise.js";
import Observable_fromReadonlyArray from "./Observable/__private__/Observable.fromReadonlyArray.js";
import Observable_fromStore from "./Observable/__private__/Observable.fromStore.js";
import Observable_fromValue from "./Observable/__private__/Observable.fromValue.js";
import Observable_ignoreElements from "./Observable/__private__/Observable.ignoreElements.js";
import Observable_keep from "./Observable/__private__/Observable.keep.js";
import Observable_lastAsync from "./Observable/__private__/Observable.lastAsync.js";
import Observable_log from "./Observable/__private__/Observable.log.js";
import Observable_map from "./Observable/__private__/Observable.map.js";
import Observable_merge from "./Observable/__private__/Observable.merge.js";
import Observable_mergeAll from "./Observable/__private__/Observable.mergeAll.js";
import Observable_mergeMany from "./Observable/__private__/Observable.mergeMany.js";
import Observable_mergeMap from "./Observable/__private__/Observable.mergeMap.js";
import Observable_mergeWith from "./Observable/__private__/Observable.mergeWith.js";
import Observable_multicast from "./Observable/__private__/Observable.multicast.js";
import Observable_never from "./Observable/__private__/Observable.never.js";
import Observable_onSubscribe from "./Observable/__private__/Observable.onSubscribe.js";
import Observable_pairwise from "./Observable/__private__/Observable.pairwise.js";
import Observable_reduce from "./Observable/__private__/Observable.reduce.js";
import Observable_repeat from "./Observable/__private__/Observable.repeat.js";
import Observable_retry from "./Observable/__private__/Observable.retry.js";
import Observable_run from "./Observable/__private__/Observable.run.js";
import Observable_scan from "./Observable/__private__/Observable.scan.js";
import Observable_scanMany from "./Observable/__private__/Observable.scanMany.js";
import Observable_skipFirst from "./Observable/__private__/Observable.skipFirst.js";
import Observable_startWith from "./Observable/__private__/Observable.startWith.js";
import Observable_subscribe from "./Observable/__private__/Observable.subscribe.js";
import Observable_subscribeOn from "./Observable/__private__/Observable.subscribeOn.js";
import Observable_switchAll from "./Observable/__private__/Observable.switchAll.js";
import Observable_switchMap from "./Observable/__private__/Observable.switchMap.js";
import Observable_takeFirst from "./Observable/__private__/Observable.takeFirst.js";
import Observable_takeLast from "./Observable/__private__/Observable.takeLast.js";
import Observable_takeUntil from "./Observable/__private__/Observable.takeUntil.js";
import Observable_takeWhile from "./Observable/__private__/Observable.takeWhile.js";
import Observable_throttle from "./Observable/__private__/Observable.throttle.js";
import Observable_throwIfEmpty from "./Observable/__private__/Observable.throwIfEmpty.js";
import Observable_throws from "./Observable/__private__/Observable.throws.js";
import Observable_toEventSource from "./Observable/__private__/Observable.toEventSource.js";
import Observable_toReadonlyArray from "./Observable/__private__/Observable.toReadonlyArray.js";
import Observable_toReadonlyArrayAsync from "./Observable/__private__/Observable.toReadonlyArrayAsync.js";
import Observable_withCurrentTime from "./Observable/__private__/Observable.withCurrentTime.js";
import Observable_withLatestFrom from "./Observable/__private__/Observable.withLatestFrom.js";
import Observable_zipLatest from "./Observable/__private__/Observable.zipLatest.js";
export const PureRunnableType = {
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isMulticasted]: false,
    [ObservableLike_isPure]: true,
    [ObservableLike_isRunnable]: true,
};
export const RunnableWithSideEffectsType = {
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isMulticasted]: false,
    [ObservableLike_isPure]: false,
    [ObservableLike_isRunnable]: true,
};
export const PureDeferredObservableType = {
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isMulticasted]: false,
    [ObservableLike_isPure]: true,
    [ObservableLike_isRunnable]: false,
};
export const DeferredObservableWithSideEffectsType = {
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isMulticasted]: false,
    [ObservableLike_isPure]: false,
    [ObservableLike_isRunnable]: false,
};
export const animate = Observable_animate;
export const backpressureStrategy = Observable_backpressureStrategy;
export const buffer = Observable_buffer;
export const catchError = Observable_catchError;
export const combineLatest = Observable_combineLatest;
export const computeDeferred = Observable_computeDeferred;
export const computeRunnable = Observable_computeRunnable;
export const concat = Observable_concat;
export const concatAll = Observable_concatAll;
export const concatMany = Observable_concatMany;
export const concatMap = Observable_concatMap;
export const concatWith = Observable_concatWith;
export const create = Observable_create;
export const currentTime = Observable_currentTime;
export const debug = Observable_debug;
export const decodeWithCharset = Observable_decodeWithCharset;
export const defer = Observable_defer;
export const dispatchTo = Observable_dispatchTo;
export const distinctUntilChanged = Observable_distinctUntilChanged;
export const empty = Observable_empty;
export const encodeUtf8 = Observable_encodeUtf8;
export const endWith = Observable_endWith;
export const enqueue = Observable_enqueue;
export const exhaust = Observable_exhaust;
export const exhaustMap = Observable_exhaustMap;
export const firstAsync = Observable_firstAsync;
export const flatMapAsync = Observable_flatMapAsync;
export const flatMapIterable = Observable_flatMapIterable;
export const forEach = Observable_forEach;
export const forkMerge = Observable_forkMerge;
export const fromAsyncFactory = Observable_fromAsyncFactory;
export const fromAsyncIterable = Observable_fromAsyncIterable;
export const fromEnumerable = Observable_fromEnumerable;
export const fromEventSource = Observable_fromEventSource;
export const fromIterable = Observable_fromIterable;
export const fromPromise = Observable_fromPromise;
export const fromReadonlyArray = Observable_fromReadonlyArray;
export const fromStore = Observable_fromStore;
export const fromValue = Observable_fromValue;
export const ignoreElements = Observable_ignoreElements;
export const keep = Observable_keep;
export const lastAsync = Observable_lastAsync;
export const log = Observable_log;
export const map = Observable_map;
export const merge = Observable_merge;
export const mergeAll = Observable_mergeAll;
export const mergeMap = Observable_mergeMap;
export const mergeMany = Observable_mergeMany;
export const mergeWith = Observable_mergeWith;
export const multicast = Observable_multicast;
export const never = Observable_never;
export const onSubscribe = Observable_onSubscribe;
export const pairwise = Observable_pairwise;
export const reduce = Observable_reduce;
export const repeat = Observable_repeat;
export const retry = Observable_retry;
export const run = Observable_run;
export const scan = Observable_scan;
export const scanMany = Observable_scanMany;
export const skipFirst = Observable_skipFirst;
export const startWith = Observable_startWith;
export const subscribe = Observable_subscribe;
export const subscribeOn = Observable_subscribeOn;
export const switchAll = Observable_switchAll;
export const switchMap = Observable_switchMap;
export const takeFirst = Observable_takeFirst;
export const takeLast = Observable_takeLast;
export const takeUntil = Observable_takeUntil;
export const takeWhile = Observable_takeWhile;
export const throttle = Observable_throttle;
export const throwIfEmpty = Observable_throwIfEmpty;
export const throws = Observable_throws;
export const toEventSource = Observable_toEventSource;
export const toReadonlyArray = Observable_toReadonlyArray;
export const toReadonlyArrayAsync = Observable_toReadonlyArrayAsync;
export const withCurrentTime = Observable_withCurrentTime;
export const withLatestFrom = Observable_withLatestFrom;
export const zipLatest = Observable_zipLatest;
