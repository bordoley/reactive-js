import { ComputationLike, ComputationLike_isDeferred, ComputationLike_isSynchronous, ComputationModule, ComputationModuleLike, ComputationModuleLike_computationType, ComputationOf, ComputationOperatorWithSideEffects, ComputationTypeLike, ComputationTypeOfModule, NewPureInstanceOf, PickComputationModule, PureComputationLike, PureComputationOf, PureComputationOperator, ReactiveComputationModule, SequentialComputationModule } from "../computations.js";
import { Factory, Optional } from "../functions.js";
export interface ConcatWithOperator<TComputationType extends ComputationTypeLike> {
    <T>(snd: PureComputationOf<TComputationType, T>, ...tail: readonly PureComputationOf<TComputationType, T>[]): PureComputationOperator<TComputationType, T, T>;
    <T>(snd: ComputationOf<TComputationType, T>, ...tail: readonly ComputationOf<TComputationType, T>[]): ComputationOperatorWithSideEffects<TComputationType, T, T>;
}
export interface MergeWithOperator<TComputationType extends ComputationTypeLike> {
    <T>(snd: PureComputationOf<TComputationType, T>, ...tail: readonly PureComputationOf<TComputationType, T>[]): PureComputationOperator<TComputationType, T, T>;
    <T>(snd: ComputationOf<TComputationType, T>, ...tail: readonly ComputationOf<TComputationType, T>[]): ComputationOperatorWithSideEffects<TComputationType, T, T>;
}
export interface Signature {
    areAllPure<TComputationType extends Partial<ComputationLike>>(computations: readonly TComputationType[]): computations is readonly (TComputationType & PureComputationLike)[];
    areAllSynchronous<TComputationType extends Partial<ComputationLike>>(computations: readonly TComputationType[]): computations is readonly (TComputationType & {
        [ComputationLike_isSynchronous]: Optional<true>;
    })[];
    concatWith<TComputationType extends ComputationTypeLike, TComputationModule extends PickComputationModule<SequentialComputationModule<TComputationType>, "concat">>(m: TComputationModule): ConcatWithOperator<ComputationTypeOfModule<TComputationModule>>;
    empty<TComputationType extends ComputationTypeLike, TComputationModule extends PickComputationModule<ComputationModule<TComputationType>, "genPure">>(m: TComputationModule): <T>() => NewPureInstanceOf<ComputationTypeOfModule<TComputationModule>, T>;
    endWith<T, TComputationType extends ComputationTypeLike, TComputationModule extends PickComputationModule<SequentialComputationModule<TComputationType> & ComputationModule<TComputationType>, "concat" | "genPure">>(m: TComputationModule, value: T, ...values: readonly T[]): PureComputationOperator<ComputationTypeOfModule<TComputationModule>, T, T>;
    fromReadonlyArray<TComputationType extends ComputationTypeLike, TComputationModule extends PickComputationModule<ComputationModule<TComputationType>, "genPure">>(m: TComputationModule, options?: {
        readonly count?: number;
        readonly start?: number;
    } & Parameters<TComputationModule["genPure"]>[1]): <T>(arr: ReadonlyArray<T>) => NewPureInstanceOf<ComputationTypeOfModule<TComputationModule>, T>;
    isDeferred<TComputationType extends Partial<ComputationLike> = Partial<ComputationLike>>(computation: TComputationType): computation is TComputationType & {
        [ComputationLike_isDeferred]: Optional<true>;
    };
    isPure<TComputationType extends Partial<ComputationLike> = Partial<ComputationLike>>(computation: TComputationType): computation is TComputationType & PureComputationLike;
    isSynchronous<TComputationType extends Partial<ComputationLike> = Partial<ComputationLike>>(computation: TComputationType): computation is TComputationType & {
        [ComputationLike_isSynchronous]: Optional<true>;
    };
    makeModule<TComputationModule extends ComputationModuleLike, TKey extends keyof NonNullable<TComputationModule> = keyof NonNullable<TComputationModule>>(o: Pick<TComputationModule, TKey>): typeof o & {
        [ComputationModuleLike_computationType]?: ComputationTypeOfModule<TComputationModule>;
    };
    mergeWith<TComputationType extends ComputationTypeLike, TComputationModule extends PickComputationModule<ReactiveComputationModule<TComputationType>, "merge">>(m: TComputationModule): MergeWithOperator<ComputationTypeOfModule<TComputationModule>>;
    raise<TComputationType extends ComputationTypeLike, TComputationModule extends PickComputationModule<ComputationModule<TComputationType>, "genPure">>(m: TComputationModule): <T>(options?: {
        readonly raise?: Factory<unknown>;
    }) => NewPureInstanceOf<ComputationTypeOfModule<TComputationModule>, T>;
    startWith<T, TComputationType extends ComputationTypeLike, TComputationModule extends PickComputationModule<SequentialComputationModule<TComputationType> & ComputationModule<TComputationType>, "concat" | "genPure">>(m: TComputationModule, value: T, ...values: readonly T[]): PureComputationOperator<ComputationTypeOfModule<TComputationModule>, T, T>;
}
export declare const areAllPure: Signature["areAllPure"];
export declare const areAllSynchronous: Signature["areAllSynchronous"];
export declare const concatWith: Signature["concatWith"];
export declare const empty: Signature["empty"];
export declare const endWith: Signature["endWith"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const isDeferred: Signature["isDeferred"];
export declare const isPure: Signature["isPure"];
export declare const isSynchronous: Signature["isSynchronous"];
export declare const makeModule: Signature["makeModule"];
export declare const mergeWith: Signature["mergeWith"];
export declare const raise: Signature["raise"];
export declare const startWith: Signature["startWith"];
