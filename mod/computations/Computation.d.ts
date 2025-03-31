import { ComputationLike, ComputationLike_isDeferred, ComputationLike_isSynchronous, ComputationModule, ComputationModuleLike_computationType, ComputationOf, ComputationOperatorWithSideEffects, ComputationTypeLike, ComputationTypeOfModule, ConcurrentReactiveComputationModule, NewPureInstanceOf, PickComputationModule, PureComputationLike, PureComputationOf, PureComputationOperator, SequentialComputationModule } from "../computations.js";
import { Factory, Function1, Optional } from "../functions.js";
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
    fromReadonlyArray<TComputationType extends ComputationTypeLike, TComputationModule extends PickComputationModule<ComputationModule<TComputationType>, "genPure">>(m: TComputationModule): <T>(options?: {
        readonly count?: number;
        readonly start?: number;
    } & Parameters<TComputationModule["genPure"]>[1]) => Function1<ReadonlyArray<T>, NewPureInstanceOf<ComputationTypeOfModule<TComputationModule>, T>>;
    isDeferred<TComputationType extends Partial<ComputationLike> = Partial<ComputationLike>>(computation: TComputationType): computation is TComputationType & {
        [ComputationLike_isDeferred]: Optional<true>;
    };
    isPure<TComputationType extends Partial<ComputationLike> = Partial<ComputationLike>>(computation: TComputationType): computation is TComputationType & PureComputationLike;
    isSynchronous<TComputationType extends Partial<ComputationLike> = Partial<ComputationLike>>(computation: TComputationType): computation is TComputationType & {
        [ComputationLike_isSynchronous]: Optional<true>;
    };
    makeModule<TComputationType>(): <TModule extends {
        [key: string]: any;
    } = {
        [key: string]: any;
    }>(o: TModule) => TModule & {
        [ComputationModuleLike_computationType]?: TComputationType;
    };
    mergeWith<TComputationType extends ComputationTypeLike, TComputationModule extends PickComputationModule<ConcurrentReactiveComputationModule<TComputationType>, "merge">>(m: TComputationModule): MergeWithOperator<ComputationTypeOfModule<TComputationModule>>;
    raise<TComputationType extends ComputationTypeLike, TComputationModule extends PickComputationModule<ComputationModule<TComputationType>, "genPure">>(m: TComputationModule): <T>(options?: {
        readonly raise?: Factory<unknown>;
    }) => NewPureInstanceOf<ComputationTypeOfModule<TComputationModule>, T>;
    startWith<TComputationType extends ComputationTypeLike, TComputationModule extends PickComputationModule<SequentialComputationModule<TComputationType> & ComputationModule<TComputationType>, "concat" | "genPure">>(m: TComputationModule): <T>(value: T, ...values: readonly T[]) => PureComputationOperator<ComputationTypeOfModule<TComputationModule>, T, T>;
}
export declare const areAllPure: Signature["areAllPure"];
export declare const areAllSynchronous: Signature["areAllSynchronous"];
export declare const concatWith: Signature["concatWith"];
export declare const empty: Signature["empty"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const isDeferred: Signature["isDeferred"];
export declare const isPure: Signature["isPure"];
export declare const isSynchronous: Signature["isSynchronous"];
export declare const makeModule: Signature["makeModule"];
export declare const mergeWith: Signature["mergeWith"];
export declare const raise: Signature["raise"];
export declare const startWith: Signature["startWith"];
