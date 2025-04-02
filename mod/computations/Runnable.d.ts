import { ComputationModule, ComputationTypeLike, ComputationTypeLike_T, ComputationTypeLike_baseOfT, DeferredComputationModule, PureRunnableLike, RunnableLike, SynchronousComputationModule } from "../computations.js";
import { Factory, Function1, Optional, Reducer } from "../functions.js";
/**
 * @noInheritDoc
 */
export interface RunnableComputation extends ComputationTypeLike {
    readonly [ComputationTypeLike_baseOfT]?: RunnableLike<this[typeof ComputationTypeLike_T]>;
}
export type Computation = RunnableComputation;
export interface RunnableModule extends ComputationModule<RunnableComputation>, DeferredComputationModule<RunnableComputation>, SynchronousComputationModule<RunnableComputation> {
    fromReadonlyArray<T>(options?: {
        count?: number;
        start?: number;
    }): Function1<ReadonlyArray<T>, PureRunnableLike<T>>;
    last<T>(): Function1<RunnableLike<T>, Optional<T>>;
    reduce<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): Function1<RunnableLike<T>, TAcc>;
    toReadonlyArray<T>(): Function1<RunnableLike<T>, ReadonlyArray<T>>;
}
export type Signature = RunnableModule;
export declare const buffer: Signature["buffer"];
export declare const catchError: Signature["catchError"];
export declare const concatAll: Signature["concatAll"];
export declare const concat: Signature["concat"];
export declare const decodeWithCharset: Signature["decodeWithCharset"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const encodeUtf8: Signature["encodeUtf8"];
export declare const forEach: Signature["forEach"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const gen: Signature["gen"];
export declare const genPure: Signature["genPure"];
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
export declare const last: Signature["last"];
export declare const pairwise: Signature["pairwise"];
export declare const reduce: Signature["reduce"];
export declare const repeat: Signature["repeat"];
export declare const retry: Signature["retry"];
export declare const scan: Signature["scan"];
export declare const skipFirst: Signature["skipFirst"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeLast: Signature["takeLast"];
export declare const takeWhile: Signature["takeWhile"];
export declare const throwIfEmpty: Signature["throwIfEmpty"];
export declare const toProducer: Signature["toProducer"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
export declare const toRunnable: Signature["toRunnable"];
export declare const withEffect: Signature["withEffect"];
