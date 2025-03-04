import { ComputationType, Computation_T, Computation_baseOfT, Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, ConcurrentReactiveComputationModule } from "../computations.js";
import { EventListenerLike, EventSourceLike } from "../events.js";
import { Function1, SideEffect1 } from "../functions.js";
import { DisposableLike } from "../utils.js";
/**
 * @noInheritDoc
 */
export interface EventSourceComputation extends ComputationType {
    readonly [Computation_baseOfT]?: EventSourceLike<this[typeof Computation_T]>;
    readonly [Computation_pureDeferredOfT]?: never;
    readonly [Computation_deferredWithSideEffectsOfT]?: never;
    readonly [Computation_pureSynchronousOfT]?: never;
    readonly [Computation_synchronousWithSideEffectsOfT]?: never;
    readonly [Computation_multicastOfT]?: EventSourceLike<this[typeof Computation_T]>;
}
export type Computation = EventSourceComputation;
/**
 * @noInheritDoc
 */
export interface EventSourceModule extends ConcurrentReactiveComputationModule<EventSourceComputation> {
    addEventHandler<T>(handler: SideEffect1<T>): Function1<EventSourceLike<T>, DisposableLike>;
    create<T>(setup: SideEffect1<EventListenerLike<T>>): EventSourceLike<T>;
}
export type Signature = EventSourceModule;
export declare const addEventHandler: Signature["addEventHandler"];
export declare const combineLatest: Signature["combineLatest"];
export declare const create: Signature["create"];
export declare const fromPromise: Signature["fromPromise"];
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
export declare const merge: Signature["merge"];
export declare const never: Signature["never"];
export declare const withLatestFrom: Signature["withLatestFrom"];
export declare const zipLatest: Signature["zipLatest"];
