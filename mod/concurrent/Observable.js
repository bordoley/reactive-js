/// <reference types="./Observable.d.ts" />

import { Computation_type, } from "../computations.js";
import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, } from "../concurrent.js";
import Observable_backpressureStrategy from "./Observable/__internal__/Observable.backpressureStrategy.js";
import Observable_buffer from "./Observable/__internal__/Observable.buffer.js";
import Observable_catchError from "./Observable/__internal__/Observable.catchError.js";
import Observable_combineLatest from "./Observable/__internal__/Observable.combineLatest.js";
import Observable_computeDeferred from "./Observable/__internal__/Observable.computeDeferred.js";
import Observable_computeRunnable from "./Observable/__internal__/Observable.computeRunnable.js";
import Observable_concat from "./Observable/__internal__/Observable.concat.js";
import Observable_concatMany from "./Observable/__internal__/Observable.concatMany.js";
import Observable_concatWith from "./Observable/__internal__/Observable.concatWith.js";
import Observable_create from "./Observable/__internal__/Observable.create.js";
import Observable_currentTime from "./Observable/__internal__/Observable.currentTime.js";
import Observable_decodeWithCharset from "./Observable/__internal__/Observable.decodeWithCharset.js";
import Observable_defer from "./Observable/__internal__/Observable.defer.js";
import Observable_dispatchTo from "./Observable/__internal__/Observable.dispatchTo.js";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_empty from "./Observable/__internal__/Observable.empty.js";
import Observable_encodeUtf8 from "./Observable/__internal__/Observable.encodeUtf8.js";
import Observable_endWith from "./Observable/__internal__/Observable.endWith.js";
import Observable_enqueue from "./Observable/__internal__/Observable.enqueue.js";
import Observable_firstAsync from "./Observable/__internal__/Observable.firstAsync.js";
import Observable_flow from "./Observable/__internal__/Observable.flow.js";
import Observable_forEach from "./Observable/__internal__/Observable.forEach.js";
import Observable_fromAsyncFactory from "./Observable/__internal__/Observable.fromAsyncFactory.js";
import Observable_fromAsyncIterable from "./Observable/__internal__/Observable.fromAsyncIterable.js";
import Observable_fromEnumerable from "./Observable/__internal__/Observable.fromEnumerable.js";
import Observable_fromEventSource from "./Observable/__internal__/Observable.fromEventSource.js";
import Observable_fromFactory from "./Observable/__internal__/Observable.fromFactory.js";
import Observable_fromIterable from "./Observable/__internal__/Observable.fromIterable.js";
import Observable_fromPromise from "./Observable/__internal__/Observable.fromPromise.js";
import Observable_fromReadonlyArray from "./Observable/__internal__/Observable.fromReadonlyArray.js";
import Observable_fromStore from "./Observable/__internal__/Observable.fromStore.js";
import Observable_fromValue from "./Observable/__internal__/Observable.fromValue.js";
import Observable_ignoreElements from "./Observable/__internal__/Observable.ignoreElements.js";
import Observable_isDeferred from "./Observable/__internal__/Observable.isDeferred.js";
import Observable_isPure from "./Observable/__internal__/Observable.isPure.js";
import Observable_isRunnable from "./Observable/__internal__/Observable.isRunnable.js";
import Observable_keep from "./Observable/__internal__/Observable.keep.js";
import Observable_lastAsync from "./Observable/__internal__/Observable.lastAsync.js";
import Observable_map from "./Observable/__internal__/Observable.map.js";
import Observable_merge from "./Observable/__internal__/Observable.merge.js";
import Observable_mergeMany from "./Observable/__internal__/Observable.mergeMany.js";
import Observable_multicast from "./Observable/__internal__/Observable.multicast.js";
import Observable_never from "./Observable/__internal__/Observable.never.js";
import Observable_onSubscribe from "./Observable/__internal__/Observable.onSubscribe.js";
import Observable_pairwise from "./Observable/__internal__/Observable.pairwise.js";
import Observable_reduce from "./Observable/__internal__/Observable.reduce.js";
import Observable_repeat from "./Observable/__internal__/Observable.repeat.js";
import Observable_retry from "./Observable/__internal__/Observable.retry.js";
import Observable_run from "./Observable/__internal__/Observable.run.js";
import Observable_scan from "./Observable/__internal__/Observable.scan.js";
import Observable_share from "./Observable/__internal__/Observable.share.js";
import Observable_skipFirst from "./Observable/__internal__/Observable.skipFirst.js";
import Observable_spring from "./Observable/__internal__/Observable.spring.js";
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
import Observable_toReadonlyArray from "./Observable/__internal__/Observable.toReadonlyArray.js";
import Observable_toReadonlyArrayAsync from "./Observable/__internal__/Observable.toReadonlyArrayAsync.js";
import Observable_withCurrentTime from "./Observable/__internal__/Observable.withCurrentTime.js";
import Observable_withLatestFrom from "./Observable/__internal__/Observable.withLatestFrom.js";
import Observable_zipLatest from "./Observable/__internal__/Observable.zipLatest.js";
export const backpressureStrategy = Observable_backpressureStrategy;
export const buffer = Observable_buffer;
export const catchError = Observable_catchError;
export const combineLatest = Observable_combineLatest;
export const computeDeferred = Observable_computeDeferred;
export const computeRunnable = Observable_computeRunnable;
export const concat = Observable_concat;
export const concatMany = Observable_concatMany;
export const concatWith = Observable_concatWith;
export const create = Observable_create;
export const currentTime = Observable_currentTime;
export const decodeWithCharset = Observable_decodeWithCharset;
export const defer = Observable_defer;
export const dispatchTo = Observable_dispatchTo;
export const distinctUntilChanged = Observable_distinctUntilChanged;
export const empty = Observable_empty;
export const encodeUtf8 = Observable_encodeUtf8;
export const endWith = Observable_endWith;
export const enqueue = Observable_enqueue;
export const firstAsync = Observable_firstAsync;
export const flow = Observable_flow;
export const forEach = Observable_forEach;
export const fromAsyncFactory = Observable_fromAsyncFactory;
export const fromAsyncIterable = Observable_fromAsyncIterable;
export const fromEnumerable = Observable_fromEnumerable;
export const fromEventSource = Observable_fromEventSource;
export const fromFactory = Observable_fromFactory;
export const fromIterable = Observable_fromIterable;
export const fromPromise = Observable_fromPromise;
export const fromReadonlyArray = Observable_fromReadonlyArray;
export const fromStore = Observable_fromStore;
export const fromValue = Observable_fromValue;
export const ignoreElements = Observable_ignoreElements;
export const isDeferred = Observable_isDeferred;
export const isPure = Observable_isPure;
export const isRunnable = Observable_isRunnable;
export const keep = Observable_keep;
export const lastAsync = Observable_lastAsync;
export const map = Observable_map;
export const merge = Observable_merge;
export const mergeMany = Observable_mergeMany;
export const multicast = Observable_multicast;
export const never = Observable_never;
export const onSubscribe = Observable_onSubscribe;
export const pairwise = Observable_pairwise;
export const reduce = Observable_reduce;
export const repeat = Observable_repeat;
export const retry = Observable_retry;
export const run = Observable_run;
export const scan = Observable_scan;
export const share = Observable_share;
export const skipFirst = Observable_skipFirst;
export const spring = Observable_spring;
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
export const toReadonlyArray = Observable_toReadonlyArray;
export const toReadonlyArrayAsync = Observable_toReadonlyArrayAsync;
export const withCurrentTime = Observable_withCurrentTime;
export const withLatestFrom = Observable_withLatestFrom;
export const zipLatest = Observable_zipLatest;
