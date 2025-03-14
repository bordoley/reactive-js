import { AsyncIterableLike, ComputationModule, ComputationType, Computation_T, Computation_baseOfT, Computation_multicastOfT, ConcurrentReactiveComputationModule, EventSourceLike, IterableLike } from "../computations.js";
import { Factory, Function1, SideEffect1, Updater } from "../functions.js";
import { DisposableLike, EventListenerLike } from "../utils.js";
/**
 * @noInheritDoc
 */
export interface EventSourceComputation extends ComputationType {
    readonly [Computation_baseOfT]?: EventSourceLike<this[typeof Computation_T]>;
    readonly [Computation_multicastOfT]?: EventSourceLike<this[typeof Computation_T]>;
}
export type Computation = EventSourceComputation;
/**
 * @noInheritDoc
 */
export interface EventSourceModule extends ComputationModule<EventSourceComputation>, ConcurrentReactiveComputationModule<EventSourceComputation> {
    addEventHandler<T>(handler: SideEffect1<T>): Function1<EventSourceLike<T>, DisposableLike>;
    create<T>(setup: SideEffect1<EventListenerLike<T>>, options?: {
        readonly autoDispose?: boolean;
    }): EventSourceLike<T> & DisposableLike;
    empty<T>(): EventSourceLike<T> & DisposableLike;
    fromAsyncIterable<T>(): Function1<AsyncIterableLike<T>, EventSourceLike<T> & DisposableLike>;
    fromIterable<T>(): Function1<IterableLike<T>, EventSourceLike<T> & DisposableLike>;
    fromReadonlyArray<T>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<readonly T[], EventSourceLike<T> & DisposableLike>;
    fromValue<T>(): Function1<T, EventSourceLike<T> & DisposableLike>;
    generate<T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
        readonly count?: number;
    }): EventSourceLike<T> & DisposableLike;
    raise<T>(options?: {
        readonly raise?: Factory<unknown>;
    }): EventSourceLike<T> & DisposableLike;
}
export type Signature = EventSourceModule;
export declare const addEventHandler: Signature["addEventHandler"];
export declare const create: Signature["create"];
export declare const empty: Signature["empty"];
export declare const firstAsync: Signature["firstAsync"];
export declare const fromAsyncIterable: Signature["fromAsyncIterable"];
export declare const fromIterable: Signature["fromIterable"];
export declare const fromObservable: Signature["fromObservable"];
export declare const fromPromise: Signature["fromPromise"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const fromValue: Signature["fromValue"];
export declare const generate: Signature["generate"];
export declare const keep: Signature["keep"];
export declare const lastAsync: Signature["lastAsync"];
export declare const map: Signature["map"];
export declare const merge: Signature["merge"];
export declare const never: Signature["never"];
export declare const raise: Signature["raise"];
export declare const reduceAsync: Signature["reduceAsync"];
export declare const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"];
export declare const withLatestFrom: Signature["withLatestFrom"];
