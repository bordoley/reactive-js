import { ComputationBaseOf, ComputationLike, ComputationModule, ComputationModuleLike_computationType, ComputationOf, ComputationOperatorWithSideEffects, ComputationType, ComputationTypeOfModule, ConcurrentReactiveComputationModule, DeferredComputationLike, DeferredComputationOf, DeferredComputationWithSideEffectsOf, MulticastComputationOf, NewPureInstanceOf, PureAsynchronousComputationOperator, PureComputationLike, PureComputationOperator, PureDeferredComputationOf, PureSynchronousComputationOf, SynchronousComputationLike, SynchronousComputationOf } from "../computations.js";
import { Function1 } from "../functions.js";
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
    fromReadonlyArray<TComputationModule extends Pick<ComputationModule, "genPure" | typeof ComputationModuleLike_computationType>>(m: TComputationModule): <T>(options?: {
        readonly count?: number;
        readonly start?: number;
    } & Parameters<TComputationModule["genPure"]>[1]) => Function1<ReadonlyArray<T>, NewPureInstanceOf<ComputationTypeOfModule<TComputationModule>, T>>;
    isDeferred<TComputationType extends ComputationLike = ComputationLike>(computation: TComputationType): computation is TComputationType & DeferredComputationLike;
    isPure<TComputationType extends ComputationLike = ComputationLike>(computation: TComputationType): computation is TComputationType & PureComputationLike;
    isSynchronous<TComputationType extends ComputationLike = ComputationLike>(computation: TComputationType): computation is TComputationType & SynchronousComputationLike;
    mergeWith<TComputationModule extends Pick<ConcurrentReactiveComputationModule, "merge" | typeof ComputationModuleLike_computationType>>(m: TComputationModule): MergeWithOperator<ComputationTypeOfModule<TComputationModule>>;
}
export declare const areAllPure: Signature["areAllPure"];
export declare const areAllSynchronous: Signature["areAllSynchronous"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const isPure: Signature["isPure"];
export declare const isSynchronous: Signature["isSynchronous"];
export declare const mergeWith: Signature["mergeWith"];
