import type { DeferredObservableContainer } from "./Observable.js";
import { Container, ContainerModule, Container_T, Container_type, FlowableContainerModule } from "./types.js";
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
 * @category Module
 */
export interface AsyncIterableModule extends Omit<FlowableContainerModule<Type, DeferredObservableContainer>, keyof ContainerModule<Type>> {
}
export type Signature = AsyncIterableModule;
export declare const flow: Signature["flow"];
export declare const toObservable: Signature["toObservable"];
