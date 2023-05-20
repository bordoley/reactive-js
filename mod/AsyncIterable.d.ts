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
export interface AsyncIterableModule extends Pick<DeferredTypeClass<Type>, "toObservable">, FlowableTypeClass<Type> {
}
export type Signature = AsyncIterableModule;
export declare const flow: Signature["flow"];
export declare const toObservable: Signature["toObservable"];
