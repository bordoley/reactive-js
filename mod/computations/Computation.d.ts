import { ComputationLike, ComputationLike_isDeferred, ComputationLike_isSynchronous, ComputationModule, ComputationModuleLike, ComputationModuleLike_computationType, ComputationOf, ComputationOperatorWithSideEffects, ComputationTypeLike, ComputationTypeOfModule, DeferredComputationModule, NewPureInstanceOf, ObservableLike, PickComputationModule, PureComputationLike, PureComputationOf, PureComputationOperator, ReactiveComputationModule, ScheduledReactiveComputationModule } from "../computations.js";
import { Factory, Optional } from "../functions.js";
export interface Signature {
    areAllPure<TComputationType extends Partial<ComputationLike>>(computations: readonly TComputationType[]): computations is readonly (TComputationType & PureComputationLike)[];
    areAllSynchronous<TComputationType extends Partial<ComputationLike>>(computations: readonly TComputationType[]): computations is readonly (TComputationType & {
        [ComputationLike_isSynchronous]: Optional<true>;
    })[];
    concatWith<TComputationType extends ComputationTypeLike, T>(m: PickComputationModule<DeferredComputationModule<TComputationType>, "concat">, snd: PureComputationOf<TComputationType, T>, ...tail: readonly PureComputationOf<TComputationType, T>[]): PureComputationOperator<TComputationType, T, T>;
    concatWith<TComputationType extends ComputationTypeLike, T>(m: PickComputationModule<DeferredComputationModule<TComputationType>, "concat">, snd: ComputationOf<TComputationType, T>, ...tail: readonly ComputationOf<TComputationType, T>[]): ComputationOperatorWithSideEffects<TComputationType, T, T>;
    empty<TComputationType extends ComputationTypeLike, T>(m: PickComputationModule<ComputationModule<TComputationType>, "genPure">, type?: T): NewPureInstanceOf<TComputationType, T>;
    endWith<TComputationType extends ComputationTypeLike, T>(m: PickComputationModule<DeferredComputationModule<TComputationType> & ComputationModule<TComputationType>, "concat" | "genPure">, value: T, ...values: readonly T[]): PureComputationOperator<TComputationType, T, T>;
    fromReadonlyArray<TComputationType extends ComputationTypeLike<ObservableLike>, TComputationModule extends PickComputationModule<ScheduledReactiveComputationModule<TComputationType>, "genPure">>(m: TComputationModule, options?: {
        readonly count?: number;
        readonly start?: number;
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): <T>(arr: ReadonlyArray<T>) => NewPureInstanceOf<ComputationTypeOfModule<TComputationModule>, T>;
    fromReadonlyArray<TComputationType extends ComputationTypeLike, TComputationModule extends PickComputationModule<ComputationModule<TComputationType>, "genPure">>(m: TComputationModule, options?: {
        readonly count?: number;
        readonly start?: number;
    }): <T>(arr: ReadonlyArray<T>) => NewPureInstanceOf<ComputationTypeOfModule<TComputationModule>, T>;
    ignoreElements<TComputationType extends ComputationTypeLike, T>(m: PickComputationModule<ComputationModule<TComputationType>, "keep">, type?: T): PureComputationOperator<TComputationType, any, T>;
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
    mergeWith<TComputationType extends ComputationTypeLike, T>(m: PickComputationModule<ReactiveComputationModule<TComputationType>, "merge">, snd: PureComputationOf<TComputationType, T>, ...tail: readonly PureComputationOf<TComputationType, T>[]): PureComputationOperator<TComputationType, T, T>;
    mergeWith<TComputationType extends ComputationTypeLike, T>(m: PickComputationModule<ReactiveComputationModule<TComputationType>, "merge">, snd: ComputationOf<TComputationType, T>, ...tail: readonly ComputationOf<TComputationType, T>[]): ComputationOperatorWithSideEffects<TComputationType, T, T>;
    ofValues<TComputationType extends ComputationTypeLike, T>(m: PickComputationModule<ComputationModule<TComputationType>, "genPure">, value: T, ...values: T[]): NewPureInstanceOf<TComputationType, T>;
    raise<TComputationType extends ComputationTypeLike, T>(m: PickComputationModule<ComputationModule<TComputationType>, "genPure">, options?: {
        readonly raise?: Factory<unknown>;
    }, type?: T): NewPureInstanceOf<TComputationType, T>;
    startWith<TComputationType extends ComputationTypeLike, T>(m: PickComputationModule<DeferredComputationModule<TComputationType> & ComputationModule<TComputationType>, "concat" | "genPure">, value: T, ...values: readonly T[]): PureComputationOperator<TComputationType, T, T>;
}
export declare const areAllPure: Signature["areAllPure"];
export declare const areAllSynchronous: Signature["areAllSynchronous"];
export declare const concatWith: Signature["concatWith"];
export declare const empty: Signature["empty"];
export declare const endWith: Signature["endWith"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const ignoreElements: Signature["ignoreElements"];
export declare const isDeferred: Signature["isDeferred"];
export declare const isPure: Signature["isPure"];
export declare const isSynchronous: Signature["isSynchronous"];
export declare const makeModule: Signature["makeModule"];
export declare const mergeWith: Signature["mergeWith"];
export declare const ofValues: Signature["ofValues"];
export declare const raise: Signature["raise"];
export declare const startWith: Signature["startWith"];
