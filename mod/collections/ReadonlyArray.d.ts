import { Container, Container_T, Container_type, IndexedCollectionModule, KeyOf } from "../collections.js";
/**
 * @noInheritDoc
 * @category Container
 */
export interface ReadonlyArrayContainer extends Container<number> {
    readonly [Container_type]?: ReadonlyArray<this[typeof Container_T]>;
}
export type Type = ReadonlyArrayContainer;
export type TKeyBase = KeyOf<Type>;
/**
 * @noInheritDoc
 * @category Module
 */
export interface ReadonlyArrayModule extends IndexedCollectionModule<Type> {
}
export type Signature = ReadonlyArrayModule;
export declare const empty: Signature["empty"];
export declare const entries: Signature["entries"];
export declare const keep: Signature["keep"];
export declare const keys: Signature["keys"];
export declare const keySet: Signature["keySet"];
export declare const map: Signature["map"];
export declare const reduce: Signature["reduce"];
export declare const toDictionary: Signature["toDictionary"];
export declare const toIndexedCollection: Signature["toIndexedCollection"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
export declare const toReadonlyMap: Signature["toReadonlyMap"];
export declare const values: Signature["values"];
