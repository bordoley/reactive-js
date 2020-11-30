import { DispatcherLike } from "./dispatcher";
import { DisposableLike } from "./disposable";
import { Function1 } from "./functions";
import { SchedulerLike } from "./scheduler";

/**
 * The underlying mechanism for receiving and transforming notifications from an
 * observable source. The `ObserverLike` interface composes the `SchedulerLike` and
 * `DisposableLike` interfaces into a single unified type, while adding the capability
 * to receive notifications.
 *
 * @noInheritDoc
 */
export interface ObserverLike<T> extends DisposableLike, SchedulerLike {
  /**
   * Notifies the the observer of the next notification produced by the observable source.
   *
   * Note: The `notify` method must be called from within a `SchedulerContinuationLike`
   * scheduled using the observer's `schedule` method.
   *
   * @param next The next notification value.
   */
  notify(next: T): void;
}

/**
 * A function which transforms a `ObserverLike<B>` to a `ObserverLike<A>`.
 */
export type ObserverOperator<A, B> = {
  readonly isSynchronous: boolean;

  (observer: ObserverLike<B>): ObserverLike<A>;
};

/**
 * The source of notifications which notifies a `ObserverLike` instance.
 *
 * @noInheritDoc
 */
export interface ObservableLike<T> {
  readonly isSynchronous: boolean;

  /**
   * Subscribes the `ObserverLike` instance to the observable.
   * @param observer The observer which should be notified by the observable source.
   */
  observe(observer: ObserverLike<T>): void;
}

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

export {
  async,
  observable,
  __await,
  __currentScheduler,
  __do,
  __memo,
  __observe,
  __using,
} from "./observable/effects";
export { combineLatest, combineLatestWith } from "./observable/combineLatest";
export { compute } from "./observable/compute";
export { concat, concatWith } from "./observable/concat";
export { createObservable } from "./observable/createObservable";
export { createSubject } from "./observable/createSubject";
export { empty } from "./observable/empty";
export { fromArray } from "./observable/fromArray";
export { fromDisposable } from "./observable/fromDisposable";
export { fromEnumerable } from "./observable/fromEnumerable";
export { fromIterable, fromIterator } from "./observable/fromIterable";
export { fromPromise } from "./observable/fromPromise";
export { generate } from "./observable/generate";
export { merge, mergeWith } from "./observable/merge";
export { never } from "./observable/never";
export { fromValue } from "./observable/fromValue";
export { subscribe } from "./observable/subscribe";
export { throws } from "./observable/throws";
export { using } from "./observable/using";
export { defer } from "./observable/observable";
export { observe } from "./observable/observer";

export { buffer } from "./observable/buffer";
export { catchError } from "./observable/catchError";
export { distinctUntilChanged } from "./observable/distinctUntilChanged";
export { endWith } from "./observable/endWith";
export { genMap } from "./observable/genMap";
export { ignoreElements } from "./observable/ignoreElements";
export { keep, keepType } from "./observable/keep";
export { lift } from "./observable/lift";
export { map, mapTo } from "./observable/map";
export { mapAsync } from "./observable/mapAsync";
export {
  concatAll,
  concatMap,
  exhaust,
  exhaustMap,
  mergeAll,
  mergeMap,
} from "./observable/mergeAll";
export { onNotify } from "./observable/onNotify";
export { onSubscribe } from "./observable/onSubscribe";
export { pairwise } from "./observable/pairwise";
export { publish } from "./observable/publish";
export { reduce } from "./observable/reduce";
export { repeat, retry } from "./observable/repeat";
export { scan } from "./observable/scan";
export { AsyncReducer, scanAsync } from "./observable/scanAsync";
export { share } from "./observable/share";
export { skipFirst } from "./observable/skipFirst";
export { startWith } from "./observable/startWith";
export { subscribeOn } from "./observable/subscribeOn";
export { switchAll, switchMap } from "./observable/switchAll";
export { takeFirst } from "./observable/takeFirst";
export { takeLast } from "./observable/takeLast";
export { takeUntil } from "./observable/takeUntil";
export { takeWhile } from "./observable/takeWhile";
export { ThrottleMode, throttle } from "./observable/throttle";
export { throwIfEmpty } from "./observable/throwIfEmpty";
export { timeout, timeoutError } from "./observable/timeout";
export { withLatestFrom } from "./observable/withLatestFrom";
export { zip, zipWith } from "./observable/zip";
export { zipLatest, zipLatestWith } from "./observable/zipLatest";
export { zipWithLatestFrom } from "./observable/zipWithLatestFrom";

export { toRunnable } from "./observable/toRunnable";
export { toPromise } from "./observable/toPromise";
