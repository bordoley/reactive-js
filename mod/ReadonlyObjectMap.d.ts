import { ConcreteAssociativeKeyedContainerTypeClass } from "./type-classes.js";
import { KeyOf, ReadonlyObjectMapContainer } from "./types.js";
export type Type<TKey extends symbol | number | string = symbol | number | string> = ReadonlyObjectMapContainer<TKey>;
export type TKeyBase = KeyOf<Type>;
export interface ReadonlyObjectMapModule<TType extends Type = Type, TKey extends TKeyBase = TKeyBase> extends ConcreteAssociativeKeyedContainerTypeClass<TType, TKey> {
}
export type Signature = ReadonlyObjectMapModule;
/**
 * @category Functor
 */
export declare const CreateModule: <TKey extends TKeyBase>() => ReadonlyObjectMapModule<Type<TKey>, TKey>;
export declare const empty: Signature["empty"];
export declare const entries: Signature["entries"];
export declare const forEach: Signature["forEach"];
export declare const forEachWithKey: Signature["forEachWithKey"];
export declare const fromEntries: Signature["fromEntries"];
export declare const keep: Signature["keep"];
export declare const keepType: Signature["keepType"];
export declare const keepWithKey: Signature["keepWithKey"];
export declare const keys: Signature["keys"];
export declare const keySet: Signature["keySet"];
export declare const map: Signature["map"];
export declare const mapWithKey: Signature["mapWithKey"];
export declare const reduce: Signature["reduce"];
export declare const reduceWithKey: Signature["reduceWithKey"];
export declare const values: Signature["values"];
