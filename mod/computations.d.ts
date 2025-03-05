import { Equality, Factory, Function1, Function2, Optional, Predicate, Reducer, SideEffect1, Tuple2, Tuple3, Tuple4, Updater } from "./functions.js";
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
export interface SynchronousComputationLike extends DeferredComputationLike {
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
export interface GenericComputationType<TComputationBaseOfT extends ComputationLike, TPureDeferredComputationOfT extends TComputationBaseOfT & PureDeferredComputationLike, TDeferredDeferredComputationWithSideEffectsOfT extends TComputationBaseOfT & DeferredComputationWithSideEffectsLike, TPureSynchronousOfT extends TPureDeferredComputationOfT & PureSynchronousComputationLike, TSynchronousWithSideEffectsOfT extends TDeferredDeferredComputationWithSideEffectsOfT & SynchronousComputationWithSideEffectsLike, TMulticastComputationOfT extends TComputationBaseOfT & MulticastComputationLike> {
    readonly [Computation_T]?: unknown;
    readonly [Computation_baseOfT]?: TComputationBaseOfT;
    readonly [Computation_pureDeferredOfT]?: TPureDeferredComputationOfT;
    readonly [Computation_deferredWithSideEffectsOfT]?: TDeferredDeferredComputationWithSideEffectsOfT;
    readonly [Computation_pureSynchronousOfT]?: TPureSynchronousOfT;
    readonly [Computation_synchronousWithSideEffectsOfT]?: TSynchronousWithSideEffectsOfT;
    readonly [Computation_multicastOfT]?: TMulticastComputationOfT;
}
export type ComputationType = GenericComputationType<ComputationLike, PureDeferredComputationLike, DeferredComputationWithSideEffectsLike, PureSynchronousComputationLike, SynchronousComputationWithSideEffectsLike, MulticastComputationLike>;
export type ComputationBaseOf<TComputation extends ComputationType, T> = TComputation extends {
    readonly [Computation_baseOfT]?: unknown;
} ? NonNullable<(TComputation & {
    readonly [Computation_T]: T;
})[typeof Computation_baseOfT]> : {
    readonly _C: TComputation;
    readonly _T: () => T;
};
export type DeferredComputationWithSideEffectsOf<TComputation extends ComputationType, T> = TComputation extends {
    readonly [Computation_baseOfT]?: unknown;
} ? NonNullable<(TComputation & {
    readonly [Computation_T]: T;
})[typeof Computation_deferredWithSideEffectsOfT] & ComputationBaseOf<TComputation, T>> : {
    readonly _C: TComputation;
    readonly _T: () => T;
};
export type PureDeferredComputationOf<TComputation extends ComputationType, T> = TComputation extends {
    readonly [Computation_baseOfT]?: unknown;
} ? NonNullable<(TComputation & {
    readonly [Computation_T]: T;
})[typeof Computation_pureDeferredOfT] & ComputationBaseOf<TComputation, T>> : {
    readonly _C: TComputation;
    readonly _T: () => T;
};
export type SynchronousComputationWithSideEffectsOf<TComputation extends ComputationType, T> = TComputation extends {
    readonly [Computation_baseOfT]?: unknown;
} ? NonNullable<(TComputation & {
    readonly [Computation_T]: T;
})[typeof Computation_synchronousWithSideEffectsOfT] & ComputationBaseOf<TComputation, T>> : {
    readonly _C: TComputation;
    readonly _T: () => T;
};
export type PureSynchronousComputationOf<TComputation extends ComputationType, T> = TComputation extends {
    readonly [Computation_baseOfT]?: unknown;
} ? NonNullable<(TComputation & {
    readonly [Computation_T]: T;
})[typeof Computation_pureSynchronousOfT] & ComputationBaseOf<TComputation, T>> : {
    readonly _C: TComputation;
    readonly _T: () => T;
};
export type MulticastComputationOf<TComputation extends ComputationType, T> = TComputation extends {
    readonly [Computation_baseOfT]?: unknown;
} ? NonNullable<(TComputation & {
    readonly [Computation_T]: T;
})[typeof Computation_multicastOfT] & ComputationBaseOf<TComputation, T>> : {
    readonly _C: TComputation;
    readonly _T: () => T;
};
export type DeferredComputationOf<TComputation extends ComputationType, T> = PureDeferredComputationOf<TComputation, T> | DeferredComputationWithSideEffectsOf<TComputation, T>;
export type SynchronousComputationOf<TComputation extends ComputationType, T> = PureSynchronousComputationOf<TComputation, T> | SynchronousComputationWithSideEffectsOf<TComputation, T>;
export type PureComputationOf<TComputation extends ComputationType, T> = PureSynchronousComputationOf<TComputation, T> | PureDeferredComputationOf<TComputation, T> | MulticastComputationOf<TComputation, T>;
export type ComputationOf<TComputation extends ComputationType, T> = DeferredComputationOf<TComputation, T> | SynchronousComputationOf<TComputation, T> | MulticastComputationOf<TComputation, T>;
export type StatelessComputationOperator<TComputation extends ComputationType, TA, out TB> = <TComputationOf extends ComputationBaseOf<TComputation, TA>>(computation: TComputationOf) => TComputationOf extends PureSynchronousComputationOf<TComputation, TA> ? PureSynchronousComputationOf<TComputation, TB> : TComputationOf extends SynchronousComputationWithSideEffectsOf<TComputation, TA> ? SynchronousComputationWithSideEffectsOf<TComputation, TB> : TComputationOf extends PureDeferredComputationOf<TComputation, TA> ? PureDeferredComputationOf<TComputation, TB> : TComputationOf extends DeferredComputationWithSideEffectsOf<TComputation, TA> ? DeferredComputationWithSideEffectsOf<TComputation, TB> : TComputationOf extends MulticastComputationOf<TComputation, TA> ? MulticastComputationOf<TComputation, TB> : never;
export type ComputationOperatorWithSideEffects<TComputation extends ComputationType, TA, out TB> = <TComputationOf extends ComputationBaseOf<TComputation, TA>>(computation: TComputationOf) => TComputationOf extends SynchronousComputationOf<TComputation, TA> ? SynchronousComputationWithSideEffectsOf<TComputation, TB> : DeferredComputationWithSideEffectsOf<TComputation, TB>;
export type StatelessAsynchronousComputationOperator<TComputation extends ComputationType, TA, out TB> = <TComputationOf extends ComputationBaseOf<TComputation, TA>>(computation: TComputationOf) => TComputationOf extends PureDeferredComputationOf<TComputation, TA> ? PureDeferredComputationOf<TComputation, TB> : TComputationOf extends MulticastComputationOf<TComputation, TA> ? MulticastComputationOf<TComputation, TB> : DeferredComputationWithSideEffectsOf<TComputation, TB>;
export type StatefulAsynchronousComputationOperator<TComputation extends ComputationType, TA, out TB> = <TComputationOf extends ComputationBaseOf<TComputation, TA>>(computation: TComputationOf) => TComputationOf extends PureComputationOf<TComputation, TA> ? PureDeferredComputationOf<TComputation, TB> : DeferredComputationWithSideEffectsOf<TComputation, TB>;
export type StatefulSynchronousComputationOperator<TComputation extends ComputationType, TA, out TB> = <TComputationOf extends ComputationBaseOf<TComputation, TA>>(computation: TComputationOf) => TComputationOf extends PureSynchronousComputationOf<TComputation, TA> ? PureSynchronousComputationOf<TComputation, TB> : TComputationOf extends SynchronousComputationWithSideEffectsOf<TComputation, TA> ? SynchronousComputationWithSideEffectsOf<TComputation, TB> : TComputationOf extends SynchronousComputationOf<TComputation, TA> ? SynchronousComputationOf<TComputation, TB> : TComputationOf extends DeferredComputationWithSideEffectsOf<TComputation, TA> ? DeferredComputationWithSideEffectsOf<TComputation, TB> : PureDeferredComputationOf<TComputation, TB>;
type HigherOrderPureSynchronousComputationOut<TComputation extends ComputationType, TInnerType extends ComputationLike, TB> = TInnerType extends PureSynchronousComputationLike ? PureSynchronousComputationOf<TComputation, TB> : TInnerType extends SynchronousComputationWithSideEffectsLike ? SynchronousComputationWithSideEffectsOf<TComputation, TB> : TInnerType extends PureDeferredComputationLike ? PureDeferredComputationOf<TComputation, TB> : TInnerType extends DeferredComputationWithSideEffectsLike ? DeferredComputationWithSideEffectsOf<TComputation, TB> : never;
type HigherOrderSynchronousComputationWithSideEffectsOut<TComputation extends ComputationType, TInnerType extends ComputationLike, TB> = TInnerType extends SynchronousComputationLike ? SynchronousComputationWithSideEffectsOf<TComputation, TB> : TInnerType extends DeferredComputationLike ? DeferredComputationWithSideEffectsOf<TComputation, TB> : never;
type HigherOrderPureDeferredComputationOut<TComputation extends ComputationType, TInnerType extends ComputationLike, TB> = TInnerType extends PureDeferredComputationLike ? PureDeferredComputationOf<TComputation, TB> : TInnerType extends DeferredComputationWithSideEffectsLike ? DeferredComputationWithSideEffectsOf<TComputation, TB> : never;
type HigherOrderDeferredComputationWithSideEffectsOut<TComputation extends ComputationType, TInnerType extends ComputationLike, TB> = TInnerType extends DeferredComputationLike ? DeferredComputationWithSideEffectsOf<TComputation, TB> : never;
export type HigherOrderInnerComputationLike = PureSynchronousComputationLike | SynchronousComputationWithSideEffectsLike | PureDeferredComputationLike | DeferredComputationWithSideEffectsLike;
export type HigherOrderInnerComputationOf<TComputation extends ComputationType, THigherOrderInnerComputation extends HigherOrderInnerComputationLike, T> = THigherOrderInnerComputation extends PureSynchronousComputationLike ? PureSynchronousComputationOf<TComputation, T> : THigherOrderInnerComputation extends SynchronousComputationWithSideEffectsLike ? SynchronousComputationOf<TComputation, T> : THigherOrderInnerComputation extends PureDeferredComputationLike ? PureDeferredComputationOf<TComputation, T> : THigherOrderInnerComputation extends DeferredComputationWithSideEffectsLike ? DeferredComputationOf<TComputation, T> : never;
export type HigherOrderComputationOperator<TComputation extends ComputationType, TInnerType extends HigherOrderInnerComputationLike, TA, out TB> = <TComputationIn extends ComputationBaseOf<TComputation, TA>>(computation: TComputationIn) => TComputationIn extends PureSynchronousComputationOf<TComputation, TA> ? HigherOrderPureSynchronousComputationOut<TComputation, TInnerType, TB> : TComputationIn extends SynchronousComputationWithSideEffectsOf<TComputation, TA> ? HigherOrderSynchronousComputationWithSideEffectsOut<TComputation, TInnerType, TB> : TComputationIn extends PureDeferredComputationOf<TComputation, TA> ? HigherOrderPureDeferredComputationOut<TComputation, TInnerType, TB> : TComputationIn extends DeferredComputationWithSideEffectsOf<TComputation, TA> ? HigherOrderDeferredComputationWithSideEffectsOut<TComputation, TInnerType, TB> : never;
export type FromIterableOperator<TComputation extends ComputationType, T> = <TIterable extends IterableLike<T>>(iterable: TIterable) => TIterable extends PureIterableLike ? PureSynchronousComputationOf<TComputation, T> : SynchronousComputationWithSideEffectsOf<TComputation, T>;
interface CombineConstructor<TComputation extends ComputationType> {
    <TA, TB>(a: PureSynchronousComputationOf<TComputation, TA>, b: PureSynchronousComputationOf<TComputation, TB>): PureSynchronousComputationOf<TComputation, Tuple2<TA, TB>>;
    <TA, TB, TC>(a: PureSynchronousComputationOf<TComputation, TA>, b: PureSynchronousComputationOf<TComputation, TB>, c: PureSynchronousComputationOf<TComputation, TC>): PureSynchronousComputationOf<TComputation, Tuple3<TA, TB, TC>>;
    <TA, TB, TC, TD>(a: PureSynchronousComputationOf<TComputation, TA>, b: PureSynchronousComputationOf<TComputation, TB>, c: PureSynchronousComputationOf<TComputation, TC>, d: PureSynchronousComputationOf<TComputation, TD>): PureSynchronousComputationOf<TComputation, Tuple4<TA, TB, TC, TD>>;
    <TA, TB>(a: SynchronousComputationOf<TComputation, TA>, b: SynchronousComputationOf<TComputation, TB>): SynchronousComputationWithSideEffectsOf<TComputation, Tuple2<TA, TB>>;
    <TA, TB, TC>(a: SynchronousComputationOf<TComputation, TA>, b: SynchronousComputationOf<TComputation, TB>, c: SynchronousComputationOf<TComputation, TC>): SynchronousComputationWithSideEffectsOf<TComputation, Tuple3<TA, TB, TC>>;
    <TA, TB, TC, TD>(a: SynchronousComputationOf<TComputation, TA>, b: SynchronousComputationOf<TComputation, TB>, c: SynchronousComputationOf<TComputation, TC>, d: SynchronousComputationOf<TComputation, TD>): SynchronousComputationWithSideEffectsOf<TComputation, Tuple4<TA, TB, TC, TD>>;
    <TA, TB>(a: PureDeferredComputationOf<TComputation, TA>, b: PureDeferredComputationOf<TComputation, TB>): PureDeferredComputationOf<TComputation, Tuple2<TA, TB>>;
    <TA, TB, TC>(a: PureDeferredComputationOf<TComputation, TA>, b: PureDeferredComputationOf<TComputation, TB>, c: PureDeferredComputationOf<TComputation, TC>): PureDeferredComputationOf<TComputation, Tuple3<TA, TB, TC>>;
    <TA, TB, TC, TD>(a: PureDeferredComputationOf<TComputation, TA>, b: PureDeferredComputationOf<TComputation, TB>, c: PureDeferredComputationOf<TComputation, TC>, d: PureDeferredComputationOf<TComputation, TD>): PureDeferredComputationOf<TComputation, Tuple4<TA, TB, TC, TD>>;
    <TA, TB>(a: DeferredComputationOf<TComputation, TA>, b: DeferredComputationOf<TComputation, TB>): DeferredComputationWithSideEffectsOf<TComputation, Tuple2<TA, TB>>;
    <TA, TB, TC>(a: DeferredComputationOf<TComputation, TA>, b: DeferredComputationOf<TComputation, TB>, c: DeferredComputationOf<TComputation, TC>): DeferredComputationWithSideEffectsOf<TComputation, Tuple3<TA, TB, TC>>;
    <TA, TB, TC, TD>(a: DeferredComputationOf<TComputation, TA>, b: DeferredComputationOf<TComputation, TB>, c: DeferredComputationOf<TComputation, TC>, d: DeferredComputationOf<TComputation, TD>): DeferredComputationWithSideEffectsOf<TComputation, Tuple4<TA, TB, TC, TD>>;
    <TA, TB>(a: MulticastComputationOf<TComputation, TA>, b: MulticastComputationOf<TComputation, TB>): MulticastComputationOf<TComputation, Tuple2<TA, TB>>;
    <TA, TB, TC>(a: MulticastComputationOf<TComputation, TA>, b: MulticastComputationOf<TComputation, TB>, c: MulticastComputationOf<TComputation, TC>): MulticastComputationOf<TComputation, Tuple3<TA, TB, TC>>;
    <TA, TB, TC, TD>(a: MulticastComputationOf<TComputation, TA>, b: MulticastComputationOf<TComputation, TB>, c: MulticastComputationOf<TComputation, TC>, d: MulticastComputationOf<TComputation, TD>): MulticastComputationOf<TComputation, Tuple4<TA, TB, TC, TD>>;
    <TA, TB>(a: PureComputationOf<TComputation, TA>, b: PureComputationOf<TComputation, TB>): PureDeferredComputationOf<TComputation, Tuple2<TA, TB>>;
    <TA, TB, TC>(a: PureComputationOf<TComputation, TA>, b: PureComputationOf<TComputation, TB>, c: PureComputationOf<TComputation, TC>): PureDeferredComputationOf<TComputation, Tuple3<TA, TB, TC>>;
    <TA, TB, TC, TD>(a: PureComputationOf<TComputation, TA>, b: PureComputationOf<TComputation, TB>, c: PureComputationOf<TComputation, TC>, d: PureComputationOf<TComputation, TD>): PureDeferredComputationOf<TComputation, Tuple4<TA, TB, TC, TD>>;
}
interface ZipConstructor<TComputation extends ComputationType> {
    <TA, TB>(a: PureSynchronousComputationOf<TComputation, TA>, b: PureSynchronousComputationOf<TComputation, TB>): PureSynchronousComputationOf<TComputation, Tuple2<TA, TB>>;
    <TA, TB, TC>(a: PureSynchronousComputationOf<TComputation, TA>, b: PureSynchronousComputationOf<TComputation, TB>, c: PureSynchronousComputationOf<TComputation, TC>): PureSynchronousComputationOf<TComputation, Tuple3<TA, TB, TC>>;
    <TA, TB, TC, TD>(a: PureSynchronousComputationOf<TComputation, TA>, b: PureSynchronousComputationOf<TComputation, TB>, c: PureSynchronousComputationOf<TComputation, TC>, d: PureSynchronousComputationOf<TComputation, TD>): PureSynchronousComputationOf<TComputation, Tuple4<TA, TB, TC, TD>>;
    <TA, TB>(a: SynchronousComputationOf<TComputation, TA>, b: SynchronousComputationOf<TComputation, TB>): SynchronousComputationWithSideEffectsOf<TComputation, Tuple2<TA, TB>>;
    <TA, TB, TC>(a: SynchronousComputationOf<TComputation, TA>, b: SynchronousComputationOf<TComputation, TB>, c: SynchronousComputationOf<TComputation, TC>): SynchronousComputationWithSideEffectsOf<TComputation, Tuple3<TA, TB, TC>>;
    <TA, TB, TC, TD>(a: SynchronousComputationOf<TComputation, TA>, b: SynchronousComputationOf<TComputation, TB>, c: SynchronousComputationOf<TComputation, TC>, d: SynchronousComputationOf<TComputation, TD>): SynchronousComputationWithSideEffectsOf<TComputation, Tuple4<TA, TB, TC, TD>>;
    <TA, TB>(a: PureDeferredComputationOf<TComputation, TA>, b: PureDeferredComputationOf<TComputation, TB>): PureDeferredComputationOf<TComputation, Tuple2<TA, TB>>;
    <TA, TB, TC>(a: PureDeferredComputationOf<TComputation, TA>, b: PureDeferredComputationOf<TComputation, TB>, c: PureDeferredComputationOf<TComputation, TC>): PureDeferredComputationOf<TComputation, Tuple3<TA, TB, TC>>;
    <TA, TB, TC, TD>(a: PureDeferredComputationOf<TComputation, TA>, b: PureDeferredComputationOf<TComputation, TB>, c: PureDeferredComputationOf<TComputation, TC>, d: PureDeferredComputationOf<TComputation, TD>): PureDeferredComputationOf<TComputation, Tuple4<TA, TB, TC, TD>>;
    <TA, TB>(a: DeferredComputationOf<TComputation, TA>, b: DeferredComputationOf<TComputation, TB>): DeferredComputationWithSideEffectsOf<TComputation, Tuple2<TA, TB>>;
    <TA, TB, TC>(a: DeferredComputationOf<TComputation, TA>, b: DeferredComputationOf<TComputation, TB>, c: DeferredComputationOf<TComputation, TC>): DeferredComputationWithSideEffectsOf<TComputation, Tuple3<TA, TB, TC>>;
    <TA, TB, TC, TD>(a: DeferredComputationOf<TComputation, TA>, b: DeferredComputationOf<TComputation, TB>, c: DeferredComputationOf<TComputation, TC>, d: DeferredComputationOf<TComputation, TD>): DeferredComputationWithSideEffectsOf<TComputation, Tuple4<TA, TB, TC, TD>>;
    <TA, TB>(a: PureComputationOf<TComputation, TA>, b: PureComputationOf<TComputation, TB>): PureDeferredComputationOf<TComputation, Tuple2<TA, TB>>;
    <TA, TB, TC>(a: PureComputationOf<TComputation, TA>, b: PureComputationOf<TComputation, TB>, c: PureComputationOf<TComputation, TC>): PureDeferredComputationOf<TComputation, Tuple3<TA, TB, TC>>;
    <TA, TB, TC, TD>(a: PureComputationOf<TComputation, TA>, b: PureComputationOf<TComputation, TB>, c: PureComputationOf<TComputation, TC>, d: PureComputationOf<TComputation, TD>): PureDeferredComputationOf<TComputation, Tuple4<TA, TB, TC, TD>>;
}
export interface ComputationModule<TComputation extends ComputationType> {
    keep<T>(predicate: Predicate<T>): StatelessComputationOperator<TComputation, T, T>;
    map<TA, TB>(selector: Function1<TA, TB>): StatelessComputationOperator<TComputation, TA, TB>;
}
export interface SynchronousComputationModule<TComputation extends ComputationType> extends ComputationModule<TComputation> {
    catchError<T>(onError: SideEffect1<Error>): StatefulSynchronousComputationOperator<TComputation, T, T>;
    catchError<T>(onError: Function1<Error, PureSynchronousComputationOf<TComputation, T>>): HigherOrderComputationOperator<TComputation, PureSynchronousComputationLike, T, T>;
    catchError<T, TInnerType extends HigherOrderInnerComputationLike>(onError: Function1<Error, HigherOrderInnerComputationOf<TComputation, TInnerType, T>>, options: {
        readonly innerType: TInnerType;
    }): HigherOrderComputationOperator<TComputation, TInnerType, T, T>;
    concatAll<T>(): HigherOrderComputationOperator<TComputation, PureSynchronousComputationLike, HigherOrderInnerComputationOf<TComputation, PureSynchronousComputationLike, T>, T>;
    concatAll<T, TInnerType extends HigherOrderInnerComputationLike>(options: {
        readonly innerType: TInnerType;
    }): HigherOrderComputationOperator<TComputation, TInnerType, HigherOrderInnerComputationOf<TComputation, TInnerType, T>, T>;
    concat<T>(...computations: readonly PureSynchronousComputationOf<TComputation, T>[]): PureSynchronousComputationOf<TComputation, T>;
    concat<T>(...computations: readonly SynchronousComputationOf<TComputation, T>[]): SynchronousComputationWithSideEffectsOf<TComputation, T>;
    concat<T>(...computations: readonly PureDeferredComputationOf<TComputation, T>[]): PureDeferredComputationOf<TComputation, T>;
    concat<T>(...computations: readonly DeferredComputationOf<TComputation, T>[]): DeferredComputationWithSideEffectsOf<TComputation, T>;
    empty<T>(): PureSynchronousComputationOf<TComputation, T>;
    encodeUtf8(): StatefulSynchronousComputationOperator<TComputation, string, Uint8Array>;
    forEach<T>(sideEffect: SideEffect1<T>): ComputationOperatorWithSideEffects<TComputation, T, T>;
    fromIterable<T>(): FromIterableOperator<TComputation, T>;
    fromReadonlyArray<T>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<readonly T[], PureSynchronousComputationOf<TComputation, T>>;
    fromValue<T>(): Function1<T, PureSynchronousComputationOf<TComputation, T>>;
    generate<T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
        readonly count?: number;
    }): PureSynchronousComputationOf<TComputation, T>;
    last<T>(): Function1<SynchronousComputationOf<TComputation, T>, Optional<T>>;
    raise<T>(options?: {
        readonly raise?: Factory<unknown>;
    }): PureSynchronousComputationOf<TComputation, T>;
    reduce<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): Function1<SynchronousComputationOf<TComputation, T>, TAcc>;
    repeat<T>(predicate: Predicate<number>): StatefulSynchronousComputationOperator<TComputation, T, T>;
    repeat<T>(count: number): StatefulSynchronousComputationOperator<TComputation, T, T>;
    repeat<T>(): StatefulSynchronousComputationOperator<TComputation, T, T>;
    retry<T>(shouldRetry?: (count: number, error: Error) => boolean): StatefulSynchronousComputationOperator<TComputation, T, T>;
    scan<T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): StatefulSynchronousComputationOperator<TComputation, T, TAcc>;
    takeFirst<T>(options?: {
        readonly count?: number;
    }): StatefulSynchronousComputationOperator<TComputation, T, T>;
    takeWhile<T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): StatefulSynchronousComputationOperator<TComputation, T, T>;
    throwIfEmpty<T>(factory: Factory<unknown>, options?: undefined): StatefulSynchronousComputationOperator<TComputation, T, T>;
    toRunnable<T>(): Function1<SynchronousComputationOf<TComputation, T>, RunnableLike<T>>;
    toReadonlyArray<T>(): Function1<SynchronousComputationOf<TComputation, T>, ReadonlyArray<T>>;
}
export interface InteractiveComputationModule<TComputation extends ComputationType> extends SynchronousComputationModule<TComputation> {
    zip: ZipConstructor<TComputation>;
}
export interface DeferredReactiveComputationModule<TComputation extends ComputationType> extends SynchronousComputationModule<TComputation> {
    buffer<T>(options?: {
        count?: number;
    }): StatefulSynchronousComputationOperator<TComputation, T, readonly T[]>;
    decodeWithCharset(options?: {
        readonly charset?: string;
        readonly fatal?: boolean;
        readonly ignoreBOM?: boolean;
    }): StatefulSynchronousComputationOperator<TComputation, ArrayBuffer, string>;
    distinctUntilChanged<T>(options?: {
        readonly equality?: Equality<T>;
    }): StatefulSynchronousComputationOperator<TComputation, T, T>;
    pairwise<T>(): StatefulSynchronousComputationOperator<TComputation, T, Tuple2<T, T>>;
    skipFirst<T>(options?: {
        readonly count?: number;
    }): StatefulSynchronousComputationOperator<TComputation, T, T>;
    takeLast<T>(options?: {
        readonly count?: number;
    }): StatefulSynchronousComputationOperator<TComputation, T, T>;
}
export interface ConcurrentReactiveComputationModule<TComputation extends ComputationType> extends ComputationModule<TComputation> {
    combineLatest: CombineConstructor<TComputation>;
    fromPromise<T>(): Function1<Promise<T>, MulticastComputationOf<TComputation, T>>;
    merge<T>(...computations: readonly PureSynchronousComputationOf<TComputation, T>[]): PureSynchronousComputationOf<TComputation, T>;
    merge<T>(...computations: readonly SynchronousComputationOf<TComputation, T>[]): SynchronousComputationWithSideEffectsOf<TComputation, T>;
    merge<T>(...computations: readonly PureDeferredComputationOf<TComputation, T>[]): PureDeferredComputationOf<TComputation, T>;
    merge<T>(...computations: readonly DeferredComputationOf<TComputation, T>[]): DeferredComputationWithSideEffectsOf<TComputation, T>;
    merge<T>(...computations: readonly MulticastComputationOf<TComputation, T>[]): MulticastComputationOf<TComputation, T>;
    merge<T>(...computations: readonly PureComputationOf<TComputation, T>[]): PureDeferredComputationOf<TComputation, T>;
    merge<T>(...computations: readonly ComputationOf<TComputation, T>[]): DeferredComputationWithSideEffectsOf<TComputation, T>;
    never<T>(): MulticastComputationOf<TComputation, T>;
    withLatestFrom<TA, TB>(other: PureSynchronousComputationOf<TComputation, TB>): StatefulSynchronousComputationOperator<TComputation, TA, Tuple2<TA, TB>>;
    withLatestFrom<TA, TB, T>(other: PureSynchronousComputationOf<TComputation, TB>, selector: Function2<TA, TB, T>): StatefulSynchronousComputationOperator<TComputation, TA, T>;
    withLatestFrom<TA, TB>(other: SynchronousComputationWithSideEffectsOf<TComputation, TB>): ComputationOperatorWithSideEffects<TComputation, TA, Tuple2<TA, TB>>;
    withLatestFrom<TA, TB, T>(other: SynchronousComputationWithSideEffectsOf<TComputation, TB>, selector: Function2<TA, TB, T>): ComputationOperatorWithSideEffects<TComputation, TA, T>;
    withLatestFrom<TA, TB>(other: PureDeferredComputationOf<TComputation, TB>): StatefulAsynchronousComputationOperator<TComputation, TA, Tuple2<TA, TB>>;
    withLatestFrom<TA, TB, T>(other: PureDeferredComputationOf<TComputation, TB>, selector: Function2<TA, TB, T>): StatefulAsynchronousComputationOperator<TComputation, TA, T>;
    withLatestFrom<TA, TB>(other: DeferredComputationWithSideEffectsOf<TComputation, TB>): Function1<ComputationOf<TComputation, TA>, DeferredComputationWithSideEffectsOf<TComputation, Tuple2<TA, TB>>>;
    withLatestFrom<TA, TB, T>(other: DeferredComputationWithSideEffectsOf<TComputation, TB>, selector: Function2<TA, TB, T>): Function1<ComputationOf<TComputation, TA>, DeferredComputationWithSideEffectsOf<TComputation, Tuple2<TA, TB>>>;
    withLatestFrom<TA, TB>(other: MulticastComputationOf<TComputation, TB>): StatelessAsynchronousComputationOperator<TComputation, TA, Tuple2<TA, TB>>;
    withLatestFrom<TA, TB, T>(other: MulticastComputationOf<TComputation, TB>, selector: Function2<TA, TB, T>): StatelessAsynchronousComputationOperator<TComputation, TA, T>;
    zipLatest: CombineConstructor<TComputation>;
}
export declare const SinkLike_next: unique symbol;
export declare const SinkLike_complete: unique symbol;
export declare const SinkLike_isComplete: unique symbol;
/**
 * @noInheritDoc
 */
export interface SinkLike<T = unknown> {
    readonly [SinkLike_isComplete]: boolean;
    /**
     * Notifies the EventListener of the next notification produced by the source.
     *
     * @param next - The next notification value.
     */
    [SinkLike_next](next: T): void;
    [SinkLike_complete](): void;
}
export declare const RunnableLike_eval: unique symbol;
/**
 * Represents a deferred computation that is synchronously evaluated.
 */
export interface RunnableLike<T = unknown> extends SynchronousComputationLike {
    [RunnableLike_eval](sink: SinkLike<T>): void;
}
export interface PureRunnableLike<T = unknown> extends RunnableLike<T> {
    readonly [ComputationLike_isPure]?: true;
}
export interface RunnableWithSideEffectsLike<T = unknown> extends RunnableLike<T> {
    readonly [ComputationLike_isPure]: false;
}
export interface IterableLike<T = unknown> extends Iterable<T>, SynchronousComputationLike {
}
export interface PureIterableLike<T = unknown> extends IterableLike<T> {
    readonly [ComputationLike_isPure]?: true;
}
export interface IterableWithSideEffectsLike<T = unknown> extends IterableLike<T> {
    readonly [ComputationLike_isPure]: false;
}
export declare const PureSynchronousComputation: PureSynchronousComputationLike;
export declare const SynchronousComputationWithSideEffects: SynchronousComputationWithSideEffectsLike;
export declare const PureDeferredComputation: PureDeferredComputationLike;
export declare const DeferredComputationWithSideEffects: DeferredComputationWithSideEffectsLike;
export {};
