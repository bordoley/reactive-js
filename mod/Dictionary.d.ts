import { KeyedContainerTypeClass } from "./type-classes.js";
import { Container_T, Container_type, DictionaryLike, KeyOf, KeyedContainer, KeyedContainer_TKey } from "./types.js";
export interface Type extends KeyedContainer {
    readonly [Container_type]?: DictionaryLike<this[typeof KeyedContainer_TKey], this[typeof Container_T]>;
    readonly [KeyedContainer_TKey]?: unknown;
}
export type TKey = KeyOf<Type>;
export interface Signature extends KeyedContainerTypeClass<Type> {
}
export declare const empty: Signature["empty"];
export declare const entries: Signature["entries"];
export declare const keys: Signature["keys"];
export declare const values: Signature["values"];
