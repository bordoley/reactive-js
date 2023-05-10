import { ContainerTypeClass, DeferredTypeClass, EnumerableTypeClass, RunnableTypeClass } from "./type-classes.js";
import { Container, Container_T, Container_type } from "./types.js";
export interface Type extends Container {
    readonly [Container_type]?: Iterable<this[typeof Container_T]>;
}
export interface Signature extends ContainerTypeClass<Type>, DeferredTypeClass<Type>, RunnableTypeClass<Type>, EnumerableTypeClass<Type> {
}
export declare const enumerate: Signature["enumerate"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
