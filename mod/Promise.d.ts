import { Function1 } from "./functions.js";
import { MulticastObservableLike, PromiseContainer } from "./types.js";
export type Type = PromiseContainer;
export interface PromiseModule {
    toObservable<T>(): Function1<PromiseLike<T>, MulticastObservableLike<T>>;
}
export type Signature = PromiseModule;
export declare const toObservable: Signature["toObservable"];
