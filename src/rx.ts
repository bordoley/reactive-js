import {
  Container,
  ContainerLike,
  ContainerOf,
  StatefulContainerLike,
  StatefulContainerStateOf,
} from "./containers";
import { Function1 } from "./functions";
import { DispatcherLike, SchedulerLike } from "./scheduling";
import { DisposableLike } from "./util";

export const ReactiveSinkLike_notify = Symbol("ReactiveSinkLike_notify");
export interface ReactiveSinkLike<T = unknown> extends DisposableLike {
  /**
   * Notifies the the sink of the next notification produced by the observable source.
   *
   * Note: The `notify` method must be called from within a `SchedulerContinuationLike`
   * scheduled using the sink's `schedule` method.
   *
   * @param next The next notification value.
   */
  [ReactiveSinkLike_notify](next: T): void;
}

export const ObserverLike_dispatcher = Symbol("ObserverLike_dispatcher");
export const ObserverLike_scheduler = Symbol("ObserverLike_scheduler");

export interface ObserverLike<T = unknown> extends ReactiveSinkLike<T> {
  readonly [ObserverLike_dispatcher]: DispatcherLike<T>;
  readonly [ObserverLike_scheduler]: SchedulerLike;
}

export const ReactiveContainerLike_sinkInto = Symbol(
  "ReactiveContainerLike_sinkInto",
);
export interface ReactiveContainerLike extends StatefulContainerLike {
  readonly TContainerOf?: this;
  readonly TStatefulContainerState?: ReactiveSinkLike;

  [ReactiveContainerLike_sinkInto](
    sink: StatefulContainerStateOf<ReactiveContainerLike, this["T"]>,
  ): void;
}

export interface RunnableLike<T = unknown> extends ReactiveContainerLike {
  readonly TStatefulContainerState?: ReactiveSinkLike<this["T"]>;

  [ReactiveContainerLike_sinkInto](sink: ReactiveSinkLike<T>): void;
}

export const DefaultObservable = 0;
export const RunnableObservable = 1;
export const EnumerableObservable = 2;

export const ObservableLike_observableType = Symbol(
  "ObservableLike_observableType",
);
/**
 * The source of notifications which notifies a `ObserverLike` instance.
 *
 * @noInheritDoc
 */
export interface ObservableLike<T = unknown> extends ReactiveContainerLike {
  readonly TStatefulContainerState?: ObserverLike<T>;

  readonly [ObservableLike_observableType]:
    | typeof EnumerableObservable
    | typeof RunnableObservable
    | typeof DefaultObservable;
}

export interface RunnableObservableLike<T = unknown> extends ObservableLike<T> {
  readonly [ObservableLike_observableType]:
    | typeof RunnableObservable
    | typeof EnumerableObservable;
}

export interface EnumerableObservableLike<T = unknown>
  extends RunnableObservableLike<T> {
  readonly [ObservableLike_observableType]: typeof EnumerableObservable;
}

export const MulticastObservableLike_observerCount = Symbol(
  "MulticastObservableLike_observerCount",
);
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

export const SubjectLike_publish = Symbol("SubjectLike_publish");
export interface SubjectLike<T = unknown> extends MulticastObservableLike<T> {
  [SubjectLike_publish](next: T): void;
}

export type CreateReactiveContainer<C extends ReactiveContainerLike> =
  Container<C> & {
    create<T>(
      onSink: (sink: StatefulContainerStateOf<C, T>) => void,
    ): ContainerOf<C, T>;
  };

export type Never<C extends ReactiveContainerLike> = Container<C> & {
  never<T>(): ContainerOf<C, T>;
};

export type ToRunnable<
  C extends ContainerLike,
  TOptions = never,
> = Container<C> & {
  toRunnable<T>(
    options?: TOptions,
  ): Function1<ContainerOf<C, T>, RunnableLike<T>>;
};
