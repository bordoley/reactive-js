import { Function1 } from "./functions.js";
import { PromiseContainer, SharedObservableLike } from "./types.js";
export type Type = PromiseContainer;
export interface PromiseModule {
    toObservable<T>(): Function1<PromiseLike<T>, SharedObservableLike<T>>;
}
export type Signature = PromiseModule;
export declare const toObservable: Signature["toObservable"];
