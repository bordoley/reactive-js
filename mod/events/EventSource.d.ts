import { Computation, Computation_T, Computation_type, PureStatelessComputationModule } from "../computations.js";
import { EventListenerLike, EventSourceLike } from "../events.js";
import { Function1, SideEffect1 } from "../functions.js";
import { DisposableLike } from "../utils.js";
/**
 * @noInheritDoc
 */
export interface EventSourceComputation extends Computation {
    readonly [Computation_type]?: EventSourceLike<this[typeof Computation_T]>;
}
/**
 * @noInheritDoc
 */
export interface EventSourceModule extends PureStatelessComputationModule<EventSourceComputation> {
    addEventHandler<T>(handler: SideEffect1<T>): Function1<EventSourceLike<T>, DisposableLike>;
    create<T>(setup: SideEffect1<EventListenerLike<T>>): EventSourceLike<T>;
    fromPromise<T>(): Function1<Promise<T>, EventSourceLike<T>>;
    merge<T>(fst: EventSourceLike<T>, snd: EventSourceLike<T>, ...tail: readonly EventSourceLike<T>[]): EventSourceLike<T>;
    mergeMany<T>(eventSources: readonly EventSourceLike<T>[]): EventSourceLike<T>;
    mergeWith<T>(snd: EventSourceLike<T>, ...tail: readonly EventSourceLike<T>[]): Function1<EventSourceLike<T>, EventSourceLike<T>>;
}
export type Signature = EventSourceModule;
export declare const addEventHandler: Signature["addEventHandler"];
export declare const create: Signature["create"];
export declare const fromPromise: Signature["fromPromise"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
export declare const merge: Signature["merge"];
export declare const mergeMany: Signature["mergeMany"];
export declare const mergeWith: Signature["mergeWith"];
