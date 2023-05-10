import { ConcreteContainerTypeClass, EnumerableContainerTypeClass } from "./type-classes.js";
import { Container, Container_T, Container_type } from "./types.js";
export interface Type extends Container {
    readonly [Container_type]?: Iterable<this[typeof Container_T]>;
}
export interface Signature extends ConcreteContainerTypeClass<Type>, EnumerableContainerTypeClass<Type> {
}
export declare const enumerate: Signature["enumerate"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
