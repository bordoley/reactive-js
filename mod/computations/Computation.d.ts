import { ComputationBaseOf, ComputationLike, ComputationModule, ComputationOf, ComputationOperatorWithSideEffects, ComputationType, ComputationWithSideEffectsLike, ConcurrentDeferredComputationModule, ConcurrentReactiveComputationModule, DeferredComputationLike, DeferredComputationModule, DeferredComputationOf, DeferredComputationWithSideEffectsLike, DeferredComputationWithSideEffectsOf, HigherOrderComputationOperator, HigherOrderInnerComputationLike, HigherOrderInnerComputationOf, MulticastComputationLike, MulticastComputationOf, PickComputationModule, PureComputationLike, PureDeferredComputationLike, PureDeferredComputationOf, PureIterableLike, PureSynchronousComputationLike, PureSynchronousComputationOf, StatefulAsynchronousComputationOperator, StatefulSynchronousComputationOperator, StatelessComputationOperator, SynchronousComputationLike, SynchronousComputationOf, SynchronousComputationWithSideEffectsLike, SynchronousComputationWithSideEffectsOf } from "../computations.js";
import { Function1, TypePredicate } from "../functions.js";
import { EventListenerLike } from "../utils.js";
export interface ConcatManyOperator<TComputationType extends ComputationType> {
    <T>(computations: readonly PureSynchronousComputationOf<TComputationType, T>[]): PureSynchronousComputationOf<TComputationType, T>;
    <T>(computations: readonly SynchronousComputationOf<TComputationType, T>[]): SynchronousComputationWithSideEffectsOf<TComputationType, T>;
    <T>(computations: readonly PureDeferredComputationOf<TComputationType, T>[]): PureDeferredComputationOf<TComputationType, T>;
    <T>(computations: readonly DeferredComputationOf<TComputationType, T>[]): DeferredComputationWithSideEffectsOf<TComputationType, T>;
}
export interface FlatMapOperator<TComputationType extends ComputationType, TFlattenKey extends string | number | symbol> {
    <TA, TB>(key: TFlattenKey, selector: Function1<TA, PureSynchronousComputationOf<TComputationType, TB>>): HigherOrderComputationOperator<TComputationType, PureSynchronousComputationLike, TA, TB>;
    <TA, TB, TInnerLike extends HigherOrderInnerComputationLike>(key: TFlattenKey, selector: Function1<TA, HigherOrderInnerComputationOf<TComputationType, TInnerLike, TB>>, options?: {
        readonly innerType: TInnerLike;
    }): HigherOrderComputationOperator<TComputationType, TInnerLike, TA, TB>;
}
export interface FlatMapIterableOperator<TComputationType extends ComputationType, TFlattenKey extends string | number | symbol> {
    <TA, TB>(key: TFlattenKey, selector: Function1<TA, PureIterableLike<TB>>): HigherOrderComputationOperator<TComputationType, PureSynchronousComputationLike, TA, TB>;
    <TA, TB>(key: TFlattenKey, selector: Function1<TA, PureIterableLike<TB>>, options: {
        readonly innerType: PureSynchronousComputationLike;
    }): HigherOrderComputationOperator<TComputationType, PureSynchronousComputationLike, TA, TB>;
}
export interface ConcatMapOperator<TComputationType extends ComputationType> {
    <TA, TB>(selector: Function1<TA, PureSynchronousComputationOf<TComputationType, TB>>): HigherOrderComputationOperator<TComputationType, PureSynchronousComputationLike, TA, TB>;
    <TA, TB, TInnerLike extends HigherOrderInnerComputationLike>(selector: Function1<TA, HigherOrderInnerComputationOf<TComputationType, TInnerLike, TB>>, options?: {
        readonly innerType: TInnerLike;
    }): HigherOrderComputationOperator<TComputationType, TInnerLike, TA, TB>;
}
export interface ConcatMapIterableOperator<TComputationType extends ComputationType> {
    <TA, TB>(selector: Function1<TA, PureIterableLike<TB>>): HigherOrderComputationOperator<TComputationType, PureSynchronousComputationLike, TA, TB>;
    <TA, TB>(selector: Function1<TA, PureIterableLike<TB>>, options: {
        readonly innerType: PureSynchronousComputationLike;
    }): HigherOrderComputationOperator<TComputationType, PureSynchronousComputationLike, TA, TB>;
}
export interface ConcatWithOperator<TComputationType extends ComputationType> {
    <T>(snd: PureSynchronousComputationOf<TComputationType, T>, ...tail: readonly PureSynchronousComputationOf<TComputationType, T>[]): StatelessComputationOperator<TComputationType, T, T>;
    <T>(snd: SynchronousComputationOf<TComputationType, T>, ...tail: readonly SynchronousComputationOf<TComputationType, T>[]): ComputationOperatorWithSideEffects<TComputationType, T, T>;
    <T>(snd: PureDeferredComputationOf<TComputationType, T>, ...tail: readonly PureDeferredComputationOf<TComputationType, T>[]): StatefulAsynchronousComputationOperator<TComputationType, T, T>;
    <T>(snd: DeferredComputationOf<TComputationType, T>, ...tail: readonly DeferredComputationOf<TComputationType, T>[]): Function1<DeferredComputationOf<TComputationType, T>, DeferredComputationWithSideEffectsOf<TComputationType, T>>;
}
export interface MergeManyOperator<TComputationType extends ComputationType> {
    <T>(computations: readonly PureSynchronousComputationOf<TComputationType, T>[]): PureSynchronousComputationOf<TComputationType, T>;
    <T>(computations: readonly SynchronousComputationOf<TComputationType, T>[]): SynchronousComputationWithSideEffectsOf<TComputationType, T>;
    <T>(computations: readonly PureDeferredComputationOf<TComputationType, T>[]): PureDeferredComputationOf<TComputationType, T>;
    <T>(computations: readonly DeferredComputationOf<TComputationType, T>[]): DeferredComputationWithSideEffectsOf<TComputationType, T>;
    <T>(computations: readonly ComputationBaseOf<TComputationType, T>[]): ComputationBaseOf<TComputationType, T>;
}
export interface MergeWithOperator<TComputationType extends ComputationType> {
    <T>(snd: PureSynchronousComputationOf<TComputationType, T>, ...tail: readonly PureSynchronousComputationOf<TComputationType, T>[]): StatefulSynchronousComputationOperator<TComputationType, T, T>;
    <T>(snd: SynchronousComputationOf<TComputationType, T>, ...tail: readonly SynchronousComputationOf<TComputationType, T>[]): ComputationOperatorWithSideEffects<TComputationType, T, T>;
    <T>(snd: PureDeferredComputationOf<TComputationType, T>, ...tail: readonly PureDeferredComputationOf<TComputationType, T>[]): StatefulAsynchronousComputationOperator<TComputationType, T, T>;
    <T>(snd: DeferredComputationOf<TComputationType, T>, ...tail: readonly DeferredComputationOf<TComputationType, T>[]): Function1<ComputationOf<TComputationType, T>, DeferredComputationWithSideEffectsOf<TComputationType, T>>;
    <T>(snd: MulticastComputationOf<TComputationType, T>, ...tail: readonly MulticastComputationOf<TComputationType, T>[]): Function1<MulticastComputationOf<TComputationType, T>, MulticastComputationOf<TComputationType, T>>;
    <T>(snd: ComputationBaseOf<TComputationType, T>, ...tail: readonly ComputationBaseOf<TComputationType, T>[]): Function1<ComputationBaseOf<TComputationType, T>, ComputationBaseOf<TComputationType, T>>;
}
export interface PickOperator<TComputationType extends ComputationType> {
    <T, TKeyOfT extends keyof T>(key: TKeyOfT): StatelessComputationOperator<TComputationType, T, T[TKeyOfT]>;
    <T, TKeyOfTA extends keyof T, TKeyOfTB extends keyof T[TKeyOfTA]>(keyA: TKeyOfTA, keyB: TKeyOfTB): StatelessComputationOperator<TComputationType, T, T[TKeyOfTA][TKeyOfTB]>;
    <T, TKeyOfTA extends keyof T, TKeyOfTB extends keyof T[TKeyOfTA], TKeyOfTC extends keyof T[TKeyOfTA][TKeyOfTB]>(keyA: TKeyOfTA, keyB: TKeyOfTB, keyC: TKeyOfTC): StatelessComputationOperator<TComputationType, T, T[TKeyOfTA][TKeyOfTB][TKeyOfTC]>;
}
export interface Signature {
    areAllDeferred<TComputationType extends ComputationLike>(computations: readonly TComputationType[]): computations is readonly (TComputationType & DeferredComputationLike)[];
    areAllMulticasted<TComputationType extends ComputationLike>(computations: readonly TComputationType[]): computations is readonly (TComputationType & MulticastComputationLike)[];
    areAllPure<TComputationType extends ComputationLike>(computations: readonly TComputationType[]): computations is readonly (TComputationType & PureComputationLike)[];
    areAllSynchronous<TComputationType extends ComputationLike>(computations: readonly TComputationType[]): computations is readonly (TComputationType & SynchronousComputationLike)[];
    concatMap<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, ComputationModule<TComputationType> & DeferredComputationModule<TComputationType>, "concatAll" | "map">): ConcatMapOperator<TComputationType>;
    concatMapIterable<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, ComputationModule<TComputationType> & DeferredComputationModule<TComputationType>, "concatAll" | "map" | "fromIterable">): ConcatMapIterableOperator<TComputationType>;
    concatMany<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, DeferredComputationModule<TComputationType>, "concat">): ConcatManyOperator<TComputationType>;
    concatWith<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, DeferredComputationModule<TComputationType>, "concat">): ConcatWithOperator<TComputationType>;
    debug<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, DeferredComputationModule<TComputationType>, "forEach">): <T>() => ComputationOperatorWithSideEffects<TComputationType, T, T>;
    endWith<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, DeferredComputationModule<TComputationType> & ComputationModule<TComputationType>, "concat" | "fromReadonlyArray">): <T>(value: T, ...values: readonly T[]) => StatelessComputationOperator<TComputationType, T, T>;
    flatMap<TComputationType extends ComputationType, TFlattenKey extends string | number | symbol>(m: PickComputationModule<TComputationType, ComputationModule<TComputationType>, "map"> & {
        readonly [key in TFlattenKey | string | symbol | number]: key extends TFlattenKey ? DeferredComputationModule<TComputationType>["concatAll"] : unknown;
    }): FlatMapOperator<TComputationType, TFlattenKey>;
    flatMapAsync<TComputationType extends ComputationType, TFlattenKey extends string | number | symbol>(m: PickComputationModule<TComputationType, ComputationModule<TComputationType> & ConcurrentDeferredComputationModule<TComputationType>, "map" | "fromAsyncFactory"> & {
        readonly [key in TFlattenKey | string | symbol | number]: key extends TFlattenKey ? DeferredComputationModule<TComputationType>["concatAll"] : unknown;
    }): <TA, TB>(key: TFlattenKey, selector: (a: TA, options?: {
        signal?: AbortSignal;
    }) => Promise<TB>) => HigherOrderComputationOperator<TComputationType, DeferredComputationWithSideEffectsLike, TA, TB>;
    flatMapIterable<TComputationType extends ComputationType, TFlattenKey extends string | number | symbol>(m: PickComputationModule<TComputationType, ComputationModule<TComputationType>, "map" | "fromIterable"> & {
        readonly [key in TFlattenKey | string | symbol | number]: key extends TFlattenKey ? DeferredComputationModule<TComputationType>["concatAll"] : unknown;
    }): FlatMapIterableOperator<TComputationType, TFlattenKey>;
    hasSideEffects<TComputationType extends ComputationLike>(computation: TComputationType): computation is TComputationType & ComputationWithSideEffectsLike;
    ignoreElements<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, ComputationModule<TComputationType>, "keep">): <T>() => StatelessComputationOperator<TComputationType, any, T>;
    isDeferred<TComputationType extends ComputationLike = ComputationLike>(computation: TComputationType): computation is TComputationType & DeferredComputationLike;
    isDeferredWithSideEffects<TComputationType extends ComputationLike = ComputationLike>(computation: TComputationType): computation is TComputationType & DeferredComputationWithSideEffectsLike;
    isMulticasted<TComputationType extends ComputationLike = ComputationLike>(computation: TComputationType): computation is TComputationType & MulticastComputationLike;
    isPure<TComputationType extends ComputationLike = ComputationLike>(computation: TComputationType): computation is TComputationType & PureComputationLike;
    isPureDeferred<TComputationType extends ComputationLike = ComputationLike>(computation: TComputationType): computation is TComputationType & PureDeferredComputationLike;
    isPureSynchronous<TComputationType extends ComputationLike = ComputationLike>(computation: TComputationType): computation is TComputationType & PureSynchronousComputationLike;
    isSynchronous<TComputationType extends ComputationLike = ComputationLike>(computation: TComputationType): computation is TComputationType & SynchronousComputationLike;
    isSynchronousWithSideEffects<TComputationType extends ComputationLike = ComputationLike>(computation: TComputationType): computation is TComputationType & SynchronousComputationWithSideEffectsLike;
    keepType<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, ComputationModule<TComputationType>, "keep">): <TA, TB>(predicate: TypePredicate<TA, TB>) => StatelessComputationOperator<TComputationType, TA, TB>;
    log<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, DeferredComputationModule<TComputationType>, "forEach">): <T>() => ComputationOperatorWithSideEffects<TComputationType, T, T>;
    mapTo<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, ComputationModule<TComputationType>, "map">): <T>(value: T) => StatelessComputationOperator<TComputationType, unknown, T>;
    mergeMany<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, ConcurrentReactiveComputationModule<TComputationType>, "merge">): MergeManyOperator<TComputationType>;
    mergeWith<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, ConcurrentReactiveComputationModule<TComputationType>, "merge">): MergeWithOperator<TComputationType>;
    notify<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, DeferredComputationModule<TComputationType>, "forEach">): <T>(eventListener: EventListenerLike<T>) => ComputationOperatorWithSideEffects<TComputationType, T, T>;
    pick<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, ComputationModule<TComputationType>, "map">): PickOperator<TComputationType>;
    sequence<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, ComputationModule<TComputationType>, "generate">): (start: number) => ComputationBaseOf<TComputationType, number>;
    startWith<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, DeferredComputationModule<TComputationType> & ComputationModule<TComputationType>, "concat" | "fromReadonlyArray">): <T>(value: T, ...values: readonly T[]) => StatelessComputationOperator<TComputationType, T, T>;
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
export declare const flatMapAsync: Signature["flatMapAsync"];
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
