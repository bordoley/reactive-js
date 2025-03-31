import { ComputationModule, ComputationTypeLike, Computation_T, Computation_baseOfT, InteractiveComputationModule, IterableLike, PureComputationLike, PureIterableLike, PureSynchronousObservableLike, SequentialComputationModule, SynchronousComputationModule, SynchronousObservableWithSideEffectsLike } from "../computations.js";
import { Function1 } from "../functions.js";
/**
 * @noInheritDoc
 */
export interface IterableComputation extends ComputationTypeLike {
    readonly [Computation_baseOfT]?: IterableLike<this[typeof Computation_T]>;
}
export type Computation = IterableComputation;
export interface IterableModule extends ComputationModule<IterableComputation>, SequentialComputationModule<IterableComputation>, SynchronousComputationModule<IterableComputation>, InteractiveComputationModule<IterableComputation> {
    of<T>(): Function1<Iterable<T>, PureIterableLike<T>>;
    toObservable<T>(options?: {
        delay: number;
        delayStart: boolean;
    }): <TIterable extends IterableLike<T>>(iter: TIterable) => TIterable extends PureComputationLike ? PureSynchronousObservableLike<T> : SynchronousObservableWithSideEffectsLike<T>;
}
export type Signature = IterableModule;
export declare const catchError: Signature["catchError"];
export declare const concatAll: Signature["concatAll"];
export declare const concat: Signature["concat"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const encodeUtf8: Signature["encodeUtf8"];
export declare const forEach: Signature["forEach"];
export declare const gen: Signature["gen"];
export declare const genPure: Signature["genPure"];
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
export declare const of: Signature["of"];
export declare const pairwise: Signature["pairwise"];
export declare const repeat: Signature["repeat"];
export declare const retry: Signature["retry"];
export declare const scan: Signature["scan"];
export declare const scanDistinct: Signature["scanDistinct"];
export declare const skipFirst: Signature["skipFirst"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeWhile: Signature["takeWhile"];
export declare const throwIfEmpty: Signature["throwIfEmpty"];
export declare const toObservable: Signature["toObservable"];
export declare const toProducer: Signature["toProducer"];
export declare const toRunnable: Signature["toRunnable"];
export declare const withEffect: Signature["withEffect"];
export declare const zip: Signature["zip"];
