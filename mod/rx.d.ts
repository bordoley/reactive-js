import { StatefulContainerLike, ContainerLike_type, ContainerLike_T, StatefulContainerLike_state, ContainerOf, ContainerLike, Container, ContainerOperator, Zip } from "./containers.js";
import { Function2, Function1, Factory } from "./functions.js";
import { DispatcherLike, SchedulerLike } from "./scheduling.js";
import { DisposableLike } from "./util.js";
/** @ignore */
declare const SinkLike_notify: unique symbol;
/**
 * @category Container
 */
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
/**
 * @category Container
 */
interface ReactiveContainerLike<TSink extends DisposableLike> extends StatefulContainerLike {
    [ReactiveContainerLike_sinkInto](sink: TSink): void;
}
/**
 * @category Container
 */
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
 * @category Container
 */
interface ObservableLike<T = unknown> extends ReactiveContainerLike<ObserverLike<T>> {
    readonly [StatefulContainerLike_state]?: ObserverLike<this[typeof ContainerLike_T]>;
    readonly [ContainerLike_type]?: ObservableLike<this[typeof ContainerLike_T]>;
    readonly [ObservableLike_isEnumerable]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;
}
/**
 * @category Container
 */
interface RunnableObservableLike<T = unknown> extends ObservableLike<T> {
    readonly [ContainerLike_type]?: RunnableObservableLike<this[typeof ContainerLike_T]>;
    readonly [ObservableLike_isRunnable]: true;
}
/**
 * @category Container
 */
interface EnumerableObservableLike<T = unknown> extends RunnableObservableLike<T> {
    readonly [ContainerLike_type]?: EnumerableObservableLike<this[typeof ContainerLike_T]>;
    readonly [ObservableLike_isEnumerable]: true;
}
/** @ignore */
declare const MulticastObservableLike_observerCount: unique symbol;
/** @ignore */
declare const MulticastObservableLike_replay: unique symbol;
/**
 * @category Container
 */
interface MulticastObservableLike<T = unknown> extends ObservableLike<T>, DisposableLike {
    /**
     * The number of observers currently observing.
     */
    readonly [MulticastObservableLike_observerCount]: number;
    readonly [MulticastObservableLike_replay]: number;
}
/** @ignore */
declare const SubjectLike_publish: unique symbol;
/**
 * @category Container
 */
interface SubjectLike<T = unknown> extends MulticastObservableLike<T> {
    [SubjectLike_publish](next: T): void;
}
type AsyncReducer<C extends ObservableLike, T, TAcc> = Function2<TAcc, T, ContainerOf<C, TAcc>>;
/**
 * @category TypeClass
 */
interface FromEnumerableObservable<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Constructor
     */
    fromEnumerableObservable: <T>(options?: O) => Function1<EnumerableObservableLike<T>, ContainerOf<C, T>>;
}
/**
 * @category TypeClass
 */
interface FromRunnableObservable<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Constructor
     */
    fromRunnableObservable: <T>(options?: O) => Function1<RunnableObservableLike<T>, ContainerOf<C, T>>;
}
/**
 * @category TypeClass
 */
interface Retry<C extends ObservableLike> extends Container<C> {
    /**
     * Returns an `ObservableLike` that mirrors the source, re-subscribing
     * if the source completes with an error.
     *
     * @category Operator
     */
    retry<T>(): ContainerOperator<C, T, T>;
    /**
     * Returns an `ObservableLike` that mirrors the source, resubscrbing
     * if the source completes with an error which satisfies the predicate function.
     *
     * @param predicate
     *
     * @category Operator
     */
    retry<T>(predicate: Function2<number, unknown, boolean>): ContainerOperator<C, T, T>;
}
/**
 * @category TypeClass
 */
interface ScanAsync<C extends ContainerLike, CInner extends ObservableLike> extends Container<C> {
    /**
     * @category Operator
     */
    scanAsync: <T, TAcc>(scanner: AsyncReducer<CInner, T, TAcc>, initialValue: Factory<TAcc>) => ContainerOperator<C, T, TAcc>;
}
/**
 * @category TypeClass
 */
interface TakeUntil<C extends ObservableLike> extends Container<C> {
    /**
     * @category Operator
     */
    takeUntil<T>(notifier: C): ContainerOperator<C, T, T>;
}
declare const ThrottleMode_first: unique symbol;
declare const ThrottleMode_last: unique symbol;
declare const ThrottleMode_interval: unique symbol;
type ThrottleMode = typeof ThrottleMode_first | typeof ThrottleMode_last | typeof ThrottleMode_interval;
/**
 * @category TypeClass
 */
interface Throttle<C extends ObservableLike> extends Container<C> {
    /**
     * Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.
     *
     * @param duration Function function that is used to determine the silence duration in between emitted values.
     * @param mode The throttle mode.
     *
     * @category Operator
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
     *
     * @category Operator
     */
    throttle<T>(duration: number, options?: {
        readonly mode?: ThrottleMode;
    }): ContainerOperator<C, T, T>;
}
/**
 * @category TypeClass
 */
interface Timeout<C extends ObservableLike> extends Container<C> {
    /**
     * Returns an `ObservableLike` that completes with an error if the source
     * does not emit a value in given time span.
     *
     * @param duration Time in ms within which the source must emit values.
     *
     * @category Operator
     */
    timeout<T>(duration: number): ContainerOperator<C, T, T>;
    /**
     *
     * @param duration
     *
     * @category Operator
     */
    timeout<T>(duration: C): ContainerOperator<C, T, T>;
}
/**
 * @category TypeClass
 */
interface ToObservable<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Converter
     */
    toObservable: <T>(options?: O) => Function1<ContainerOf<C, T>, ObservableLike<T>>;
}
/**
 * @category TypeClass
 */
interface ToRunnableObservable<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Converter
     */
    toRunnableObservable: <T>(options?: O) => Function1<ContainerOf<C, T>, RunnableObservableLike<T>>;
}
/**
 * @category TypeClass
 */
interface ToEnumerableObservable<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Converter
     */
    toEnumerableObservable: <T>(options?: O) => Function1<ContainerOf<C, T>, EnumerableObservableLike<T>>;
}
/**
 * @category TypeClass
 */
interface ToRunnable<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Converter
     */
    toRunnable<T>(options?: O): Function1<ContainerOf<C, T>, RunnableLike<T>>;
}
/**
 * @category TypeClass
 */
interface WithLatestFrom<C extends ObservableLike> extends Container<C> {
    /**
     * @category Operator
     */
    withLatestFrom<TA, TB, T>(other: ContainerOf<C, TB>, selector: Function2<TA, TB, T>): ContainerOperator<C, TA, T>;
}
/**
 * @category TypeClass
 */
interface ZipLatest<C extends ObservableLike> extends Container<C> {
    /**
     * @category Operator
     */
    zipLatest: Zip<C>["zip"];
}
/**
 * @category TypeClass
 */
interface ZipWithLatestFrom<C extends ObservableLike> extends Container<C> {
    /**
     * @category Operator
     */
    zipWithLatestFrom<TA, TB, T>(other: ContainerOf<C, TB>, selector: Function2<TA, TB, T>): ContainerOperator<C, TA, T>;
}
export { AsyncReducer, EnumerableObservableLike, FromEnumerableObservable, FromRunnableObservable, MulticastObservableLike, MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObserverLike, ObserverLike_dispatcher, ObserverLike_scheduler, ReactiveContainerLike, ReactiveContainerLike_sinkInto, Retry, RunnableLike, RunnableObservableLike, ScanAsync, SinkLike, SinkLike_notify, SubjectLike, SubjectLike_publish, TakeUntil, Throttle, ThrottleMode, ThrottleMode_first, ThrottleMode_interval, ThrottleMode_last, Timeout, ToEnumerableObservable, ToObservable, ToRunnable, ToRunnableObservable, WithLatestFrom, ZipLatest, ZipWithLatestFrom };
