import { BroadcasterLike, ComputationModule, ComputationTypeLike, ComputationTypeLike_T, ComputationTypeLike_baseOfT, ConcurrentReactiveComputationModule, ReactiveComputationModule } from "../computations.js";
import { Function1, SideEffect1 } from "../functions.js";
import { BackpressureStrategy, DisposableLike, EventListenerLike } from "../utils.js";
/**
 * @noInheritDoc
 */
export interface BroadcasterComputation extends ComputationTypeLike {
    readonly [ComputationTypeLike_baseOfT]?: BroadcasterLike<this[typeof ComputationTypeLike_T]>;
}
export type Computation = BroadcasterComputation;
/**
 * @noInheritDoc
 */
export interface BroadcasterModule extends ComputationModule<BroadcasterComputation>, ReactiveComputationModule<BroadcasterComputation>, ConcurrentReactiveComputationModule<BroadcasterComputation, {
    fromObservable?: {
        autoDispose?: boolean;
    };
    toObservable?: {
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
    };
}> {
    addEventHandler<T>(onNotify: SideEffect1<T>): Function1<BroadcasterLike<T>, DisposableLike>;
    create<T>(setup: SideEffect1<EventListenerLike<T>>, options?: {
        readonly autoDispose?: boolean;
    }): BroadcasterLike<T> & DisposableLike;
    fromPromise<T>(): Function1<Promise<T>, BroadcasterLike<T>>;
}
export type Signature = BroadcasterModule;
export declare const addEventHandler: Signature["addEventHandler"];
export declare const combineLatest: Signature["combineLatest"];
export declare const create: Signature["create"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const encodeUtf8: Signature["encodeUtf8"];
export declare const forkMerge: Signature["forkMerge"];
export declare const fromBroadcaster: Signature["fromBroadcaster"];
export declare const fromObservable: Signature["fromObservable"];
export declare const fromProducer: Signature["fromProducer"];
export declare const fromPromise: Signature["fromPromise"];
export declare const genPure: Signature["genPure"];
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
export declare const merge: Signature["merge"];
export declare const pairwise: Signature["pairwise"];
export declare const scan: Signature["scan"];
export declare const skipFirst: Signature["skipFirst"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeUntil: Signature["takeUntil"];
export declare const takeWhile: Signature["takeWhile"];
export declare const toObservable: Signature["toObservable"];
export declare const toProducer: Signature["toProducer"];
export declare const withLatestFrom: Signature["withLatestFrom"];
export declare const zipLatest: Signature["zipLatest"];
