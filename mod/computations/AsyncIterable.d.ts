import { AsyncIterableLike, ComputationModule, ComputationType, Computation_T, Computation_baseOfT, Computation_deferredWithSideEffectsOfT } from "../computations.js";
import { AsyncFunction1, Function1 } from "../functions.js";
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
    toReadonlyArrayAsync<T>(): AsyncFunction1<AsyncIterable<T>, ReadonlyArray<T>>;
}
export type Signature = AsyncIterableModule;
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
export declare const of: Signature["of"];
export declare const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"];
