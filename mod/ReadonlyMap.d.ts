import { ConcreteAssociativeKeyedContainerModule, Container_T, Container_type, KeyOf, KeyedContainer, KeyedContainer_TKey } from "./types.js";
/**
 * @noInheritDoc
 * @category Container
 */
export interface ReadonlyMapContainer<TKey = unknown> extends KeyedContainer<TKey> {
    readonly [Container_type]?: ReadonlyMap<this[typeof KeyedContainer_TKey], this[typeof Container_T]>;
    readonly [KeyedContainer_TKey]?: TKey;
}
export type Type<TKey = unknown> = ReadonlyMapContainer<TKey>;
export type TKeyBase = KeyOf<Type>;
/**
 * @noInheritDoc
 * @category Module
 */
export interface ReadonlyMapModule<TType extends Type = Type, TKey extends TKeyBase = TKeyBase> extends ConcreteAssociativeKeyedContainerModule<TType, TKey> {
}
export type Signature = ReadonlyMapModule;
/**
 * @category Functor
 */
export declare const CreateModule: <TKey extends {}>() => ReadonlyMapModule<Type<TKey>, TKey>;
export declare const empty: Signature["empty"];
export declare const entries: Signature["entries"];
export declare const fromEntries: Signature["fromEntries"];
export declare const fromReadonlyMap: Signature["fromReadonlyMap"];
export declare const forEach: Signature["forEach"];
export declare const forEachWithKey: Signature["forEachWithKey"];
export declare const fromReadonlyObjectMap: Signature["fromReadonlyObjectMap"];
export declare const keep: Signature["keep"];
export declare const keepType: Signature["keepType"];
export declare const keepWithKey: Signature["keepWithKey"];
export declare const keys: Signature["keys"];
export declare const keySet: Signature["keySet"];
export declare const map: Signature["map"];
export declare const mapWithKey: Signature["mapWithKey"];
export declare const reduce: Signature["reduce"];
export declare const reduceWithKey: Signature["reduceWithKey"];
export declare const toDictionary: Signature["toDictionary"];
export declare const toReadonlyMap: Signature["toReadonlyMap"];
export declare const toReadonlyObjectMap: Signature["toReadonlyObjectMap"];
export declare const values: Signature["values"];
