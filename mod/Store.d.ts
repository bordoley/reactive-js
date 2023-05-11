import { AsynchronousContainerBaseTypeClass } from "./type-classes.js";
import { Container, Container_T, Container_type, StoreLike } from "./types.js";
export interface Type extends Container {
    readonly [Container_type]?: StoreLike<this[typeof Container_T]>;
}
export interface Signature extends AsynchronousContainerBaseTypeClass<Type> {
}
