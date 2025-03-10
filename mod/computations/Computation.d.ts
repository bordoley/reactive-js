import { ComputationBaseOf, ComputationLike, ComputationModule, ComputationOf, ComputationOperatorWithSideEffects, ComputationType, ComputationWithSideEffectsLike, ConcurrentReactiveComputationModule, DeferredComputationLike, DeferredComputationModule, DeferredComputationOf, DeferredComputationWithSideEffectsLike, DeferredComputationWithSideEffectsOf, HigherOrderComputationOperator, HigherOrderInnerComputationLike, HigherOrderInnerComputationOf, MulticastComputationLike, MulticastComputationOf, PickComputationModule, PureComputationLike, PureDeferredComputationLike, PureDeferredComputationOf, PureIterableLike, PureSynchronousComputationLike, PureSynchronousComputationOf, StatefulAsynchronousComputationOperator, StatefulSynchronousComputationOperator, StatelessComputationOperator, SynchronousComputationLike, SynchronousComputationOf, SynchronousComputationWithSideEffectsLike, SynchronousComputationWithSideEffectsOf } from "../computations.js";
import { Function1, TypePredicate } from "../functions.js";
import { EventListenerLike } from "../utils.js";
export interface ConcatManyOperator<TComputation extends ComputationType> {
    <T>(computations: readonly PureSynchronousComputationOf<TComputation, T>[]): PureSynchronousComputationOf<TComputation, T>;
    <T>(computations: readonly SynchronousComputationOf<TComputation, T>[]): SynchronousComputationWithSideEffectsOf<TComputation, T>;
    <T>(computations: readonly PureDeferredComputationOf<TComputation, T>[]): PureDeferredComputationOf<TComputation, T>;
    <T>(computations: readonly DeferredComputationOf<TComputation, T>[]): DeferredComputationWithSideEffectsOf<TComputation, T>;
}
export interface FlatMapOperator<TComputation extends ComputationType> {
    <TA, TB>(selector: Function1<TA, PureSynchronousComputationOf<TComputation, TB>>): HigherOrderComputationOperator<TComputation, PureSynchronousComputationLike, TA, TB>;
    <TA, TB, TInnerType extends HigherOrderInnerComputationLike>(selector: Function1<TA, HigherOrderInnerComputationOf<TComputation, TInnerType, TB>>, options?: {
        readonly innerType: TInnerType;
    }): HigherOrderComputationOperator<TComputation, TInnerType, TA, TB>;
}
export interface FlatMapIterableOperator<TComputation extends ComputationType> {
    <TA, TB>(selector: Function1<TA, PureIterableLike<TB>>): HigherOrderComputationOperator<TComputation, PureSynchronousComputationLike, TA, TB>;
    <TA, TB>(selector: Function1<TA, PureIterableLike<TB>>, options: {
        readonly innerType: PureSynchronousComputationLike;
    }): HigherOrderComputationOperator<TComputation, PureSynchronousComputationLike, TA, TB>;
}
export interface ConcatWithOperator<TComputation extends ComputationType> {
    <T>(snd: PureSynchronousComputationOf<TComputation, T>, ...tail: readonly PureSynchronousComputationOf<TComputation, T>[]): StatelessComputationOperator<TComputation, T, T>;
    <T>(snd: SynchronousComputationOf<TComputation, T>, ...tail: readonly SynchronousComputationOf<TComputation, T>[]): ComputationOperatorWithSideEffects<TComputation, T, T>;
    <T>(snd: PureDeferredComputationOf<TComputation, T>, ...tail: readonly PureDeferredComputationOf<TComputation, T>[]): StatefulAsynchronousComputationOperator<TComputation, T, T>;
    <T>(snd: DeferredComputationOf<TComputation, T>, ...tail: readonly DeferredComputationOf<TComputation, T>[]): Function1<DeferredComputationOf<TComputation, T>, DeferredComputationWithSideEffectsOf<TComputation, T>>;
}
export interface MergeManyOperator<TComputation extends ComputationType> {
    <T>(computations: readonly PureSynchronousComputationOf<TComputation, T>[]): PureSynchronousComputationOf<TComputation, T>;
    <T>(computations: readonly SynchronousComputationOf<TComputation, T>[]): SynchronousComputationWithSideEffectsOf<TComputation, T>;
    <T>(computations: readonly PureDeferredComputationOf<TComputation, T>[]): PureDeferredComputationOf<TComputation, T>;
    <T>(computations: readonly DeferredComputationOf<TComputation, T>[]): DeferredComputationWithSideEffectsOf<TComputation, T>;
    <T>(computations: readonly ComputationBaseOf<TComputation, T>[]): ComputationBaseOf<TComputation, T>;
}
export interface MergeWithOperator<TComputation extends ComputationType> {
    <T>(snd: PureSynchronousComputationOf<TComputation, T>, ...tail: readonly PureSynchronousComputationOf<TComputation, T>[]): StatefulSynchronousComputationOperator<TComputation, T, T>;
    <T>(snd: SynchronousComputationOf<TComputation, T>, ...tail: readonly SynchronousComputationOf<TComputation, T>[]): ComputationOperatorWithSideEffects<TComputation, T, T>;
    <T>(snd: PureDeferredComputationOf<TComputation, T>, ...tail: readonly PureDeferredComputationOf<TComputation, T>[]): StatefulAsynchronousComputationOperator<TComputation, T, T>;
    <T>(snd: DeferredComputationOf<TComputation, T>, ...tail: readonly DeferredComputationOf<TComputation, T>[]): Function1<ComputationOf<TComputation, T>, DeferredComputationWithSideEffectsOf<TComputation, T>>;
    <T>(snd: MulticastComputationOf<TComputation, T>, ...tail: readonly MulticastComputationOf<TComputation, T>[]): Function1<MulticastComputationOf<TComputation, T>, MulticastComputationOf<TComputation, T>>;
    <T>(snd: ComputationBaseOf<TComputation, T>, ...tail: readonly ComputationBaseOf<TComputation, T>[]): Function1<ComputationBaseOf<TComputation, T>, ComputationBaseOf<TComputation, T>>;
}
export interface PickOperator<TComputation extends ComputationType> {
    <T, TKeyOfT extends keyof T>(key: TKeyOfT): StatelessComputationOperator<TComputation, T, T[TKeyOfT]>;
    <T, TKeyOfTA extends keyof T, TKeyOfTB extends keyof T[TKeyOfTA]>(keyA: TKeyOfTA, keyB: TKeyOfTB): StatelessComputationOperator<TComputation, T, T[TKeyOfTA][TKeyOfTB]>;
    <T, TKeyOfTA extends keyof T, TKeyOfTB extends keyof T[TKeyOfTA], TKeyOfTC extends keyof T[TKeyOfTA][TKeyOfTB]>(keyA: TKeyOfTA, keyB: TKeyOfTB, keyC: TKeyOfTC): StatelessComputationOperator<TComputation, T, T[TKeyOfTA][TKeyOfTB][TKeyOfTC]>;
}
export interface Signature {
    areAllDeferred<TComputation extends ComputationLike>(computations: readonly TComputation[]): computations is readonly (TComputation & DeferredComputationLike)[];
    areAllMulticasted<TComputation extends ComputationLike>(computations: readonly TComputation[]): computations is readonly (TComputation & MulticastComputationLike)[];
    areAllPure<TComputation extends ComputationLike>(computations: readonly TComputation[]): computations is readonly (TComputation & PureComputationLike)[];
    areAllSynchronous<TComputation extends ComputationLike>(computations: readonly TComputation[]): computations is readonly (TComputation & SynchronousComputationLike)[];
    concatMap<TComputation extends ComputationType>(m: PickComputationModule<TComputation, ComputationModule<TComputation> & DeferredComputationModule<TComputation>, "concatAll" | "map">): FlatMapOperator<TComputation>;
    concatMapIterable<TComputation extends ComputationType>(m: PickComputationModule<TComputation, ComputationModule<TComputation> & DeferredComputationModule<TComputation>, "concatAll" | "map" | "fromIterable">): FlatMapIterableOperator<TComputation>;
    concatMany<TComputation extends ComputationType>(m: PickComputationModule<TComputation, DeferredComputationModule<TComputation>, "concat">): ConcatManyOperator<TComputation>;
    concatWith<TComputation extends ComputationType>(m: PickComputationModule<TComputation, DeferredComputationModule<TComputation>, "concat">): ConcatWithOperator<TComputation>;
    debug<TComputation extends ComputationType>(m: PickComputationModule<TComputation, DeferredComputationModule<TComputation>, "forEach">): <T>() => ComputationOperatorWithSideEffects<TComputation, T, T>;
    endWith<TComputation extends ComputationType>(m: PickComputationModule<TComputation, DeferredComputationModule<TComputation>, "concat" | "fromReadonlyArray">): <T>(value: T, ...values: readonly T[]) => StatelessComputationOperator<TComputation, T, T>;
    flatMap<TComputation extends ComputationType, TFlattenKey extends string | number | symbol>(m: PickComputationModule<TComputation, ComputationModule<TComputation>, "map"> & {
        readonly [key in TFlattenKey]: DeferredComputationModule<TComputation>["concatAll"];
    }, key: TFlattenKey): FlatMapOperator<TComputation>;
    flatMapIterable<TComputation extends ComputationType, TFlattenKey extends string | number | symbol>(m: PickComputationModule<TComputation, ComputationModule<TComputation>, "map" | "fromIterable"> & {
        readonly [key in TFlattenKey]: DeferredComputationModule<TComputation>["concatAll"];
    }, key: TFlattenKey): FlatMapIterableOperator<TComputation>;
    hasSideEffects<TComputation extends ComputationLike>(computation: TComputation): computation is TComputation & ComputationWithSideEffectsLike;
    ignoreElements<TComputation extends ComputationType>(m: PickComputationModule<TComputation, ComputationModule<TComputation>, "keep">): <T>() => StatelessComputationOperator<TComputation, any, T>;
    isDeferred<TComputation extends ComputationLike = ComputationLike>(computation: TComputation): computation is TComputation & DeferredComputationLike;
    isDeferredWithSideEffects<TComputation extends ComputationLike = ComputationLike>(computation: TComputation): computation is TComputation & DeferredComputationWithSideEffectsLike;
    isMulticasted<TComputation extends ComputationLike = ComputationLike>(computation: TComputation): computation is TComputation & MulticastComputationLike;
    isPure<TComputation extends ComputationLike = ComputationLike>(computation: TComputation): computation is TComputation & PureComputationLike;
    isPureDeferred<TComputation extends ComputationLike = ComputationLike>(computation: TComputation): computation is TComputation & PureDeferredComputationLike;
    isPureSynchronous<TComputation extends ComputationLike = ComputationLike>(computation: TComputation): computation is TComputation & PureSynchronousComputationLike;
    isSynchronous<TComputation extends ComputationLike = ComputationLike>(computation: TComputation): computation is TComputation & SynchronousComputationLike;
    isSynchronousWithSideEffects<TComputation extends ComputationLike = ComputationLike>(computation: TComputation): computation is TComputation & SynchronousComputationWithSideEffectsLike;
    keepType<TComputation extends ComputationType>(m: PickComputationModule<TComputation, ComputationModule<TComputation>, "keep">): <TA, TB>(predicate: TypePredicate<TA, TB>) => StatelessComputationOperator<TComputation, TA, TB>;
    log<TComputation extends ComputationType>(m: PickComputationModule<TComputation, DeferredComputationModule<TComputation>, "forEach">): <T>() => ComputationOperatorWithSideEffects<TComputation, T, T>;
    mapTo<TComputation extends ComputationType>(m: PickComputationModule<TComputation, ComputationModule<TComputation>, "map">): <T>(value: T) => StatelessComputationOperator<TComputation, unknown, T>;
    mergeMany<TComputation extends ComputationType>(m: PickComputationModule<TComputation, ConcurrentReactiveComputationModule<TComputation>, "merge">): MergeManyOperator<TComputation>;
    mergeWith<TComputation extends ComputationType>(m: PickComputationModule<TComputation, ConcurrentReactiveComputationModule<TComputation>, "merge">): MergeWithOperator<TComputation>;
    notify<TComputation extends ComputationType>(m: PickComputationModule<TComputation, DeferredComputationModule<TComputation>, "forEach">): <T>(eventListener: EventListenerLike<T>) => ComputationOperatorWithSideEffects<TComputation, T, T>;
    pick<TComputation extends ComputationType>(m: PickComputationModule<TComputation, ComputationModule<TComputation>, "map">): PickOperator<TComputation>;
    sequence<TComputation extends ComputationType>(m: PickComputationModule<TComputation, ComputationModule<TComputation>, "generate">): (start: number) => ComputationBaseOf<TComputation, number>;
    startWith<TComputation extends ComputationType>(m: PickComputationModule<TComputation, DeferredComputationModule<TComputation>, "concat" | "fromReadonlyArray">): <T>(value: T, ...values: readonly T[]) => StatelessComputationOperator<TComputation, T, T>;
}
export declare const areAllDeferred: Signature["areAllDeferred"];
export declare const areAllMulticasted: Signature["areAllMulticasted"];
export declare const areAllPure: Signature["areAllPure"];
export declare const areAllSynchronous: Signature["areAllSynchronous"];
export declare const concatMap: Signature["concatMap"];
export declare const concatMapIterable: Signature["concatMapIterable"];
export declare const concatMany: Signature["concatMany"];
export declare const concatWith: Signature["concatWith"];
export declare const debug: Signature["debug"];
export declare const endWith: Signature["endWith"];
export declare const flatMap: Signature["flatMap"];
export declare const flatMapIterable: Signature["flatMapIterable"];
export declare const hasSideEffects: Signature["hasSideEffects"];
export declare const ignoreElements: Signature["ignoreElements"];
export declare const isDeferred: Signature["isDeferred"];
export declare const isDeferredWithSideEffects: Signature["isDeferredWithSideEffects"];
export declare const isMulticasted: Signature["isMulticasted"];
export declare const isPure: Signature["isPure"];
export declare const isPureDeferred: Signature["isPureDeferred"];
export declare const isPureSynchronous: Signature["isPureSynchronous"];
export declare const isSynchronous: Signature["isSynchronous"];
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
