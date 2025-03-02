import { DeferredComputationModule, DeferredReactiveComputationModule, SynchronousComputationModule } from "../computations.js";
import { SynchronousObservableLike } from "../concurrent.js";
import { ObservableComputationFor } from "./Observable.js";
export interface SynchronousObservableModule extends DeferredComputationModule<ObservableComputationFor<SynchronousObservableLike>>, DeferredReactiveComputationModule<ObservableComputationFor<SynchronousObservableLike>>, SynchronousComputationModule<ObservableComputationFor<SynchronousObservableLike>> {
}
export type Signature = SynchronousObservableModule;
export declare const buffer: Signature["buffer"];
export declare const catchError: Signature["catchError"];
export declare const concatAll: Signature["concatAll"];
export declare const concatMany: Signature["concatMany"];
export declare const decodeWithCharset: Signature["decodeWithCharset"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const empty: Signature["empty"];
export declare const forEach: Signature["forEach"];
export declare const fromIterable: Signature["fromIterable"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const fromValue: Signature["fromValue"];
export declare const generate: Signature["generate"];
export declare const keep: Signature["keep"];
export declare const last: Signature["last"];
export declare const map: Signature["map"];
export declare const pairwise: Signature["pairwise"];
export declare const raise: Signature["raise"];
export declare const reduce: Signature["reduce"];
export declare const repeat: Signature["repeat"];
export declare const retry: Signature["retry"];
export declare const scan: Signature["scan"];
export declare const skipFirst: Signature["skipFirst"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeLast: Signature["takeLast"];
export declare const takeWhile: Signature["takeWhile"];
export declare const throwIfEmpty: Signature["throwIfEmpty"];
export declare const toRunnable: Signature["toRunnable"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
