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
  combineLatest,
  combineLatestWith,
} from "./internal/observable/combineLatest";
export { compute } from "./internal/observable/compute";
export { concat, concatWith } from "./internal/observable/concat";
export { createObservable } from "./internal/observable/createObservable";
export { createSubject } from "./internal/observable/createSubject";
export { empty } from "./internal/observable/empty";
export { fromArray } from "./internal/observable/fromArray";
export { fromDisposable } from "./internal/observable/fromDisposable";
export { fromEnumerable } from "./internal/observable/fromEnumerable";
export { fromIterable, fromIterator } from "./internal/observable/fromIterable";
export { fromPromise } from "./internal/observable/fromPromise";
export { generate } from "./internal/observable/generate";
export { merge, mergeWith } from "./internal/observable/merge";
export { never } from "./internal/observable/never";
export { fromValue } from "./internal/observable/fromValue";
export { subscribe } from "./internal/observable/subscribe";
export { throws } from "./internal/observable/throws";
export { using } from "./internal/observable/using";
export { observe } from "./internal/observable/observable";

export { await_ } from "./internal/observable/await";
export { buffer } from "./internal/observable/buffer";
export { catchError } from "./internal/observable/catchError";
export { distinctUntilChanged } from "./internal/observable/distinctUntilChanged";
export { endWith } from "./internal/observable/endWith";
export { genMap } from "./internal/observable/genMap";
export { ignoreElements } from "./internal/observable/ignoreElements";
export { keep, keepType } from "./internal/observable/keep";
export { lift } from "./internal/observable/lift";
export { map, mapTo } from "./internal/observable/map";
export { mapAsync } from "./internal/observable/mapAsync";
export {
  concatAll,
  concatMap,
  exhaust,
  exhaustMap,
  mergeAll,
  mergeMap,
} from "./internal/observable/mergeAll";
export { onNotify } from "./internal/observable/onNotify";
export { onSubscribe } from "./internal/observable/onSubscribe";
export { pairwise } from "./internal/observable/pairwise";
export { publish } from "./internal/observable/publish";
export { reduce } from "./internal/observable/reduce";
export { repeat, retry } from "./internal/observable/repeat";
export { scan } from "./internal/observable/scan";
export { AsyncReducer, scanAsync } from "./internal/observable/scanAsync";
export { share } from "./internal/observable/share";
export { skipFirst } from "./internal/observable/skipFirst";
export { startWith } from "./internal/observable/startWith";
export { subscribeOn } from "./internal/observable/subscribeOn";
export { switchAll, switchMap } from "./internal/observable/switchAll";
export { takeFirst } from "./internal/observable/takeFirst";
export { takeLast } from "./internal/observable/takeLast";
export { takeUntil } from "./internal/observable/takeUntil";
export { takeWhile } from "./internal/observable/takeWhile";
export { ThrottleMode, throttle } from "./internal/observable/throttle";
export { throwIfEmpty } from "./internal/observable/throwIfEmpty";
export { timeout, timeoutError } from "./internal/observable/timeout";
export { withLatestFrom } from "./internal/observable/withLatestFrom";
export { zip, zipWith } from "./internal/observable/zip";
export { zipLatest, zipLatestWith } from "./internal/observable/zipLatest";
export { zipWithLatestFrom } from "./internal/observable/zipWithLatestFrom";

export { toRunnable } from "./internal/observable/toRunnable";
export { toPromise } from "./internal/observable/toPromise";
