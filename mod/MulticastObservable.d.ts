import { Factory } from "./functions.js";
import { HigherOrderObservableBaseTypeClass } from "./type-classes.js";
import { DeferredObservableContainer, MulticastObservableContainer, MulticastObservableLike } from "./types.js";
export type Type = MulticastObservableContainer;
export interface MulticastObservableModule extends HigherOrderObservableBaseTypeClass<Type, DeferredObservableContainer> {
    compute<T>(computation: Factory<T>, options?: {
        mode?: "batched" | "combine-latest";
    }): MulticastObservableLike<T>;
}
export type Signature = MulticastObservableModule;
export declare const catchError: Signature["catchError"];
export declare const compute: Signature["compute"];
export declare const concatAll: Signature["concatAll"];
export declare const concatMap: Signature["concatMap"];
export declare const exhaust: Signature["exhaust"];
export declare const exhaustMap: Signature["exhaustMap"];
export declare const mergeAll: Signature["mergeAll"];
export declare const mergeMap: Signature["mergeMap"];
export declare const switchAll: Signature["switchAll"];
export declare const switchMap: Signature["switchMap"];
