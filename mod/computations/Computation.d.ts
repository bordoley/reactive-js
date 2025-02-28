import { Computation, ComputationLike, ComputationOf, DeferredComputationLike, DeferredComputationModule, MulticastComputationLike, PickOperator, PureComputationLike, PureComputationOperator, PureStatelessComputationModule, SynchronousComputationLike } from "../computations.js";
import { TypePredicate } from "../functions.js";
interface Signature {
    areAllDeferred<TComputation extends ComputationLike>(computations: readonly TComputation[]): computations is readonly (TComputation & DeferredComputationLike)[];
    areAllMulticasted<TComputation extends ComputationLike>(computations: readonly TComputation[]): computations is readonly (TComputation & MulticastComputationLike)[];
    areAllPure<TComputation extends ComputationLike>(computations: readonly TComputation[]): computations is readonly (TComputation & PureComputationLike)[];
    areAllSynchronous<TComputation extends ComputationLike>(computations: readonly TComputation[]): computations is readonly (TComputation & SynchronousComputationLike)[];
    isDeferred<TComputation extends ComputationLike>(computation: TComputation): computation is TComputation & DeferredComputationLike;
    isMulticasted<TComputation extends ComputationLike>(computation: TComputation): computation is TComputation & MulticastComputationLike;
    isPure<TComputation extends ComputationLike>(computation: TComputation): computation is TComputation & PureComputationLike;
    isSynchronous<TComputation extends ComputationLike>(computation: TComputation): computation is TComputation & SynchronousComputationLike;
    keepType<Type extends ComputationLike, C extends Computation<Type>>(keep: PureStatelessComputationModule<Type, C>["keep"]): <TA, TB>(predicate: TypePredicate<TA, TB>) => PureComputationOperator<Type, C, TA, TB>;
    mapTo<Type extends ComputationLike, C extends Computation<Type>>(map: PureStatelessComputationModule<Type, C>["map"]): <T>(value: T) => PureComputationOperator<Type, C, unknown, T>;
    pick<Type extends ComputationLike, C extends Computation<Type>>(map: PureStatelessComputationModule<Type, C>["map"]): PickOperator<Type, C>;
    sequence<Type extends ComputationLike, C extends Computation<Type>>(generate: DeferredComputationModule<Type, C>["generate"]): (start: number) => ComputationOf<Type, C, number>;
}
export declare const areAllDeferred: Signature["areAllDeferred"];
export declare const areAllMulticasted: Signature["areAllMulticasted"];
export declare const areAllPure: Signature["areAllPure"];
export declare const areAllSynchronous: Signature["areAllSynchronous"];
export declare const isDeferred: Signature["isDeferred"];
export declare const isMulticasted: Signature["isMulticasted"];
export declare const isPure: Signature["isPure"];
export declare const isSynchronous: Signature["isSynchronous"];
export declare const keepType: Signature["keepType"];
export declare const mapTo: Signature["mapTo"];
export declare const pick: Signature["pick"];
export declare const sequence: Signature["sequence"];
export {};
