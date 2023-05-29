import { Container_T, Container_type, EventSourceContainerModule, IndexedContainer } from "./types.js";
/**
 * @noInheritDoc
 * @category Container
 */
export interface PromiseContainer extends IndexedContainer {
    readonly [Container_type]?: Promise<this[typeof Container_T]>;
}
export type Type = PromiseContainer;
/**
 * @noInheritDoc
 * @category Module
 */
export interface PromiseModule extends EventSourceContainerModule<Type> {
}
export type Signature = PromiseModule;
export declare const addEventHandler: Signature["addEventHandler"];
export declare const toEventSource: Signature["toEventSource"];
export declare const toObservable: Signature["toObservable"];
export declare const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"];
