import { AsyncIterableLike, AsyncIterableWithSideEffectsLike, ComputationModule, ComputationType, Computation_T, Computation_baseOfT, Computation_deferredWithSideEffectsOfT, Computation_pureDeferredOfT, DeferredObservableWithSideEffectsLike, IterableLike, PauseableObservableLike, PureAsyncIterableLike } from "../computations.js";
import { Factory, Function1, Updater } from "../functions.js";
import { BackpressureStrategy, DisposableLike, SchedulerLike } from "../utils.js";
/**
 * @noInheritDoc
 */
export interface AsyncIterableComputation extends ComputationType {
    readonly [Computation_baseOfT]?: AsyncIterableLike<this[typeof Computation_T]>;
    readonly [Computation_deferredWithSideEffectsOfT]?: AsyncIterableWithSideEffectsLike<this[typeof Computation_T]>;
    readonly [Computation_pureDeferredOfT]?: PureAsyncIterableLike<this[typeof Computation_T]>;
}
export type Computation = AsyncIterableComputation;
export interface AsyncIterableModule extends ComputationModule<AsyncIterableComputation> {
    fromReadonlyArray<T>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<ReadonlyArray<T>, PureAsyncIterableLike<T>>;
    fromIterable<T>(): Function1<IterableLike<T>, PureAsyncIterableLike<T>>;
    fromValue<T>(): Function1<T, PureAsyncIterableLike<T>>;
    generate<T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
        readonly count?: number;
    }): PureAsyncIterableLike<T>;
    of<T>(): Function1<AsyncIterable<T>, AsyncIterableWithSideEffectsLike<T>>;
    toObservable<T>(): Function1<AsyncIterableLike<T>, DeferredObservableWithSideEffectsLike<T>>;
    toPauseableObservable<T>(scheduler: SchedulerLike, options?: {
        readonly autoDispose?: boolean;
        readonly replay?: number;
        readonly capacity?: number;
        readonly backpressureStrategy?: BackpressureStrategy;
    }): Function1<AsyncIterableLike<T>, PauseableObservableLike<T> & DisposableLike>;
}
export type Signature = AsyncIterableModule;
export declare const fromIterable: Signature["fromIterable"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const fromValue: Signature["fromValue"];
export declare const generate: Signature["generate"];
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
export declare const of: Signature["of"];
export declare const toObservable: Signature["toObservable"];
export declare const toPauseableObservable: Signature["toPauseableObservable"];
export declare const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"];
