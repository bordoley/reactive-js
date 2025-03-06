import { DeferredComputationWithSideEffectsLike, MulticastComputationLike, PureDeferredComputationLike, PureSynchronousComputationLike, SynchronousComputationWithSideEffectsLike } from "../../../../computations.js";
export declare const isPureSynchronous: (obs: PureSynchronousComputationLike, description?: string) => import("../../../../__internal__/testing.js").Test;
export declare const isSynchronousWithSideEffects: (obs: SynchronousComputationWithSideEffectsLike, description?: string) => import("../../../../__internal__/testing.js").Test;
export declare const isDeferredWithSideEffects: (obs: DeferredComputationWithSideEffectsLike, description?: string) => import("../../../../__internal__/testing.js").Test;
export declare const isPureDeferred: (obs: PureDeferredComputationLike, description?: string) => import("../../../../__internal__/testing.js").Test;
export declare const isMulticasted: (obs: MulticastComputationLike, description?: string) => import("../../../../__internal__/testing.js").Test;
