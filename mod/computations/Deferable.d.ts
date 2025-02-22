import { Computation, ComputationWithSideEffectsModule, Computation_T, Computation_type, DeferableLike, DeferredComputationModule, PureStatefulComputationModule, PureStatelessComputationModule, SynchronousComputationModule } from "../computations.js";
/**
 * @noInheritDoc
 */
export interface DeferableComputation extends Computation {
    readonly [Computation_type]?: DeferableLike<this[typeof Computation_T]>;
}
export interface DeferableModule extends PureStatelessComputationModule<DeferableComputation>, DeferredComputationModule<DeferableComputation>, PureStatefulComputationModule<DeferableComputation>, ComputationWithSideEffectsModule<DeferableComputation>, SynchronousComputationModule<DeferableComputation> {
}
export type Signature = DeferableModule;
export declare const buffer: Signature["buffer"];
export declare const catchError: Signature["catchError"];
export declare const concat: Signature["concat"];
export declare const concatAll: Signature["concatAll"];
export declare const concatMap: Signature["concatMap"];
export declare const concatMany: Signature["concatMany"];
export declare const concatWith: Signature["concatWith"];
export declare const decodeWithCharset: Signature["decodeWithCharset"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const endWith: Signature["endWith"];
export declare const forEach: Signature["forEach"];
export declare const fromIterable: Signature["fromIterable"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const fromValue: Signature["fromValue"];
export declare const generate: Signature["generate"];
export declare const ignoreElements: Signature["ignoreElements"];
export declare const keep: Signature["keep"];
export declare const last: Signature["last"];
export declare const map: Signature["map"];
export declare const pairwise: Signature["pairwise"];
export declare const reduce: Signature["reduce"];
export declare const repeat: Signature["repeat"];
export declare const retry: Signature["retry"];
export declare const scan: Signature["scan"];
export declare const skipFirst: Signature["skipFirst"];
export declare const startWith: Signature["startWith"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeWhile: Signature["takeWhile"];
export declare const throwIfEmpty: Signature["throwIfEmpty"];
export declare const throws: Signature["throws"];
export declare const toDeferable: Signature["toDeferable"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
