import { decorateMap } from "./__internal__.functions";
import { hasDelay } from "./__internal__.optionalArgs";
import {
  createCatchErrorOperator,
  createEverySatisfyOperator,
  createOnSink,
  createSomeSatisfyOperator,
  decorateWithCatchErrorNotify,
  decorateWithEverySatisfyNotify,
  decorateWithSomeSatisfyNotify,
} from "./__internal__.reactiveContainer";
import {
  Container,
  ContainerLike,
  ContainerOf,
  ContainerOperator,
  EverySatisfy,
  Generate,
  SomeSatisfy,
  concatMap,
} from "./container";
import { dispatchTo } from "./dispatcher";
import { bindTo, dispose, isDisposed, onDisposed } from "./disposable";
import {
  Factory,
  Function1,
  Function2,
  Predicate,
  Updater,
  identity,
  instanceFactory,
  newInstance,
  pipe,
} from "./functions";
import { CatchError } from "./liftableContainer";
import { createObservable, createT } from "./observable/createObservable";
import { defer } from "./observable/defer";
import { fromArrayT } from "./observable/fromArray";
import { lift, liftEnumerableT, liftT } from "./observable/lift";
import { mapT } from "./observable/map";
import { tagObservableType } from "./observable/observable";
import {
  AbstractDelegatingObserver,
  createDelegatingObserver,
  decorateNotifyWithAssertions,
} from "./observable/observer";
import { onNotify } from "./observable/onNotify";
import { Subject, publish, publishTo } from "./observable/subject";
import { subscribe } from "./observable/subscribe";
import { switchAll, switchAllT } from "./observable/switchAll";
import { using } from "./observable/using";
import { zipWithLatestFrom } from "./observable/zipWithLatestFrom";
import { ObserverLike, getScheduler } from "./observer";
import { Option, isNone, isSome, none } from "./option";
import { ReactiveContainerLike, sourceFrom } from "./reactiveContainer";
import { SchedulerLike, __yield } from "./scheduler";

export type DefaultObservable = 0;
export type RunnableObservable = 1;
export type EnumerableObservable = 2;

/**
 * The source of notifications which notifies a `ObserverLike` instance.
 *
 * @noInheritDoc
 */
export interface ObservableLike<T> extends ReactiveContainerLike {
  readonly T: unknown;
  readonly TContainerOf: ObservableLike<this["T"]>;
  readonly TLiftableContainerState: ObserverLike<this["T"]>;

  readonly observableType:
    | EnumerableObservable
    | RunnableObservable
    | DefaultObservable;

  sinkInto(this: ObservableLike<T>, sink: ObserverLike<T>): void;
}

export interface FromObservable<C extends ContainerLike> extends Container<C> {
  fromObservable<T>(): Function1<ObservableLike<T>, ContainerOf<C, T>>;
}

/**
 * An `ObservableLike` that shares a common subscription to an underlying observable source.
 *
 * @noInheritDoc
 */

export type AsyncReducer<T, TAcc> = Function2<TAcc, T, ObservableLike<TAcc>>;
export type ObservableEffectMode = "batched" | "combine-latest";

/**
 * The throttle mode used by the `throttle` operator.
 * first - Takes a leading value.
 * last - Takes the trailing value.
 * interval -  Takes both the leading and trailing values.
 */
export type ThrottleMode = "first" | "last" | "interval";

export {
  observable,
  __currentScheduler,
  __do,
  __memo,
  __observe,
  __using,
} from "./observable/effects";
export {
  combineLatest,
  combineLatestT,
  forkCombineLatest,
  forkZipLatest,
  zipLatest,
  zipLatestT,
} from "./observable/latest";
export { concat, concatT } from "./observable/concat";
export { createObservable, createT } from "./observable/createObservable";
export { Subject, publish, publishTo } from "./observable/subject";
export { fromArray, fromArrayT } from "./observable/fromArray";
export {
  fromEnumerable,
  fromEnumerableT,
  fromIterable,
  fromIterableT,
  fromIterator,
  fromIteratorT,
} from "./observable/fromEnumerable";
export { forkMerge, merge, mergeT } from "./observable/merge";
export { never, neverT } from "./observable/never";
export { subscribe } from "./observable/subscribe";
export { using, usingT } from "./observable/using";
export { defer, deferT } from "./observable/defer";
export { buffer, bufferT } from "./observable/buffer";
export { map, mapT } from "./observable/map";
export {
  concatAll,
  concatAllT,
  exhaust,
  exhaustT,
  mergeAll,
  mergeAllT,
} from "./observable/mergeAll";
export { onNotify } from "./observable/onNotify";
export { repeat, repeatT, retry } from "./observable/repeat";
export { switchAll, switchAllT } from "./observable/switchAll";
export { throttle } from "./observable/throttle";
export { timeout, timeoutError } from "./observable/timeout";
export { withLatestFrom } from "./observable/withLatestFrom";
export { zip, zipT } from "./observable/zip";
export { zipWithLatestFrom } from "./observable/zipWithLatestFrom";
export { toEnumerable } from "./observable/toEnumerable";
export { toPromise } from "./observable/toPromise";
export { isEnumerable, isRunnable } from "./observable/observable";

export const catchError: CatchError<ObservableLike<unknown>>["catchError"] =
  /*@__PURE__*/ decorateMap(
    class CatchErrorObserver<T> extends AbstractDelegatingObserver<T, T> {},
    decorateWithCatchErrorNotify<ObservableLike<unknown>>(),
    decorateNotifyWithAssertions,
    createCatchErrorOperator(liftEnumerableT),
  );

export const catchErrorT: CatchError<ObservableLike<unknown>> = {
  catchError,
};

export const everySatisfy: EverySatisfy<
  ObservableLike<unknown>
>["everySatisfy"] = /*@__PURE__*/ decorateMap(
  class EverySatisfyObserver<T> extends AbstractDelegatingObserver<T, boolean> {
    constructor(
      delegate: ObserverLike<boolean>,
      readonly predicate: Predicate<T>,
    ) {
      super(delegate);
    }
  },
  decorateWithEverySatisfyNotify<ObservableLike<unknown>>(),
  decorateNotifyWithAssertions,
  createEverySatisfyOperator({ ...fromArrayT, ...liftEnumerableT }),
);

export const everySatisfyT: EverySatisfy<ObservableLike<unknown>> = {
  everySatisfy,
};

/**
 * Generates an `ObservableLike` sequence from a generator function
 * that is applied to an accumulator value with a specified `delay`
 * between emitted items.
 *
 * @param generator the generator function.
 * @param initialValue Factory function used to generate the initial accumulator.
 * @param delay The requested delay between emitted items by the observable.
 */
export const generate = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
  options?: { readonly delay?: number; readonly delayStart?: boolean },
): ObservableLike<T> => {
  const { delayStart = true } = options ?? {};

  const factory = () => {
    let acc = initialValue();

    return (observer: ObserverLike<T>) => {
      while (!isDisposed(observer)) {
        acc = generator(acc);
        observer.notify(acc);
        __yield(options);
      }
    };
  };

  return pipe(
    defer(factory, delayStart ? options : none),
    tagObservableType(hasDelay(options) ? 1 : 2),
  );
};

export const generateT: Generate<ObservableLike<unknown>> = {
  generate,
};

export const mapAsync = <TA, TB>(
  f: Function1<TA, Promise<TB>>,
): ObservableOperator<TA, TB> =>
  concatMap({ ...switchAllT, ...mapT }, (a: TA) => fromPromise(() => f(a)));

export const onSubscribe = /*@__PURE__*/ createOnSink(createT);

export interface ScanAsync<C extends ContainerLike> extends Container<C> {
  scanAsync: <T, TAcc>(
    scanner: AsyncReducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ) => ContainerOperator<C, T, TAcc>;
}
/**
 * Returns the `ObservableLike` that applies an asynchronous accumulator function
 * over the source, and emits each intermediate result.
 *
 * @param scanner The accumulator function called on each source value.
 * @param initialValue The initial accumulation value.
 */
export const scanAsync: ScanAsync<ObservableLike<unknown>>["scanAsync"] =
  <T, TAcc>(
    scanner: AsyncReducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ObservableOperator<T, TAcc> =>
  observable =>
    using(instanceFactory<Subject<TAcc>>(Subject), accFeedbackStream =>
      pipe(
        observable,
        zipWithLatestFrom<T, TAcc, ObservableLike<TAcc>>(
          accFeedbackStream,
          (next, acc) => pipe(scanner(acc, next), takeFirst()),
        ),
        switchAll<TAcc>(),
        onNotify(publishTo(accFeedbackStream)),
        onSubscribe(() => pipe(accFeedbackStream, publish(initialValue()))),
      ),
    );

export const scanAsyncT: ScanAsync<ObservableLike<unknown>> = {
  scanAsync,
};

export const someSatisfy: SomeSatisfy<ObservableLike<unknown>>["someSatisfy"] =
  /*@__PURE__*/ decorateMap(
    class SomeSatisfyObserver<T> extends AbstractDelegatingObserver<
      T,
      boolean
    > {
      constructor(
        delegate: ObserverLike<boolean>,
        readonly predicate: Predicate<T>,
      ) {
        super(delegate);
      }
    },
    decorateWithSomeSatisfyNotify<ObservableLike<unknown>>(),
    decorateNotifyWithAssertions,
    createSomeSatisfyOperator({ ...fromArrayT, ...liftEnumerableT }),
  );

export const someSatisfyT: SomeSatisfy<ObservableLike<unknown>> = {
  someSatisfy,
};

export const toObservable: ToObservable<
  ObservableLike<unknown>
>["toObservable"] = () => identity;

export const toObservableT: ToObservable<ObservableLike<unknown>> = {
  toObservable,
};
