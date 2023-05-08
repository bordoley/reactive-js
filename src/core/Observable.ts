import {
  Containers,
  DeferredContainers,
  DisposableLike,
  DisposableOrTeardown,
  EnumerableContainers,
  ObservableContainer,
  ObservableLike,
  ObserverLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  ReactiveContainers,
  RunnableContainers,
  SchedulerLike,
} from "../core.js";
import AsyncIterable_toObservable from "../core/AsyncIterable/__internal__/AsyncIterable.toObservable.js";
import Container_identity from "../core/Container/__internal__/Container.identity.js";
import Iterable_toObservable from "../core/Iterable/__internal__/Iterable.toObservable.js";
import Optional_toObservable from "../core/Optional/__internal__/Optional.toObservable.js";
import ReadonlyArray_toObservable from "../core/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { Factory, Function1, SideEffect1 } from "../functions.js";
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
import Observable_dispatchTo from "./Observable/__internal__/Observable.dispatchTo.js";
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

export const animate: ReactiveContainers.TypeClass<ObservableContainer>["animate"] =
  Observable_animate;

export const backpressureStrategy: ReactiveContainers.TypeClass<ObservableContainer>["backpressureStrategy"] =
  Observable_backpressureStrategy;

/**
 * @category Operator
 */
export const buffer: <T>(options?: {
  readonly duration?: number | Function1<T, ObservableContainer>;
  readonly count?: number;
}) => Containers.Operator<ObservableContainer, T, readonly T[]> =
  Observable_buffer;

export const catchError: ReactiveContainers.TypeClass<ObservableContainer>["catchError"] =
  Observable_catchError;

export const combineLatest: ReactiveContainers.TypeClass<ObservableContainer>["combineLatest"] =
  Observable_combineLatest;

/**
 * @category Constructor
 */
export const compute = Observable_compute;

export const concat: DeferredContainers.TypeClass<ObservableContainer>["concat"] =
  Observable_concat;

export const concatAll: DeferredContainers.TypeClass<ObservableContainer>["concatAll"] =
  Observable_concatAll;

export const concatMap: DeferredContainers.TypeClass<ObservableContainer>["concatMap"] =
  Observable_concatMap;

export const concatWith: DeferredContainers.TypeClass<ObservableContainer>["concatWith"] =
  Observable_concatWith as DeferredContainers.TypeClass<ObservableContainer>["concatWith"];

/**
 * @category Constructor
 */
export const create: <T>(f: SideEffect1<ObserverLike<T>>) => ObservableLike<T> =
  Observable_create;

export const currentTime: ReactiveContainers.TypeClass<ObservableContainer>["currentTime"] =
  Observable_currentTime;

export const decodeWithCharset: ReactiveContainers.TypeClass<ObservableContainer>["decodeWithCharset"] =
  Observable_decodeWithCharset;

export const defer: ReactiveContainers.TypeClass<ObservableContainer>["defer"] =
  Observable_defer;

export const dispatchTo: ReactiveContainers.TypeClass<ObservableContainer>["dispatchTo"] =
  Observable_dispatchTo;

export const distinctUntilChanged: Containers.TypeClass<ObservableContainer>["distinctUntilChanged"] =
  Observable_distinctUntilChanged;

export const empty: ReactiveContainers.TypeClass<ObservableContainer>["empty"] =
  Observable_empty;

export const encodeUtf8: ReactiveContainers.TypeClass<ObservableContainer>["encodeUtf8"] =
  Observable_encodeUtf8;

export const enqueue: ReactiveContainers.TypeClass<ObservableContainer>["enqueue"] =
  Observable_enqueue;

export const endWith: DeferredContainers.TypeClass<ObservableContainer>["endWith"] =
  Observable_endWith;

export const exhaust: ReactiveContainers.TypeClass<ObservableContainer>["exhaust"] =
  Observable_exhaust;

export const exhaustMap: ReactiveContainers.TypeClass<ObservableContainer>["exhaustMap"] =
  Observable_exhaustMap;

export const firstAsync: ReactiveContainers.TypeClass<ObservableContainer>["firstAsync"] =
  Observable_firstAsync;

/**
 * @category Operator
 */
export const flatMapAsync = Observable_flatMapAsync;

export const flatMapIterable: Containers.TypeClass<ObservableContainer>["flatMapIterable"] =
  Observable_flatMapIterable;

export const forEach: Containers.TypeClass<ObservableContainer>["forEach"] =
  Observable_forEach;

export const forkCombineLatest: ReactiveContainers.TypeClass<ObservableContainer>["forkCombineLatest"] =
  Observable_forkCombineLatest;

export const forkConcat: DeferredContainers.TypeClass<ObservableContainer>["forkConcat"] =
  Observable_forkConcat;

export const forkMerge: ReactiveContainers.TypeClass<ObservableContainer>["forkMerge"] =
  Observable_forkMerge;

export const forkZip: Containers.TypeClass<ObservableContainer>["forkZip"] =
  Observable_forkZip;

export const forkZipLatest: ReactiveContainers.TypeClass<ObservableContainer>["forkZipLatest"] =
  Observable_forkZipLatest;

/**
 * @category Constructor
 */
export const fromAsyncFactory = Observable_fromAsyncFactory;

export const fromAsyncIterable: Containers.TypeClass<ObservableContainer>["fromAsyncIterable"] =
  AsyncIterable_toObservable;

export const fromEnumeratorFactory: ReactiveContainers.TypeClass<ObservableContainer>["fromEnumeratorFactory"] =
  Runnable_fromEnumeratorFactory;

export const fromFactory: ReactiveContainers.TypeClass<ObservableContainer>["fromFactory"] =
  Observable_fromFactory;

export const fromIterable: ReactiveContainers.TypeClass<ObservableContainer>["fromIterable"] =
  Iterable_toObservable;

export const fromOptional: ReactiveContainers.TypeClass<ObservableContainer>["fromOptional"] =
  Optional_toObservable;

export const fromReadonlyArray: ReactiveContainers.TypeClass<ObservableContainer>["fromReadonlyArray"] =
  ReadonlyArray_toObservable;

export const generate: ReactiveContainers.TypeClass<ObservableContainer>["generate"] =
  Observable_generate;

export const identity: Containers.TypeClass<ObservableContainer>["identity"] =
  Container_identity;

export const ignoreElements: Containers.TypeClass<ObservableContainer>["ignoreElements"] =
  Observable_ignoreElements;

export const keep: Containers.TypeClass<ObservableContainer>["keep"] =
  Observable_keep;

export const keepType: Containers.TypeClass<ObservableContainer>["keepType"] =
  Observable_keepType as Containers.TypeClass<ObservableContainer>["keepType"];

export const lastAsync: ReactiveContainers.TypeClass<ObservableContainer>["lastAsync"] =
  Observable_lastAsync;

export const map: Containers.TypeClass<ObservableContainer>["map"] =
  Observable_map;

export const mapTo: Containers.TypeClass<ObservableContainer>["mapTo"] =
  Observable_mapTo;

export const merge: ReactiveContainers.TypeClass<ObservableContainer>["merge"] =
  Observable_merge;

export const mergeAll: ReactiveContainers.TypeClass<ObservableContainer>["mergeAll"] =
  Observable_mergeAll;

export const mergeMap: ReactiveContainers.TypeClass<ObservableContainer>["mergeMap"] =
  Observable_mergeMap;

export const mergeWith: ReactiveContainers.TypeClass<ObservableContainer>["mergeWith"] =
  Observable_mergeWith as ReactiveContainers.TypeClass<ObservableContainer>["mergeWith"];

export const multicast: ReactiveContainers.TypeClass<ObservableContainer>["multicast"] =
  Observable_multicast;

export const never: ReactiveContainers.TypeClass<ObservableContainer>["never"] =
  Observable_never;

/**
 * @category Operator
 */
export const onSubscribe: <T>(
  f: Factory<DisposableOrTeardown | void>,
) => Containers.Operator<ObservableContainer, T, T> = Observable_onSubscribe;

export const pairwise: Containers.TypeClass<ObservableContainer>["pairwise"] =
  Observable_pairwise;

export const pick: Containers.TypeClass<ObservableContainer>["pick"] =
  Observable_pick;

export const repeat: DeferredContainers.TypeClass<ObservableContainer>["repeat"] =
  Observable_repeat;

export const retry: ReactiveContainers.TypeClass<ObservableContainer>["retry"] =
  Observable_retry;

export const scan: Containers.TypeClass<ObservableContainer>["scan"] =
  Observable_scan;

export const scanLast: ReactiveContainers.TypeClass<ObservableContainer>["scanLast"] =
  Observable_scanLast;

export const scanMany: ReactiveContainers.TypeClass<ObservableContainer>["scanMany"] =
  Observable_scanLast;

export const share: ReactiveContainers.TypeClass<ObservableContainer>["share"] =
  Observable_share;

export const skipFirst: Containers.TypeClass<ObservableContainer>["skipFirst"] =
  Observable_skipFirst;

export const startWith: DeferredContainers.TypeClass<ObservableContainer>["startWith"] =
  Observable_startWith;

export const switchAll: ReactiveContainers.TypeClass<ObservableContainer>["switchAll"] =
  Observable_switchAll;

export const switchMap: ReactiveContainers.TypeClass<ObservableContainer>["switchMap"] =
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

export const takeFirst: Containers.TypeClass<ObservableContainer>["takeFirst"] =
  Observable_takeFirst;

export const takeLast: Containers.TypeClass<ObservableContainer>["takeLast"] =
  Observable_takeLast;

export const takeUntil: ReactiveContainers.TypeClass<ObservableContainer>["takeUntil"] =
  Observable_takeUntil;

export const takeWhile: Containers.TypeClass<ObservableContainer>["takeWhile"] =
  Observable_takeWhile;

export const throttle: ReactiveContainers.TypeClass<ObservableContainer>["throttle"] =
  Observable_throttle;

export const throwIfEmpty: ReactiveContainers.TypeClass<ObservableContainer>["throwIfEmpty"] =
  Observable_throwIfEmpty;

interface Throws extends ReactiveContainers.TypeClass<ObservableContainer> {
  /**
   * @category Constructor
   */
  throws<T>(options?: {
    delay?: number;
    raise?: Factory<unknown>;
  }): ObservableLike<T>;
}
export const throws: Throws["throws"] = Observable_throws;

export const timeout: ReactiveContainers.TypeClass<ObservableContainer>["timeout"] =
  Observable_timeout;

export const toEnumerable: EnumerableContainers.TypeClass<ObservableContainer>["toEnumerable"] =
  Observable_toEnumerable;

/**
 * @category Transform
 */
export const toEventSource = Observable_toEventSource;

export const toObservable: Containers.TypeClass<ObservableContainer>["toObservable"] =
  identity;

export const toRunnable: RunnableContainers.TypeClass<ObservableContainer>["toRunnable"] =
  Observable_toRunnable;

export const withCurrentTime: ReactiveContainers.TypeClass<ObservableContainer>["withCurrentTime"] =
  Observable_withCurrentTime;

export const withLatestFrom: ReactiveContainers.TypeClass<ObservableContainer>["withLatestFrom"] =
  Observable_withLatestFrom as ReactiveContainers.TypeClass<ObservableContainer>["withLatestFrom"];

export const zip: Containers.TypeClass<ObservableContainer>["zip"] =
  Observable_zip;

export const zipLatest: ReactiveContainers.TypeClass<ObservableContainer>["zipLatest"] =
  Observable_zipLatest;

export const zipWith: Containers.TypeClass<ObservableContainer>["zipWith"] =
  Observable_zipWith;

export const zipWithLatestFrom: ReactiveContainers.TypeClass<ObservableContainer>["zipWithLatestFrom"] =
  Observable_zipWithLatestFrom;
