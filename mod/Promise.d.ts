import { Container, Container_T, Container_type, MulticastableTypeClass } from "./types.js";
/**
 * @noInheritDoc
 * @category Container
 */
export interface PromiseContainer extends Container {
    readonly [Container_type]?: PromiseLike<this[typeof Container_T]>;
}
export type Type = PromiseContainer;
export interface PromiseModule extends MulticastableTypeClass<Type> {
}
export type Signature = PromiseModule;
export declare const toObservable: Signature["toObservable"];
