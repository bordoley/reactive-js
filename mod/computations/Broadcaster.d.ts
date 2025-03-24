import { BroadcasterLike, ComputationType, Computation_T, Computation_baseOfT, Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, ConcurrentReactiveComputationModule } from "../computations.js";
import { Function1, SideEffect1 } from "../functions.js";
import { DisposableLike, EventListenerLike } from "../utils.js";
/**
 * @noInheritDoc
 */
export interface BroadcasterComputation extends ComputationType {
    readonly [Computation_baseOfT]?: BroadcasterLike<this[typeof Computation_T]>;
    readonly [Computation_pureSynchronousOfT]?: never;
    readonly [Computation_synchronousWithSideEffectsOfT]?: never;
    readonly [Computation_pureDeferredOfT]?: never;
    readonly [Computation_deferredWithSideEffectsOfT]?: never;
    readonly [Computation_multicastOfT]?: BroadcasterLike<this[typeof Computation_T]>;
}
export type Computation = BroadcasterComputation;
/**
 * @noInheritDoc
 */
export interface BroadcasterModule extends ConcurrentReactiveComputationModule<BroadcasterComputation> {
    addEventHandler<T>(onNotify: SideEffect1<T>): Function1<BroadcasterLike<T>, DisposableLike>;
    create<T>(setup: SideEffect1<EventListenerLike<T>>, options?: {
        readonly autoDispose?: boolean;
    }): BroadcasterLike<T> & DisposableLike;
}
export type Signature = BroadcasterModule;
export declare const addEventHandler: Signature["addEventHandler"];
export declare const create: Signature["create"];
export declare const merge: Signature["merge"];
