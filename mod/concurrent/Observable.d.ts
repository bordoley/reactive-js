import { Computation, Computation_T, Computation_type, PureComputationModule } from "../computations.js";
import { DeferredObservableLike, MulticastObservableLike, ObservableLike, ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObserverLike, RunnableLike, RunnableWithSideEffectsLike, SchedulerLike } from "../concurrent.js";
import { Equality, Factory, Function1, Function2, Optional, Predicate, Reducer, SideEffect, SideEffect1, Tuple2, Tuple3, Tuple4, Tuple5, Tuple6, Tuple7, Tuple8, Tuple9 } from "../functions.js";
import { EnumerableLike } from "../ix.js";
import { DispatcherLike } from "../rx.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy } from "../utils.js";
export type PureObservableOperator<TIn, TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: TObservableIn) => TObservableIn extends RunnableLike<TIn> ? RunnableLike<TOut> : TObservableIn extends RunnableWithSideEffectsLike<TIn> ? RunnableWithSideEffectsLike<TOut> : TObservableIn extends DeferredObservableLike<TIn> ? DeferredObservableLike<TOut> : TObservableIn extends MulticastObservableLike<TIn> ? MulticastObservableLike<TOut> : ObservableLike<TOut>;
export type ObservableOperatorWithSideEffects<TIn, TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: TObservableIn) => TObservableIn extends RunnableLike<TIn> | RunnableWithSideEffectsLike<TIn> ? RunnableWithSideEffectsLike<TOut> : TObservableIn extends DeferredObservableLike<TIn> | MulticastObservableLike<TIn> ? DeferredObservableLike<TOut> : ObservableLike<TOut>;
export type DeferredObservableOperator<TIn, TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: TObservableIn) => DeferredObservableLike<TOut>;
export type MulticastObservableOperator<TIn, TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: TObservableIn) => TObservableIn extends MulticastObservableLike<TIn> ? MulticastObservableLike<TOut> : DeferredObservableLike<TOut>;
export interface ObservableComputation extends Computation {
    readonly [Computation_type]?: ObservableLike<this[typeof Computation_T]>;
}
export interface RunnableComputation extends Computation {
    readonly [Computation_type]?: RunnableLike<this[typeof Computation_T]>;
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
 * @category Module
 */
export interface ObservableModule extends PureComputationModule<ObservableComputation>, PureComputationModule<RunnableComputation> {
    animate<T = number>(configs: Animation<T> | readonly Animation<T>[]): RunnableLike<T>;
    backpressureStrategy<T>(capacity: number, backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy]): PureObservableOperator<T, T>;
    buffer<T>(options?: {
        count?: number;
    }): PureObservableOperator<T, readonly T[]>;
    catchError<T>(onError: SideEffect1<Error>): ObservableOperatorWithSideEffects<T, T>;
    combineLatest<TA, TB>(a: RunnableLike<TA>, b: RunnableLike<TB>): RunnableLike<Tuple2<TA, TB>>;
    combineLatest<TA, TB, TC>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>): RunnableLike<Tuple3<TA, TB, TC>>;
    combineLatest<TA, TB, TC, TD>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>): RunnableLike<Tuple4<TA, TB, TC, TD>>;
    combineLatest<TA, TB, TC, TD, TE>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>): RunnableLike<Tuple5<TA, TB, TC, TD, TE>>;
    combineLatest<TA, TB, TC, TD, TE, TF>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>): RunnableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>): RunnableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>, h: RunnableLike<TH>): RunnableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>, h: RunnableLike<TH>, i: RunnableLike<TI>): RunnableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    combineLatest<TA, TB>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>): RunnableWithSideEffectsLike<Tuple2<TA, TB>>;
    combineLatest<TA, TB, TC>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>, c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC>): RunnableWithSideEffectsLike<Tuple3<TA, TB, TC>>;
    combineLatest<TA, TB, TC, TD>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>, c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC>, d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD>): RunnableWithSideEffectsLike<Tuple4<TA, TB, TC, TD>>;
    combineLatest<TA, TB, TC, TD, TE>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>, c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC>, d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD>, e: RunnableLike<TE> | RunnableWithSideEffectsLike<TE>): RunnableWithSideEffectsLike<Tuple5<TA, TB, TC, TD, TE>>;
    combineLatest<TA, TB, TC, TD, TE, TF>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>, c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC>, d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD>, e: RunnableLike<TE> | RunnableWithSideEffectsLike<TE>, f: RunnableLike<TF> | RunnableWithSideEffectsLike<TF>): RunnableWithSideEffectsLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>, c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC>, d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD>, e: RunnableLike<TE> | RunnableWithSideEffectsLike<TE>, f: RunnableLike<TF> | RunnableWithSideEffectsLike<TF>, g: RunnableLike<TG> | RunnableWithSideEffectsLike<TG>): RunnableWithSideEffectsLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>, c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC>, d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD>, e: RunnableLike<TE> | RunnableWithSideEffectsLike<TE>, f: RunnableLike<TF> | RunnableWithSideEffectsLike<TF>, g: RunnableLike<TG> | RunnableWithSideEffectsLike<TG>, h: RunnableLike<TH> | RunnableWithSideEffectsLike<TH>): RunnableWithSideEffectsLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>, c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC>, d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD>, e: RunnableLike<TE> | RunnableWithSideEffectsLike<TE>, f: RunnableLike<TF> | RunnableWithSideEffectsLike<TF>, g: RunnableLike<TG> | RunnableWithSideEffectsLike<TG>, h: RunnableLike<TH> | RunnableWithSideEffectsLike<TH>, i: RunnableLike<TI> | RunnableWithSideEffectsLike<TI>): RunnableWithSideEffectsLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    combineLatest<TA, TB>(a: RunnableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | MulticastObservableLike<TB>): MulticastObservableLike<Tuple2<TA, TB>>;
    combineLatest<TA, TB, TC>(a: RunnableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | MulticastObservableLike<TB>, c: RunnableLike<TC> | MulticastObservableLike<TC>): MulticastObservableLike<Tuple3<TA, TB, TC>>;
    combineLatest<TA, TB, TC, TD>(a: RunnableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | MulticastObservableLike<TB>, c: RunnableLike<TC> | MulticastObservableLike<TC>, d: RunnableLike<TD> | MulticastObservableLike<TD>): MulticastObservableLike<Tuple4<TA, TB, TC, TD>>;
    combineLatest<TA, TB, TC, TD, TE>(a: RunnableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | MulticastObservableLike<TB>, c: RunnableLike<TC> | MulticastObservableLike<TC>, d: RunnableLike<TD> | MulticastObservableLike<TD>, e: RunnableLike<TE> | MulticastObservableLike<TE>): MulticastObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
    combineLatest<TA, TB, TC, TD, TE, TF>(a: RunnableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | MulticastObservableLike<TB>, c: RunnableLike<TC> | MulticastObservableLike<TC>, d: RunnableLike<TD> | MulticastObservableLike<TD>, e: RunnableLike<TE> | MulticastObservableLike<TE>, f: RunnableLike<TF> | MulticastObservableLike<TF>): MulticastObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG>(a: RunnableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | MulticastObservableLike<TB>, c: RunnableLike<TC> | MulticastObservableLike<TC>, d: RunnableLike<TD> | MulticastObservableLike<TD>, e: RunnableLike<TE> | MulticastObservableLike<TE>, f: RunnableLike<TF> | MulticastObservableLike<TF>, g: RunnableLike<TG> | MulticastObservableLike<TG>): MulticastObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: RunnableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | MulticastObservableLike<TB>, c: RunnableLike<TC> | MulticastObservableLike<TC>, d: RunnableLike<TD> | MulticastObservableLike<TD>, e: RunnableLike<TE> | MulticastObservableLike<TE>, f: RunnableLike<TF> | MulticastObservableLike<TF>, g: RunnableLike<TG> | MulticastObservableLike<TG>, h: RunnableLike<TH> | MulticastObservableLike<TH>): MulticastObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: RunnableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | MulticastObservableLike<TB>, c: RunnableLike<TC> | MulticastObservableLike<TC>, d: RunnableLike<TD> | MulticastObservableLike<TD>, e: RunnableLike<TE> | MulticastObservableLike<TE>, f: RunnableLike<TF> | MulticastObservableLike<TF>, g: RunnableLike<TG> | MulticastObservableLike<TG>, h: RunnableLike<TH> | MulticastObservableLike<TH>, i: RunnableLike<TI> | MulticastObservableLike<TI>): MulticastObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    combineLatest<TA, TB>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA> | DeferredObservableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB> | DeferredObservableLike<TB> | MulticastObservableLike<TB>): DeferredObservableLike<Tuple2<TA, TB>>;
    combineLatest<TA, TB, TC>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA> | DeferredObservableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB> | DeferredObservableLike<TB> | MulticastObservableLike<TB>, c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC> | DeferredObservableLike<TC> | MulticastObservableLike<TC>): DeferredObservableLike<Tuple3<TA, TB, TC>>;
    combineLatest<TA, TB, TC, TD>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA> | DeferredObservableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB> | DeferredObservableLike<TB> | MulticastObservableLike<TB>, c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC> | DeferredObservableLike<TC> | MulticastObservableLike<TC>, d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD> | DeferredObservableLike<TD> | MulticastObservableLike<TD>): DeferredObservableLike<Tuple4<TA, TB, TC, TD>>;
    combineLatest<TA, TB, TC, TD, TE>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA> | DeferredObservableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB> | DeferredObservableLike<TB> | MulticastObservableLike<TB>, c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC> | DeferredObservableLike<TC> | MulticastObservableLike<TC>, d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD> | DeferredObservableLike<TD> | MulticastObservableLike<TD>, e: RunnableLike<TE> | RunnableWithSideEffectsLike<TE> | DeferredObservableLike<TE> | MulticastObservableLike<TE>): DeferredObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
    combineLatest<TA, TB, TC, TD, TE, TF>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA> | DeferredObservableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB> | DeferredObservableLike<TB> | MulticastObservableLike<TB>, c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC> | DeferredObservableLike<TC> | MulticastObservableLike<TC>, d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD> | DeferredObservableLike<TD> | MulticastObservableLike<TD>, e: RunnableLike<TE> | RunnableWithSideEffectsLike<TE> | DeferredObservableLike<TE> | MulticastObservableLike<TE>, f: RunnableLike<TF> | RunnableWithSideEffectsLike<TF> | DeferredObservableLike<TF> | MulticastObservableLike<TF>): DeferredObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA> | DeferredObservableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB> | DeferredObservableLike<TB> | MulticastObservableLike<TB>, c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC> | DeferredObservableLike<TC> | MulticastObservableLike<TC>, d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD> | DeferredObservableLike<TD> | MulticastObservableLike<TD>, e: RunnableLike<TE> | RunnableWithSideEffectsLike<TE> | DeferredObservableLike<TE> | MulticastObservableLike<TE>, f: RunnableLike<TF> | RunnableWithSideEffectsLike<TF> | DeferredObservableLike<TF> | MulticastObservableLike<TF>, g: RunnableLike<TG> | RunnableWithSideEffectsLike<TG> | DeferredObservableLike<TG> | MulticastObservableLike<TG>): DeferredObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA> | DeferredObservableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB> | DeferredObservableLike<TB> | MulticastObservableLike<TB>, c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC> | DeferredObservableLike<TC> | MulticastObservableLike<TC>, d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD> | DeferredObservableLike<TD> | MulticastObservableLike<TD>, e: RunnableLike<TE> | RunnableWithSideEffectsLike<TE> | DeferredObservableLike<TE> | MulticastObservableLike<TE>, f: RunnableLike<TF> | RunnableWithSideEffectsLike<TF> | DeferredObservableLike<TF> | MulticastObservableLike<TF>, g: RunnableLike<TG> | RunnableWithSideEffectsLike<TG> | DeferredObservableLike<TG> | MulticastObservableLike<TG>, h: RunnableLike<TH> | RunnableWithSideEffectsLike<TH> | DeferredObservableLike<TH> | MulticastObservableLike<TH>): DeferredObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA> | DeferredObservableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB> | DeferredObservableLike<TB> | MulticastObservableLike<TB>, c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC> | DeferredObservableLike<TC> | MulticastObservableLike<TC>, d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD> | DeferredObservableLike<TD> | MulticastObservableLike<TD>, e: RunnableLike<TE> | RunnableWithSideEffectsLike<TE> | DeferredObservableLike<TE> | MulticastObservableLike<TE>, f: RunnableLike<TF> | RunnableWithSideEffectsLike<TF> | DeferredObservableLike<TF> | MulticastObservableLike<TF>, g: RunnableLike<TG> | RunnableWithSideEffectsLike<TG> | DeferredObservableLike<TG> | MulticastObservableLike<TG>, h: RunnableLike<TH> | RunnableWithSideEffectsLike<TH> | DeferredObservableLike<TH> | MulticastObservableLike<TH>, i: RunnableLike<TI> | RunnableWithSideEffectsLike<TI> | DeferredObservableLike<TI> | MulticastObservableLike<TI>): DeferredObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    concat<T>(fst: RunnableLike<T>, snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): RunnableLike<T>;
    concat<T>(fst: RunnableLike<T> | RunnableWithSideEffectsLike<T>, snd: RunnableLike<T> | RunnableWithSideEffectsLike<T>, ...tail: readonly (RunnableLike<T> | RunnableWithSideEffectsLike<T>)[]): RunnableWithSideEffectsLike<T>;
    concat<T>(fst: RunnableLike<T> | RunnableWithSideEffectsLike<T> | DeferredObservableLike<T>, snd: RunnableLike<T> | RunnableWithSideEffectsLike<T> | DeferredObservableLike<T>, ...tail: readonly (RunnableLike<T> | RunnableWithSideEffectsLike<T> | DeferredObservableLike<T>)[]): DeferredObservableLike<T>;
    concat<T>(fst: MulticastObservableLike<T>, snd: RunnableLike<T> | RunnableWithSideEffectsLike<T> | DeferredObservableLike<T>, ...tail: readonly (RunnableLike<T> | RunnableWithSideEffectsLike<T> | DeferredObservableLike<T>)[]): MulticastObservableLike<T>;
    concatMany<T>(observables: readonly RunnableLike<T>[]): RunnableLike<T>;
    concatMany<T>(observables: readonly (RunnableLike<T> | RunnableWithSideEffectsLike<T>)[]): RunnableWithSideEffectsLike<T>;
    concatMany<T>(observables: readonly (RunnableLike<T> | RunnableWithSideEffectsLike<T> | DeferredObservableLike<T>)[]): DeferredObservableLike<T>;
    concatMany<T>(observables: readonly [
        MulticastObservableLike<T>,
        ...(RunnableLike<T> | RunnableWithSideEffectsLike<T> | DeferredObservableLike<T>)[]
    ]): MulticastObservableLike<T>;
    concatWith<T>(snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): PureObservableOperator<T, T>;
    concatWith<T>(snd: RunnableLike<T> | RunnableWithSideEffectsLike<T>, ...tail: readonly (RunnableLike<T> | RunnableWithSideEffectsLike<T>)[]): <TObservable extends ObservableLike<T>>(obs: TObservable) => TObservable extends MulticastObservableLike<T> ? MulticastObservableLike<T> : TObservable extends RunnableLike<T> | RunnableWithSideEffectsLike<T> ? RunnableWithSideEffectsLike<T> : TObservable extends DeferredObservableLike<T> ? DeferredObservableLike<T> : ObservableLike<T>;
    concatWith<T>(snd: RunnableLike<T> | RunnableWithSideEffectsLike<T> | DeferredObservableLike<T>, ...tail: readonly (RunnableLike<T> | RunnableWithSideEffectsLike<T> | DeferredObservableLike<T>)[]): <TObservable extends ObservableLike<T>>(obs: TObservable) => TObservable extends MulticastObservableLike<T> ? MulticastObservableLike<T> : TObservable extends RunnableLike<T> | RunnableWithSideEffectsLike<T> | DeferredObservableLike<T> ? DeferredObservableLike<T> : ObservableLike<T>;
    create<T>(f: SideEffect1<ObserverLike<T>>): DeferredObservableLike<T>;
    currentTime: RunnableLike<number>;
    decodeWithCharset(options?: {
        readonly charset?: string;
    }): PureObservableOperator<ArrayBuffer, string>;
    defer<T>(f: Factory<MulticastObservableLike<T>>): DeferredObservableLike<T>;
    dispatchTo<T>(dispatcher: DispatcherLike<T>): ObservableOperatorWithSideEffects<T, T>;
    distinctUntilChanged<T>(options?: {
        readonly equality?: Equality<T>;
    }): PureObservableOperator<T, T>;
    empty<T>(): RunnableLike<T>;
    encodeUtf8(): PureObservableOperator<string, Uint8Array>;
    enqueue<T>(queue: QueueableLike<T>): ObservableOperatorWithSideEffects<T, T>;
    forEach<T>(effect: SideEffect1<T>): ObservableOperatorWithSideEffects<T, T>;
    fromEnumerable<T>(options?: {
        delay: number;
        delayStart?: boolean;
    }): Function1<EnumerableLike<T>, RunnableLike<T>>;
    fromIterable<T>(options?: {
        delay: number;
        delayStart?: boolean;
    }): Function1<Iterable<T>, DeferredObservableLike<T>>;
    ignoreElements<T>(): PureObservableOperator<unknown, T>;
    isDeferred<T>(obs: ObservableLike<T>): obs is ObservableLike<T> & {
        [ObservableLike_isDeferred]: true;
    };
    isPure<T>(obs: ObservableLike<T>): obs is ObservableLike<T> & {
        [ObservableLike_isPure]: true;
    };
    isRunnable<T>(obs: ObservableLike<T>): obs is ObservableLike<T> & {
        [ObservableLike_isDeferred]: true;
        [ObservableLike_isRunnable]: true;
    };
    keep<T>(predicate: Predicate<T>): PureObservableOperator<T, T>;
    map<TA, TB>(selector: Function1<TA, TB>): PureObservableOperator<TA, TB>;
    merge<T>(fst: RunnableLike<T>, snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): RunnableLike<T>;
    merge<T>(fst: RunnableLike<T> | RunnableWithSideEffectsLike<T>, snd: RunnableLike<T> | RunnableWithSideEffectsLike<T>, ...tail: readonly (RunnableLike<T> | RunnableWithSideEffectsLike<T>)[]): RunnableWithSideEffectsLike<T>;
    merge<T>(fst: RunnableLike<T> | MulticastObservableLike<T>, snd: RunnableLike<T> | MulticastObservableLike<T>, ...tail: readonly (RunnableLike<T> | MulticastObservableLike<T>)[]): MulticastObservableLike<T>;
    merge<T>(fst: RunnableLike<T> | RunnableWithSideEffectsLike<T> | DeferredObservableLike<T> | MulticastObservableLike<T>, snd: RunnableLike<T> | RunnableWithSideEffectsLike<T> | DeferredObservableLike<T> | MulticastObservableLike<T>, ...tail: readonly (RunnableLike<T> | RunnableWithSideEffectsLike<T> | DeferredObservableLike<T> | MulticastObservableLike<T>)[]): DeferredObservableLike<T>;
    mergeMany<T>(observables: readonly RunnableLike<T>[]): RunnableLike<T>;
    mergeMany<T>(observables: readonly (RunnableLike<T> | RunnableWithSideEffectsLike<T>)[]): RunnableWithSideEffectsLike<T>;
    mergeMany<T>(observables: readonly (RunnableLike<T> | MulticastObservableLike<T>)[]): MulticastObservableLike<T>;
    mergeMany<T>(observables: readonly (RunnableLike<T> | RunnableWithSideEffectsLike<T> | DeferredObservableLike<T> | MulticastObservableLike<T>)[]): DeferredObservableLike<T>;
    mergeWith<T>(snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): PureObservableOperator<T, T>;
    mergeWith<T>(snd: RunnableLike<T> | RunnableWithSideEffectsLike<T>, ...tail: readonly (RunnableLike<T> | RunnableWithSideEffectsLike<T>)[]): ObservableOperatorWithSideEffects<T, T>;
    mergeWith<T>(snd: RunnableLike<T> | MulticastObservableLike<T>, ...tail: readonly (RunnableLike<T> | MulticastObservableLike<T>)[]): <TObservableIn>(observableIn: TObservableIn) => TObservableIn extends RunnableLike<T> | MulticastObservableLike<T> ? MulticastObservableLike<T> : DeferredObservableLike<T>;
    mergeWith<T>(snd: RunnableLike<T> | RunnableWithSideEffectsLike<T> | DeferredObservableLike<T> | MulticastObservableLike<T>, ...tail: readonly (RunnableLike<T> | RunnableWithSideEffectsLike<T> | DeferredObservableLike<T> | MulticastObservableLike<T>)[]): Function1<ObservableLike<T>, DeferredObservableLike<T>>;
    never<T>(): MulticastObservableLike<T>;
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
    spring(options?: {
        readonly stiffness?: number;
        readonly damping?: number;
        readonly precision?: number;
    }): RunnableLike<number>;
    subscribe<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<ObservableLike<T>, DisposableLike>;
    subscribeOn<T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): DeferredObservableOperator<T, T>;
    takeFirst<T>(options?: {
        readonly count?: number;
    }): PureObservableOperator<T, T>;
    takeLast<T>(options?: {
        readonly count?: number;
    }): PureObservableOperator<T, T>;
    takeUntil<T>(notifier: RunnableLike): PureObservableOperator<T, T>;
    takeUntil<T>(notifier: RunnableWithSideEffectsLike): ObservableOperatorWithSideEffects<T, T>;
    takeUntil<T>(notifier: DeferredObservableLike): DeferredObservableOperator<T, T>;
    takeUntil<T>(notifier: MulticastObservableLike): MulticastObservableOperator<T, T>;
    takeWhile<T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): PureObservableOperator<T, T>;
    throttle<T>(duration: number, options?: {
        readonly mode?: "first" | "last" | "interval";
    }): ObservableOperatorWithSideEffects<T, T>;
    throwIfEmpty<T>(factory: Factory<unknown>, options?: undefined): PureObservableOperator<T, T>;
    throws<T>(): RunnableWithSideEffectsLike<T>;
    throws<T>(options: {
        readonly raise: Factory<unknown>;
    }): RunnableWithSideEffectsLike<T>;
    withCurrentTime<TA, TB>(selector: Function2<number, TA, TB>): PureObservableOperator<TA, TB>;
    withLatestFrom<TA, TB, T>(other: RunnableLike<TB>, selector: Function2<TA, TB, T>): PureObservableOperator<TA, T>;
    withLatestFrom<TA, TB, T>(other: RunnableWithSideEffectsLike<TB>, selector: Function2<TA, TB, T>): ObservableOperatorWithSideEffects<TA, T>;
    withLatestFrom<TA, TB, T>(other: DeferredObservableLike<TB>, selector: Function2<TA, TB, T>): DeferredObservableOperator<TA, T>;
    withLatestFrom<TA, TB, T>(other: MulticastObservableLike<TB>, selector: Function2<TA, TB, T>): Function1<ObservableLike<TA>, MulticastObservableLike<T>>;
    zipLatest<TA, TB>(a: RunnableLike<TA>, b: RunnableLike<TB>): RunnableLike<Tuple2<TA, TB>>;
    zipLatest<TA, TB, TC>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>): RunnableLike<Tuple3<TA, TB, TC>>;
    zipLatest<TA, TB, TC, TD>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>): RunnableLike<Tuple4<TA, TB, TC, TD>>;
    zipLatest<TA, TB, TC, TD, TE>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>): RunnableLike<Tuple5<TA, TB, TC, TD, TE>>;
    zipLatest<TA, TB, TC, TD, TE, TF>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>): RunnableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>): RunnableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>, h: RunnableLike<TH>): RunnableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>, h: RunnableLike<TH>, i: RunnableLike<TI>): RunnableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    zipLatest<TA, TB>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>): RunnableWithSideEffectsLike<Tuple2<TA, TB>>;
    zipLatest<TA, TB, TC>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>, c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC>): RunnableWithSideEffectsLike<Tuple3<TA, TB, TC>>;
    zipLatest<TA, TB, TC, TD>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>, c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC>, d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD>): RunnableWithSideEffectsLike<Tuple4<TA, TB, TC, TD>>;
    zipLatest<TA, TB, TC, TD, TE>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>, c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC>, d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD>, e: RunnableLike<TE> | RunnableWithSideEffectsLike<TE>): RunnableWithSideEffectsLike<Tuple5<TA, TB, TC, TD, TE>>;
    zipLatest<TA, TB, TC, TD, TE, TF>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>, c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC>, d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD>, e: RunnableLike<TE> | RunnableWithSideEffectsLike<TE>, f: RunnableLike<TF> | RunnableWithSideEffectsLike<TF>): RunnableWithSideEffectsLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>, c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC>, d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD>, e: RunnableLike<TE> | RunnableWithSideEffectsLike<TE>, f: RunnableLike<TF> | RunnableWithSideEffectsLike<TF>, g: RunnableLike<TG> | RunnableWithSideEffectsLike<TG>): RunnableWithSideEffectsLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>, c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC>, d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD>, e: RunnableLike<TE> | RunnableWithSideEffectsLike<TE>, f: RunnableLike<TF> | RunnableWithSideEffectsLike<TF>, g: RunnableLike<TG> | RunnableWithSideEffectsLike<TG>, h: RunnableLike<TH> | RunnableWithSideEffectsLike<TH>): RunnableWithSideEffectsLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>, c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC>, d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD>, e: RunnableLike<TE> | RunnableWithSideEffectsLike<TE>, f: RunnableLike<TF> | RunnableWithSideEffectsLike<TF>, g: RunnableLike<TG> | RunnableWithSideEffectsLike<TG>, h: RunnableLike<TH> | RunnableWithSideEffectsLike<TH>, i: RunnableLike<TI> | RunnableWithSideEffectsLike<TI>): RunnableWithSideEffectsLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    zipLatest<TA, TB>(a: RunnableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | MulticastObservableLike<TB>): MulticastObservableLike<Tuple2<TA, TB>>;
    zipLatest<TA, TB, TC>(a: RunnableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | MulticastObservableLike<TB>, c: RunnableLike<TC> | MulticastObservableLike<TC>): MulticastObservableLike<Tuple3<TA, TB, TC>>;
    zipLatest<TA, TB, TC, TD>(a: RunnableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | MulticastObservableLike<TB>, c: RunnableLike<TC> | MulticastObservableLike<TC>, d: RunnableLike<TD> | MulticastObservableLike<TD>): MulticastObservableLike<Tuple4<TA, TB, TC, TD>>;
    zipLatest<TA, TB, TC, TD, TE>(a: RunnableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | MulticastObservableLike<TB>, c: RunnableLike<TC> | MulticastObservableLike<TC>, d: RunnableLike<TD> | MulticastObservableLike<TD>, e: RunnableLike<TE> | MulticastObservableLike<TE>): MulticastObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
    zipLatest<TA, TB, TC, TD, TE, TF>(a: RunnableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | MulticastObservableLike<TB>, c: RunnableLike<TC> | MulticastObservableLike<TC>, d: RunnableLike<TD> | MulticastObservableLike<TD>, e: RunnableLike<TE> | MulticastObservableLike<TE>, f: RunnableLike<TF> | MulticastObservableLike<TF>): MulticastObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG>(a: RunnableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | MulticastObservableLike<TB>, c: RunnableLike<TC> | MulticastObservableLike<TC>, d: RunnableLike<TD> | MulticastObservableLike<TD>, e: RunnableLike<TE> | MulticastObservableLike<TE>, f: RunnableLike<TF> | MulticastObservableLike<TF>, g: RunnableLike<TG> | MulticastObservableLike<TG>): MulticastObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: RunnableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | MulticastObservableLike<TB>, c: RunnableLike<TC> | MulticastObservableLike<TC>, d: RunnableLike<TD> | MulticastObservableLike<TD>, e: RunnableLike<TE> | MulticastObservableLike<TE>, f: RunnableLike<TF> | MulticastObservableLike<TF>, g: RunnableLike<TG> | MulticastObservableLike<TG>, h: RunnableLike<TH> | MulticastObservableLike<TH>): MulticastObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: RunnableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | MulticastObservableLike<TB>, c: RunnableLike<TC> | MulticastObservableLike<TC>, d: RunnableLike<TD> | MulticastObservableLike<TD>, e: RunnableLike<TE> | MulticastObservableLike<TE>, f: RunnableLike<TF> | MulticastObservableLike<TF>, g: RunnableLike<TG> | MulticastObservableLike<TG>, h: RunnableLike<TH> | MulticastObservableLike<TH>, i: RunnableLike<TI> | MulticastObservableLike<TI>): MulticastObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    zipLatest<TA, TB>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA> | DeferredObservableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB> | DeferredObservableLike<TB> | MulticastObservableLike<TB>): DeferredObservableLike<Tuple2<TA, TB>>;
    zipLatest<TA, TB, TC>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA> | DeferredObservableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB> | DeferredObservableLike<TB> | MulticastObservableLike<TB>, c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC> | DeferredObservableLike<TC> | MulticastObservableLike<TC>): DeferredObservableLike<Tuple3<TA, TB, TC>>;
    zipLatest<TA, TB, TC, TD>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA> | DeferredObservableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB> | DeferredObservableLike<TB> | MulticastObservableLike<TB>, c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC> | DeferredObservableLike<TC> | MulticastObservableLike<TC>, d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD> | DeferredObservableLike<TD> | MulticastObservableLike<TD>): DeferredObservableLike<Tuple4<TA, TB, TC, TD>>;
    zipLatest<TA, TB, TC, TD, TE>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA> | DeferredObservableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB> | DeferredObservableLike<TB> | MulticastObservableLike<TB>, c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC> | DeferredObservableLike<TC> | MulticastObservableLike<TC>, d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD> | DeferredObservableLike<TD> | MulticastObservableLike<TD>, e: RunnableLike<TE> | RunnableWithSideEffectsLike<TE> | DeferredObservableLike<TE> | MulticastObservableLike<TE>): DeferredObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
    zipLatest<TA, TB, TC, TD, TE, TF>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA> | DeferredObservableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB> | DeferredObservableLike<TB> | MulticastObservableLike<TB>, c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC> | DeferredObservableLike<TC> | MulticastObservableLike<TC>, d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD> | DeferredObservableLike<TD> | MulticastObservableLike<TD>, e: RunnableLike<TE> | RunnableWithSideEffectsLike<TE> | DeferredObservableLike<TE> | MulticastObservableLike<TE>, f: RunnableLike<TF> | RunnableWithSideEffectsLike<TF> | DeferredObservableLike<TF> | MulticastObservableLike<TF>): DeferredObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA> | DeferredObservableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB> | DeferredObservableLike<TB> | MulticastObservableLike<TB>, c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC> | DeferredObservableLike<TC> | MulticastObservableLike<TC>, d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD> | DeferredObservableLike<TD> | MulticastObservableLike<TD>, e: RunnableLike<TE> | RunnableWithSideEffectsLike<TE> | DeferredObservableLike<TE> | MulticastObservableLike<TE>, f: RunnableLike<TF> | RunnableWithSideEffectsLike<TF> | DeferredObservableLike<TF> | MulticastObservableLike<TF>, g: RunnableLike<TG> | RunnableWithSideEffectsLike<TG> | DeferredObservableLike<TG> | MulticastObservableLike<TG>): DeferredObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA> | DeferredObservableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB> | DeferredObservableLike<TB> | MulticastObservableLike<TB>, c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC> | DeferredObservableLike<TC> | MulticastObservableLike<TC>, d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD> | DeferredObservableLike<TD> | MulticastObservableLike<TD>, e: RunnableLike<TE> | RunnableWithSideEffectsLike<TE> | DeferredObservableLike<TE> | MulticastObservableLike<TE>, f: RunnableLike<TF> | RunnableWithSideEffectsLike<TF> | DeferredObservableLike<TF> | MulticastObservableLike<TF>, g: RunnableLike<TG> | RunnableWithSideEffectsLike<TG> | DeferredObservableLike<TG> | MulticastObservableLike<TG>, h: RunnableLike<TH> | RunnableWithSideEffectsLike<TH> | DeferredObservableLike<TH> | MulticastObservableLike<TH>): DeferredObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA> | DeferredObservableLike<TA> | MulticastObservableLike<TA>, b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB> | DeferredObservableLike<TB> | MulticastObservableLike<TB>, c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC> | DeferredObservableLike<TC> | MulticastObservableLike<TC>, d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD> | DeferredObservableLike<TD> | MulticastObservableLike<TD>, e: RunnableLike<TE> | RunnableWithSideEffectsLike<TE> | DeferredObservableLike<TE> | MulticastObservableLike<TE>, f: RunnableLike<TF> | RunnableWithSideEffectsLike<TF> | DeferredObservableLike<TF> | MulticastObservableLike<TF>, g: RunnableLike<TG> | RunnableWithSideEffectsLike<TG> | DeferredObservableLike<TG> | MulticastObservableLike<TG>, h: RunnableLike<TH> | RunnableWithSideEffectsLike<TH> | DeferredObservableLike<TH> | MulticastObservableLike<TH>, i: RunnableLike<TI> | RunnableWithSideEffectsLike<TI> | DeferredObservableLike<TI> | MulticastObservableLike<TI>): DeferredObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
}
export type Signature = ObservableModule;
export declare const backpressureStrategy: Signature["backpressureStrategy"];
export declare const buffer: Signature["buffer"];
export declare const catchError: Signature["catchError"];
export declare const combineLatest: Signature["combineLatest"];
export declare const concatMany: Signature["concatMany"];
export declare const concatWith: Signature["concatWith"];
export declare const create: Signature["create"];
export declare const currentTime: Signature["currentTime"];
export declare const decodeWithCharset: Signature["decodeWithCharset"];
export declare const defer: Signature["defer"];
export declare const dispatchTo: Signature["dispatchTo"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const empty: Signature["empty"];
export declare const encodeUtf8: Signature["encodeUtf8"];
export declare const enqueue: Signature["enqueue"];
export declare const forEach: Signature["forEach"];
export declare const fromIterable: Signature["fromIterable"];
export declare const ignoreElements: Signature["ignoreElements"];
export declare const isDeferred: Signature["isDeferred"];
export declare const isPure: Signature["isPure"];
export declare const isRunnable: Signature["isRunnable"];
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
export declare const merge: Signature["merge"];
export declare const mergeMany: Signature["mergeMany"];
export declare const never: Signature["never"];
export declare const onSubscribe: Signature["onSubscribe"];
export declare const pairwise: Signature["pairwise"];
export declare const reduce: Signature["reduce"];
export declare const run: Signature["run"];
export declare const scan: Signature["scan"];
export declare const skipFirst: Signature["skipFirst"];
export declare const spring: Signature["spring"];
export declare const subscribe: Signature["subscribe"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeLast: Signature["takeLast"];
export declare const takeUntil: Signature["takeUntil"];
export declare const takeWhile: Signature["takeWhile"];
export declare const throttle: Signature["throttle"];
export declare const throwIfEmpty: Signature["throwIfEmpty"];
export declare const throws: Signature["throws"];
export declare const withCurrentTime: Signature["withCurrentTime"];
export declare const withLatestFrom: Signature["withLatestFrom"];
export declare const zipLatest: Signature["zipLatest"];
