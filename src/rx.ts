import {
  Container,
  ContainerLike,
  ContainerLike_T,
  ContainerLike_type,
  ContainerOf,
  ContainerOperator,
  StatefulContainerLike,
  StatefulContainerLike_state,
  Zip,
} from "./containers";
import { Factory, Function1, Function2 } from "./functions";
import { DispatcherLike, SchedulerLike } from "./scheduling";
import { DisposableLike } from "./util";

/** @ignore */
export const SinkLike_notify = Symbol("SinkLike_notify");
export interface SinkLike<T = unknown> extends DisposableLike {
  /**
   * Notifies the the sink of the next notification produced by the observable source.
   *
   * Note: The `notify` method must be called from within a `SchedulerContinuationLike`
   * scheduled using the sink's `schedule` method.
   *
   * @param next The next notification value.
   */
  [SinkLike_notify](next: T): void;
}

/** @ignore */
export const ObserverLike_dispatcher = Symbol("ObserverLike_dispatcher");

/** @ignore */
export const ObserverLike_scheduler = Symbol("ObserverLike_scheduler");

export interface ObserverLike<T = unknown> extends SinkLike<T> {
  readonly [ObserverLike_dispatcher]: DispatcherLike<T>;
  readonly [ObserverLike_scheduler]: SchedulerLike;
}

/** @ignore */
export const ReactiveContainerLike_sinkInto = Symbol(
  "ReactiveContainerLike_sinkInto",
);
export interface ReactiveContainerLike<TSink extends DisposableLike>
  extends StatefulContainerLike {
  [ReactiveContainerLike_sinkInto](sink: TSink): void;
}

export interface RunnableLike<T = unknown>
  extends ReactiveContainerLike<SinkLike<T>> {
  readonly [ContainerLike_type]?: RunnableLike<this[typeof ContainerLike_T]>;
  readonly [StatefulContainerLike_state]?: SinkLike<
    this[typeof ContainerLike_T]
  >;
}

/**  @ignore */
export const ObservableLike_isEnumerable = Symbol(
  "ObservableLike_isEnumerable",
);

/**  @ignore */
export const ObservableLike_isRunnable = Symbol("ObservableLike_isRunnable");

/**
 * The source of notifications which notifies a `ObserverLike` instance.
 *
 * @noInheritDoc
 */
export interface ObservableLike<T = unknown>
  extends ReactiveContainerLike<ObserverLike<T>> {
  readonly [StatefulContainerLike_state]?: ObserverLike<
    this[typeof ContainerLike_T]
  >;
  readonly [ContainerLike_type]?: ObservableLike<this[typeof ContainerLike_T]>;

  readonly [ObservableLike_isEnumerable]: boolean;
  readonly [ObservableLike_isRunnable]: boolean;
}

export interface RunnableObservableLike<T = unknown> extends ObservableLike<T> {
  readonly [ContainerLike_type]?: RunnableObservableLike<
    this[typeof ContainerLike_T]
  >;

  readonly [ObservableLike_isRunnable]: true;
}

export interface EnumerableObservableLike<T = unknown>
  extends RunnableObservableLike<T> {
  readonly [ContainerLike_type]?: EnumerableObservableLike<
    this[typeof ContainerLike_T]
  >;

  readonly [ObservableLike_isEnumerable]: true;
}

/** @ignore */
export const MulticastObservableLike_observerCount = Symbol(
  "MulticastObservableLike_observerCount",
);

/** @ignore */
export const MulticastObservableLike_replay = Symbol(
  "MulticastObservableLike_replay",
);

export interface MulticastObservableLike<T = unknown>
  extends ObservableLike<T>,
    DisposableLike {
  /**
   * The number of observers currently observing.
   */
  readonly [MulticastObservableLike_observerCount]: number;
  readonly [MulticastObservableLike_replay]: number;
}

/** @ignore */
export const SubjectLike_publish = Symbol("SubjectLike_publish");
export interface SubjectLike<T = unknown> extends MulticastObservableLike<T> {
  [SubjectLike_publish](next: T): void;
}

export type AsyncReducer<C extends ObservableLike, T, TAcc> = Function2<
  TAcc,
  T,
  ContainerOf<C, TAcc>
>;

export type FromEnumerableObservable<
  C extends ContainerLike,
  O = never,
> = Container<C> & {
  fromEnumerableObservable: <T>(
    options?: O,
  ) => Function1<EnumerableObservableLike<T>, ContainerOf<C, T>>;
};

export type FromRunnableObservable<
  C extends ContainerLike,
  O = never,
> = Container<C> & {
  fromRunnableObservable: <T>(
    options?: O,
  ) => Function1<RunnableObservableLike<T>, ContainerOf<C, T>>;
};

export type Retry<C extends ObservableLike> = {
  /**
   * Returns an `ObservableLike` that mirrors the source, re-subscribing
   * if the source completes with an error.
   */
  retry<T>(): ContainerOperator<C, T, T>;

  /**
   * Returns an `ObservableLike` that mirrors the source, resubscrbing
   * if the source completes with an error which satisfies the predicate function.
   *
   * @param predicate
   */
  retry<T>(
    predicate: Function2<number, unknown, boolean>,
  ): ContainerOperator<C, T, T>;
};

export type ScanAsync<
  C extends ContainerLike,
  CInner extends ObservableLike,
> = Container<C> & {
  scanAsync: <T, TAcc>(
    scanner: AsyncReducer<CInner, T, TAcc>,
    initialValue: Factory<TAcc>,
  ) => ContainerOperator<C, T, TAcc>;
};

export type TakeUntil<C extends ObservableLike> = {
  takeUntil<T>(notifier: C): ContainerOperator<C, T, T>;
};

export type Timeout<C extends ObservableLike> = {
  /**
   * Returns an `ObservableLike` that completes with an error if the source
   * does not emit a value in given time span.
   *
   * @param duration Time in ms within which the source must emit values.
   */
  timeout<T>(duration: number): ContainerOperator<C, T, T>;

  /**
   *
   * @param duration
   */
  timeout<T>(duration: C): ContainerOperator<C, T, T>;
};

export type ToObservable<C extends ContainerLike, O = never> = Container<C> & {
  toObservable: <T>(
    options?: O,
  ) => Function1<ContainerOf<C, T>, ObservableLike<T>>;
};

export type ToRunnableObservable<
  C extends ContainerLike,
  O = never,
> = Container<C> & {
  toRunnableObservable: <T>(
    options?: O,
  ) => Function1<ContainerOf<C, T>, RunnableObservableLike<T>>;
};

export type ToEnumerableObservable<
  C extends ContainerLike,
  O = never,
> = Container<C> & {
  toEnumerableObservable: <T>(
    options?: O,
  ) => Function1<ContainerOf<C, T>, EnumerableObservableLike<T>>;
};

export type ToRunnable<C extends ContainerLike, O = never> = Container<C> & {
  toRunnable<T>(options?: O): Function1<ContainerOf<C, T>, RunnableLike<T>>;
};

export type WithLatestFrom<C extends ObservableLike> = {
  withLatestFrom<TA, TB, T>(
    other: ContainerOf<C, TB>,
    selector: Function2<TA, TB, T>,
  ): ContainerOperator<C, TA, T>;
};

export type ZipLatest<C extends ObservableLike> = {
  zipLatest: Zip<C>["zip"];
};

export type ZipWithLatestFrom<C extends ObservableLike> = {
  zipWithLatestFrom<TA, TB, T>(
    other: ContainerOf<C, TB>,
    selector: Function2<TA, TB, T>,
  ): ContainerOperator<C, TA, T>;
};
