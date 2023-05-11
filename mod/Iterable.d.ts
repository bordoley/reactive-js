import { BlockingContainerBaseTypeClass, ConcreteContainerBaseTypeClass, EnumerableContainerBaseTypeClass } from "./type-classes.js";
import { IterableContainer } from "./types.js";
export type Type = IterableContainer;
export interface Signature extends ConcreteContainerBaseTypeClass<Type>, BlockingContainerBaseTypeClass<Type>, EnumerableContainerBaseTypeClass<Type> {
}
export declare const enumerate: Signature["enumerate"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
