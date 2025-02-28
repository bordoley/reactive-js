import { Equality, Factory, Function1, Optional, Predicate, Reducer, SideEffect1, Tuple2, Updater } from "./functions.js";
export declare const Computation_T: unique symbol;
export declare const Computation_type: unique symbol;
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
/**
 * @noInheritDoc
 */
export interface Computation<_Type extends ComputationLike> {
    readonly [Computation_T]?: unknown;
    readonly [Computation_type]?: unknown;
}
export type ComputationOf<Type extends ComputationLike, TComputation extends Computation<Type>, T> = TComputation extends {
    readonly [Computation_type]?: unknown;
} ? NonNullable<(TComputation & {
    readonly [Computation_T]: T;
})[typeof Computation_type] & Pick<Type, typeof ComputationLike_isPure | typeof ComputationLike_isDeferred | typeof ComputationLike_isSynchronous>> : {
    readonly _C: TComputation;
    readonly _T: () => T;
};
export type ComputationOperator<Type extends ComputationLike, TComputation extends Computation<Type>, TA, TB> = Function1<ComputationOf<Type, TComputation, TA>, ComputationOf<Type, TComputation, TB>>;
export type ComputationWithSideEffectsOperator<Type extends ComputationLike, TComputation extends Computation<Type>, TypeWithSideEffects extends ComputationWithSideEffectsLike & Type, TComputationWithSideEffects extends Computation<TypeWithSideEffects>, TA, TB> = Function1<ComputationOf<Type, TComputation, TA>, ComputationOf<TypeWithSideEffects, TComputationWithSideEffects, TB>>;
export interface DeferredComputationModule<Type extends ComputationLike, TComputation extends Computation<Type>> {
    catchError<T>(onError: SideEffect1<Error>): ComputationOperator<Type, TComputation, T, T>;
    catchError<T>(onError: Function1<Error, ComputationOf<Type, TComputation, T>>): ComputationOperator<Type, TComputation, T, T>;
    concat<T>(fst: ComputationOf<Type, TComputation, T>, snd: ComputationOf<Type, TComputation, T>, ...tail: readonly ComputationOf<Type, TComputation, T>[]): ComputationOf<Type, TComputation, T>;
    concatAll<T>(): ComputationOperator<Type, TComputation, ComputationOf<Type, TComputation, T>, T>;
    concatMap<TA, TB>(selector: Function1<TA, ComputationOf<Type, TComputation, TB>>): ComputationOperator<Type, TComputation, TA, TB>;
    concatMany<T>(computations: readonly [
        ComputationOf<Type, TComputation, T>,
        ...(readonly ComputationOf<Type, TComputation, T>[])
    ]): ComputationOf<Type, TComputation, T>;
    concatWith<T>(snd: ComputationOf<Type, TComputation, T>, ...tail: readonly ComputationOf<Type, TComputation, T>[]): ComputationOperator<Type, TComputation, T, T>;
    empty<T>(): ComputationOf<Type, TComputation, T>;
    endWith<T>(value: T, ...values: readonly T[]): ComputationOperator<Type, TComputation, T, T>;
    fromIterable<T, TIterable extends IterableLike<T> = IterableLike<T>>(): Function1<TIterable, ComputationOf<Type, TComputation, T>>;
    fromReadonlyArray<T>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<readonly T[], ComputationOf<Type, TComputation, T>>;
    fromValue<T>(): Function1<T, ComputationOf<Type, TComputation, T>>;
    generate<T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
        readonly count?: number;
    }): ComputationOf<Type, TComputation, T>;
    raise<T>(options?: {
        readonly raise?: Factory<unknown>;
    }): ComputationOf<Type, TComputation, T>;
    repeat<T>(predicate: Predicate<number>): ComputationOperator<Type, TComputation, T, T>;
    repeat<T>(count: number): ComputationOperator<Type, TComputation, T, T>;
    repeat<T>(): ComputationOperator<Type, TComputation, T, T>;
    retry<T>(shouldRetry?: (count: number, error: Error) => boolean): ComputationOperator<Type, TComputation, T, T>;
    scan<T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ComputationOperator<Type, TComputation, T, TAcc>;
    startWith<T>(value: T, ...values: readonly T[]): ComputationOperator<Type, TComputation, T, T>;
    takeFirst<T>(options?: {
        readonly count?: number;
    }): ComputationOperator<Type, TComputation, T, T>;
    takeWhile<T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): ComputationOperator<Type, TComputation, T, T>;
    throwIfEmpty<T>(factory: Factory<unknown>, options?: undefined): ComputationOperator<Type, TComputation, T, T>;
}
export interface ComputationWithSideEffectsModule<Type extends ComputationLike, TComputation extends Computation<Type>, TypeWithSideEffects extends ComputationWithSideEffectsLike & Type, ComputationWithSideEffect extends Computation<TypeWithSideEffects>> {
    forEach<T>(sideEffect: SideEffect1<T>): ComputationWithSideEffectsOperator<Type, TComputation, TypeWithSideEffects, ComputationWithSideEffect, T, T>;
}
export interface PureStatelessComputationModule<Type extends ComputationLike, TComputation extends Computation<Type>> {
    keep<T>(predicate: Predicate<T>): ComputationOperator<Type, TComputation, T, T>;
    map<TA, TB>(selector: Function1<TA, TB>): ComputationOperator<Type, TComputation, TA, TB>;
}
export interface SynchronousComputationModule<Type extends SynchronousComputationLike, TComputation extends Computation<Type>> {
    last<T>(): Function1<ComputationOf<Type, TComputation, T>, Optional<T>>;
    reduce<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): Function1<ComputationOf<Type, TComputation, T>, TAcc>;
    toRunnable<T>(): Function1<ComputationOf<Type, TComputation, T>, RunnableLike<T>>;
    toReadonlyArray<T>(): Function1<ComputationOf<Type, TComputation, T>, ReadonlyArray<T>>;
}
export interface PureStatefulComputationModule<Type extends ComputationLike, TComputation extends Computation<Type>> {
    buffer<T>(options?: {
        count?: number;
    }): ComputationOperator<Type, TComputation, T, readonly T[]>;
    decodeWithCharset(options?: {
        readonly charset?: string;
        readonly fatal?: boolean;
        readonly ignoreBOM?: boolean;
    }): ComputationOperator<Type, TComputation, ArrayBuffer, string>;
    distinctUntilChanged<T>(options?: {
        readonly equality?: Equality<T>;
    }): ComputationOperator<Type, TComputation, T, T>;
    ignoreElements<T>(): ComputationOperator<Type, TComputation, any, T>;
    pairwise<T>(): ComputationOperator<Type, TComputation, T, Tuple2<T, T>>;
    skipFirst<T>(options?: {
        readonly count?: number;
    }): ComputationOperator<Type, TComputation, T, T>;
    takeLast<T>(options?: {
        readonly count?: number;
    }): ComputationOperator<Type, TComputation, T, T>;
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
export declare const PureSynchronousComputationType: Pick<PureSynchronousComputationLike, typeof ComputationLike_isDeferred | typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous>;
export declare const SynchronousComputationWithSideEffectsType: Pick<SynchronousComputationWithSideEffectsLike, typeof ComputationLike_isDeferred | typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous>;
export declare const PureDeferredComputationType: Pick<PureDeferredComputationLike, typeof ComputationLike_isDeferred | typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous>;
export declare const DeferredComputationWithSideEffectsType: Pick<DeferredComputationWithSideEffectsLike, typeof ComputationLike_isDeferred | typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous>;
