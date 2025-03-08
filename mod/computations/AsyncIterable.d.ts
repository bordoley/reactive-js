import { AsyncIterableLike, ComputationModule, ComputationType, Computation_T, Computation_baseOfT, Computation_deferredWithSideEffectsOfT, DeferredObservableWithSideEffectsLike, PauseableObservableLike } from "../computations.js";
import { AsyncFunction1, Function1 } from "../functions.js";
import { BackpressureStrategy, DisposableLike, SchedulerLike } from "../utils.js";
/**
 * @noInheritDoc
 */
export interface AsyncIterableComputation extends ComputationType {
    readonly [Computation_baseOfT]?: AsyncIterableLike<this[typeof Computation_T]>;
    readonly [Computation_deferredWithSideEffectsOfT]?: AsyncIterableLike<this[typeof Computation_T]>;
}
export type Computation = AsyncIterableComputation;
export interface AsyncIterableModule extends ComputationModule<AsyncIterableComputation> {
    fromReadonlyArray<T>(): Function1<ReadonlyArray<T>, AsyncIterableLike<T>>;
    of<T>(): Function1<AsyncIterable<T>, AsyncIterableLike<T>>;
    toObservable<T>(): Function1<AsyncIterable<T>, DeferredObservableWithSideEffectsLike<T>>;
    toPauseableObservable<T>(scheduler: SchedulerLike, options?: {
        readonly autoDispose?: boolean;
        readonly replay?: number;
        readonly capacity?: number;
        readonly backpressureStrategy?: BackpressureStrategy;
    }): Function1<AsyncIterableLike<T>, PauseableObservableLike<T> & DisposableLike>;
    toReadonlyArrayAsync<T>(): AsyncFunction1<AsyncIterable<T>, ReadonlyArray<T>>;
}
export type Signature = AsyncIterableModule;
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
export declare const of: Signature["of"];
export declare const toObservable: Signature["toObservable"];
export declare const toPauseableObservable: Signature["toPauseableObservable"];
export declare const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"];
