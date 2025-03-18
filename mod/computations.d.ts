import type { AsyncFunction1, Equality, Factory, Function1, Function2, Optional, Predicate, Reducer, SideEffect1, Tuple2, Tuple3, Tuple4 } from "./functions.js";
import type { BackpressureStrategy, ConsumerLike, DisposableContainerLike, DisposableLike, EventListenerLike, ObserverLike, SchedulerLike, SinkLike } from "./utils.js";
export declare const ComputationLike_isPure: unique symbol;
export declare const ComputationLike_isDeferred: unique symbol;
export declare const ComputationLike_isSynchronous: unique symbol;
export interface ComputationLike {
    readonly [ComputationLike_isPure]?: boolean;
    readonly [ComputationLike_isSynchronous]?: boolean;
    readonly [ComputationLike_isDeferred]?: boolean;
}
export interface ComputationWithSideEffectsLike extends ComputationLike {
    readonly [ComputationLike_isPure]: false;
}
export interface PureComputationLike extends ComputationLike {
    readonly [ComputationLike_isPure]?: true;
}
export interface DeferredComputationLike extends ComputationLike {
    readonly [ComputationLike_isDeferred]?: true;
}
export interface PureDeferredComputationLike extends DeferredComputationLike {
    readonly [ComputationLike_isPure]?: true;
}
export interface DeferredComputationWithSideEffectsLike extends DeferredComputationLike {
    readonly [ComputationLike_isPure]: false;
}
export interface SynchronousComputationLike extends ComputationLike {
    readonly [ComputationLike_isSynchronous]?: true;
}
export interface PureSynchronousComputationLike extends SynchronousComputationLike {
    readonly [ComputationLike_isPure]?: true;
}
export interface SynchronousComputationWithSideEffectsLike extends SynchronousComputationLike {
    readonly [ComputationLike_isPure]: false;
}
export interface MulticastComputationLike extends ComputationLike {
    readonly [ComputationLike_isSynchronous]: false;
    readonly [ComputationLike_isDeferred]: false;
    readonly [ComputationLike_isPure]?: true;
}
export interface MulticastLike extends MulticastComputationLike, DisposableContainerLike {
}
export declare const Computation_T: unique symbol;
export declare const Computation_baseOfT: unique symbol;
export declare const Computation_pureDeferredOfT: unique symbol;
export declare const Computation_deferredWithSideEffectsOfT: unique symbol;
export declare const Computation_pureSynchronousOfT: unique symbol;
export declare const Computation_synchronousWithSideEffectsOfT: unique symbol;
export declare const Computation_multicastOfT: unique symbol;
/**
 * @noInheritDoc
 */
export interface GenericComputationType<TComputationBaseOfT extends ComputationLike, TPureDeferredComputationOfT extends TComputationBaseOfT & PureDeferredComputationLike, TDeferredDeferredComputationWithSideEffectsOfT extends TComputationBaseOfT & DeferredComputationWithSideEffectsLike, TPureSynchronousOfT extends PureSynchronousComputationLike, TSynchronousWithSideEffectsOfT extends SynchronousComputationWithSideEffectsLike, TMulticastComputationOfT extends TComputationBaseOfT & MulticastLike> {
    readonly [Computation_T]?: unknown;
    readonly [Computation_baseOfT]?: TComputationBaseOfT;
    readonly [Computation_pureDeferredOfT]?: TPureDeferredComputationOfT;
    readonly [Computation_deferredWithSideEffectsOfT]?: TDeferredDeferredComputationWithSideEffectsOfT;
    readonly [Computation_pureSynchronousOfT]?: TPureSynchronousOfT;
    readonly [Computation_synchronousWithSideEffectsOfT]?: TSynchronousWithSideEffectsOfT;
    readonly [Computation_multicastOfT]?: TMulticastComputationOfT;
}
export type ComputationType = GenericComputationType<ComputationLike, PureDeferredComputationLike, DeferredComputationWithSideEffectsLike, PureSynchronousComputationLike, SynchronousComputationWithSideEffectsLike, MulticastLike>;
export interface ComputationTypeOf<TComputationType extends ComputationType, T = unknown> {
    readonly [Computation_pureSynchronousOfT]?: PureSynchronousComputationOf<TComputationType, T>;
    readonly [Computation_synchronousWithSideEffectsOfT]?: SynchronousComputationWithSideEffectsOf<TComputationType, T>;
    readonly [Computation_pureDeferredOfT]?: PureDeferredComputationOf<TComputationType, T>;
    readonly [Computation_deferredWithSideEffectsOfT]?: DeferredComputationWithSideEffectsOf<TComputationType, T>;
    readonly [Computation_multicastOfT]?: MulticastComputationOf<TComputationType, T>;
}
export type ComputationBaseOf<TComputationType extends ComputationType, T> = TComputationType extends {
    readonly [Computation_baseOfT]?: unknown;
} ? NonNullable<(TComputationType & {
    readonly [Computation_T]: T;
})[typeof Computation_baseOfT]> : {
    readonly _C: TComputationType;
    readonly _T: () => T;
};
export type DeferredComputationWithSideEffectsOf<TComputationType extends ComputationType, T> = TComputationType extends {
    readonly [Computation_baseOfT]?: unknown;
} ? NonNullable<(TComputationType & {
    readonly [Computation_T]: T;
})[typeof Computation_deferredWithSideEffectsOfT] & ComputationBaseOf<TComputationType, T>> : {
    readonly _C: TComputationType;
    readonly _T: () => T;
};
export type PureDeferredComputationOf<TComputationType extends ComputationType, T> = TComputationType extends {
    readonly [Computation_baseOfT]?: unknown;
} ? NonNullable<(TComputationType & {
    readonly [Computation_T]: T;
})[typeof Computation_pureDeferredOfT] & ComputationBaseOf<TComputationType, T>> : {
    readonly _C: TComputationType;
    readonly _T: () => T;
};
export type SynchronousComputationWithSideEffectsOf<TComputationType extends ComputationType, T> = TComputationType extends {
    readonly [Computation_baseOfT]?: unknown;
} ? NonNullable<(TComputationType & {
    readonly [Computation_T]: T;
})[typeof Computation_synchronousWithSideEffectsOfT] & ComputationBaseOf<TComputationType, T>> : {
    readonly _C: TComputationType;
    readonly _T: () => T;
};
export type PureSynchronousComputationOf<TComputationType extends ComputationType, T> = TComputationType extends {
    readonly [Computation_baseOfT]?: unknown;
} ? NonNullable<(TComputationType & {
    readonly [Computation_T]: T;
})[typeof Computation_pureSynchronousOfT] & ComputationBaseOf<TComputationType, T>> : {
    readonly _C: TComputationType;
    readonly _T: () => T;
};
export type MulticastComputationOf<TComputationType extends ComputationType, T> = TComputationType extends {
    readonly [Computation_baseOfT]?: unknown;
} ? NonNullable<(TComputationType & {
    readonly [Computation_T]: T;
})[typeof Computation_multicastOfT] & ComputationBaseOf<TComputationType, T>> : {
    readonly _C: TComputationType;
    readonly _T: () => T;
};
export type DeferredComputationOf<TComputationType extends ComputationType, T> = PureDeferredComputationOf<TComputationType, T> | DeferredComputationWithSideEffectsOf<TComputationType, T>;
export type SynchronousComputationOf<TComputationType extends ComputationType, T> = PureSynchronousComputationOf<TComputationType, T> | SynchronousComputationWithSideEffectsOf<TComputationType, T>;
export type PureComputationOf<TComputationType extends ComputationType, T> = PureSynchronousComputationOf<TComputationType, T> | PureDeferredComputationOf<TComputationType, T> | MulticastComputationOf<TComputationType, T>;
export type ComputationOf<TComputationType extends ComputationType, T> = DeferredComputationOf<TComputationType, T> | SynchronousComputationOf<TComputationType, T> | MulticastComputationOf<TComputationType, T>;
export type StatelessComputationOperator<TComputationType extends ComputationType, TA, out TB, TInComputationBaseOf extends ComputationBaseOf<TComputationType, TA> = ComputationBaseOf<TComputationType, TA>> = <TComputationOf extends TInComputationBaseOf>(computation: TComputationOf) => TComputationOf extends PureSynchronousComputationOf<TComputationType, TA> ? PureSynchronousComputationOf<TComputationType, TB> : TComputationOf extends SynchronousComputationWithSideEffectsOf<TComputationType, TA> ? SynchronousComputationWithSideEffectsOf<TComputationType, TB> : TComputationOf extends PureDeferredComputationOf<TComputationType, TA> ? PureDeferredComputationOf<TComputationType, TB> : TComputationOf extends DeferredComputationWithSideEffectsOf<TComputationType, TA> ? DeferredComputationWithSideEffectsOf<TComputationType, TB> : TComputationOf extends MulticastComputationOf<TComputationType, TA> ? MulticastComputationOf<TComputationType, TB> : never;
export type ComputationOperatorWithSideEffects<TComputationType extends ComputationType, TA, out TB> = <TComputationOf extends ComputationBaseOf<TComputationType, TA>>(computation: TComputationOf) => TComputationOf extends SynchronousComputationOf<TComputationType, TA> ? SynchronousComputationWithSideEffectsOf<TComputationType, TB> : DeferredComputationWithSideEffectsOf<TComputationType, TB>;
export type StatelessAsynchronousComputationOperator<TComputationType extends ComputationType, TA, out TB> = <TComputationOf extends ComputationBaseOf<TComputationType, TA>>(computation: TComputationOf) => TComputationOf extends PureDeferredComputationOf<TComputationType, TA> ? PureDeferredComputationOf<TComputationType, TB> : TComputationOf extends MulticastComputationOf<TComputationType, TA> ? MulticastComputationOf<TComputationType, TB> : DeferredComputationWithSideEffectsOf<TComputationType, TB>;
export type StatefulAsynchronousComputationOperator<TComputationType extends ComputationType, TA, out TB> = <TComputationOf extends ComputationBaseOf<TComputationType, TA>>(computation: TComputationOf) => TComputationOf extends PureComputationOf<TComputationType, TA> ? PureDeferredComputationOf<TComputationType, TB> : DeferredComputationWithSideEffectsOf<TComputationType, TB>;
export type StatefulSynchronousComputationOperator<TComputationType extends ComputationType, TA, out TB> = <TComputationOf extends ComputationBaseOf<TComputationType, TA>>(computation: TComputationOf) => TComputationOf extends PureSynchronousComputationOf<TComputationType, TA> ? PureSynchronousComputationOf<TComputationType, TB> : TComputationOf extends SynchronousComputationWithSideEffectsOf<TComputationType, TA> ? SynchronousComputationWithSideEffectsOf<TComputationType, TB> : TComputationOf extends SynchronousComputationOf<TComputationType, TA> ? SynchronousComputationOf<TComputationType, TB> : TComputationOf extends DeferredComputationWithSideEffectsOf<TComputationType, TA> ? DeferredComputationWithSideEffectsOf<TComputationType, TB> : PureDeferredComputationOf<TComputationType, TB>;
type HigherOrderPureSynchronousComputationOut<TComputationType extends ComputationType, TInnerLike extends ComputationLike, TB> = TInnerLike extends PureSynchronousComputationLike ? PureSynchronousComputationOf<TComputationType, TB> : TInnerLike extends SynchronousComputationWithSideEffectsLike ? SynchronousComputationWithSideEffectsOf<TComputationType, TB> : TInnerLike extends PureDeferredComputationLike ? PureDeferredComputationOf<TComputationType, TB> : TInnerLike extends DeferredComputationWithSideEffectsLike ? DeferredComputationWithSideEffectsOf<TComputationType, TB> : never;
type HigherOrderSynchronousComputationWithSideEffectsOut<TComputationType extends ComputationType, TInnerLike extends ComputationLike, TB> = TInnerLike extends SynchronousComputationLike ? SynchronousComputationWithSideEffectsOf<TComputationType, TB> : TInnerLike extends DeferredComputationLike ? DeferredComputationWithSideEffectsOf<TComputationType, TB> : never;
type HigherOrderPureDeferredComputationOut<TComputationType extends ComputationType, TInnerLike extends ComputationLike, TB> = TInnerLike extends PureDeferredComputationLike ? PureDeferredComputationOf<TComputationType, TB> : TInnerLike extends DeferredComputationWithSideEffectsLike ? DeferredComputationWithSideEffectsOf<TComputationType, TB> : never;
type HigherOrderDeferredComputationWithSideEffectsOut<TComputationType extends ComputationType, TInnerLike extends ComputationLike, TB> = TInnerLike extends DeferredComputationLike ? DeferredComputationWithSideEffectsOf<TComputationType, TB> : never;
export type HigherOrderInnerComputationLike = PureSynchronousComputationLike | SynchronousComputationWithSideEffectsLike | PureDeferredComputationLike | DeferredComputationWithSideEffectsLike;
export type HigherOrderInnerComputationOf<TComputationType extends ComputationType, THigherOrderInnerComputation extends HigherOrderInnerComputationLike, T> = THigherOrderInnerComputation extends PureSynchronousComputationLike ? PureSynchronousComputationOf<TComputationType, T> : THigherOrderInnerComputation extends SynchronousComputationWithSideEffectsLike ? SynchronousComputationOf<TComputationType, T> : THigherOrderInnerComputation extends PureDeferredComputationLike ? PureDeferredComputationOf<TComputationType, T> : THigherOrderInnerComputation extends DeferredComputationWithSideEffectsLike ? DeferredComputationOf<TComputationType, T> : never;
export type HigherOrderComputationOperator<TComputationType extends ComputationType, TInnerLike extends HigherOrderInnerComputationLike, TA, out TB> = <TComputationIn extends ComputationBaseOf<TComputationType, TA>>(computation: TComputationIn) => TComputationIn extends PureSynchronousComputationOf<TComputationType, TA> ? HigherOrderPureSynchronousComputationOut<TComputationType, TInnerLike, TB> : TComputationIn extends SynchronousComputationWithSideEffectsOf<TComputationType, TA> ? HigherOrderSynchronousComputationWithSideEffectsOut<TComputationType, TInnerLike, TB> : TComputationIn extends PureDeferredComputationOf<TComputationType, TA> ? HigherOrderPureDeferredComputationOut<TComputationType, TInnerLike, TB> : TComputationIn extends DeferredComputationWithSideEffectsOf<TComputationType, TA> ? HigherOrderDeferredComputationWithSideEffectsOut<TComputationType, TInnerLike, TB> : never;
export type EmptyOf<TComputationType extends ComputationType, T> = PureSynchronousComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? PureSynchronousComputationOf<TComputationType, T> : PureDeferredComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? PureDeferredComputationOf<TComputationType, T> : MulticastComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? MulticastComputationOf<TComputationType, T> & DisposableLike : never;
export type GeneratorOf<TComputationType extends ComputationType, T> = PureSynchronousComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? PureSynchronousComputationOf<TComputationType, T> : PureDeferredComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? PureDeferredComputationOf<TComputationType, T> : MulticastComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? MulticastComputationOf<TComputationType, T> & DisposableLike : never;
export type RaiseOf<TComputationType extends ComputationType, T> = PureSynchronousComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? PureSynchronousComputationOf<TComputationType, T> : PureDeferredComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? PureDeferredComputationOf<TComputationType, T> : MulticastComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? MulticastComputationOf<TComputationType, T> & DisposableLike : never;
export type FromAsyncIterableOperator<TComputationType extends ComputationType, T> = <TIterable extends AsyncIterableLike<T>>(iterable: TIterable) => TIterable extends PureAsyncIterableLike<T> ? PureDeferredComputationOf<TComputationType, T> extends never ? MulticastComputationOf<TComputationType, T> & DisposableLike : PureDeferredComputationOf<TComputationType, T> : DeferredComputationWithSideEffectsOf<TComputationType, T> extends never ? MulticastComputationOf<TComputationType, T> & DisposableLike : DeferredComputationWithSideEffectsOf<TComputationType, T>;
export type FromObservableOperator<TComputationType extends ComputationType, T> = <TObservable extends ObservableLike<T>>(iterable: TObservable) => TObservable extends PureDeferredObservableLike ? (PureDeferredComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? PureDeferredComputationOf<TComputationType, T> : MulticastComputationOf<TComputationType, T> & DisposableLike) : TObservable extends DeferredObservableWithSideEffectsLike ? (DeferredComputationWithSideEffectsOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? DeferredComputationWithSideEffectsOf<TComputationType, T> : MulticastComputationOf<TComputationType, T> & DisposableLike) : TObservable extends MulticastObservableLike ? (MulticastComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? MulticastComputationOf<TComputationType, T> & DisposableLike : PureDeferredComputationOf<TComputationType, T>) : never;
export type GenPureConstructor<TComputationType extends ComputationType, T> = PureSynchronousComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? PureSynchronousComputationOf<TComputationType, T> : PureDeferredComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? PureDeferredComputationOf<TComputationType, T> : MulticastComputationOf<TComputationType, T> & DisposableLike;
export type GenWithSideEffectsConstructor<TComputationType extends ComputationType, T> = SynchronousComputationWithSideEffectsOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? SynchronousComputationWithSideEffectsOf<TComputationType, T> : DeferredComputationWithSideEffectsOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? DeferredComputationWithSideEffectsOf<TComputationType, T> : MulticastComputationOf<TComputationType, T> & DisposableLike;
export type FromIterableOperator<TComputationType extends ComputationType, T> = <TIterable extends IterableLike<T>>(iterable: TIterable) => TIterable extends PureIterableLike ? (PureSynchronousComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? PureSynchronousComputationOf<TComputationType, T> : PureDeferredComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? PureDeferredComputationOf<TComputationType, T> : MulticastComputationOf<TComputationType, T> & DisposableLike) : TIterable extends IterableWithSideEffectsLike ? (SynchronousComputationWithSideEffectsOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? SynchronousComputationWithSideEffectsOf<TComputationType, T> : DeferredComputationWithSideEffectsOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? DeferredComputationWithSideEffectsOf<TComputationType, T> : MulticastComputationOf<TComputationType, T> & DisposableLike) : ComputationBaseOf<TComputationType, T>;
export type FromReadonlyArrayOperator<TComputationType extends ComputationType, T> = (array: readonly T[]) => PureSynchronousComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? PureSynchronousComputationOf<TComputationType, T> : PureDeferredComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? PureDeferredComputationOf<TComputationType, T> : MulticastComputationOf<TComputationType, T> & DisposableLike;
export type FromValueOperator<TComputationType extends ComputationType, T> = (value: T) => PureSynchronousComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? PureSynchronousComputationOf<TComputationType, T> : PureDeferredComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? PureDeferredComputationOf<TComputationType, T> : MulticastComputationOf<TComputationType, T> & DisposableLike;
export type ToObservableOperator<TComputationType extends ComputationType, T> = <TComputationBaseOf extends ComputationBaseOf<TComputationType, T>>(computation: TComputationBaseOf) => TComputationBaseOf extends PureSynchronousComputationOf<TComputationType, T> ? PureSynchronousObservableLike<T> : TComputationBaseOf extends SynchronousComputationWithSideEffectsOf<TComputationType, T> ? SynchronousObservableWithSideEffectsLike<T> : TComputationBaseOf extends PureDeferredComputationOf<TComputationType, T> ? PureDeferredObservableLike<T> : TComputationBaseOf extends DeferredComputationWithSideEffectsOf<TComputationType, T> ? DeferredObservableWithSideEffectsLike<T> : TComputationBaseOf extends MulticastComputationOf<TComputationType, T> ? MulticastObservableLike<T> : never;
export type ToRunnableOperator<TComputationType extends ComputationType, T> = <TComputationBaseOf extends ComputationBaseOf<TComputationType, T>>(computation: TComputationBaseOf) => TComputationBaseOf extends PureSynchronousComputationOf<TComputationType, T> ? PureRunnableLike<T> : TComputationBaseOf extends SynchronousComputationWithSideEffectsOf<TComputationType, T> ? RunnableWithSideEffectsLike<T> : never;
interface CombineConstructor<TComputationType extends ComputationType> {
    <TA, TB>(a: PureSynchronousComputationOf<TComputationType, TA>, b: PureSynchronousComputationOf<TComputationType, TB>): PureSynchronousComputationOf<TComputationType, Tuple2<TA, TB>>;
    <TA, TB, TC>(a: PureSynchronousComputationOf<TComputationType, TA>, b: PureSynchronousComputationOf<TComputationType, TB>, c: PureSynchronousComputationOf<TComputationType, TC>): PureSynchronousComputationOf<TComputationType, Tuple3<TA, TB, TC>>;
    <TA, TB, TC, TD>(a: PureSynchronousComputationOf<TComputationType, TA>, b: PureSynchronousComputationOf<TComputationType, TB>, c: PureSynchronousComputationOf<TComputationType, TC>, d: PureSynchronousComputationOf<TComputationType, TD>): PureSynchronousComputationOf<TComputationType, Tuple4<TA, TB, TC, TD>>;
    <TA, TB>(a: SynchronousComputationOf<TComputationType, TA>, b: SynchronousComputationOf<TComputationType, TB>): SynchronousComputationWithSideEffectsOf<TComputationType, Tuple2<TA, TB>>;
    <TA, TB, TC>(a: SynchronousComputationOf<TComputationType, TA>, b: SynchronousComputationOf<TComputationType, TB>, c: SynchronousComputationOf<TComputationType, TC>): SynchronousComputationWithSideEffectsOf<TComputationType, Tuple3<TA, TB, TC>>;
    <TA, TB, TC, TD>(a: SynchronousComputationOf<TComputationType, TA>, b: SynchronousComputationOf<TComputationType, TB>, c: SynchronousComputationOf<TComputationType, TC>, d: SynchronousComputationOf<TComputationType, TD>): SynchronousComputationWithSideEffectsOf<TComputationType, Tuple4<TA, TB, TC, TD>>;
    <TA, TB>(a: PureDeferredComputationOf<TComputationType, TA>, b: PureDeferredComputationOf<TComputationType, TB>): PureDeferredComputationOf<TComputationType, Tuple2<TA, TB>>;
    <TA, TB, TC>(a: PureDeferredComputationOf<TComputationType, TA>, b: PureDeferredComputationOf<TComputationType, TB>, c: PureDeferredComputationOf<TComputationType, TC>): PureDeferredComputationOf<TComputationType, Tuple3<TA, TB, TC>>;
    <TA, TB, TC, TD>(a: PureDeferredComputationOf<TComputationType, TA>, b: PureDeferredComputationOf<TComputationType, TB>, c: PureDeferredComputationOf<TComputationType, TC>, d: PureDeferredComputationOf<TComputationType, TD>): PureDeferredComputationOf<TComputationType, Tuple4<TA, TB, TC, TD>>;
    <TA, TB>(a: DeferredComputationOf<TComputationType, TA>, b: DeferredComputationOf<TComputationType, TB>): DeferredComputationWithSideEffectsOf<TComputationType, Tuple2<TA, TB>>;
    <TA, TB, TC>(a: DeferredComputationOf<TComputationType, TA>, b: DeferredComputationOf<TComputationType, TB>, c: DeferredComputationOf<TComputationType, TC>): DeferredComputationWithSideEffectsOf<TComputationType, Tuple3<TA, TB, TC>>;
    <TA, TB, TC, TD>(a: DeferredComputationOf<TComputationType, TA>, b: DeferredComputationOf<TComputationType, TB>, c: DeferredComputationOf<TComputationType, TC>, d: DeferredComputationOf<TComputationType, TD>): DeferredComputationWithSideEffectsOf<TComputationType, Tuple4<TA, TB, TC, TD>>;
    <TA, TB>(a: MulticastComputationOf<TComputationType, TA>, b: MulticastComputationOf<TComputationType, TB>): PureDeferredComputationOf<TComputationType, Tuple2<TA, TB>> extends ComputationBaseOf<TComputationType, Tuple2<TA, TB>> ? PureDeferredComputationOf<TComputationType, Tuple2<TA, TB>> : MulticastComputationOf<TComputationType, Tuple2<TA, TB>>;
    <TA, TB, TC>(a: MulticastComputationOf<TComputationType, TA>, b: MulticastComputationOf<TComputationType, TB>, c: MulticastComputationOf<TComputationType, TC>): PureDeferredComputationOf<TComputationType, Tuple3<TA, TB, TC>> extends ComputationBaseOf<TComputationType, Tuple3<TA, TB, TC>> ? PureDeferredComputationOf<TComputationType, Tuple3<TA, TB, TC>> : MulticastComputationOf<TComputationType, Tuple3<TA, TB, TC>>;
    <TA, TB, TC, TD>(a: MulticastComputationOf<TComputationType, TA>, b: MulticastComputationOf<TComputationType, TB>, c: MulticastComputationOf<TComputationType, TC>, d: MulticastComputationOf<TComputationType, TD>): PureDeferredComputationOf<TComputationType, Tuple4<TA, TB, TC, TD>> extends ComputationBaseOf<TComputationType, Tuple4<TA, TB, TC, TD>> ? PureDeferredComputationOf<TComputationType, Tuple4<TA, TB, TC, TD>> : MulticastComputationOf<TComputationType, Tuple4<TA, TB, TC, TD>>;
    <TA, TB>(a: PureComputationOf<TComputationType, TA>, b: PureComputationOf<TComputationType, TB>): PureDeferredComputationOf<TComputationType, Tuple2<TA, TB>> extends ComputationBaseOf<TComputationType, Tuple2<TA, TB>> ? PureDeferredComputationOf<TComputationType, Tuple2<TA, TB>> : MulticastComputationOf<TComputationType, Tuple2<TA, TB>>;
    <TA, TB, TC>(a: PureComputationOf<TComputationType, TA>, b: PureComputationOf<TComputationType, TB>, c: PureComputationOf<TComputationType, TC>): PureDeferredComputationOf<TComputationType, Tuple3<TA, TB, TC>> extends ComputationBaseOf<TComputationType, Tuple3<TA, TB, TC>> ? PureDeferredComputationOf<TComputationType, Tuple3<TA, TB, TC>> : MulticastComputationOf<TComputationType, Tuple3<TA, TB, TC>>;
    <TA, TB, TC, TD>(a: PureComputationOf<TComputationType, TA>, b: PureComputationOf<TComputationType, TB>, c: PureComputationOf<TComputationType, TC>, d: PureComputationOf<TComputationType, TD>): PureDeferredComputationOf<TComputationType, Tuple4<TA, TB, TC, TD>> extends ComputationBaseOf<TComputationType, Tuple4<TA, TB, TC, TD>> ? PureDeferredComputationOf<TComputationType, Tuple4<TA, TB, TC, TD>> : MulticastComputationOf<TComputationType, Tuple4<TA, TB, TC, TD>>;
    <TA, TB>(a: ComputationOf<TComputationType, TA>, b: ComputationOf<TComputationType, TB>): DeferredComputationWithSideEffectsOf<TComputationType, Tuple2<TA, TB>> extends ComputationBaseOf<TComputationType, Tuple2<TA, TB>> ? DeferredComputationWithSideEffectsOf<TComputationType, Tuple2<TA, TB>> : MulticastComputationOf<TComputationType, Tuple2<TA, TB>>;
    <TA, TB, TC>(a: ComputationOf<TComputationType, TA>, b: ComputationOf<TComputationType, TB>, c: ComputationOf<TComputationType, TC>): DeferredComputationWithSideEffectsOf<TComputationType, Tuple3<TA, TB, TC>> extends ComputationBaseOf<TComputationType, Tuple3<TA, TB, TC>> ? DeferredComputationWithSideEffectsOf<TComputationType, Tuple3<TA, TB, TC>> : MulticastComputationOf<TComputationType, Tuple3<TA, TB, TC>>;
    <TA, TB, TC, TD>(a: ComputationOf<TComputationType, TA>, b: ComputationOf<TComputationType, TB>, c: ComputationOf<TComputationType, TC>, d: ComputationOf<TComputationType, TD>): DeferredComputationWithSideEffectsOf<TComputationType, Tuple4<TA, TB, TC, TD>> extends ComputationBaseOf<TComputationType, Tuple4<TA, TB, TC, TD>> ? DeferredComputationWithSideEffectsOf<TComputationType, Tuple4<TA, TB, TC, TD>> : MulticastComputationOf<TComputationType, Tuple4<TA, TB, TC, TD>>;
}
export type ForkMergeDefaultInnerOperator<TComputationType extends ComputationType, TIn, TOut> = PureDeferredComputationOf<TComputationType, TOut> extends ComputationBaseOf<TComputationType, TOut> ? Function1<MulticastComputationOf<TComputationType, TIn>, PureDeferredComputationOf<TComputationType, TOut>> : MulticastComputationOf<TComputationType, TOut> extends ComputationBaseOf<TComputationType, TOut> ? Function1<MulticastComputationOf<TComputationType, TIn>, MulticastComputationOf<TComputationType, TOut>> : never;
export type ForkMergeDefaultOperator<TComputationType extends ComputationType, TIn, TOut> = PureDeferredComputationOf<TComputationType, TOut> extends ComputationBaseOf<TComputationType, TOut> ? Function1<ComputationOf<TComputationType, TIn>, PureDeferredComputationOf<TComputationType, TOut>> : MulticastComputationOf<TComputationType, TOut> extends ComputationBaseOf<TComputationType, TOut> ? Function1<ComputationOf<TComputationType, TIn>, MulticastComputationOf<TComputationType, TOut>> : never;
export interface ForkMerge<TComputationType extends ComputationType> {
    <TIn, TOut>(fst: ForkMergeDefaultInnerOperator<TComputationType, TIn, TOut>, snd: ForkMergeDefaultInnerOperator<TComputationType, TIn, TOut>, ...tail: ForkMergeDefaultInnerOperator<TComputationType, TIn, TOut>[]): ForkMergeDefaultOperator<TComputationType, TIn, TOut>;
    <TIn, TOut, TInnerLike extends DeferredComputationWithSideEffectsLike>(fst: Function1<MulticastComputationOf<TComputationType, TIn>, HigherOrderInnerComputationOf<TComputationType, TInnerLike, TOut>>, snd: Function1<MulticastComputationOf<TComputationType, TIn>, HigherOrderInnerComputationOf<TComputationType, TInnerLike, TOut>>, ...tail: readonly [
        ...Function1<MulticastComputationOf<TComputationType, TIn>, HigherOrderInnerComputationOf<TComputationType, TInnerLike, TOut>>[],
        {
            innerType?: TInnerLike;
        }
    ]): HigherOrderComputationOperator<TComputationType, TInnerLike, TIn, TOut>;
    <TIn, TOut>(fst: Function1<MulticastComputationOf<TComputationType, TIn>, MulticastComputationOf<TComputationType, TOut>>, snd: Function1<MulticastComputationOf<TComputationType, TIn>, MulticastComputationOf<TComputationType, TOut>>, ...tail: readonly [
        ...Function1<MulticastComputationOf<TComputationType, TIn>, MulticastComputationOf<TComputationType, TOut>>[],
        {
            innerType: MulticastComputationLike;
        }
    ]): StatelessComputationOperator<TComputationType, TIn, TOut>;
}
interface ZipConstructor<TComputationType extends ComputationType> {
    <TA, TB>(a: PureSynchronousComputationOf<TComputationType, TA>, b: PureSynchronousComputationOf<TComputationType, TB>): PureSynchronousComputationOf<TComputationType, Tuple2<TA, TB>>;
    <TA, TB, TC>(a: PureSynchronousComputationOf<TComputationType, TA>, b: PureSynchronousComputationOf<TComputationType, TB>, c: PureSynchronousComputationOf<TComputationType, TC>): PureSynchronousComputationOf<TComputationType, Tuple3<TA, TB, TC>>;
    <TA, TB, TC, TD>(a: PureSynchronousComputationOf<TComputationType, TA>, b: PureSynchronousComputationOf<TComputationType, TB>, c: PureSynchronousComputationOf<TComputationType, TC>, d: PureSynchronousComputationOf<TComputationType, TD>): PureSynchronousComputationOf<TComputationType, Tuple4<TA, TB, TC, TD>>;
    <TA, TB>(a: SynchronousComputationOf<TComputationType, TA>, b: SynchronousComputationOf<TComputationType, TB>): SynchronousComputationWithSideEffectsOf<TComputationType, Tuple2<TA, TB>>;
    <TA, TB, TC>(a: SynchronousComputationOf<TComputationType, TA>, b: SynchronousComputationOf<TComputationType, TB>, c: SynchronousComputationOf<TComputationType, TC>): SynchronousComputationWithSideEffectsOf<TComputationType, Tuple3<TA, TB, TC>>;
    <TA, TB, TC, TD>(a: SynchronousComputationOf<TComputationType, TA>, b: SynchronousComputationOf<TComputationType, TB>, c: SynchronousComputationOf<TComputationType, TC>, d: SynchronousComputationOf<TComputationType, TD>): SynchronousComputationWithSideEffectsOf<TComputationType, Tuple4<TA, TB, TC, TD>>;
    <TA, TB>(a: PureDeferredComputationOf<TComputationType, TA>, b: PureDeferredComputationOf<TComputationType, TB>): PureDeferredComputationOf<TComputationType, Tuple2<TA, TB>>;
    <TA, TB, TC>(a: PureDeferredComputationOf<TComputationType, TA>, b: PureDeferredComputationOf<TComputationType, TB>, c: PureDeferredComputationOf<TComputationType, TC>): PureDeferredComputationOf<TComputationType, Tuple3<TA, TB, TC>>;
    <TA, TB, TC, TD>(a: PureDeferredComputationOf<TComputationType, TA>, b: PureDeferredComputationOf<TComputationType, TB>, c: PureDeferredComputationOf<TComputationType, TC>, d: PureDeferredComputationOf<TComputationType, TD>): PureDeferredComputationOf<TComputationType, Tuple4<TA, TB, TC, TD>>;
    <TA, TB>(a: DeferredComputationOf<TComputationType, TA>, b: DeferredComputationOf<TComputationType, TB>): DeferredComputationWithSideEffectsOf<TComputationType, Tuple2<TA, TB>>;
    <TA, TB, TC>(a: DeferredComputationOf<TComputationType, TA>, b: DeferredComputationOf<TComputationType, TB>, c: DeferredComputationOf<TComputationType, TC>): DeferredComputationWithSideEffectsOf<TComputationType, Tuple3<TA, TB, TC>>;
    <TA, TB, TC, TD>(a: DeferredComputationOf<TComputationType, TA>, b: DeferredComputationOf<TComputationType, TB>, c: DeferredComputationOf<TComputationType, TC>, d: DeferredComputationOf<TComputationType, TD>): DeferredComputationWithSideEffectsOf<TComputationType, Tuple4<TA, TB, TC, TD>>;
    <TA, TB>(a: PureComputationOf<TComputationType, TA>, b: PureComputationOf<TComputationType, TB>): PureDeferredComputationOf<TComputationType, Tuple2<TA, TB>>;
    <TA, TB, TC>(a: PureComputationOf<TComputationType, TA>, b: PureComputationOf<TComputationType, TB>, c: PureComputationOf<TComputationType, TC>): PureDeferredComputationOf<TComputationType, Tuple3<TA, TB, TC>>;
    <TA, TB, TC, TD>(a: PureComputationOf<TComputationType, TA>, b: PureComputationOf<TComputationType, TB>, c: PureComputationOf<TComputationType, TC>, d: PureComputationOf<TComputationType, TD>): PureDeferredComputationOf<TComputationType, Tuple4<TA, TB, TC, TD>>;
}
declare const ComputationModuleLike_computationType: unique symbol;
export interface ComputationModuleLike<TComputationType extends ComputationType = ComputationType> {
    [ComputationModuleLike_computationType]?: TComputationType;
}
export type ComputationTypeOfModule<TModule extends ComputationModuleLike> = NonNullable<TModule[typeof ComputationModuleLike_computationType]>;
export type PickComputationModule<TComputationType extends ComputationType, TComputationModule extends ComputationModuleLike<TComputationType>, K extends keyof TComputationModule> = Pick<TComputationModule, K | typeof ComputationModuleLike_computationType>;
export type ComputationOfModule<TModule extends ComputationModuleLike, T> = ComputationOf<ComputationTypeOfModule<TModule>, T>;
export type DeferredComputationOfModule<TModule extends ComputationModuleLike, T> = DeferredComputationOf<ComputationTypeOfModule<TModule>, T>;
export type MulticastComputationOfModule<TModule extends ComputationModuleLike, T> = MulticastComputationOf<ComputationTypeOfModule<TModule>, T>;
export interface ComputationModule<TComputationType extends ComputationType, TCreationOptions extends {
    empty?: Record<string, any>;
    firstAsync?: Record<string, any>;
    fromReadonlyArray?: Record<string, any>;
    fromValue?: Record<string, any>;
    gen?: Record<string, any>;
    generate?: Record<string, any>;
    lastAsync?: Record<string, any>;
    raise?: Record<string, any>;
    reduceAsync?: Record<string, any>;
    toReadonlyArrayAsync?: Record<string, any>;
} = {}> extends ComputationModuleLike<TComputationType> {
    empty<T>(options?: TCreationOptions["empty"]): EmptyOf<TComputationType, T>;
    firstAsync<T>(options?: TCreationOptions["firstAsync"]): AsyncFunction1<ComputationOf<TComputationType, T>, Optional<T>>;
    gen<T>(factory: Factory<Generator<T>>, options?: TCreationOptions["gen"]): GenPureConstructor<TComputationType, T>;
    genWithSideEffects<T>(factory: Factory<Generator<T>>, options?: TCreationOptions["gen"]): GenWithSideEffectsConstructor<TComputationType, T>;
    fromReadonlyArray<T>(options?: {
        readonly count?: number;
        readonly start?: number;
    } & TCreationOptions["fromReadonlyArray"]): FromReadonlyArrayOperator<TComputationType, T>;
    fromValue<T>(options?: TCreationOptions["fromValue"]): FromValueOperator<TComputationType, T>;
    keep<T>(predicate: Predicate<T>): StatelessComputationOperator<TComputationType, T, T>;
    lastAsync<T>(options?: TCreationOptions["lastAsync"]): AsyncFunction1<ComputationOf<TComputationType, T>, Optional<T>>;
    map<TA, TB>(selector: Function1<TA, TB>): StatelessComputationOperator<TComputationType, TA, TB>;
    raise<T>(options?: {
        readonly raise?: Factory<unknown>;
    } & TCreationOptions["raise"]): RaiseOf<TComputationType, T>;
    reduceAsync<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>, options?: TCreationOptions["reduceAsync"]): AsyncFunction1<ComputationOf<TComputationType, T>, TAcc>;
    toObservable<T>(): ToObservableOperator<TComputationType, T>;
    toReadonlyArrayAsync<T>(options?: TCreationOptions["toReadonlyArrayAsync"]): AsyncFunction1<ComputationOf<TComputationType, T>, ReadonlyArray<T>>;
}
export interface SequentialComputationModule<TComputationType extends ComputationType> extends ComputationModuleLike<TComputationType> {
    catchError<T>(onError: SideEffect1<Error>): StatefulSynchronousComputationOperator<TComputationType, T, T>;
    catchError<T, TInnerLike extends HigherOrderInnerComputationLike>(onError: Function1<Error, HigherOrderInnerComputationOf<TComputationType, TInnerLike, T>>, options: {
        readonly innerType: TInnerLike;
    }): HigherOrderComputationOperator<TComputationType, TInnerLike, T, T>;
    concat<T>(...computations: readonly PureSynchronousComputationOf<TComputationType, T>[]): PureSynchronousComputationOf<TComputationType, T>;
    concat<T>(...computations: readonly SynchronousComputationOf<TComputationType, T>[]): SynchronousComputationWithSideEffectsOf<TComputationType, T>;
    concat<T>(...computations: readonly PureDeferredComputationOf<TComputationType, T>[]): PureDeferredComputationOf<TComputationType, T>;
    concat<T>(...computations: readonly DeferredComputationOf<TComputationType, T>[]): DeferredComputationWithSideEffectsOf<TComputationType, T>;
    concatAll<T>(): HigherOrderComputationOperator<TComputationType, PureSynchronousComputationLike, HigherOrderInnerComputationOf<TComputationType, PureSynchronousComputationLike, T>, T>;
    concatAll<T, TInnerLike extends HigherOrderInnerComputationLike>(options: {
        readonly innerType: TInnerLike;
    }): HigherOrderComputationOperator<TComputationType, TInnerLike, HigherOrderInnerComputationOf<TComputationType, TInnerLike, T>, T>;
    encodeUtf8(): StatefulSynchronousComputationOperator<TComputationType, string, Uint8Array>;
    forEach<T>(sideEffect: SideEffect1<T>): ComputationOperatorWithSideEffects<TComputationType, T, T>;
    repeat<T>(predicate: Predicate<number>): StatelessComputationOperator<TComputationType, T, T, DeferredComputationOf<TComputationType, T>>;
    repeat<T>(count: number): StatelessComputationOperator<TComputationType, T, T, DeferredComputationOf<TComputationType, T>>;
    repeat<T>(): StatelessComputationOperator<TComputationType, T, T, DeferredComputationOf<TComputationType, T>>;
    retry<T>(shouldRetry?: (count: number, error: Error) => boolean): StatelessComputationOperator<TComputationType, T, T, DeferredComputationOf<TComputationType, T>>;
    scan<T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): StatefulSynchronousComputationOperator<TComputationType, T, TAcc>;
    takeFirst<T>(options?: {
        readonly count?: number;
    }): StatefulSynchronousComputationOperator<TComputationType, T, T>;
    takeWhile<T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): StatefulSynchronousComputationOperator<TComputationType, T, T>;
    throwIfEmpty<T>(factory: Factory<unknown>, options?: undefined): StatefulSynchronousComputationOperator<TComputationType, T, T>;
}
export interface SynchronousComputationModule<TComputationType extends ComputationType, TCreationOptions extends {
    first?: Record<string, any>;
    last?: Record<string, any>;
    reduce?: Record<string, any>;
    run?: Record<string, any>;
    toReadonlyArray?: Record<string, any>;
    toRunnable?: Record<string, any>;
} = {}> extends ComputationModuleLike<TComputationType> {
    first<T>(options?: TCreationOptions["first"]): Function1<SynchronousComputationOf<TComputationType, T>, Optional<T>>;
    last<T>(options?: TCreationOptions["last"]): Function1<SynchronousComputationOf<TComputationType, T>, Optional<T>>;
    reduce<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>, options?: TCreationOptions["reduce"]): Function1<SynchronousComputationOf<TComputationType, T>, TAcc>;
    run<T>(options?: TCreationOptions["run"]): SideEffect1<SynchronousComputationWithSideEffectsOf<TComputationType, T>>;
    toReadonlyArray<T>(options?: TCreationOptions["toReadonlyArray"]): Function1<SynchronousComputationOf<TComputationType, T>, ReadonlyArray<T>>;
    toRunnable<T>(options?: TCreationOptions["toRunnable"]): ToRunnableOperator<TComputationType, T>;
}
export interface InteractiveComputationModule<TComputationType extends ComputationType> extends ComputationModuleLike<TComputationType> {
    zip: ZipConstructor<TComputationType>;
}
export interface ConcurrentDeferredComputationModule<TComputationType extends ComputationType> extends ComputationModuleLike<TComputationType> {
    fromAsyncFactory<T>(): Function1<(options?: {
        signal?: AbortSignal;
    }) => Promise<T>, DeferredComputationWithSideEffectsOf<TComputationType, T>>;
}
export interface SequentialReactiveComputationModule<TComputationType extends ComputationType> extends ComputationModuleLike<TComputationType> {
    buffer<T>(options?: {
        count?: number;
    }): StatefulSynchronousComputationOperator<TComputationType, T, readonly T[]>;
    decodeWithCharset(options?: {
        readonly charset?: string;
        readonly fatal?: boolean;
        readonly ignoreBOM?: boolean;
    }): StatefulSynchronousComputationOperator<TComputationType, ArrayBuffer, string>;
    distinctUntilChanged<T>(options?: {
        readonly equality?: Equality<T>;
    }): StatefulSynchronousComputationOperator<TComputationType, T, T>;
    pairwise<T>(): StatefulSynchronousComputationOperator<TComputationType, T, Tuple2<T, T>>;
    skipFirst<T>(options?: {
        readonly count?: number;
    }): StatefulSynchronousComputationOperator<TComputationType, T, T>;
    takeLast<T>(options?: {
        readonly count?: number;
    }): StatefulSynchronousComputationOperator<TComputationType, T, T>;
}
export interface MulticastedComputationModule<TComputationType extends ComputationType> extends ComputationModuleLike<TComputationType> {
    fromPromise<T>(): Function1<Promise<T>, MulticastComputationOf<TComputationType, T>>;
    never<T>(): MulticastComputationOf<TComputationType, T>;
}
export interface ConcurrentReactiveComputationModule<TComputationType extends ComputationType> extends ComputationModuleLike<TComputationType> {
    combineLatest: CombineConstructor<TComputationType>;
    forkMerge: ForkMerge<TComputationType>;
    fromAsyncIterable<T>(): FromAsyncIterableOperator<TComputationType, T>;
    fromObservable: <T>(scheduler: SchedulerLike) => FromObservableOperator<TComputationType, T>;
    merge<T>(...computations: readonly PureSynchronousComputationOf<TComputationType, T>[]): PureSynchronousComputationOf<TComputationType, T>;
    merge<T>(...computations: readonly SynchronousComputationOf<TComputationType, T>[]): SynchronousComputationWithSideEffectsOf<TComputationType, T>;
    merge<T>(...computations: readonly PureDeferredComputationOf<TComputationType, T>[]): PureDeferredComputationOf<TComputationType, T>;
    merge<T>(...computations: readonly DeferredComputationOf<TComputationType, T>[]): DeferredComputationWithSideEffectsOf<TComputationType, T>;
    merge<T>(...computations: readonly MulticastComputationOf<TComputationType, T>[]): MulticastComputationOf<TComputationType, T>;
    merge<T>(...computations: readonly PureComputationOf<TComputationType, T>[]): PureDeferredComputationOf<TComputationType, T>;
    merge<T>(...computations: readonly ComputationOf<TComputationType, T>[]): DeferredComputationWithSideEffectsOf<TComputationType, T>;
    takeUntil<T>(notifier: PureSynchronousComputationOf<TComputationType, unknown>): StatefulSynchronousComputationOperator<TComputationType, T, T>;
    takeUntil<T>(notifier: SynchronousComputationWithSideEffectsOf<TComputationType, unknown>): ComputationOperatorWithSideEffects<TComputationType, T, T>;
    takeUntil<T>(notifier: PureDeferredComputationOf<TComputationType, unknown>): StatefulAsynchronousComputationOperator<TComputationType, T, T>;
    takeUntil<T>(notifier: DeferredComputationWithSideEffectsOf<TComputationType, unknown>): Function1<ComputationOf<TComputationType, T>, DeferredComputationWithSideEffectsOf<TComputationType, T>>;
    takeUntil<T>(notifier: MulticastComputationOf<TComputationType, unknown>): StatelessAsynchronousComputationOperator<TComputationType, T, T>;
    withLatestFrom<TA, TB>(other: PureSynchronousComputationOf<TComputationType, TB>): StatefulSynchronousComputationOperator<TComputationType, TA, Tuple2<TA, TB>>;
    withLatestFrom<TA, TB, T>(other: PureSynchronousComputationOf<TComputationType, TB>, selector: Function2<TA, TB, T>): StatefulSynchronousComputationOperator<TComputationType, TA, T>;
    withLatestFrom<TA, TB>(other: SynchronousComputationWithSideEffectsOf<TComputationType, TB>): ComputationOperatorWithSideEffects<TComputationType, TA, Tuple2<TA, TB>>;
    withLatestFrom<TA, TB, T>(other: SynchronousComputationWithSideEffectsOf<TComputationType, TB>, selector: Function2<TA, TB, T>): ComputationOperatorWithSideEffects<TComputationType, TA, T>;
    withLatestFrom<TA, TB>(other: PureDeferredComputationOf<TComputationType, TB>): StatefulAsynchronousComputationOperator<TComputationType, TA, Tuple2<TA, TB>>;
    withLatestFrom<TA, TB, T>(other: PureDeferredComputationOf<TComputationType, TB>, selector: Function2<TA, TB, T>): StatefulAsynchronousComputationOperator<TComputationType, TA, T>;
    withLatestFrom<TA, TB>(other: DeferredComputationWithSideEffectsOf<TComputationType, TB>): Function1<ComputationOf<TComputationType, TA>, DeferredComputationWithSideEffectsOf<TComputationType, Tuple2<TA, TB>>>;
    withLatestFrom<TA, TB, T>(other: DeferredComputationWithSideEffectsOf<TComputationType, TB>, selector: Function2<TA, TB, T>): Function1<ComputationOf<TComputationType, TA>, DeferredComputationWithSideEffectsOf<TComputationType, T>>;
    withLatestFrom<TA, TB>(other: MulticastComputationOf<TComputationType, TB>): StatelessAsynchronousComputationOperator<TComputationType, TA, Tuple2<TA, TB>>;
    withLatestFrom<TA, TB, T>(other: MulticastComputationOf<TComputationType, TB>, selector: Function2<TA, TB, T>): StatelessAsynchronousComputationOperator<TComputationType, TA, T>;
    zipLatest: CombineConstructor<TComputationType>;
}
export declare const RunnableLike_eval: unique symbol;
/**
 * Represents a deferred computation that is synchronously evaluated.
 */
export interface RunnableLike<T = unknown> extends SynchronousComputationLike {
    readonly [ComputationLike_isDeferred]: false;
    [RunnableLike_eval](sink: SinkLike<T>): void;
}
export interface PureRunnableLike<T = unknown> extends RunnableLike<T> {
    readonly [ComputationLike_isPure]?: true;
}
export interface RunnableWithSideEffectsLike<T = unknown> extends RunnableLike<T> {
    readonly [ComputationLike_isPure]: false;
}
export interface IterableLike<T = unknown> extends Iterable<T>, SynchronousComputationLike, DeferredComputationLike {
    [ComputationLike_isDeferred]?: true;
    [ComputationLike_isSynchronous]?: true;
}
export interface PureIterableLike<T = unknown> extends IterableLike<T> {
    readonly [ComputationLike_isPure]?: true;
}
export interface IterableWithSideEffectsLike<T = unknown> extends IterableLike<T> {
    readonly [ComputationLike_isPure]: false;
}
export declare const PureSynchronousDeferredComputation: PureSynchronousComputationLike;
export declare const PureSynchronousNonDeferredComputation: PureSynchronousComputationLike;
export declare const SynchronousDeferredComputationWithSideEffects: SynchronousComputationWithSideEffectsLike;
export declare const SynchronousNonDeferredComputationWithSideEffects: SynchronousComputationWithSideEffectsLike;
export declare const PureDeferredComputation: PureDeferredComputationLike;
export declare const DeferredComputationWithSideEffects: DeferredComputationWithSideEffectsLike;
export declare const MulticastComputation: MulticastComputationLike;
export declare const EventSourceLike_addEventListener: unique symbol;
/**
 * @noInheritDoc
 */
export interface EventSourceLike<out T = unknown> extends MulticastLike {
    readonly [ComputationLike_isDeferred]: false;
    readonly [ComputationLike_isSynchronous]: false;
    readonly [ComputationLike_isPure]?: true;
    [EventSourceLike_addEventListener](listener: EventListenerLike<T>): void;
}
export declare const ProducerLike_consume: unique symbol;
/**
 * @noInheritDoc
 */
export interface ProducerLike<out T = unknown> extends ComputationLike {
    readonly [ComputationLike_isDeferred]?: true;
    [ProducerLike_consume](consumer: ConsumerLike<T>): void;
}
/**
 * @noInheritDoc
 */
export interface PureProducerLike<out T = unknown> extends ProducerLike<T>, PureDeferredComputationLike {
    readonly [ComputationLike_isDeferred]?: true;
    readonly [ComputationLike_isPure]?: true;
}
/**
 * @noInheritDoc
 */
export interface ProducerWithSideEffectsLike<out T = unknown> extends ProducerLike<T>, DeferredComputationWithSideEffectsLike {
    readonly [ComputationLike_isDeferred]?: true;
    readonly [ComputationLike_isPure]: false;
}
/**
 * @noInheritDoc
 */
export interface PublisherLike<T = unknown> extends EventSourceLike<T>, EventListenerLike<T> {
}
export declare const StoreLike_value: unique symbol;
/**
 * @noInheritDoc
 */
export interface StoreLike<T = unknown> extends EventSourceLike<T> {
    readonly [StoreLike_value]: T;
}
/**
 * @noInheritDoc
 */
export interface WritableStoreLike<T = unknown> extends StoreLike<T>, PublisherLike<T> {
    [StoreLike_value]: T;
}
export declare const ObservableLike_observe: unique symbol;
/**
 * @noInheritDoc
 */
export interface ObservableLike<out T = unknown> extends ComputationLike {
    /**
     * Subscribes the given `ObserverLike` to the `ObservableLike` source.
     *
     * @param observer - The observer.
     */
    [ObservableLike_observe](observer: ObserverLike<T>): void;
}
/**
 * @noInheritDoc
 */
export interface DeferredObservableLike<out T = unknown> extends ObservableLike<T>, DeferredComputationLike {
    readonly [ComputationLike_isDeferred]?: true;
}
/**
 * @noInheritDoc
 */
export interface SynchronousObservableLike<out T = unknown> extends DeferredObservableLike<T>, SynchronousComputationLike {
    readonly [ComputationLike_isDeferred]?: true;
    readonly [ComputationLike_isSynchronous]?: true;
}
/**
 * @noInheritDoc
 */
export interface PureObservableLike<out T = unknown> extends ObservableLike<T>, PureComputationLike {
    readonly [ComputationLike_isPure]?: true;
}
/**
 * @noInheritDoc
 */
export interface PureDeferredObservableLike<out T = unknown> extends DeferredObservableLike<T>, PureObservableLike<T> {
    readonly [ComputationLike_isPure]?: true;
    readonly [ComputationLike_isDeferred]?: true;
}
/**
 * @noInheritDoc
 */
export interface DeferredObservableWithSideEffectsLike<out T = unknown> extends DeferredObservableLike<T> {
    readonly [ComputationLike_isPure]: false;
}
/**
 * @noInheritDoc
 */
export interface PureSynchronousObservableLike<out T = unknown> extends SynchronousObservableLike<T>, PureDeferredObservableLike<T> {
    readonly [ComputationLike_isDeferred]?: true;
    readonly [ComputationLike_isPure]?: true;
    readonly [ComputationLike_isSynchronous]?: true;
}
/**
 * @noInheritDoc
 */
export interface SynchronousObservableWithSideEffectsLike<out T = unknown> extends SynchronousObservableLike<T>, DeferredObservableWithSideEffectsLike<T> {
    readonly [ComputationLike_isDeferred]?: true;
    readonly [ComputationLike_isPure]: false;
    readonly [ComputationLike_isSynchronous]?: true;
}
/**
 * @noInheritDoc
 */
export interface MulticastObservableLike<out T = unknown> extends PureObservableLike<T>, MulticastLike {
    readonly [ComputationLike_isDeferred]: false;
    readonly [ComputationLike_isSynchronous]: false;
}
export declare const BroadcasterLike_connect: unique symbol;
export interface BroadcasterLike<out T = unknown> extends ComputationLike, MulticastLike {
    readonly [ComputationLike_isDeferred]: false;
    readonly [ComputationLike_isPure]?: true;
    readonly [ComputationLike_isSynchronous]: false;
    [BroadcasterLike_connect](sink: SinkLike<T>): void;
}
/**
 * @noInheritDoc
 */
export interface SubjectLike<out T = unknown> extends BroadcasterLike<T>, SinkLike<T> {
}
/**
 * Represents a duplex stream
 *
 * @noInheritDoc
 */
export interface StreamLike<TReq, out T> extends ConsumerLike<TReq>, MulticastObservableLike<T> {
}
export declare const StreamableLike_stream: unique symbol;
/**
 * A container that supports bi-directional streaming.
 *
 * @typeparam TReq
 * @typeparam T
 * @typeparam TStream
 *
 * @noInheritDoc
 */
export interface StreamableLike<TReq = unknown, out T = unknown, TStream extends StreamLike<TReq, T> = StreamLike<TReq, T>> {
    /**
     * Subscribe to the Streamable.
     *
     * @param scheduler - The scheduler to subscribe to the stream with.
     * @param options
     */
    [StreamableLike_stream](scheduler: SchedulerLike, options?: {
        readonly autoDispose?: boolean;
        /**
         * The number of items to buffer for replay when an observer subscribes
         * to the stream.
         */
        readonly replay?: number;
        /**
         * The capacity of the stream's request queue.
         */
        readonly capacity?: number;
        readonly backpressureStrategy?: BackpressureStrategy;
    }): TStream & DisposableLike;
}
export type StreamOf<TStreamable extends StreamableLike> = ReturnType<TStreamable[typeof StreamableLike_stream]>;
export interface AsyncIterableLike<T = unknown> extends AsyncIterable<T>, DeferredComputationLike {
    readonly [ComputationLike_isSynchronous]: false;
}
export interface PureAsyncIterableLike<T = unknown> extends AsyncIterableLike<T>, PureComputationLike {
    readonly [ComputationLike_isDeferred]?: true;
    readonly [ComputationLike_isPure]?: true;
    readonly [ComputationLike_isSynchronous]: false;
}
export interface AsyncIterableWithSideEffectsLike<T = unknown> extends AsyncIterableLike<T>, ComputationWithSideEffectsLike {
    readonly [ComputationLike_isDeferred]?: true;
    readonly [ComputationLike_isPure]: false;
    readonly [ComputationLike_isSynchronous]: false;
}
export {};
