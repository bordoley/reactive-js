import { Container, Container_T, Container_type, DeferredTypeClass, FlowableTypeClass } from "./types.js";
/**
 * @noInheritDoc
 * @category Container
 */
export interface AsyncIterableContainer extends Container {
    readonly [Container_type]?: AsyncIterable<this[typeof Container_T]>;
}
export type Type = AsyncIterableContainer;
/**
 * @noInheritDoc
 */
export interface AsyncIterableModule extends DeferredTypeClass<Type>, FlowableTypeClass<Type> {
}
export type Signature = AsyncIterableModule;
export declare const flow: Signature["flow"];
export declare const repeat: Signature["repeat"];
export declare const retry: Signature["retry"];
export declare const toObservable: Signature["toObservable"];
