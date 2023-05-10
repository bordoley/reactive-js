import { AssociativeKeyedContainerTypeClass } from "./type-classes.js";
import { Container_T, Container_type, KeyOf, KeyedContainer, KeyedContainer_TKey } from "./types.js";
export interface Type<TKey = unknown> extends KeyedContainer<TKey> {
    readonly [Container_type]?: ReadonlyMap<this[typeof KeyedContainer_TKey], this[typeof Container_T]>;
    readonly [KeyedContainer_TKey]?: TKey;
}
export type TKeyBase = KeyOf<Type>;
export interface Signature<TType extends Type = Type, TKey extends TKeyBase = TKeyBase> extends AssociativeKeyedContainerTypeClass<TType, TKey> {
}
/**
 * @category Functor
 */
export declare const CreateModule: <TKey extends {}>() => Signature<Type<TKey>, TKey>;
export declare const empty: Signature["empty"];
export declare const entries: Signature["entries"];
export declare const fromEntries: Signature["fromEntries"];
export declare const forEach: Signature["forEach"];
export declare const forEachWithKey: Signature["forEachWithKey"];
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
