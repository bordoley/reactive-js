import { ComputationBaseOf, ComputationLike, ComputationModule, ComputationModuleLike_computationType, ComputationOf, ComputationOfModule, ComputationOperatorWithSideEffects, ComputationType, ComputationTypeOfModule, ConcurrentReactiveComputationModule, DeferredComputationLike, DeferredComputationOf, DeferredComputationWithSideEffectsOf, MulticastComputationOf, NewPureInstanceOf, PureAsynchronousComputationOperator, PureComputationLike, PureComputationOperator, PureDeferredComputationOf, PureSynchronousComputationOf, SequentialComputationModule, SynchronousComputationLike, SynchronousComputationOf } from "../computations.js";
import { Factory, Function1, Optional } from "../functions.js";
export interface ConcatWithOperator<TComputationType extends ComputationType> {
    <T>(snd: PureSynchronousComputationOf<TComputationType, T>, ...tail: readonly PureSynchronousComputationOf<TComputationType, T>[]): PureComputationOperator<TComputationType, T, T>;
    <T>(snd: SynchronousComputationOf<TComputationType, T>, ...tail: readonly SynchronousComputationOf<TComputationType, T>[]): ComputationOperatorWithSideEffects<TComputationType, T, T>;
    <T>(snd: PureDeferredComputationOf<TComputationType, T>, ...tail: readonly PureDeferredComputationOf<TComputationType, T>[]): PureAsynchronousComputationOperator<TComputationType, T, T>;
    <T>(snd: DeferredComputationOf<TComputationType, T>, ...tail: readonly DeferredComputationOf<TComputationType, T>[]): Function1<DeferredComputationOf<TComputationType, T>, DeferredComputationWithSideEffectsOf<TComputationType, T>>;
}
export interface MergeWithOperator<TComputationType extends ComputationType> {
    <T>(snd: PureSynchronousComputationOf<TComputationType, T>, ...tail: readonly PureSynchronousComputationOf<TComputationType, T>[]): PureComputationOperator<TComputationType, T, T>;
    <T>(snd: SynchronousComputationOf<TComputationType, T>, ...tail: readonly SynchronousComputationOf<TComputationType, T>[]): ComputationOperatorWithSideEffects<TComputationType, T, T>;
    <T>(snd: PureDeferredComputationOf<TComputationType, T>, ...tail: readonly PureDeferredComputationOf<TComputationType, T>[]): PureAsynchronousComputationOperator<TComputationType, T, T>;
    <T>(snd: DeferredComputationOf<TComputationType, T>, ...tail: readonly DeferredComputationOf<TComputationType, T>[]): Function1<ComputationOf<TComputationType, T>, DeferredComputationWithSideEffectsOf<TComputationType, T>>;
    <T>(snd: MulticastComputationOf<TComputationType, T>, ...tail: readonly MulticastComputationOf<TComputationType, T>[]): Function1<MulticastComputationOf<TComputationType, T>, MulticastComputationOf<TComputationType, T>>;
    <T>(snd: ComputationBaseOf<TComputationType, T>, ...tail: readonly ComputationBaseOf<TComputationType, T>[]): Function1<ComputationBaseOf<TComputationType, T>, ComputationBaseOf<TComputationType, T>>;
}
export interface Signature {
    areAllPure<TComputationType extends ComputationLike>(computations: readonly TComputationType[]): computations is readonly (TComputationType & PureComputationLike)[];
    areAllSynchronous<TComputationType extends ComputationLike>(computations: readonly TComputationType[]): computations is readonly (TComputationType & SynchronousComputationLike)[];
    concatWith<TComputationModule extends Pick<SequentialComputationModule, "concat" | typeof ComputationModuleLike_computationType>>(m: TComputationModule): ConcatWithOperator<ComputationTypeOfModule<TComputationModule>>;
    empty<TComputationModule extends Pick<ComputationModule, "genPure" | typeof ComputationModuleLike_computationType>>(m: TComputationModule): <T>() => NewPureInstanceOf<ComputationTypeOfModule<TComputationModule>, T>;
    fromReadonlyArray<TComputationModule extends Pick<ComputationModule, "genPure" | typeof ComputationModuleLike_computationType>>(m: TComputationModule): <T>(options?: {
        readonly count?: number;
        readonly start?: number;
    } & Parameters<TComputationModule["genPure"]>[1]) => Function1<ReadonlyArray<T>, NewPureInstanceOf<ComputationTypeOfModule<TComputationModule>, T>>;
    isDeferred<TComputationType extends ComputationLike = ComputationLike>(computation: TComputationType): computation is TComputationType & DeferredComputationLike;
    isPure<TComputationType extends ComputationLike = ComputationLike>(computation: TComputationType): computation is TComputationType & PureComputationLike;
    isSynchronous<TComputationType extends ComputationLike = ComputationLike>(computation: TComputationType): computation is TComputationType & SynchronousComputationLike;
    lastAsync<TComputationModule extends Pick<ComputationModule, "toProducer" | typeof ComputationModuleLike_computationType>>(m: TComputationModule): <T>(options?: Parameters<TComputationModule["toProducer"]>[1]) => Function1<ComputationOfModule<TComputationModule, T>, Promise<Optional<T>>>;
    mergeWith<TComputationModule extends Pick<ConcurrentReactiveComputationModule, "merge" | typeof ComputationModuleLike_computationType>>(m: TComputationModule): MergeWithOperator<ComputationTypeOfModule<TComputationModule>>;
    raise<TComputationModule extends Pick<ComputationModule, "genPure" | typeof ComputationModuleLike_computationType>>(m: TComputationModule): <T>(options?: {
        readonly raise?: Factory<unknown>;
    }) => NewPureInstanceOf<ComputationTypeOfModule<TComputationModule>, T>;
    toReadonlyArrayAsync<TComputationModule extends Pick<ComputationModule, "toProducer" | typeof ComputationModuleLike_computationType>>(m: TComputationModule): <T>(options?: Parameters<TComputationModule["toProducer"]>[1]) => Function1<ComputationOfModule<TComputationModule, T>, Promise<ReadonlyArray<T>>>;
}
export declare const areAllPure: Signature["areAllPure"];
export declare const areAllSynchronous: Signature["areAllSynchronous"];
export declare const concatWith: Signature["concatWith"];
export declare const empty: Signature["empty"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const isPure: Signature["isPure"];
export declare const isSynchronous: Signature["isSynchronous"];
export declare const lastAsync: Signature["lastAsync"];
export declare const mergeWith: Signature["mergeWith"];
export declare const raise: Signature["raise"];
export declare const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"];
