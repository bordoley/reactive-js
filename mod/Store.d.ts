import { AsynchronousContainerBaseTypeClass } from "./type-classes.js";
import { StoreContainer, WritableStoreLike } from "./types.js";
export type Type = StoreContainer;
export interface Signature extends AsynchronousContainerBaseTypeClass<Type> {
    create<T>(initialValue: T): WritableStoreLike<T>;
}
export declare const create: Signature["create"];
export declare const toSharedObservable: Signature["toSharedObservable"];
