import { AssociativeKeyedContainerTypeClass } from "./type-classes.js";
import { Container_T, Container_type, DictionaryLike, KeyedContainer, KeyedContainer_TKey } from "./types.js";
export interface Type<TKey = unknown> extends KeyedContainer {
    readonly [Container_type]?: DictionaryLike<this[typeof KeyedContainer_TKey], this[typeof Container_T]>;
    readonly [KeyedContainer_TKey]?: TKey;
}
export type TKeyBase = NonNullable<Type[typeof KeyedContainer_TKey]>;
export interface Signature<TType extends Type = Type, TKey extends TKeyBase = TKeyBase> extends AssociativeKeyedContainerTypeClass<TType, TKey> {
}
export declare const empty: Signature["empty"];
export declare const entries: Signature["entries"];
export declare const keys: Signature["keys"];
export declare const values: Signature["values"];
