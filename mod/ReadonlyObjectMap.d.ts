import { AssociativeCollectionContainerModule, Container, Container_T, Container_TKey, Container_type, KeyOf, ReadonlyObjectMapLike } from "./types.js";
/**
 * @noInheritDoc
 * @category Container
 */
export interface ReadonlyObjectMapContainer<TKey extends symbol | string = symbol | string> extends Container {
    readonly [Container_type]?: ReadonlyObjectMapLike<NonNullable<this[typeof Container_TKey]>, this[typeof Container_T]>;
    readonly [Container_TKey]?: TKey;
}
export type Type<TKey extends symbol | string = symbol | string> = ReadonlyObjectMapContainer<TKey>;
export type TKeyBase = KeyOf<Type>;
/**
 * @noInheritDoc
 * @category Module
 */
export interface ReadonlyObjectMapModule<TKey extends TKeyBase = TKeyBase> extends AssociativeCollectionContainerModule<Type<TKey>> {
}
export type Signature = ReadonlyObjectMapModule;
/**
 * @category Functor
 */
export declare const CreateModule: <TKey extends TKeyBase>() => ReadonlyObjectMapModule<TKey>;
export declare const empty: Signature["empty"];
export declare const entries: Signature["entries"];
export declare const forEach: Signature["forEach"];
export declare const forEachWithKey: Signature["forEachWithKey"];
export declare const fromDictionary: Signature["fromDictionary"];
export declare const fromEntries: Signature["fromEntries"];
export declare const fromReadonlyMap: Signature["fromReadonlyMap"];
export declare const fromReadonlyObjectMap: Signature["fromReadonlyObjectMap"];
export declare const keep: Signature["keep"];
export declare const keepType: Signature["keepType"];
export declare const keepWithKey: Signature["keepWithKey"];
export declare const keys: Signature["keys"];
export declare const keySet: Signature["keySet"];
export declare const map: Signature["map"];
export declare const mapTo: Signature["mapTo"];
export declare const mapWithKey: Signature["mapWithKey"];
export declare const reduce: Signature["reduce"];
export declare const reduceWithKey: Signature["reduceWithKey"];
export declare const toDictionary: Signature["toDictionary"];
export declare const toReadonlyMap: Signature["toReadonlyMap"];
export declare const toReadonlyObjectMap: Signature["toReadonlyObjectMap"];
export declare const values: Signature["values"];
