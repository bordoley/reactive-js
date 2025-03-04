import { Computation, ComputationBaseOf, ComputationLike, ComputationModule, ComputationOfInnerType, ComputationOperator, ComputationWithSideEffectsLike, ComputationWithSideEffectsOperator, ConcurrentReactiveComputationModule, DeferredComputationLike, DeferredComputationOf, DeferredComputationOperator, DeferredComputationWithSideEffectsLike, DeferredComputationWithSideEffectsOf, DeferringHigherOrderInnerType, HigherOrderComputationOperator, InteractiveComputationLike, IterableLike, MulticastComputationLike, MulticastComputationOf, PureComputationLike, PureDeferredComputationLike, PureDeferredComputationOf, PureIterableLike, PureSynchronousComputationLike, PureSynchronousComputationOf, ReactiveComputationLike, SynchronousComputationLike, SynchronousComputationModule, SynchronousComputationOf, SynchronousComputationWithSideEffectsLike, SynchronousComputationWithSideEffectsOf, SynchronousReactiveComputation } from "../computations.js";
import { EventListenerLike } from "../events.js";
import { Function1, TypePredicate } from "../functions.js";
export interface ConcatManyOperator<TComputation extends Computation> {
    <T>(computations: readonly PureSynchronousComputationOf<TComputation, T>[]): PureSynchronousComputationOf<TComputation, T>;
    <T>(computations: readonly SynchronousComputationOf<TComputation, T>[]): SynchronousComputationWithSideEffectsOf<TComputation, T>;
    <T>(computations: readonly PureDeferredComputationOf<TComputation, T>[]): PureDeferredComputationOf<TComputation, T>;
    <T>(computations: readonly DeferredComputationOf<TComputation, T>[]): DeferredComputationWithSideEffectsOf<TComputation, T>;
}
export interface ConcatMapOperator<TComputation extends Computation> {
    <TA, TB>(selector: Function1<TA, PureSynchronousComputationOf<TComputation, TB>>): HigherOrderComputationOperator<TComputation, PureSynchronousComputationLike, TA, TB>;
    <TA, TB, TInnerType extends DeferringHigherOrderInnerType>(selector: Function1<TA, ComputationOfInnerType<TComputation, TInnerType, TB>>, options?: {
        readonly innerType: TInnerType;
    }): HigherOrderComputationOperator<TComputation, TInnerType, TA, TB>;
}
export interface ConcatMapIterableOperator<TComputation extends Computation> {
    <TA, TB>(selector: Function1<TA, PureIterableLike<TB>>): HigherOrderComputationOperator<TComputation, PureSynchronousComputationLike, TA, TB>;
    <TA, TB>(selector: Function1<TA, PureIterableLike<TB>>, options: {
        readonly innerType: PureSynchronousComputationLike;
    }): HigherOrderComputationOperator<TComputation, PureSynchronousComputationLike, TA, TB>;
    <TA, TB>(selector: Function1<TA, IterableLike<TB>>, options: {
        readonly innerType: SynchronousComputationWithSideEffectsLike;
    }): HigherOrderComputationOperator<TComputation, SynchronousComputationWithSideEffectsLike, TA, TB>;
}
export interface ConcatWithOperator<TComputation extends Computation> {
    <T>(snd: PureSynchronousComputationOf<TComputation, T>, ...tail: readonly PureSynchronousComputationOf<TComputation, T>[]): ComputationOperator<TComputation, T, T>;
    <T>(snd: SynchronousComputationOf<TComputation, T>, ...tail: readonly SynchronousComputationOf<TComputation, T>[]): ComputationWithSideEffectsOperator<TComputation, T, T>;
    <T>(snd: PureDeferredComputationOf<TComputation, T>, ...tail: readonly PureDeferredComputationOf<TComputation, T>[]): DeferredComputationOperator<TComputation, T, T>;
    <T>(snd: DeferredComputationOf<TComputation, T>, ...tail: readonly DeferredComputationOf<TComputation, T>[]): Function1<DeferredComputationOf<TComputation, T>, DeferredComputationWithSideEffectsOf<TComputation, T>>;
}
export interface MergeManyOperator<TComputation extends Computation> {
    <T>(computations: readonly PureSynchronousComputationOf<TComputation, T>[]): PureSynchronousComputationOf<TComputation, T>;
    <T>(computations: readonly SynchronousComputationOf<TComputation, T>[]): SynchronousComputationWithSideEffectsOf<TComputation, T>;
    <T>(computations: readonly PureDeferredComputationOf<TComputation, T>[]): PureDeferredComputationOf<TComputation, T>;
    <T>(computations: readonly DeferredComputationOf<TComputation, T>[]): DeferredComputationWithSideEffectsOf<TComputation, T>;
    <T>(computations: readonly ComputationBaseOf<TComputation, T>[]): ComputationBaseOf<TComputation, T>;
}
export interface MergeWithOperator<TComputation extends Computation> {
    <T>(snd: PureSynchronousComputationOf<TComputation, T>, ...tail: readonly PureSynchronousComputationOf<TComputation, T>[]): ComputationOperator<TComputation, T, T>;
    <T>(snd: SynchronousComputationOf<TComputation, T>, ...tail: readonly SynchronousComputationOf<TComputation, T>[]): ComputationWithSideEffectsOperator<TComputation, T, T>;
    <T>(snd: PureDeferredComputationOf<TComputation, T>, ...tail: readonly PureDeferredComputationOf<TComputation, T>[]): DeferredComputationOperator<TComputation, T, T>;
    <T>(snd: DeferredComputationOf<TComputation, T>, ...tail: readonly DeferredComputationOf<TComputation, T>[]): Function1<ComputationBaseOf<TComputation, T>, DeferredComputationWithSideEffectsOf<TComputation, T>>;
    <T>(snd: MulticastComputationOf<TComputation, T>, ...tail: readonly MulticastComputationOf<TComputation, T>[]): Function1<MulticastComputationOf<TComputation, T>, MulticastComputationOf<TComputation, T>>;
    <T>(snd: ComputationBaseOf<TComputation, T>, ...tail: readonly ComputationBaseOf<TComputation, T>[]): Function1<ComputationBaseOf<TComputation, T>, ComputationBaseOf<TComputation, T>>;
}
export interface PickOperator<TComputation extends Computation> {
    <T, TKeyOfT extends keyof T>(key: TKeyOfT): ComputationOperator<TComputation, T, T[TKeyOfT]>;
    <T, TKeyOfTA extends keyof T, TKeyOfTB extends keyof T[TKeyOfTA]>(keyA: TKeyOfTA, keyB: TKeyOfTB): ComputationOperator<TComputation, T, T[TKeyOfTA][TKeyOfTB]>;
    <T, TKeyOfTA extends keyof T, TKeyOfTB extends keyof T[TKeyOfTA], TKeyOfTC extends keyof T[TKeyOfTA][TKeyOfTB]>(keyA: TKeyOfTA, keyB: TKeyOfTB, keyC: TKeyOfTC): ComputationOperator<TComputation, T, T[TKeyOfTA][TKeyOfTB][TKeyOfTC]>;
}
export interface Signature {
    areAllDeferred<TComputation extends ComputationLike>(computations: readonly TComputation[]): computations is readonly (TComputation & DeferredComputationLike)[];
    areAllInteractive<TComputation extends ComputationLike>(computations: readonly TComputation[]): computations is readonly (TComputation & InteractiveComputationLike)[];
    areAllMulticasted<TComputation extends ComputationLike>(computations: readonly TComputation[]): computations is readonly (TComputation & MulticastComputationLike)[];
    areAllPure<TComputation extends ComputationLike>(computations: readonly TComputation[]): computations is readonly (TComputation & PureComputationLike)[];
    areAllSynchronous<TComputation extends ComputationLike>(computations: readonly TComputation[]): computations is readonly (TComputation & SynchronousComputationLike)[];
    concatMany<TComputation extends Computation>(m: Pick<SynchronousComputationModule<TComputation>, "concat">): ConcatManyOperator<TComputation>;
    concatMap<TComputation extends Computation>(m: Pick<SynchronousComputationModule<TComputation>, "concatAll" | "map">): ConcatMapOperator<TComputation>;
    concatMapIterable<TComputation extends Computation>(m: Pick<SynchronousComputationModule<TComputation>, "concatAll" | "map" | "fromIterable">): ConcatMapIterableOperator<TComputation>;
    concatWith<TComputation extends Computation>(m: Pick<SynchronousComputationModule<TComputation>, "concat">): ConcatWithOperator<TComputation>;
    debug<TComputation extends Computation>(m: Pick<SynchronousComputationModule<TComputation>, "forEach">): <T>() => ComputationWithSideEffectsOperator<TComputation, T, T>;
    endWith<TComputation extends Computation>(m: Pick<SynchronousComputationModule<TComputation>, "concat" | "fromReadonlyArray">): <T>(value: T, ...values: readonly T[]) => ComputationOperator<TComputation, T, T>;
    hasSideEffects<TComputation extends ComputationLike>(computation: TComputation): computation is TComputation & ComputationWithSideEffectsLike;
    ignoreElements<TComputation extends Computation>(m: Pick<ComputationModule<TComputation>, "keep">): <T>() => ComputationOperator<TComputation, any, T>;
    isDeferred<TComputation extends ComputationLike = ComputationLike>(computation: TComputation): computation is TComputation & DeferredComputationLike;
    isDeferredWithSideEffects<TComputation extends ComputationLike = ComputationLike>(computation: TComputation): computation is TComputation & DeferredComputationWithSideEffectsLike;
    isInteractive<TComputation extends ComputationLike = ComputationLike>(computation: TComputation): computation is TComputation & InteractiveComputationLike;
    isMulticasted<TComputation extends ComputationLike = ComputationLike>(computation: TComputation): computation is TComputation & MulticastComputationLike;
    isPure<TComputation extends ComputationLike = ComputationLike>(computation: TComputation): computation is TComputation & PureComputationLike;
    isPureDeferred<TComputation extends ComputationLike = ComputationLike>(computation: TComputation): computation is TComputation & PureDeferredComputationLike;
    isPureSynchronous<TComputation extends ComputationLike = ComputationLike>(computation: TComputation): computation is TComputation & PureSynchronousComputationLike;
    isReactive<TComputation extends ComputationLike = ComputationLike>(computation: TComputation): computation is TComputation & ReactiveComputationLike;
    isSynchronous<TComputation extends ComputationLike = ComputationLike>(computation: TComputation): computation is TComputation & SynchronousComputationLike;
    isSynchronousReactive<TComputation extends ComputationLike = ComputationLike>(computation: TComputation): computation is TComputation & SynchronousReactiveComputation;
    isSynchronousWithSideEffects<TComputation extends ComputationLike = ComputationLike>(computation: TComputation): computation is TComputation & SynchronousComputationWithSideEffectsLike;
    keepType<TComputation extends Computation>(m: Pick<ComputationModule<TComputation>, "keep">): <TA, TB>(predicate: TypePredicate<TA, TB>) => ComputationOperator<TComputation, TA, TB>;
    log<TComputation extends Computation>(m: Pick<SynchronousComputationModule<TComputation>, "forEach">): <T>() => ComputationWithSideEffectsOperator<TComputation, T, T>;
    mapTo<TComputation extends Computation>(m: Pick<ComputationModule<TComputation>, "map">): <T>(value: T) => ComputationOperator<TComputation, unknown, T>;
    mergeMany<TComputation extends Computation>(m: Pick<ConcurrentReactiveComputationModule<TComputation>, "merge">): MergeManyOperator<TComputation>;
    mergeWith<TComputation extends Computation>(m: Pick<ConcurrentReactiveComputationModule<TComputation>, "merge">): MergeWithOperator<TComputation>;
    notify<TComputation extends Computation>(m: Pick<SynchronousComputationModule<TComputation>, "forEach">): <T>(eventListener: EventListenerLike<T>) => ComputationWithSideEffectsOperator<TComputation, T, T>;
    pick<TComputation extends Computation>(m: Pick<ComputationModule<TComputation>, "map">): PickOperator<TComputation>;
    sequence<TComputation extends Computation>(m: Pick<SynchronousComputationModule<TComputation>, "generate">): (start: number) => ComputationBaseOf<TComputation, number>;
    startWith<TComputation extends Computation>(m: Pick<SynchronousComputationModule<TComputation>, "concat" | "fromReadonlyArray">): <T>(value: T, ...values: readonly T[]) => ComputationOperator<TComputation, T, T>;
}
export declare const areAllDeferred: Signature["areAllDeferred"];
export declare const areAllInteractive: Signature["areAllInteractive"];
export declare const areAllMulticasted: Signature["areAllMulticasted"];
export declare const areAllPure: Signature["areAllPure"];
export declare const areAllSynchronous: Signature["areAllSynchronous"];
export declare const concatMany: Signature["concatMany"];
export declare const concatMap: Signature["concatMap"];
export declare const concatMapIterable: Signature["concatMapIterable"];
export declare const concatWith: Signature["concatWith"];
export declare const debug: Signature["debug"];
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
export declare const log: Signature["log"];
export declare const mapTo: Signature["mapTo"];
export declare const mergeMany: Signature["mergeMany"];
export declare const mergeWith: Signature["mergeWith"];
export declare const notify: Signature["notify"];
export declare const pick: Signature["pick"];
export declare const sequence: Signature["sequence"];
export declare const startWith: Signature["startWith"];
