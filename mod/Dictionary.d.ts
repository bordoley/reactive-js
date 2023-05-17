import { AssociativeKeyedContainerTypeClass } from "./type-classes.js";
import { Container_T, Container_type, DictionaryLike, KeyedContainer, KeyedContainer_TKey } from "./types.js";
/**
 * @noInheritDoc
 * @category Container
 */
export interface DictionaryContainer<TKey = unknown> extends KeyedContainer {
    readonly [Container_type]?: DictionaryLike<this[typeof KeyedContainer_TKey], this[typeof Container_T]>;
    readonly [KeyedContainer_TKey]?: TKey;
}
export type Type<TKey = unknown> = DictionaryContainer<TKey>;
export type TKeyBase = NonNullable<Type[typeof KeyedContainer_TKey]>;
export interface DictionaryModule<TType extends Type = Type, TKey extends TKeyBase = TKeyBase> extends AssociativeKeyedContainerTypeClass<TType, TKey> {
}
export type Signature = DictionaryModule;
/**
 * @category Functor
 */
export declare const CreateModule: <TKey extends {}>() => DictionaryModule<Type<TKey>, TKey>;
export declare const entries: Signature["entries"];
export declare const forEach: Signature["forEach"];
export declare const forEachWithKey: Signature["forEachWithKey"];
export declare const fromReadonlyMap: Signature["fromReadonlyMap"];
export declare const fromReadonlyObjectMap: Signature["fromReadonlyObjectMap"];
export declare const keys: Signature["keys"];
export declare const keySet: Signature["keySet"];
export declare const reduce: Signature["reduce"];
export declare const reduceWithKey: Signature["reduceWithKey"];
export declare const toDictionary: Signature["toDictionary"];
export declare const toReadonlyMap: Signature["toReadonlyMap"];
export declare const toReadonlyObjectMap: Signature["toReadonlyObjectMap"];
export declare const values: Signature["values"];
