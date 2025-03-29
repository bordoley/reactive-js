import type { Equality, Factory, Function1, Function2, Predicate, Reducer, SideEffect1, Tuple2, Tuple3, Tuple4 } from "./functions.js";
import type { BackpressureStrategy, ConsumerLike, DisposableContainerLike, DisposableLike, EventListenerLike, ObserverLike, PauseableLike, SchedulerLike, SinkLike } from "./utils.js";
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
export declare const PureSynchronousDeferredComputation: PureSynchronousComputationLike;
export declare const PureSynchronousNonDeferredComputation: PureSynchronousComputationLike;
export declare const SynchronousDeferredComputationWithSideEffects: SynchronousComputationWithSideEffectsLike;
export declare const SynchronousNonDeferredComputationWithSideEffects: SynchronousComputationWithSideEffectsLike;
export declare const PureDeferredComputation: PureDeferredComputationLike;
export declare const DeferredComputationWithSideEffects: DeferredComputationWithSideEffectsLike;
export declare const MulticastComputation: MulticastComputationLike;
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
export interface GenericComputationType<TComputationBaseOfT extends ComputationLike, TPureDeferredComputationOfT extends TComputationBaseOfT & PureDeferredComputationLike, TDeferredDeferredComputationWithSideEffectsOfT extends TComputationBaseOfT & DeferredComputationWithSideEffectsLike, TPureSynchronousOfT extends TComputationBaseOfT & PureSynchronousComputationLike, TSynchronousWithSideEffectsOfT extends TComputationBaseOfT & SynchronousComputationWithSideEffectsLike, TMulticastComputationOfT extends TComputationBaseOfT & MulticastComputationLike> {
    readonly [Computation_T]?: unknown;
    readonly [Computation_baseOfT]?: TComputationBaseOfT;
    readonly [Computation_pureDeferredOfT]?: TPureDeferredComputationOfT;
    readonly [Computation_deferredWithSideEffectsOfT]?: TDeferredDeferredComputationWithSideEffectsOfT;
    readonly [Computation_pureSynchronousOfT]?: TPureSynchronousOfT;
    readonly [Computation_synchronousWithSideEffectsOfT]?: TSynchronousWithSideEffectsOfT;
    readonly [Computation_multicastOfT]?: TMulticastComputationOfT;
}
export type AnyComputationType = GenericComputationType<any, any, any, any, any, any>;
export type ComputationType = GenericComputationType<ComputationLike, PureDeferredComputationLike, DeferredComputationWithSideEffectsLike, PureSynchronousComputationLike, SynchronousComputationWithSideEffectsLike, MulticastComputationLike>;
export interface ComputationTypeOf<TComputationType extends ComputationType, T = unknown> {
    readonly [Computation_pureSynchronousOfT]?: PureSynchronousComputationOf<TComputationType, T>;
    readonly [Computation_synchronousWithSideEffectsOfT]?: SynchronousComputationWithSideEffectsOf<TComputationType, T>;
    readonly [Computation_pureDeferredOfT]?: PureDeferredComputationOf<TComputationType, T>;
    readonly [Computation_deferredWithSideEffectsOfT]?: DeferredComputationWithSideEffectsOf<TComputationType, T>;
    readonly [Computation_multicastOfT]?: MulticastComputationOf<TComputationType, T>;
}
type FirstNotNeverComputation<T, K1 extends keyof T, K2 extends keyof T = never, K3 extends keyof T = never> = (NonNullable<T[K1]> extends never ? (NonNullable<T[K2]> extends never ? (NonNullable<T[K3]> extends never ? never : K3) : K2) : K1);
export type NewInstanceWithSideEffectsOf<TComputationType extends ComputationType, T> = TComputationType extends {
    readonly [Computation_baseOfT]?: unknown;
} ? NonNullable<(TComputationType & {
    readonly [Computation_T]: T;
})[FirstNotNeverComputation<TComputationType, typeof Computation_synchronousWithSideEffectsOfT, typeof Computation_deferredWithSideEffectsOfT>] & ComputationBaseOf<TComputationType, T>> : {
    readonly _C: TComputationType;
    readonly _T: () => T;
};
export type NewPureInstanceType<TComputationType extends ComputationType, T> = TComputationType extends {
    readonly [Computation_baseOfT]?: unknown;
} ? NonNullable<(TComputationType & {
    readonly [Computation_T]: T;
})[FirstNotNeverComputation<TComputationType, typeof Computation_pureSynchronousOfT, typeof Computation_pureDeferredOfT, typeof Computation_multicastOfT>] & ComputationBaseOf<TComputationType, T>> : {
    readonly _C: TComputationType;
    readonly _T: () => T;
};
export type NewPureInstanceOf<TComputationType extends ComputationType, T> = NewPureInstanceType<TComputationType, T> extends MulticastComputationOf<TComputationType, T> ? NewPureInstanceType<TComputationType, T> & DisposableLike & PauseableLike : NewPureInstanceType<TComputationType, T>;
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
export type ComputationWithSideEffectsOf<TComputationType extends ComputationType, T> = SynchronousComputationWithSideEffectsOf<TComputationType, T> | DeferredComputationWithSideEffectsOf<TComputationType, T>;
export type ComputationOf<TComputationType extends ComputationType, T> = DeferredComputationOf<TComputationType, T> | SynchronousComputationOf<TComputationType, T> | MulticastComputationOf<TComputationType, T>;
export type PureComputationOperator<TComputationType extends ComputationType, TA, out TB> = <TComputationOf extends ComputationBaseOf<TComputationType, TA>>(computation: TComputationOf) => TComputationOf extends PureSynchronousComputationOf<TComputationType, TA> ? PureSynchronousComputationOf<TComputationType, TB> : TComputationOf extends SynchronousComputationWithSideEffectsOf<TComputationType, TA> ? SynchronousComputationWithSideEffectsOf<TComputationType, TB> : TComputationOf extends PureDeferredComputationOf<TComputationType, TA> ? PureDeferredComputationOf<TComputationType, TB> : TComputationOf extends DeferredComputationWithSideEffectsOf<TComputationType, TA> ? DeferredComputationWithSideEffectsOf<TComputationType, TB> : TComputationOf extends MulticastComputationOf<TComputationType, TA> ? MulticastComputationOf<TComputationType, TB> : never;
export type ComputationOperatorWithSideEffects<TComputationType extends ComputationType, TA, out TB> = <TComputationOf extends ComputationBaseOf<TComputationType, TA>>(computation: TComputationOf) => TComputationOf extends SynchronousComputationOf<TComputationType, TA> ? SynchronousComputationWithSideEffectsOf<TComputationType, TB> : TComputationOf extends DeferredComputationOf<TComputationType, TA> ? DeferredComputationWithSideEffectsOf<TComputationType, TB> : never;
export type PureAsynchronousComputationOperator<TComputationType extends ComputationType, TA, out TB> = <TComputationOf extends ComputationBaseOf<TComputationType, TA>>(computation: TComputationOf) => TComputationOf extends PureDeferredComputationOf<TComputationType, TA> ? PureDeferredComputationOf<TComputationType, TB> : TComputationOf extends DeferredComputationWithSideEffectsOf<TComputationType, TA> ? DeferredComputationWithSideEffectsOf<TComputationType, TB> : TComputationOf extends MulticastComputationOf<TComputationType, TA> ? MulticastComputationOf<TComputationType, TB> : never;
type HigherOrderPureSynchronousComputationOut<TComputationType extends ComputationType, TInnerLike extends ComputationLike, TB> = TInnerLike extends PureSynchronousComputationLike ? PureSynchronousComputationOf<TComputationType, TB> : TInnerLike extends SynchronousComputationWithSideEffectsLike ? SynchronousComputationWithSideEffectsOf<TComputationType, TB> : TInnerLike extends PureDeferredComputationLike ? PureDeferredComputationOf<TComputationType, TB> : TInnerLike extends DeferredComputationWithSideEffectsLike ? DeferredComputationWithSideEffectsOf<TComputationType, TB> : never;
type HigherOrderSynchronousComputationWithSideEffectsOut<TComputationType extends ComputationType, TInnerLike extends ComputationLike, TB> = TInnerLike extends SynchronousComputationLike ? SynchronousComputationWithSideEffectsOf<TComputationType, TB> : TInnerLike extends DeferredComputationLike ? DeferredComputationWithSideEffectsOf<TComputationType, TB> : never;
type HigherOrderPureDeferredComputationOut<TComputationType extends ComputationType, TInnerLike extends ComputationLike, TB> = TInnerLike extends PureDeferredComputationLike ? PureDeferredComputationOf<TComputationType, TB> : TInnerLike extends DeferredComputationWithSideEffectsLike ? DeferredComputationWithSideEffectsOf<TComputationType, TB> : never;
type HigherOrderDeferredComputationWithSideEffectsOut<TComputationType extends ComputationType, TInnerLike extends ComputationLike, TB> = TInnerLike extends DeferredComputationLike ? DeferredComputationWithSideEffectsOf<TComputationType, TB> : never;
export type HigherOrderInnerComputationLike = PureSynchronousComputationLike | SynchronousComputationWithSideEffectsLike | PureDeferredComputationLike | DeferredComputationWithSideEffectsLike;
export type HigherOrderInnerComputationOf<TComputationType extends ComputationType, THigherOrderInnerComputation extends HigherOrderInnerComputationLike, T> = THigherOrderInnerComputation extends PureSynchronousComputationLike ? PureSynchronousComputationOf<TComputationType, T> : THigherOrderInnerComputation extends SynchronousComputationWithSideEffectsLike ? SynchronousComputationOf<TComputationType, T> : THigherOrderInnerComputation extends PureDeferredComputationLike ? PureDeferredComputationOf<TComputationType, T> : THigherOrderInnerComputation extends DeferredComputationWithSideEffectsLike ? DeferredComputationWithSideEffectsOf<TComputationType, T> : never;
export type FlattenedHigherOrderComputationLike<TOuter extends ComputationLike, TInner extends ComputationLike> = {
    readonly [ComputationLike_isPure]?: NonNullable<TOuter[typeof ComputationLike_isPure]> & NonNullable<TInner[typeof ComputationLike_isPure]>;
    readonly [ComputationLike_isSynchronous]?: NonNullable<TOuter[typeof ComputationLike_isSynchronous]> & NonNullable<TInner[typeof ComputationLike_isSynchronous]>;
    readonly [ComputationLike_isDeferred]?: NonNullable<TOuter[typeof ComputationLike_isDeferred]> & NonNullable<TInner[typeof ComputationLike_isDeferred]>;
};
export type HigherOrderComputationOperator<TComputationType extends ComputationType, TInnerLike extends HigherOrderInnerComputationLike, TA, out TB> = <TComputationIn extends ComputationBaseOf<TComputationType, TA>>(computation: TComputationIn) => TComputationIn extends PureSynchronousComputationOf<TComputationType, TA> ? HigherOrderPureSynchronousComputationOut<TComputationType, TInnerLike, TB> : TComputationIn extends SynchronousComputationWithSideEffectsOf<TComputationType, TA> ? HigherOrderSynchronousComputationWithSideEffectsOut<TComputationType, TInnerLike, TB> : TComputationIn extends PureDeferredComputationOf<TComputationType, TA> ? HigherOrderPureDeferredComputationOut<TComputationType, TInnerLike, TB> : TComputationIn extends DeferredComputationWithSideEffectsOf<TComputationType, TA> ? HigherOrderDeferredComputationWithSideEffectsOut<TComputationType, TInnerLike, TB> : never;
/**
  FIXME: Consider using FlattenedHigherOrderComputationLike<TComputationIn, TInnerLike> &
  ComputationOf<TComputationType, TB> instead.
 */
export type BroadcastOperator<TComputationType extends ComputationType, T> = <TComputationBaseOf extends ComputationBaseOf<TComputationType, T>>(computation: TComputationBaseOf) => TComputationBaseOf extends DeferredComputationOf<TComputationType, T> ? BroadcasterLike<T> : never;
type FromPureAsyncIterableOf<TComputationType extends ComputationType, T> = PureDeferredComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? PureDeferredComputationOf<TComputationType, T> : MulticastComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? MulticastComputationOf<TComputationType, T> & DisposableLike : never;
type FromAsyncIterableWithSideEffectsOf<TComputationType extends ComputationType, T> = DeferredComputationWithSideEffectsOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? DeferredComputationWithSideEffectsOf<TComputationType, T> : MulticastComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? MulticastComputationOf<TComputationType, T> & DisposableLike : never;
export type FromAsyncIterableOperator<TComputationType extends ComputationType, T> = <TIterable extends AsyncIterableLike<T>>(iterable: TIterable) => TIterable extends PureAsyncIterableLike<T> ? FromPureAsyncIterableOf<TComputationType, T> : TIterable extends AsyncIterableWithSideEffectsLike<T> ? FromAsyncIterableWithSideEffectsOf<TComputationType, T> : never;
type FromPureSynchronousOf<TComputationType extends ComputationType, T> = PureSynchronousComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? PureSynchronousComputationOf<TComputationType, T> : PureDeferredComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? PureDeferredComputationOf<TComputationType, T> : MulticastComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? MulticastComputationOf<TComputationType, T> & DisposableLike : never;
type FromSynchronousWithSideEffectsOf<TComputationType extends ComputationType, T> = SynchronousComputationWithSideEffectsOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? SynchronousComputationWithSideEffectsOf<TComputationType, T> : DeferredComputationWithSideEffectsOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? DeferredComputationWithSideEffectsOf<TComputationType, T> : MulticastComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? MulticastComputationOf<TComputationType, T> & DisposableLike : never;
type FromPureDeferredOf<TComputationType extends ComputationType, T> = PureDeferredComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? PureDeferredComputationOf<TComputationType, T> : MulticastComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? MulticastComputationOf<TComputationType, T> & DisposableLike : never;
type FromDeferredWithSideEffectOf<TComputationType extends ComputationType, T> = DeferredComputationWithSideEffectsOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? DeferredComputationWithSideEffectsOf<TComputationType, T> : MulticastComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? MulticastComputationOf<TComputationType, T> & DisposableLike : never;
export type FromObservableOperator<TComputationType extends ComputationType, T> = <TObservable extends ObservableLike<T>>(iterable: TObservable) => TObservable extends PureSynchronousObservableLike ? FromPureSynchronousOf<TComputationType, T> : TObservable extends SynchronousObservableWithSideEffectsLike ? FromSynchronousWithSideEffectsOf<TComputationType, T> : TObservable extends PureObservableLike ? FromPureDeferredOf<TComputationType, T> : TObservable extends ObservableWithSideEffectsLike ? FromDeferredWithSideEffectOf<TComputationType, T> : never;
export type FromProducerOperator<TComputationType extends ComputationType, T> = <TProducer extends ProducerLike<T>>(iterable: TProducer) => TProducer extends PureProducerLike ? FromPureDeferredOf<TComputationType, T> : TProducer extends ProducerWithSideEffectsLike ? FromDeferredWithSideEffectOf<TComputationType, T> : never;
type FromPureIterableOf<TComputationType extends ComputationType, T> = PureSynchronousComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? PureSynchronousComputationOf<TComputationType, T> : PureDeferredComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? PureDeferredComputationOf<TComputationType, T> : MulticastComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? MulticastComputationOf<TComputationType, T> & DisposableLike : never;
type FromIterableWithSideEffectsOf<TComputationType extends ComputationType, T> = SynchronousComputationWithSideEffectsOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? SynchronousComputationWithSideEffectsOf<TComputationType, T> : DeferredComputationWithSideEffectsOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? DeferredComputationWithSideEffectsOf<TComputationType, T> : MulticastComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? MulticastComputationOf<TComputationType, T> & DisposableLike : never;
export type FromIterableOperator<TComputationType extends ComputationType, T> = <TIterable extends IterableLike<T>>(iterable: TIterable) => TIterable extends PureIterableLike<T> ? FromPureIterableOf<TComputationType, T> : TIterable extends IterableWithSideEffectsLike<T> ? FromIterableWithSideEffectsOf<TComputationType, T> : never;
export type ToObservableOperator<TComputationType extends ComputationType, T> = <TComputationBaseOf extends ComputationBaseOf<TComputationType, T>>(computation: TComputationBaseOf) => TComputationBaseOf extends PureSynchronousComputationOf<TComputationType, T> ? PureSynchronousObservableLike<T> : TComputationBaseOf extends SynchronousComputationWithSideEffectsOf<TComputationType, T> ? SynchronousObservableWithSideEffectsLike<T> : TComputationBaseOf extends PureDeferredComputationOf<TComputationType, T> ? PureObservableLike<T> : TComputationBaseOf extends DeferredComputationWithSideEffectsOf<TComputationType, T> ? ObservableWithSideEffectsLike<T> : TComputationBaseOf extends MulticastComputationOf<TComputationType, T> ? PureObservableLike<T> : never;
export type ToProducer<TComputationType extends ComputationType, T> = <TComputationBaseOf extends ComputationBaseOf<TComputationType, T>>(computation: TComputationBaseOf) => TComputationBaseOf extends PureComputationOf<TComputationType, T> ? PureProducerLike<T> : TComputationBaseOf extends ComputationWithSideEffectsOf<TComputationType, T> ? ProducerWithSideEffectsLike<T> : never;
export type ToRunnableOperator<TComputationType extends ComputationType, T> = <TComputationBaseOf extends ComputationBaseOf<TComputationType, T>>(computation: TComputationBaseOf) => TComputationBaseOf extends PureSynchronousComputationOf<TComputationType, T> ? PureRunnableLike<T> : TComputationBaseOf extends SynchronousComputationWithSideEffectsOf<TComputationType, T> ? RunnableWithSideEffectsLike<T> : never;
export interface CombineConstructor<TComputationType extends ComputationType> {
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
    <TA, TB>(a: MulticastComputationOf<TComputationType, TA>, b: MulticastComputationOf<TComputationType, TB>): MulticastComputationOf<TComputationType, Tuple2<TA, TB>>;
    <TA, TB, TC>(a: MulticastComputationOf<TComputationType, TA>, b: MulticastComputationOf<TComputationType, TB>, c: MulticastComputationOf<TComputationType, TC>): MulticastComputationOf<TComputationType, Tuple3<TA, TB, TC>>;
    <TA, TB, TC, TD>(a: MulticastComputationOf<TComputationType, TA>, b: MulticastComputationOf<TComputationType, TB>, c: MulticastComputationOf<TComputationType, TC>, d: MulticastComputationOf<TComputationType, TD>): MulticastComputationOf<TComputationType, Tuple4<TA, TB, TC, TD>>;
}
interface MulticastComputationForkMerge<TComputationType extends ComputationType> {
    <TIn, TOut>(a: Function1<MulticastComputationOf<TComputationType, TIn>, MulticastComputationOf<TComputationType, TOut>>, b: Function1<MulticastComputationOf<TComputationType, TIn>, MulticastComputationOf<TComputationType, TOut>>, ...tail: Function1<MulticastComputationOf<TComputationType, TIn>, MulticastComputationOf<TComputationType, TOut>>[]): MulticastComputationOf<TComputationType, TOut>;
}
interface DeferredComputationForkMerge<TComputationType extends ComputationType> {
    <TIn, TOut>(a: Function1<BroadcasterLike<TIn>, PureDeferredComputationOf<TComputationType, TOut>>, b: Function1<BroadcasterLike<TIn>, PureDeferredComputationOf<TComputationType, TOut>>, ...tail: Function1<BroadcasterLike<TIn>, PureDeferredComputationOf<TComputationType, TOut>>[]): PureDeferredComputationOf<TComputationType, TOut>;
    <TIn, TOut>(a: Function1<BroadcasterLike<TIn>, PureDeferredComputationOf<TComputationType, TOut>>, b: Function1<BroadcasterLike<TIn>, PureDeferredComputationOf<TComputationType, TOut>>, options: {
        readonly innerType: DeferredComputationWithSideEffectsLike;
    }): PureDeferredComputationOf<TComputationType, TOut>;
    <TIn, TOut>(a: Function1<BroadcasterLike<TIn>, PureDeferredComputationOf<TComputationType, TOut>>, b: Function1<BroadcasterLike<TIn>, PureDeferredComputationOf<TComputationType, TOut>>, c: Function1<BroadcasterLike<TIn>, PureDeferredComputationOf<TComputationType, TOut>>, options: {
        readonly innerType: DeferredComputationWithSideEffectsLike;
    }): PureDeferredComputationOf<TComputationType, TOut>;
    <TIn, TOut>(a: Function1<BroadcasterLike<TIn>, PureDeferredComputationOf<TComputationType, TOut>>, b: Function1<BroadcasterLike<TIn>, PureDeferredComputationOf<TComputationType, TOut>>, c: Function1<BroadcasterLike<TIn>, PureDeferredComputationOf<TComputationType, TOut>>, d: Function1<BroadcasterLike<TIn>, PureDeferredComputationOf<TComputationType, TOut>>, options: {
        readonly innerType: DeferredComputationWithSideEffectsLike;
    }): PureDeferredComputationOf<TComputationType, TOut>;
}
export type ForkMerge<TComputationType extends ComputationType> = MulticastComputationOf<TComputationType, any> extends ComputationBaseOf<TComputationType, any> ? MulticastComputationForkMerge<TComputationType> : DeferredComputationOf<TComputationType, any> extends ComputationBaseOf<TComputationType, any> ? DeferredComputationForkMerge<TComputationType> : never;
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
}
export declare const ComputationModuleLike_computationType: unique symbol;
export interface ComputationModuleLike<TComputationType extends ComputationType = ComputationType> {
    [ComputationModuleLike_computationType]?: TComputationType;
}
export type ComputationTypeOfModule<TModule extends ComputationModuleLike> = NonNullable<TModule[typeof ComputationModuleLike_computationType]>;
export type PickComputationModule<TModule extends ComputationModuleLike, K extends keyof TModule> = Pick<TModule, K | typeof ComputationModuleLike_computationType>;
export type ComputationOfModule<TModule extends ComputationModuleLike, T> = ComputationOf<ComputationTypeOfModule<TModule>, T>;
export type DeferredComputationOfModule<TModule extends ComputationModuleLike, T> = DeferredComputationOf<ComputationTypeOfModule<TModule>, T>;
export type MulticastComputationOfModule<TModule extends ComputationModuleLike, T> = MulticastComputationOf<ComputationTypeOfModule<TModule>, T>;
export interface ComputationModule<TComputationType extends AnyComputationType = AnyComputationType, TCreationOptions extends {
    genPure?: Record<string, any>;
    toProducer?: Record<string, any>;
} = {}> extends ComputationModuleLike<TComputationType> {
    distinctUntilChanged<T>(options?: {
        readonly equality?: Equality<T>;
    }): PureComputationOperator<TComputationType, T, T>;
    encodeUtf8(): PureComputationOperator<TComputationType, string, Uint8Array>;
    genPure<T>(factory: Factory<Iterator<T>>, options?: TCreationOptions["genPure"]): NewPureInstanceOf<TComputationType, T>;
    keep<T>(predicate: Predicate<T>): PureComputationOperator<TComputationType, T, T>;
    map<TA, TB>(selector: Function1<TA, TB>): PureComputationOperator<TComputationType, TA, TB>;
    scan<T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): PureComputationOperator<TComputationType, T, TAcc>;
    pairwise<T>(): PureComputationOperator<TComputationType, T, Tuple2<T, T>>;
    skipFirst<T>(options?: {
        readonly count?: number;
    }): PureComputationOperator<TComputationType, T, T>;
    takeFirst<T>(options?: {
        readonly count?: number;
    }): PureComputationOperator<TComputationType, T, T>;
    takeWhile<T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): PureComputationOperator<TComputationType, T, T>;
    toProducer<T>(options?: TCreationOptions["toProducer"]): ToProducer<TComputationType, T>;
}
export interface SequentialComputationModule<TComputationType extends AnyComputationType = AnyComputationType, TCreationOptions extends {
    gen?: Record<string, any>;
} = {}> extends ComputationModuleLike<TComputationType> {
    catchError<T>(onError: SideEffect1<Error>): PureComputationOperator<TComputationType, T, T>;
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
    forEach<T>(sideEffect: SideEffect1<T>): ComputationOperatorWithSideEffects<TComputationType, T, T>;
    gen<T>(factory: Factory<Iterator<T>>, options?: TCreationOptions["gen"]): NewInstanceWithSideEffectsOf<TComputationType, T>;
    repeat<T>(predicate: Predicate<number>): PureComputationOperator<TComputationType, T, T>;
    repeat<T>(count: number): PureComputationOperator<TComputationType, T, T>;
    repeat<T>(): PureComputationOperator<TComputationType, T, T>;
    retry<T>(shouldRetry?: (count: number, error: Error) => boolean): PureComputationOperator<TComputationType, T, T>;
    scanDistinct<T, TAcc>(reducer: Reducer<T, TAcc>, initialState: Factory<TAcc>, options?: {
        readonly equality?: Equality<TAcc>;
    }): PureComputationOperator<TComputationType, T, TAcc>;
    throwIfEmpty<T>(factory: Factory<unknown>, options?: undefined): PureComputationOperator<TComputationType, T, T>;
}
export interface SynchronousComputationModule<TComputationType extends AnyComputationType = AnyComputationType, TCreationOptions extends {
    toRunnable?: Record<string, any>;
} = {}> extends ComputationModuleLike<TComputationType> {
    toRunnable<T>(options?: TCreationOptions["toRunnable"]): ToRunnableOperator<TComputationType, T>;
}
export interface InteractiveComputationModule<TComputationType extends AnyComputationType = AnyComputationType, TCreationOptions extends {
    toObservable?: Record<string, any>;
} = {}> extends ComputationModuleLike<TComputationType> {
    toObservable<T>(options?: TCreationOptions["toObservable"]): ToObservableOperator<TComputationType, T>;
    zip: ZipConstructor<TComputationType>;
}
export interface ConcurrentDeferredComputationModule<TComputationType extends ComputationType> extends ComputationModuleLike<TComputationType> {
    genAsync<T>(factory: Factory<AsyncIterator<T>>): NewInstanceWithSideEffectsOf<TComputationType, T>;
    genPureAsync<T>(factory: Factory<AsyncIterator<T>>): NewPureInstanceOf<TComputationType, T>;
}
export interface SequentialReactiveComputationModule<TComputationType extends AnyComputationType = AnyComputationType> extends ComputationModuleLike<TComputationType> {
    buffer<T>(options?: {
        count?: number;
    }): PureComputationOperator<TComputationType, T, readonly T[]>;
    decodeWithCharset(options?: {
        readonly charset?: string;
        readonly fatal?: boolean;
        readonly ignoreBOM?: boolean;
    }): PureComputationOperator<TComputationType, ArrayBuffer, string>;
    takeLast<T>(options?: {
        readonly count?: number;
    }): PureComputationOperator<TComputationType, T, T>;
}
export interface ConcurrentReactiveComputationModule<TComputationType extends AnyComputationType = AnyComputationType, TCreationOptions extends {
    fromAsyncIterable?: Record<string, any>;
    never?: Record<string, any>;
} = {}> extends ComputationModuleLike<TComputationType> {
    fromBroadcaster<T>(): Function1<BroadcasterLike<T>, PureDeferredComputationOf<TComputationType, T>>;
    fromAsyncIterable<T>(options?: TCreationOptions["fromAsyncIterable"]): FromAsyncIterableOperator<TComputationType, T>;
    fromObservable<T>(options?: {
        scheduler?: SchedulerLike;
    }): FromObservableOperator<TComputationType, T>;
    fromProducer<T>(): FromProducerOperator<TComputationType, T>;
    combineLatest: CombineConstructor<TComputationType>;
    forkMerge: ForkMerge<TComputationType>;
    merge<T>(...computations: readonly PureSynchronousComputationOf<TComputationType, T>[]): PureSynchronousComputationOf<TComputationType, T>;
    merge<T>(...computations: readonly SynchronousComputationOf<TComputationType, T>[]): SynchronousComputationWithSideEffectsOf<TComputationType, T>;
    merge<T>(...computations: readonly PureDeferredComputationOf<TComputationType, T>[]): PureDeferredComputationOf<TComputationType, T>;
    merge<T>(...computations: readonly DeferredComputationOf<TComputationType, T>[]): DeferredComputationWithSideEffectsOf<TComputationType, T>;
    merge<T>(...computations: readonly MulticastComputationOf<TComputationType, T>[]): MulticastComputationOf<TComputationType, T>;
    merge<T>(...computations: readonly ComputationOf<TComputationType, T>[]): ComputationOf<TComputationType, T> & DisposableLike;
    never<T>(options?: TCreationOptions["never"]): NewPureInstanceOf<TComputationType, T>;
    takeUntil<T>(notifier: PureSynchronousComputationOf<TComputationType, unknown>): PureComputationOperator<TComputationType, T, T>;
    takeUntil<T>(notifier: SynchronousComputationWithSideEffectsOf<TComputationType, unknown>): ComputationOperatorWithSideEffects<TComputationType, T, T>;
    takeUntil<T>(notifier: PureDeferredComputationOf<TComputationType, unknown>): PureAsynchronousComputationOperator<TComputationType, T, T>;
    takeUntil<T>(notifier: DeferredComputationWithSideEffectsOf<TComputationType, unknown>): Function1<ComputationOf<TComputationType, T>, DeferredComputationWithSideEffectsOf<TComputationType, T>>;
    takeUntil<T>(notifier: MulticastComputationOf<TComputationType, unknown>): PureAsynchronousComputationOperator<TComputationType, T, T>;
    withLatestFrom<TA, TB>(other: PureSynchronousComputationOf<TComputationType, TB>): PureComputationOperator<TComputationType, TA, Tuple2<TA, TB>>;
    withLatestFrom<TA, TB, T>(other: PureSynchronousComputationOf<TComputationType, TB>, selector: Function2<TA, TB, T>): PureComputationOperator<TComputationType, TA, T>;
    withLatestFrom<TA, TB>(other: SynchronousComputationWithSideEffectsOf<TComputationType, TB>): ComputationOperatorWithSideEffects<TComputationType, TA, Tuple2<TA, TB>>;
    withLatestFrom<TA, TB, T>(other: SynchronousComputationWithSideEffectsOf<TComputationType, TB>, selector: Function2<TA, TB, T>): ComputationOperatorWithSideEffects<TComputationType, TA, T>;
    withLatestFrom<TA, TB>(other: PureDeferredComputationOf<TComputationType, TB>): PureAsynchronousComputationOperator<TComputationType, TA, Tuple2<TA, TB>>;
    withLatestFrom<TA, TB, T>(other: PureDeferredComputationOf<TComputationType, TB>, selector: Function2<TA, TB, T>): PureAsynchronousComputationOperator<TComputationType, TA, T>;
    withLatestFrom<TA, TB>(other: DeferredComputationWithSideEffectsOf<TComputationType, TB>): Function1<ComputationOf<TComputationType, TA>, DeferredComputationWithSideEffectsOf<TComputationType, Tuple2<TA, TB>>>;
    withLatestFrom<TA, TB, T>(other: DeferredComputationWithSideEffectsOf<TComputationType, TB>, selector: Function2<TA, TB, T>): Function1<ComputationOf<TComputationType, TA>, DeferredComputationWithSideEffectsOf<TComputationType, T>>;
    withLatestFrom<TA, TB>(other: MulticastComputationOf<TComputationType, TB>): PureAsynchronousComputationOperator<TComputationType, TA, Tuple2<TA, TB>>;
    withLatestFrom<TA, TB, T>(other: MulticastComputationOf<TComputationType, TB>, selector: Function2<TA, TB, T>): PureAsynchronousComputationOperator<TComputationType, TA, T>;
    zipLatest: CombineConstructor<TComputationType>;
}
export interface DeferredReactiveComputationModule<TComputationType extends AnyComputationType = AnyComputationType> extends ComputationModuleLike<TComputationType> {
    mergeAll<T, TInnerLike extends HigherOrderInnerComputationLike>(options: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly concurrency?: number;
        readonly innerType: TInnerLike;
    }): HigherOrderComputationOperator<TComputationType, TInnerLike, HigherOrderInnerComputationOf<TComputationType, TInnerLike, T>, T>;
    scanMany<T, TAcc, TInnerLike extends HigherOrderInnerComputationLike>(scanner: Function2<TAcc, T, HigherOrderInnerComputationOf<TComputationType, TInnerLike, TAcc>>, initialValue: Factory<TAcc>, options: {
        readonly innerType: TInnerLike;
    }): HigherOrderComputationOperator<TComputationType, TInnerLike, T, TAcc>;
    switchAll<T, TInnerLike extends HigherOrderInnerComputationLike>(options: {
        readonly innerType: TInnerLike;
    }): HigherOrderComputationOperator<TComputationType, TInnerLike, HigherOrderInnerComputationOf<TComputationType, TInnerLike, T>, T>;
    withBackpressure<T>(config: {
        capacity: number;
        backpressureStrategy: BackpressureStrategy;
    }): PureComputationOperator<TComputationType, T, T>;
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
export declare const RunnableLike_eval: unique symbol;
export interface RunnableLike<T = unknown> extends SynchronousComputationLike {
    readonly [ComputationLike_isDeferred]: false;
    readonly [ComputationLike_isSynchronous]?: true;
    [RunnableLike_eval](sink: SinkLike<T>): void;
}
export interface PureRunnableLike<T = unknown> extends RunnableLike<T> {
    readonly [ComputationLike_isPure]?: true;
}
export interface RunnableWithSideEffectsLike<T = unknown> extends RunnableLike<T> {
    readonly [ComputationLike_isPure]: false;
}
export declare const SourceLike_subscribe: unique symbol;
export interface SourceLike<T = unknown, TEventListener extends EventListenerLike<T> = EventListenerLike<T>> extends ComputationLike {
    [SourceLike_subscribe](EventListener: TEventListener): void;
}
export interface DeferredSourceLike<T = unknown, TConsumer extends ConsumerLike<T> = ConsumerLike<T>> extends SourceLike<T, TConsumer> {
    [ComputationLike_isDeferred]?: true;
}
/**
 * @noInheritDoc
 */
export interface ProducerLike<out T = unknown> extends SourceLike<T, ConsumerLike<T>>, DeferredComputationLike {
    readonly [ComputationLike_isDeferred]?: true;
    readonly [ComputationLike_isSynchronous]: false;
}
/**
 * @noInheritDoc
 */
export interface PureProducerLike<out T = unknown> extends ProducerLike<T>, PureDeferredComputationLike {
    readonly [ComputationLike_isDeferred]?: true;
    readonly [ComputationLike_isPure]?: true;
    readonly [ComputationLike_isSynchronous]: false;
}
/**
 * @noInheritDoc
 */
export interface ProducerWithSideEffectsLike<out T = unknown> extends ProducerLike<T>, DeferredComputationWithSideEffectsLike {
    readonly [ComputationLike_isDeferred]?: true;
    readonly [ComputationLike_isPure]: false;
    readonly [ComputationLike_isSynchronous]: false;
}
/**
 * @noInheritDoc
 */
export interface ObservableLike<out T = unknown> extends SourceLike<T, ObserverLike<T>>, DeferredComputationLike {
    readonly [ComputationLike_isDeferred]?: true;
}
/**
 * @noInheritDoc
 */
export interface PureObservableLike<out T = unknown> extends ObservableLike<T>, PureComputationLike {
    readonly [ComputationLike_isPure]?: true;
    readonly [ComputationLike_isDeferred]?: true;
}
/**
 * @noInheritDoc
 */
export interface ObservableWithSideEffectsLike<out T = unknown> extends ObservableLike<T>, ComputationWithSideEffectsLike {
    readonly [ComputationLike_isPure]: false;
    readonly [ComputationLike_isDeferred]?: true;
}
/**
 * @noInheritDoc
 */
export interface PureSynchronousObservableLike<out T = unknown> extends PureObservableLike<T>, PureSynchronousComputationLike {
    readonly [ComputationLike_isDeferred]?: true;
    readonly [ComputationLike_isPure]?: true;
    readonly [ComputationLike_isSynchronous]?: true;
}
/**
 * @noInheritDoc
 */
export interface SynchronousObservableWithSideEffectsLike<out T = unknown> extends ObservableWithSideEffectsLike<T>, SynchronousComputationWithSideEffectsLike {
    readonly [ComputationLike_isDeferred]?: true;
    readonly [ComputationLike_isPure]: false;
    readonly [ComputationLike_isSynchronous]?: true;
}
/**
 * @noInheritDoc
 */
export interface BroadcasterLike<out T = unknown> extends SourceLike<T>, DisposableContainerLike, MulticastComputationLike {
    readonly [ComputationLike_isDeferred]: false;
    readonly [ComputationLike_isPure]?: true;
    readonly [ComputationLike_isSynchronous]: false;
}
/**
 * @noInheritDoc
 */
export interface PublisherLike<T = unknown> extends BroadcasterLike<T>, SinkLike<T> {
}
export declare const StoreLike_value: unique symbol;
/**
 * @noInheritDoc
 */
export interface StoreLike<T = unknown> extends BroadcasterLike<T> {
    readonly [StoreLike_value]: T;
}
/**
 * @noInheritDoc
 */
export interface WritableStoreLike<T = unknown> extends StoreLike<T>, PublisherLike<T> {
    [StoreLike_value]: T;
}
/**
 * Represents a duplex stream
 *
 * @noInheritDoc
 */
export interface StreamLike<TReq, out T> extends ConsumerLike<TReq>, BroadcasterLike<T> {
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
         * The capacity of the stream's request queue.
         */
        readonly capacity?: number;
        readonly backpressureStrategy?: BackpressureStrategy;
    }): TStream & DisposableLike;
}
export type StreamOf<TStreamable extends StreamableLike> = ReturnType<TStreamable[typeof StreamableLike_stream]>;
export {};
