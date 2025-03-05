import { DeferredComputationWithSideEffectsLike, MulticastComputationLike, PureDeferredComputationLike, PureSynchronousComputationLike, SynchronousComputationWithSideEffectsLike } from "../../../../computations.js";
export declare const isPureSynchronous: (obs: PureSynchronousComputationLike) => import("../../../../__internal__/testing.js").Test;
export declare const isSynchronousWithSideEffects: (obs: SynchronousComputationWithSideEffectsLike) => import("../../../../__internal__/testing.js").Test;
export declare const isDeferredWithSideEffects: (obs: DeferredComputationWithSideEffectsLike) => import("../../../../__internal__/testing.js").Test;
export declare const isPureDeferred: (obs: PureDeferredComputationLike) => import("../../../../__internal__/testing.js").Test;
export declare const isMulticasted: (obs: MulticastComputationLike) => import("../../../../__internal__/testing.js").Test;
