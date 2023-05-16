import { AssociativeKeyedContainerTypeClass } from "./type-classes.js";
import { DictionaryContainer, KeyedContainer_TKey } from "./types.js";
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
export declare const values: Signature["values"];
