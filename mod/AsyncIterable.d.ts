import type { DeferredObservableContainer } from "./Observable.js";
import { Container_T, Container_type, FlowableContainerModule, IndexedContainer } from "./types.js";
/**
 * @noInheritDoc
 * @category Container
 */
export interface AsyncIterableContainer extends IndexedContainer {
    readonly [Container_type]?: AsyncIterable<this[typeof Container_T]>;
}
export type Type = AsyncIterableContainer;
/**
 * @noInheritDoc
 * @category Module
 */
export interface AsyncIterableModule extends Pick<FlowableContainerModule<Type, DeferredObservableContainer>, "flow" | "toObservable"> {
}
export type Signature = AsyncIterableModule;
export declare const flow: Signature["flow"];
export declare const toObservable: Signature["toObservable"];
