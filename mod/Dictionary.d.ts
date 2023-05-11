import { AssociativeKeyedContainerTypeClass } from "./type-classes.js";
import { DictionaryContainer, KeyedContainer_TKey } from "./types.js";
export type Type<TKey = unknown> = DictionaryContainer<TKey>;
export type TKeyBase = NonNullable<Type[typeof KeyedContainer_TKey]>;
export interface Signature<TType extends Type = Type, TKey extends TKeyBase = TKeyBase> extends AssociativeKeyedContainerTypeClass<TType, TKey> {
}
export declare const entries: Signature["entries"];
export declare const keys: Signature["keys"];
export declare const values: Signature["values"];
