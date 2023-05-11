import { AsynchronousContainerBaseTypeClass } from "./type-classes.js";
import { Container, Container_T, Container_type } from "./types.js";
export interface Type extends Container {
    readonly [Container_type]?: PromiseLike<this[typeof Container_T]>;
}
export interface Signature extends AsynchronousContainerBaseTypeClass<Type> {
}
export declare const toSharedObservable: Signature["toSharedObservable"];
