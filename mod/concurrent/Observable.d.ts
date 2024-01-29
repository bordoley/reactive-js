import { EnumerableLike } from "../collections.js";
import { Computation, Computation_T, Computation_type } from "../computations.js";
import { DeferredObservableLike, DeferredObservableWithSideEffectsLike, DispatcherLike, MulticastObservableLike, ObservableLike, ObservableLike_isDeferred, ObservableLike_isMulticasted, ObservableLike_isPure, ObservableLike_isRunnable, ObserverLike, PureDeferredObservableLike, PureObservableLike, PureRunnableLike, RunnableLike, RunnableWithSideEffectsLike, SchedulerLike } from "../concurrent.js";
import { EventSourceLike, StoreLike } from "../events.js";
import { Equality, Factory, Function1, Function2, Optional, Predicate, Reducer, SideEffect, SideEffect1, Tuple2, Tuple3, Tuple4, Tuple5, Tuple6, Tuple7, Tuple8, Tuple9, Updater } from "../functions.js";
import { BackpressureStrategy, DisposableLike, QueueableLike } from "../utils.js";
export type PureStatelessObservableOperator<TIn, TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: TObservableIn) => TObservableIn extends PureRunnableLike<TIn> ? PureRunnableLike<TOut> : TObservableIn extends RunnableWithSideEffectsLike<TIn> ? RunnableWithSideEffectsLike<TOut> : TObservableIn extends RunnableLike<TIn> ? RunnableLike<TOut> : TObservableIn extends PureDeferredObservableLike<TIn> ? PureDeferredObservableLike<TOut> : TObservableIn extends DeferredObservableWithSideEffectsLike<TIn> ? DeferredObservableWithSideEffectsLike<TOut> : TObservableIn extends DeferredObservableLike<TIn> ? DeferredObservableLike<TOut> : TObservableIn extends MulticastObservableLike<TIn> ? MulticastObservableLike<TOut> : ObservableLike<TOut>;
export type PureStatefulObservableOperator<TIn, TOut, TObservableInBase = ObservableLike<TIn>> = <TObservableIn extends TObservableInBase>(observable: TObservableIn) => TObservableIn extends PureRunnableLike<TIn> ? PureRunnableLike<TOut> : TObservableIn extends RunnableWithSideEffectsLike<TIn> ? RunnableWithSideEffectsLike<TOut> : TObservableIn extends RunnableLike<TIn> ? RunnableLike<TOut> : TObservableIn extends PureDeferredObservableLike<TIn> ? PureDeferredObservableLike<TOut> : TObservableIn extends MulticastObservableLike<TIn> ? PureDeferredObservableLike<TOut> : TObservableIn extends DeferredObservableWithSideEffectsLike<TIn> ? DeferredObservableWithSideEffectsLike<TOut> : TObservableIn extends DeferredObservableLike<TIn> ? DeferredObservableLike<TOut> : ObservableLike<TOut>;
export type DeferringObservableOperator<TIn, TOut, TObservableInBase = ObservableLike<TIn>> = <TObservableIn extends TObservableInBase>(obs: TObservableIn) => TObservableIn extends PureObservableLike<TIn> ? PureDeferredObservableLike<TOut> : DeferredObservableWithSideEffectsLike<TOut>;
export type ObservableOperatorWithSideEffects<TIn, TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: TObservableIn) => TObservableIn extends PureRunnableLike<TIn> ? RunnableWithSideEffectsLike<TOut> : TObservableIn extends RunnableWithSideEffectsLike<TIn> ? RunnableWithSideEffectsLike<TOut> : TObservableIn extends RunnableLike<TIn> ? RunnableWithSideEffectsLike<TOut> : TObservableIn extends PureDeferredObservableLike<TIn> ? DeferredObservableWithSideEffectsLike<TOut> : TObservableIn extends DeferredObservableWithSideEffectsLike<TIn> ? DeferredObservableWithSideEffectsLike<TOut> : TObservableIn extends DeferredObservableLike<TIn> ? DeferredObservableWithSideEffectsLike<TOut> : TObservableIn extends MulticastObservableLike<TIn> ? DeferredObservableWithSideEffectsLike<TOut> : ObservableLike<TOut>;
export declare const PureRunnableType: Pick<PureRunnableLike, typeof ObservableLike_isDeferred | typeof ObservableLike_isMulticasted | typeof ObservableLike_isPure | typeof ObservableLike_isRunnable>;
export declare const RunnableWithSideEffectsType: Pick<RunnableWithSideEffectsLike, typeof ObservableLike_isDeferred | typeof ObservableLike_isMulticasted | typeof ObservableLike_isPure | typeof ObservableLike_isRunnable>;
export declare const PureDeferredObservableType: Pick<PureDeferredObservableLike, typeof ObservableLike_isDeferred | typeof ObservableLike_isMulticasted | typeof ObservableLike_isPure | typeof ObservableLike_isRunnable>;
export declare const DeferredObservableWithSideEffectsType: Pick<DeferredObservableWithSideEffectsLike, typeof ObservableLike_isDeferred | typeof ObservableLike_isMulticasted | typeof ObservableLike_isPure | typeof ObservableLike_isRunnable>;
/**
 * @noInheritDoc
 */
export interface PureRunnableComputation extends Computation {
    readonly [Computation_type]?: PureRunnableLike<this[typeof Computation_T]>;
}
/**
 * @noInheritDoc
 */
export interface RunnableWithSideEffectsComputation extends Computation {
    readonly [Computation_type]?: RunnableWithSideEffectsLike<this[typeof Computation_T]>;
}
/**
 * @noInheritDoc
 */
export interface PuredDeferredObservableComputation extends Computation {
    readonly [Computation_type]?: PureDeferredObservableLike<this[typeof Computation_T]>;
}
/**
 * @noInheritDoc
 */
export interface DeferredObservableWithSideEffectsComputation extends Computation {
    readonly [Computation_type]?: DeferredObservableWithSideEffectsLike<this[typeof Computation_T]>;
}
/**
 * @noInheritDoc
 */
export interface MulticastObservableComputation extends Computation {
    readonly [Computation_type]?: MulticastObservableLike<this[typeof Computation_T]>;
}
export declare namespace Animation {
    /**
     * @noInheritDoc
     */
    interface Delay {
        readonly type: "delay";
        readonly duration: number;
    }
    /**
     * @noInheritDoc
     */
    interface KeyFrame {
        readonly type: "keyframe";
        readonly from: number;
        readonly to: number;
        readonly duration: number;
        readonly easing?: Function1<number, number>;
    }
    /**
     * @noInheritDoc
     */
    interface Frame {
        readonly type: "frame";
        readonly value: number;
    }
    /**
     * @noInheritDoc
     */
    interface Loop<T> {
        readonly type: "loop";
        readonly animation: Animation<T> | readonly Animation<T>[];
        readonly count?: number;
    }
    /**
     * @noInheritDoc
     */
    interface Spring {
        readonly type: "spring";
        readonly from: number;
        readonly to: number;
        readonly stiffness?: number;
        readonly damping?: number;
        readonly precision?: number;
    }
}
export type Animation<T = number> = Animation.Delay | Animation.Loop<T> | (T extends number ? (Animation.KeyFrame | Animation.Spring | Animation.Frame) & {
    readonly selector?: never;
} : (Animation.KeyFrame | Animation.Spring | Animation.Frame) & {
    readonly selector: Function1<number, T>;
});
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
    animate<T = number>(configs: Animation<T> | readonly Animation<T>[]): PureRunnableLike<T>;
    backpressureStrategy<T>(capacity: number, backpressureStrategy: BackpressureStrategy): PureStatefulObservableOperator<T, T>;
    buffer<T>(options?: {
        readonly count?: number;
    }): PureStatefulObservableOperator<T, readonly T[]>;
    catchError<T>(onError: SideEffect1<Error>): PureStatefulObservableOperator<T, T>;
    combineLatest<TA, TB>(a: PureRunnableLike<TA>, b: PureRunnableLike<TB>): PureRunnableLike<Tuple2<TA, TB>>;
    combineLatest<TA, TB, TC>(a: PureRunnableLike<TA>, b: PureRunnableLike<TB>, c: PureRunnableLike<TC>): PureRunnableLike<Tuple3<TA, TB, TC>>;
    combineLatest<TA, TB, TC, TD>(a: PureRunnableLike<TA>, b: PureRunnableLike<TB>, c: PureRunnableLike<TC>, d: PureRunnableLike<TD>): PureRunnableLike<Tuple4<TA, TB, TC, TD>>;
    combineLatest<TA, TB, TC, TD, TE>(a: PureRunnableLike<TA>, b: PureRunnableLike<TB>, c: PureRunnableLike<TC>, d: PureRunnableLike<TD>, e: PureRunnableLike<TE>): PureRunnableLike<Tuple5<TA, TB, TC, TD, TE>>;
    combineLatest<TA, TB, TC, TD, TE, TF>(a: PureRunnableLike<TA>, b: PureRunnableLike<TB>, c: PureRunnableLike<TC>, d: PureRunnableLike<TD>, e: PureRunnableLike<TE>, f: PureRunnableLike<TF>): PureRunnableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG>(a: PureRunnableLike<TA>, b: PureRunnableLike<TB>, c: PureRunnableLike<TC>, d: PureRunnableLike<TD>, e: PureRunnableLike<TE>, f: PureRunnableLike<TF>, g: PureRunnableLike<TG>): PureRunnableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: PureRunnableLike<TA>, b: PureRunnableLike<TB>, c: PureRunnableLike<TC>, d: PureRunnableLike<TD>, e: PureRunnableLike<TE>, f: PureRunnableLike<TF>, g: PureRunnableLike<TG>, h: PureRunnableLike<TH>): PureRunnableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: PureRunnableLike<TA>, b: PureRunnableLike<TB>, c: PureRunnableLike<TC>, d: PureRunnableLike<TD>, e: PureRunnableLike<TE>, f: PureRunnableLike<TF>, g: PureRunnableLike<TG>, h: PureRunnableLike<TH>, i: PureRunnableLike<TI>): PureRunnableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    combineLatest<TA, TB>(a: RunnableLike<TA>, b: RunnableLike<TB>): RunnableWithSideEffectsLike<Tuple2<TA, TB>>;
    combineLatest<TA, TB, TC>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>): RunnableWithSideEffectsLike<Tuple3<TA, TB, TC>>;
    combineLatest<TA, TB, TC, TD>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>): RunnableWithSideEffectsLike<Tuple4<TA, TB, TC, TD>>;
    combineLatest<TA, TB, TC, TD, TE>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>): RunnableWithSideEffectsLike<Tuple5<TA, TB, TC, TD, TE>>;
    combineLatest<TA, TB, TC, TD, TE, TF>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>): RunnableWithSideEffectsLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>): RunnableWithSideEffectsLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>, h: RunnableLike<TH>): RunnableWithSideEffectsLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>, h: RunnableLike<TH>, i: RunnableLike<TI>): RunnableWithSideEffectsLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
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
    computeRunnable<T>(computation: Factory<T>, options?: {
        readonly mode?: ComputeMode;
    }): RunnableWithSideEffectsLike<T>;
    concat<T>(fst: PureRunnableLike<T>, snd: PureRunnableLike<T>, ...tail: readonly PureRunnableLike<T>[]): PureRunnableLike<T>;
    concat<T>(fst: PureDeferredObservableLike<T>, snd: PureDeferredObservableLike<T>, ...tail: readonly PureDeferredObservableLike<T>[]): PureDeferredObservableLike<T>;
    concat<T>(fst: RunnableLike<T>, snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): RunnableWithSideEffectsLike<T>;
    concat<T>(fst: DeferredObservableLike<T>, snd: DeferredObservableLike<T>, ...tail: readonly DeferredObservableLike<T>[]): DeferredObservableWithSideEffectsLike<T>;
    concat<T>(fst: MulticastObservableLike<T>, snd: PureDeferredObservableLike<T>, ...tail: readonly PureDeferredObservableLike[]): MulticastObservableLike<T>;
    concat<T>(fst: MulticastObservableLike<T>, snd: DeferredObservableLike<T>, ...tail: readonly DeferredObservableLike[]): DeferredObservableWithSideEffectsLike<T>;
    concatAll<T>(): PureStatefulObservableOperator<PureRunnableLike<T>, T>;
    concatAll<T>(options: {
        readonly innerType: typeof PureRunnableType;
    }): PureStatefulObservableOperator<PureRunnableLike<T>, T>;
    concatAll<T>(options: {
        readonly innerType: typeof RunnableWithSideEffectsType;
    }): ObservableOperatorWithSideEffects<RunnableLike<T>, T>;
    concatAll<T>(options: {
        readonly innerType: typeof PureDeferredObservableType;
    }): DeferringObservableOperator<PureDeferredObservableLike<T>, T>;
    concatAll<T>(options: {
        readonly innerType: typeof DeferredObservableWithSideEffectsType;
    }): Function1<ObservableLike<DeferredObservableLike<T>>, DeferredObservableWithSideEffectsLike<T>>;
    concatMany<T>(observables: readonly PureRunnableLike<T>[]): PureRunnableLike<T>;
    concatMany<T>(observables: readonly PureDeferredObservableLike<T>[]): PureDeferredObservableLike<T>;
    concatMany<T>(observables: readonly RunnableLike<T>[]): RunnableWithSideEffectsLike<T>;
    concatMany<T>(observables: readonly DeferredObservableLike<T>[]): DeferredObservableWithSideEffectsLike<T>;
    concatMany<T>(observables: readonly [
        MulticastObservableLike<T>,
        ...(readonly PureDeferredObservableLike<T>[])
    ]): PureDeferredObservableLike<T>;
    concatMany<T>(observables: readonly [
        MulticastObservableLike<T>,
        ...(readonly DeferredObservableLike<T>[])
    ]): DeferredObservableWithSideEffectsLike<T>;
    concatMap<TA, TB>(selector: Function1<TA, PureRunnableLike<TB>>): PureStatefulObservableOperator<TA, TB>;
    concatMap<TA, TB>(selector: Function1<TA, PureRunnableLike<TB>>, options: {
        readonly innerType: typeof PureRunnableType;
    }): PureStatefulObservableOperator<TA, TB>;
    concatMap<TA, TB>(selector: Function1<TA, RunnableLike<TB>>, options: {
        readonly innerType: typeof RunnableWithSideEffectsType;
    }): ObservableOperatorWithSideEffects<TA, TB>;
    concatMap<TA, TB>(selector: Function1<TA, PureDeferredObservableLike<TB>>, options: {
        readonly innerType: typeof PureDeferredObservableType;
    }): DeferringObservableOperator<TA, TB>;
    concatMap<TA, TB>(selector: Function1<TA, DeferredObservableLike<TB>>, options: {
        readonly innerType: typeof DeferredObservableWithSideEffectsType;
    }): Function1<ObservableLike<TA>, DeferredObservableWithSideEffectsLike<TB>>;
    concatWith<T>(snd: PureRunnableLike<T>, ...tail: readonly PureRunnableLike<T>[]): PureStatefulObservableOperator<T, T>;
    concatWith<T>(snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): ObservableOperatorWithSideEffects<T, T>;
    concatWith<T>(snd: PureDeferredObservableLike<T>, ...tail: readonly PureDeferredObservableLike<T>[]): DeferringObservableOperator<T, T>;
    concatWith<T>(snd: DeferredObservableLike<T>, ...tail: readonly DeferredObservableLike<T>[]): Function1<DeferredObservableLike<T> | MulticastObservableLike<T>, DeferredObservableWithSideEffectsLike<T>>;
    create<T>(f: SideEffect1<ObserverLike<T>>): DeferredObservableWithSideEffectsLike<T>;
    currentTime: PureRunnableLike<number>;
    debug<T>(): ObservableOperatorWithSideEffects<T, T>;
    decodeWithCharset(options?: {
        readonly charset?: string;
        readonly fatal?: boolean;
        readonly ignoreBOM?: boolean;
    }): PureStatefulObservableOperator<ArrayBuffer, string>;
    defer<T>(f: Factory<MulticastObservableLike<T>>): PureDeferredObservableLike<T>;
    dispatchTo<T>(dispatcher: DispatcherLike<T>): ObservableOperatorWithSideEffects<T, T>;
    distinctUntilChanged<T>(options?: {
        readonly equality?: Equality<T>;
    }): PureStatefulObservableOperator<T, T>;
    empty<T>(): MulticastObservableLike<T>;
    empty<T>(options?: {
        readonly delay: number;
    }): PureRunnableLike<T>;
    encodeUtf8(): PureStatefulObservableOperator<string, Uint8Array>;
    endWith<T>(value: T, ...values: readonly T[]): PureStatefulObservableOperator<T, T>;
    enqueue<T>(queue: QueueableLike<T>): ObservableOperatorWithSideEffects<T, T>;
    exhaust<T>(): PureStatefulObservableOperator<PureRunnableLike<T>, T>;
    exhaust<T>(options: {
        readonly innerType: typeof PureRunnableType;
    }): PureStatefulObservableOperator<PureRunnableLike<T>, T>;
    exhaust<T>(options: {
        readonly innerType: typeof RunnableWithSideEffectsType;
    }): ObservableOperatorWithSideEffects<RunnableLike<T>, T>;
    exhaust<T>(options: {
        readonly innerType: typeof PureDeferredObservableType;
    }): DeferringObservableOperator<RunnableLike<T>, T>;
    exhaust<T>(options: {
        readonly innerType: typeof DeferredObservableWithSideEffectsType;
    }): Function1<ObservableLike<DeferredObservableLike<T>>, DeferredObservableWithSideEffectsLike<T>>;
    exhaustMap<TA, TB>(selector: Function1<TA, PureRunnableLike<TB>>): PureStatefulObservableOperator<TA, TB>;
    exhaustMap<TA, TB>(selector: Function1<TA, PureRunnableLike<TB>>, options: {
        readonly innerType: typeof PureRunnableType;
    }): PureStatefulObservableOperator<TA, TB>;
    exhaustMap<TA, TB>(selector: Function1<TA, RunnableLike<TB>>, options: {
        readonly innerType: typeof RunnableWithSideEffectsType;
    }): ObservableOperatorWithSideEffects<TA, TB>;
    exhaustMap<TA, TB>(selector: Function1<TA, PureDeferredObservableLike<TB>>, options: {
        readonly innerType: typeof PureDeferredObservableType;
    }): DeferringObservableOperator<TA, TB>;
    exhaustMap<TA, TB>(selector: Function1<TA, DeferredObservableLike<TB>>, options: {
        readonly innerType: typeof DeferredObservableWithSideEffectsType;
    }): Function1<ObservableLike<TA>, DeferredObservableWithSideEffectsLike<TB>>;
    firstAsync<T>(scheduler: SchedulerLike, options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: BackpressureStrategy;
    }): Function1<ObservableLike<T>, Promise<Optional<T>>>;
    flatMapAsync<TA, TB>(f: Function2<TA, AbortSignal, Promise<TB>>): Function1<ObservableLike<TA>, DeferredObservableWithSideEffectsLike<TB>>;
    flatMapIterable<TA, TB>(selector: Function1<TA, Iterable<TB>>): ObservableOperatorWithSideEffects<TA, TB>;
    forEach<T>(effect: SideEffect1<T>): ObservableOperatorWithSideEffects<T, T>;
    forkMerge<TIn, TOut>(fst: Function1<MulticastObservableLike<TIn>, PureRunnableLike<TOut>>, snd: Function1<MulticastObservableLike<TIn>, PureRunnableLike<TOut>>, ...tail: readonly Function1<MulticastObservableLike<TIn>, PureRunnableLike<TOut>>[]): <TObservableIn extends ObservableLike<TIn>>(obs: TObservableIn) => TObservableIn extends MulticastObservableLike<TIn> ? PureRunnableLike<TOut> : DeferredObservableWithSideEffectsLike<TOut>;
    forkMerge<TIn, TOut>(fst: Function1<MulticastObservableLike<TIn>, PureDeferredObservableLike<TOut>>, snd: Function1<MulticastObservableLike<TIn>, PureDeferredObservableLike<TOut>>, ...tail: readonly Function1<MulticastObservableLike<TIn>, PureDeferredObservableLike<TOut>>[]): <TObservableIn extends ObservableLike<TIn>>(obs: TObservableIn) => TObservableIn extends MulticastObservableLike<TIn> ? PureDeferredObservableLike<TOut> : DeferredObservableWithSideEffectsLike<TOut>;
    forkMerge<TIn, TOut>(fst: Function1<MulticastObservableLike<TIn>, RunnableWithSideEffectsLike<TOut>>, snd: Function1<MulticastObservableLike<TIn>, RunnableWithSideEffectsLike<TOut>>, ...tail: readonly Function1<MulticastObservableLike<TIn>, RunnableWithSideEffectsLike<TOut>>[]): <TObservableIn extends ObservableLike<TIn>>(obs: TObservableIn) => TObservableIn extends MulticastObservableLike<TIn> ? RunnableWithSideEffectsLike<TOut> : DeferredObservableWithSideEffectsLike<TOut>;
    forkMerge<TIn, TOut>(fst: Function1<MulticastObservableLike<TIn>, MulticastObservableLike<TOut>>, snd: Function1<MulticastObservableLike<TIn>, MulticastObservableLike<TOut>>, ...tail: readonly Function1<MulticastObservableLike<TIn>, MulticastObservableLike<TOut>>[]): <TObservableIn extends ObservableLike<TIn>>(obs: TObservableIn) => TObservableIn extends MulticastObservableLike<TIn> ? MulticastObservableLike<TOut> : DeferredObservableWithSideEffectsLike<TOut>;
    forkMerge<TIn, TOut>(fst: Function1<MulticastObservableLike<TIn>, PureObservableLike<TOut>>, snd: Function1<MulticastObservableLike<TIn>, PureObservableLike<TOut>>, ...tail: readonly Function1<MulticastObservableLike<TIn>, PureObservableLike<TOut>>[]): <TObservableIn extends ObservableLike<TIn>>(obs: TObservableIn) => TObservableIn extends MulticastObservableLike<TIn> ? PureDeferredObservableLike<TOut> : DeferredObservableWithSideEffectsLike<TOut>;
    forkMerge<TIn, TOut>(fst: Function1<MulticastObservableLike<TIn>, ObservableLike<TOut>>, snd: Function1<MulticastObservableLike<TIn>, ObservableLike<TOut>>, ...tail: readonly Function1<MulticastObservableLike<TIn>, ObservableLike<TOut>>[]): Function1<ObservableLike<TIn>, DeferredObservableWithSideEffectsLike<TOut>>;
    fromAsyncFactory<T>(): Function1<Function1<AbortSignal, Promise<T>>, DeferredObservableWithSideEffectsLike<T>>;
    fromAsyncIterable<T>(): Function1<AsyncIterable<T>, DeferredObservableWithSideEffectsLike<T>>;
    fromEnumerable<T>(options?: {
        readonly delay: number;
        readonly delayStart?: boolean;
    }): Function1<EnumerableLike<T>, PureRunnableLike<T>>;
    fromEventSource<T>(): Function1<EventSourceLike<T>, MulticastObservableLike<T>>;
    fromIterable<T>(options?: {
        readonly delay: number;
        readonly delayStart?: boolean;
    }): Function1<Iterable<T>, RunnableWithSideEffectsLike<T>>;
    fromPromise<T>(): Function1<Promise<T>, MulticastObservableLike<T>>;
    fromReadonlyArray<T>(options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
        readonly count?: number;
        readonly start?: number;
    }): Function1<ReadonlyArray<T>, PureRunnableLike<T>>;
    fromStore<T>(): Function1<StoreLike<T>, MulticastObservableLike<T>>;
    fromValue<T>(options?: {
        readonly delay: number;
    }): Function1<T, PureRunnableLike<T>>;
    generate<T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): PureRunnableLike<T>;
    ignoreElements<T>(): PureStatelessObservableOperator<unknown, T>;
    keep<T>(predicate: Predicate<T>): PureStatelessObservableOperator<T, T>;
    lastAsync<T>(scheduler: SchedulerLike, options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: BackpressureStrategy;
    }): Function1<ObservableLike<T>, Promise<Optional<T>>>;
    log<T>(): ObservableOperatorWithSideEffects<T, T>;
    map<TA, TB>(selector: Function1<TA, TB>): PureStatelessObservableOperator<TA, TB>;
    merge<T>(fst: PureRunnableLike<T>, snd: PureRunnableLike<T>, ...tail: readonly PureRunnableLike<T>[]): PureRunnableLike<T>;
    merge<T>(fst: PureDeferredObservableLike<T>, snd: PureDeferredObservableLike<T>, ...tail: readonly PureDeferredObservableLike<T>[]): PureDeferredObservableLike<T>;
    merge<T>(fst: RunnableLike<T>, snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): RunnableWithSideEffectsLike<T>;
    merge<T>(fst: MulticastObservableLike<T>, snd: MulticastObservableLike<T>, ...tail: readonly MulticastObservableLike<T>[]): MulticastObservableLike<T>;
    merge<T>(fst: PureObservableLike<T>, snd: PureObservableLike<T>, ...tail: readonly PureObservableLike<T>[]): PureDeferredObservableLike<T>;
    merge<T>(fst: ObservableLike<T>, snd: ObservableLike<T>, ...tail: readonly ObservableLike<T>[]): DeferredObservableWithSideEffectsLike<T>;
    mergeAll<T>(options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly concurrency?: number;
    }): PureStatefulObservableOperator<PureRunnableLike<T>, T>;
    mergeAll<T>(options: {
        readonly innerType: typeof PureRunnableType;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly concurrency?: number;
    }): PureStatefulObservableOperator<PureRunnableLike<T>, T>;
    mergeAll<T>(options: {
        readonly innerType: typeof RunnableWithSideEffectsType;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly concurrency?: number;
    }): ObservableOperatorWithSideEffects<RunnableLike<T>, T>;
    mergeAll<T>(options: {
        readonly innerType: typeof PureDeferredObservableType;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly concurrency?: number;
    }): DeferringObservableOperator<PureDeferredObservableLike<T>, T>;
    mergeAll<T>(options?: {
        readonly innerType: typeof DeferredObservableWithSideEffectsType;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly concurrency?: number;
    }): Function1<ObservableLike<DeferredObservableLike<T>>, DeferredObservableWithSideEffectsLike<T>>;
    mergeMany<T>(observables: readonly PureRunnableLike<T>[]): PureRunnableLike<T>;
    mergeMany<T>(observables: readonly PureDeferredObservableLike<T>[]): PureDeferredObservableLike<T>;
    mergeMany<T>(observables: readonly RunnableLike<T>[]): RunnableWithSideEffectsLike<T>;
    mergeMany<T>(observables: readonly DeferredObservableLike<T>[]): DeferredObservableWithSideEffectsLike<T>;
    mergeMany<T>(observables: readonly MulticastObservableLike<T>[]): MulticastObservableLike<T>;
    mergeMany<T>(observables: readonly PureObservableLike<T>[]): PureDeferredObservableLike<T>;
    mergeMany<T>(observables: readonly ObservableLike<T>[]): DeferredObservableWithSideEffectsLike<T>;
    mergeMap<TA, TB>(selector: Function1<TA, PureRunnableLike<TB>>, options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly concurrency?: number;
    }): PureStatefulObservableOperator<TA, TB>;
    mergeMap<TA, TB>(selector: Function1<TA, PureRunnableLike<TB>>, options: {
        readonly innerType: typeof PureRunnableType;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly concurrency?: number;
    }): PureStatefulObservableOperator<TA, TB>;
    mergeMap<TA, TB>(selector: Function1<TA, RunnableLike<TB>>, options: {
        readonly innerType: typeof RunnableWithSideEffectsType;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly concurrency?: number;
    }): ObservableOperatorWithSideEffects<TA, TB>;
    mergeMap<TA, TB>(selector: Function1<TA, PureDeferredObservableLike<TB>>, options: {
        readonly innerType: typeof PureDeferredObservableType;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly concurrency?: number;
    }): DeferringObservableOperator<TA, TB>;
    mergeMap<TA, TB>(selector: Function1<TA, DeferredObservableLike<TB>>, options: {
        readonly innerType: typeof DeferredObservableWithSideEffectsType;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly concurrency?: number;
    }): Function1<ObservableLike<TA>, DeferredObservableWithSideEffectsLike<TB>>;
    mergeWith<T>(snd: PureRunnableLike<T>, ...tail: readonly PureRunnableLike<T>[]): PureStatefulObservableOperator<T, T>;
    mergeWith<T>(snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): ObservableOperatorWithSideEffects<T, T>;
    mergeWith<T>(snd: PureDeferredObservableLike<T>, ...tail: readonly PureDeferredObservableLike<T>[]): DeferringObservableOperator<T, T>;
    mergeWith<T>(snd: PureObservableLike<T>, ...tail: readonly PureObservableLike<T>[]): PureStatefulObservableOperator<T, T>;
    mergeWith<T>(snd: ObservableLike<T>, ...tail: readonly ObservableLike<T>[]): Function1<ObservableLike<T>, DeferredObservableWithSideEffectsLike<T>>;
    multicast<T>(scheduler: SchedulerLike, options?: {
        readonly autoDispose?: boolean;
        readonly replay?: number;
        readonly capacity?: number;
        readonly backpressureStrategy?: BackpressureStrategy;
    }): Function1<DeferredObservableLike<T>, MulticastObservableLike<T> & DisposableLike>;
    never<T>(): MulticastObservableLike<T>;
    onSubscribe<T>(f: Factory<DisposableLike>): ObservableOperatorWithSideEffects<T, T>;
    onSubscribe<T>(f: Factory<SideEffect1<Optional<Error>>>): ObservableOperatorWithSideEffects<T, T>;
    onSubscribe<T>(f: SideEffect): ObservableOperatorWithSideEffects<T, T>;
    pairwise<T>(): PureStatefulObservableOperator<T, Tuple2<T, T>>;
    reduce<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): Function1<RunnableLike<T>, TAcc>;
    repeat<T>(predicate: Predicate<number>): PureStatefulObservableOperator<T, T, DeferredObservableLike<T>>;
    repeat<T>(count: number): PureStatefulObservableOperator<T, T, DeferredObservableLike<T>>;
    repeat<T>(): PureStatefulObservableOperator<T, T, DeferredObservableLike<T>>;
    retry<T>(shouldRetry?: (count: number, error: Error) => boolean): PureStatefulObservableOperator<T, T, DeferredObservableLike<T>>;
    run<T>(options?: {
        readonly backpressureStrategy: BackpressureStrategy;
        readonly capacity?: number;
    }): SideEffect1<RunnableLike<T>>;
    scan<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): PureStatefulObservableOperator<T, TAcc>;
    scanMany<T, TAcc>(scanner: Function2<TAcc, T, PureRunnableLike<TAcc>>, initialValue: Factory<TAcc>): PureStatefulObservableOperator<T, TAcc>;
    scanMany<T, TAcc>(scanner: Function2<TAcc, T, PureRunnableLike<TAcc>>, initialValue: Factory<TAcc>, options: {
        readonly innerType: typeof PureRunnableType;
    }): PureStatefulObservableOperator<T, TAcc>;
    scanMany<T, TAcc>(scanner: Function2<TAcc, T, RunnableLike<TAcc>>, initialValue: Factory<TAcc>, options: {
        readonly innerType: typeof RunnableWithSideEffectsType;
    }): ObservableOperatorWithSideEffects<T, TAcc>;
    scanMany<T, TAcc>(scanner: Function2<TAcc, T, PureDeferredObservableLike<TAcc>>, initialValue: Factory<TAcc>, options: {
        readonly innerType: typeof PureDeferredObservableType;
    }): DeferringObservableOperator<T, TAcc>;
    scanMany<T, TAcc>(scanner: Function2<TAcc, T, DeferredObservableLike<TAcc>>, initialValue: Factory<TAcc>, options: {
        readonly innerType: typeof DeferredObservableWithSideEffectsType;
    }): Function1<ObservableLike<T>, DeferredObservableWithSideEffectsLike<TAcc>>;
    skipFirst<T>(options?: {
        readonly count?: number;
    }): PureStatefulObservableOperator<T, T>;
    startWith<T>(value: T, ...values: readonly T[]): PureStatefulObservableOperator<T, T>;
    subscribe<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
    }): Function1<ObservableLike<T>, DisposableLike>;
    subscribeOn<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
    }): <TObservableIn extends ObservableLike<T>>(observable: TObservableIn) => TObservableIn extends PureDeferredObservableLike<T> ? PureDeferredObservableLike<T> : TObservableIn extends MulticastObservableLike<T> ? MulticastObservableLike<T> : TObservableIn extends RunnableWithSideEffectsLike<T> ? DeferredObservableWithSideEffectsLike<T> : TObservableIn extends DeferredObservableWithSideEffectsLike<T> ? DeferredObservableWithSideEffectsLike<T> : TObservableIn extends DeferredObservableLike<T> ? DeferredObservableLike<T> : ObservableLike<T>;
    switchAll<T>(): PureStatefulObservableOperator<PureRunnableLike<T>, T>;
    switchAll<T>(options: {
        readonly innerType: typeof PureRunnableType;
    }): PureStatefulObservableOperator<PureRunnableLike<T>, T>;
    switchAll<T>(options: {
        readonly innerType: typeof RunnableWithSideEffectsType;
    }): ObservableOperatorWithSideEffects<RunnableLike<T>, T>;
    switchAll<T>(options: {
        readonly innerType: typeof PureDeferredObservableType;
    }): DeferringObservableOperator<PureDeferredObservableLike<T>, T>;
    switchAll<T>(options: {
        readonly innerType: typeof DeferredObservableWithSideEffectsType;
    }): Function1<ObservableLike<DeferredObservableLike<T>>, DeferredObservableWithSideEffectsLike<T>>;
    switchMap<TA, TB>(selector: Function1<TA, PureRunnableLike<TB>>): PureStatefulObservableOperator<TA, TB>;
    switchMap<TA, TB>(selector: Function1<TA, PureRunnableLike<TB>>, options: {
        readonly innerType: typeof PureRunnableType;
    }): PureStatefulObservableOperator<TA, TB>;
    switchMap<TA, TB>(selector: Function1<TA, RunnableLike<TB>>, options: {
        readonly innerType: typeof RunnableWithSideEffectsType;
    }): ObservableOperatorWithSideEffects<TA, TB>;
    switchMap<TA, TB>(selector: Function1<TA, PureDeferredObservableLike<TB>>, options: {
        readonly innerType: typeof PureDeferredObservableType;
    }): DeferringObservableOperator<TA, TB>;
    switchMap<TA, TB>(selector: Function1<TA, DeferredObservableLike<TB>>, options: {
        readonly innerType: typeof DeferredObservableWithSideEffectsType;
    }): Function1<ObservableLike<TA>, DeferredObservableWithSideEffectsLike<TB>>;
    takeFirst<T>(options?: {
        readonly count?: number;
    }): PureStatefulObservableOperator<T, T>;
    takeLast<T>(options?: {
        readonly count?: number;
    }): PureStatefulObservableOperator<T, T>;
    takeUntil<T>(notifier: PureRunnableLike): PureStatefulObservableOperator<T, T>;
    takeUntil<T>(notifier: RunnableWithSideEffectsLike): ObservableOperatorWithSideEffects<T, T>;
    takeUntil<T>(notifier: DeferredObservableWithSideEffectsLike): Function1<ObservableLike<T>, DeferredObservableWithSideEffectsLike<T>>;
    takeUntil<T>(notifier: MulticastObservableLike): DeferringObservableOperator<T, T>;
    takeWhile<T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): PureStatefulObservableOperator<T, T>;
    throttle<T>(duration: number, options?: {
        readonly mode?: ThrottleMode;
    }): PureStatefulObservableOperator<T, T>;
    throwIfEmpty<T>(factory: Factory<unknown>, options?: undefined): PureStatefulObservableOperator<T, T>;
    throws<T>(options?: {
        readonly raise?: Factory<unknown>;
        readonly delay?: number;
    }): PureRunnableLike<T>;
    toEventSource<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
    }): Function1<ObservableLike<T>, EventSourceLike<T>>;
    toReadonlyArray<T>(): Function1<RunnableLike<T>, ReadonlyArray<T>>;
    toReadonlyArrayAsync<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
    }): Function1<ObservableLike<T>, Promise<ReadonlyArray<T>>>;
    withCurrentTime<TA, TB>(selector: Function2<number, TA, TB>): PureStatefulObservableOperator<TA, TB>;
    withLatestFrom<TA, TB, T>(other: PureRunnableLike<TB>, selector: Function2<TA, TB, T>): PureStatefulObservableOperator<TA, T>;
    withLatestFrom<TA, TB, T>(other: RunnableWithSideEffectsLike<TB>, selector: Function2<TA, TB, T>): ObservableOperatorWithSideEffects<TA, T>;
    withLatestFrom<TA, TB, T>(other: DeferredObservableWithSideEffectsLike<TB>, selector: Function2<TA, TB, T>): Function1<ObservableLike<TA>, DeferredObservableWithSideEffectsLike<T>>;
    withLatestFrom<TA, TB, T>(other: MulticastObservableLike<TB>, selector: Function2<TA, TB, T>): DeferringObservableOperator<TA, T>;
    zipLatest<TA, TB>(a: PureRunnableLike<TA>, b: PureRunnableLike<TB>): PureRunnableLike<Tuple2<TA, TB>>;
    zipLatest<TA, TB, TC>(a: PureRunnableLike<TA>, b: PureRunnableLike<TB>, c: PureRunnableLike<TC>): PureRunnableLike<Tuple3<TA, TB, TC>>;
    zipLatest<TA, TB, TC, TD>(a: PureRunnableLike<TA>, b: PureRunnableLike<TB>, c: PureRunnableLike<TC>, d: PureRunnableLike<TD>): PureRunnableLike<Tuple4<TA, TB, TC, TD>>;
    zipLatest<TA, TB, TC, TD, TE>(a: PureRunnableLike<TA>, b: PureRunnableLike<TB>, c: PureRunnableLike<TC>, d: PureRunnableLike<TD>, e: PureRunnableLike<TE>): PureRunnableLike<Tuple5<TA, TB, TC, TD, TE>>;
    zipLatest<TA, TB, TC, TD, TE, TF>(a: PureRunnableLike<TA>, b: PureRunnableLike<TB>, c: PureRunnableLike<TC>, d: PureRunnableLike<TD>, e: PureRunnableLike<TE>, f: PureRunnableLike<TF>): PureRunnableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG>(a: PureRunnableLike<TA>, b: PureRunnableLike<TB>, c: PureRunnableLike<TC>, d: PureRunnableLike<TD>, e: PureRunnableLike<TE>, f: PureRunnableLike<TF>, g: PureRunnableLike<TG>): PureRunnableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: PureRunnableLike<TA>, b: PureRunnableLike<TB>, c: PureRunnableLike<TC>, d: PureRunnableLike<TD>, e: PureRunnableLike<TE>, f: PureRunnableLike<TF>, g: PureRunnableLike<TG>, h: PureRunnableLike<TH>): PureRunnableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: PureRunnableLike<TA>, b: PureRunnableLike<TB>, c: PureRunnableLike<TC>, d: PureRunnableLike<TD>, e: PureRunnableLike<TE>, f: PureRunnableLike<TF>, g: PureRunnableLike<TG>, h: PureRunnableLike<TH>, i: PureRunnableLike<TI>): PureRunnableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    zipLatest<TA, TB>(a: RunnableLike<TA>, b: RunnableLike<TB>): RunnableWithSideEffectsLike<Tuple2<TA, TB>>;
    zipLatest<TA, TB, TC>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>): RunnableWithSideEffectsLike<Tuple3<TA, TB, TC>>;
    zipLatest<TA, TB, TC, TD>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>): RunnableWithSideEffectsLike<Tuple4<TA, TB, TC, TD>>;
    zipLatest<TA, TB, TC, TD, TE>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>): RunnableWithSideEffectsLike<Tuple5<TA, TB, TC, TD, TE>>;
    zipLatest<TA, TB, TC, TD, TE, TF>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>): RunnableWithSideEffectsLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>): RunnableWithSideEffectsLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>, h: RunnableLike<TH>): RunnableWithSideEffectsLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>, h: RunnableLike<TH>, i: RunnableLike<TI>): RunnableWithSideEffectsLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
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
export declare const animate: Signature["animate"];
export declare const backpressureStrategy: Signature["backpressureStrategy"];
export declare const buffer: Signature["buffer"];
export declare const catchError: Signature["catchError"];
export declare const combineLatest: Signature["combineLatest"];
export declare const computeDeferred: Signature["computeDeferred"];
export declare const computeRunnable: Signature["computeRunnable"];
export declare const concat: Signature["concat"];
export declare const concatAll: Signature["concatAll"];
export declare const concatMany: Signature["concatMany"];
export declare const concatMap: Signature["concatMap"];
export declare const concatWith: Signature["concatWith"];
export declare const create: Signature["create"];
export declare const currentTime: Signature["currentTime"];
export declare const debug: Signature["debug"];
export declare const decodeWithCharset: Signature["decodeWithCharset"];
export declare const defer: Signature["defer"];
export declare const dispatchTo: Signature["dispatchTo"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const empty: Signature["empty"];
export declare const encodeUtf8: Signature["encodeUtf8"];
export declare const endWith: Signature["endWith"];
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
export declare const fromEnumerable: Signature["fromEnumerable"];
export declare const fromEventSource: Signature["fromEventSource"];
export declare const fromIterable: Signature["fromIterable"];
export declare const fromPromise: Signature["fromPromise"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const fromStore: Signature["fromStore"];
export declare const fromValue: Signature["fromValue"];
export declare const generate: Signature["generate"];
export declare const ignoreElements: Signature["ignoreElements"];
export declare const keep: Signature["keep"];
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
export declare const onSubscribe: Signature["onSubscribe"];
export declare const pairwise: Signature["pairwise"];
export declare const reduce: Signature["reduce"];
export declare const repeat: Signature["repeat"];
export declare const retry: Signature["retry"];
export declare const run: Signature["run"];
export declare const scan: Signature["scan"];
export declare const scanMany: Signature["scanMany"];
export declare const skipFirst: Signature["skipFirst"];
export declare const startWith: Signature["startWith"];
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
export declare const throws: Signature["throws"];
export declare const toEventSource: Signature["toEventSource"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
export declare const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"];
export declare const withCurrentTime: Signature["withCurrentTime"];
export declare const withLatestFrom: Signature["withLatestFrom"];
export declare const zipLatest: Signature["zipLatest"];
