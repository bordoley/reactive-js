import { Function1 } from "./functions.js";
import { SharedObservableLike, StoreContainer, StoreLike, WritableStoreLike } from "./types.js";
export type Type = StoreContainer;
export interface Signature {
    create<T>(initialValue: T): WritableStoreLike<T>;
    toObservable<T>(): Function1<StoreLike<T>, SharedObservableLike<T>>;
}
export declare const create: Signature["create"];
export declare const toObservable: Signature["toObservable"];
