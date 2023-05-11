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
export declare const never: Signature["never"];
