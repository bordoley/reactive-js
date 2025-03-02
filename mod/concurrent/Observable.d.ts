import { Computation, ComputationLike_isSynchronous, ComputationOf, ComputationWithSideEffectsLike, ComputationWithSideEffectsOf, Computation_T, Computation_ofT, Computation_pureOfT, Computation_withSideEffectsOfT, DeferredComputationWithSideEffectsType, IterableLike, PureComputationLike, PureComputationOf, PureDeferredComputationType, PureIterableLike, PureSynchronousComputationType, RunnableLike, SynchronousComputationWithSideEffectsType } from "../computations.js";
import { DeferredObservableLike, DeferredObservableWithSideEffectsLike, DispatcherLike, MulticastObservableLike, ObservableLike, ObserverLike, PureDeferredObservableLike, PureObservableLike, PureSynchronousObservableLike, SchedulerLike, SynchronousObservableLike, SynchronousObservableWithSideEffectsLike } from "../concurrent.js";
import { EventListenerLike, EventSourceLike, StoreLike } from "../events.js";
import { Equality, Factory, Function1, Function2, Optional, Predicate, Reducer, SideEffect, SideEffect1, Tuple2, Tuple3, Tuple4, Tuple5, Tuple6, Tuple7, Tuple8, Tuple9, Updater } from "../functions.js";
import { BackpressureStrategy, DisposableLike, QueueableLike } from "../utils.js";
export type ObservableOperator<TIn, out TOut, TObservableInBase extends ObservableLike<TIn> = ObservableLike<TIn>> = <TObservableIn extends TObservableInBase>(observable: TObservableIn) => ObservableComputationOf<TObservableIn, TOut>;
export type ObservableOperatorWithSideEffects<TIn, out TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: TObservableIn) => ObservableComputationOf<TObservableIn extends DeferredObservableLike ? DeferredObservableWithSideEffectsLike & Pick<TObservableIn, typeof ComputationLike_isSynchronous> : DeferredObservableWithSideEffectsLike, TOut>;
export type DeferredReactiveObservableOperator<TIn, out TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: TObservableIn) => ObservableComputationOf<TObservableIn extends DeferredObservableLike ? TObservableIn : TObservableIn extends PureObservableLike ? PureDeferredObservableLike : DeferredObservableWithSideEffectsLike, TOut>;
export type DeferringObservableOperator<TIn, out TOut> = <TObservableIn extends ObservableLike<TIn>>(obs: TObservableIn) => TObservableIn extends PureObservableLike<TIn> ? PureDeferredObservableLike<TOut> : DeferredObservableWithSideEffectsLike<TOut>;
export type ObservableComputationFor<Type extends ObservableLike> = Type extends MulticastObservableLike ? MulticastObservableComputation : Type extends SynchronousObservableLike ? SynchronousObservableComputation : Type extends DeferredObservableLike ? DeferredObservableComputation : ObservableComputation;
export type ObservableComputationOf<Type extends ObservableLike, T> = Type extends PureComputationLike ? PureComputationOf<ObservableComputationFor<Type>, T> : Type extends ComputationWithSideEffectsLike ? ComputationWithSideEffectsOf<ObservableComputationFor<Type>, T> : ComputationOf<ObservableComputationFor<Type>, T>;
interface SynchronousObservableComputation extends Computation {
    readonly [Computation_ofT]?: SynchronousObservableLike<this[typeof Computation_T]>;
    readonly [Computation_pureOfT]?: PureSynchronousObservableLike<this[typeof Computation_T]>;
    readonly [Computation_withSideEffectsOfT]?: SynchronousObservableWithSideEffectsLike<this[typeof Computation_T]>;
}
interface DeferredObservableComputation extends Computation {
    readonly [Computation_ofT]?: DeferredObservableLike<this[typeof Computation_T]>;
    readonly [Computation_pureOfT]?: PureDeferredObservableLike<this[typeof Computation_T]>;
    readonly [Computation_withSideEffectsOfT]?: DeferredObservableWithSideEffectsLike<this[typeof Computation_T]>;
}
interface MulticastObservableComputation extends Computation {
    readonly [Computation_ofT]?: MulticastObservableLike<this[typeof Computation_T]>;
    readonly [Computation_pureOfT]?: MulticastObservableLike<this[typeof Computation_T]>;
    readonly [Computation_withSideEffectsOfT]?: never;
}
interface ObservableComputation extends Computation {
    readonly [Computation_ofT]?: ObservableLike<this[typeof Computation_T]>;
}
export declare const BatchedComputeMode = "batched";
export declare const CombineLatestComputeMode = "combine-latest";
export type ComputeMode = typeof BatchedComputeMode | typeof CombineLatestComputeMode;
export declare const ThrottleFirstMode = "first";
export declare const ThrottleLastMode = "last";
export declare const ThrottleIntervalMode = "interval";
export type ThrottleMode = typeof ThrottleFirstMode | typeof ThrottleLastMode | typeof ThrottleIntervalMode;
/**
 * @noInheritDoc
 */
export interface ObservableModule {
    backpressureStrategy<T>(capacity: number, backpressureStrategy: BackpressureStrategy): DeferredReactiveObservableOperator<T, T>;
    buffer<T>(options?: {
        readonly count?: number;
    }): DeferredReactiveObservableOperator<T, readonly T[]>;
    catchError<T>(onError: SideEffect1<Error>): DeferredReactiveObservableOperator<T, T>;
    combineLatest<TA, TB>(a: PureSynchronousObservableLike<TA>, b: PureSynchronousObservableLike<TB>): PureSynchronousObservableLike<Tuple2<TA, TB>>;
    combineLatest<TA, TB, TC>(a: PureSynchronousObservableLike<TA>, b: PureSynchronousObservableLike<TB>, c: PureSynchronousObservableLike<TC>): PureSynchronousObservableLike<Tuple3<TA, TB, TC>>;
    combineLatest<TA, TB, TC, TD>(a: PureSynchronousObservableLike<TA>, b: PureSynchronousObservableLike<TB>, c: PureSynchronousObservableLike<TC>, d: PureSynchronousObservableLike<TD>): PureSynchronousObservableLike<Tuple4<TA, TB, TC, TD>>;
    combineLatest<TA, TB, TC, TD, TE>(a: PureSynchronousObservableLike<TA>, b: PureSynchronousObservableLike<TB>, c: PureSynchronousObservableLike<TC>, d: PureSynchronousObservableLike<TD>, e: PureSynchronousObservableLike<TE>): PureSynchronousObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
    combineLatest<TA, TB, TC, TD, TE, TF>(a: PureSynchronousObservableLike<TA>, b: PureSynchronousObservableLike<TB>, c: PureSynchronousObservableLike<TC>, d: PureSynchronousObservableLike<TD>, e: PureSynchronousObservableLike<TE>, f: PureSynchronousObservableLike<TF>): PureSynchronousObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG>(a: PureSynchronousObservableLike<TA>, b: PureSynchronousObservableLike<TB>, c: PureSynchronousObservableLike<TC>, d: PureSynchronousObservableLike<TD>, e: PureSynchronousObservableLike<TE>, f: PureSynchronousObservableLike<TF>, g: PureSynchronousObservableLike<TG>): PureSynchronousObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: PureSynchronousObservableLike<TA>, b: PureSynchronousObservableLike<TB>, c: PureSynchronousObservableLike<TC>, d: PureSynchronousObservableLike<TD>, e: PureSynchronousObservableLike<TE>, f: PureSynchronousObservableLike<TF>, g: PureSynchronousObservableLike<TG>, h: PureSynchronousObservableLike<TH>): PureSynchronousObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: PureSynchronousObservableLike<TA>, b: PureSynchronousObservableLike<TB>, c: PureSynchronousObservableLike<TC>, d: PureSynchronousObservableLike<TD>, e: PureSynchronousObservableLike<TE>, f: PureSynchronousObservableLike<TF>, g: PureSynchronousObservableLike<TG>, h: PureSynchronousObservableLike<TH>, i: PureSynchronousObservableLike<TI>): PureSynchronousObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    combineLatest<TA, TB>(a: SynchronousObservableLike<TA>, b: SynchronousObservableLike<TB>): SynchronousObservableWithSideEffectsLike<Tuple2<TA, TB>>;
    combineLatest<TA, TB, TC>(a: SynchronousObservableLike<TA>, b: SynchronousObservableLike<TB>, c: SynchronousObservableLike<TC>): SynchronousObservableWithSideEffectsLike<Tuple3<TA, TB, TC>>;
    combineLatest<TA, TB, TC, TD>(a: SynchronousObservableLike<TA>, b: SynchronousObservableLike<TB>, c: SynchronousObservableLike<TC>, d: SynchronousObservableLike<TD>): SynchronousObservableWithSideEffectsLike<Tuple4<TA, TB, TC, TD>>;
    combineLatest<TA, TB, TC, TD, TE>(a: SynchronousObservableLike<TA>, b: SynchronousObservableLike<TB>, c: SynchronousObservableLike<TC>, d: SynchronousObservableLike<TD>, e: SynchronousObservableLike<TE>): SynchronousObservableWithSideEffectsLike<Tuple5<TA, TB, TC, TD, TE>>;
    combineLatest<TA, TB, TC, TD, TE, TF>(a: SynchronousObservableLike<TA>, b: SynchronousObservableLike<TB>, c: SynchronousObservableLike<TC>, d: SynchronousObservableLike<TD>, e: SynchronousObservableLike<TE>, f: SynchronousObservableLike<TF>): SynchronousObservableWithSideEffectsLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG>(a: SynchronousObservableLike<TA>, b: SynchronousObservableLike<TB>, c: SynchronousObservableLike<TC>, d: SynchronousObservableLike<TD>, e: SynchronousObservableLike<TE>, f: SynchronousObservableLike<TF>, g: SynchronousObservableLike<TG>): SynchronousObservableWithSideEffectsLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: SynchronousObservableLike<TA>, b: SynchronousObservableLike<TB>, c: SynchronousObservableLike<TC>, d: SynchronousObservableLike<TD>, e: SynchronousObservableLike<TE>, f: SynchronousObservableLike<TF>, g: SynchronousObservableLike<TG>, h: SynchronousObservableLike<TH>): SynchronousObservableWithSideEffectsLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: SynchronousObservableLike<TA>, b: SynchronousObservableLike<TB>, c: SynchronousObservableLike<TC>, d: SynchronousObservableLike<TD>, e: SynchronousObservableLike<TE>, f: SynchronousObservableLike<TF>, g: SynchronousObservableLike<TG>, h: SynchronousObservableLike<TH>, i: SynchronousObservableLike<TI>): SynchronousObservableWithSideEffectsLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    combineLatest<TA, TB>(a: PureObservableLike<TA>, b: PureObservableLike<TB>): PureDeferredObservableLike<Tuple2<TA, TB>>;
    combineLatest<TA, TB, TC>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>): PureDeferredObservableLike<Tuple3<TA, TB, TC>>;
    combineLatest<TA, TB, TC, TD>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>): PureDeferredObservableLike<Tuple4<TA, TB, TC, TD>>;
    combineLatest<TA, TB, TC, TD, TE>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>): PureDeferredObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
    combineLatest<TA, TB, TC, TD, TE, TF>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>): PureDeferredObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>): PureDeferredObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>, h: PureObservableLike<TH>): PureDeferredObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>, h: PureObservableLike<TH>, i: PureObservableLike<TI>): PureDeferredObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    combineLatest<TA, TB>(a: ObservableLike<TA>, b: ObservableLike<TB>): DeferredObservableWithSideEffectsLike<Tuple2<TA, TB>>;
    combineLatest<TA, TB, TC>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>): DeferredObservableWithSideEffectsLike<Tuple3<TA, TB, TC>>;
    combineLatest<TA, TB, TC, TD>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>): DeferredObservableWithSideEffectsLike<Tuple4<TA, TB, TC, TD>>;
    combineLatest<TA, TB, TC, TD, TE>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>): DeferredObservableWithSideEffectsLike<Tuple5<TA, TB, TC, TD, TE>>;
    combineLatest<TA, TB, TC, TD, TE, TF>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>): DeferredObservableWithSideEffectsLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>): DeferredObservableWithSideEffectsLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>, h: ObservableLike<TH>): DeferredObservableWithSideEffectsLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>, h: ObservableLike<TH>, i: ObservableLike<TI>): DeferredObservableWithSideEffectsLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    computeDeferred<T>(computation: Factory<T>, options?: {
        readonly mode?: ComputeMode;
    }): DeferredObservableWithSideEffectsLike<T>;
    computeSynchronousObservable<T>(computation: Factory<T>, options?: {
        readonly mode?: ComputeMode;
    }): SynchronousObservableWithSideEffectsLike<T>;
    concatAll<T>(): DeferredReactiveObservableOperator<PureSynchronousObservableLike<T>, T>;
    concatAll<T>(options: {
        readonly innerType: typeof PureSynchronousComputationType;
    }): DeferredReactiveObservableOperator<PureSynchronousObservableLike<T>, T>;
    concatAll<T>(options: {
        readonly innerType: typeof SynchronousComputationWithSideEffectsType;
    }): ObservableOperatorWithSideEffects<SynchronousObservableLike<T>, T>;
    concatAll<T>(options: {
        readonly innerType: typeof PureDeferredComputationType;
    }): DeferringObservableOperator<PureDeferredObservableLike<T>, T>;
    concatAll<T>(options: {
        readonly innerType: typeof DeferredComputationWithSideEffectsType;
    }): Function1<ObservableLike<DeferredObservableLike<T>>, DeferredObservableWithSideEffectsLike<T>>;
    concatMany<T>(observables: readonly PureSynchronousObservableLike<T>[]): PureSynchronousObservableLike<T>;
    concatMany<T>(observables: readonly PureDeferredObservableLike<T>[]): PureDeferredObservableLike<T>;
    concatMany<T>(observables: readonly SynchronousObservableLike<T>[]): SynchronousObservableWithSideEffectsLike<T>;
    concatMany<T>(observables: readonly DeferredObservableLike<T>[]): DeferredObservableWithSideEffectsLike<T>;
    concatMany<T>(observables: readonly [
        MulticastObservableLike<T>,
        ...(readonly PureDeferredObservableLike<T>[])
    ]): PureDeferredObservableLike<T>;
    concatMany<T>(observables: readonly [
        MulticastObservableLike<T>,
        ...(readonly DeferredObservableLike<T>[])
    ]): DeferredObservableWithSideEffectsLike<T>;
    create<T>(f: SideEffect1<ObserverLike<T>>): DeferredObservableWithSideEffectsLike<T>;
    currentTime: PureSynchronousObservableLike<number>;
    debug<T>(): ObservableOperatorWithSideEffects<T, T>;
    decodeWithCharset(options?: {
        readonly charset?: string;
        readonly fatal?: boolean;
        readonly ignoreBOM?: boolean;
    }): DeferredReactiveObservableOperator<ArrayBuffer, string>;
    defer<T>(f: Factory<MulticastObservableLike<T>>): PureDeferredObservableLike<T>;
    dispatchTo<T>(dispatcher: DispatcherLike<T>): ObservableOperatorWithSideEffects<T, T>;
    distinctUntilChanged<T>(options?: {
        readonly equality?: Equality<T>;
    }): DeferredReactiveObservableOperator<T, T>;
    empty<T>(options?: {
        readonly delay: number;
    }): PureSynchronousObservableLike<T>;
    encodeUtf8(): DeferredReactiveObservableOperator<string, Uint8Array>;
    enqueue<T>(queue: QueueableLike<T>): ObservableOperatorWithSideEffects<T, T>;
    exhaust<T>(): DeferredReactiveObservableOperator<PureSynchronousObservableLike<T>, T>;
    exhaust<T>(options: {
        readonly innerType: typeof PureSynchronousComputationType;
    }): DeferredReactiveObservableOperator<PureSynchronousObservableLike<T>, T>;
    exhaust<T>(options: {
        readonly innerType: typeof SynchronousComputationWithSideEffectsType;
    }): ObservableOperatorWithSideEffects<SynchronousObservableLike<T>, T>;
    exhaust<T>(options: {
        readonly innerType: typeof PureDeferredComputationType;
    }): DeferringObservableOperator<SynchronousObservableLike<T>, T>;
    exhaust<T>(options: {
        readonly innerType: typeof DeferredComputationWithSideEffectsType;
    }): Function1<ObservableLike<DeferredObservableLike<T>>, DeferredObservableWithSideEffectsLike<T>>;
    exhaustMap<TA, TB>(selector: Function1<TA, PureSynchronousObservableLike<TB>>): DeferredReactiveObservableOperator<TA, TB>;
    exhaustMap<TA, TB>(selector: Function1<TA, PureSynchronousObservableLike<TB>>, options: {
        readonly innerType: typeof PureSynchronousComputationType;
    }): DeferredReactiveObservableOperator<TA, TB>;
    exhaustMap<TA, TB>(selector: Function1<TA, SynchronousObservableLike<TB>>, options: {
        readonly innerType: typeof SynchronousComputationWithSideEffectsType;
    }): ObservableOperatorWithSideEffects<TA, TB>;
    exhaustMap<TA, TB>(selector: Function1<TA, PureDeferredObservableLike<TB>>, options: {
        readonly innerType: typeof PureDeferredComputationType;
    }): DeferringObservableOperator<TA, TB>;
    exhaustMap<TA, TB>(selector: Function1<TA, DeferredObservableLike<TB>>, options: {
        readonly innerType: typeof DeferredComputationWithSideEffectsType;
    }): Function1<ObservableLike<TA>, DeferredObservableWithSideEffectsLike<TB>>;
    firstAsync<T>(scheduler: SchedulerLike, options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: BackpressureStrategy;
    }): Function1<ObservableLike<T>, Promise<Optional<T>>>;
    flatMapAsync<TA, TB>(f: Function2<TA, AbortSignal, Promise<TB>>): Function1<DeferredObservableLike<TA>, DeferredObservableWithSideEffectsLike<TB>>;
    flatMapIterable<TA, TB>(selector: Function1<TA, Iterable<TB>>): ObservableOperatorWithSideEffects<TA, TB>;
    forEach<T>(effect: SideEffect1<T>): ObservableOperatorWithSideEffects<T, T>;
    forkMerge<TIn, TOut>(fst: Function1<MulticastObservableLike<TIn>, MulticastObservableLike<TOut>>, snd: Function1<MulticastObservableLike<TIn>, MulticastObservableLike<TOut>>, ...tail: readonly Function1<MulticastObservableLike<TIn>, MulticastObservableLike<TOut>>[]): Function1<MulticastObservableLike<TIn>, MulticastObservableLike<TOut>>;
    forkMerge<TIn, TOut>(fst: Function1<MulticastObservableLike<TIn>, ObservableLike<TOut>>, snd: Function1<MulticastObservableLike<TIn>, ObservableLike<TOut>>, ...tail: readonly Function1<MulticastObservableLike<TIn>, ObservableLike<TOut>>[]): Function1<ObservableLike<TIn>, DeferredObservableWithSideEffectsLike<TOut>>;
    fromAsyncFactory<T>(): Function1<Function1<AbortSignal, Promise<T>>, DeferredObservableWithSideEffectsLike<T>>;
    fromAsyncIterable<T>(): Function1<AsyncIterable<T>, DeferredObservableWithSideEffectsLike<T>>;
    fromEventSource<T>(): Function1<EventSourceLike<T>, MulticastObservableLike<T>>;
    fromIterable<T>(options?: {
        readonly delay: number;
        readonly delayStart?: boolean;
    }): <TIterable extends IterableLike<T> = IterableLike<T>>(iterable: TIterable) => TIterable extends PureIterableLike ? PureComputationOf<ObservableComputationFor<SynchronousObservableLike>, T> : ComputationWithSideEffectsOf<ObservableComputationFor<SynchronousObservableLike>, T>;
    fromPromise<T>(): Function1<Promise<T>, MulticastObservableLike<T>>;
    fromReadonlyArray<T>(options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
        readonly count?: number;
        readonly start?: number;
    }): Function1<ReadonlyArray<T>, PureSynchronousObservableLike<T>>;
    fromStore<T>(): Function1<StoreLike<T>, MulticastObservableLike<T>>;
    fromValue<T>(options?: {
        readonly delay: number;
    }): Function1<T, PureSynchronousObservableLike<T>>;
    generate<T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
        readonly count?: number;
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): PureSynchronousObservableLike<T>;
    ignoreElements<T>(): ObservableOperator<unknown, T>;
    keep<T>(predicate: Predicate<T>): ObservableOperator<T, T>;
    keyFrame(duration: number, options?: {
        readonly easing?: Function1<number, number>;
    }): PureSynchronousObservableLike<number>;
    last<T>(options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly maxMicroTaskTicks?: number;
    }): Function1<SynchronousObservableLike<T>, Optional<T>>;
    lastAsync<T>(scheduler: SchedulerLike, options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: BackpressureStrategy;
    }): Function1<ObservableLike<T>, Promise<Optional<T>>>;
    log<T>(): ObservableOperatorWithSideEffects<T, T>;
    map<TA, TB>(selector: Function1<TA, TB>): ObservableOperator<TA, TB>;
    merge<T>(fst: PureSynchronousObservableLike<T>, snd: PureSynchronousObservableLike<T>, ...tail: readonly PureSynchronousObservableLike<T>[]): PureSynchronousObservableLike<T>;
    merge<T>(fst: PureDeferredObservableLike<T>, snd: PureDeferredObservableLike<T>, ...tail: readonly PureDeferredObservableLike<T>[]): PureDeferredObservableLike<T>;
    merge<T>(fst: SynchronousObservableLike<T>, snd: SynchronousObservableLike<T>, ...tail: readonly SynchronousObservableLike<T>[]): SynchronousObservableWithSideEffectsLike<T>;
    merge<T>(fst: MulticastObservableLike<T>, snd: MulticastObservableLike<T>, ...tail: readonly MulticastObservableLike<T>[]): MulticastObservableLike<T>;
    merge<T>(fst: PureObservableLike<T>, snd: PureObservableLike<T>, ...tail: readonly PureObservableLike<T>[]): PureDeferredObservableLike<T>;
    merge<T>(fst: ObservableLike<T>, snd: ObservableLike<T>, ...tail: readonly ObservableLike<T>[]): DeferredObservableWithSideEffectsLike<T>;
    mergeAll<T>(options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly concurrency?: number;
    }): DeferredReactiveObservableOperator<PureSynchronousObservableLike<T>, T>;
    mergeAll<T>(options: {
        readonly innerType: typeof PureSynchronousComputationType;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly concurrency?: number;
    }): DeferredReactiveObservableOperator<PureSynchronousObservableLike<T>, T>;
    mergeAll<T>(options: {
        readonly innerType: typeof SynchronousComputationWithSideEffectsType;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly concurrency?: number;
    }): ObservableOperatorWithSideEffects<SynchronousObservableLike<T>, T>;
    mergeAll<T>(options: {
        readonly innerType: typeof PureDeferredComputationType;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly concurrency?: number;
    }): DeferringObservableOperator<PureDeferredObservableLike<T>, T>;
    mergeAll<T>(options?: {
        readonly innerType: typeof DeferredComputationWithSideEffectsType;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly concurrency?: number;
    }): Function1<ObservableLike<DeferredObservableLike<T>>, DeferredObservableWithSideEffectsLike<T>>;
    mergeMany<T>(observables: readonly PureSynchronousObservableLike<T>[]): PureSynchronousObservableLike<T>;
    mergeMany<T>(observables: readonly PureDeferredObservableLike<T>[]): PureDeferredObservableLike<T>;
    mergeMany<T>(observables: readonly SynchronousObservableLike<T>[]): SynchronousObservableWithSideEffectsLike<T>;
    mergeMany<T>(observables: readonly DeferredObservableLike<T>[]): DeferredObservableWithSideEffectsLike<T>;
    mergeMany<T>(observables: readonly MulticastObservableLike<T>[]): MulticastObservableLike<T>;
    mergeMany<T>(observables: readonly PureObservableLike<T>[]): PureDeferredObservableLike<T>;
    mergeMany<T>(observables: readonly ObservableLike<T>[]): DeferredObservableWithSideEffectsLike<T>;
    mergeMap<TA, TB>(selector: Function1<TA, PureSynchronousObservableLike<TB>>, options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly concurrency?: number;
    }): DeferredReactiveObservableOperator<TA, TB>;
    mergeMap<TA, TB>(selector: Function1<TA, PureSynchronousObservableLike<TB>>, options: {
        readonly innerType: typeof PureSynchronousComputationType;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly concurrency?: number;
    }): DeferredReactiveObservableOperator<TA, TB>;
    mergeMap<TA, TB>(selector: Function1<TA, SynchronousObservableLike<TB>>, options: {
        readonly innerType: typeof SynchronousComputationWithSideEffectsType;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly concurrency?: number;
    }): ObservableOperatorWithSideEffects<TA, TB>;
    mergeMap<TA, TB>(selector: Function1<TA, PureDeferredObservableLike<TB>>, options: {
        readonly innerType: typeof PureDeferredComputationType;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly concurrency?: number;
    }): DeferringObservableOperator<TA, TB>;
    mergeMap<TA, TB>(selector: Function1<TA, DeferredObservableLike<TB>>, options: {
        readonly innerType: typeof DeferredComputationWithSideEffectsType;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly concurrency?: number;
    }): Function1<ObservableLike<TA>, DeferredObservableWithSideEffectsLike<TB>>;
    mergeWith<T>(snd: PureSynchronousObservableLike<T>, ...tail: readonly PureSynchronousObservableLike<T>[]): DeferredReactiveObservableOperator<T, T>;
    mergeWith<T>(snd: SynchronousObservableLike<T>, ...tail: readonly SynchronousObservableLike<T>[]): ObservableOperatorWithSideEffects<T, T>;
    mergeWith<T>(snd: PureDeferredObservableLike<T>, ...tail: readonly PureDeferredObservableLike<T>[]): DeferringObservableOperator<T, T>;
    mergeWith<T>(snd: PureObservableLike<T>, ...tail: readonly PureObservableLike<T>[]): DeferredReactiveObservableOperator<T, T>;
    mergeWith<T>(snd: ObservableLike<T>, ...tail: readonly ObservableLike<T>[]): Function1<ObservableLike<T>, DeferredObservableWithSideEffectsLike<T>>;
    multicast<T>(scheduler: SchedulerLike, options?: {
        readonly autoDispose?: boolean;
        readonly replay?: number;
        readonly capacity?: number;
        readonly backpressureStrategy?: BackpressureStrategy;
    }): Function1<DeferredObservableLike<T>, MulticastObservableLike<T> & DisposableLike>;
    never<T>(): MulticastObservableLike<T>;
    notify<T>(eventListener: EventListenerLike<T>): ObservableOperatorWithSideEffects<T, T>;
    onSubscribe<T>(f: Factory<DisposableLike>): ObservableOperatorWithSideEffects<T, T>;
    onSubscribe<T>(f: Factory<SideEffect1<Optional<Error>>>): ObservableOperatorWithSideEffects<T, T>;
    onSubscribe<T>(f: SideEffect): ObservableOperatorWithSideEffects<T, T>;
    pairwise<T>(): DeferredReactiveObservableOperator<T, Tuple2<T, T>>;
    raise<T>(options?: {
        readonly raise?: Factory<unknown>;
        readonly delay?: number;
    }): PureSynchronousObservableLike<T>;
    reduce<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): Function1<SynchronousObservableLike<T>, TAcc>;
    repeat<T>(predicate: Predicate<number>): ObservableOperator<T, T, DeferredObservableLike>;
    repeat<T>(count: number): ObservableOperator<T, T, DeferredObservableLike>;
    repeat<T>(): ObservableOperator<T, T, DeferredObservableLike>;
    retry<T>(shouldRetry?: (count: number, error: Error) => boolean): ObservableOperator<T, T, DeferredObservableLike>;
    run<T>(options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly maxMicroTaskTicks?: number;
    }): SideEffect1<SynchronousObservableLike<T>>;
    scan<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): DeferredReactiveObservableOperator<T, TAcc>;
    scanMany<T, TAcc>(scanner: Function2<TAcc, T, PureSynchronousObservableLike<TAcc>>, initialValue: Factory<TAcc>): DeferredReactiveObservableOperator<T, TAcc>;
    scanMany<T, TAcc>(scanner: Function2<TAcc, T, PureSynchronousObservableLike<TAcc>>, initialValue: Factory<TAcc>, options: {
        readonly innerType: typeof PureSynchronousComputationType;
    }): DeferredReactiveObservableOperator<T, TAcc>;
    scanMany<T, TAcc>(scanner: Function2<TAcc, T, SynchronousObservableLike<TAcc>>, initialValue: Factory<TAcc>, options: {
        readonly innerType: typeof SynchronousComputationWithSideEffectsType;
    }): ObservableOperatorWithSideEffects<T, TAcc>;
    scanMany<T, TAcc>(scanner: Function2<TAcc, T, PureDeferredObservableLike<TAcc>>, initialValue: Factory<TAcc>, options: {
        readonly innerType: typeof PureDeferredComputationType;
    }): DeferringObservableOperator<T, TAcc>;
    scanMany<T, TAcc>(scanner: Function2<TAcc, T, DeferredObservableLike<TAcc>>, initialValue: Factory<TAcc>, options: {
        readonly innerType: typeof DeferredComputationWithSideEffectsType;
    }): Function1<ObservableLike<T>, DeferredObservableWithSideEffectsLike<TAcc>>;
    skipFirst<T>(options?: {
        readonly count?: number;
    }): DeferredReactiveObservableOperator<T, T>;
    spring(options?: {
        readonly stiffness?: number;
        readonly damping?: number;
        readonly precision?: number;
    }): PureSynchronousObservableLike<number>;
    subscribe<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
    }): Function1<ObservableLike<T>, DisposableLike>;
    subscribeOn<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
    }): <TObservableIn extends ObservableLike<T>>(observable: TObservableIn) => TObservableIn extends PureDeferredObservableLike<T> ? PureDeferredObservableLike<T> : TObservableIn extends MulticastObservableLike<T> ? MulticastObservableLike<T> : TObservableIn extends SynchronousObservableWithSideEffectsLike<T> ? DeferredObservableWithSideEffectsLike<T> : TObservableIn extends DeferredObservableWithSideEffectsLike<T> ? DeferredObservableWithSideEffectsLike<T> : TObservableIn extends DeferredObservableLike<T> ? DeferredObservableLike<T> : ObservableLike<T>;
    switchAll<T>(): DeferredReactiveObservableOperator<PureSynchronousObservableLike<T>, T>;
    switchAll<T>(options: {
        readonly innerType: typeof PureSynchronousComputationType;
    }): DeferredReactiveObservableOperator<PureSynchronousObservableLike<T>, T>;
    switchAll<T>(options: {
        readonly innerType: typeof SynchronousComputationWithSideEffectsType;
    }): ObservableOperatorWithSideEffects<SynchronousObservableLike<T>, T>;
    switchAll<T>(options: {
        readonly innerType: typeof PureDeferredComputationType;
    }): DeferringObservableOperator<PureDeferredObservableLike<T>, T>;
    switchAll<T>(options: {
        readonly innerType: typeof DeferredComputationWithSideEffectsType;
    }): Function1<ObservableLike<DeferredObservableLike<T>>, DeferredObservableWithSideEffectsLike<T>>;
    switchMap<TA, TB>(selector: Function1<TA, PureSynchronousObservableLike<TB>>): DeferredReactiveObservableOperator<TA, TB>;
    switchMap<TA, TB>(selector: Function1<TA, PureSynchronousObservableLike<TB>>, options: {
        readonly innerType: typeof PureSynchronousComputationType;
    }): DeferredReactiveObservableOperator<TA, TB>;
    switchMap<TA, TB>(selector: Function1<TA, SynchronousObservableLike<TB>>, options: {
        readonly innerType: typeof SynchronousComputationWithSideEffectsType;
    }): ObservableOperatorWithSideEffects<TA, TB>;
    switchMap<TA, TB>(selector: Function1<TA, PureDeferredObservableLike<TB>>, options: {
        readonly innerType: typeof PureDeferredComputationType;
    }): DeferringObservableOperator<TA, TB>;
    switchMap<TA, TB>(selector: Function1<TA, DeferredObservableLike<TB>>, options: {
        readonly innerType: typeof DeferredComputationWithSideEffectsType;
    }): Function1<ObservableLike<TA>, DeferredObservableWithSideEffectsLike<TB>>;
    takeFirst<T>(options?: {
        readonly count?: number;
    }): DeferredReactiveObservableOperator<T, T>;
    takeLast<T>(options?: {
        readonly count?: number;
    }): DeferredReactiveObservableOperator<T, T>;
    takeUntil<T>(notifier: PureSynchronousObservableLike): DeferredReactiveObservableOperator<T, T>;
    takeUntil<T>(notifier: SynchronousObservableWithSideEffectsLike): ObservableOperatorWithSideEffects<T, T>;
    takeUntil<T>(notifier: DeferredObservableWithSideEffectsLike): Function1<ObservableLike<T>, DeferredObservableWithSideEffectsLike<T>>;
    takeUntil<T>(notifier: MulticastObservableLike): DeferringObservableOperator<T, T>;
    takeWhile<T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): DeferredReactiveObservableOperator<T, T>;
    throttle<T>(duration: number, options?: {
        readonly mode?: ThrottleMode;
    }): DeferredReactiveObservableOperator<T, T>;
    throwIfEmpty<T>(factory: Factory<unknown>): DeferredReactiveObservableOperator<T, T>;
    toRunnable<T>(options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly maxMicroTaskTicks?: number;
    }): Function1<SynchronousObservableLike<T>, RunnableLike<T>>;
    toEventSource<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
    }): Function1<ObservableLike<T>, EventSourceLike<T>>;
    toReadonlyArray<T>(options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly maxMicroTaskTicks?: number;
    }): Function1<SynchronousObservableLike<T>, ReadonlyArray<T>>;
    toReadonlyArrayAsync<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
    }): Function1<ObservableLike<T>, Promise<ReadonlyArray<T>>>;
    withCurrentTime<TA, TB>(selector: Function2<number, TA, TB>): DeferredReactiveObservableOperator<TA, TB>;
    withLatestFrom<TA, TB>(other: PureSynchronousObservableLike<TB>): DeferredReactiveObservableOperator<TA, Tuple2<TA, TB>>;
    withLatestFrom<TA, TB, T>(other: PureSynchronousObservableLike<TB>, selector: Function2<TA, TB, T>): DeferredReactiveObservableOperator<TA, T>;
    withLatestFrom<TA, TB>(other: SynchronousObservableWithSideEffectsLike<TB>): ObservableOperatorWithSideEffects<TA, Tuple2<TA, TB>>;
    withLatestFrom<TA, TB, T>(other: SynchronousObservableWithSideEffectsLike<TB>, selector: Function2<TA, TB, T>): ObservableOperatorWithSideEffects<TA, T>;
    withLatestFrom<TA, TB>(other: DeferredObservableWithSideEffectsLike<TB>): Function1<ObservableLike<TA>, DeferredObservableWithSideEffectsLike<Tuple2<TA, TB>>>;
    withLatestFrom<TA, TB, T>(other: DeferredObservableWithSideEffectsLike<TB>, selector: Function2<TA, TB, T>): Function1<ObservableLike<TA>, DeferredObservableWithSideEffectsLike<T>>;
    withLatestFrom<TA, TB>(other: MulticastObservableLike<TB>): DeferringObservableOperator<TA, Tuple2<TA, TB>>;
    withLatestFrom<TA, TB, T>(other: MulticastObservableLike<TB>, selector: Function2<TA, TB, T>): DeferringObservableOperator<TA, T>;
    zipLatest<TA, TB>(a: PureSynchronousObservableLike<TA>, b: PureSynchronousObservableLike<TB>): PureSynchronousObservableLike<Tuple2<TA, TB>>;
    zipLatest<TA, TB, TC>(a: PureSynchronousObservableLike<TA>, b: PureSynchronousObservableLike<TB>, c: PureSynchronousObservableLike<TC>): PureSynchronousObservableLike<Tuple3<TA, TB, TC>>;
    zipLatest<TA, TB, TC, TD>(a: PureSynchronousObservableLike<TA>, b: PureSynchronousObservableLike<TB>, c: PureSynchronousObservableLike<TC>, d: PureSynchronousObservableLike<TD>): PureSynchronousObservableLike<Tuple4<TA, TB, TC, TD>>;
    zipLatest<TA, TB, TC, TD, TE>(a: PureSynchronousObservableLike<TA>, b: PureSynchronousObservableLike<TB>, c: PureSynchronousObservableLike<TC>, d: PureSynchronousObservableLike<TD>, e: PureSynchronousObservableLike<TE>): PureSynchronousObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
    zipLatest<TA, TB, TC, TD, TE, TF>(a: PureSynchronousObservableLike<TA>, b: PureSynchronousObservableLike<TB>, c: PureSynchronousObservableLike<TC>, d: PureSynchronousObservableLike<TD>, e: PureSynchronousObservableLike<TE>, f: PureSynchronousObservableLike<TF>): PureSynchronousObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG>(a: PureSynchronousObservableLike<TA>, b: PureSynchronousObservableLike<TB>, c: PureSynchronousObservableLike<TC>, d: PureSynchronousObservableLike<TD>, e: PureSynchronousObservableLike<TE>, f: PureSynchronousObservableLike<TF>, g: PureSynchronousObservableLike<TG>): PureSynchronousObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: PureSynchronousObservableLike<TA>, b: PureSynchronousObservableLike<TB>, c: PureSynchronousObservableLike<TC>, d: PureSynchronousObservableLike<TD>, e: PureSynchronousObservableLike<TE>, f: PureSynchronousObservableLike<TF>, g: PureSynchronousObservableLike<TG>, h: PureSynchronousObservableLike<TH>): PureSynchronousObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: PureSynchronousObservableLike<TA>, b: PureSynchronousObservableLike<TB>, c: PureSynchronousObservableLike<TC>, d: PureSynchronousObservableLike<TD>, e: PureSynchronousObservableLike<TE>, f: PureSynchronousObservableLike<TF>, g: PureSynchronousObservableLike<TG>, h: PureSynchronousObservableLike<TH>, i: PureSynchronousObservableLike<TI>): PureSynchronousObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    zipLatest<TA, TB>(a: SynchronousObservableLike<TA>, b: SynchronousObservableLike<TB>): SynchronousObservableWithSideEffectsLike<Tuple2<TA, TB>>;
    zipLatest<TA, TB, TC>(a: SynchronousObservableLike<TA>, b: SynchronousObservableLike<TB>, c: SynchronousObservableLike<TC>): SynchronousObservableWithSideEffectsLike<Tuple3<TA, TB, TC>>;
    zipLatest<TA, TB, TC, TD>(a: SynchronousObservableLike<TA>, b: SynchronousObservableLike<TB>, c: SynchronousObservableLike<TC>, d: SynchronousObservableLike<TD>): SynchronousObservableWithSideEffectsLike<Tuple4<TA, TB, TC, TD>>;
    zipLatest<TA, TB, TC, TD, TE>(a: SynchronousObservableLike<TA>, b: SynchronousObservableLike<TB>, c: SynchronousObservableLike<TC>, d: SynchronousObservableLike<TD>, e: SynchronousObservableLike<TE>): SynchronousObservableWithSideEffectsLike<Tuple5<TA, TB, TC, TD, TE>>;
    zipLatest<TA, TB, TC, TD, TE, TF>(a: SynchronousObservableLike<TA>, b: SynchronousObservableLike<TB>, c: SynchronousObservableLike<TC>, d: SynchronousObservableLike<TD>, e: SynchronousObservableLike<TE>, f: SynchronousObservableLike<TF>): SynchronousObservableWithSideEffectsLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG>(a: SynchronousObservableLike<TA>, b: SynchronousObservableLike<TB>, c: SynchronousObservableLike<TC>, d: SynchronousObservableLike<TD>, e: SynchronousObservableLike<TE>, f: SynchronousObservableLike<TF>, g: SynchronousObservableLike<TG>): SynchronousObservableWithSideEffectsLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: SynchronousObservableLike<TA>, b: SynchronousObservableLike<TB>, c: SynchronousObservableLike<TC>, d: SynchronousObservableLike<TD>, e: SynchronousObservableLike<TE>, f: SynchronousObservableLike<TF>, g: SynchronousObservableLike<TG>, h: SynchronousObservableLike<TH>): SynchronousObservableWithSideEffectsLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: SynchronousObservableLike<TA>, b: SynchronousObservableLike<TB>, c: SynchronousObservableLike<TC>, d: SynchronousObservableLike<TD>, e: SynchronousObservableLike<TE>, f: SynchronousObservableLike<TF>, g: SynchronousObservableLike<TG>, h: SynchronousObservableLike<TH>, i: SynchronousObservableLike<TI>): SynchronousObservableWithSideEffectsLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    zipLatest<TA, TB>(a: PureObservableLike<TA>, b: PureObservableLike<TB>): PureDeferredObservableLike<Tuple2<TA, TB>>;
    zipLatest<TA, TB, TC>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>): PureDeferredObservableLike<Tuple3<TA, TB, TC>>;
    zipLatest<TA, TB, TC, TD>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>): PureDeferredObservableLike<Tuple4<TA, TB, TC, TD>>;
    zipLatest<TA, TB, TC, TD, TE>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>): PureDeferredObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
    zipLatest<TA, TB, TC, TD, TE, TF>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>): PureDeferredObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>): PureDeferredObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>, h: PureObservableLike<TH>): PureDeferredObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>, h: PureObservableLike<TH>, i: PureObservableLike<TI>): PureDeferredObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    zipLatest<TA, TB>(a: ObservableLike<TA>, b: ObservableLike<TB>): DeferredObservableWithSideEffectsLike<Tuple2<TA, TB>>;
    zipLatest<TA, TB, TC>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>): DeferredObservableWithSideEffectsLike<Tuple3<TA, TB, TC>>;
    zipLatest<TA, TB, TC, TD>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>): DeferredObservableWithSideEffectsLike<Tuple4<TA, TB, TC, TD>>;
    zipLatest<TA, TB, TC, TD, TE>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>): DeferredObservableWithSideEffectsLike<Tuple5<TA, TB, TC, TD, TE>>;
    zipLatest<TA, TB, TC, TD, TE, TF>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>): DeferredObservableWithSideEffectsLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>): DeferredObservableWithSideEffectsLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>, h: ObservableLike<TH>): DeferredObservableWithSideEffectsLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>, h: ObservableLike<TH>, i: ObservableLike<TI>): DeferredObservableWithSideEffectsLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
}
export type Signature = ObservableModule;
export declare const backpressureStrategy: Signature["backpressureStrategy"];
export declare const buffer: Signature["buffer"];
export declare const catchError: Signature["catchError"];
export declare const combineLatest: Signature["combineLatest"];
export declare const computeDeferred: Signature["computeDeferred"];
export declare const computeSynchronousObservable: Signature["computeSynchronousObservable"];
export declare const concatAll: Signature["concatAll"];
export declare const concatMany: Signature["concatMany"];
export declare const create: Signature["create"];
export declare const currentTime: Signature["currentTime"];
export declare const debug: Signature["debug"];
export declare const decodeWithCharset: Signature["decodeWithCharset"];
export declare const defer: Signature["defer"];
export declare const dispatchTo: Signature["dispatchTo"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const empty: Signature["empty"];
export declare const encodeUtf8: Signature["encodeUtf8"];
export declare const enqueue: Signature["enqueue"];
export declare const exhaust: Signature["exhaust"];
export declare const exhaustMap: Signature["exhaustMap"];
export declare const firstAsync: Signature["firstAsync"];
export declare const flatMapAsync: Signature["flatMapAsync"];
export declare const flatMapIterable: Signature["flatMapIterable"];
export declare const forEach: Signature["forEach"];
export declare const forkMerge: Signature["forkMerge"];
export declare const fromAsyncFactory: Signature["fromAsyncFactory"];
export declare const fromAsyncIterable: Signature["fromAsyncIterable"];
export declare const fromEventSource: Signature["fromEventSource"];
export declare const fromIterable: Signature["fromIterable"];
export declare const fromPromise: Signature["fromPromise"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const fromStore: Signature["fromStore"];
export declare const fromValue: Signature["fromValue"];
export declare const generate: Signature["generate"];
export declare const ignoreElements: Signature["ignoreElements"];
export declare const keep: Signature["keep"];
export declare const keyFrame: Signature["keyFrame"];
export declare const last: Signature["last"];
export declare const lastAsync: Signature["lastAsync"];
export declare const log: Signature["log"];
export declare const map: Signature["map"];
export declare const merge: Signature["merge"];
export declare const mergeAll: Signature["mergeAll"];
export declare const mergeMap: Signature["mergeMap"];
export declare const mergeMany: Signature["mergeMany"];
export declare const mergeWith: Signature["mergeWith"];
export declare const multicast: Signature["multicast"];
export declare const never: Signature["never"];
export declare const notify: Signature["notify"];
export declare const onSubscribe: Signature["onSubscribe"];
export declare const pairwise: Signature["pairwise"];
export declare const raise: Signature["raise"];
export declare const reduce: Signature["reduce"];
export declare const repeat: Signature["repeat"];
export declare const retry: Signature["retry"];
export declare const run: Signature["run"];
export declare const scan: Signature["scan"];
export declare const scanMany: Signature["scanMany"];
export declare const skipFirst: Signature["skipFirst"];
export declare const spring: Signature["spring"];
export declare const subscribe: Signature["subscribe"];
export declare const subscribeOn: Signature["subscribeOn"];
export declare const switchAll: Signature["switchAll"];
export declare const switchMap: Signature["switchMap"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeLast: Signature["takeLast"];
export declare const takeUntil: Signature["takeUntil"];
export declare const takeWhile: Signature["takeWhile"];
export declare const throttle: Signature["throttle"];
export declare const throwIfEmpty: Signature["throwIfEmpty"];
export declare const toRunnable: Signature["toRunnable"];
export declare const toEventSource: Signature["toEventSource"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
export declare const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"];
export declare const withCurrentTime: Signature["withCurrentTime"];
export declare const withLatestFrom: Signature["withLatestFrom"];
export declare const zipLatest: Signature["zipLatest"];
export {};
