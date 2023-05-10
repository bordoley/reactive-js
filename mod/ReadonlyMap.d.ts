import { KeyedContainerTypeClass } from "./type-classes.js";
import { Container, Container_T, Container_type, KeyOf, KeyedContainer_TKey } from "./types.js";
export interface Type extends Container {
    readonly [Container_type]?: ReadonlyMap<this[typeof KeyedContainer_TKey], this[typeof Container_T]>;
    readonly [KeyedContainer_TKey]?: unknown;
}
export type TKey = KeyOf<Type>;
export interface Signature extends KeyedContainerTypeClass<Type> {
}
export declare const empty: Signature["empty"];
export declare const entries: Signature["entries"];
export declare const keys: Signature["keys"];
export declare const map: Signature["map"];
export declare const mapWithKey: Signature["mapWithKey"];
