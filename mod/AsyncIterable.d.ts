import { Function1 } from "./functions.js";
import { Container, Container_T, Container_type, DeferredObservableLike, FlowableTypeClass } from "./types.js";
/**
 * @noInheritDoc
 * @category Container
 */
export interface AsyncIterableContainer extends Container {
    readonly [Container_type]?: AsyncIterable<this[typeof Container_T]>;
}
export type Type = AsyncIterableContainer;
export interface AsyncIterableModule extends FlowableTypeClass<Type> {
    toObservable<T>(): Function1<AsyncIterable<T>, DeferredObservableLike<T>>;
}
export type Signature = AsyncIterableModule;
export declare const flow: Signature["flow"];
export declare const toObservable: Signature["toObservable"];
