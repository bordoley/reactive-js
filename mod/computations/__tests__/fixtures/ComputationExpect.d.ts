import { ComputationLike } from "../../../computations.js";
export declare const isPureSynchronous: <TComputation extends ComputationLike>(x: TComputation) => TComputation;
export declare const isNotPureSynchronous: <TComputation extends ComputationLike>(x: TComputation) => TComputation;
export declare const isSynchronousWithSideEffects: <TComputation extends ComputationLike>(x: TComputation) => TComputation;
export declare const isNotSynchronousWithSideEffects: <TComputation extends ComputationLike>(x: TComputation) => TComputation;
export declare const isNotSynchronous: <TComputation extends ComputationLike>(x: TComputation) => TComputation;
export declare const isPureDeferred: <TComputation extends ComputationLike>(x: TComputation) => TComputation;
export declare const isDeferredWithSideEffects: <TComputation extends ComputationLike>(x: TComputation) => TComputation;
export declare const isMulticasted: <TComputation extends ComputationLike>(x: TComputation) => TComputation;
