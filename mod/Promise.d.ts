import { Container, Container_T, Container_type, MulticastableTypeClass } from "./types.js";
/**
 * @noInheritDoc
 * @category Container
 */
export interface PromiseContainer extends Container {
    readonly [Container_type]?: Promise<this[typeof Container_T]>;
}
export type Type = PromiseContainer;
/**
 * @noInheritDoc
 */
export interface PromiseModule extends MulticastableTypeClass<Type> {
}
export type Signature = PromiseModule;
export declare const addEventHandler: Signature["addEventHandler"];
export declare const toEventSource: Signature["toEventSource"];
export declare const toObservable: Signature["toObservable"];
export declare const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"];
