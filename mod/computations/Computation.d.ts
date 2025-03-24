import { ComputationBaseOf, ComputationLike, ComputationModule, ComputationOf, ComputationOperatorWithSideEffects, ComputationType, ComputationWithSideEffectsLike, ConcurrentDeferredComputationModule, ConcurrentReactiveComputationModule, DeferredComputationLike, DeferredComputationOf, DeferredComputationWithSideEffectsLike, DeferredComputationWithSideEffectsOf, HigherOrderComputationOperator, HigherOrderInnerComputationLike, HigherOrderInnerComputationOf, IterableLike, IterableWithSideEffectsLike, MulticastComputationLike, MulticastComputationOf, NewPureInstanceOf, PickComputationModule, PureAsynchronousComputationOperator, PureComputationLike, PureComputationOperator, PureDeferredComputationLike, PureDeferredComputationOf, PureIterableLike, PureSynchronousComputationLike, PureSynchronousComputationOf, SequentialComputationModule, SynchronousComputationLike, SynchronousComputationOf, SynchronousComputationWithSideEffectsLike, SynchronousComputationWithSideEffectsOf } from "../computations.js";
import { Factory, Function1, TypePredicate, Updater } from "../functions.js";
import { DisposableLike, SinkLike } from "../utils.js";
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
    <T>(snd: PureSynchronousComputationOf<TComputationType, T>, ...tail: readonly PureSynchronousComputationOf<TComputationType, T>[]): PureComputationOperator<TComputationType, T, T>;
    <T>(snd: SynchronousComputationOf<TComputationType, T>, ...tail: readonly SynchronousComputationOf<TComputationType, T>[]): ComputationOperatorWithSideEffects<TComputationType, T, T>;
    <T>(snd: PureDeferredComputationOf<TComputationType, T>, ...tail: readonly PureDeferredComputationOf<TComputationType, T>[]): PureAsynchronousComputationOperator<TComputationType, T, T>;
    <T>(snd: DeferredComputationOf<TComputationType, T>, ...tail: readonly DeferredComputationOf<TComputationType, T>[]): Function1<DeferredComputationOf<TComputationType, T>, DeferredComputationWithSideEffectsOf<TComputationType, T>>;
}
export type FromIterableOperator<TComputationType extends ComputationType, T> = <TIterable extends IterableLike<T>>(iterable: TIterable) => TIterable extends PureIterableLike ? (PureSynchronousComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? PureSynchronousComputationOf<TComputationType, T> : PureDeferredComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? PureDeferredComputationOf<TComputationType, T> : MulticastComputationOf<TComputationType, T> & DisposableLike) : TIterable extends IterableWithSideEffectsLike ? (SynchronousComputationWithSideEffectsOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? SynchronousComputationWithSideEffectsOf<TComputationType, T> : DeferredComputationWithSideEffectsOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? DeferredComputationWithSideEffectsOf<TComputationType, T> : MulticastComputationOf<TComputationType, T> & DisposableLike) : ComputationBaseOf<TComputationType, T>;
export interface MergeManyOperator<TComputationType extends ComputationType> {
    <T>(computations: readonly PureSynchronousComputationOf<TComputationType, T>[]): PureSynchronousComputationOf<TComputationType, T>;
    <T>(computations: readonly SynchronousComputationOf<TComputationType, T>[]): SynchronousComputationWithSideEffectsOf<TComputationType, T>;
    <T>(computations: readonly PureDeferredComputationOf<TComputationType, T>[]): PureDeferredComputationOf<TComputationType, T>;
    <T>(computations: readonly DeferredComputationOf<TComputationType, T>[]): DeferredComputationWithSideEffectsOf<TComputationType, T>;
    <T>(computations: readonly ComputationBaseOf<TComputationType, T>[]): ComputationBaseOf<TComputationType, T>;
}
export interface MergeWithOperator<TComputationType extends ComputationType> {
    <T>(snd: PureSynchronousComputationOf<TComputationType, T>, ...tail: readonly PureSynchronousComputationOf<TComputationType, T>[]): PureComputationOperator<TComputationType, T, T>;
    <T>(snd: SynchronousComputationOf<TComputationType, T>, ...tail: readonly SynchronousComputationOf<TComputationType, T>[]): ComputationOperatorWithSideEffects<TComputationType, T, T>;
    <T>(snd: PureDeferredComputationOf<TComputationType, T>, ...tail: readonly PureDeferredComputationOf<TComputationType, T>[]): PureAsynchronousComputationOperator<TComputationType, T, T>;
    <T>(snd: DeferredComputationOf<TComputationType, T>, ...tail: readonly DeferredComputationOf<TComputationType, T>[]): Function1<ComputationOf<TComputationType, T>, DeferredComputationWithSideEffectsOf<TComputationType, T>>;
    <T>(snd: MulticastComputationOf<TComputationType, T>, ...tail: readonly MulticastComputationOf<TComputationType, T>[]): Function1<MulticastComputationOf<TComputationType, T>, MulticastComputationOf<TComputationType, T>>;
    <T>(snd: ComputationBaseOf<TComputationType, T>, ...tail: readonly ComputationBaseOf<TComputationType, T>[]): Function1<ComputationBaseOf<TComputationType, T>, ComputationBaseOf<TComputationType, T>>;
}
export interface PickOperator<TComputationType extends ComputationType> {
    <T, TKeyOfT extends keyof T>(key: TKeyOfT): PureComputationOperator<TComputationType, T, T[TKeyOfT]>;
    <T, TKeyOfTA extends keyof T, TKeyOfTB extends keyof T[TKeyOfTA]>(keyA: TKeyOfTA, keyB: TKeyOfTB): PureComputationOperator<TComputationType, T, T[TKeyOfTA][TKeyOfTB]>;
    <T, TKeyOfTA extends keyof T, TKeyOfTB extends keyof T[TKeyOfTA], TKeyOfTC extends keyof T[TKeyOfTA][TKeyOfTB]>(keyA: TKeyOfTA, keyB: TKeyOfTB, keyC: TKeyOfTC): PureComputationOperator<TComputationType, T, T[TKeyOfTA][TKeyOfTB][TKeyOfTC]>;
}
export type GeneratorOf<TComputationType extends ComputationType, T> = PureSynchronousComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? PureSynchronousComputationOf<TComputationType, T> : PureDeferredComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? PureDeferredComputationOf<TComputationType, T> : MulticastComputationOf<TComputationType, T> extends ComputationBaseOf<TComputationType, T> ? MulticastComputationOf<TComputationType, T> & DisposableLike : never;
export interface Signature {
    areAllDeferred<TComputationType extends ComputationLike>(computations: readonly TComputationType[]): computations is readonly (TComputationType & DeferredComputationLike)[];
    areAllMulticasted<TComputationType extends ComputationLike>(computations: readonly TComputationType[]): computations is readonly (TComputationType & MulticastComputationLike)[];
    areAllPure<TComputationType extends ComputationLike>(computations: readonly TComputationType[]): computations is readonly (TComputationType & PureComputationLike)[];
    areAllSynchronous<TComputationType extends ComputationLike>(computations: readonly TComputationType[]): computations is readonly (TComputationType & SynchronousComputationLike)[];
    concatMap<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, ComputationModule<TComputationType> & SequentialComputationModule<TComputationType>, "concatAll" | "map">): ConcatMapOperator<TComputationType>;
    concatMapIterable<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, ComputationModule<TComputationType> & SequentialComputationModule<TComputationType>, "concatAll" | "map" | "gen" | "genPure">): ConcatMapIterableOperator<TComputationType>;
    concatMany<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, SequentialComputationModule<TComputationType>, "concat">): ConcatManyOperator<TComputationType>;
    concatWith<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, SequentialComputationModule<TComputationType>, "concat">): ConcatWithOperator<TComputationType>;
    debug<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, SequentialComputationModule<TComputationType>, "forEach">): <T>() => ComputationOperatorWithSideEffects<TComputationType, T, T>;
    endWith<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, SequentialComputationModule<TComputationType> & ComputationModule<TComputationType>, "concat" | "fromReadonlyArray">): <T>(value: T, ...values: readonly T[]) => PureComputationOperator<TComputationType, T, T>;
    flatMap<TComputationType extends ComputationType, TFlattenKey extends string | number | symbol>(m: PickComputationModule<TComputationType, ComputationModule<TComputationType>, "map"> & {
        readonly [key in TFlattenKey | string | symbol | number]: key extends TFlattenKey ? SequentialComputationModule<TComputationType>["concatAll"] : unknown;
    }): FlatMapOperator<TComputationType, TFlattenKey>;
    flatMapAsync<TComputationType extends ComputationType, TFlattenKey extends string | number | symbol>(m: PickComputationModule<TComputationType, ComputationModule<TComputationType> & ConcurrentDeferredComputationModule<TComputationType>, "map" | "fromAsyncFactory"> & {
        readonly [key in TFlattenKey | string | symbol | number]: key extends TFlattenKey ? SequentialComputationModule<TComputationType>["concatAll"] : unknown;
    }): <TA, TB>(key: TFlattenKey, selector: (a: TA, options?: {
        signal?: AbortSignal;
    }) => Promise<TB>) => HigherOrderComputationOperator<TComputationType, DeferredComputationWithSideEffectsLike, TA, TB>;
    flatMapIterable<TComputationType extends ComputationType, TFlattenKey extends string | number | symbol>(m: PickComputationModule<TComputationType, ComputationModule<TComputationType>, "map" | "gen" | "genPure"> & {
        readonly [key in TFlattenKey | string | symbol | number]: key extends TFlattenKey ? SequentialComputationModule<TComputationType>["concatAll"] : unknown;
    }): FlatMapIterableOperator<TComputationType, TFlattenKey>;
    fromIterable<TComputationType extends ComputationType, T>(m: PickComputationModule<TComputationType, ComputationModule<TComputationType>, "gen" | "genPure">, options?: Parameters<(typeof m)["gen"]>[1]): FromIterableOperator<TComputationType, T>;
    generate<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, ComputationModule<TComputationType>, "gen">): <T>(generator: Updater<T>, initialValue: Factory<T>, options?: Parameters<(typeof m)["gen"]>[1]) => GeneratorOf<TComputationType, T>;
    hasSideEffects<TComputationType extends ComputationLike>(computation: TComputationType): computation is TComputationType & ComputationWithSideEffectsLike;
    ignoreElements<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, ComputationModule<TComputationType>, "keep">): <T>() => PureComputationOperator<TComputationType, any, T>;
    isDeferred<TComputationType extends ComputationLike = ComputationLike>(computation: TComputationType): computation is TComputationType & DeferredComputationLike;
    isDeferredWithSideEffects<TComputationType extends ComputationLike = ComputationLike>(computation: TComputationType): computation is TComputationType & DeferredComputationWithSideEffectsLike;
    isMulticasted<TComputationType extends ComputationLike = ComputationLike>(computation: TComputationType): computation is TComputationType & MulticastComputationLike;
    isPure<TComputationType extends ComputationLike = ComputationLike>(computation: TComputationType): computation is TComputationType & PureComputationLike;
    isPureDeferred<TComputationType extends ComputationLike = ComputationLike>(computation: TComputationType): computation is TComputationType & PureDeferredComputationLike;
    isPureSynchronous<TComputationType extends ComputationLike = ComputationLike>(computation: TComputationType): computation is TComputationType & PureSynchronousComputationLike;
    isSynchronous<TComputationType extends ComputationLike = ComputationLike>(computation: TComputationType): computation is TComputationType & SynchronousComputationLike;
    isSynchronousWithSideEffects<TComputationType extends ComputationLike = ComputationLike>(computation: TComputationType): computation is TComputationType & SynchronousComputationWithSideEffectsLike;
    keepType<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, ComputationModule<TComputationType>, "keep">): <TA, TB>(predicate: TypePredicate<TA, TB>) => PureComputationOperator<TComputationType, TA, TB>;
    log<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, SequentialComputationModule<TComputationType>, "forEach">): <T>() => ComputationOperatorWithSideEffects<TComputationType, T, T>;
    mapTo<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, ComputationModule<TComputationType>, "map">): <T>(value: T) => PureComputationOperator<TComputationType, unknown, T>;
    mergeMany<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, ConcurrentReactiveComputationModule<TComputationType>, "merge">): MergeManyOperator<TComputationType>;
    mergeWith<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, ConcurrentReactiveComputationModule<TComputationType>, "merge">): MergeWithOperator<TComputationType>;
    notify<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, SequentialComputationModule<TComputationType>, "forEach">): <T>(eventSink: SinkLike<T>) => ComputationOperatorWithSideEffects<TComputationType, T, T>;
    pick<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, ComputationModule<TComputationType>, "map">): PickOperator<TComputationType>;
    raise<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, ComputationModule<TComputationType>, "genPure">): <T>(options?: {
        readonly raise?: Factory<unknown>;
    } & Parameters<typeof m.genPure>[1]) => NewPureInstanceOf<TComputationType, T>;
    startWith<TComputationType extends ComputationType>(m: PickComputationModule<TComputationType, SequentialComputationModule<TComputationType> & ComputationModule<TComputationType>, "concat" | "fromReadonlyArray">): <T>(value: T, ...values: readonly T[]) => PureComputationOperator<TComputationType, T, T>;
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
export declare const fromIterable: Signature["fromIterable"];
export declare const generate: Signature["generate"];
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
export declare const raise: Signature["raise"];
export declare const startWith: Signature["startWith"];
