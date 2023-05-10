import { KeyedContainerTypeClass } from "./type-classes.js";
import { Container_T, Container_type, KeyOf, KeyedContainer, KeyedContainer_TKey, ReadonlyObjectMapLike } from "./types.js";
export interface Type extends KeyedContainer {
    readonly [Container_type]?: ReadonlyObjectMapLike<NonNullable<this[typeof KeyedContainer_TKey]>, this[typeof Container_T]>;
    readonly [KeyedContainer_TKey]?: symbol | number | string;
}
export type TKey = KeyOf<Type>;
export interface Signature extends KeyedContainerTypeClass<Type> {
}
export declare const empty: Signature["empty"];
export declare const entries: Signature["entries"];
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
