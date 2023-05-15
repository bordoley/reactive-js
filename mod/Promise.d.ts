import { AsynchronousContainerBaseTypeClass } from "./type-classes.js";
import { PromiseContainer } from "./types.js";
export type Type = PromiseContainer;
export interface Signature extends AsynchronousContainerBaseTypeClass<Type> {
}
export declare const toObservable: Signature["toObservable"];
