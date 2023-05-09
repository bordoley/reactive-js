import Container_identity from "./Container/__internal__/Container.identity.js";
import Observable_backpressureStrategy from "./Observable/__internal__/Observable.backpressureStrategy.js";
import Observable_buffer from "./Observable/__internal__/Observable.buffer.js";
import Observable_combineLatest from "./Observable/__internal__/Observable.combineLatest.js";
import { Observable_compute } from "./Observable/__internal__/Observable.compute.js";
import Observable_decodeWithCharset from "./Observable/__internal__/Observable.decodeWithCharset.js";
import Observable_dispatchTo from "./Observable/__internal__/Observable.dispatchTo.js";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_enqueue from "./Observable/__internal__/Observable.enqueue.js";
import Observable_firstAsync from "./Observable/__internal__/Observable.firstAsync.js";
import Observable_flatMapAsync from "./Observable/__internal__/Observable.flatMapAsync.js";
import Observable_forEach from "./Observable/__internal__/Observable.forEach.js";
import Observable_fromAsyncFactory from "./Observable/__internal__/Observable.fromAsyncFactory.js";
import Observable_ignoreElements from "./Observable/__internal__/Observable.ignoreElements.js";
import Observable_keep from "./Observable/__internal__/Observable.keep.js";
import Observable_keepType from "./Observable/__internal__/Observable.keepType.js";
import Observable_lastAsync from "./Observable/__internal__/Observable.lastAsync.js";
import Observable_map from "./Observable/__internal__/Observable.map.js";
import Observable_mapTo from "./Observable/__internal__/Observable.mapTo.js";
import Observable_mergeWith from "./Observable/__internal__/Observable.mergeWith.js";
import Observable_onSubscribe from "./Observable/__internal__/Observable.onSubscribe.js";
import Observable_pairwise from "./Observable/__internal__/Observable.pairwise.js";
import Observable_pick from "./Observable/__internal__/Observable.pick.js";
import Observable_scan from "./Observable/__internal__/Observable.scan.js";
import Observable_skipFirst from "./Observable/__internal__/Observable.skipFirst.js";
import Observable_subscribe from "./Observable/__internal__/Observable.subscribe.js";
import Observable_subscribeOn from "./Observable/__internal__/Observable.subscribeOn.js";
import Observable_takeFirst from "./Observable/__internal__/Observable.takeFirst.js";
import Observable_takeLast from "./Observable/__internal__/Observable.takeLast.js";
import Observable_takeWhile from "./Observable/__internal__/Observable.takeWhile.js";
import Observable_throwIfEmpty from "./Observable/__internal__/Observable.throwIfEmpty.js";
import Observable_toEventSource from "./Observable/__internal__/Observable.toEventSource.js";
import Observable_withCurrentTime from "./Observable/__internal__/Observable.withCurrentTime.js";
import Observable_withLatestFrom from "./Observable/__internal__/Observable.withLatestFrom.js";
import SharedObservable_create from "./SharedObservable/__internal__/SharedObservable.create.js";
import { Containers, SharedObservableContainer } from "./containers.js";
import { Factory, Function1, SideEffect1 } from "./functions.js";
import {
  DisposableLike,
  DisposableOrTeardown,
  ObservableLike,
  ObserverLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
  SharedObservableLike,
} from "./types.js";

export const backpressureStrategy: SharedObservableContainer.TypeClass["backpressureStrategy"] =
  Observable_backpressureStrategy;

/**
 * @category Operator
 */
export const buffer: <T>(options?: {
  readonly duration?: number | Function1<T, SharedObservableContainer>;
  readonly count?: number;
}) => Containers.Operator<SharedObservableContainer, T, readonly T[]> =
  Observable_buffer;

/*  
export const catchError: SharedObservableContainer.TypeClass["catchError"] =
  Observable_catchError;*/

export const combineLatest: SharedObservableContainer.TypeClass["combineLatest"] =
  Observable_combineLatest;

/**
 * @category Constructor
 */
export const compute = Observable_compute;

/**
 * @category Constructor
 */
export const create: <T>(
  f: SideEffect1<ObserverLike<T>>,
) => SharedObservableLike<T> = SharedObservable_create;

export const decodeWithCharset: SharedObservableContainer.TypeClass["decodeWithCharset"] =
  Observable_decodeWithCharset;

/*
export const defer: SharedObservableContainer.TypeClass["defer"] =
  Observable_defer;*/

export const dispatchTo: SharedObservableContainer.TypeClass["dispatchTo"] =
  Observable_dispatchTo;

export const distinctUntilChanged: SharedObservableContainer.TypeClass["distinctUntilChanged"] =
  Observable_distinctUntilChanged;

/* 
export const encodeUtf8: SharedObservableContainer.TypeClass["encodeUtf8"] =
  Observable_encodeUtf8;*/

export const enqueue: SharedObservableContainer.TypeClass["enqueue"] =
  Observable_enqueue;

/*  
export const exhaust: SharedObservableContainer.TypeClass["exhaust"] =
  Observable_exhaust;*/

/*
export const exhaustMap: SharedObservableContainer.TypeClass["exhaustMap"] =
  Observable_exhaustMap;*/

export const firstAsync: SharedObservableContainer.TypeClass["firstAsync"] =
  Observable_firstAsync;

/**
 * @category Operator
 */
export const flatMapAsync = Observable_flatMapAsync;

/*
export const flatMapIterable: SharedObservableContainer.TypeClass["flatMapIterable"] =
  Observable_flatMapIterable;*/

export const forEach: SharedObservableContainer.TypeClass["forEach"] =
  Observable_forEach;

/*
export const forkCombineLatest: SharedObservableContainer.TypeClass["forkCombineLatest"] =
  Observable_forkCombineLatest;*/

/*
export const forkMerge: SharedObservableContainer.TypeClass["forkMerge"] =
  Observable_forkMerge;*/

/*
export const forkZip: SharedObservableContainer.TypeClass["forkZip"] =
  Observable_forkZip;*/

/*
export const forkZipLatest: SharedObservableContainer.TypeClass["forkZipLatest"] =
  Observable_forkZipLatest;*/

/**
 * @category Constructor
 */
export const fromAsyncFactory = Observable_fromAsyncFactory;

export const identity: SharedObservableContainer.TypeClass["identity"] =
  Container_identity;

export const ignoreElements: SharedObservableContainer.TypeClass["ignoreElements"] =
  Observable_ignoreElements;

export const keep: SharedObservableContainer.TypeClass["keep"] =
  Observable_keep;

export const keepType: SharedObservableContainer.TypeClass["keepType"] =
  Observable_keepType as SharedObservableContainer.TypeClass["keepType"];

export const lastAsync: SharedObservableContainer.TypeClass["lastAsync"] =
  Observable_lastAsync;

export const map: SharedObservableContainer.TypeClass["map"] = Observable_map;

export const mapTo: SharedObservableContainer.TypeClass["mapTo"] =
  Observable_mapTo;

/*
export const merge: SharedObservableContainer.TypeClass["merge"] =
  Observable_merge;*/

/*
export const mergeAll: SharedObservableContainer.TypeClass["mergeAll"] =
  Observable_mergeAll;*/

/*
export const mergeMap: SharedObservableContainer.TypeClass["mergeMap"] =
  Observable_mergeMap;*/

export const mergeWith: SharedObservableContainer.TypeClass["mergeWith"] =
  Observable_mergeWith as SharedObservableContainer.TypeClass["mergeWith"];

/*
export const never: SharedObservableContainer.TypeClass["never"] =
  Observable_never;*/

/**
 * @category Operator
 */
export const onSubscribe: <T>(
  f: Factory<DisposableOrTeardown | void>,
) => Containers.Operator<SharedObservableContainer, T, T> =
  Observable_onSubscribe;

export const pairwise: SharedObservableContainer.TypeClass["pairwise"] =
  Observable_pairwise;

export const pick: SharedObservableContainer.TypeClass["pick"] =
  Observable_pick;

export const scan: SharedObservableContainer.TypeClass["scan"] =
  Observable_scan;

/*
export const scanLast: SharedObservableContainer.TypeClass["scanLast"] =
  Observable_scanLast;*/

/*
export const scanMany: SharedObservableContainer.TypeClass["scanMany"] =
  Observable_scanLast;*/

export const skipFirst: SharedObservableContainer.TypeClass["skipFirst"] =
  Observable_skipFirst;

/*
export const switchAll: SharedObservableContainer.TypeClass["switchAll"] =
  Observable_switchAll;*/

/*
export const switchMap: SharedObservableContainer.TypeClass["switchMap"] =
  Observable_switchMap;*/

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

export const takeFirst: SharedObservableContainer.TypeClass["takeFirst"] =
  Observable_takeFirst;

export const takeLast: SharedObservableContainer.TypeClass["takeLast"] =
  Observable_takeLast;

/*
export const takeUntil: SharedObservableContainer.TypeClass["takeUntil"] =
  Observable_takeUntil;*/

export const takeWhile: SharedObservableContainer.TypeClass["takeWhile"] =
  Observable_takeWhile;

/*
export const throttle: SharedObservableContainer.TypeClass["throttle"] =
  Observable_throttle;*/

export const throwIfEmpty: SharedObservableContainer.TypeClass["throwIfEmpty"] =
  Observable_throwIfEmpty;

/*
interface Throws extends SharedObservableContainer.TypeClass {
  throws<T>(options?: {
    delay?: number;
    raise?: Factory<unknown>;
  }): ObservableLike<T>;
}
export const throws: Throws["throws"] = Observable_throws;*/

/*
export const timeout: SharedObservableContainer.TypeClass["timeout"] =
  Observable_timeout;*/

/**
 * @category Transform
 */
export const toEventSource = Observable_toEventSource;

export const toObservable: SharedObservableContainer.TypeClass["toObservable"] =
  identity;

export const withCurrentTime: SharedObservableContainer.TypeClass["withCurrentTime"] =
  Observable_withCurrentTime;

export const withLatestFrom: SharedObservableContainer.TypeClass["withLatestFrom"] =
  Observable_withLatestFrom as SharedObservableContainer.TypeClass["withLatestFrom"];
/*
export const zip: SharedObservableContainer.TypeClass["zip"] = Observable_zip;
*/

/*
export const zipLatest: SharedObservableContainer.TypeClass["zipLatest"] =
  Observable_zipLatest;*/

/*
export const zipWith: SharedObservableContainer.TypeClass["zipWith"] =
  Observable_zipWith;*/

/* 
export const zipWithLatestFrom: SharedObservableContainer.TypeClass["zipWithLatestFrom"] =
  Observable_zipWithLatestFrom;*/
