import { StatefulContainerLike, ContainerLike_type, ContainerLike_T, StatefulContainerLike_state, ContainerOf, ContainerLike, Container, ContainerOperator, Zip } from "./containers.js";
import { Function2, Function1, Factory } from "./functions.js";
import { DispatcherLike, SchedulerLike } from "./scheduling.js";
import { DisposableLike } from "./util.js";
/** @ignore */
declare const SinkLike_notify: unique symbol;
interface SinkLike<T = unknown> extends DisposableLike {
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
declare const ObserverLike_dispatcher: unique symbol;
/** @ignore */
declare const ObserverLike_scheduler: unique symbol;
interface ObserverLike<T = unknown> extends SinkLike<T> {
    readonly [ObserverLike_dispatcher]: DispatcherLike<T>;
    readonly [ObserverLike_scheduler]: SchedulerLike;
}
/** @ignore */
declare const ReactiveContainerLike_sinkInto: unique symbol;
interface ReactiveContainerLike<TSink extends DisposableLike> extends StatefulContainerLike {
    [ReactiveContainerLike_sinkInto](sink: TSink): void;
}
interface RunnableLike<T = unknown> extends ReactiveContainerLike<SinkLike<T>> {
    readonly [ContainerLike_type]?: RunnableLike<this[typeof ContainerLike_T]>;
    readonly [StatefulContainerLike_state]?: SinkLike<this[typeof ContainerLike_T]>;
}
/**  @ignore */
declare const ObservableLike_isEnumerable: unique symbol;
/**  @ignore */
declare const ObservableLike_isRunnable: unique symbol;
/**
 * The source of notifications which notifies a `ObserverLike` instance.
 *
 * @noInheritDoc
 */
interface ObservableLike<T = unknown> extends ReactiveContainerLike<ObserverLike<T>> {
    readonly [StatefulContainerLike_state]?: ObserverLike<this[typeof ContainerLike_T]>;
    readonly [ContainerLike_type]?: ObservableLike<this[typeof ContainerLike_T]>;
    readonly [ObservableLike_isEnumerable]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;
}
interface RunnableObservableLike<T = unknown> extends ObservableLike<T> {
    readonly [ContainerLike_type]?: RunnableObservableLike<this[typeof ContainerLike_T]>;
    readonly [ObservableLike_isRunnable]: true;
}
interface EnumerableObservableLike<T = unknown> extends RunnableObservableLike<T> {
    readonly [ContainerLike_type]?: EnumerableObservableLike<this[typeof ContainerLike_T]>;
    readonly [ObservableLike_isEnumerable]: true;
}
/** @ignore */
declare const MulticastObservableLike_observerCount: unique symbol;
/** @ignore */
declare const MulticastObservableLike_replay: unique symbol;
interface MulticastObservableLike<T = unknown> extends ObservableLike<T>, DisposableLike {
    /**
     * The number of observers currently observing.
     */
    readonly [MulticastObservableLike_observerCount]: number;
    readonly [MulticastObservableLike_replay]: number;
}
/** @ignore */
declare const SubjectLike_publish: unique symbol;
interface SubjectLike<T = unknown> extends MulticastObservableLike<T> {
    [SubjectLike_publish](next: T): void;
}
type AsyncReducer<C extends ObservableLike, T, TAcc> = Function2<TAcc, T, ContainerOf<C, TAcc>>;
type FromEnumerableObservable<C extends ContainerLike, O = never> = Container<C> & {
    fromEnumerableObservable: <T>(options?: O) => Function1<EnumerableObservableLike<T>, ContainerOf<C, T>>;
};
type FromRunnableObservable<C extends ContainerLike, O = never> = Container<C> & {
    fromRunnableObservable: <T>(options?: O) => Function1<RunnableObservableLike<T>, ContainerOf<C, T>>;
};
type Retry<C extends ObservableLike> = {
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
    retry<T>(predicate: Function2<number, unknown, boolean>): ContainerOperator<C, T, T>;
};
type ScanAsync<C extends ContainerLike, CInner extends ObservableLike> = Container<C> & {
    scanAsync: <T, TAcc>(scanner: AsyncReducer<CInner, T, TAcc>, initialValue: Factory<TAcc>) => ContainerOperator<C, T, TAcc>;
};
type TakeUntil<C extends ObservableLike> = {
    takeUntil<T>(notifier: C): ContainerOperator<C, T, T>;
};
declare const ThrottleMode_first: unique symbol;
declare const ThrottleMode_last: unique symbol;
declare const ThrottleMode_interval: unique symbol;
type ThrottleMode = typeof ThrottleMode_first | typeof ThrottleMode_last | typeof ThrottleMode_interval;
type Throttle<C extends ObservableLike> = Container<C> & {
    /**
     * Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.
     *
     * @param duration Function function that is used to determine the silence duration in between emitted values.
     * @param mode The throttle mode.
     */
    throttle<T>(duration: Function1<T, C>, options?: {
        readonly mode?: ThrottleMode;
    }): ContainerOperator<C, T, T>;
    /**
     * Returns an `ObservableLike` which emits a value from the source,
     * then ignores subsequent source values for `duration` milliseconds.
     *
     * @param duration Time to wait before emitting another value after
     * emitting the last value, measured in milliseconds.
     * @param mode The throttle mode.
     */
    throttle<T>(duration: number, options?: {
        readonly mode?: ThrottleMode;
    }): ContainerOperator<C, T, T>;
};
type Timeout<C extends ObservableLike> = Container<C> & {
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
type ToObservable<C extends ContainerLike, O = never> = Container<C> & {
    toObservable: <T>(options?: O) => Function1<ContainerOf<C, T>, ObservableLike<T>>;
};
type ToRunnableObservable<C extends ContainerLike, O = never> = Container<C> & {
    toRunnableObservable: <T>(options?: O) => Function1<ContainerOf<C, T>, RunnableObservableLike<T>>;
};
type ToEnumerableObservable<C extends ContainerLike, O = never> = Container<C> & {
    toEnumerableObservable: <T>(options?: O) => Function1<ContainerOf<C, T>, EnumerableObservableLike<T>>;
};
type ToRunnable<C extends ContainerLike, O = never> = Container<C> & {
    toRunnable<T>(options?: O): Function1<ContainerOf<C, T>, RunnableLike<T>>;
};
type WithLatestFrom<C extends ObservableLike> = {
    withLatestFrom<TA, TB, T>(other: ContainerOf<C, TB>, selector: Function2<TA, TB, T>): ContainerOperator<C, TA, T>;
};
type ZipLatest<C extends ObservableLike> = {
    zipLatest: Zip<C>["zip"];
};
type ZipWithLatestFrom<C extends ObservableLike> = {
    zipWithLatestFrom<TA, TB, T>(other: ContainerOf<C, TB>, selector: Function2<TA, TB, T>): ContainerOperator<C, TA, T>;
};
export { AsyncReducer, EnumerableObservableLike, FromEnumerableObservable, FromRunnableObservable, MulticastObservableLike, MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObserverLike, ObserverLike_dispatcher, ObserverLike_scheduler, ReactiveContainerLike, ReactiveContainerLike_sinkInto, Retry, RunnableLike, RunnableObservableLike, ScanAsync, SinkLike, SinkLike_notify, SubjectLike, SubjectLike_publish, TakeUntil, Throttle, ThrottleMode, ThrottleMode_first, ThrottleMode_interval, ThrottleMode_last, Timeout, ToEnumerableObservable, ToObservable, ToRunnable, ToRunnableObservable, WithLatestFrom, ZipLatest, ZipWithLatestFrom };
