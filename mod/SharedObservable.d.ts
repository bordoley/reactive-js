import { Factory } from "./functions.js";
import { HigherOrderObservableBaseTypeClass } from "./type-classes.js";
import { DeferredObservableContainer, SharedObservableContainer, SharedObservableLike } from "./types.js";
export type Type = SharedObservableContainer;
export interface Signature extends HigherOrderObservableBaseTypeClass<Type, DeferredObservableContainer> {
    compute<T>(computation: Factory<T>, options?: {
        mode?: "batched" | "combine-latest";
    }): SharedObservableLike<T>;
    never<T>(): SharedObservableLike<T>;
}
export declare const compute: Signature["compute"];
export declare const concatAll: Signature["concatAll"];
export declare const concatMap: Signature["concatMap"];
export declare const exhaust: Signature["exhaust"];
export declare const exhaustMap: Signature["exhaustMap"];
export declare const mergeAll: Signature["mergeAll"];
export declare const mergeMap: Signature["mergeMap"];
export declare const never: Signature["never"];
export declare const switchAll: Signature["switchAll"];
export declare const switchMap: Signature["switchMap"];
