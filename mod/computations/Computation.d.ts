import { ComputationBaseOf, ComputationLike, ComputationModule, ComputationModuleLike_computationType, ComputationOf, ComputationOperatorWithSideEffects, ComputationType, ComputationTypeOfModule, ConcurrentReactiveComputationModule, DeferredComputationLike, DeferredComputationOf, DeferredComputationWithSideEffectsOf, MulticastComputationOf, NewPureInstanceOf, PickComputationModule, PureAsynchronousComputationOperator, PureComputationLike, PureComputationOperator, PureDeferredComputationOf, PureSynchronousComputationOf, SequentialComputationModule, SynchronousComputationLike, SynchronousComputationOf } from "../computations.js";
import { Factory, Function1 } from "../functions.js";
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
    concatWith<TComputationModule extends PickComputationModule<SequentialComputationModule, "concat">>(m: TComputationModule): ConcatWithOperator<ComputationTypeOfModule<TComputationModule>>;
    empty<TComputationModule extends PickComputationModule<ComputationModule, "genPure">>(m: TComputationModule): <T>() => NewPureInstanceOf<ComputationTypeOfModule<TComputationModule>, T>;
    fromReadonlyArray<TComputationModule extends PickComputationModule<ComputationModule, "genPure">>(m: TComputationModule): <T>(options?: {
        readonly count?: number;
        readonly start?: number;
    } & Parameters<TComputationModule["genPure"]>[1]) => Function1<ReadonlyArray<T>, NewPureInstanceOf<ComputationTypeOfModule<TComputationModule>, T>>;
    isDeferred<TComputationType extends ComputationLike = ComputationLike>(computation: TComputationType): computation is TComputationType & DeferredComputationLike;
    isPure<TComputationType extends ComputationLike = ComputationLike>(computation: TComputationType): computation is TComputationType & PureComputationLike;
    isSynchronous<TComputationType extends ComputationLike = ComputationLike>(computation: TComputationType): computation is TComputationType & SynchronousComputationLike;
    makeModule<TComputationType>(): <TModule extends {
        [key: string]: any;
    } = {
        [key: string]: any;
    }>(o: TModule) => TModule & {
        [ComputationModuleLike_computationType]?: TComputationType;
    };
    mergeWith<TComputationModule extends PickComputationModule<ConcurrentReactiveComputationModule, "merge">>(m: TComputationModule): MergeWithOperator<ComputationTypeOfModule<TComputationModule>>;
    raise<TComputationModule extends PickComputationModule<ComputationModule, "genPure">>(m: TComputationModule): <T>(options?: {
        readonly raise?: Factory<unknown>;
    }) => NewPureInstanceOf<ComputationTypeOfModule<TComputationModule>, T>;
    startWith<TComputationModule extends PickComputationModule<SequentialComputationModule & ComputationModule, "concat" | "genPure">>(m: TComputationModule): <T>(value: T, ...values: readonly T[]) => PureComputationOperator<ComputationTypeOfModule<TComputationModule>, T, T>;
}
export declare const areAllPure: Signature["areAllPure"];
export declare const areAllSynchronous: Signature["areAllSynchronous"];
export declare const concatWith: Signature["concatWith"];
export declare const empty: Signature["empty"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const isPure: Signature["isPure"];
export declare const isSynchronous: Signature["isSynchronous"];
export declare const makeModule: Signature["makeModule"];
export declare const mergeWith: Signature["mergeWith"];
export declare const raise: Signature["raise"];
export declare const startWith: Signature["startWith"];
