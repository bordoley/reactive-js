import { ComputationModule, ComputationType, Computation_T, Computation_baseOfT, Computation_multicastOfT, ConcurrentReactiveComputationModule, EventSourceLike, MulticastedComputationModule, ProducerLike } from "../computations.js";
import { Function1, SideEffect1 } from "../functions.js";
import { DisposableLike, EventListenerLike, PauseableLike } from "../utils.js";
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
export interface EventSourceModule extends ComputationModule<EventSourceComputation>, ConcurrentReactiveComputationModule<EventSourceComputation>, MulticastedComputationModule<EventSourceComputation> {
    addEventHandler<T>(handler: SideEffect1<T>): Function1<EventSourceLike<T>, DisposableLike>;
    create<T>(setup: SideEffect1<EventListenerLike<T>>, options?: {
        readonly autoDispose?: boolean;
    }): EventSourceLike<T> & DisposableLike;
    createPauseable<T>(op: Function1<EventSourceLike<boolean> & DisposableLike, EventSourceLike<T>>): PauseableLike & EventSourceLike<T> & DisposableLike;
    toProducer<T>(): Function1<EventSourceLike<T>, ProducerLike<T>>;
}
export type Signature = EventSourceModule;
export declare const addEventHandler: Signature["addEventHandler"];
export declare const combineLatest: Signature["combineLatest"];
export declare const create: Signature["create"];
export declare const createPauseable: Signature["createPauseable"];
export declare const empty: Signature["empty"];
export declare const firstAsync: Signature["firstAsync"];
export declare const forkMerge: Signature["forkMerge"];
export declare const fromAsyncIterable: Signature["fromAsyncIterable"];
export declare const fromObservable: Signature["fromObservable"];
export declare const fromPromise: Signature["fromPromise"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const fromValue: Signature["fromValue"];
export declare const gen: Signature["gen"];
export declare const genWithSideEffects: Signature["genWithSideEffects"];
export declare const keep: Signature["keep"];
export declare const lastAsync: Signature["lastAsync"];
export declare const map: Signature["map"];
export declare const merge: Signature["merge"];
export declare const never: Signature["never"];
export declare const raise: Signature["raise"];
export declare const reduceAsync: Signature["reduceAsync"];
export declare const takeUntil: Signature["takeUntil"];
export declare const toObservable: Signature["toObservable"];
export declare const toProducer: Signature["toProducer"];
export declare const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"];
export declare const withLatestFrom: Signature["withLatestFrom"];
export declare const zipLatest: Signature["zipLatest"];
