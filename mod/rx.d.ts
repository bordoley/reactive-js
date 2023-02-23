import { Container, ContainerLike, ContainerLike_T, ContainerLike_type, ContainerOf, ContainerOperator, StatefulContainerLike, StatefulContainerLike_state, StatefulContainerLike_variance } from "./containers.js";
import { Factory, Function1, Function2 } from "./functions.js";
import { DispatcherLike, SchedulerLike } from "./scheduling.js";
import { DisposableLike } from "./util.js";
/** @ignore */
export declare const SinkLike_notify: unique symbol;
/**
 * @noInheritDoc
 * @category Container
 */
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
export declare const ObserverLike_dispatcher: unique symbol;
/** @ignore */
export declare const ObserverLike_scheduler: unique symbol;
/**
 * @noInheritDoc
 */
export interface ObserverLike<T = unknown> extends SinkLike<T> {
    readonly [ObserverLike_dispatcher]: DispatcherLike<T>;
    readonly [ObserverLike_scheduler]: SchedulerLike;
}
/** @ignore */
export declare const ReactiveContainerLike_sinkInto: unique symbol;
/**
 * @noInheritDoc
 * @category Container
 */
export interface ReactiveContainerLike<TSink extends DisposableLike> extends StatefulContainerLike {
    readonly [StatefulContainerLike_variance]?: "reactive";
    [ReactiveContainerLike_sinkInto](sink: TSink): void;
}
/**
 * @noInheritDoc
 * @category Container
 */
export interface RunnableLike<T = unknown> extends ReactiveContainerLike<SinkLike<T>> {
    readonly [ContainerLike_type]?: RunnableLike<this[typeof ContainerLike_T]>;
    readonly [StatefulContainerLike_state]?: SinkLike<this[typeof ContainerLike_T]>;
}
/**  @ignore */
export declare const ObservableLike_isEnumerable: unique symbol;
/**  @ignore */
export declare const ObservableLike_isRunnable: unique symbol;
/**
 * The source of notifications which notifies a `ObserverLike` instance.
 *
 * @noInheritDoc
 * @category Container
 */
export interface ObservableLike<T = unknown> extends ReactiveContainerLike<ObserverLike<T>> {
    readonly [StatefulContainerLike_state]?: ObserverLike<this[typeof ContainerLike_T]>;
    readonly [ContainerLike_type]?: ObservableLike<this[typeof ContainerLike_T]>;
    readonly [ObservableLike_isEnumerable]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;
}
/**
 * @noInheritDoc
 * @category Container
 */
export interface RunnableObservableLike<T = unknown> extends ObservableLike<T> {
    readonly [ContainerLike_type]?: RunnableObservableLike<this[typeof ContainerLike_T]>;
    readonly [ObservableLike_isRunnable]: true;
}
/**
 * @noInheritDoc
 * @category Container
 */
export interface EnumerableObservableLike<T = unknown> extends RunnableObservableLike<T> {
    readonly [ContainerLike_type]?: EnumerableObservableLike<this[typeof ContainerLike_T]>;
    readonly [ObservableLike_isEnumerable]: true;
}
/** @ignore */
export declare const MulticastObservableLike_observerCount: unique symbol;
/** @ignore */
export declare const MulticastObservableLike_replay: unique symbol;
/**
 * @noInheritDoc
 * @category Container
 */
export interface MulticastObservableLike<T = unknown> extends ObservableLike<T>, DisposableLike {
    /**
     * The number of observers currently observing.
     */
    readonly [MulticastObservableLike_observerCount]: number;
    readonly [MulticastObservableLike_replay]: number;
}
/** @ignore */
export declare const SubjectLike_publish: unique symbol;
/**
 * @noInheritDoc
 * @category Container
 */
export interface SubjectLike<T = unknown> extends MulticastObservableLike<T> {
    [SubjectLike_publish](next: T): void;
}
export type AsyncReducer<C extends ObservableLike, T, TAcc> = Function2<TAcc, T, ContainerOf<C, TAcc>>;
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface CombineLatest<C extends ObservableLike> extends Container<C> {
    /**
     * @category Constructor
     */
    combineLatest<TA, TB>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>): ContainerOf<C, readonly [TA, TB]>;
    combineLatest<TA, TB, TC>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>): ContainerOf<C, readonly [TA, TB, TC]>;
    combineLatest<TA, TB, TC, TD>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>): ContainerOf<C, readonly [TA, TB, TC, TD]>;
    combineLatest<TA, TB, TC, TD, TE>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>): ContainerOf<C, readonly [TA, TB, TC, TD, TE]>;
    combineLatest<TA, TB, TC, TD, TE, TF>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF]>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF, TG]>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>, h: ContainerOf<C, TH>): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>, h: ContainerOf<C, TH>, i: ContainerOf<C, TI>): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Exhaust<C extends ObservableLike, O = never> extends Container<C> {
    /**
     *
     * @category Operator
     */
    exhaust: <T>(options?: O) => ContainerOperator<C, ContainerOf<C, T>, T>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ExhaustMap<C extends ObservableLike, O = never> extends Container<C> {
    /**
     * @category Operator
     */
    exhaustMap: <TA, TB>(mapper: Function1<TA, ContainerOf<C, TB>>, options?: O) => ContainerOperator<C, TA, TB>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ForkCombineLatest<C extends ObservableLike> extends Container<C> {
    /**
     * @category Operator
     */
    forkCombineLatest<T, TA, TB>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>): ContainerOperator<C, T, readonly [TA, TB]>;
    forkCombineLatest<T, TA, TB, TC>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>): ContainerOperator<C, T, readonly [TA, TB, TC]>;
    forkCombineLatest<T, TA, TB, TC, TD>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>): ContainerOperator<C, T, readonly [TA, TB, TC, TD]>;
    forkCombineLatest<T, TA, TB, TC, TD, TE>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE]>;
    forkCombineLatest<T, TA, TB, TC, TD, TE, TF>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>, f: ContainerOperator<C, T, TF>): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF]>;
    forkCombineLatest<T, TA, TB, TC, TD, TE, TF, TG>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>, f: ContainerOperator<C, T, TF>, g: ContainerOperator<C, T, TG>): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG]>;
    forkCombineLatest<T, TA, TB, TC, TD, TE, TF, TG, TH>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>, f: ContainerOperator<C, T, TF>, g: ContainerOperator<C, T, TG>, h: ContainerOperator<C, T, TH>): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    forkCombineLatest<T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>, f: ContainerOperator<C, T, TF>, g: ContainerOperator<C, T, TG>, h: ContainerOperator<C, T, TH>, i: ContainerOperator<C, T, TI>): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ForkMerge<C extends ObservableLike> extends Container<C> {
    /**
     * @category Operator
     */
    forkMerge<TIn, TOut>(fst: ContainerOperator<C, TIn, TOut>, snd: ContainerOperator<C, TIn, TOut>, ...tail: readonly ContainerOperator<C, TIn, TOut>[]): ContainerOperator<C, TIn, TOut>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ForkZipLatest<C extends ObservableLike> extends Container<C> {
    /**
     * @category Operator
     */
    forkZipLatest<T, TA, TB>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>): ContainerOperator<C, T, readonly [TA, TB]>;
    forkZipLatest<T, TA, TB, TC>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>): ContainerOperator<C, T, readonly [TA, TB, TC]>;
    forkZipLatest<T, TA, TB, TC, TD>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>): ContainerOperator<C, T, readonly [TA, TB, TC, TD]>;
    forkZipLatest<T, TA, TB, TC, TD, TE>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE]>;
    forkZipLatest<T, TA, TB, TC, TD, TE, TF>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>, f: ContainerOperator<C, T, TF>): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF]>;
    forkZipLatest<T, TA, TB, TC, TD, TE, TF, TG>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>, f: ContainerOperator<C, T, TF>, g: ContainerOperator<C, T, TG>): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG]>;
    forkZipLatest<T, TA, TB, TC, TD, TE, TF, TG, TH>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>, f: ContainerOperator<C, T, TF>, g: ContainerOperator<C, T, TG>, h: ContainerOperator<C, T, TH>): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    forkZipLatest<T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>, f: ContainerOperator<C, T, TF>, g: ContainerOperator<C, T, TG>, h: ContainerOperator<C, T, TH>, i: ContainerOperator<C, T, TI>): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface FromEnumerableObservable<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Constructor
     */
    fromEnumerableObservable: <T>(options?: O) => Function1<EnumerableObservableLike<T>, ContainerOf<C, T>>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface FromRunnableObservable<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Constructor
     */
    fromRunnableObservable: <T>(options?: O) => Function1<RunnableObservableLike<T>, ContainerOf<C, T>>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Merge<C extends ObservableLike> extends Container<C> {
    /**
     *
     * @category Constructor
     */
    merge<T>(fst: ContainerOf<C, T>, snd: ContainerOf<C, T>, ...tail: readonly ContainerOf<C, T>[]): ContainerOf<C, T>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface MergeAll<C extends ObservableLike, O = never> extends Container<C> {
    /**
     *
     * @category Operator
     */
    mergeAll: <T>(options?: O) => ContainerOperator<C, ContainerOf<C, T>, T>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface MergeMap<C extends ObservableLike, O = never> extends Container<C> {
    /**
     * @category Operator
     */
    mergeMap: <TA, TB>(mapper: Function1<TA, ContainerOf<C, TB>>, options?: O) => ContainerOperator<C, TA, TB>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface MergeWith<C extends ObservableLike> extends Container<C> {
    /**
     * @category Operator
     */
    mergeWith: <T>(snd: ContainerOf<C, T>, ...tail: readonly ContainerOf<C, T>[]) => ContainerOperator<C, T, T>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Retry<C extends ObservableLike> extends Container<C> {
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
 * @noInheritDoc
 * @category TypeClass
 */
export interface ScanAsync<C extends ContainerLike, CInner extends ObservableLike> extends Container<C> {
    /**
     * @category Operator
     */
    scanAsync: <T, TAcc>(scanner: AsyncReducer<CInner, T, TAcc>, initialValue: Factory<TAcc>) => ContainerOperator<C, T, TAcc>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface SwitchAll<C extends ObservableLike, O = never> extends Container<C> {
    /**
     *
     * @category Operator
     */
    switchAll: <T>(options?: O) => ContainerOperator<C, ContainerOf<C, T>, T>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface SwitchMap<C extends ObservableLike, O = never> extends Container<C> {
    /**
     * @category Operator
     */
    switchMap: <TA, TB>(mapper: Function1<TA, ContainerOf<C, TB>>, options?: O) => ContainerOperator<C, TA, TB>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface TakeUntil<C extends ObservableLike> extends Container<C> {
    /**
     * @category Operator
     */
    takeUntil<T>(notifier: C): ContainerOperator<C, T, T>;
}
export declare const ThrottleMode_first: unique symbol;
export declare const ThrottleMode_last: unique symbol;
export declare const ThrottleMode_interval: unique symbol;
export type ThrottleMode = typeof ThrottleMode_first | typeof ThrottleMode_last | typeof ThrottleMode_interval;
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Throttle<C extends ObservableLike> extends Container<C> {
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
 * @noInheritDoc
 * @category TypeClass
 */
export interface Timeout<C extends ObservableLike> extends Container<C> {
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
 * @noInheritDoc
 * @category TypeClass
 */
export interface ToObservable<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Converter
     */
    toObservable: <T>(options?: O) => Function1<ContainerOf<C, T>, ObservableLike<T>>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ToRunnableObservable<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Converter
     */
    toRunnableObservable: <T>(options?: O) => Function1<ContainerOf<C, T>, RunnableObservableLike<T>>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ToEnumerableObservable<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Converter
     */
    toEnumerableObservable: <T>(options?: O) => Function1<ContainerOf<C, T>, EnumerableObservableLike<T>>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ToRunnable<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Converter
     */
    toRunnable<T>(options?: O): Function1<ContainerOf<C, T>, RunnableLike<T>>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface WithLatestFrom<C extends ObservableLike> extends Container<C> {
    /**
     * @category Operator
     */
    withLatestFrom<TA, TB, T>(other: ContainerOf<C, TB>, selector: Function2<TA, TB, T>): ContainerOperator<C, TA, T>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ZipLatest<C extends ObservableLike> extends Container<C> {
    /**
     * Returns a container that zips the latest values from
     * multiple sources.
     *
     * @category Constructor
     */
    zipLatest<TA, TB>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>): ContainerOf<C, readonly [TA, TB]>;
    zipLatest<TA, TB, TC>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>): ContainerOf<C, readonly [TA, TB, TC]>;
    zipLatest<TA, TB, TC, TD>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>): ContainerOf<C, readonly [TA, TB, TC, TD]>;
    zipLatest<TA, TB, TC, TD, TE>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>): ContainerOf<C, readonly [TA, TB, TC, TD, TE]>;
    zipLatest<TA, TB, TC, TD, TE, TF>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF]>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>, h: ContainerOf<C, TH>): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>, h: ContainerOf<C, TH>, i: ContainerOf<C, TI>): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ZipWithLatestFrom<C extends ObservableLike> extends Container<C> {
    /**
     * @category Operator
     */
    zipWithLatestFrom<TA, TB, T>(other: ContainerOf<C, TB>, selector: Function2<TA, TB, T>): ContainerOperator<C, TA, T>;
}
