import { EnumerableLike } from "../collections.js";
import { Computation, Computation_T, Computation_type, PureComputationModule } from "../computations.js";
import { DeferredObservableLike, DeferredSideEffectsObservableLike, DispatcherLike, FlowableLike, MulticastObservableLike, ObservableLike, ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObserverLike, PureObservableLike, PureRunnableLike, ReplayObservableLike, RunnableLike, RunnableWithSideEffectsLike, SchedulerLike } from "../concurrent.js";
import { EventSourceLike, StoreLike } from "../events.js";
import { Equality, Factory, Function1, Function2, Optional, Predicate, Reducer, SideEffect, SideEffect1, Tuple2, Tuple3, Tuple4, Tuple5, Tuple6, Tuple7, Tuple8, Tuple9 } from "../functions.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy } from "../utils.js";
export type PureObservableOperator<TIn, TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: TObservableIn) => TObservableIn extends PureRunnableLike<TIn> ? PureRunnableLike<TOut> : TObservableIn extends RunnableWithSideEffectsLike<TIn> ? RunnableWithSideEffectsLike<TOut> : TObservableIn extends RunnableLike<TIn> ? RunnableLike<TOut> : TObservableIn extends DeferredSideEffectsObservableLike<TIn> ? DeferredSideEffectsObservableLike<TOut> : TObservableIn extends DeferredObservableLike<TIn> ? DeferredObservableLike<TOut> : TObservableIn extends MulticastObservableLike<TIn> ? MulticastObservableLike<TOut> : ObservableLike<TOut>;
export type PureDeferredSideEffectsObservableOperator<TIn, TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: TObservableIn) => TObservableIn extends PureRunnableLike<TIn> ? PureRunnableLike<TOut> : TObservableIn extends RunnableWithSideEffectsLike<TIn> ? RunnableWithSideEffectsLike<TOut> : TObservableIn extends DeferredSideEffectsObservableLike<TIn> ? DeferredSideEffectsObservableLike<TOut> : never;
export type ObservableOperatorWithSideEffects<TIn, TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: TObservableIn) => TObservableIn extends RunnableLike<TIn> ? RunnableWithSideEffectsLike<TOut> : TObservableIn extends DeferredSideEffectsObservableLike<TIn> | MulticastObservableLike<TIn> ? DeferredSideEffectsObservableLike<TOut> : ObservableLike<TOut>;
export type DeferredSideEffectsObservableOperator<TIn, TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: TObservableIn) => DeferredSideEffectsObservableLike<TOut>;
export type MulticastObservableOperator<TIn, TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: TObservableIn) => TObservableIn extends MulticastObservableLike<TIn> ? MulticastObservableLike<TOut> : DeferredSideEffectsObservableLike<TOut>;
interface Flatten {
    flatten<T>(options: {
        readonly [ObservableLike_isDeferred]: true;
        readonly [ObservableLike_isPure]: true;
        readonly [ObservableLike_isRunnable]: true;
    }): Function1<PureRunnableLike<PureRunnableLike<T>>, PureRunnableLike<T>>;
    flatten<T>(options: {
        readonly [ObservableLike_isDeferred]: true;
        readonly [ObservableLike_isPure]: false;
        readonly [ObservableLike_isRunnable]: true;
    }): Function1<RunnableLike<RunnableLike<T>>, RunnableWithSideEffectsLike<T>>;
    flatten<T>(options: {
        readonly [ObservableLike_isDeferred]: true;
        readonly [ObservableLike_isPure]: boolean;
        readonly [ObservableLike_isRunnable]: boolean;
    }): Function1<ObservableLike<DeferredObservableLike<T>>, DeferredSideEffectsObservableLike<T>>;
    flatten<T>(): Function1<ObservableLike<DeferredObservableLike<T>>, DeferredSideEffectsObservableLike<T>>;
}
interface FlatMap {
    flatMap<TA, TB>(selector: Function1<TA, PureRunnableLike<TB>>, options: {
        readonly [ObservableLike_isDeferred]: true;
        readonly [ObservableLike_isPure]: true;
        readonly [ObservableLike_isRunnable]: true;
    }): Function1<PureRunnableLike<TA>, PureRunnableLike<TB>>;
    flatMap<TA, TB>(selector: Function1<TA, RunnableLike<TB>>, options: {
        readonly [ObservableLike_isDeferred]: true;
        readonly [ObservableLike_isPure]: false;
        readonly [ObservableLike_isRunnable]: true;
    }): Function1<RunnableLike<TA>, RunnableWithSideEffectsLike<TB>>;
    flatMap<TA, TB>(selector: Function1<TA, DeferredObservableLike<TB>>, options: {
        readonly [ObservableLike_isDeferred]: boolean;
        readonly [ObservableLike_isPure]: boolean;
        readonly [ObservableLike_isRunnable]: boolean;
    }): Function1<ObservableLike<TA>, DeferredSideEffectsObservableLike<TB>>;
    flatMap<TA, TB>(selector: Function1<TA, DeferredObservableLike<TB>>): Function1<ObservableLike<TA>, DeferredSideEffectsObservableLike<TB>>;
}
export interface ObservableComputation extends Computation {
    readonly [Computation_type]?: ObservableLike<this[typeof Computation_T]>;
}
export interface PureRunnableComputation extends Computation {
    readonly [Computation_type]?: PureRunnableLike<this[typeof Computation_T]>;
}
export interface RunnableWithSideEffectsComputation extends Computation {
    readonly [Computation_type]?: RunnableWithSideEffectsLike<this[typeof Computation_T]>;
}
export interface DeferredSideEffectsObservableComputation extends Computation {
    readonly [Computation_type]?: DeferredSideEffectsObservableLike<this[typeof Computation_T]>;
}
export interface MulticastObservableComputation extends Computation {
    readonly [Computation_type]?: MulticastObservableLike<this[typeof Computation_T]>;
}
export type Type = ObservableComputation;
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
/**
 * @noInheritDoc
 */
export interface ObservableModule extends PureComputationModule<ObservableComputation>, PureComputationModule<PureRunnableComputation> {
    animate<T = number>(configs: Animation<T> | readonly Animation<T>[]): PureRunnableLike<T>;
    backpressureStrategy<T>(capacity: number, backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy]): PureObservableOperator<T, T>;
    buffer<T>(options?: {
        readonly count?: number;
    }): PureObservableOperator<T, readonly T[]>;
    catchError<T>(onError: SideEffect1<Error>): ObservableOperatorWithSideEffects<T, T>;
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
    combineLatest<TA, TB>(a: PureObservableLike<TA>, b: PureObservableLike<TB>): MulticastObservableLike<Tuple2<TA, TB>>;
    combineLatest<TA, TB, TC>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>): MulticastObservableLike<Tuple3<TA, TB, TC>>;
    combineLatest<TA, TB, TC, TD>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>): MulticastObservableLike<Tuple4<TA, TB, TC, TD>>;
    combineLatest<TA, TB, TC, TD, TE>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>): MulticastObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
    combineLatest<TA, TB, TC, TD, TE, TF>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>): MulticastObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>): MulticastObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>, h: PureObservableLike<TH>): MulticastObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>, h: PureObservableLike<TH>, i: PureObservableLike<TI>): MulticastObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    combineLatest<TA, TB>(a: ObservableLike<TA>, b: ObservableLike<TB>): DeferredSideEffectsObservableLike<Tuple2<TA, TB>>;
    combineLatest<TA, TB, TC>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>): DeferredSideEffectsObservableLike<Tuple3<TA, TB, TC>>;
    combineLatest<TA, TB, TC, TD>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>): DeferredSideEffectsObservableLike<Tuple4<TA, TB, TC, TD>>;
    combineLatest<TA, TB, TC, TD, TE>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>): DeferredSideEffectsObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
    combineLatest<TA, TB, TC, TD, TE, TF>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>): DeferredSideEffectsObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>): DeferredSideEffectsObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>, h: ObservableLike<TH>): DeferredSideEffectsObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>, h: ObservableLike<TH>, i: ObservableLike<TI>): DeferredSideEffectsObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    computeDeferred<T>(computation: Factory<T>, options?: {
        readonly mode?: "batched" | "combine-latest";
    }): DeferredSideEffectsObservableLike<T>;
    /**
     */
    computeRunnable<T>(computation: Factory<T>, options?: {
        readonly mode?: "batched" | "combine-latest";
    }): RunnableWithSideEffectsLike<T>;
    concat<T>(fst: PureRunnableLike<T>, snd: PureRunnableLike<T>, ...tail: readonly PureRunnableLike<T>[]): PureRunnableLike<T>;
    concat<T>(fst: RunnableLike<T>, snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): RunnableWithSideEffectsLike<T>;
    concat<T>(fst: DeferredObservableLike<T>, snd: DeferredObservableLike<T>, ...tail: readonly DeferredObservableLike<T>[]): DeferredSideEffectsObservableLike<T>;
    concat<T>(fst: MulticastObservableLike<T>, snd: DeferredObservableLike<T>, ...tail: readonly DeferredObservableLike[]): MulticastObservableLike<T>;
    concatAll: Flatten["flatten"];
    concatMany<T>(observables: readonly PureRunnableLike<T>[]): PureRunnableLike<T>;
    concatMany<T>(observables: readonly RunnableLike<T>[]): RunnableWithSideEffectsLike<T>;
    concatMany<T>(observables: readonly DeferredObservableLike[]): DeferredSideEffectsObservableLike<T>;
    concatMany<T>(observables: readonly [
        MulticastObservableLike<T>,
        ...DeferredObservableLike[]
    ]): MulticastObservableLike<T>;
    concatMap: FlatMap["flatMap"];
    concatWith<T>(snd: PureRunnableLike<T>, ...tail: readonly PureRunnableLike<T>[]): PureObservableOperator<T, T>;
    concatWith<T>(snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): <TObservable extends ObservableLike<T>>(obs: TObservable) => TObservable extends MulticastObservableLike<T> ? MulticastObservableLike<T> : TObservable extends RunnableLike<T> ? RunnableWithSideEffectsLike<T> : TObservable extends DeferredSideEffectsObservableLike<T> ? DeferredSideEffectsObservableLike<T> : ObservableLike<T>;
    concatWith<T>(snd: DeferredObservableLike<T>, ...tail: readonly DeferredObservableLike<T>[]): <TObservable extends ObservableLike<T>>(obs: TObservable) => TObservable extends MulticastObservableLike<T> ? MulticastObservableLike<T> : TObservable extends DeferredObservableLike<T> ? DeferredSideEffectsObservableLike<T> : ObservableLike<T>;
    create<T>(f: SideEffect1<ObserverLike<T>>): DeferredSideEffectsObservableLike<T>;
    currentTime: PureRunnableLike<number>;
    decodeWithCharset(options?: {
        readonly charset?: string;
    }): PureObservableOperator<ArrayBuffer, string>;
    defer<T>(f: Factory<MulticastObservableLike<T>>): DeferredSideEffectsObservableLike<T>;
    dispatchTo<T>(dispatcher: DispatcherLike<T>): ObservableOperatorWithSideEffects<T, T>;
    distinctUntilChanged<T>(options?: {
        readonly equality?: Equality<T>;
    }): PureObservableOperator<T, T>;
    empty<T>(options?: {
        readonly delay: number;
    }): PureRunnableLike<T>;
    encodeUtf8(): PureObservableOperator<string, Uint8Array>;
    endWith<T>(value: T, ...values: readonly T[]): PureObservableOperator<T, T>;
    enqueue<T>(queue: QueueableLike<T>): ObservableOperatorWithSideEffects<T, T>;
    exhaust: Flatten["flatten"];
    exhaustMap: FlatMap["flatMap"];
    firstAsync<T>(): Function1<ObservableLike<T>, Promise<Optional<T>>>;
    firstAsync<T>(scheduler: SchedulerLike, options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    }): Function1<ObservableLike<T>, Promise<Optional<T>>>;
    flatMapAsync<TA, TB>(f: Function2<TA, AbortSignal, Promise<TB>>): <TObservableIn extends ObservableLike<TA>>(observable: TObservableIn) => TObservableIn extends MulticastObservableLike ? MulticastObservableLike<TB> : DeferredSideEffectsObservableLike<TB>;
    flatMapIterable<TA, TB>(selector: Function1<TA, Iterable<TB>>): ObservableOperatorWithSideEffects<TA, TB>;
    flow<T>(): Function1<RunnableLike<T>, FlowableLike<T>>;
    forEach<T>(effect: SideEffect1<T>): ObservableOperatorWithSideEffects<T, T>;
    forkMerge<TOut, TObservableIn extends ObservableLike, TObservableOut extends ObservableLike<TOut>>(fst: Function1<TObservableIn, TObservableOut>, snd: Function1<TObservableIn, TObservableOut>, ...tail: readonly Function1<TObservableIn, TObservableOut>[]): TObservableIn extends PureRunnableLike ? TObservableOut extends PureRunnableLike<TOut> ? Function1<TObservableIn, PureRunnableLike<TOut>> : TObservableOut extends RunnableLike<TOut> ? Function1<TObservableIn, RunnableWithSideEffectsLike<TOut>> : TObservableOut extends DeferredObservableLike<TOut> ? Function1<TObservableIn, DeferredSideEffectsObservableLike<TOut>> : Function1<TObservableIn, DeferredSideEffectsObservableLike<TOut>> : TObservableIn extends RunnableWithSideEffectsLike ? TObservableOut extends RunnableLike<TOut> ? Function1<TObservableIn, RunnableWithSideEffectsLike<TOut>> : TObservableOut extends DeferredObservableLike<TOut> ? Function1<TObservableIn, DeferredSideEffectsObservableLike<TOut>> : Function1<TObservableIn, DeferredSideEffectsObservableLike<TOut>> : TObservableIn extends DeferredSideEffectsObservableLike ? TObservableOut extends DeferredObservableLike<TOut> ? Function1<TObservableIn, DeferredSideEffectsObservableLike<TOut>> : Function1<TObservableIn, DeferredSideEffectsObservableLike<TOut>> : TObservableIn extends MulticastObservableLike ? TObservableOut extends DeferredObservableLike<TOut> ? Function1<TObservableIn, DeferredSideEffectsObservableLike<TOut>> : Function1<TObservableIn, DeferredSideEffectsObservableLike<TOut>> : never;
    fromAsyncFactory<T>(): Function1<Function1<AbortSignal, Promise<T>>, DeferredSideEffectsObservableLike<T>>;
    fromAsyncIterable<T>(): Function1<AsyncIterable<T>, DeferredSideEffectsObservableLike<T>>;
    fromEnumerable<T>(options?: {
        readonly delay: number;
        readonly delayStart?: boolean;
    }): Function1<EnumerableLike<T>, PureRunnableLike<T>>;
    fromEventSource<T>(): Function1<EventSourceLike<T>, MulticastObservableLike<T>>;
    fromFactory<T>(): Function1<Factory<T>, PureRunnableLike<T>>;
    fromIterable<T>(options?: {
        readonly delay: number;
        readonly delayStart?: boolean;
    }): Function1<Iterable<T>, RunnableWithSideEffectsLike<T>>;
    fromOptional<T>(options?: {
        readonly delay: number;
    }): Function1<Optional<T>, PureRunnableLike<T>>;
    fromPromise<T>(): Function1<Promise<T>, MulticastObservableLike<T>>;
    fromReadonlyArray<T>(options?: {
        readonly delay: number;
        readonly delayStart?: boolean;
    }): Function1<ReadonlyArray<T>, PureRunnableLike<T>>;
    fromStore<T>(): Function1<StoreLike<T>, MulticastObservableLike<T>>;
    fromValue<T>(options?: {
        readonly delay: number;
    }): Function1<T, PureRunnableLike<T>>;
    ignoreElements<T>(): PureObservableOperator<unknown, T>;
    isDeferred<T = unknown>(obs: ObservableLike<T>): obs is DeferredObservableLike<T>;
    isPure<T = unknown>(obs: ObservableLike<T>): obs is PureObservableLike<T>;
    isReplayObservable<T = unknown>(o: ObservableLike<T>): o is ReplayObservableLike<T>;
    isRunnable<T = unknown>(obs: ObservableLike<T>): obs is RunnableLike<T>;
    keep<T>(predicate: Predicate<T>): PureObservableOperator<T, T>;
    lastAsync<T>(): Function1<ObservableLike<T>, Promise<Optional<T>>>;
    lastAsync<T>(scheduler: SchedulerLike, options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    }): Function1<ObservableLike<T>, Promise<Optional<T>>>;
    map<TA, TB>(selector: Function1<TA, TB>): PureObservableOperator<TA, TB>;
    merge<T>(fst: PureRunnableLike<T>, snd: PureRunnableLike<T>, ...tail: readonly PureRunnableLike<T>[]): PureRunnableLike<T>;
    merge<T>(fst: RunnableLike<T>, snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): RunnableWithSideEffectsLike<T>;
    merge<T>(fst: PureObservableLike<T>, snd: PureObservableLike<T>, ...tail: readonly PureObservableLike<T>[]): MulticastObservableLike<T>;
    merge<T>(fst: ObservableLike<T>, snd: ObservableLike<T>, ...tail: readonly ObservableLike<T>[]): DeferredSideEffectsObservableLike<T>;
    mergeAll<T>(options: {
        readonly [ObservableLike_isDeferred]: true;
        readonly [ObservableLike_isPure]: true;
        readonly [ObservableLike_isRunnable]: true;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
        readonly concurrency?: number;
    }): Function1<PureRunnableLike<PureRunnableLike<T>>, PureRunnableLike<T>>;
    mergeAll<T>(options: {
        readonly [ObservableLike_isDeferred]: true;
        readonly [ObservableLike_isPure]: false;
        readonly [ObservableLike_isRunnable]: true;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
        readonly concurrency?: number;
    }): Function1<RunnableLike<RunnableLike<T>>, RunnableWithSideEffectsLike<T>>;
    mergeAll<T>(options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
        readonly concurrency?: number;
    }): Function1<ObservableLike<DeferredObservableLike<T>>, DeferredSideEffectsObservableLike<T>>;
    mergeMany<T>(observables: readonly PureRunnableLike<T>[]): PureRunnableLike<T>;
    mergeMany<T>(observables: readonly RunnableLike<T>[]): RunnableWithSideEffectsLike<T>;
    mergeMany<T>(observables: readonly PureObservableLike<T>[]): MulticastObservableLike<T>;
    mergeMany<T>(observables: readonly ObservableLike<T>[]): DeferredSideEffectsObservableLike<T>;
    mergeMap<TA, TB>(selector: Function1<TA, PureRunnableLike<TB>>, options: {
        readonly [ObservableLike_isDeferred]: true;
        readonly [ObservableLike_isPure]: true;
        readonly [ObservableLike_isRunnable]: true;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
        readonly concurrency?: number;
    }): Function1<PureRunnableLike<TA>, PureRunnableLike<TB>>;
    mergeMap<TA, TB>(selector: Function1<TA, RunnableLike<TB>>, options: {
        readonly [ObservableLike_isDeferred]: true;
        readonly [ObservableLike_isPure]: false;
        readonly [ObservableLike_isRunnable]: true;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
        readonly concurrency?: number;
    }): Function1<RunnableLike<TA>, RunnableWithSideEffectsLike<TB>>;
    mergeMap<TA, TB>(selector: Function1<TA, DeferredObservableLike<TB>>, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
        readonly concurrency?: number;
    }): Function1<ObservableLike<TA>, DeferredSideEffectsObservableLike<TB>>;
    mergeWith<T>(snd: PureRunnableLike<T>, ...tail: readonly PureRunnableLike<T>[]): PureObservableOperator<T, T>;
    mergeWith<T>(snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): ObservableOperatorWithSideEffects<T, T>;
    mergeWith<T>(snd: PureObservableLike<T>, ...tail: readonly PureObservableLike<T>[]): <TObservableIn>(observableIn: TObservableIn) => TObservableIn extends PureObservableLike<T> ? MulticastObservableLike<T> : DeferredSideEffectsObservableLike<T>;
    mergeWith<T>(snd: ObservableLike<T>, ...tail: readonly ObservableLike<T>[]): Function1<ObservableLike<T>, DeferredSideEffectsObservableLike<T>>;
    /**
     */
    multicast<T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
        readonly replay?: number;
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    }): Function1<RunnableWithSideEffectsLike<T> | DeferredSideEffectsObservableLike<T>, ReplayObservableLike<T> & DisposableLike>;
    never<T>(): MulticastObservableLike<T>;
    onSubscribe<T>(f: Factory<DisposableLike>): ObservableOperatorWithSideEffects<T, T>;
    onSubscribe<T>(f: Factory<SideEffect1<Optional<Error>>>): ObservableOperatorWithSideEffects<T, T>;
    onSubscribe<T>(f: SideEffect): ObservableOperatorWithSideEffects<T, T>;
    pairwise<T>(): PureObservableOperator<T, Tuple2<T, T>>;
    reduce<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): Function1<RunnableLike<T>, TAcc>;
    repeat<T>(predicate: Predicate<number>): PureDeferredSideEffectsObservableOperator<T, T>;
    repeat<T>(count: number): PureDeferredSideEffectsObservableOperator<T, T>;
    repeat<T>(): PureDeferredSideEffectsObservableOperator<T, T>;
    retry<T>(shouldRetry?: (count: number, error: Error) => boolean): PureDeferredSideEffectsObservableOperator<T, T>;
    run<T>(options?: {
        readonly backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): SideEffect1<RunnableLike<T>>;
    scan<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): PureObservableOperator<T, TAcc>;
    scanMany<T, TAcc>(scanner: Function2<TAcc, T, DeferredObservableLike<TAcc>>, initialValue: Factory<TAcc>): Function1<ObservableLike<T>, DeferredSideEffectsObservableLike<TAcc>>;
    /**
     */
    share<T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
        readonly replay?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<DeferredObservableLike<T>, MulticastObservableLike<T>>;
    skipFirst<T>(options?: {
        readonly count?: number;
    }): PureObservableOperator<T, T>;
    spring(options?: {
        readonly stiffness?: number;
        readonly damping?: number;
        readonly precision?: number;
    }): PureRunnableLike<number>;
    startWith<T>(value: T, ...values: readonly T[]): PureObservableOperator<T, T>;
    switchAll: Flatten["flatten"];
    switchMap: FlatMap["flatMap"];
    subscribe<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<ObservableLike<T>, DisposableLike>;
    subscribeOn<T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): <TObservableIn extends ObservableLike<T>>(observable: TObservableIn) => TObservableIn extends MulticastObservableLike ? MulticastObservableLike<T> : DeferredSideEffectsObservableLike<T>;
    takeFirst<T>(options?: {
        readonly count?: number;
    }): PureObservableOperator<T, T>;
    takeLast<T>(options?: {
        readonly count?: number;
    }): PureObservableOperator<T, T>;
    takeUntil<T>(notifier: PureRunnableLike): PureObservableOperator<T, T>;
    takeUntil<T>(notifier: RunnableWithSideEffectsLike): ObservableOperatorWithSideEffects<T, T>;
    takeUntil<T>(notifier: DeferredSideEffectsObservableLike): DeferredSideEffectsObservableOperator<T, T>;
    takeUntil<T>(notifier: MulticastObservableLike): MulticastObservableOperator<T, T>;
    takeWhile<T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): PureObservableOperator<T, T>;
    throttle<T>(duration: number, options?: {
        readonly mode?: "first" | "last" | "interval";
    }): ObservableOperatorWithSideEffects<T, T>;
    throwIfEmpty<T>(factory: Factory<unknown>, options?: undefined): PureObservableOperator<T, T>;
    throws<T>(options?: {
        readonly delay?: number;
    }): RunnableWithSideEffectsLike<T>;
    throws<T>(options: {
        readonly raise: Factory<unknown>;
        readonly delay?: number;
    }): RunnableWithSideEffectsLike<T>;
    toEventSource<T>(): Function1<ObservableLike<T>, EventSourceLike<T>>;
    toEventSource<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<ObservableLike<T>, EventSourceLike<T>>;
    toReadonlyArray<T>(): Function1<RunnableLike<T>, ReadonlyArray<T>>;
    toReadonlyArrayAsync<T>(): Function1<ObservableLike<T>, Promise<ReadonlyArray<T>>>;
    toReadonlyArrayAsync<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<ObservableLike<T>, Promise<ReadonlyArray<T>>>;
    withCurrentTime<TA, TB>(selector: Function2<number, TA, TB>): PureObservableOperator<TA, TB>;
    withLatestFrom<TA, TB, T>(other: PureRunnableLike<TB>, selector: Function2<TA, TB, T>): PureObservableOperator<TA, T>;
    withLatestFrom<TA, TB, T>(other: RunnableWithSideEffectsLike<TB>, selector: Function2<TA, TB, T>): ObservableOperatorWithSideEffects<TA, T>;
    withLatestFrom<TA, TB, T>(other: DeferredSideEffectsObservableLike<TB>, selector: Function2<TA, TB, T>): DeferredSideEffectsObservableOperator<TA, T>;
    withLatestFrom<TA, TB, T>(other: MulticastObservableLike<TB>, selector: Function2<TA, TB, T>): Function1<ObservableLike<TA>, MulticastObservableLike<T>>;
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
    zipLatest<TA, TB>(a: PureObservableLike<TA>, b: PureObservableLike<TB>): MulticastObservableLike<Tuple2<TA, TB>>;
    zipLatest<TA, TB, TC>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>): MulticastObservableLike<Tuple3<TA, TB, TC>>;
    zipLatest<TA, TB, TC, TD>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>): MulticastObservableLike<Tuple4<TA, TB, TC, TD>>;
    zipLatest<TA, TB, TC, TD, TE>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>): MulticastObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
    zipLatest<TA, TB, TC, TD, TE, TF>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>): MulticastObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>): MulticastObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>, h: PureObservableLike<TH>): MulticastObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>, h: PureObservableLike<TH>, i: PureObservableLike<TI>): MulticastObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    zipLatest<TA, TB>(a: ObservableLike<TA>, b: ObservableLike<TB>): DeferredSideEffectsObservableLike<Tuple2<TA, TB>>;
    zipLatest<TA, TB, TC>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>): DeferredSideEffectsObservableLike<Tuple3<TA, TB, TC>>;
    zipLatest<TA, TB, TC, TD>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>): DeferredSideEffectsObservableLike<Tuple4<TA, TB, TC, TD>>;
    zipLatest<TA, TB, TC, TD, TE>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>): DeferredSideEffectsObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
    zipLatest<TA, TB, TC, TD, TE, TF>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>): DeferredSideEffectsObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>): DeferredSideEffectsObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>, h: ObservableLike<TH>): DeferredSideEffectsObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>, h: ObservableLike<TH>, i: ObservableLike<TI>): DeferredSideEffectsObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
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
export declare const flow: Signature["flow"];
export declare const forEach: Signature["forEach"];
export declare const forkMerge: Signature["forkMerge"];
export declare const fromAsyncFactory: Signature["fromAsyncFactory"];
export declare const fromAsyncIterable: Signature["fromAsyncIterable"];
export declare const fromEnumerable: Signature["fromEnumerable"];
export declare const fromEventSource: Signature["fromEventSource"];
export declare const fromFactory: Signature["fromFactory"];
export declare const fromIterable: Signature["fromIterable"];
export declare const fromOptional: Signature["fromOptional"];
export declare const fromPromise: Signature["fromPromise"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const fromStore: Signature["fromStore"];
export declare const fromValue: Signature["fromValue"];
export declare const ignoreElements: Signature["ignoreElements"];
export declare const isDeferred: Signature["isDeferred"];
export declare const isPure: Signature["isPure"];
export declare const isReplayObservable: Signature["isReplayObservable"];
export declare const isRunnable: Signature["isRunnable"];
export declare const keep: Signature["keep"];
export declare const lastAsync: Signature["lastAsync"];
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
export declare const share: Signature["share"];
export declare const skipFirst: Signature["skipFirst"];
export declare const spring: Signature["spring"];
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
export {};
