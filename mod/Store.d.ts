import { AsynchronousContainerBaseTypeClass } from "./type-classes.js";
import { StoreContainer } from "./types.js";
export type Type = StoreContainer;
export interface Signature extends AsynchronousContainerBaseTypeClass<Type> {
}
export declare const toSharedObservable: Signature["toSharedObservable"];
