import { ContainerLike } from "./container";
import { DisposableLike } from "./disposable";
import { Function1, Function2 } from "./functions";
import { SchedulerLike } from "./scheduler";
import { SinkLike } from "./sink";

/**
 * The underlying mechanism for receiving and transforming notifications from an
 * observable source. The `ObserverLike` interface composes the `SchedulerLike` and
 * `DisposableLike` interfaces into a single unified type, while adding the capability
 * to receive notifications.
 *
 * @noInheritDoc
 */
export interface ObserverLike<T> extends SinkLike<T>, SchedulerLike {}

/**
 * The source of notifications which notifies a `ObserverLike` instance.
 *
 * @noInheritDoc
 */
export interface ObservableLike<T> extends ContainerLike {
  readonly T: unknown;
  readonly type: ObservableLike<this["T"]>;

  readonly isSynchronous: boolean;

  /**
   * Subscribes the `ObserverLike` instance to the observable.
   * @param observer The observer which should be notified by the observable source.
   */
  observe(this: ObservableLike<T>, observer: ObserverLike<T>): void;
}

export const type: ObservableLike<unknown> = undefined as any;

/** A function which converts an ObservableLike<A> to an ObservableLike<B>. */
export type ObservableOperator<A, B> = Function1<
  ObservableLike<A>,
  ObservableLike<B>
>;

/**
 * An `ObservableLike` that shares a common subscription to an underlying observable source.
 *
 * @noInheritDoc
 */
export interface MulticastObservableLike<T>
  extends ObservableLike<T>,
    DisposableLike {
  /**
   * The number of observers currently observing.
   */
  readonly observerCount: number;
}

/** @noInheritDoc */
export interface DispatcherLike<T> extends DisposableLike {
  /**
   * Dispatches the next request
   * @param req
   */
  dispatch(this: DispatcherLike<T>, req: T): void;
}

/**
 * Represents a duplex stream
 *
 * @noInheritDoc
 */
export interface StreamLike<TReq, T>
  extends DispatcherLike<TReq>,
    MulticastObservableLike<T> {}

/** @noInheritDoc */
export interface SubjectLike<T> extends StreamLike<T, T> {}

export type AsyncReducer<TAcc, T> = Function2<TAcc, T, ObservableLike<TAcc>>;
export type ObservableEffectMode = "batched" | "combine-latest";

/**
 * The throttle mode used by the `throttle` operator.
 * first - Takes a leading value.
 * last - Takes the trailing value.
 * interval -  Takes both the leading and trailing values.
 */
export type ThrottleMode = "first" | "last" | "interval";

export { dispatchTo } from "./observable/dispatcher";
export {
  observable,
  __currentScheduler,
  __do,
  __memo,
  __observe,
  __using,
} from "./observable/effects";
export { combineLatest, combineLatestWith } from "./observable/combineLatest";
export { concat, concatT } from "./observable/concat";
export { createObservable } from "./observable/createObservable";
export { createSubject } from "./observable/createSubject";
export { decodeWithCharset } from "./observable/decodeWithCharset";
export { fromArray, fromArrayT } from "./observable/fromArray";
export { fromDisposable } from "./observable/fromDisposable";
export { fromEnumerable } from "./observable/fromEnumerable";
export {
  fromIterable,
  fromIterator,
  fromIteratorT,
} from "./observable/fromIterable";
export { fromPromise } from "./observable/fromPromise";
export { generate } from "./observable/generate";
export { merge, mergeWith } from "./observable/merge";
export { never } from "./observable/never";
export { subscribe } from "./observable/subscribe";
export { using } from "./observable/using";
export { defer } from "./observable/observable";
export { observe } from "./observable/observer";

export { buffer } from "./observable/buffer";
export { catchError } from "./observable/catchError";
export { distinctUntilChanged } from "./observable/distinctUntilChanged";
export { keep, keepT } from "./observable/keep";
export { map, mapT } from "./observable/map";
export { mapAsync } from "./observable/mapAsync";
export {
  concatAll,
  concatAllT,
  exhaust,
  exhaustT,
  mergeAll,
  mergeAllT,
} from "./observable/mergeAll";
export { onNotify } from "./observable/onNotify";
export { onSubscribe } from "./observable/onSubscribe";
export { pairwise } from "./observable/pairwise";
export { publish } from "./observable/publish";
export { reduce } from "./observable/reduce";
export { repeat, retry } from "./observable/repeat";
export { scan } from "./observable/scan";
export { scanAsync } from "./observable/scanAsync";
export { share } from "./observable/share";
export { skipFirst } from "./observable/skipFirst";
export { subscribeOn } from "./observable/subscribeOn";
export { switchAll, switchAllT } from "./observable/switchAll";
export { takeFirst } from "./observable/takeFirst";
export { takeLast } from "./observable/takeLast";
export { takeUntil } from "./observable/takeUntil";
export { takeWhile } from "./observable/takeWhile";
export { throttle } from "./observable/throttle";
export { throwIfEmpty } from "./observable/throwIfEmpty";
export { timeout, timeoutError } from "./observable/timeout";
export { withLatestFrom } from "./observable/withLatestFrom";
export { zip, zipT } from "./observable/zip";
export { zipLatest, zipLatestWith } from "./observable/zipLatest";
export { zipWithLatestFrom } from "./observable/zipWithLatestFrom";

export { toEnumerable } from "./observable/toEnumerable";
export { toRunnable } from "./observable/toRunnable";
export { toPromise } from "./observable/toPromise";
