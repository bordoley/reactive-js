import { Function1 } from "./functions.js";
import { MulticastObservableLike, StoreContainer, StoreLike, WritableStoreLike } from "./types.js";
export type Type = StoreContainer;
export interface StoreModule {
    create<T>(initialValue: T): WritableStoreLike<T>;
    toObservable<T>(): Function1<StoreLike<T>, MulticastObservableLike<T>>;
}
export type Signature = StoreModule;
export declare const create: Signature["create"];
export declare const toObservable: Signature["toObservable"];
