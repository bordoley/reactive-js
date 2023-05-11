import { BlockingContainerBaseTypeClass, ConcreteContainerBaseTypeClass, ContainerTypeClass } from "./type-classes.js";
import { EnumeratorContainer } from "./types.js";
export type Type = EnumeratorContainer;
export interface Signature extends ConcreteContainerBaseTypeClass<Type>, BlockingContainerBaseTypeClass<Type>, ContainerTypeClass<Type> {
}
export declare const empty: Signature["empty"];
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
export declare const pick: Signature["pick"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
