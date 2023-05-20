import { Container, Container_T, Container_type, DeferredContainerModule, FlowableContainerModule } from "./types.js";
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
export interface AsyncIterableModule extends Pick<DeferredContainerModule<Type>, "toObservable">, FlowableContainerModule<Type> {
}
export type Signature = AsyncIterableModule;
export declare const flow: Signature["flow"];
export declare const toObservable: Signature["toObservable"];
