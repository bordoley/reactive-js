import { Function1 } from "./functions.js";
import { PromiseContainer, SharedObservableLike } from "./types.js";
export type Type = PromiseContainer;
export interface Signature {
    toObservable<T>(): Function1<PromiseLike<T>, SharedObservableLike<T>>;
}
export declare const toObservable: Signature["toObservable"];
