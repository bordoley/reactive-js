import { Computation, Computation_T, Computation_type, PureComputationModule } from "../computations.js";
import { DeferredObservableLike, MulticastObservableLike, ObservableLike, ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObserverLike, RunnableLike, RunnableWithSideEffectsLike, SchedulerLike } from "../concurrent.js";
import { Equality, Factory, Function1, Function2, Optional, Predicate, Reducer, SideEffect, SideEffect1, Tuple2 } from "../functions.js";
import { DispatcherLike } from "../rx.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy } from "../utils.js";
export type PureObservableOperator<TIn, TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: TObservableIn) => TObservableIn extends RunnableLike<TIn> ? RunnableLike<TOut> : TObservableIn extends RunnableWithSideEffectsLike<TIn> ? RunnableWithSideEffectsLike<TOut> : TObservableIn extends DeferredObservableLike<TIn> ? DeferredObservableLike<TOut> : TObservableIn extends MulticastObservableLike<TIn> ? MulticastObservableLike<TOut> : ObservableLike<TOut>;
export type ObservableOperatorWithSideEffects<TIn, TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: TObservableIn) => TObservableIn extends RunnableLike<TIn> | RunnableWithSideEffectsLike<TIn> ? RunnableWithSideEffectsLike<TOut> : TObservableIn extends DeferredObservableLike<TIn> | MulticastObservableLike<TIn> ? DeferredObservableLike<TOut> : ObservableLike<TOut>;
export type DeferredObservableOperator<TIn, TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: TObservableIn) => DeferredObservableLike<TOut>;
export interface ObservableComputation extends Computation {
    readonly [Computation_type]?: ObservableLike<this[typeof Computation_T]>;
}
export type Type = ObservableComputation;
/**
 * @noInheritDoc
 * @category Module
 */
export interface ObservableModule extends PureComputationModule<ObservableComputation> {
    backpressureStrategy<T>(capacity: number, backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy]): PureObservableOperator<T, T>;
    buffer<T>(options?: {
        count?: number;
    }): PureObservableOperator<T, readonly T[]>;
    create<T>(f: SideEffect1<ObserverLike<T>>): DeferredObservableLike<T>;
    decodeWithCharset(options?: {
        readonly charset?: string;
    }): PureObservableOperator<ArrayBuffer, string>;
    dispatchTo<T>(dispatcher: DispatcherLike<T>): ObservableOperatorWithSideEffects<T, T>;
    distinctUntilChanged<T>(options?: {
        readonly equality?: Equality<T>;
    }): PureObservableOperator<T, T>;
    empty<T>(): RunnableLike<T>;
    encodeUtf8(): PureObservableOperator<string, Uint8Array>;
    enqueue<T>(queue: QueueableLike<T>): ObservableOperatorWithSideEffects<T, T>;
    forEach<T>(effect: SideEffect1<T>): ObservableOperatorWithSideEffects<T, T>;
    fromIterable<T>(options?: {
        delay: number;
        delayStart?: boolean;
    }): Function1<Iterable<T>, DeferredObservableLike<T>>;
    ignoreElements<T>(): PureObservableOperator<unknown, T>;
    isPure<T>(obs: ObservableLike<T>): obs is ObservableLike<T> & {
        [ObservableLike_isPure]: true;
    };
    isRunnable<T>(obs: ObservableLike<T>): obs is ObservableLike<T> & {
        [ObservableLike_isDeferred]: true;
        [ObservableLike_isRunnable]: true;
    };
    keep<T>(predicate: Predicate<T>): PureObservableOperator<T, T>;
    map<TA, TB>(selector: Function1<TA, TB>): PureObservableOperator<TA, TB>;
    onSubscribe<T>(f: Factory<DisposableLike>): ObservableOperatorWithSideEffects<T, T>;
    onSubscribe<T>(f: Factory<SideEffect1<Optional<Error>>>): ObservableOperatorWithSideEffects<T, T>;
    onSubscribe<T>(f: SideEffect): ObservableOperatorWithSideEffects<T, T>;
    pairwise<T>(): PureObservableOperator<T, Tuple2<T, T>>;
    reduce<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): Function1<RunnableLike<T> | RunnableWithSideEffectsLike<T>, TAcc>;
    run<T>(options?: {
        readonly backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): SideEffect1<RunnableLike<T> | RunnableWithSideEffectsLike<T>>;
    scan<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): PureObservableOperator<T, TAcc>;
    skipFirst<T>(options?: {
        readonly count?: number;
    }): PureObservableOperator<T, T>;
    subscribe<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<ObservableLike<T>, DisposableLike>;
    takeFirst<T>(options?: {
        readonly count?: number;
    }): PureObservableOperator<T, T>;
    takeLast<T>(options?: {
        readonly count?: number;
    }): PureObservableOperator<T, T>;
    takeWhile<T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): PureObservableOperator<T, T>;
    throttle<T>(duration: number, options?: {
        readonly mode?: "first" | "last" | "interval";
    }): ObservableOperatorWithSideEffects<T, T>;
    throwIfEmpty<T>(factory: Factory<unknown>, options?: undefined): PureObservableOperator<T, T>;
    withCurrentTime<TA, TB>(selector: Function2<number, TA, TB>): PureObservableOperator<TA, TB>;
    withLatestFrom<TA, TB, T>(other: RunnableLike<TB>, selector: Function2<TA, TB, T>): PureObservableOperator<TA, T>;
    withLatestFrom<TA, TB, T>(other: RunnableWithSideEffectsLike<TB>, selector: Function2<TA, TB, T>): ObservableOperatorWithSideEffects<TA, T>;
    withLatestFrom<TA, TB, T>(other: DeferredObservableLike<TB>, selector: Function2<TA, TB, T>): DeferredObservableOperator<TA, T>;
    withLatestFrom<TA, TB, T>(other: MulticastObservableLike<TB>, selector: Function2<TA, TB, T>): Function1<ObservableLike<TA>, MulticastObservableLike<T>>;
}
export type Signature = ObservableModule;
export declare const backpressureStrategy: Signature["backpressureStrategy"];
export declare const buffer: Signature["buffer"];
export declare const create: Signature["create"];
export declare const decodeWithCharset: Signature["decodeWithCharset"];
export declare const dispatchTo: Signature["dispatchTo"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const empty: Signature["empty"];
export declare const encodeUtf8: Signature["encodeUtf8"];
export declare const enqueue: Signature["enqueue"];
export declare const forEach: Signature["forEach"];
export declare const fromIterable: Signature["fromIterable"];
export declare const ignoreElements: Signature["ignoreElements"];
export declare const isPure: Signature["isPure"];
export declare const isRunnable: Signature["isRunnable"];
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
export declare const onSubscribe: Signature["onSubscribe"];
export declare const pairwise: Signature["pairwise"];
export declare const reduce: Signature["reduce"];
export declare const run: Signature["run"];
export declare const scan: Signature["scan"];
export declare const skipFirst: Signature["skipFirst"];
export declare const subscribe: Signature["subscribe"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeLast: Signature["takeLast"];
export declare const takeWhile: Signature["takeWhile"];
export declare const throttle: Signature["throttle"];
export declare const throwIfEmpty: Signature["throwIfEmpty"];
export declare const withCurrentTime: Signature["withCurrentTime"];
export declare const withLatestFrom: Signature["withLatestFrom"];
