import { BlockingContainerTypeClass, ConcreteContainerTypeClass } from "./type-classes.js";
import { Container, Container_T, Container_type, EnumeratorLike } from "./types.js";
export interface Type extends Container {
    readonly [Container_type]?: EnumeratorLike<this[typeof Container_T]>;
}
export interface Signature extends ConcreteContainerTypeClass<Type>, BlockingContainerTypeClass<Type> {
}
export declare const empty: Signature["empty"];
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
export declare const pick: Signature["pick"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
