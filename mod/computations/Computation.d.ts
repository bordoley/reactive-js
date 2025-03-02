import { Computation, ComputationLike, ComputationModule, ComputationOf, ComputationOperator, ComputationWithSideEffectsLike, ComputationWithSideEffectsOf, ComputationWithSideEffectsOperator, ComputationWithSideEffectsType, ConcurrentReactiveComputationModule, DeferredComputationLike, DeferredComputationModule, DeferredComputationWithSideEffectsLike, InteractiveComputationLike, IterableLike, MulticastComputationLike, PureComputationLike, PureComputationOf, PureDeferredComputationLike, PureIterableLike, PureSynchronousComputationLike, ReactiveComputationLike, SynchronousComputationLike, SynchronousComputationWithSideEffectsLike, SynchronousReactiveComputation } from "../computations.js";
import { Function1, TypePredicate } from "../functions.js";
export interface PickOperator<TComputation extends Computation> {
    <T, TKeyOfT extends keyof T>(key: TKeyOfT): ComputationOperator<TComputation, T, T[TKeyOfT]>;
    <T, TKeyOfTA extends keyof T, TKeyOfTB extends keyof T[TKeyOfTA]>(keyA: TKeyOfTA, keyB: TKeyOfTB): ComputationOperator<TComputation, T, T[TKeyOfTA][TKeyOfTB]>;
    <T, TKeyOfTA extends keyof T, TKeyOfTB extends keyof T[TKeyOfTA], TKeyOfTC extends keyof T[TKeyOfTA][TKeyOfTB]>(keyA: TKeyOfTA, keyB: TKeyOfTB, keyC: TKeyOfTC): ComputationOperator<TComputation, T, T[TKeyOfTA][TKeyOfTB][TKeyOfTC]>;
}
export interface ConcatOperator<TComputation extends Computation> {
    <T>(...computations: PureComputationOf<TComputation, T>[]): PureComputationOf<TComputation, T>;
    <T>(...computations: ComputationOf<TComputation, T>[]): ComputationWithSideEffectsOf<TComputation, T>;
}
export interface ConcatMapOperator<TComputation extends Computation> {
    <TA, TB>(selector: Function1<TA, PureComputationOf<TComputation, TB>>): ComputationOperator<TComputation, TA, TB>;
    <TA, TB>(selector: Function1<TA, ComputationOf<TComputation, TB>>, options?: {
        readonly innerType: typeof ComputationWithSideEffectsType;
    }): ComputationWithSideEffectsOperator<TComputation, ComputationOf<TComputation, TA>, TB>;
}
export interface ConcatMapIterableOperator<TComputation extends Computation> {
    <TA, TB>(selector: Function1<TA, PureIterableLike<TB>>): ComputationOperator<TComputation, TA, TB>;
    <TA, TB>(selector: Function1<TA, IterableLike<TB>>, options: {
        readonly innerType: typeof ComputationWithSideEffectsType;
    }): ComputationWithSideEffectsOperator<TComputation, TA, TB>;
}
export interface ConcatWithOperator<TComputation extends Computation> {
    <T>(snd: PureComputationOf<TComputation, T>, ...tail: readonly PureComputationOf<TComputation, T>[]): ComputationOperator<TComputation, T, T>;
    <T>(snd: ComputationOf<TComputation, T>, ...tail: readonly ComputationOf<TComputation, T>[]): ComputationWithSideEffectsOf<TComputation, T>;
}
export interface MergeOperator<TComputation extends Computation> {
    <T>(...computations: PureComputationOf<TComputation, T>[]): PureComputationOf<TComputation, T>;
    <T>(...computations: ComputationOf<TComputation, T>[]): ComputationWithSideEffectsOf<TComputation, T>;
}
export interface MergeWithOperator<TComputation extends Computation> {
    <T>(snd: PureComputationOf<TComputation, T>, ...tail: readonly PureComputationOf<TComputation, T>[]): ComputationOperator<TComputation, T, T>;
    <T>(snd: ComputationOf<TComputation, T>, ...tail: readonly ComputationOf<TComputation, T>[]): ComputationWithSideEffectsOf<TComputation, T>;
}
export interface Signature {
    areAllDeferred<TComputation extends ComputationLike>(computations: readonly TComputation[]): computations is readonly (TComputation & DeferredComputationLike)[];
    areAllInteractive<TComputation extends ComputationLike>(computations: readonly TComputation[]): computations is readonly (TComputation & InteractiveComputationLike)[];
    areAllMulticasted<TComputation extends ComputationLike>(computations: readonly TComputation[]): computations is readonly (TComputation & MulticastComputationLike)[];
    areAllPure<TComputation extends ComputationLike>(computations: readonly TComputation[]): computations is readonly (TComputation & PureComputationLike)[];
    areAllSynchronous<TComputation extends ComputationLike>(computations: readonly TComputation[]): computations is readonly (TComputation & SynchronousComputationLike)[];
    concat<TComputation extends Computation>(m: Pick<DeferredComputationModule<TComputation>, "concatMany">): ConcatOperator<TComputation>;
    concatMap<TComputation extends Computation>(m: Pick<DeferredComputationModule<TComputation>, "concatAll" | "map">): ConcatMapOperator<TComputation>;
    concatMapIterable<TComputation extends Computation>(m: Pick<DeferredComputationModule<TComputation>, "concatAll" | "map" | "fromIterable">): ConcatMapIterableOperator<TComputation>;
    concatWith<TComputation extends Computation>(m: Pick<DeferredComputationModule<TComputation>, "concatMany">): ConcatWithOperator<TComputation>;
    endWith<TComputation extends Computation>(m: Pick<DeferredComputationModule<TComputation>, "concatMany" | "fromReadonlyArray">): <T>(value: T, ...values: readonly T[]) => ComputationOperator<TComputation, T, T>;
    hasSideEffects<TComputation extends ComputationLike>(computation: TComputation): computation is TComputation & ComputationWithSideEffectsLike;
    ignoreElements<TComputation extends Computation>(m: Pick<ComputationModule<TComputation>, "keep">): <T>() => ComputationOperator<TComputation, any, T>;
    isDeferred<TComputation extends ComputationLike>(computation: TComputation): computation is TComputation & DeferredComputationLike;
    isDeferredWithSideEffects<TComputation extends ComputationLike>(computation: TComputation): computation is TComputation & DeferredComputationWithSideEffectsLike;
    isInteractive<TComputation extends ComputationLike>(computation: TComputation): computation is TComputation & InteractiveComputationLike;
    isMulticasted<TComputation extends ComputationLike>(computation: TComputation): computation is TComputation & MulticastComputationLike;
    isPure<TComputation extends ComputationLike>(computation: TComputation): computation is TComputation & PureComputationLike;
    isPureDeferred<TComputation extends ComputationLike>(computation: TComputation): computation is TComputation & PureDeferredComputationLike;
    isPureSynchronous<TComputation extends ComputationLike>(computation: TComputation): computation is TComputation & PureSynchronousComputationLike;
    isReactive<TComputation extends ComputationLike>(computation: TComputation): computation is TComputation & ReactiveComputationLike;
    isSynchronous<TComputation extends ComputationLike>(computation: TComputation): computation is TComputation & SynchronousComputationLike;
    isSynchronousReactive<TComputation extends ComputationLike>(computation: TComputation): computation is TComputation & SynchronousReactiveComputation;
    isSynchronousWithSideEffects<TComputation extends ComputationLike>(computation: TComputation): computation is TComputation & SynchronousComputationWithSideEffectsLike;
    keepType<TComputation extends Computation>(m: Pick<ComputationModule<TComputation>, "keep">): <TA, TB>(predicate: TypePredicate<TA, TB>) => ComputationOperator<TComputation, TA, TB>;
    mapTo<TComputation extends Computation>(m: Pick<ComputationModule<TComputation>, "map">): <T>(value: T) => ComputationOperator<TComputation, unknown, T>;
    merge<TComputation extends Computation>(m: Pick<ConcurrentReactiveComputationModule<TComputation>, "mergeMany">): MergeOperator<TComputation>;
    mergeWith<TComputation extends Computation>(m: Pick<ConcurrentReactiveComputationModule<TComputation>, "mergeMany">): MergeWithOperator<TComputation>;
    pick<TComputation extends Computation>(m: Pick<ComputationModule<TComputation>, "map">): PickOperator<TComputation>;
    sequence<TComputation extends Computation>(m: Pick<DeferredComputationModule<TComputation>, "generate">): (start: number) => ComputationOf<TComputation, number>;
    startWith<TComputation extends Computation>(m: Pick<DeferredComputationModule<TComputation>, "concatMany" | "fromReadonlyArray">): <T>(value: T, ...values: readonly T[]) => ComputationOperator<TComputation, T, T>;
}
export declare const areAllDeferred: Signature["areAllDeferred"];
export declare const areAllInteractive: Signature["areAllInteractive"];
export declare const areAllMulticasted: Signature["areAllMulticasted"];
export declare const areAllPure: Signature["areAllPure"];
export declare const areAllSynchronous: Signature["areAllSynchronous"];
export declare const concat: Signature["concat"];
export declare const concatMap: Signature["concatMap"];
export declare const concatMapIterable: Signature["concatMapIterable"];
export declare const concatWith: Signature["concatWith"];
export declare const endWith: Signature["endWith"];
export declare const hasSideEffects: Signature["hasSideEffects"];
export declare const ignoreElements: Signature["ignoreElements"];
export declare const isDeferred: Signature["isDeferred"];
export declare const isDeferredWithSideEffects: Signature["isDeferredWithSideEffects"];
export declare const isInteractive: Signature["isInteractive"];
export declare const isMulticasted: Signature["isMulticasted"];
export declare const isPure: Signature["isPure"];
export declare const isPureDeferred: Signature["isPureDeferred"];
export declare const isPureSynchronous: Signature["isPureSynchronous"];
export declare const isReactive: Signature["isReactive"];
export declare const isSynchronous: Signature["isSynchronous"];
export declare const isSynchronousReactive: Signature["isSynchronousReactive"];
export declare const isSynchronousWithSideEffects: Signature["isSynchronousWithSideEffects"];
export declare const keepType: Signature["keepType"];
export declare const mapTo: Signature["mapTo"];
export declare const merge: Signature["merge"];
export declare const mergeWith: Signature["mergeWith"];
export declare const pick: Signature["pick"];
export declare const sequence: Signature["sequence"];
export declare const startWith: Signature["startWith"];
