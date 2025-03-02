import { Computation, Computation_T, Computation_ofT, Computation_pureOfT, Computation_withSideEffectsOfT, ConcurrentReactiveComputationModule } from "../computations.js";
import { EventListenerLike, EventSourceLike } from "../events.js";
import { Function1, SideEffect1 } from "../functions.js";
import { DisposableLike } from "../utils.js";
/**
 * @noInheritDoc
 */
export interface EventSourceComputation extends Computation {
    readonly [Computation_ofT]?: EventSourceLike<this[typeof Computation_T]>;
    readonly [Computation_pureOfT]?: EventSourceLike<this[typeof Computation_T]>;
    readonly [Computation_withSideEffectsOfT]?: never;
}
/**
 * @noInheritDoc
 */
export interface EventSourceModule extends ConcurrentReactiveComputationModule<EventSourceComputation> {
    addEventHandler<T>(handler: SideEffect1<T>): Function1<EventSourceLike<T>, DisposableLike>;
    create<T>(setup: SideEffect1<EventListenerLike<T>>): EventSourceLike<T>;
}
export type Signature = EventSourceModule;
export declare const addEventHandler: Signature["addEventHandler"];
export declare const create: Signature["create"];
export declare const fromPromise: Signature["fromPromise"];
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
export declare const mergeMany: Signature["mergeMany"];
