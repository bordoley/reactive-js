import { BroadcasterLike, ComputationModule, ComputationTypeLike, Computation_T, Computation_baseOfT, ConcurrentDeferredComputationModule, ConcurrentReactiveComputationModule, DeferredAsynchronousReactiveComputationModule, ProducerLike, ProducerWithSideEffectsLike, ReactiveComputationModule, SequentialComputationModule, SequentialReactiveComputationModule } from "../computations.js";
import { Function1 } from "../functions.js";
import { ConsumerLike, DisposableLike, PauseableLike } from "../utils.js";
/**
 * @noInheritDoc
 */
export interface ProducerComputation extends ComputationTypeLike {
    readonly [Computation_baseOfT]?: ProducerLike<this[typeof Computation_T]>;
}
export type Computation = ProducerComputation;
export interface ProducerModule extends ComputationModule<ProducerComputation>, ConcurrentDeferredComputationModule<ProducerComputation>, ReactiveComputationModule<ProducerComputation>, SequentialComputationModule<ProducerComputation>, SequentialReactiveComputationModule<ProducerComputation>, DeferredAsynchronousReactiveComputationModule<ProducerComputation>, ConcurrentReactiveComputationModule<ProducerComputation> {
    broadcast<T>(options?: {
        autoDispose?: boolean;
    }): Function1<ProducerLike<T>, PauseableLike & BroadcasterLike<T> & DisposableLike>;
    create<T>(f: (consumer: ConsumerLike<T>) => void): ProducerWithSideEffectsLike<T>;
}
export type Signature = ProducerModule;
export declare const buffer: Signature["buffer"];
export declare const broadcast: Signature["broadcast"];
export declare const catchError: Signature["catchError"];
export declare const combineLatest: Signature["combineLatest"];
export declare const concat: Signature["concat"];
export declare const concatAll: Signature["concatAll"];
export declare const create: Signature["create"];
export declare const decodeWithCharset: Signature["decodeWithCharset"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const encodeUtf8: Signature["encodeUtf8"];
export declare const forkMerge: Signature["forkMerge"];
export declare const fromBroadcaster: Signature["fromBroadcaster"];
export declare const fromObservable: Signature["fromObservable"];
export declare const fromProducer: Signature["fromProducer"];
export declare const forEach: Signature["forEach"];
export declare const gen: Signature["gen"];
export declare const genAsync: Signature["genAsync"];
export declare const genPure: Signature["genPure"];
export declare const genPureAsync: Signature["genPureAsync"];
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
export declare const merge: Signature["merge"];
export declare const mergeAll: Signature["mergeAll"];
export declare const pairwise: Signature["pairwise"];
export declare const repeat: Signature["repeat"];
export declare const retry: Signature["retry"];
export declare const scan: Signature["scan"];
export declare const scanDistinct: Signature["scanDistinct"];
export declare const scanMany: Signature["scanMany"];
export declare const skipFirst: Signature["skipFirst"];
export declare const switchAll: Signature["switchAll"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeLast: Signature["takeLast"];
export declare const takeUntil: Signature["takeUntil"];
export declare const takeWhile: Signature["takeWhile"];
export declare const throwIfEmpty: Signature["throwIfEmpty"];
export declare const toProducer: Signature["toProducer"];
export declare const withBackpressure: Signature["withBackpressure"];
export declare const withEffect: Signature["withEffect"];
export declare const withLatestFrom: Signature["withLatestFrom"];
export declare const zipLatest: Signature["zipLatest"];
