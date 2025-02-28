import { Computation, ComputationLike, ComputationModule, ComputationOf, ComputationOperator, DeferredComputationLike, DeferredComputationModule, InteractiveComputationLike, MulticastComputationLike, PureComputationLike, SynchronousComputationLike } from "../computations.js";
import { TypePredicate } from "../functions.js";
export interface PickOperator<Type extends ComputationLike, TComputation extends Computation<Type>> {
    <T, TKeyOfT extends keyof T>(key: TKeyOfT): ComputationOperator<Type, TComputation, T, T[TKeyOfT]>;
    <T, TKeyOfTA extends keyof T, TKeyOfTB extends keyof T[TKeyOfTA]>(keyA: TKeyOfTA, keyB: TKeyOfTB): ComputationOperator<Type, TComputation, T, T[TKeyOfTA][TKeyOfTB]>;
    <T, TKeyOfTA extends keyof T, TKeyOfTB extends keyof T[TKeyOfTA], TKeyOfTC extends keyof T[TKeyOfTA][TKeyOfTB]>(keyA: TKeyOfTA, keyB: TKeyOfTB, keyC: TKeyOfTC): ComputationOperator<Type, TComputation, T, T[TKeyOfTA][TKeyOfTB][TKeyOfTC]>;
}
interface Signature {
    areAllDeferred<TComputation extends ComputationLike>(computations: readonly TComputation[]): computations is readonly (TComputation & DeferredComputationLike)[];
    areAllInteractive<TComputation extends ComputationLike>(computations: readonly TComputation[]): computations is readonly (TComputation & InteractiveComputationLike)[];
    areAllMulticasted<TComputation extends ComputationLike>(computations: readonly TComputation[]): computations is readonly (TComputation & MulticastComputationLike)[];
    areAllPure<TComputation extends ComputationLike>(computations: readonly TComputation[]): computations is readonly (TComputation & PureComputationLike)[];
    areAllSynchronous<TComputation extends ComputationLike>(computations: readonly TComputation[]): computations is readonly (TComputation & SynchronousComputationLike)[];
    isDeferred<TComputation extends ComputationLike>(computation: TComputation): computation is TComputation & DeferredComputationLike;
    isInteractive<TComputation extends ComputationLike>(computation: TComputation): computation is TComputation & InteractiveComputationLike;
    isMulticasted<TComputation extends ComputationLike>(computation: TComputation): computation is TComputation & MulticastComputationLike;
    isPure<TComputation extends ComputationLike>(computation: TComputation): computation is TComputation & PureComputationLike;
    isSynchronous<TComputation extends ComputationLike>(computation: TComputation): computation is TComputation & SynchronousComputationLike;
    keepType<Type extends ComputationLike, TComputation extends Computation<Type>>(keep: ComputationModule<Type, TComputation>["keep"]): <TA, TB>(predicate: TypePredicate<TA, TB>) => ComputationOperator<Type, TComputation, TA, TB>;
    mapTo<Type extends ComputationLike, TComputation extends Computation<Type>>(map: ComputationModule<Type, TComputation>["map"]): <T>(value: T) => ComputationOperator<Type, TComputation, unknown, T>;
    pick<Type extends ComputationLike, TComputation extends Computation<Type>>(map: ComputationModule<Type, TComputation>["map"]): PickOperator<Type, TComputation>;
    sequence<Type extends DeferredComputationLike, TComputation extends Computation<Type>>(generate: DeferredComputationModule<Type, TComputation>["generate"]): (start: number) => ComputationOf<Type, TComputation, number>;
}
export declare const areAllDeferred: Signature["areAllDeferred"];
export declare const areAllInteractive: Signature["areAllInteractive"];
export declare const areAllMulticasted: Signature["areAllMulticasted"];
export declare const areAllPure: Signature["areAllPure"];
export declare const areAllSynchronous: Signature["areAllSynchronous"];
export declare const isDeferred: Signature["isDeferred"];
export declare const isInteractive: Signature["isInteractive"];
export declare const isMulticasted: Signature["isMulticasted"];
export declare const isPure: Signature["isPure"];
export declare const isSynchronous: Signature["isSynchronous"];
export declare const keepType: Signature["keepType"];
export declare const mapTo: Signature["mapTo"];
export declare const pick: Signature["pick"];
export declare const sequence: Signature["sequence"];
export {};
