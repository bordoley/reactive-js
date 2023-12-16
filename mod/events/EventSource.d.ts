import { Computation, Computation_T, Computation_type, PureComputationModule } from "../computations.js";
import { EventListenerLike, EventSourceLike } from "../events.js";
import { Function1, SideEffect1 } from "../functions.js";
import { DisposableLike } from "../utils.js";
/**
 * @noInheritDoc
 */
export interface EventSourceComputation extends Computation {
    readonly [Computation_type]?: EventSourceLike<this[typeof Computation_T]>;
}
export type Type = EventSourceComputation;
/**
 * @noInheritDoc
 */
export interface EventSourceModule extends PureComputationModule<EventSourceComputation> {
    addEventHandler<T>(handler: SideEffect1<T>): Function1<EventSourceLike<T>, DisposableLike>;
    create<T>(setup: SideEffect1<EventListenerLike<T>>): EventSourceLike<T>;
    fromIterable<T>(): Function1<Iterable<T>, EventSourceLike<T>>;
    fromPromise<T>(): Function1<Promise<T>, EventSourceLike<T>>;
    merge<T>(fst: EventSourceLike<T>, snd: EventSourceLike<T>, ...tail: readonly EventSourceLike<T>[]): EventSourceLike<T>;
    mergeMany<T>(eventSources: readonly EventSourceLike<T>[]): EventSourceLike<T>;
    mergeWith<T>(snd: EventSourceLike<T>, ...tail: readonly EventSourceLike<T>[]): Function1<EventSourceLike<T>, EventSourceLike<T>>;
    toReadonlyArrayAsync<T>(): Function1<EventSourceLike<T>, Promise<ReadonlyArray<T>>>;
}
export type Signature = EventSourceModule;
export declare const addEventHandler: Signature["addEventHandler"];
export declare const buffer: Signature["buffer"];
export declare const create: Signature["create"];
export declare const decodeWithCharset: Signature["decodeWithCharset"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const fromIterable: Signature["fromIterable"];
export declare const fromPromise: Signature["fromPromise"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
export declare const merge: Signature["merge"];
export declare const mergeMany: Signature["mergeMany"];
export declare const mergeWith: Signature["mergeWith"];
export declare const pairwise: Signature["pairwise"];
export declare const scan: Signature["scan"];
export declare const skipFirst: Signature["skipFirst"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeWhile: Signature["takeWhile"];
export declare const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"];
