import { ComputationModule, ComputationType, Computation_T, Computation_baseOfT, Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, ConcurrentComputationModule, ConcurrentDeferredComputationModule, ConcurrentReactiveComputationModule, DeferredReactiveComputationModule, ProducerLike, ProducerWithSideEffectsLike, PureProducerLike, SequentialComputationModule, SequentialReactiveComputationModule } from "../computations.js";
import { ConsumerLike } from "../utils.js";
/**
 * @noInheritDoc
 */
export interface ProducerComputation extends ComputationType {
    readonly [Computation_baseOfT]?: ProducerLike<this[typeof Computation_T]>;
    readonly [Computation_pureSynchronousOfT]?: never;
    readonly [Computation_synchronousWithSideEffectsOfT]?: never;
    readonly [Computation_pureDeferredOfT]?: PureProducerLike<this[typeof Computation_T]>;
    readonly [Computation_deferredWithSideEffectsOfT]?: ProducerWithSideEffectsLike<this[typeof Computation_T]>;
    readonly [Computation_multicastOfT]?: never;
}
export type Computation = ProducerComputation;
export interface ProducerModule extends ComputationModule<ProducerComputation>, ConcurrentDeferredComputationModule<ProducerComputation, {
    genAsync: {
        maxYieldInterval?: number;
    };
    genPureAsync: {
        maxYieldInterval?: number;
    };
}>, ConcurrentReactiveComputationModule<ProducerComputation>, SequentialComputationModule<ProducerComputation>, SequentialReactiveComputationModule<ProducerComputation>, ConcurrentComputationModule<ProducerComputation>, DeferredReactiveComputationModule<ProducerComputation> {
    create<T>(f: (consumer: ConsumerLike<T>) => void): ProducerWithSideEffectsLike<T>;
}
export type Signature = ProducerModule;
export declare const buffer: Signature["buffer"];
export declare const broadcast: Signature["broadcast"];
export declare const create: Signature["create"];
export declare const decodeWithCharset: Signature["decodeWithCharset"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const encodeUtf8: Signature["encodeUtf8"];
export declare const forEach: Signature["forEach"];
export declare const gen: Signature["gen"];
export declare const genPure: Signature["genPure"];
export declare const keep: Signature["keep"];
export declare const lastAsync: Signature["lastAsync"];
export declare const map: Signature["map"];
export declare const pairwise: Signature["pairwise"];
export declare const scan: Signature["scan"];
export declare const skipFirst: Signature["skipFirst"];
export declare const takeFirst: Signature["takeFirst"];
export declare const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"];
