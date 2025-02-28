import { Computation, ComputationLike, ComputationOf, DeferredComputationLike, DeferredComputationModule, MulticastComputationLike, PickOperator, PureComputationLike, PureComputationOperator, PureStatelessComputationModule, SynchronousComputationLike } from "../computations.js";
import { TypePredicate } from "../functions.js";
interface Signature {
    isDeferred<TComputation extends ComputationLike>(computation: TComputation): computation is TComputation & DeferredComputationLike;
    isMulticasted<TComputation extends ComputationLike>(computation: TComputation): computation is TComputation & MulticastComputationLike;
    isPure<TComputation extends ComputationLike>(computation: TComputation): computation is TComputation & PureComputationLike;
    isSynchronous<TComputation extends ComputationLike>(computation: TComputation): computation is TComputation & SynchronousComputationLike;
    keepType<Type extends ComputationLike, C extends Computation<Type>>(keep: PureStatelessComputationModule<Type, C>["keep"]): <TA, TB>(predicate: TypePredicate<TA, TB>) => PureComputationOperator<Type, C, TA, TB>;
    mapTo<Type extends ComputationLike, C extends Computation<Type>>(map: PureStatelessComputationModule<Type, C>["map"]): <T>(value: T) => PureComputationOperator<Type, C, unknown, T>;
    pick<Type extends ComputationLike, C extends Computation<Type>>(map: PureStatelessComputationModule<Type, C>["map"]): PickOperator<Type, C>;
    sequence<Type extends ComputationLike, C extends Computation<Type>>(generate: DeferredComputationModule<Type, C>["generate"]): (start: number) => ComputationOf<Type, C, number>;
}
export declare const isDeferred: <TComputation extends ComputationLike>(computation: TComputation) => computation is TComputation & DeferredComputationLike;
export declare const isMulticasted: <TComputation extends ComputationLike>(computation: TComputation) => computation is TComputation & MulticastComputationLike;
export declare const isPure: <TComputation extends ComputationLike>(computation: TComputation) => computation is TComputation & PureComputationLike;
export declare const isSynchronous: <TComputation extends ComputationLike>(computation: TComputation) => computation is TComputation & SynchronousComputationLike;
export declare const keepType: Signature["keepType"];
export declare const mapTo: Signature["mapTo"];
export declare const pick: Signature["pick"];
export declare const sequence: Signature["sequence"];
export {};
