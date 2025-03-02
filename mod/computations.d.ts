import { Equality, Factory, Function1, Optional, Predicate, Reducer, SideEffect1, Tuple2, Tuple3, Tuple4, Updater } from "./functions.js";
export declare const ComputationLike_isPure: unique symbol;
export declare const ComputationLike_isDeferred: unique symbol;
export declare const ComputationLike_isSynchronous: unique symbol;
export declare const ComputationLike_isInteractive: unique symbol;
export interface ComputationLike {
    readonly [ComputationLike_isPure]?: boolean;
    readonly [ComputationLike_isSynchronous]?: boolean;
    readonly [ComputationLike_isDeferred]?: boolean;
    readonly [ComputationLike_isInteractive]?: boolean;
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
export interface InteractiveComputationLike extends SynchronousComputationLike {
    readonly [ComputationLike_isInteractive]?: true;
}
export interface ReactiveComputationLike extends ComputationLike {
    readonly [ComputationLike_isInteractive]: false;
}
export interface SynchronousReactiveComputation extends SynchronousComputationLike, ReactiveComputationLike {
    readonly [ComputationLike_isDeferred]?: true;
    readonly [ComputationLike_isInteractive]: false;
    readonly [ComputationLike_isSynchronous]?: true;
}
export interface MulticastComputationLike extends ComputationLike {
    readonly [ComputationLike_isSynchronous]: false;
    readonly [ComputationLike_isDeferred]: false;
    readonly [ComputationLike_isPure]?: true;
}
export declare const Computation_T: unique symbol;
export declare const Computation_ofT: unique symbol;
export declare const Computation_pureOfT: unique symbol;
export declare const Computation_withSideEffectsOfT: unique symbol;
/**
 * @noInheritDoc
 */
export interface GenericComputation<TComputationOfT extends ComputationLike, TPureComputation extends TComputationOfT & PureComputationLike, TComputationWithSideEffects extends TComputationOfT & ComputationWithSideEffectsLike> {
    readonly [Computation_T]?: unknown;
    readonly [Computation_ofT]?: TComputationOfT;
    readonly [Computation_pureOfT]?: TPureComputation;
    readonly [Computation_withSideEffectsOfT]?: TComputationWithSideEffects;
}
export type Computation = GenericComputation<ComputationLike, PureComputationLike, ComputationWithSideEffectsLike>;
export type ComputationOf<TComputation extends Computation, T> = TComputation extends {
    readonly [Computation_ofT]?: unknown;
} ? NonNullable<(TComputation & {
    readonly [Computation_T]: T;
})[typeof Computation_ofT]> : {
    readonly _C: TComputation;
    readonly _T: () => T;
};
export type ComputationWithSideEffectsOf<TComputation extends Computation, T> = TComputation extends {
    readonly [Computation_ofT]?: unknown;
} ? NonNullable<(TComputation & {
    readonly [Computation_T]: T;
})[typeof Computation_withSideEffectsOfT]> & ComputationOf<TComputation, T> : {
    readonly _C: TComputation;
    readonly _T: () => T;
};
export type PureComputationOf<TComputation extends Computation, T> = TComputation extends {
    readonly [Computation_ofT]?: unknown;
} ? NonNullable<(TComputation & {
    readonly [Computation_T]: T;
})[typeof Computation_pureOfT]> & ComputationOf<TComputation, T> : {
    readonly _C: TComputation;
    readonly _T: () => T;
};
export type ComputationOperator<TComputation extends Computation, TA, out TB> = <TComputationOf extends ComputationOf<TComputation, TA>>(computation: TComputationOf) => TComputationOf extends PureComputationOf<TComputation, TA> ? PureComputationOf<TComputation, TB> : ComputationWithSideEffectsOf<TComputation, TB>;
export type ComputationWithSideEffectsOperator<TComputation extends Computation, TA, out TB> = Function1<ComputationOf<TComputation, TA>, ComputationWithSideEffectsOf<TComputation, TB>>;
export interface ComputationModule<TComputation extends Computation> {
    keep<T>(predicate: Predicate<T>): ComputationOperator<TComputation, T, T>;
    map<TA, TB>(selector: Function1<TA, TB>): ComputationOperator<TComputation, TA, TB>;
}
export interface DeferredComputationModule<TComputation extends Computation> extends ComputationModule<TComputation> {
    catchError<T>(onError: SideEffect1<Error>): ComputationOperator<TComputation, T, T>;
    catchError<T>(onError: Function1<Error, PureComputationOf<TComputation, T>>): ComputationOperator<TComputation, T, T>;
    catchError<T>(onError: Function1<Error, ComputationWithSideEffectsOf<TComputation, T>>, options: {
        readonly innerType: typeof ComputationWithSideEffectsType;
    }): ComputationWithSideEffectsOperator<TComputation, T, T>;
    concatAll<T>(options?: {}): ComputationOperator<TComputation, PureComputationOf<TComputation, T>, T>;
    concatAll<T>(options: {
        readonly innerType: typeof ComputationWithSideEffectsType;
    }): ComputationWithSideEffectsOperator<TComputation, ComputationOf<TComputation, T>, T>;
    concatMany<T>(computations: readonly PureComputationOf<TComputation, T>[]): PureComputationOf<TComputation, T>;
    concatMany<T>(computations: readonly ComputationOf<TComputation, T>[]): ComputationWithSideEffectsOf<TComputation, T>;
    empty<T>(): ComputationOf<TComputation, T>;
    forEach<T>(sideEffect: SideEffect1<T>): ComputationWithSideEffectsOperator<TComputation, T, T>;
    fromIterable<T>(): <TIterable extends IterableLike<T> = IterableLike<T>>(iterable: TIterable) => TIterable extends PureIterableLike ? PureComputationOf<TComputation, T> : ComputationWithSideEffectsOf<TComputation, T>;
    fromReadonlyArray<T>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<readonly T[], PureComputationOf<TComputation, T>>;
    fromValue<T>(): Function1<T, PureComputationOf<TComputation, T>>;
    generate<T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
        readonly count?: number;
    }): PureComputationOf<TComputation, T>;
    raise<T>(options?: {
        readonly raise?: Factory<unknown>;
    }): PureComputationOf<TComputation, T>;
    repeat<T>(predicate: Predicate<number>): ComputationOperator<TComputation, T, T>;
    repeat<T>(count: number): ComputationOperator<TComputation, T, T>;
    repeat<T>(): ComputationOperator<TComputation, T, T>;
    retry<T>(shouldRetry?: (count: number, error: Error) => boolean): ComputationOperator<TComputation, T, T>;
    scan<T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ComputationOperator<TComputation, T, TAcc>;
    takeFirst<T>(options?: {
        readonly count?: number;
    }): ComputationOperator<TComputation, T, T>;
    takeWhile<T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): ComputationOperator<TComputation, T, T>;
    throwIfEmpty<T>(factory: Factory<unknown>, options?: undefined): ComputationOperator<TComputation, T, T>;
}
export interface SynchronousComputationModule<TComputation extends Computation> {
    last<T>(): Function1<ComputationOf<TComputation, T>, Optional<T>>;
    reduce<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): Function1<ComputationOf<TComputation, T>, TAcc>;
    toRunnable<T>(): Function1<ComputationOf<TComputation, T>, RunnableLike<T>>;
    toReadonlyArray<T>(): Function1<ComputationOf<TComputation, T>, ReadonlyArray<T>>;
}
export interface InteractiveComputationModule<TComputation extends Computation> {
    zip<TA, TB>(a: ComputationOf<TComputation, TA>, b: ComputationOf<TComputation, TB>): ComputationOf<TComputation, Tuple2<TA, TB>>;
    zip<TA, TB, TC>(a: ComputationOf<TComputation, TA>, b: ComputationOf<TComputation, TB>, c: ComputationOf<TComputation, TC>): ComputationOf<TComputation, Tuple3<TA, TB, TC>>;
    zip<TA, TB, TC, TD>(a: ComputationOf<TComputation, TA>, b: ComputationOf<TComputation, TB>, c: ComputationOf<TComputation, TC>, d: ComputationOf<TComputation, TD>): ComputationOf<TComputation, Tuple4<TA, TB, TC, TD>>;
}
export interface DeferredReactiveComputationModule<TComputation extends Computation> {
    buffer<T>(options?: {
        count?: number;
    }): ComputationOperator<TComputation, T, readonly T[]>;
    decodeWithCharset(options?: {
        readonly charset?: string;
        readonly fatal?: boolean;
        readonly ignoreBOM?: boolean;
    }): ComputationOperator<TComputation, ArrayBuffer, string>;
    distinctUntilChanged<T>(options?: {
        readonly equality?: Equality<T>;
    }): ComputationOperator<TComputation, T, T>;
    pairwise<T>(): ComputationOperator<TComputation, T, Tuple2<T, T>>;
    skipFirst<T>(options?: {
        readonly count?: number;
    }): ComputationOperator<TComputation, T, T>;
    takeLast<T>(options?: {
        readonly count?: number;
    }): ComputationOperator<TComputation, T, T>;
}
export interface ConcurrentReactiveComputationModule<TComputation extends Computation> extends ComputationModule<TComputation> {
    fromPromise<T>(): Function1<Promise<T>, ComputationOf<TComputation, T>>;
    mergeMany<T>(computations: readonly PureComputationOf<TComputation, T>[]): PureComputationOf<TComputation, T>;
    mergeMany<T>(computations: readonly ComputationOf<TComputation, T>[]): ComputationWithSideEffectsOf<TComputation, T>;
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
export interface RunnableLike<T = unknown> extends SynchronousReactiveComputation {
    [RunnableLike_eval](sink: SinkLike<T>): void;
}
export interface PureRunnableLike<T = unknown> extends RunnableLike<T> {
    readonly [ComputationLike_isPure]?: true;
}
export interface RunnableWithSideEffectsLike<T = unknown> extends RunnableLike<T> {
    readonly [ComputationLike_isPure]: false;
}
export interface IterableLike<T = unknown> extends Iterable<T>, InteractiveComputationLike {
}
export interface PureIterableLike<T = unknown> extends IterableLike<T> {
    readonly [ComputationLike_isPure]?: true;
}
export interface IterableWithSideEffectsLike<T = unknown> extends IterableLike<T> {
    readonly [ComputationLike_isPure]: false;
}
export declare const ComputationWithSideEffectsType: Pick<ComputationWithSideEffectsLike, typeof ComputationLike_isPure>;
export declare const PureSynchronousComputationType: Pick<PureSynchronousComputationLike, typeof ComputationLike_isDeferred | typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous>;
export declare const SynchronousComputationWithSideEffectsType: Pick<SynchronousComputationWithSideEffectsLike, typeof ComputationLike_isDeferred | typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous>;
export declare const PureDeferredComputationType: Pick<PureDeferredComputationLike, typeof ComputationLike_isDeferred | typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous>;
export declare const DeferredComputationWithSideEffectsType: Pick<DeferredComputationWithSideEffectsLike, typeof ComputationLike_isDeferred | typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous>;
