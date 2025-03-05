import { ComputationLike } from "../../../computations.js";
export declare const isPureSynchronous: (x: ComputationLike) => void;
export declare const isSynchronousWithSideEffects: (x: ComputationLike) => void;
export declare const isPureDeferred: (x: ComputationLike) => void;
export declare const isDeferredWithSideEffects: (x: ComputationLike) => void;
export declare const isMulticasted: (x: ComputationLike) => void;
