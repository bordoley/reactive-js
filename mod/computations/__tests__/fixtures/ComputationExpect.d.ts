import { ComputationLike } from "../../../computations.js";
export declare const isPureSynchronous: (x: ComputationLike) => boolean;
export declare const isSynchronousWithSideEffects: (x: ComputationLike) => boolean;
export declare const isPureDeferred: (x: ComputationLike) => ComputationLike;
export declare const isDeferredWithSideEffects: (x: ComputationLike) => ComputationLike;
export declare const isMulticasted: (x: ComputationLike) => ComputationLike;
